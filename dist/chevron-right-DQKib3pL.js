import { D as e, M as t, O as n, P as r, j as i } from "./tooltip-BPSwDQpD.js";
import { v as a } from "./popover-By8ytmVb.js";
import * as o from "react";
import s from "react";
import { jsx as c } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_0e4230adea206cfc9ffba4b61b225db3/node_modules/@radix-ui/react-collection/dist/index.mjs
function l(e) {
	let n = e + "CollectionProvider", [a, o] = t(n), [l, u] = a(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (e) => {
		let { scope: t, children: n } = e, r = s.useRef(null), i = s.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ c(l, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	d.displayName = n;
	let f = e + "CollectionSlot", p = i(f), m = s.forwardRef((e, t) => {
		let { scope: n, children: i } = e, a = u(f, n), o = r(t, a.collectionRef);
		return /* @__PURE__ */ c(p, {
			ref: o,
			children: i
		});
	});
	m.displayName = f;
	let h = e + "CollectionItemSlot", g = "data-radix-collection-item", _ = i(h), v = s.forwardRef((e, t) => {
		let { scope: n, children: i, ...a } = e, o = s.useRef(null), l = r(t, o), d = u(h, n);
		return s.useEffect(() => (d.itemMap.set(o, {
			ref: o,
			...a
		}), () => void d.itemMap.delete(o))), /* @__PURE__ */ c(_, {
			[g]: "",
			ref: l,
			children: i
		});
	});
	v.displayName = h;
	function y(t) {
		let n = u(e + "CollectionConsumer", t);
		return s.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${g}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: m,
			ItemSlot: v
		},
		y,
		o
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
var u = o.createContext(void 0);
function d(e) {
	let t = o.useContext(u);
	return e || t || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var f = 0;
function p() {
	o.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? m()), document.body.insertAdjacentElement("beforeend", e[1] ?? m()), f++, () => {
			f === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), f--;
		};
	}, []);
}
function m() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_56ad7e199d329ef9fa7b3e23f78502a0/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var h = "focusScope.autoFocusOnMount", g = "focusScope.autoFocusOnUnmount", _ = {
	bubbles: !1,
	cancelable: !0
}, v = "FocusScope", y = o.forwardRef((t, i) => {
	let { loop: a = !1, trapped: s = !1, onMountAutoFocus: l, onUnmountAutoFocus: u, ...d } = t, [f, p] = o.useState(null), m = e(l), v = e(u), y = o.useRef(null), C = r(i, (e) => p(e)), w = o.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	o.useEffect(() => {
		if (s) {
			let e = function(e) {
				if (w.paused || !f) return;
				let t = e.target;
				f.contains(t) ? y.current = t : E(y.current, { select: !0 });
			}, t = function(e) {
				if (w.paused || !f) return;
				let t = e.relatedTarget;
				t !== null && (f.contains(t) || E(y.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && E(f);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return f && r.observe(f, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		s,
		f,
		w.paused
	]), o.useEffect(() => {
		if (f) {
			D.add(w);
			let e = document.activeElement;
			if (!f.contains(e)) {
				let t = new CustomEvent(h, _);
				f.addEventListener(h, m), f.dispatchEvent(t), t.defaultPrevented || (b(A(S(f)), { select: !0 }), document.activeElement === e && E(f));
			}
			return () => {
				f.removeEventListener(h, m), setTimeout(() => {
					let t = new CustomEvent(g, _);
					f.addEventListener(g, v), f.dispatchEvent(t), t.defaultPrevented || E(e ?? document.body, { select: !0 }), f.removeEventListener(g, v), D.remove(w);
				}, 0);
			};
		}
	}, [
		f,
		m,
		v,
		w
	]);
	let T = o.useCallback((e) => {
		if (!a && !s || w.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [r, i] = x(t);
			r && i ? !e.shiftKey && n === i ? (e.preventDefault(), a && E(r, { select: !0 })) : e.shiftKey && n === r && (e.preventDefault(), a && E(i, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		a,
		s,
		w.paused
	]);
	return /* @__PURE__ */ c(n.div, {
		tabIndex: -1,
		...d,
		ref: C,
		onKeyDown: T
	});
});
y.displayName = v;
function b(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (E(r, { select: t }), document.activeElement !== n) return;
}
function x(e) {
	let t = S(e);
	return [C(t, e), C(t.reverse(), e)];
}
function S(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function C(e, t) {
	for (let n of e) if (!w(n, { upTo: t })) return n;
}
function w(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function T(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function E(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && T(e) && t && e.select();
	}
}
var D = O();
function O() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = k(e, t), e.unshift(t);
		},
		remove(t) {
			e = k(e, t), e[0]?.resume();
		}
	};
}
function k(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function A(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var j = a("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
//#endregion
export { l as a, d as i, y as n, p as r, j as t };
