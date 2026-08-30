import { F0Coachmark as e } from "./F0Coachmark.js";
import { coachmarkStore as t } from "./store.js";
import { useTargetElement as n } from "./useTargetElement.js";
import { useEffect as r, useRef as i, useState as a, useSyncExternalStore as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/experimental/Overlays/F0Coachmark/CoachmarkProvider.tsx
var u = ({ item: r, container: i }) => {
	let [o, s] = a(0), l = Math.min(o, r.steps.length - 1), u = r.steps[l], d = l === r.steps.length - 1, f = n(u.targetElement), p = () => t.removeItem(r.id);
	return f ? /* @__PURE__ */ c(e, {
		target: f,
		container: i,
		title: u.title,
		description: u.description,
		actionLabel: u.action?.label,
		arrow: u.arrow,
		side: u.side,
		align: u.align,
		sideOffset: u.sideOffset,
		step: r.steps.length > 1 ? {
			current: l + 1,
			total: r.steps.length
		} : void 0,
		onAction: () => {
			u.action?.onClick?.(), d ? (r.onComplete?.(), p()) : s(l + 1);
		},
		onClose: () => {
			r.onDismiss?.(), p();
		}
	}) : null;
}, d = ({ children: e, portalTarget: n = "#f0-overlay-root" }) => {
	let d = o(t.subscribe, t.getSnapshot, t.getServerSnapshot), f = i(null), p = o(t.subscribeRenderer, t.getActiveRendererId, () => null);
	r(() => {
		let { id: e, release: n } = t.acquireRenderer();
		return f.current = e, n;
	}, []);
	let m = p === f.current, [h, g] = a(null);
	r(() => {
		typeof document > "u" || g(document.querySelector(n));
	}, [n]);
	let _ = d[0];
	return /* @__PURE__ */ l(s, { children: [m && _ && /* @__PURE__ */ c(u, {
		item: _,
		container: h
	}, _.id), e] });
};
//#endregion
export { d as CoachmarkProvider };
