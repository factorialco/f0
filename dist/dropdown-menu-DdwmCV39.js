import { A as e, At as t, F as n, I as r, M as i, N as a, P as o, j as s, k as c } from "./popover-Sbb5IAHu.js";
import { D as l, E as u, F as d, I as f, M as p, N as m, O as h, P as g, c as _, d as ee, f as v, j as y, k as b, l as x, o as S, p as C, s as w, u as te, w as T } from "./tooltip-BGly0G_l.js";
import * as E from "react";
import { forwardRef as D } from "react";
import { jsx as O, jsxs as k } from "react/jsx-runtime";
var A = D((e, t) => /* @__PURE__ */ k("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ O("circle", {
			cx: 12,
			cy: 12,
			r: 8,
			stroke: "currentColor"
		}),
		/* @__PURE__ */ O("path", {
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M19 12H5.00001"
		}),
		/* @__PURE__ */ O("path", {
			stroke: "currentColor",
			d: "M12 20C10.2326 18.1964 9.00001 14.7247 9.00001 12C9.00001 9.27527 10.2326 5.80363 12 4"
		}),
		/* @__PURE__ */ O("path", {
			stroke: "currentColor",
			d: "M12 20C13.7674 18.1964 15 14.7247 15 12C15 9.27527 13.7674 5.80363 12 4"
		})
	]
})), ne = D((e, t) => /* @__PURE__ */ k("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ O("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M13.5 10.5L19 5M19 5H15M19 5V9"
	}), /* @__PURE__ */ O("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M10.5 13.5L5 19M5 19H9M5 19V15"
	})]
})), j = D((e, t) => /* @__PURE__ */ k("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ O("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M19 5L13.5 10.5M13.5 10.5L17.5 10.5M13.5 10.5L13.5 6.5"
	}), /* @__PURE__ */ O("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M5 19L10.5 13.5M10.5 13.5L6.5 13.5M10.5 13.5L10.5 17.5"
	})]
})), M = D((e, t) => /* @__PURE__ */ k("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ O("path", {
		fill: "currentColor",
		d: "M5.99999 17V6.99999C5.99999 5.89542 6.89542 4.99999 7.99999 4.99999C9.10456 4.99999 9.99999 5.89542 9.99999 6.99999V17C9.99999 18.1046 9.10456 19 7.99999 19C6.89542 19 5.99999 18.1046 5.99999 17Z"
	}), /* @__PURE__ */ O("path", {
		fill: "currentColor",
		d: "M14 17V6.99999C14 5.89542 14.8954 4.99999 16 4.99999C17.1046 4.99999 18 5.89542 18 6.99999V17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17Z"
	})]
})), re = D((e, t) => /* @__PURE__ */ O("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ O("path", {
		fill: "currentColor",
		d: "M5.99988 16.5536V7.44636C5.99988 5.91072 7.65884 4.94798 8.99216 5.70988L16.961 10.2635C18.3047 11.0313 18.3047 12.9687 16.961 13.7365L8.99216 18.2901C7.65884 19.052 5.99988 18.0893 5.99988 16.5536Z"
	})
})), N = "rovingFocusGroup.onEntryFocus", ie = {
	bubbles: !1,
	cancelable: !0
}, P = "RovingFocusGroup", [F, ae, oe] = r(P), [I, se] = p(P, [oe]), [ce, le] = I(P), ue = E.forwardRef((e, t) => /* @__PURE__ */ O(F.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ O(F.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ O(de, {
			...e,
			ref: t
		})
	})
}));
ue.displayName = P;
var de = E.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: u, onEntryFocus: f, preventScrollOnEntryFocus: p = !1, ...m } = e, _ = E.useRef(null), ee = g(t, _), v = n(o), [y, b] = S({
		prop: s,
		defaultProp: c ?? null,
		onChange: u,
		caller: P
	}), [x, C] = E.useState(!1), w = l(f), te = ae(r), T = E.useRef(!1), [D, k] = E.useState(0);
	return E.useEffect(() => {
		let e = _.current;
		if (e) return e.addEventListener(N, w), () => e.removeEventListener(N, w);
	}, [w]), /* @__PURE__ */ O(ce, {
		scope: r,
		orientation: i,
		dir: v,
		loop: a,
		currentTabStopId: y,
		onItemFocus: E.useCallback((e) => b(e), [b]),
		onItemShiftTab: E.useCallback(() => C(!0), []),
		onFocusableItemAdd: E.useCallback(() => k((e) => e + 1), []),
		onFocusableItemRemove: E.useCallback(() => k((e) => e - 1), []),
		children: /* @__PURE__ */ O(h.div, {
			tabIndex: x || D === 0 ? -1 : 0,
			"data-orientation": i,
			...m,
			ref: ee,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: d(e.onMouseDown, () => {
				T.current = !0;
			}),
			onFocus: d(e.onFocus, (e) => {
				let t = !T.current;
				if (e.target === e.currentTarget && t && !x) {
					let t = new CustomEvent(N, ie);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = te().filter((e) => e.focusable);
						_e([
							e.find((e) => e.active),
							e.find((e) => e.id === y),
							...e
						].filter(Boolean).map((e) => e.ref.current), p);
					}
				}
				T.current = !1;
			}),
			onBlur: d(e.onBlur, () => C(!1))
		})
	});
}), fe = "RovingFocusGroupItem", pe = E.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, c = T(), l = a || c, u = le(fe, n), f = u.currentTabStopId === l, p = ae(n), { onFocusableItemAdd: m, onFocusableItemRemove: g, currentTabStopId: _ } = u;
	return E.useEffect(() => {
		if (r) return m(), () => g();
	}, [
		r,
		m,
		g
	]), /* @__PURE__ */ O(F.ItemSlot, {
		scope: n,
		id: l,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ O(h.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": u.orientation,
			...s,
			ref: t,
			onMouseDown: d(e.onMouseDown, (e) => {
				r ? u.onItemFocus(l) : e.preventDefault();
			}),
			onFocus: d(e.onFocus, () => u.onItemFocus(l)),
			onKeyDown: d(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					u.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = ge(e, u.orientation, u.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = u.loop ? ve(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => _e(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: f,
				hasTabStop: _ != null
			}) : o
		})
	});
});
pe.displayName = fe;
var me = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function he(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function ge(e, t, n) {
	let r = he(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return me[r];
}
function _e(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ve(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var ye = ue, be = pe, L = ["Enter", " "], xe = [
	"ArrowDown",
	"PageUp",
	"Home"
], Se = [
	"ArrowUp",
	"PageDown",
	"End"
], Ce = [...xe, ...Se], we = {
	ltr: [...L, "ArrowRight"],
	rtl: [...L, "ArrowLeft"]
}, Te = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, R = "Menu", [z, Ee, De] = r(R), [B, Oe] = p(R, [
	De,
	C,
	se
]), V = C(), ke = se(), [Ae, H] = B(R), [je, U] = B(R), Me = (e) => {
	let { __scopeMenu: t, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = e, c = V(t), [u, d] = E.useState(null), f = E.useRef(!1), p = l(o), m = n(a);
	return E.useEffect(() => {
		let e = () => {
			f.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => f.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ O(v, {
		...c,
		children: /* @__PURE__ */ O(Ae, {
			scope: t,
			open: r,
			onOpenChange: p,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ O(je, {
				scope: t,
				onClose: E.useCallback(() => p(!1), [p]),
				isUsingKeyboardRef: f,
				dir: m,
				modal: s,
				children: i
			})
		})
	});
};
Me.displayName = R;
var Ne = "MenuAnchor", W = E.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = V(n);
	return /* @__PURE__ */ O(x, {
		...i,
		...r,
		ref: t
	});
});
W.displayName = Ne;
var G = "MenuPortal", [Pe, Fe] = B(G, { forceMount: void 0 }), Ie = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = H(G, t);
	return /* @__PURE__ */ O(Pe, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ O(w, {
			present: n || a.open,
			children: /* @__PURE__ */ O(_, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ie.displayName = G;
var K = "MenuContent", [Le, Re] = B(K), ze = E.forwardRef((e, t) => {
	let n = Fe(K, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = H(K, e.__scopeMenu), o = U(K, e.__scopeMenu);
	return /* @__PURE__ */ O(z.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ O(w, {
			present: r || a.open,
			children: /* @__PURE__ */ O(z.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ O(Be, {
					...i,
					ref: t
				}) : /* @__PURE__ */ O(Ve, {
					...i,
					ref: t
				})
			})
		})
	});
}), Be = E.forwardRef((e, t) => {
	let n = H(K, e.__scopeMenu), r = E.useRef(null), a = g(t, r);
	return E.useEffect(() => {
		let e = r.current;
		if (e) return i(e);
	}, []), /* @__PURE__ */ O(Ue, {
		...e,
		ref: a,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: d(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), Ve = E.forwardRef((e, t) => {
	let n = H(K, e.__scopeMenu);
	return /* @__PURE__ */ O(Ue, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), He = y("MenuContent.ScrollLock"), Ue = E.forwardRef((e, t) => {
	let { __scopeMenu: n, loop: r = !1, trapFocus: i, onOpenAutoFocus: c, onCloseAutoFocus: l, disableOutsidePointerEvents: f, onEntryFocus: p, onEscapeKeyDown: m, onPointerDownOutside: h, onFocusOutside: _, onInteractOutside: v, onDismiss: y, disableOutsideScroll: b, ...x } = e, S = H(K, n), C = U(K, n), w = V(n), te = ke(n), T = Ee(n), [D, k] = E.useState(null), A = E.useRef(null), ne = g(t, A, S.onContentChange), j = E.useRef(0), M = E.useRef(""), re = E.useRef(0), N = E.useRef(null), ie = E.useRef("right"), P = E.useRef(0), F = b ? s : E.Fragment, ae = b ? {
		as: He,
		allowPinchZoom: !0
	} : void 0, oe = (e) => {
		let t = M.current + e, n = T().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ct(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			M.current = t, window.clearTimeout(j.current), t !== "" && (j.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	E.useEffect(() => () => window.clearTimeout(j.current), []), o();
	let I = E.useCallback((e) => ie.current === N.current?.side && Tt(e, N.current?.area), []);
	return /* @__PURE__ */ O(Le, {
		scope: n,
		searchRef: M,
		onItemEnter: E.useCallback((e) => {
			I(e) && e.preventDefault();
		}, [I]),
		onItemLeave: E.useCallback((e) => {
			I(e) || (A.current?.focus(), k(null));
		}, [I]),
		onTriggerLeave: E.useCallback((e) => {
			I(e) && e.preventDefault();
		}, [I]),
		pointerGraceTimerRef: re,
		onPointerGraceIntentChange: E.useCallback((e) => {
			N.current = e;
		}, []),
		children: /* @__PURE__ */ O(F, {
			...ae,
			children: /* @__PURE__ */ O(a, {
				asChild: !0,
				trapped: i,
				onMountAutoFocus: d(c, (e) => {
					e.preventDefault(), A.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: l,
				children: /* @__PURE__ */ O(u, {
					asChild: !0,
					disableOutsidePointerEvents: f,
					onEscapeKeyDown: m,
					onPointerDownOutside: h,
					onFocusOutside: _,
					onInteractOutside: v,
					onDismiss: y,
					children: /* @__PURE__ */ O(ye, {
						asChild: !0,
						...te,
						dir: C.dir,
						orientation: "vertical",
						loop: r,
						currentTabStopId: D,
						onCurrentTabStopIdChange: k,
						onEntryFocus: d(p, (e) => {
							C.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ O(ee, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": yt(S.open),
							"data-radix-menu-content": "",
							dir: C.dir,
							...w,
							...x,
							ref: ne,
							style: {
								outline: "none",
								...x.style
							},
							onKeyDown: d(x.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && oe(e.key));
								let i = A.current;
								if (e.target !== i || !Ce.includes(e.key)) return;
								e.preventDefault();
								let a = T().filter((e) => !e.disabled).map((e) => e.ref.current);
								Se.includes(e.key) && a.reverse(), xt(a);
							}),
							onBlur: d(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(j.current), M.current = "");
							}),
							onPointerMove: d(e.onPointerMove, Z((e) => {
								let t = e.target, n = P.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > P.current ? "right" : "left";
									ie.current = t, P.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
ze.displayName = K;
var We = "MenuGroup", Ge = E.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ O(h.div, {
		role: "group",
		...r,
		ref: t
	});
});
Ge.displayName = We;
var Ke = "MenuLabel", qe = E.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ O(h.div, {
		...r,
		ref: t
	});
});
qe.displayName = Ke;
var q = "MenuItem", Je = "menu.itemSelect", J = E.forwardRef((e, t) => {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = E.useRef(null), o = U(q, e.__scopeMenu), s = Re(q, e.__scopeMenu), c = g(t, a), l = E.useRef(!1), u = () => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(Je, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Je, (e) => r?.(e), { once: !0 }), b(e, t), t.defaultPrevented ? l.current = !1 : o.onClose();
		}
	};
	return /* @__PURE__ */ O(Ye, {
		...i,
		ref: c,
		disabled: n,
		onClick: d(e.onClick, u),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), l.current = !0;
		},
		onPointerUp: d(e.onPointerUp, (e) => {
			l.current || e.currentTarget?.click();
		}),
		onKeyDown: d(e.onKeyDown, (e) => {
			let t = s.searchRef.current !== "";
			n || t && e.key === " " || L.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
J.displayName = q;
var Ye = E.forwardRef((e, t) => {
	let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e, o = Re(q, n), s = ke(n), c = E.useRef(null), l = g(t, c), [u, f] = E.useState(!1), [p, m] = E.useState("");
	return E.useEffect(() => {
		let e = c.current;
		e && m((e.textContent ?? "").trim());
	}, [a.children]), /* @__PURE__ */ O(z.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: i ?? p,
		children: /* @__PURE__ */ O(be, {
			asChild: !0,
			...s,
			focusable: !r,
			children: /* @__PURE__ */ O(h.div, {
				role: "menuitem",
				"data-highlighted": u ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...a,
				ref: l,
				onPointerMove: d(e.onPointerMove, Z((e) => {
					r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: d(e.onPointerLeave, Z((e) => o.onItemLeave(e))),
				onFocus: d(e.onFocus, () => f(!0)),
				onBlur: d(e.onBlur, () => f(!1))
			})
		})
	});
}), Xe = "MenuCheckboxItem", Ze = E.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ O(at, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ O(J, {
			role: "menuitemcheckbox",
			"aria-checked": X(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": bt(n),
			onSelect: d(i.onSelect, () => r?.(X(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ze.displayName = Xe;
var Qe = "MenuRadioGroup", [$e, et] = B(Qe, {
	value: void 0,
	onValueChange: () => {}
}), tt = E.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = l(r);
	return /* @__PURE__ */ O($e, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ O(Ge, {
			...i,
			ref: t
		})
	});
});
tt.displayName = Qe;
var nt = "MenuRadioItem", rt = E.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = et(nt, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ O(at, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ O(J, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": bt(a),
			onSelect: d(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
rt.displayName = nt;
var it = "MenuItemIndicator", [at, ot] = B(it, { checked: !1 }), st = E.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = ot(it, n);
	return /* @__PURE__ */ O(w, {
		present: r || X(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ O(h.span, {
			...i,
			ref: t,
			"data-state": bt(a.checked)
		})
	});
});
st.displayName = it;
var ct = "MenuSeparator", lt = E.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ O(h.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
lt.displayName = ct;
var ut = "MenuArrow", dt = E.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = V(n);
	return /* @__PURE__ */ O(te, {
		...i,
		...r,
		ref: t
	});
});
dt.displayName = ut;
var ft = "MenuSub", [pt, mt] = B(ft), ht = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e, a = H(ft, t), o = V(t), [s, c] = E.useState(null), [u, d] = E.useState(null), f = l(i);
	return E.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ O(v, {
		...o,
		children: /* @__PURE__ */ O(Ae, {
			scope: t,
			open: r,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ O(pt, {
				scope: t,
				contentId: T(),
				triggerId: T(),
				trigger: s,
				onTriggerChange: c,
				children: n
			})
		})
	});
};
ht.displayName = ft;
var Y = "MenuSubTrigger", gt = E.forwardRef((e, t) => {
	let n = H(Y, e.__scopeMenu), r = U(Y, e.__scopeMenu), i = mt(Y, e.__scopeMenu), a = Re(Y, e.__scopeMenu), o = E.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = E.useCallback(() => {
		o.current && window.clearTimeout(o.current), o.current = null;
	}, []);
	return E.useEffect(() => u, [u]), E.useEffect(() => {
		let e = s.current;
		return () => {
			window.clearTimeout(e), c(null);
		};
	}, [s, c]), /* @__PURE__ */ O(W, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ O(Ye, {
			id: i.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": i.contentId,
			"data-state": yt(n.open),
			...e,
			ref: m(t, i.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: d(e.onPointerMove, Z((t) => {
				a.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !o.current && (a.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
					n.onOpenChange(!0), u();
				}, 100));
			})),
			onPointerLeave: d(e.onPointerLeave, Z((e) => {
				u();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", o = i ? -5 : 5, c = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					a.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + o,
								y: e.clientY
							},
							{
								x: c,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: c,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(s.current), s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300);
				} else {
					if (a.onTriggerLeave(e), e.defaultPrevented) return;
					a.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: d(e.onKeyDown, (t) => {
				let i = a.searchRef.current !== "";
				e.disabled || i && t.key === " " || we[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
gt.displayName = Y;
var _t = "MenuSubContent", vt = E.forwardRef((e, t) => {
	let n = Fe(K, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = H(K, e.__scopeMenu), o = U(K, e.__scopeMenu), s = mt(_t, e.__scopeMenu), c = E.useRef(null), l = g(t, c);
	return /* @__PURE__ */ O(z.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ O(w, {
			present: r || a.open,
			children: /* @__PURE__ */ O(z.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ O(Ue, {
					id: s.contentId,
					"aria-labelledby": s.triggerId,
					...i,
					ref: l,
					align: "start",
					side: o.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						o.isUsingKeyboardRef.current && c.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: d(e.onFocusOutside, (e) => {
						e.target !== s.trigger && a.onOpenChange(!1);
					}),
					onEscapeKeyDown: d(e.onEscapeKeyDown, (e) => {
						o.onClose(), e.preventDefault();
					}),
					onKeyDown: d(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Te[o.dir].includes(e.key);
						t && n && (a.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
vt.displayName = _t;
function yt(e) {
	return e ? "open" : "closed";
}
function X(e) {
	return e === "indeterminate";
}
function bt(e) {
	return X(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function xt(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function St(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Ct(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = St(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function wt(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Tt(e, t) {
	return t ? wt({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Z(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Et = Me, Dt = W, Ot = Ie, kt = ze, At = Ge, jt = qe, Mt = J, Nt = Ze, Pt = tt, Ft = rt, It = st, Lt = lt, Rt = dt, zt = ht, Bt = gt, Vt = vt, Q = "DropdownMenu", [Ht, Ut] = p(Q, [Oe]), $ = Oe(), [Wt, Gt] = Ht(Q), Kt = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = $(t), l = E.useRef(null), [u, d] = S({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Q
	});
	return /* @__PURE__ */ O(Wt, {
		scope: t,
		triggerId: T(),
		triggerRef: l,
		contentId: T(),
		open: u,
		onOpenChange: d,
		onOpenToggle: E.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ O(Et, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
};
Kt.displayName = Q;
var qt = "DropdownMenuTrigger", Jt = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Gt(qt, n), o = $(n);
	return /* @__PURE__ */ O(Dt, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ O(h.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: m(t, a.triggerRef),
			onPointerDown: d(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: d(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
Jt.displayName = qt;
var Yt = "DropdownMenuPortal", Xt = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ O(Ot, {
		...r,
		...n
	});
};
Xt.displayName = Yt;
var Zt = "DropdownMenuContent", Qt = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Gt(Zt, n), a = $(n), o = E.useRef(!1);
	return /* @__PURE__ */ O(kt, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: d(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: d(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Qt.displayName = Zt;
var $t = "DropdownMenuGroup", en = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(At, {
		...i,
		...r,
		ref: t
	});
});
en.displayName = $t;
var tn = "DropdownMenuLabel", nn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(jt, {
		...i,
		...r,
		ref: t
	});
});
nn.displayName = tn;
var rn = "DropdownMenuItem", an = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Mt, {
		...i,
		...r,
		ref: t
	});
});
an.displayName = rn;
var on = "DropdownMenuCheckboxItem", sn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Nt, {
		...i,
		...r,
		ref: t
	});
});
sn.displayName = on;
var cn = "DropdownMenuRadioGroup", ln = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Pt, {
		...i,
		...r,
		ref: t
	});
});
ln.displayName = cn;
var un = "DropdownMenuRadioItem", dn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Ft, {
		...i,
		...r,
		ref: t
	});
});
dn.displayName = un;
var fn = "DropdownMenuItemIndicator", pn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(It, {
		...i,
		...r,
		ref: t
	});
});
pn.displayName = fn;
var mn = "DropdownMenuSeparator", hn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Lt, {
		...i,
		...r,
		ref: t
	});
});
hn.displayName = mn;
var gn = "DropdownMenuArrow", _n = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Rt, {
		...i,
		...r,
		ref: t
	});
});
_n.displayName = gn;
var vn = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = $(t), [s, c] = S({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ O(zt, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, yn = "DropdownMenuSubTrigger", bn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Bt, {
		...i,
		...r,
		ref: t
	});
});
bn.displayName = yn;
var xn = "DropdownMenuSubContent", Sn = E.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Vt, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Sn.displayName = xn;
var Cn = Kt, wn = Jt, Tn = Xt, En = Qt, Dn = en, On = nn, kn = an, An = sn, jn = ln, Mn = dn, Nn = pn, Pn = hn, Fn = vn, In = bn, Ln = Sn, Rn = e("Check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), zn = e("Circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Bn = Cn, Vn = wn, Hn = Dn, Un = Tn, Wn = Fn, Gn = jn, Kn = E.forwardRef(({ className: e, inset: n, children: r, ...i }, a) => /* @__PURE__ */ k(In, {
	ref: a,
	className: f("flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", n && "pl-8", e),
	...i,
	children: [r, /* @__PURE__ */ O(t, {
		icon: c,
		size: "md",
		className: "ml-auto"
	})]
}));
Kn.displayName = In.displayName;
var qn = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O(Ln, {
	ref: n,
	className: f("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
qn.displayName = Ln.displayName;
var Jn = E.forwardRef(({ className: e, sideOffset: t = 4, container: n, ...r }, i) => /* @__PURE__ */ O(Tn, {
	container: n ?? void 0,
	children: /* @__PURE__ */ O(En, {
		ref: i,
		sideOffset: t,
		className: f("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-dropdown-menu-content-transform-origin)]", e),
		...r
	})
}));
Jn.displayName = En.displayName;
var Yn = E.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ O(kn, {
	onClick: (e) => {
		e.stopPropagation();
	},
	ref: r,
	className: f("relative flex cursor-default select-none items-center rounded py-2 pl-3 pr-5 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "only:after:inset-y-1 only:after:h-auto", "focus:outline-none focus:ring-0 focus:ring-transparent", t && "pl-8", e),
	...n
}));
Yn.displayName = kn.displayName;
var Xn = E.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ k(An, {
	ref: i,
	className: f("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ O("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ O(Nn, { children: /* @__PURE__ */ O(Rn, { className: "h-4 w-4" }) })
	}), t]
}));
Xn.displayName = An.displayName;
var Zn = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(Mn, {
	ref: r,
	className: f("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ O("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ O(Nn, { children: /* @__PURE__ */ O(zn, { className: "h-2 w-2 fill-current" }) })
	}), t]
}));
Zn.displayName = Mn.displayName;
var Qn = E.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ O(On, {
	ref: r,
	className: f("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
	...n
}));
Qn.displayName = On.displayName;
var $n = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ O(Pn, {
	ref: n,
	className: f("-mx-1 my-1 h-px bg-f1-border-secondary", e),
	...t
}));
$n.displayName = Pn.displayName;
//#endregion
export { j as _, Qn as a, Zn as c, qn as d, Kn as f, M as g, re as h, Yn as i, $n as l, kn as m, Jn as n, Un as o, Vn as p, Hn as r, Gn as s, Bn as t, Wn as u, ne as v, A as y };
