import { toastStore as e } from "./store.js";
import { nanoid as t } from "nanoid";
//#region src/hooks/toast/imperative.ts
var n = 5e3, r = 1e4, i = (t) => {
	process.env.NODE_ENV !== "production" && !e.hasProvider() && console.warn(`[f0] ${t} was called but no <F0Provider> is mounted, so the toast will not render. Make sure your app is wrapped in <F0Provider>.`);
}, a = {
	open: (a) => {
		let o = a.id ?? t();
		i("toasts.open()");
		let s = a.actions != null, c = a.persistent === !0 || a.variant === "loading";
		return e.addItem({
			duration: c ? void 0 : s ? r : n,
			...a,
			id: o,
			onClose: () => e.removeItem(o)
		}), o;
	},
	close: (t) => {
		e.removeItem(t);
	},
	closeAll: () => {
		e.clear();
	}
};
//#endregion
export { a as toasts };
