import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track } from "./cart-F8waowpG.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowLeft, E as ArrowRight, T as Check } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-uohJH0YK.mjs";
import { t as Input } from "./input-B8Sh0V8r.mjs";
import { t as Label } from "./label-C-b0xHG_.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-Bq4S7WE_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: "gender",
		label: "What's your gender?",
		type: "choice",
		options: ["Male", "Female"]
	},
	{
		id: "age",
		label: "What's your age?",
		type: "choice",
		options: [
			"18-24",
			"25-34",
			"35-44",
			"45-54",
			"55+"
		]
	},
	{
		id: "height",
		label: "What's your height?",
		type: "height"
	},
	{
		id: "weight",
		label: "Current weight (lbs)",
		type: "number"
	},
	{
		id: "goal_weight",
		label: "Expected weight (lbs)",
		type: "number"
	},
	{
		id: "activity",
		label: "Activity level",
		type: "choice",
		options: [
			"Sedentary",
			"Light",
			"Moderate",
			"Active",
			"Athlete"
		]
	},
	{
		id: "primary_goal",
		label: "Primary goal",
		type: "choice",
		options: [
			"Lose Weight",
			"Build Muscle",
			"Improve Energy",
			"Better Sleep",
			"Improve Immunity",
			"General Fitness"
		]
	},
	{
		id: "exercise",
		label: "Do you exercise?",
		type: "choice",
		options: [
			"Yes",
			"No",
			"Sometimes"
		]
	},
	{
		id: "water",
		label: "Glasses of water daily?",
		type: "number"
	},
	{
		id: "state",
		label: "Your state",
		type: "select",
		options: [
			"California",
			"Texas",
			"Florida",
			"New York",
			"Illinois",
			"Pennsylvania",
			"Ohio",
			"Georgia",
			"North Carolina",
			"Michigan",
			"Other"
		]
	},
	{
		id: "contact",
		label: "Your details",
		type: "contact"
	}
];
function QuizPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const navigate = useNavigate();
	const total = STEPS.length;
	const current = STEPS[step];
	const progress = (step + 1) / total * 100;
	(0, import_react.useEffect)(() => {
		track("page_view", { page: "quiz" });
		track("quiz_started");
	}, []);
	const next = () => setStep((s) => Math.min(s + 1, total - 1));
	const back = () => setStep((s) => Math.max(s - 1, 0));
	const setAns = (v) => setAnswers((a) => ({
		...a,
		[current.id]: v
	}));
	const canContinue = (() => {
		const v = answers[current.id];
		if (current.type === "contact") return v?.firstName && v?.lastName && v?.email && v?.phone && v?.agree;
		if (current.type === "height") return v?.feet && v?.inches !== void 0;
		return v !== void 0 && v !== "";
	})();
	const submit = () => {
		track("lead", { source: "health_quiz" });
		track("quiz_completed", { answers });
		toast.success("Your personalized plan is ready!");
		navigate({ to: "/products" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl px-6 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-primary",
							children: [
								"Step ",
								step + 1,
								" of ",
								total
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [Math.round(progress), "% complete"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-gradient-primary transition-all duration-500",
							style: { width: `${progress}%` }
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-card animate-fade-in sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold sm:text-3xl",
							children: current.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [
								current.type === "choice" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: current.options.map((opt) => {
										const active = answers[current.id] === opt;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											id: `quiz_${current.id}_${opt.toLowerCase().replace(/\s/g, "_")}`,
											onClick: () => setAns(opt),
											className: `flex items-center justify-between rounded-2xl border-2 p-4 text-left font-medium transition-all ${active ? "border-primary bg-primary/5 shadow-soft" : "border-border hover:border-primary/50"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt }), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
											})]
										}, opt);
									})
								}),
								current.type === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: `quiz_${current.id}`,
									type: "number",
									value: answers[current.id] ?? "",
									onChange: (e) => setAns(e.target.value),
									placeholder: "Enter number",
									className: "h-14 rounded-2xl text-lg"
								}),
								current.type === "height" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs uppercase text-muted-foreground",
										children: "Feet"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "quiz_height_feet",
										type: "number",
										value: answers.height?.feet ?? "",
										onChange: (e) => setAns({
											...answers.height,
											feet: e.target.value
										}),
										className: "h-14 rounded-2xl text-lg",
										placeholder: "5"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs uppercase text-muted-foreground",
										children: "Inches"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "quiz_height_inches",
										type: "number",
										value: answers.height?.inches ?? "",
										onChange: (e) => setAns({
											...answers.height,
											inches: e.target.value
										}),
										className: "h-14 rounded-2xl text-lg",
										placeholder: "8"
									})] })]
								}),
								current.type === "select" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: `quiz_${current.id}`,
									value: answers[current.id] ?? "",
									onChange: (e) => setAns(e.target.value),
									className: "h-14 w-full rounded-2xl border-2 border-border bg-card px-4 text-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select your state"
									}), current.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
								}),
								current.type === "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "First Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "quiz_first_name",
												value: answers.contact?.firstName ?? "",
												onChange: (e) => setAns({
													...answers.contact,
													firstName: e.target.value
												}),
												className: "h-12 rounded-xl"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Last Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "quiz_last_name",
												value: answers.contact?.lastName ?? "",
												onChange: (e) => setAns({
													...answers.contact,
													lastName: e.target.value
												}),
												className: "h-12 rounded-xl"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "quiz_email",
											type: "email",
											value: answers.contact?.email ?? "",
											onChange: (e) => setAns({
												...answers.contact,
												email: e.target.value
											}),
											className: "h-12 rounded-xl"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "quiz_phone",
											type: "tel",
											value: answers.contact?.phone ?? "",
											onChange: (e) => setAns({
												...answers.contact,
												phone: e.target.value
											}),
											className: "h-12 rounded-xl"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-start gap-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "quiz_agree",
												type: "checkbox",
												checked: !!answers.contact?.agree,
												onChange: (e) => setAns({
													...answers.contact,
													agree: e.target.checked
												}),
												className: "mt-1 h-5 w-5 rounded"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree to receive personalized health recommendations and marketing communications." })]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: back,
								disabled: step === 0,
								className: "rounded-full",
								id: "quiz_back",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
							}), step < total - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								id: "quiz_next",
								onClick: next,
								disabled: !canContinue,
								size: "lg",
								className: "rounded-full bg-gradient-primary px-8 shadow-soft",
								children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								id: "quiz_submit",
								"data-event": "lead",
								onClick: submit,
								disabled: !canContinue,
								size: "lg",
								className: "rounded-full bg-gradient-primary px-8 shadow-glow",
								children: ["Get My Plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}, step)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { QuizPage as component };
