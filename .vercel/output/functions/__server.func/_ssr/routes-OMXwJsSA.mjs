import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track } from "./cart-F8waowpG.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, S as ClipboardCheck, d as ShieldCheck, i as Truck, o as Star, s as Sparkles, v as Leaf, w as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-uohJH0YK.mjs";
import { n as products } from "./products-CY-qMdL3.mjs";
import { t as ProductCard } from "./ProductCard-N5J6FZph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-OMXwJsSA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	(0, import_react.useEffect)(() => {
		track("page_view", { page: "home" });
	}, []);
	const featured = products.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-gradient-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center animate-fade-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Trusted by 200,000+ customers"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
								children: [
									"Start Your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gradient-primary bg-clip-text text-transparent",
										children: "Personalized"
									}),
									" Health Journey"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg text-lg text-muted-foreground",
								children: "Answer 11 quick questions and get a science-backed supplement plan tailored to your body, goals, and lifestyle — delivered to your door."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quiz",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										id: "hero_cta",
										"data-event": "lead",
										size: "lg",
										className: "rounded-full bg-gradient-primary px-7 text-base shadow-glow",
										children: ["Take Free Health Assessment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										id: "hero_shop",
										"data-event": "button_click",
										size: "lg",
										variant: "outline",
										className: "rounded-full px-7 text-base",
										children: "Shop Products"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex -space-x-3",
									children: [
										1,
										2,
										3,
										4
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-accent/40" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [[...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-accent text-accent" }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-sm font-semibold",
										children: "4.9/5"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "from 12,400+ reviews"
								})] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative animate-scale-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-8 -top-8 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-8 -right-8 h-72 w-72 rounded-full bg-accent/30 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative grid grid-cols-2 gap-4",
								children: products.slice(0, 4).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `overflow-hidden rounded-3xl bg-card shadow-card ${i % 2 ? "mt-8" : ""} animate-float`,
									style: { animationDelay: `${i * .3}s` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.product_name,
										className: "h-44 w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: p.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "line-clamp-1 text-sm font-semibold",
											children: p.product_name
										})]
									})]
								}, p.product_id))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: Leaf,
							t: "Clean Ingredients",
							d: "Third-party tested, no fillers, no fluff."
						},
						{
							icon: ShieldCheck,
							t: "GMP Certified",
							d: "Manufactured in FDA-registered facilities."
						},
						{
							icon: Truck,
							t: "Free Shipping",
							d: "Free 2-day delivery on orders over $49."
						},
						{
							icon: Sparkles,
							t: "Personalized",
							d: "Recommendations made for your body & goals."
						}
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-gradient-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-bold",
								children: b.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: b.d
							})
						]
					}, b.t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/40 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-extrabold sm:text-4xl",
							children: "How It Works"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Three simple steps to a healthier you."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: [
							{
								n: "01",
								icon: ClipboardCheck,
								t: "Take the Quiz",
								d: "Answer 11 questions about your health goals."
							},
							{
								n: "02",
								icon: Sparkles,
								t: "Get Your Plan",
								d: "Receive a personalized supplement recommendation."
							},
							{
								n: "03",
								icon: Truck,
								t: "Delivered Monthly",
								d: "Your plan arrives at your door, no hassle."
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-3xl bg-card p-8 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-6 top-6 font-display text-4xl font-extrabold text-primary/15",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-bold",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.d
								})
							]
						}, s.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-extrabold sm:text-4xl",
						children: "Featured Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Best sellers loved by our community."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:flex",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.product_id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-gradient-hero py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-center font-display text-3xl font-extrabold sm:text-4xl",
						children: "Real Stories, Real Results"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: [
							{
								n: "Sarah M.",
								t: "Lost 15 lbs in 3 months",
								q: "The personalized plan made all the difference. I finally feel energized every day."
							},
							{
								n: "Jason K.",
								t: "Gained 8 lbs of muscle",
								q: "Best protein I've ever taken. Mixes perfectly and tastes amazing."
							},
							{
								n: "Priya R.",
								t: "Better sleep & skin",
								q: "The collagen and multivitamin combo transformed my mornings."
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-card p-7 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-accent text-accent" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-base leading-relaxed",
									children: [
										"\"",
										r.q,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: r.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-primary",
										children: r.t
									})]
								})
							]
						}, r.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-3xl px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-display text-3xl font-extrabold sm:text-4xl",
					children: "FAQs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-4",
					children: [
						{
							q: "How does the health quiz work?",
							a: "Our 11-question assessment takes 2 minutes and generates a recommendation based on your goals, lifestyle, and biology."
						},
						{
							q: "Are your products third-party tested?",
							a: "Yes. Every batch is tested for purity, potency, and contaminants by independent labs."
						},
						{
							q: "Can I cancel my subscription?",
							a: "Absolutely. You can pause, swap, or cancel anytime from your account dashboard."
						},
						{
							q: "Where do you ship?",
							a: "We ship across the United States with free 2-day delivery on orders over $49."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group rounded-2xl border border-border bg-card p-5 shadow-card open:shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer items-center justify-between font-semibold",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 transition-transform group-open:rotate-90" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: f.a
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Landing as component };
