import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, ChevronRight, ClipboardCheck, Leaf, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { track } from "@/lib/track";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VitaCore — Personalized Premium Health Supplements" },
      {
        name: "description",
        content:
          "Start your personalized health journey. Take our free 2-minute assessment and get supplement recommendations made for you.",
      },
      { property: "og:title", content: "VitaCore — Personalized Health Supplements" },
      {
        property: "og:description",
        content: "Premium protein, vitamins, collagen & more. Take the free health quiz.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useEffect(() => {
    track("page_view", { page: "home" });
  }, []);

  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center animate-fade-in">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Trusted by 200,000+ customers
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Personalized</span> Health Journey
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Answer 11 quick questions and get a science-backed supplement plan tailored to your body,
              goals, and lifestyle — delivered to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quiz">
                <Button
                  id="hero_cta"
                  data-event="lead"
                  size="lg"
                  className="rounded-full bg-gradient-primary px-7 text-base shadow-glow"
                >
                  Take Free Health Assessment <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  id="hero_shop"
                  data-event="button_click"
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 text-base"
                >
                  Shop Products
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-accent/40"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-1 text-sm font-semibold">4.9/5</span>
                </div>
                <div className="text-xs text-muted-foreground">from 12,400+ reviews</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -left-8 -top-8 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {products.slice(0, 4).map((p, i) => (
                <div
                  key={p.product_id}
                  className={`overflow-hidden rounded-3xl bg-card shadow-card ${i % 2 ? "mt-8" : ""} animate-float`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <img src={p.image} alt={p.product_name} className="h-44 w-full object-cover" />
                  <div className="p-3">
                    <div className="text-xs text-muted-foreground">{p.category}</div>
                    <div className="line-clamp-1 text-sm font-semibold">{p.product_name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Leaf, t: "Clean Ingredients", d: "Third-party tested, no fillers, no fluff." },
            { icon: ShieldCheck, t: "GMP Certified", d: "Manufactured in FDA-registered facilities." },
            { icon: Truck, t: "Free Shipping", d: "Free 2-day delivery on orders over $49." },
            { icon: Sparkles, t: "Personalized", d: "Recommendations made for your body & goals." },
          ].map((b) => (
            <div key={b.t} className="rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-muted-foreground">Three simple steps to a healthier you.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", icon: ClipboardCheck, t: "Take the Quiz", d: "Answer 11 questions about your health goals." },
              { n: "02", icon: Sparkles, t: "Get Your Plan", d: "Receive a personalized supplement recommendation." },
              { n: "03", icon: Truck, t: "Delivered Monthly", d: "Your plan arrives at your door, no hassle." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-3xl bg-card p-8 shadow-card">
                <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-primary/15">
                  {s.n}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">Best sellers loved by our community.</p>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:flex"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.product_id} product={p} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
            Real Stories, Real Results
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Sarah M.", t: "Lost 15 lbs in 3 months", q: "The personalized plan made all the difference. I finally feel energized every day." },
              { n: "Jason K.", t: "Gained 8 lbs of muscle", q: "Best protein I've ever taken. Mixes perfectly and tastes amazing." },
              { n: "Priya R.", t: "Better sleep & skin", q: "The collagen and multivitamin combo transformed my mornings." },
            ].map((r) => (
              <div key={r.n} className="rounded-3xl bg-card p-7 shadow-card">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed">"{r.q}"</p>
                <div className="mt-5">
                  <div className="font-semibold">{r.n}</div>
                  <div className="text-sm text-primary">{r.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">FAQs</h2>
        <div className="mt-10 space-y-4">
          {[
            { q: "How does the health quiz work?", a: "Our 11-question assessment takes 2 minutes and generates a recommendation based on your goals, lifestyle, and biology." },
            { q: "Are your products third-party tested?", a: "Yes. Every batch is tested for purity, potency, and contaminants by independent labs." },
            { q: "Can I cancel my subscription?", a: "Absolutely. You can pause, swap, or cancel anytime from your account dashboard." },
            { q: "Where do you ship?", a: "We ship across the United States with free 2-day delivery on orders over $49." },
          ].map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card p-5 shadow-card open:shadow-soft"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                {f.q}
                <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
