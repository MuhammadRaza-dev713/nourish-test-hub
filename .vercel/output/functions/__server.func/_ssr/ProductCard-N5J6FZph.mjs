import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track, r as useCart } from "./cart-F8waowpG.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Star } from "../_libs/lucide-react.mjs";
import { t as Button } from "./Footer-uohJH0YK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-N5J6FZph.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { add } = useCart();
	const discount = Math.round((product.old_price - product.price) / product.old_price * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "product_card",
		"data-event": "view_content",
		"data-product-id": product.product_id,
		className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-card hover-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/products/$id",
			params: { id: product.slug },
			id: "product_view",
			"data-event": "view_content",
			"data-product-id": product.product_id,
			onClick: () => track("view_content", { product_id: product.product_id }),
			className: "relative block aspect-square overflow-hidden bg-secondary/40",
			children: [
				product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft",
					children: product.badge
				}),
				discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-3 top-3 z-10 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground",
					children: [
						"-",
						discount,
						"%"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.product_name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: product.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$id",
					params: { id: product.slug },
					className: "mt-1 line-clamp-2 font-display text-base font-semibold leading-snug hover:text-primary",
					children: product.product_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-accent text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: product.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								"(",
								product.reviews,
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-xl font-bold text-foreground",
						children: ["$", product.price]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted-foreground line-through",
						children: ["$", product.old_price]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					id: "add_to_cart",
					"data-event": "add_to_cart",
					"data-product-id": product.product_id,
					onClick: () => add(product),
					className: "mt-4 w-full rounded-full",
					children: "Add to Cart"
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
