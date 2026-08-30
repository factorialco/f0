import { dialogsAlikeStore as e } from "./store.js";
import { Fragment as t, jsx as n } from "react/jsx-runtime";
import { nanoid as r } from "nanoid";
//#region src/lib/providers/dialogs-alike/imperative.tsx
var i = /* @__PURE__ */ new Map(), a = (t) => {
	process.env.NODE_ENV !== "production" && !e.hasProvider() && console.warn(`[f0] ${t} was called but no <F0Provider> is mounted, so the dialog/drawer will not render. Make sure your app is wrapped in <F0Provider>.`);
}, o = (t, n) => (r, a) => {
	n(a ?? void 0), !r?.keepOpen && (i.delete(t), e.removeItem(t));
}, s = (t) => new Promise((n) => {
	let s = t.id || r(), c = o(s, n), l = () => c(void 0, void 0), u = {
		id: s,
		actions: t.actions,
		onCloseDialog: l,
		onClickAction: (e, t) => c(e, t)
	}, d;
	if (t.variant === "notification") {
		if (!t.type || t.type === "default") throw Error("Notification dialog must have a type");
		d = {
			...t,
			...u,
			variant: "notification",
			type: t.type
		};
	} else d = {
		...t,
		...u,
		variant: "default",
		type: void 0
	};
	i.set(s, l), a("dialogs.open()"), e.addItem(d);
}), c = (t) => new Promise((n) => {
	let s = t.id || r(), c = o(s, n), l = () => c(void 0, void 0), u = {
		...t,
		id: s,
		onCloseDialog: l,
		onClickAction: (e, t) => c(e, t)
	};
	i.set(s, l), a("drawers.open()"), e.addItem(u);
}), l = (t) => {
	let n = i.get(t);
	n ? n() : e.removeItem(t);
}, u = (e) => s({
	type: e.type ?? "info",
	variant: "notification",
	description: e.msg,
	id: e.id || r(),
	title: e.title,
	content: /* @__PURE__ */ n(t, {}),
	actions: e.actions
}), d = (t) => {
	let n = e.getDefaultActionLabels();
	return u({
		...t,
		actions: {
			primary: {
				value: t.confirm?.value ?? !0,
				label: t.confirm?.label || n.ok
			},
			secondary: {
				value: t.cancel?.value ?? !1,
				label: t.cancel?.label || n.cancel
			}
		}
	});
}, f = {
	open: (e) => s({
		...e,
		variant: "default"
	}),
	notification: u,
	alert: (t) => {
		let n = e.getDefaultActionLabels();
		return u({
			...t,
			actions: { primary: {
				value: t.confirm?.value ?? !0,
				label: t.confirm?.label || n.ok
			} }
		});
	},
	confirmation: d,
	confirm: d,
	close: l
}, p = {
	open: (e) => c({
		...e,
		variant: "drawer"
	}),
	close: l
};
//#endregion
export { f as dialogs, p as drawers };
