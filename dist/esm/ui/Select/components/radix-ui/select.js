import * as e from "react";
import * as t from "react-dom";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
import { useComposedRefs as a } from "@radix-ui/react-compose-refs";
import { useControllableState as o } from "@radix-ui/react-use-controllable-state";
import { createSlot as s } from "@radix-ui/react-slot";
import { clamp as c } from "@radix-ui/number";
import { composeEventHandlers as l } from "@radix-ui/primitive";
import { createCollection as u } from "@radix-ui/react-collection";
import { createContextScope as d } from "@radix-ui/react-context";
import { useDirection as f } from "@radix-ui/react-direction";
import { DismissableLayer as p } from "@radix-ui/react-dismissable-layer";
import { useFocusGuards as m } from "@radix-ui/react-focus-guards";
import { FocusScope as h } from "@radix-ui/react-focus-scope";
import { useId as g } from "@radix-ui/react-id";
import * as _ from "@radix-ui/react-popper";
import { createPopperScope as v } from "@radix-ui/react-popper";
import { Portal as y } from "@radix-ui/react-portal";
import { Primitive as b } from "@radix-ui/react-primitive";
import { useCallbackRef as x } from "@radix-ui/react-use-callback-ref";
import { useLayoutEffect as S } from "@radix-ui/react-use-layout-effect";
import { usePrevious as C } from "@radix-ui/react-use-previous";
import { VISUALLY_HIDDEN_STYLES as w } from "@radix-ui/react-visually-hidden";
import { hideOthers as T } from "aria-hidden";
import { RemoveScroll as E } from "react-remove-scroll";
//#region src/ui/Select/components/radix-ui/select.tsx
var D = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], O = [" ", "Enter"], k = 50, A = "Select", [j, M, ee] = u(A), [N, P] = d(A, [ee, v]), F = v(), [te, I] = N(A), [ne, L] = N(A), R = (t) => {
	let { __scopeSelect: n, children: a, open: s, defaultOpen: c, onOpenChange: l, value: u, defaultValue: d, onValueChange: p, onItemCheckChange: m, dir: h, name: v, autoComplete: y, disabled: b, required: x, form: S, multiple: C } = t, w = F(n), [T, E] = e.useState(null), [D, O] = e.useState(null), [k, M] = e.useState(!1), ee = f(h), [N, P] = o({
		prop: s,
		defaultProp: c ?? !1,
		onChange: l,
		caller: A
	}), [I, L] = o({
		prop: u,
		defaultProp: d,
		onChange: p,
		caller: A
	}), R = e.useRef(null), z = !T || S || !!T.closest("form"), [B, V] = e.useState(/* @__PURE__ */ new Set()), H = Array.from(B).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ r(_.Root, {
		...w,
		children: /* @__PURE__ */ i(te, {
			required: x,
			scope: n,
			trigger: T,
			onTriggerChange: E,
			valueNode: D,
			onValueNodeChange: O,
			valueNodeHasChildren: k,
			onValueNodeHasChildrenChange: M,
			contentId: g(),
			value: I,
			onValueChange: (e) => L(e),
			onItemCheckChange: m,
			open: N,
			onOpenChange: P,
			dir: ee,
			triggerPointerDownPosRef: R,
			disabled: b,
			multiple: C,
			children: [/* @__PURE__ */ r(j.Provider, {
				scope: n,
				children: /* @__PURE__ */ r(ne, {
					scope: t.__scopeSelect,
					onNativeOptionAdd: e.useCallback((e) => {
						V((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: e.useCallback((e) => {
						V((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: a
				})
			}), z ? /* @__PURE__ */ i(Be, {
				"aria-hidden": !0,
				required: x,
				tabIndex: -1,
				name: v,
				autoComplete: y,
				value: I,
				onChange: (e) => {
					L(C ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : e.target.value);
				},
				disabled: b,
				form: S,
				multiple: C,
				children: [I === void 0 ? /* @__PURE__ */ r("option", { value: "" }) : null, Array.from(B)]
			}, H) : null]
		})
	});
};
R.displayName = A;
var z = "SelectTrigger", B = e.forwardRef((t, n) => {
	let { __scopeSelect: i, disabled: o = !1, ...s } = t, c = F(i), u = I(z, i), d = u.disabled || o, f = a(n, u.onTriggerChange), p = M(i), m = e.useRef("touch"), [h, g, v] = He((e) => {
		let t = p().filter((e) => !e.disabled), n = Ue(t, e, t.find((e) => e.value === u.value));
		n !== void 0 && u.onValueChange(n.value);
	}), y = (e) => {
		d || (u.onOpenChange(!0), v()), e && (u.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ r(_.Anchor, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ r(b.button, {
			type: "button",
			role: "combobox",
			"aria-controls": u.contentId,
			"aria-expanded": u.open,
			"aria-required": u.required,
			"aria-autocomplete": "none",
			dir: u.dir,
			"data-state": u.open ? "open" : "closed",
			disabled: d,
			"data-disabled": d ? "" : void 0,
			"data-placeholder": Ve(u.value) ? "" : void 0,
			...s,
			ref: f,
			onClick: l(s.onClick, (e) => {
				e.currentTarget.focus(), m.current !== "mouse" && y(e);
			}),
			onPointerDown: l(s.onPointerDown, (e) => {
				m.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (y(e), e.preventDefault());
			}),
			onKeyDown: l(s.onKeyDown, (e) => {
				let t = h.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && g(e.key), !(t && e.key === " ") && D.includes(e.key) && (y(), e.preventDefault());
			})
		})
	});
});
B.displayName = z;
var V = "SelectValue", H = e.forwardRef((e, t) => {
	let { __scopeSelect: i, className: o, style: s, children: c, placeholder: l = "", ...u } = e, d = I(V, i), { onValueNodeHasChildrenChange: f } = d, p = c !== void 0, m = a(t, d.onValueNodeChange);
	return S(() => {
		f(p);
	}, [f, p]), /* @__PURE__ */ r(b.span, {
		...u,
		ref: m,
		style: { pointerEvents: "none" },
		children: Ve(d.value) ? /* @__PURE__ */ r(n, { children: l }) : c
	});
});
H.displayName = V;
var U = "SelectIcon", W = e.forwardRef((e, t) => {
	let { __scopeSelect: n, children: i, ...a } = e;
	return /* @__PURE__ */ r(b.span, {
		"aria-hidden": !0,
		...a,
		ref: t,
		children: i || "▼"
	});
});
W.displayName = U;
var G = "SelectPortal", K = (e) => /* @__PURE__ */ r(y, {
	asChild: !0,
	...e
});
K.displayName = G;
var q = "SelectContent", J = e.forwardRef((n, i) => {
	let a = I(q, n.__scopeSelect), [o, s] = e.useState();
	if (S(() => {
		s(new DocumentFragment());
	}, []), !a.open) {
		let e = o;
		return e ? t.createPortal(/* @__PURE__ */ r(re, {
			scope: n.__scopeSelect,
			children: /* @__PURE__ */ r(j.Slot, {
				scope: n.__scopeSelect,
				children: /* @__PURE__ */ r("div", { children: n.children })
			})
		}), e) : null;
	}
	return /* @__PURE__ */ r(se, {
		...n,
		ref: i
	});
});
J.displayName = q;
var Y = 10, [re, X] = N(q), ie = "SelectContentImpl", ae = s("SelectContent.RemoveScroll"), oe = ({ disableScrollLock: e, children: t }) => e ? t : /* @__PURE__ */ r(E, {
	as: ae,
	allowPinchZoom: !0,
	children: t
}), se = e.forwardRef((t, n) => {
	let { __scopeSelect: i, position: o = "item-aligned", onCloseAutoFocus: s, onEscapeKeyDown: c, onPointerDownOutside: u, disableScrollLock: d = !1, side: f, sideOffset: g, align: _, alignOffset: v, arrowPadding: y, collisionBoundary: b, collisionPadding: x, sticky: S, hideWhenDetached: C, avoidCollisions: w, ...E } = t, D = I(q, i), [O, A] = e.useState(null), [j, ee] = e.useState(null), N = a(n, (e) => A(e)), [P, F] = e.useState(null), [te, ne] = e.useState(null), L = M(i), [R, z] = e.useState(!1), B = e.useRef(!1), V = e.useRef(null);
	e.useEffect(() => {
		if (O && (V.current &&= (V.current(), null), D.open && o === "popper")) {
			let e = T(O);
			return V.current = e, () => {
				e && e(), V.current = null;
			};
		}
	}, [
		O,
		D.open,
		o
	]), m();
	let H = e.useCallback((e) => {
		let [t, ...n] = L().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && j && (j.scrollTop = 0), n === r && j && (j.scrollTop = j.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [L, j]), U = e.useCallback((e = !1) => {
		let t = document.activeElement;
		if (!(t instanceof HTMLElement && t !== O && O?.contains(t) && !e) && !D.multiple) {
			H([P, O]);
			return;
		}
	}, [
		H,
		P,
		O,
		D.multiple
	]), W = e.useRef(!1), G = e.useRef(null), K = e.useRef(U);
	K.current = U, e.useEffect(() => {
		if (!D.open) {
			W.current = !1, G.current = null;
			return;
		}
		if (R && !W.current) {
			let e = !1, t, n = (Array.isArray(D.value) ? D.value : [D.value]).filter((e) => e !== void 0), r = D.value === void 0 || D.value === "", i = D.multiple || P !== null && (r || L().some((e) => e.ref.current === P && n.includes(e.value))), a = setTimeout(() => {
				if (e) return;
				let n = document.activeElement, r = n instanceof HTMLElement && n !== O && O?.contains(n), a = G.current;
				if (r && n !== a) {
					W.current = !0;
					return;
				}
				let o = a ? n === a : n === O || n === D.trigger || n === document.body;
				if (!i) {
					if (!o) {
						W.current = !0;
						return;
					}
					G.current = O, P && (t = setTimeout(() => {
						if (!(e || W.current)) {
							if (document.activeElement !== G.current) {
								W.current = !0;
								return;
							}
							P.focus(), !e && document.activeElement === P && (G.current = P);
						}
					}, k)), O?.focus();
					return;
				}
				W.current = !0, o && K.current(n === a);
			}, 0);
			return () => {
				e = !0, clearTimeout(a), t !== void 0 && clearTimeout(t);
			};
		}
	}, [
		D.multiple,
		D.open,
		D.trigger,
		D.value,
		O,
		L,
		R,
		P
	]);
	let { onOpenChange: J, triggerPointerDownPosRef: Y } = D;
	e.useEffect(() => {
		if (O) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (Y.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (Y.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : O.contains(n.target) || J(!1), document.removeEventListener("pointermove", t), Y.current = null;
			};
			return Y.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		O,
		J,
		Y
	]), e.useEffect(() => {
		let e = () => J(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [J]);
	let [X, ie] = He((e) => {
		let t = L().filter((e) => !e.disabled), n = Ue(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ae = e.useCallback((e, t, n) => {
		let r = (Array.isArray(D.value) ? D.value : [D.value]).filter((e) => e !== void 0), i = !B.current && !n;
		(D.value !== void 0 && r.includes(t) || i) && (F(e), i && (B.current = !0));
	}, [D.value]), se = e.useCallback(() => O?.focus(), [O]), ce = e.useCallback((e, t, n) => {
		let r = !B.current && !n;
		(D.value !== void 0 && D.value === t || r) && ne(e);
	}, [D.value]), Z = o === "popper" ? fe : ue, le = Z === fe ? {
		side: f,
		sideOffset: g,
		align: _,
		alignOffset: v,
		arrowPadding: y,
		collisionBoundary: b,
		collisionPadding: x,
		sticky: S,
		hideWhenDetached: C,
		avoidCollisions: w
	} : {};
	return /* @__PURE__ */ r(re, {
		scope: i,
		content: O,
		viewport: j,
		onViewportChange: ee,
		itemRefCallback: ae,
		selectedItem: P,
		onItemLeave: se,
		itemTextRefCallback: ce,
		focusSelectedItem: U,
		selectedItemText: te,
		position: o,
		isPositioned: R,
		searchRef: X,
		children: /* @__PURE__ */ r(oe, {
			disableScrollLock: d,
			children: /* @__PURE__ */ r(h, {
				asChild: !0,
				trapped: !1,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: l(s, (e) => {
					D.trigger?.isConnected && D.trigger.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ r(p, {
					asChild: !0,
					disableOutsidePointerEvents: !d,
					onEscapeKeyDown: c,
					onPointerDownOutside: u,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => D.onOpenChange(!1),
					children: /* @__PURE__ */ r(Z, {
						"data-radix-select-content": "",
						"data-state": D.open ? "open" : "closed",
						dir: D.dir,
						onContextMenu: (e) => e.preventDefault(),
						...E,
						...le,
						onPlaced: () => z(!0),
						ref: N,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...E.style
						},
						onKeyDown: l(E.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey, n = e.target instanceof HTMLElement && e.target.getAttribute("role") === "searchbox";
							if (e.key === "Tab" && e.preventDefault(), !t && !n && e.key.length === 1 && ie(e.key), ["ArrowUp", "ArrowDown"].includes(e.key) || !n && ["Home", "End"].includes(e.key)) {
								let t = L().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => H(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
se.displayName = ie;
var ce = "SelectListbox", Z = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...i } = e, a = I(ce, n);
	return /* @__PURE__ */ r(b.div, {
		...i,
		ref: t,
		role: "listbox",
		id: a.contentId,
		"aria-multiselectable": a.multiple || void 0
	});
});
Z.displayName = ce;
var le = "SelectItemAlignedPosition", ue = e.forwardRef((t, n) => {
	let { __scopeSelect: i, onPlaced: o, ...s } = t, l = I(q, i), u = X(q, i), [d, f] = e.useState(null), [p, m] = e.useState(null), h = a(n, (e) => m(e)), g = M(i), _ = e.useRef(!1), v = e.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: C, focusSelectedItem: w } = u, T = e.useCallback(() => {
		if (l.trigger && l.valueNode && d && p && y && x && C) {
			let e = l.trigger.getBoundingClientRect(), t = p.getBoundingClientRect(), n = l.valueNode.getBoundingClientRect(), r = C.getBoundingClientRect();
			if (l.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - Y, f = c(a, [Y, Math.max(Y, u - l)]);
				d.style.minWidth = s + "px", d.style.left = f + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - Y, f = c(a, [Y, Math.max(Y, u - l)]);
				d.style.minWidth = s + "px", d.style.right = f + "px";
			}
			let i = g(), a = window.innerHeight - 20, s = y.scrollHeight, u = window.getComputedStyle(p), f = parseInt(u.borderTopWidth, 10), m = parseInt(u.paddingTop, 10), h = parseInt(u.borderBottomWidth, 10), v = parseInt(u.paddingBottom, 10), b = f + m + s + v + h, S = Math.min(x.offsetHeight * 5, b), w = window.getComputedStyle(y), T = parseInt(w.paddingTop, 10), E = parseInt(w.paddingBottom, 10), D = e.top + e.height / 2 - Y, O = a - D, k = x.offsetHeight / 2, A = x.offsetTop + k, j = f + m + A, M = b - j;
			if (j <= D) {
				let e = i.length > 0 && x === i[i.length - 1].ref.current;
				d.style.bottom = "0px";
				let t = p.clientHeight - y.offsetTop - y.offsetHeight, n = j + Math.max(O, k + (e ? E : 0) + t + h);
				d.style.height = n + "px";
			} else {
				let e = i.length > 0 && x === i[0].ref.current;
				d.style.top = "0px";
				let t = Math.max(D, f + y.offsetTop + (e ? T : 0) + k) + M;
				d.style.height = t + "px", y.scrollTop = j - D + y.offsetTop;
			}
			d.style.margin = `${Y}px 0`, d.style.minHeight = S + "px", d.style.maxHeight = a + "px", o?.(), requestAnimationFrame(() => _.current = !0);
		}
	}, [
		g,
		l.trigger,
		l.valueNode,
		d,
		p,
		y,
		x,
		C,
		l.dir,
		o
	]);
	S(() => T(), [T]);
	let [E, D] = e.useState();
	S(() => {
		p && D(window.getComputedStyle(p).zIndex);
	}, [p]);
	let O = e.useCallback((e) => {
		e && v.current === !0 && (T(), w?.(), v.current = !1);
	}, [T, w]);
	return /* @__PURE__ */ r(pe, {
		scope: i,
		contentWrapper: d,
		shouldExpandOnScrollRef: _,
		onScrollButtonChange: O,
		children: /* @__PURE__ */ r("div", {
			ref: f,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: E
			},
			children: /* @__PURE__ */ r(b.div, {
				...s,
				ref: h,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...s.style
				}
			})
		})
	});
});
ue.displayName = le;
var de = "SelectPopperPosition", fe = e.forwardRef((e, t) => {
	let { __scopeSelect: n, align: i = "start", collisionPadding: a = Y, ...o } = e, s = F(n);
	return /* @__PURE__ */ r(_.Content, {
		...s,
		...o,
		ref: t,
		align: i,
		collisionPadding: a,
		style: {
			boxSizing: "border-box",
			...o.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
fe.displayName = de;
var [pe, me] = N(q, {}), he = "SelectViewport", ge = e.forwardRef((t, o) => {
	let { __scopeSelect: s, nonce: c, ...u } = t, d = X(he, s), f = me(he, s), p = a(o, d.onViewportChange), m = e.useRef(0);
	return /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: c
	}), /* @__PURE__ */ r(j.Slot, {
		scope: s,
		children: /* @__PURE__ */ r(b.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...u,
			ref: p,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...u.style
			},
			onScroll: l(u.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = f;
				if (r?.current && n) {
					let e = Math.abs(m.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - 20, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				m.current = t.scrollTop;
			})
		})
	})] });
});
ge.displayName = he;
var _e = "SelectGroup", [ve, ye] = N(_e), be = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...i } = e, a = g();
	return /* @__PURE__ */ r(ve, {
		scope: n,
		id: a,
		children: /* @__PURE__ */ r(b.div, {
			role: "group",
			"aria-labelledby": a,
			...i,
			ref: t
		})
	});
});
be.displayName = _e;
var xe = "SelectLabel", Se = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...i } = e, a = ye(xe, n);
	return /* @__PURE__ */ r(b.div, {
		id: a.id,
		...i,
		ref: t
	});
});
Se.displayName = xe;
var Q = "SelectItem", [Ce, we] = N(Q), Te = e.forwardRef((t, n) => {
	let { __scopeSelect: i, value: o, disabled: s = !1, textValue: c, ...u } = t, d = I(Q, i), f = X(Q, i), p = d.multiple ? d.value?.includes(o) || !1 : d.value === o, [m, h] = e.useState(c ?? ""), [_, v] = e.useState(!1), y = a(n, (e) => f.itemRefCallback?.(e, o, s)), x = g(), S = e.useRef("touch"), C = () => {
		if (!s) {
			if (d.onItemCheckChange?.(o, !p), d.multiple) {
				let e = d.value ?? [], t = p ? e.filter((e) => e !== o) : [...e, o];
				d.onValueChange(t);
			} else d.onValueChange(o), d.onOpenChange(!1);
		}
	};
	if (o === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ r(Ce, {
		scope: i,
		value: o,
		disabled: s,
		textId: x,
		isSelected: p,
		onItemTextChange: e.useCallback((e) => {
			h((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ r(j.ItemSlot, {
			scope: i,
			value: o,
			disabled: s,
			textValue: m,
			children: /* @__PURE__ */ r(b.div, {
				role: "option",
				"aria-labelledby": x,
				"data-highlighted": _ ? "" : void 0,
				"aria-selected": p && _,
				"data-state": p ? "checked" : "unchecked",
				"aria-disabled": s || void 0,
				"data-disabled": s ? "" : void 0,
				tabIndex: s ? void 0 : -1,
				...u,
				ref: y,
				onFocus: l(u.onFocus, () => v(!0)),
				onBlur: l(u.onBlur, () => v(!1)),
				onClick: l(u.onClick, () => {
					S.current !== "mouse" && C();
				}),
				onPointerUp: l(u.onPointerUp, () => {
					S.current === "mouse" && C();
				}),
				onPointerDown: l(u.onPointerDown, (e) => {
					S.current = e.pointerType;
				}),
				onPointerMove: l(u.onPointerMove, (e) => {
					S.current = e.pointerType, s ? f.onItemLeave?.() : S.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: l(u.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && f.onItemLeave?.();
				}),
				onKeyDown: l(u.onKeyDown, (e) => {
					(f.searchRef?.current === "" || e.key !== " ") && (O.includes(e.key) && C(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Te.displayName = Q;
var $ = "SelectItemText", Ee = e.forwardRef((o, s) => {
	let { __scopeSelect: c, className: l, style: u, ...d } = o, f = I($, c), p = X($, c), m = we($, c), h = L($, c), [g, _] = e.useState(null), v = a(s, (e) => _(e), m.onItemTextChange, (e) => p.itemTextRefCallback?.(e, m.value, m.disabled)), y = g?.textContent, x = e.useMemo(() => /* @__PURE__ */ r("option", {
		value: m.value,
		disabled: m.disabled,
		children: y
	}, m.value), [
		m.disabled,
		m.value,
		y
	]), { onNativeOptionAdd: C, onNativeOptionRemove: w } = h;
	return S(() => (C(x), () => w(x)), [
		C,
		w,
		x
	]), /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r(b.span, {
		id: m.textId,
		...d,
		ref: v
	}), m.isSelected && f.valueNode && !f.valueNodeHasChildren ? t.createPortal(d.children, f.valueNode) : null] });
});
Ee.displayName = $;
var De = "SelectItemIndicator", Oe = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...i } = e;
	return we(De, n).isSelected ? /* @__PURE__ */ r(b.span, {
		"aria-hidden": !0,
		...i,
		ref: t
	}) : null;
});
Oe.displayName = De;
var ke = "SelectScrollUpButton", Ae = e.forwardRef((t, n) => {
	let i = X(ke, t.__scopeSelect), o = me(ke, t.__scopeSelect), [s, c] = e.useState(!1), l = a(n, o.onScrollButtonChange);
	return S(() => {
		if (i.viewport && i.isPositioned) {
			let e = i.viewport;
			function t() {
				let t = e.scrollTop > 0;
				c(t);
			}
			return t(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [i.viewport, i.isPositioned]), s ? /* @__PURE__ */ r(Ne, {
		...t,
		ref: l,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = i;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Ae.displayName = ke;
var je = "SelectScrollDownButton", Me = e.forwardRef((t, n) => {
	let i = X(je, t.__scopeSelect), o = me(je, t.__scopeSelect), [s, c] = e.useState(!1), l = a(n, o.onScrollButtonChange);
	return S(() => {
		if (i.viewport && i.isPositioned) {
			let e = i.viewport;
			function t() {
				let t = e.scrollHeight - e.clientHeight, n = Math.ceil(e.scrollTop) < t;
				c(n);
			}
			return t(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [i.viewport, i.isPositioned]), s ? /* @__PURE__ */ r(Ne, {
		...t,
		ref: l,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = i;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
Me.displayName = je;
var Ne = e.forwardRef((t, n) => {
	let { __scopeSelect: i, onAutoScroll: a, ...o } = t, s = X("SelectScrollButton", i), c = e.useRef(null), u = M(i), d = e.useCallback(() => {
		c.current !== null && (window.clearInterval(c.current), c.current = null);
	}, []);
	return e.useEffect(() => () => d(), [d]), S(() => {
		u().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [u]), /* @__PURE__ */ r(b.div, {
		"aria-hidden": !0,
		...o,
		ref: n,
		style: {
			flexShrink: 0,
			...o.style
		},
		onPointerDown: l(o.onPointerDown, () => {
			c.current === null && (c.current = window.setInterval(a, 50));
		}),
		onPointerMove: l(o.onPointerMove, () => {
			s.onItemLeave?.(), c.current === null && (c.current = window.setInterval(a, 50));
		}),
		onPointerLeave: l(o.onPointerLeave, () => {
			d();
		})
	});
});
Ne.displayName = "SelectScrollButtonImpl";
var Pe = "SelectSeparator", Fe = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...i } = e;
	return /* @__PURE__ */ r(b.div, {
		"aria-hidden": !0,
		...i,
		ref: t
	});
});
Fe.displayName = Pe;
var Ie = "SelectArrow", Le = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...i } = e, a = F(n), o = I(Ie, n), s = X(Ie, n);
	return o.open && s.position === "popper" ? /* @__PURE__ */ r(_.Arrow, {
		...a,
		...i,
		ref: t
	}) : null;
});
Le.displayName = Ie;
var Re = "SelectBubbleInput";
function ze(e, t) {
	return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : Array.isArray(e) || Array.isArray(t) ? !1 : e === t;
}
var Be = e.forwardRef(({ __scopeSelect: t, value: n, ...i }, o) => {
	let s = e.useRef(null), c = a(o, s), l = C(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e || ze(l, n)) return;
		let t = Object.getOwnPropertyDescriptor(window.HTMLOptionElement.prototype, "selected")?.set;
		if (t) {
			let r = Array.isArray(n) ? n : [n];
			for (let n of e.options) t.call(n, r.includes(n.value));
		}
		e.dispatchEvent(new Event("change", { bubbles: !0 }));
	}, [l, n]), /* @__PURE__ */ r(b.select, {
		...i,
		style: {
			...w,
			...i.style
		},
		ref: c,
		defaultValue: n
	});
});
Be.displayName = Re;
function Ve(e) {
	return Array.isArray(e) ? e.length === 0 || e.every((e) => e === "") : e === "" || e === void 0;
}
function He(t) {
	let n = x(t), r = e.useRef(""), i = e.useRef(0), a = e.useCallback((e) => {
		let t = r.current + e;
		n(t), (function e(t) {
			r.current = t, window.clearTimeout(i.current), t !== "" && (i.current = window.setTimeout(() => e(""), 1e3));
		})(t);
	}, [n]), o = e.useCallback(() => {
		r.current = "", window.clearTimeout(i.current);
	}, []);
	return e.useEffect(() => () => window.clearTimeout(i.current), []), [
		r,
		a,
		o
	];
}
function Ue(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = We(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function We(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Ge = R, Ke = B, qe = K, Je = J, Ye = Z, Xe = ge, Ze = Te, Qe = Ee, $e = Oe, et = Fe;
//#endregion
export { Je as Content, Ze as Item, $e as ItemIndicator, Qe as ItemText, Ye as Listbox, qe as Portal, Ge as Root, R as Select, Le as SelectArrow, J as SelectContent, be as SelectGroup, W as SelectIcon, Te as SelectItem, Ce as SelectItemContextProvider, Oe as SelectItemIndicator, Ee as SelectItemText, Se as SelectLabel, Z as SelectListbox, K as SelectPortal, Me as SelectScrollDownButton, Ae as SelectScrollUpButton, Fe as SelectSeparator, B as SelectTrigger, H as SelectValue, ge as SelectViewport, et as Separator, Ke as Trigger, Xe as Viewport, we as useSelectItemContext };
