import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-F8waowpG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function track(event, data = {}) {
	if (typeof window === "undefined") return;
	const w = window;
	const payload = {
		event,
		...data,
		ts: Date.now()
	};
	(w.dataLayer = w.dataLayer || []).push(payload);
	try {
		w.fbq?.("trackCustom", event, data);
		w.ttq?.track?.(event, data);
		w.snaptr?.("track", event, data);
		w.pintrk?.("track", event, data);
		w.lintrk?.("track", event);
		console.debug("[track]", event, data);
	} catch {}
}
var Ctx = (0, import_react.createContext)(null);
var KEY = "mwf_cart_v1";
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem(KEY, JSON.stringify(items));
	}, [items, ready]);
	const add = (p, qty = 1) => {
		setItems((cur) => {
			if (cur.find((i) => i.product.product_id === p.product_id)) return cur.map((i) => i.product.product_id === p.product_id ? {
				...i,
				quantity: i.quantity + qty
			} : i);
			return [...cur, {
				product: p,
				quantity: qty
			}];
		});
		track("add_to_cart", {
			product_id: p.product_id,
			name: p.product_name,
			price: p.price,
			qty
		});
	};
	const remove = (id) => {
		setItems((cur) => cur.filter((i) => i.product.product_id !== id));
		track("remove_from_cart", { product_id: id });
	};
	const update = (id, qty) => setItems((cur) => cur.map((i) => i.product.product_id === id ? {
		...i,
		quantity: Math.max(1, qty)
	} : i));
	const clear = () => setItems([]);
	const count = items.reduce((a, i) => a + i.quantity, 0);
	const subtotal = items.reduce((a, i) => a + i.quantity * i.product.price, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			items,
			add,
			remove,
			update,
			clear,
			count,
			subtotal
		},
		children
	});
}
var useCart = () => {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useCart outside CartProvider");
	return c;
};
//#endregion
export { track as n, useCart as r, CartProvider as t };
