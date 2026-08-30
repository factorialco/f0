import { formOverlaysStore as e } from "./store.js";
import { nanoid as t } from "nanoid";
//#region src/lib/providers/form-overlays/imperative.tsx
var n = /* @__PURE__ */ new Map(), r = (t) => {
	process.env.NODE_ENV !== "production" && !e.hasProvider() && console.warn(`[f0] ${t} was called but no <F0Provider> is mounted, so the form overlay will not render. Make sure your app is wrapped in <F0Provider>.`);
}, i = (i) => {
	let a = i.id || t();
	return n.set(a, () => {
		n.has(a) && (n.delete(a), i.onDismiss?.(), e.removeItem(a));
	}), r("mountFormOverlay()"), e.addItem({
		id: a,
		render: i.render
	}), a;
}, a = (t) => {
	let r = n.get(t);
	r ? r() : e.removeItem(t);
};
//#endregion
export { i as mountFormOverlay, a as unmountFormOverlay };
