import { E as e, En as t, O as n, S as r, _ as i, b as a, v as o, w as s, y as c } from "./popover-Sbb5IAHu.js";
import { I as l, L as u } from "./tooltip-BGly0G_l.js";
import { Lt as d, vt as f, yt as p } from "./OneCalendar-BhwqRMhL.js";
import * as m from "react";
import h from "react";
import { jsx as g } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_8b50dd17dda88491984286d0a66c0706/node_modules/@radix-ui/react-collection/dist/index.mjs
function _(e) {
	let t = e + "CollectionProvider", [i, a] = n(t), [o, c] = i(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), l = (e) => {
		let { scope: t, children: n } = e, r = h.useRef(null), i = h.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ g(o, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	l.displayName = t;
	let u = e + "CollectionSlot", d = h.forwardRef((e, t) => {
		let { scope: n, children: i } = e, a = c(u, n), o = s(t, a.collectionRef);
		return /* @__PURE__ */ g(r, {
			ref: o,
			children: i
		});
	});
	d.displayName = u;
	let f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = h.forwardRef((e, t) => {
		let { scope: n, children: i, ...a } = e, o = h.useRef(null), l = s(t, o), u = c(f, n);
		return h.useEffect(() => (u.itemMap.set(o, {
			ref: o,
			...a
		}), () => void u.itemMap.delete(o))), /* @__PURE__ */ g(r, {
			[p]: "",
			ref: l,
			children: i
		});
	});
	m.displayName = f;
	function _(t) {
		let n = c(e + "CollectionConsumer", t);
		return h.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${p}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: l,
			Slot: d,
			ItemSlot: m
		},
		_,
		a
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.1_@types+react-dom@18.3.1_@types+react@18.3.18_react-d_623ed541a34698abf1f463cdde77df29/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var v = "rovingFocusGroup.onEntryFocus", ee = {
	bubbles: !1,
	cancelable: !0
}, y = "RovingFocusGroup", [b, x, S] = _(y), [C, w] = n(y, [S]), [T, E] = C(y), D = m.forwardRef((e, t) => /* @__PURE__ */ g(b.Provider, {
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
var O = m.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: o, loop: l = !1, dir: u, currentTabStopId: f, defaultCurrentTabStopId: p, onCurrentTabStopIdChange: h, onEntryFocus: _, preventScrollOnEntryFocus: y = !1, ...b } = t, S = m.useRef(null), C = s(n, S), w = d(u), [E = null, D] = i({
		prop: f,
		defaultProp: p,
		onChange: h
	}), [O, k] = m.useState(!1), A = e(_), j = x(r), M = m.useRef(!1), [N, F] = m.useState(0);
	return m.useEffect(() => {
		let e = S.current;
		if (e) return e.addEventListener(v, A), () => e.removeEventListener(v, A);
	}, [A]), /* @__PURE__ */ g(T, {
		scope: r,
		orientation: o,
		dir: w,
		loop: l,
		currentTabStopId: E,
		onItemFocus: m.useCallback((e) => D(e), [D]),
		onItemShiftTab: m.useCallback(() => k(!0), []),
		onFocusableItemAdd: m.useCallback(() => F((e) => e + 1), []),
		onFocusableItemRemove: m.useCallback(() => F((e) => e - 1), []),
		children: /* @__PURE__ */ g(a.div, {
			tabIndex: O || N === 0 ? -1 : 0,
			"data-orientation": o,
			...b,
			ref: C,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: c(t.onMouseDown, () => {
				M.current = !0;
			}),
			onFocus: c(t.onFocus, (e) => {
				let t = !M.current;
				if (e.target === e.currentTarget && t && !O) {
					let t = new CustomEvent(v, ee);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = j().filter((e) => e.focusable);
						P([
							e.find((e) => e.active),
							e.find((e) => e.id === E),
							...e
						].filter(Boolean).map((e) => e.ref.current), y);
					}
				}
				M.current = !1;
			}),
			onBlur: c(t.onBlur, () => k(!1))
		})
	});
}), k = "RovingFocusGroupItem", A = m.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: s, ...l } = e, u = o(), d = s || u, f = E(k, n), p = f.currentTabStopId === d, h = x(n), { onFocusableItemAdd: _, onFocusableItemRemove: v } = f;
	return m.useEffect(() => {
		if (r) return _(), () => v();
	}, [
		r,
		_,
		v
	]), /* @__PURE__ */ g(b.ItemSlot, {
		scope: n,
		id: d,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ g(a.span, {
			tabIndex: p ? 0 : -1,
			"data-orientation": f.orientation,
			...l,
			ref: t,
			onMouseDown: c(e.onMouseDown, (e) => {
				r ? f.onItemFocus(d) : e.preventDefault();
			}),
			onFocus: c(e.onFocus, () => f.onItemFocus(d)),
			onKeyDown: c(e.onKeyDown, (e) => {
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
var I = D, L = A, R = "ToggleGroup", [z, te] = n(R, [w]), B = w(), V = h.forwardRef((e, t) => {
	let { type: n, ...r } = e;
	if (n === "single") return /* @__PURE__ */ g(ne, {
		...r,
		ref: t
	});
	if (n === "multiple") return /* @__PURE__ */ g(re, {
		...r,
		ref: t
	});
	throw Error(`Missing prop \`type\` expected on \`${R}\``);
});
V.displayName = R;
var [H, U] = z(R), ne = h.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: a = () => {}, ...o } = e, [s, c] = i({
		prop: n,
		defaultProp: r,
		onChange: a
	});
	return /* @__PURE__ */ g(H, {
		scope: e.__scopeToggleGroup,
		type: "single",
		value: s ? [s] : [],
		onItemActivate: c,
		onItemDeactivate: h.useCallback(() => c(""), [c]),
		children: /* @__PURE__ */ g(W, {
			...o,
			ref: t
		})
	});
}), re = h.forwardRef((e, t) => {
	let { value: n, defaultValue: r, onValueChange: a = () => {}, ...o } = e, [s = [], c] = i({
		prop: n,
		defaultProp: r,
		onChange: a
	}), l = h.useCallback((e) => c((t = []) => [...t, e]), [c]), u = h.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
	return /* @__PURE__ */ g(H, {
		scope: e.__scopeToggleGroup,
		type: "multiple",
		value: s,
		onItemActivate: l,
		onItemDeactivate: u,
		children: /* @__PURE__ */ g(W, {
			...o,
			ref: t
		})
	});
});
V.displayName = R;
var [ie, ae] = z(R), W = h.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: i = !0, orientation: o, dir: s, loop: c = !0, ...l } = e, u = B(n), f = d(s), p = {
		role: "group",
		dir: f,
		...l
	};
	return /* @__PURE__ */ g(ie, {
		scope: n,
		rovingFocus: i,
		disabled: r,
		children: i ? /* @__PURE__ */ g(I, {
			asChild: !0,
			...u,
			orientation: o,
			dir: f,
			loop: c,
			children: /* @__PURE__ */ g(a.div, {
				...p,
				ref: t
			})
		}) : /* @__PURE__ */ g(a.div, {
			...p,
			ref: t
		})
	});
}), G = "ToggleGroupItem", K = h.forwardRef((e, t) => {
	let n = U(G, e.__scopeToggleGroup), r = ae(G, e.__scopeToggleGroup), i = B(e.__scopeToggleGroup), a = n.value.includes(e.value), o = r.disabled || e.disabled, s = {
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
	}, s = a.type === "single" ? o : void 0;
	return /* @__PURE__ */ g(p, {
		...s,
		...i,
		ref: t,
		onPressedChange: (e) => {
			e ? a.onItemActivate(r) : a.onItemDeactivate(r);
		}
	});
}), J = V, Y = K, X = t({
	base: l("inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground", u()),
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
}), oe = m.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ g(f, {
	ref: i,
	className: l(X({
		variant: t,
		size: n,
		className: e
	})),
	...r
}));
oe.displayName = f.displayName;
//#endregion
//#region src/deprecated/ToggleGroup/ToggleGroup.tsx
var Z = m.createContext({
	size: "default",
	variant: "default"
}), Q = m.forwardRef(({ className: e, variant: t, size: n, children: r, ...i }, a) => /* @__PURE__ */ g(J, {
	ref: a,
	className: l("flex items-center justify-center gap-1.5", e),
	...i,
	children: /* @__PURE__ */ g(Z.Provider, {
		value: {
			variant: t,
			size: n
		},
		children: r
	})
}));
Q.displayName = J.displayName;
var $ = m.forwardRef(({ className: e, children: t, variant: n, size: r, ...i }, a) => {
	let o = m.useContext(Z);
	return /* @__PURE__ */ g(Y, {
		ref: a,
		className: l(X({
			variant: o.variant || n,
			size: o.size || r
		}), e),
		...i,
		children: t
	});
});
$.displayName = Y.displayName;
//#endregion
export { _ as a, K as i, $ as n, V as r, Q as t };
