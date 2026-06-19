import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track, r as useCart } from "./cart-F8waowpG.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Footer, r as Navbar, t as Button } from "./Footer-uohJH0YK.mjs";
import { t as Input } from "./input-B8Sh0V8r.mjs";
import { t as Label } from "./label-C-b0xHG_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DKPvxFW3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { items, subtotal } = useCart();
	const navigate = useNavigate();
	const [shipping, setShipping] = (0, import_react.useState)("standard");
	const [form, setForm] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
		apartment: "",
		city: "",
		state: "",
		zip: "",
		country: "United States"
	});
	(0, import_react.useEffect)(() => {
		track("page_view", { page: "checkout" });
	}, []);
	const shippingCost = shipping === "express" ? 14.99 : subtotal > 49 ? 0 : 6.99;
	const tax = +(subtotal * .08).toFixed(2);
	const total = +(subtotal + shippingCost + tax).toFixed(2);
	const onContinue = (e) => {
		e.preventDefault();
		track("add_shipping_info", {
			method: shipping,
			value: total
		});
		navigate({ to: "/payment" });
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold sm:text-4xl",
					children: "Checkout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onContinue,
					className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: "Shipping Information"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_first_name",
										label: "First Name",
										value: form.firstName,
										onChange: (v) => set("firstName", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_last_name",
										label: "Last Name",
										value: form.lastName,
										onChange: (v) => set("lastName", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_email",
										label: "Email",
										type: "email",
										value: form.email,
										onChange: (v) => set("email", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_phone",
										label: "Phone",
										type: "tel",
										value: form.phone,
										onChange: (v) => set("phone", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "ship_address",
											label: "Address",
											value: form.address,
											onChange: (v) => set("address", v),
											required: true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "ship_apartment",
											label: "Apartment (optional)",
											value: form.apartment,
											onChange: (v) => set("apartment", v)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_city",
										label: "City",
										value: form.city,
										onChange: (v) => set("city", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_state",
										label: "State",
										value: form.state,
										onChange: (v) => set("state", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_zip",
										label: "ZIP",
										value: form.zip,
										onChange: (v) => set("zip", v),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "ship_country",
										label: "Country",
										value: form.country,
										onChange: (v) => set("country", v),
										required: true
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: "Shipping Method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3",
								children: [{
									id: "standard",
									t: "Standard",
									d: "3–5 business days",
									p: subtotal > 49 ? "Free" : "$6.99"
								}, {
									id: "express",
									t: "Express",
									d: "1–2 business days",
									p: "$14.99"
								}].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: `flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 ${shipping === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: `shipping_${m.id}`,
											type: "radio",
											checked: shipping === m.id,
											onChange: () => setShipping(m.id),
											className: "h-4 w-4 accent-[var(--primary)]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: m.t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: m.d
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: m.p
									})]
								}, m.id))
							})]
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}` })]
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
								id: "continue_to_payment",
								"data-event": "add_shipping_info",
								type: "submit",
								size: "lg",
								className: "mt-6 w-full rounded-full bg-gradient-primary shadow-glow",
								children: "Continue to Payment"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Field({ id, label, value, onChange, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		htmlFor: id,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		id,
		type,
		value,
		required,
		onChange: (e) => onChange(e.target.value),
		className: "h-11 rounded-xl"
	})] });
}
//#endregion
export { Checkout as component };
