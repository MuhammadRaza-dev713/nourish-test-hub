import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as CartProvider } from "./cart-F8waowpG.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getProduct } from "./products-CY-qMdL3.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DPySM7vz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BBg45W9t.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Page not found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-4 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground",
					children: "Retry"
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "VitaCore — Premium Health Supplements" },
			{
				name: "description",
				content: "Personalized health supplements: protein, vitamins, collagen, pre-workout and more. Take our free health quiz."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	const gtmId = "GTM-K96FHGX6";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: `https://www.googletagmanager.com/ns.html?id=${gtmId}`,
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				},
				title: "gtm"
			}) }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$7 = () => import("./quiz-Bq4S7WE_.mjs");
var Route$7 = createFileRoute("/quiz")({
	head: () => ({ meta: [{ title: "Free Health Quiz — VitaCore" }, {
		name: "description",
		content: "Take our free 2-minute health assessment for personalized supplement recommendations."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./products-CAAZO7Nn.mjs");
var Route$6 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "Shop Premium Supplements — VitaCore" }, {
		name: "description",
		content: "Browse premium protein, vitamins, collagen, pre-workout and more."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./payment-CpbGpmrm.mjs");
var Route$5 = createFileRoute("/payment")({
	head: () => ({ meta: [{ title: "Payment — VitaCore" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./order-success-CXnxf6uq.mjs");
var Route$4 = createFileRoute("/order-success")({
	head: () => ({ meta: [{ title: "Order Confirmed — VitaCore" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./checkout-DKPvxFW3.mjs");
var Route$3 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — VitaCore" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cart-D2dTqah4.mjs");
var Route$2 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your Cart — VitaCore" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-OMXwJsSA.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "VitaCore — Personalized Premium Health Supplements" },
		{
			name: "description",
			content: "Start your personalized health journey. Take our free 2-minute assessment and get supplement recommendations made for you."
		},
		{
			property: "og:title",
			content: "VitaCore — Personalized Health Supplements"
		},
		{
			property: "og:description",
			content: "Premium protein, vitamins, collagen & more. Take the free health quiz."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products._id--mwUxIq8.mjs");
var Route = createFileRoute("/products/$id")({
	head: ({ params }) => {
		const p = getProduct(params.id);
		return { meta: [
			{ title: p ? `${p.product_name} — VitaCore` : "Product — VitaCore" },
			{
				name: "description",
				content: p?.description ?? "Premium supplement."
			},
			{
				property: "og:image",
				content: p?.image ?? ""
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var QuizRoute = Route$7.update({
	id: "/quiz",
	path: "/quiz",
	getParentRoute: () => Route$8
});
var ProductsRoute = Route$6.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$8
});
var PaymentRoute = Route$5.update({
	id: "/payment",
	path: "/payment",
	getParentRoute: () => Route$8
});
var OrderSuccessRoute = Route$4.update({
	id: "/order-success",
	path: "/order-success",
	getParentRoute: () => Route$8
});
var CheckoutRoute = Route$3.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$8
});
var CartRoute = Route$2.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$8
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ProductsRouteChildren = { ProductsIdRoute: Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ProductsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	CartRoute,
	CheckoutRoute,
	OrderSuccessRoute,
	PaymentRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	QuizRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
