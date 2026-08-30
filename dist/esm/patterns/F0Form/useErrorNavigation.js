import { generateAnchorId as e } from "./context.js";
import { useCallback as t, useEffect as n, useRef as r, useState as i } from "react";
//#region src/patterns/F0Form/useErrorNavigation.ts
var a = "f0-form-error-navigate", o = /* @__PURE__ */ new WeakMap();
function s(t, n) {
	if (typeof document > "u") return null;
	let r = e(t, void 0, n), i = document.getElementById(r);
	if (i) return i;
	let a = `forms.${t}.`, o = `.${n}`;
	return document.querySelector(`[id^="${a}"][id$="${o}"]`);
}
var c = (e) => {
	let t = o.get(e);
	t && clearTimeout(t), e.classList.remove(a), e.offsetWidth, e.classList.add(a);
	let n = setTimeout(() => {
		e.classList.remove(a), o.delete(e);
	}, 600);
	o.set(e, n);
};
function l(e) {
	let t = e;
	for (; t && t.offsetParent === null && t.parentElement;) t = t.parentElement;
	return t ?? e;
}
function u(e, t, { highlight: n = !1 } = {}) {
	let r = s(e, t);
	r && d(r, { highlight: n });
}
function d(e, { highlight: t = !1 } = {}) {
	let n = l(e);
	n.scrollIntoView({
		behavior: "smooth",
		block: "center"
	});
	let r = n.querySelector("input, textarea, select, button");
	r instanceof HTMLElement && r.focus(), t && c(n);
}
function f({ formName: e, errors: a }) {
	let o = t((t) => {
		u(e, t, { highlight: !0 });
	}, [e]), c = Object.keys(a).filter((e) => e !== "root"), l = typeof document > "u" ? c : [...c].sort((t, n) => {
		let r = s(e, t), i = s(e, n);
		if (!r || !i) return 0;
		let a = r.compareDocumentPosition(i);
		return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	}), d = l.length > 0, f = l.length, [p, m] = i(null), h = p ? Math.max(0, l.indexOf(p)) : 0, g = r(l);
	g.current = l;
	let _ = r(p);
	_.current = p;
	let v = t(() => {
		let e = _.current;
		if (!e) return 0;
		let t = g.current.indexOf(e);
		return t === -1 ? 0 : t;
	}, []), y = r([]);
	n(() => {
		let e = l, t = y.current, n = e.find((e) => !t.includes(e));
		n && (o(n), m(n)), y.current = e;
	}, [
		l,
		e,
		o
	]);
	let b = t((e) => {
		let t = g.current;
		if (t.length === 0) return;
		let n = t[(e % t.length + t.length) % t.length];
		m(n), o(n);
	}, [o]);
	return {
		fieldErrors: l,
		hasErrors: d,
		errorCount: f,
		currentErrorIndex: h,
		goToPreviousError: t(() => {
			b(v() - 1);
		}, [v, b]),
		goToNextError: t(() => {
			b(v() + 1);
		}, [v, b]),
		resetErrorNavigation: t(() => {
			m(null), y.current = [];
		}, [])
	};
}
//#endregion
export { f as useErrorNavigation };
