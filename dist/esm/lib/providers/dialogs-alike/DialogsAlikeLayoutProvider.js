import { useI18n as e } from "../i18n/i18n-provider.js";
import { DialogsAlike as t } from "./components/DialogsAlike.js";
import { dialogsAlikeStore as n } from "./store.js";
import { useEffect as r, useState as i, useSyncExternalStore as a } from "react";
import { createPortal as o } from "react-dom";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/lib/providers/dialogs-alike/DialogsAlikeLayoutProvider.tsx
var u = ({ children: u }) => {
	let d = a(n.subscribe, n.getSnapshot, n.getServerSnapshot), f = e(), [p, m] = i(null);
	r(() => {
		let e = n.acquireRenderer();
		return m(e.id), e.release;
	}, []);
	let h = a(n.subscribeRenderer, n.getActiveRendererId, () => null), g = p !== null && p === h;
	return r(() => {
		n.setDefaultActionLabels({
			ok: f.actions.ok,
			cancel: f.actions.cancel
		});
	}, [f]), /* @__PURE__ */ l(s, { children: [g && typeof document < "u" && o(/* @__PURE__ */ c(t, { items: d }), document.body), u] });
};
//#endregion
export { u as DialogsAlikeLayoutProvider };
