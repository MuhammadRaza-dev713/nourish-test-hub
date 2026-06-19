import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as track } from "./cart-F8waowpG.mjs";
import { f as Search } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar } from "./Footer-uohJH0YK.mjs";
import { t as Input } from "./input-B8Sh0V8r.mjs";
import { n as products } from "./products-CY-qMdL3.mjs";
import { t as ProductCard } from "./ProductCard-N5J6FZph.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CAAZO7Nn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductList() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("popular");
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(100);
	(0, import_react.useEffect)(() => {
		track("page_view", { page: "products" });
	}, []);
	(0, import_react.useEffect)(() => {
		track("view_item_list", { ecommerce: {
			item_list_id: "products_page",
			item_list_name: "All Products",
			items: products.map((p, index) => ({
				item_id: p.product_id,
				item_name: p.product_name,
				item_brand: p.brand,
				item_category: p.category,
				price: p.price,
				index
			}))
		} });
	}, []);
	const cats = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
	const filtered = (0, import_react.useMemo)(() => {
		let list = products.filter((p) => p.price <= maxPrice);
		if (cat !== "All") list = list.filter((p) => p.category === cat);
		if (q) {
			list = list.filter((p) => (p.product_name + p.category + p.brand).toLowerCase().includes(q.toLowerCase()));
			track("search", { query: q });
		}
		if (sort === "price_low") list = [...list].sort((a, b) => a.price - b.price);
		if (sort === "price_high") list = [...list].sort((a, b) => b.price - a.price);
		if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
		return list;
	}, [
		q,
		cat,
		sort,
		maxPrice
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-gradient-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-extrabold sm:text-5xl",
						children: "All Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Premium supplements for every goal."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 lg:flex-col",
								children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									id: `filter_cat_${c}`,
									onClick: () => setCat(c),
									className: `rounded-full px-3 py-1.5 text-sm font-medium transition-colors lg:text-left ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"}`,
									children: c
								}, c))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
								children: ["Max Price: $", maxPrice]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "filter_price",
								type: "range",
								min: 10,
								max: 100,
								value: maxPrice,
								onChange: (e) => setMaxPrice(Number(e.target.value)),
								className: "w-full accent-[var(--primary)]"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1 min-w-[200px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "search_input",
									"data-event": "search",
									placeholder: "Search products...",
									value: q,
									onChange: (e) => setQ(e.target.value),
									className: "h-11 rounded-full pl-10"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "sort_select",
								value: sort,
								onChange: (e) => setSort(e.target.value),
								className: "h-11 rounded-full border border-border bg-card px-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "popular",
										children: "Most Popular"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price_low",
										children: "Price: Low to High"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price_high",
										children: "Price: High to Low"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rating",
										children: "Top Rated"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted-foreground",
							children: [filtered.length, " products"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
							children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.product_id))
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductList as component };
