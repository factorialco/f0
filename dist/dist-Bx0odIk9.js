import { v as e } from "./F0Checkbox-8vfzQrD0.js";
import { _ as t } from "./popover-By8ytmVb.js";
import { l as n } from "./input-N7VnjMNX.js";
import { d as r, l as i, n as a, r as o, s, t as c } from "./dist-zRL9MpsG.js";
import { t as l } from "./dist-m0B3zKBj.js";
import * as u from "react";
import d from "react";
import { jsx as f } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-d_623ed541a34698abf1f463cdde77df29/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var p = "rovingFocusGroup.onEntryFocus", m = {
	bubbles: !1,
	cancelable: !0
}, h = "RovingFocusGroup", [g, _, v] = l(h), [y, b] = r(h, [v]), [x, S] = y(h), C = u.forwardRef((e, t) => /* @__PURE__ */ f(g.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ f(g.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ f(w, {
			...e,
			ref: t
		})
	})
}));
C.displayName = h;
var w = u.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: l, loop: d = !1, dir: h, currentTabStopId: g, defaultCurrentTabStopId: v, onCurrentTabStopIdChange: y, onEntryFocus: b, preventScrollOnEntryFocus: S = !1, ...C } = t, w = u.useRef(null), T = s(n, w), E = e(h), [D = null, O] = c({
		prop: g,
		defaultProp: v,
		onChange: y
	}), [k, j] = u.useState(!1), M = i(b), N = _(r), P = u.useRef(!1), [F, I] = u.useState(0);
	return u.useEffect(() => {
		let e = w.current;
		if (e) return e.addEventListener(p, M), () => e.removeEventListener(p, M);
	}, [M]), /* @__PURE__ */ f(x, {
		scope: r,
		orientation: l,
		dir: E,
		loop: d,
		currentTabStopId: D,
		onItemFocus: u.useCallback((e) => O(e), [O]),
		onItemShiftTab: u.useCallback(() => j(!0), []),
		onFocusableItemAdd: u.useCallback(() => I((e) => e + 1), []),
		onFocusableItemRemove: u.useCallback(() => I((e) => e - 1), []),
		children: /* @__PURE__ */ f(o.div, {
			tabIndex: k || F === 0 ? -1 : 0,
			"data-orientation": l,
			...C,
			ref: T,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: a(t.onMouseDown, () => {
				P.current = !0;
			}),
			onFocus: a(t.onFocus, (e) => {
				let t = !P.current;
				if (e.target === e.currentTarget && t && !k) {
					let t = new CustomEvent(p, m);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = N().filter((e) => e.focusable);
						A([
							e.find((e) => e.active),
							e.find((e) => e.id === D),
							...e
						].filter(Boolean).map((e) => e.ref.current), S);
					}
				}
				P.current = !1;
			}),
			onBlur: a(t.onBlur, () => j(!1))
		})
	});
}), T = "RovingFocusGroupItem", E = u.forwardRef((e, n) => {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: s = !1, tabStopId: c, ...l } = e, d = t(), p = c || d, m = S(T, r), h = m.currentTabStopId === p, v = _(r), { onFocusableItemAdd: y, onFocusableItemRemove: b } = m;
	return u.useEffect(() => {
		if (i) return y(), () => b();
	}, [
		i,
		y,
		b
	]), /* @__PURE__ */ f(g.ItemSlot, {
		scope: r,
		id: p,
		focusable: i,
		active: s,
		children: /* @__PURE__ */ f(o.span, {
			tabIndex: h ? 0 : -1,
			"data-orientation": m.orientation,
			...l,
			ref: n,
			onMouseDown: a(e.onMouseDown, (e) => {
				i ? m.onItemFocus(p) : e.preventDefault();
			}),
			onFocus: a(e.onFocus, () => m.onItemFocus(p)),
			onKeyDown: a(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					m.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = k(e, m.orientation, m.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = v().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = m.loop ? j(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => A(n));
				}
			})
		})
	});
});
E.displayName = T;
var D = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function O(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function k(e, t, n) {
	let r = O(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return D[r];
}
function A(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function j(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var M = C, N = E, P = "ToggleGroup", [F, I] = r(P, [b]), L = b(), R = d.forwardRef((e, t) => {
	let { type: n, ...r } = e;
	if (n === "single") return /* @__PURE__ */ f(V, {
		...r,
		ref: t
	});
	if (n === "multiple") return /* @__PURE__ */ f(H, {
		...r,
		ref: t
	});
	throw Error(`Missing prop \`type\` expected on \`${P}\``);
});
R.displayName = P;
var [z, B] = F(P), V = d.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e, [o, s] = c({
		prop: n,
		defaultProp: r,
		onChange: i
	});
	return /* @__PURE__ */ f(z, {
		scope: e.__scopeToggleGroup,
		type: "single",
		value: o ? [o] : [],
		onItemActivate: s,
		onItemDeactivate: d.useCallback(() => s(""), [s]),
		children: /* @__PURE__ */ f(G, {
			...a,
			ref: t
		})
	});
}), H = d.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e, [o = [], s] = c({
		prop: n,
		defaultProp: r,
		onChange: i
	}), l = d.useCallback((e) => s((t = []) => [...t, e]), [s]), u = d.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
	return /* @__PURE__ */ f(z, {
		scope: e.__scopeToggleGroup,
		type: "multiple",
		value: o,
		onItemActivate: l,
		onItemDeactivate: u,
		children: /* @__PURE__ */ f(G, {
			...a,
			ref: t
		})
	});
});
R.displayName = P;
var [U, W] = F(P), G = d.forwardRef((t, n) => {
	let { __scopeToggleGroup: r, disabled: i = !1, rovingFocus: a = !0, orientation: s, dir: c, loop: l = !0, ...u } = t, d = L(r), p = e(c), m = {
		role: "group",
		dir: p,
		...u
	};
	return /* @__PURE__ */ f(U, {
		scope: r,
		rovingFocus: a,
		disabled: i,
		children: a ? /* @__PURE__ */ f(M, {
			asChild: !0,
			...d,
			orientation: s,
			dir: p,
			loop: l,
			children: /* @__PURE__ */ f(o.div, {
				...m,
				ref: n
			})
		}) : /* @__PURE__ */ f(o.div, {
			...m,
			ref: n
		})
	});
}), K = "ToggleGroupItem", q = d.forwardRef((e, t) => {
	let n = B(K, e.__scopeToggleGroup), r = W(K, e.__scopeToggleGroup), i = L(e.__scopeToggleGroup), a = n.value.includes(e.value), o = r.disabled || e.disabled, s = {
		...e,
		pressed: a,
		disabled: o
	}, c = d.useRef(null);
	return r.rovingFocus ? /* @__PURE__ */ f(N, {
		asChild: !0,
		...i,
		focusable: !o,
		active: a,
		ref: c,
		children: /* @__PURE__ */ f(J, {
			...s,
			ref: t
		})
	}) : /* @__PURE__ */ f(J, {
		...s,
		ref: t
	});
});
q.displayName = K;
var J = d.forwardRef((e, t) => {
	let { __scopeToggleGroup: r, value: i, ...a } = e, o = B(K, r), s = {
		role: "radio",
		"aria-checked": e.pressed,
		"aria-pressed": void 0
	}, c = o.type === "single" ? s : void 0;
	return /* @__PURE__ */ f(n, {
		...c,
		...a,
		ref: t,
		onPressedChange: (e) => {
			e ? o.onItemActivate(i) : o.onItemDeactivate(i);
		}
	});
}), Y = R, X = q;
//#endregion
export { q as i, Y as n, R as r, X as t };
