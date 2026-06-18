import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/track";
import { toast } from "sonner";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Free Health Quiz — VitaCore" },
      { name: "description", content: "Take our free 2-minute health assessment for personalized supplement recommendations." },
    ],
  }),
  component: QuizPage,
});

type Answers = Record<string, any>;

const STEPS = [
  { id: "gender", label: "What's your gender?", type: "choice", options: ["Male", "Female"] },
  { id: "age", label: "What's your age?", type: "choice", options: ["18-24", "25-34", "35-44", "45-54", "55+"] },
  { id: "height", label: "What's your height?", type: "height" },
  { id: "weight", label: "Current weight (lbs)", type: "number" },
  { id: "goal_weight", label: "Expected weight (lbs)", type: "number" },
  { id: "activity", label: "Activity level", type: "choice", options: ["Sedentary", "Light", "Moderate", "Active", "Athlete"] },
  { id: "primary_goal", label: "Primary goal", type: "choice", options: ["Lose Weight", "Build Muscle", "Improve Energy", "Better Sleep", "Improve Immunity", "General Fitness"] },
  { id: "exercise", label: "Do you exercise?", type: "choice", options: ["Yes", "No", "Sometimes"] },
  { id: "water", label: "Glasses of water daily?", type: "number" },
  { id: "state", label: "Your state", type: "select", options: ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan", "Other"] },
  { id: "contact", label: "Your details", type: "contact" },
] as const;

function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const navigate = useNavigate();
  const total = STEPS.length;
  const current = STEPS[step];
  const progress = ((step + 1) / total) * 100;

  useEffect(() => {
    track("page_view", { page: "quiz" });
    track("quiz_started");
  }, []);

  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const setAns = (v: any) => setAnswers((a) => ({ ...a, [current.id]: v }));

  const canContinue = (() => {
    const v = answers[current.id];
    if (current.type === "contact") {
      return v?.firstName && v?.lastName && v?.email && v?.phone && v?.agree;
    }
    if (current.type === "height") return v?.feet && v?.inches !== undefined;
    return v !== undefined && v !== "";
  })();

  const submit = () => {
    track("lead", { source: "health_quiz" });
    track("quiz_completed", { answers });
    toast.success("Your personalized plan is ready!");
    navigate({ to: "/products" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-primary">Step {step + 1} of {total}</span>
            <span className="text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div key={step} className="rounded-3xl border border-border bg-card p-6 shadow-card animate-fade-in sm:p-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{current.label}</h2>

          <div className="mt-8">
            {current.type === "choice" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {current.options!.map((opt) => {
                  const active = answers[current.id] === opt;
                  return (
                    <button
                      key={opt}
                      id={`quiz_${current.id}_${opt.toLowerCase().replace(/\s/g, "_")}`}
                      onClick={() => setAns(opt)}
                      className={`flex items-center justify-between rounded-2xl border-2 p-4 text-left font-medium transition-all ${
                        active
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span>{opt}</span>
                      {active && (
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-4 w-4" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {current.type === "number" && (
              <Input
                id={`quiz_${current.id}`}
                type="number"
                value={answers[current.id] ?? ""}
                onChange={(e) => setAns(e.target.value)}
                placeholder="Enter number"
                className="h-14 rounded-2xl text-lg"
              />
            )}

            {current.type === "height" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs uppercase text-muted-foreground">Feet</Label>
                  <Input
                    id="quiz_height_feet"
                    type="number"
                    value={answers.height?.feet ?? ""}
                    onChange={(e) => setAns({ ...answers.height, feet: e.target.value })}
                    className="h-14 rounded-2xl text-lg"
                    placeholder="5"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase text-muted-foreground">Inches</Label>
                  <Input
                    id="quiz_height_inches"
                    type="number"
                    value={answers.height?.inches ?? ""}
                    onChange={(e) => setAns({ ...answers.height, inches: e.target.value })}
                    className="h-14 rounded-2xl text-lg"
                    placeholder="8"
                  />
                </div>
              </div>
            )}

            {current.type === "select" && (
              <select
                id={`quiz_${current.id}`}
                value={answers[current.id] ?? ""}
                onChange={(e) => setAns(e.target.value)}
                className="h-14 w-full rounded-2xl border-2 border-border bg-card px-4 text-lg"
              >
                <option value="">Select your state</option>
                {current.options!.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            )}

            {current.type === "contact" && (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>First Name</Label>
                    <Input
                      id="quiz_first_name"
                      value={answers.contact?.firstName ?? ""}
                      onChange={(e) => setAns({ ...answers.contact, firstName: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input
                      id="quiz_last_name"
                      value={answers.contact?.lastName ?? ""}
                      onChange={(e) => setAns({ ...answers.contact, lastName: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    id="quiz_email"
                    type="email"
                    value={answers.contact?.email ?? ""}
                    onChange={(e) => setAns({ ...answers.contact, email: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input
                    id="quiz_phone"
                    type="tel"
                    value={answers.contact?.phone ?? ""}
                    onChange={(e) => setAns({ ...answers.contact, phone: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    id="quiz_agree"
                    type="checkbox"
                    checked={!!answers.contact?.agree}
                    onChange={(e) => setAns({ ...answers.contact, agree: e.target.checked })}
                    className="mt-1 h-5 w-5 rounded"
                  />
                  <span>I agree to receive personalized health recommendations and marketing communications.</span>
                </label>
              </div>
            )}
          </div>

          <div className="mt-10 flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              onClick={back}
              disabled={step === 0}
              className="rounded-full"
              id="quiz_back"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
            {step < total - 1 ? (
              <Button
                id="quiz_next"
                onClick={next}
                disabled={!canContinue}
                size="lg"
                className="rounded-full bg-gradient-primary px-8 shadow-soft"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                id="quiz_submit"
                data-event="lead"
                onClick={submit}
                disabled={!canContinue}
                size="lg"
                className="rounded-full bg-gradient-primary px-8 shadow-glow"
              >
                Get My Plan <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
