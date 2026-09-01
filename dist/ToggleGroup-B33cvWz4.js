import { t as e } from "./dist-CqnuTXEz.js";
import { n as t, t as n } from "./utils-CVzxZnoI.js";
import { Pt as r } from "./OneCalendar-BxfqTY4J.js";
import { S as i } from "./F0Checkbox-D80nhG7S.js";
import { _ as a } from "./popover-D9s66rwb.js";
import { c as o, l as s } from "./input-D5uOmhhf.js";
import { d as c, l, n as u, r as d, s as f, t as p } from "./dist-zRL9MpsG.js";
import * as m from "react";
import h from "react";
import { jsx as g } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-d_623ed541a34698abf1f463cdde77df29/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var _ = "rovingFocusGroup.onEntryFocus", v = {
	bubbles: !1,
	cancelable: !0
}, y = "RovingFocusGroup", [b, x, S] = r(y), [C, w] = c(y, [S]), [T, E] = C(y), D = m.forwardRef((e, t) => /* @__PURE__ */ g(b.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ g(b.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ g(O, {
			...e,
			ref: t
		})
	})
}));
D.displayName = y;
var O = m.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: h, onEntryFocus: y, preventScrollOnEntryFocus: b = !1, ...S } = e, C = m.useRef(null), w = f(t, C), E = i(o), [D = null, O] = p({
		prop: s,
		defaultProp: c,
		onChange: h
	}), [k, A] = m.useState(!1), j = l(y), M = x(n), N = m.useRef(!1), [F, I] = m.useState(0);
	return m.useEffect(() => {
		let e = C.current;
		if (e) return e.addEventListener(_, j), () => e.removeEventListener(_, j);
	}, [j]), /* @__PURE__ */ g(T, {
		scope: n,
		orientation: r,
		dir: E,
		loop: a,
		currentTabStopId: D,
		onItemFocus: m.useCallback((e) => O(e), [O]),
		onItemShiftTab: m.useCallback(() => A(!0), []),
		onFocusableItemAdd: m.useCallback(() => I((e) => e + 1), []),
		onFocusableItemRemove: m.useCallback(() => I((e) => e - 1), []),
		children: /* @__PURE__ */ g(d.div, {
			tabIndex: k || F === 0 ? -1 : 0,
			"data-orientation": r,
			...S,
			ref: w,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: u(e.onMouseDown, () => {
				N.current = !0;
			}),
			onFocus: u(e.onFocus, (e) => {
				let t = !N.current;
				if (e.target === e.currentTarget && t && !k) {
					let t = new CustomEvent(_, v);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = M().filter((e) => e.focusable);
						P([
							e.find((e) => e.active),
							e.find((e) => e.id === D),
							...e
						].filter(Boolean).map((e) => e.ref.current), b);
					}
				}
				N.current = !1;
			}),
			onBlur: u(e.onBlur, () => A(!1))
		})
	});
}), k = "RovingFocusGroupItem", A = m.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: o, ...s } = e, c = a(), l = o || c, f = E(k, n), p = f.currentTabStopId === l, h = x(n), { onFocusableItemAdd: _, onFocusableItemRemove: v } = f;
	return m.useEffect(() => {
		if (r) return _(), () => v();
	}, [
		r,
		_,
		v
	]), /* @__PURE__ */ g(b.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ g(d.span, {
			tabIndex: p ? 0 : -1,
			"data-orientation": f.orientation,
			...s,
			ref: t,
			onMouseDown: u(e.onMouseDown, (e) => {
				r ? f.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: u(e.onFocus, () => f.onItemFocus(l)),
			onKeyDown: u(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					f.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = N(e, f.orientation, f.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = h().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = f.loop ? F(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => P(n));
				}
			})
		})
	});
});
A.displayName = k;
var j = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function M(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function N(e, t, n) {
	let r = M(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return j[r];
}
function P(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function F(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var I = D, L = A, R = "ToggleGroup", [z, ee] = c(R, [w]), B = w(), V = h.forwardRef((e, t) => {
	let { type: n, ...r } = e;
	if (n === "single") return /* @__PURE__ */ g(te, {
		...r,
		ref: t
	});
	if (n === "multiple") return /* @__PURE__ */ g(ne, {
		...r,
		ref: t
	});
	throw Error(`Missing prop \`type\` expected on \`${R}\``);
});
V.displayName = R;
var [H, U] = z(R), te = h.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e, [o, s] = p({
		prop: n,
		defaultProp: r,
		onChange: i
	});
	return /* @__PURE__ */ g(H, {
		scope: e.__scopeToggleGroup,
		type: "single",
		value: o ? [o] : [],
		onItemActivate: s,
		onItemDeactivate: h.useCallback(() => s(""), [s]),
		children: /* @__PURE__ */ g(W, {
			...a,
			ref: t
		})
	});
}), ne = h.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e, [o = [], s] = p({
		prop: n,
		defaultProp: r,
		onChange: i
	}), c = h.useCallback((e) => s((t = []) => [...t, e]), [s]), l = h.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
	return /* @__PURE__ */ g(H, {
		scope: e.__scopeToggleGroup,
		type: "multiple",
		value: o,
		onItemActivate: c,
		onItemDeactivate: l,
		children: /* @__PURE__ */ g(W, {
			...a,
			ref: t
		})
	});
});
V.displayName = R;
var [re, ie] = z(R), W = h.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: a = !0, orientation: o, dir: s, loop: c = !0, ...l } = e, u = B(n), f = i(s), p = {
		role: "group",
		dir: f,
		...l
	};
	return /* @__PURE__ */ g(re, {
		scope: n,
		rovingFocus: a,
		disabled: r,
		children: a ? /* @__PURE__ */ g(I, {
			asChild: !0,
			...u,
			orientation: o,
			dir: f,
			loop: c,
			children: /* @__PURE__ */ g(d.div, {
				...p,
				ref: t
			})
		}) : /* @__PURE__ */ g(d.div, {
			...p,
			ref: t
		})
	});
}), G = "ToggleGroupItem", K = h.forwardRef((e, t) => {
	let n = U(G, e.__scopeToggleGroup), r = ie(G, e.__scopeToggleGroup), i = B(e.__scopeToggleGroup), a = n.value.includes(e.value), o = r.disabled || e.disabled, s = {
		...e,
		pressed: a,
		disabled: o
	}, c = h.useRef(null);
	return r.rovingFocus ? /* @__PURE__ */ g(L, {
		asChild: !0,
		...i,
		focusable: !o,
		active: a,
		ref: c,
		children: /* @__PURE__ */ g(q, {
			...s,
			ref: t
		})
	}) : /* @__PURE__ */ g(q, {
		...s,
		ref: t
	});
});
K.displayName = G;
var q = h.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, value: r, ...i } = e, a = U(G, n), o = {
		role: "radio",
		"aria-checked": e.pressed,
		"aria-pressed": void 0
	}, c = a.type === "single" ? o : void 0;
	return /* @__PURE__ */ g(s, {
		...c,
		...i,
		ref: t,
		onPressedChange: (e) => {
			e ? a.onItemActivate(r) : a.onItemDeactivate(r);
		}
	});
}), J = V, Y = K, X = e({
	base: n("inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground", t()),
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
		},
		size: {
			default: "h-10 px-3",
			sm: "h-9 px-2.5",
			lg: "h-11 px-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), ae = m.forwardRef(({ className: e, variant: t, size: r, ...i }, a) => /* @__PURE__ */ g(o, {
	ref: a,
	className: n(X({
		variant: t,
		size: r,
		className: e
	})),
	...i
}));
ae.displayName = o.displayName;
//#endregion
//#region src/deprecated/ToggleGroup/ToggleGroup.tsx
var Z = m.createContext({
	size: "default",
	variant: "default"
}), Q = m.forwardRef(({ className: e, variant: t, size: r, children: i, ...a }, o) => /* @__PURE__ */ g(J, {
	ref: o,
	className: n("flex items-center justify-center gap-1.5", e),
	...a,
	children: /* @__PURE__ */ g(Z.Provider, {
		value: {
			variant: t,
			size: r
		},
		children: i
	})
}));
Q.displayName = J.displayName;
var $ = m.forwardRef(({ className: e, children: t, variant: r, size: i, ...a }, o) => {
	let s = m.useContext(Z);
	return /* @__PURE__ */ g(Y, {
		ref: o,
		className: n(X({
			variant: s.variant || r,
			size: s.size || i
		}), e),
		...a,
		children: t
	});
});
$.displayName = Y.displayName;
//#endregion
export { K as i, $ as n, V as r, Q as t };
