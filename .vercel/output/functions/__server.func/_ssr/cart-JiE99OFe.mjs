import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track, r as useCart } from "./cart-F8waowpG.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trash2, h as Minus, l as ShoppingBag, p as Plus } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-uohJH0YK.mjs";
import { t as Input } from "./input-B8Sh0V8r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-JiE99OFe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, update, remove, subtotal } = useCart();
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [applied, setApplied] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		track("view_cart", {
			value: subtotal,
			items: items.length
		});
	}, []);
	const shipping = subtotal > 49 || subtotal === 0 ? 0 : 6.99;
	const tax = +(subtotal * .08).toFixed(2);
	const total = +(subtotal + shipping + tax - applied).toFixed(2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-6 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold sm:text-4xl",
					children: "Your Cart"
				}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-3xl border border-border bg-card p-12 text-center shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mx-auto h-12 w-12 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Your cart is empty."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-6 rounded-full",
								children: "Continue Shopping"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: items.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[80px_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card sm:grid-cols-[100px_minmax(0,1fr)_auto_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: product.product_name,
									className: "h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: product.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/products/$id",
											params: { id: product.slug },
											className: "line-clamp-2 font-semibold hover:text-primary",
											children: product.product_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-sm font-semibold",
											children: ["$", product.price]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 rounded-full border border-border p-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => update(product.product_id, quantity - 1),
											className: "grid h-8 w-8 place-items-center rounded-full hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 text-center text-sm font-semibold",
											children: quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => update(product.product_id, quantity + 1),
											className: "grid h-8 w-8 place-items-center rounded-full hover:bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-3 flex items-center justify-between sm:col-span-1 sm:flex-col sm:items-end sm:gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-bold",
										children: ["$", (product.price * quantity).toFixed(2)]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										id: "remove_from_cart",
										"data-event": "remove_from_cart",
										"data-product-id": product.product_id,
										onClick: () => remove(product.product_id),
										className: "text-muted-foreground hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								})
							]
						}, product.product_id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-3xl border border-border bg-gradient-card p-6 shadow-card lg:sticky lg:top-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: "Order Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "coupon_input",
									placeholder: "Coupon code",
									value: coupon,
									onChange: (e) => setCoupon(e.target.value),
									className: "rounded-full"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "rounded-full",
									onClick: () => {
										if (coupon.trim().toUpperCase() === "SAVE10") setApplied(+(subtotal * .1).toFixed(2));
										else setApplied(0);
									},
									children: "Apply"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Try code: SAVE10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2 border-t border-border pt-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Subtotal",
										value: `$${subtotal.toFixed(2)}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Shipping",
										value: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Tax",
										value: `$${tax.toFixed(2)}`
									}),
									applied > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Discount",
										value: `-$${applied.toFixed(2)}`
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl font-extrabold",
									children: ["$", total.toFixed(2)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									id: "checkout_button",
									"data-event": "initiate_checkout",
									size: "lg",
									className: "mt-6 w-full rounded-full bg-gradient-primary shadow-glow",
									children: "Proceed to Checkout"
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
