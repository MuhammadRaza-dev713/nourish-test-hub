import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track, r as useCart } from "./cart-F8waowpG.mjs";
import { _ as useParams, g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Check, h as Minus, i as Truck, o as Star, p as Plus, u as Shield } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-uohJH0YK.mjs";
import { n as products, t as getProduct } from "./products-CY-qMdL3.mjs";
import { t as ProductCard } from "./ProductCard-N5J6FZph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._id--mwUxIq8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { id } = useParams({ from: "/products/$id" });
	const product = getProduct(id);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("description");
	const { add } = useCart();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (product) track("view_content", {
			product_id: product.product_id,
			name: product.product_name
		});
	}, [product]);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-6 py-24 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Product not found"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					className: "mt-4 inline-block text-primary underline",
					children: "Back to shop"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
	const related = products.filter((p) => p.category === product.category && p.product_id !== product.product_id).slice(0, 4);
	const discount = Math.round((product.old_price - product.price) / product.old_price * 100);
	const buyNow = () => {
		add(product, qty);
		track("buy_now", { product_id: product.product_id });
		navigate({ to: "/checkout" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl bg-secondary/30 shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.product_name,
								className: "aspect-square w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-4 gap-3",
							children: [
								0,
								1,
								2,
								3
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "overflow-hidden rounded-2xl border border-border bg-secondary/30 hover:border-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: "",
									className: "aspect-square w-full object-cover"
								})
							}, i))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium uppercase tracking-wide text-primary",
								children: product.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-extrabold sm:text-4xl",
								children: product.product_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex",
										children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted"}` }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										children: product.rating
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [
											"(",
											product.reviews,
											" reviews)"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-baseline gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-4xl font-extrabold",
										children: ["$", product.price]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-lg text-muted-foreground line-through",
										children: ["$", product.old_price]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-bold text-destructive",
										children: [
											"Save ",
											discount,
											"%"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground",
								children: product.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-success" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "In stock"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"— ",
											product.stock,
											" units available"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 rounded-full border border-border p-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty((q) => Math.max(1, q - 1)),
											className: "grid h-9 w-9 place-items-center rounded-full hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											id: "product_qty",
											className: "w-10 text-center font-semibold",
											children: qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty((q) => q + 1),
											className: "grid h-9 w-9 place-items-center rounded-full hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									id: "add_to_cart",
									"data-event": "add_to_cart",
									"data-product-id": product.product_id,
									size: "lg",
									onClick: () => add(product, qty),
									className: "flex-1 rounded-full",
									children: "Add to Cart"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								id: "buy_now",
								"data-event": "initiate_checkout",
								"data-product-id": product.product_id,
								size: "lg",
								onClick: buyNow,
								className: "mt-3 w-full rounded-full bg-gradient-primary shadow-glow",
								children: "Buy Now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm",
										children: "Free shipping over $49"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm",
										children: "30-day guarantee"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Key Benefits"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-2 sm:grid-cols-2",
								children: product.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
									}), b]
								}, b))
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 border-b border-border",
							children: [
								"description",
								"ingredients",
								"nutrition",
								"shipping"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setTab(t),
								className: `-mb-px border-b-2 px-4 py-3 text-sm font-semibold capitalize ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
								children: t
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "prose mt-6 max-w-3xl text-muted-foreground",
							children: [
								tab === "description" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description }),
								tab === "ingredients" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc pl-5",
									children: product.ingredients.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
								}),
								tab === "nutrition" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
									className: "w-full text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: product.nutrition.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 font-medium text-foreground",
											children: n.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-right",
											children: n.value
										})]
									}, n.label)) })
								}),
								tab === "shipping" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Free 2-day shipping on US orders over $49. Standard delivery 3–5 business days. 30-day money-back guarantee on all purchases." })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: "You may also like"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.product_id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductDetail as component };
