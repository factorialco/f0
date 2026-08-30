import { formOverlaysStore as e } from "./store.js";
import { Fragment as t, useEffect as n, useMemo as r, useRef as i, useState as a, useSyncExternalStore as o } from "react";
import { createPortal as s } from "react-dom";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/lib/providers/form-overlays/FormOverlaysProvider.tsx
var d = 200, f = ({ children: t }) => {
	let r = o(e.subscribe, e.getSnapshot, e.getServerSnapshot), [i, d] = a(null);
	n(() => {
		let t = e.acquireRenderer();
		return d(t.id), t.release;
	}, []);
	let f = o(e.subscribeRenderer, e.getActiveRendererId, () => null);
	return /* @__PURE__ */ u(c, { children: [i !== null && i === f && typeof document < "u" && s(/* @__PURE__ */ l(p, { items: r }), document.body), t] });
}, p = ({ items: e }) => {
	let [o, s] = a(e), u = i(e), f = i(/* @__PURE__ */ new Map());
	n(() => {
		let t = new Set(e.map((e) => e.id)), n = u.current;
		u.current = e;
		for (let e of t) {
			let t = f.current.get(e);
			t && (clearTimeout(t), f.current.delete(e));
		}
		for (let e of n) {
			if (t.has(e.id) || f.current.has(e.id)) continue;
			let n = setTimeout(() => {
				f.current.delete(e.id), s((t) => t.filter((t) => t.id !== e.id));
			}, d);
			f.current.set(e.id, n);
		}
		s((n) => {
			let r = [...e];
			for (let e of n) t.has(e.id) || r.some((t) => t.id === e.id) || r.push(e);
			return r.length === n.length && r.every((e, t) => e === n[t]) ? n : r;
		});
	}, [e]), n(() => {
		let e = f.current;
		return () => {
			for (let t of e.values()) clearTimeout(t);
			e.clear();
		};
	}, []);
	let p = r(() => new Set(e.map((e) => e.id)), [e]);
	return /* @__PURE__ */ l(c, { children: o.map((e) => /* @__PURE__ */ l(t, { children: e.render({ isOpen: p.has(e.id) }) }, e.id)) });
};
//#endregion
export { f as FormOverlaysProvider };
