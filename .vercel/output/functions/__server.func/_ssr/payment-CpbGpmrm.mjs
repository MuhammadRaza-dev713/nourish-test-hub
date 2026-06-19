import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track, r as useCart } from "./cart-F8waowpG.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Lock, x as CreditCard } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-uohJH0YK.mjs";
import { t as Input } from "./input-B8Sh0V8r.mjs";
import { t as Label } from "./label-C-b0xHG_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-CpbGpmrm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentPage() {
	const { items, subtotal, clear } = useCart();
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		holder: "",
		number: "",
		expiry: "",
		cvv: "",
		billing: true
	});
	(0, import_react.useEffect)(() => {
		track("page_view", { page: "payment" });
	}, []);
	const shipping = subtotal > 49 ? 0 : 6.99;
	const tax = +(subtotal * .08).toFixed(2);
	const total = +(subtotal + shipping + tax).toFixed(2);
	const pay = (e) => {
		e.preventDefault();
		setLoading(true);
		track("add_payment_info", { value: total });
		setTimeout(() => {
			track("purchase", {
				value: total,
				currency: "USD",
				items: items.map((i) => ({
					id: i.product.product_id,
					qty: i.quantity
				}))
			});
			clear();
			navigate({ to: "/order-success" });
		}, 1400);
	};
	const set = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-6 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-extrabold sm:text-4xl",
						children: "Payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-primary" }), " Secure checkout (this is a demo — no real payment is processed)"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: pay,
						className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold",
									children: "Payment Method"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 text-xs font-bold text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-secondary px-2 py-1",
											children: "VISA"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-secondary px-2 py-1",
											children: "MC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-secondary px-2 py-1",
											children: "AMEX"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-secondary px-2 py-1",
											children: "DISC"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "card_holder",
										children: "Card Holder"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "card_holder",
										required: true,
										value: form.holder,
										onChange: (e) => set("holder", e.target.value),
										className: "h-12 rounded-xl"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "card_number",
										children: "Card Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "card_number",
											required: true,
											placeholder: "4242 4242 4242 4242",
											inputMode: "numeric",
											value: form.number,
											onChange: (e) => set("number", e.target.value),
											className: "h-12 rounded-xl pl-10"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "card_expiry",
											children: "Expiry"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "card_expiry",
											required: true,
											placeholder: "MM/YY",
											value: form.expiry,
											onChange: (e) => set("expiry", e.target.value),
											className: "h-12 rounded-xl"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "card_cvv",
											children: "CVV"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "card_cvv",
											required: true,
											placeholder: "123",
											inputMode: "numeric",
											value: form.cvv,
											onChange: (e) => set("cvv", e.target.value),
											className: "h-12 rounded-xl"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-3 pt-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "billing_same",
											type: "checkbox",
											checked: form.billing,
											onChange: (e) => set("billing", e.target.checked),
											className: "h-5 w-5 rounded"
										}), "Billing address same as shipping"]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "h-fit rounded-3xl border border-border bg-gradient-card p-6 shadow-card lg:sticky lg:top-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold",
									children: "Order Summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 max-h-56 space-y-3 overflow-auto",
									children: items.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: product.image,
												alt: "",
												className: "h-12 w-12 rounded-lg object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "truncate font-medium",
													children: product.product_name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs text-muted-foreground",
													children: ["Qty ", quantity]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-semibold",
												children: ["$", (product.price * quantity).toFixed(2)]
											})
										]
									}, product.product_id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2 border-t border-border pt-4 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Subtotal"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", subtotal.toFixed(2)] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Shipping"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Tax"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["$", tax.toFixed(2)] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-2xl font-extrabold",
										children: ["$", total.toFixed(2)]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									id: "payment_button",
									"data-event": "add_payment_info",
									type: "submit",
									size: "lg",
									disabled: loading || items.length === 0,
									className: "mt-6 w-full rounded-full bg-gradient-primary shadow-glow",
									children: loading ? "Processing..." : `Pay $${total.toFixed(2)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-center text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mr-1 inline h-3 w-3" }), " 256-bit encrypted — demo only"]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PaymentPage as component };
