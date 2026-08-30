import { R as e } from "./F0Button-BFtTqm8n.js";
import { t } from "./utils-CVzxZnoI.js";
import { D as n, E as r, F as i, M as a, N as o, O as s, P as c, c as l, d as u, f as d, j as f, k as p, l as m, o as h, p as g, s as _, u as v, w as y } from "./tooltip-BPSwDQpD.js";
import { A as b, F as x, I as S, M as C, N as w, P as T, j as ee, k as E } from "./popover-DDfM6CZG.js";
import * as D from "react";
import { jsx as O, jsxs as k } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@18.3.1_@types+react@18.3.18_react-_5a38b86f3cf460fc62cbabc7e38e59fb/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var A = "rovingFocusGroup.onEntryFocus", j = {
	bubbles: !1,
	cancelable: !0
}, M = "RovingFocusGroup", [N, P, te] = S(M), [F, I] = a(M, [te]), [L, ne] = F(M), R = D.forwardRef((e, t) => /* @__PURE__ */ O(N.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ O(N.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ O(re, {
			...e,
			ref: t
		})
	})
}));
R.displayName = M;
var re = D.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: r, orientation: a, loop: o = !1, dir: l, currentTabStopId: u, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...g } = e, _ = D.useRef(null), v = c(t, _), y = x(l), [b, S] = h({
		prop: u,
		defaultProp: d ?? null,
		onChange: f,
		caller: M
	}), [C, w] = D.useState(!1), T = n(p), ee = P(r), E = D.useRef(!1), [k, N] = D.useState(0);
	return D.useEffect(() => {
		let e = _.current;
		if (e) return e.addEventListener(A, T), () => e.removeEventListener(A, T);
	}, [T]), /* @__PURE__ */ O(L, {
		scope: r,
		orientation: a,
		dir: y,
		loop: o,
		currentTabStopId: b,
		onItemFocus: D.useCallback((e) => S(e), [S]),
		onItemShiftTab: D.useCallback(() => w(!0), []),
		onFocusableItemAdd: D.useCallback(() => N((e) => e + 1), []),
		onFocusableItemRemove: D.useCallback(() => N((e) => e - 1), []),
		children: /* @__PURE__ */ O(s.div, {
			tabIndex: C || k === 0 ? -1 : 0,
			"data-orientation": a,
			...g,
			ref: v,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: i(e.onMouseDown, () => {
				E.current = !0;
			}),
			onFocus: i(e.onFocus, (e) => {
				let t = !E.current;
				if (e.target === e.currentTarget && t && !C) {
					let t = new CustomEvent(A, j);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = ee().filter((e) => e.focusable);
						ce([
							e.find((e) => e.active),
							e.find((e) => e.id === b),
							...e
						].filter(Boolean).map((e) => e.ref.current), m);
					}
				}
				E.current = !1;
			}),
			onBlur: i(e.onBlur, () => w(!1))
		})
	});
}), z = "RovingFocusGroupItem", ie = D.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: a = !1, tabStopId: o, children: c, ...l } = e, u = y(), d = o || u, f = ne(z, n), p = f.currentTabStopId === d, m = P(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: _ } = f;
	return D.useEffect(() => {
		if (r) return h(), () => g();
	}, [
		r,
		h,
		g
	]), /* @__PURE__ */ O(N.ItemSlot, {
		scope: n,
		id: d,
		focusable: r,
		active: a,
		children: /* @__PURE__ */ O(s.span, {
			tabIndex: p ? 0 : -1,
			"data-orientation": f.orientation,
			...l,
			ref: t,
			onMouseDown: i(e.onMouseDown, (e) => {
				r ? f.onItemFocus(d) : e.preventDefault();
			}),
			onFocus: i(e.onFocus, () => f.onItemFocus(d)),
			onKeyDown: i(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					f.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = se(e, f.orientation, f.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = m().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = f.loop ? le(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => ce(n));
				}
			}),
			children: typeof c == "function" ? c({
				isCurrentTabStop: p,
				hasTabStop: _ != null
			}) : c
		})
	});
});
ie.displayName = z;
var ae = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function oe(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function se(e, t, n) {
	let r = oe(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ae[r];
}
function ce(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function le(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var ue = R, de = ie, fe = ["Enter", " "], pe = [
	"ArrowDown",
	"PageUp",
	"Home"
], me = [
	"ArrowUp",
	"PageDown",
	"End"
], he = [...pe, ...me], ge = {
	ltr: [...fe, "ArrowRight"],
	rtl: [...fe, "ArrowLeft"]
}, _e = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, B = "Menu", [V, ve, ye] = S(B), [H, be] = a(B, [
	ye,
	g,
	I
]), U = g(), xe = I(), [Se, W] = H(B), [Ce, G] = H(B), we = (e) => {
	let { __scopeMenu: t, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = e, c = U(t), [l, u] = D.useState(null), f = D.useRef(!1), p = n(o), m = x(a);
	return D.useEffect(() => {
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
	}, []), /* @__PURE__ */ O(d, {
		...c,
		children: /* @__PURE__ */ O(Se, {
			scope: t,
			open: r,
			onOpenChange: p,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ O(Ce, {
				scope: t,
				onClose: D.useCallback(() => p(!1), [p]),
				isUsingKeyboardRef: f,
				dir: m,
				modal: s,
				children: i
			})
		})
	});
};
we.displayName = B;
var Te = "MenuAnchor", Ee = D.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = U(n);
	return /* @__PURE__ */ O(m, {
		...i,
		...r,
		ref: t
	});
});
Ee.displayName = Te;
var De = "MenuPortal", [Oe, ke] = H(De, { forceMount: void 0 }), Ae = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = W(De, t);
	return /* @__PURE__ */ O(Oe, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ O(_, {
			present: n || a.open,
			children: /* @__PURE__ */ O(l, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ae.displayName = De;
var K = "MenuContent", [je, Me] = H(K), Ne = D.forwardRef((e, t) => {
	let n = ke(K, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = W(K, e.__scopeMenu), o = G(K, e.__scopeMenu);
	return /* @__PURE__ */ O(V.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ O(_, {
			present: r || a.open,
			children: /* @__PURE__ */ O(V.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ O(Pe, {
					...i,
					ref: t
				}) : /* @__PURE__ */ O(Fe, {
					...i,
					ref: t
				})
			})
		})
	});
}), Pe = D.forwardRef((e, t) => {
	let n = W(K, e.__scopeMenu), r = D.useRef(null), a = c(t, r);
	return D.useEffect(() => {
		let e = r.current;
		if (e) return C(e);
	}, []), /* @__PURE__ */ O(Le, {
		...e,
		ref: a,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: i(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), Fe = D.forwardRef((e, t) => {
	let n = W(K, e.__scopeMenu);
	return /* @__PURE__ */ O(Le, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), Ie = f("MenuContent.ScrollLock"), Le = D.forwardRef((e, t) => {
	let { __scopeMenu: n, loop: a = !1, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: l, disableOutsidePointerEvents: d, onEntryFocus: f, onEscapeKeyDown: p, onPointerDownOutside: m, onFocusOutside: h, onInteractOutside: g, onDismiss: _, disableOutsideScroll: v, ...y } = e, b = W(K, n), x = G(K, n), S = U(n), C = xe(n), E = ve(n), [k, A] = D.useState(null), j = D.useRef(null), M = c(t, j, b.onContentChange), N = D.useRef(0), P = D.useRef(""), te = D.useRef(0), F = D.useRef(null), I = D.useRef("right"), L = D.useRef(0), ne = v ? ee : D.Fragment, R = v ? {
		as: Ie,
		allowPinchZoom: !0
	} : void 0, re = (e) => {
		let t = P.current + e, n = E().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = _t(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			P.current = t, window.clearTimeout(N.current), t !== "" && (N.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	D.useEffect(() => () => window.clearTimeout(N.current), []), T();
	let z = D.useCallback((e) => I.current === F.current?.side && yt(e, F.current?.area), []);
	return /* @__PURE__ */ O(je, {
		scope: n,
		searchRef: P,
		onItemEnter: D.useCallback((e) => {
			z(e) && e.preventDefault();
		}, [z]),
		onItemLeave: D.useCallback((e) => {
			z(e) || (j.current?.focus(), A(null));
		}, [z]),
		onTriggerLeave: D.useCallback((e) => {
			z(e) && e.preventDefault();
		}, [z]),
		pointerGraceTimerRef: te,
		onPointerGraceIntentChange: D.useCallback((e) => {
			F.current = e;
		}, []),
		children: /* @__PURE__ */ O(ne, {
			...R,
			children: /* @__PURE__ */ O(w, {
				asChild: !0,
				trapped: o,
				onMountAutoFocus: i(s, (e) => {
					e.preventDefault(), j.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: l,
				children: /* @__PURE__ */ O(r, {
					asChild: !0,
					disableOutsidePointerEvents: d,
					onEscapeKeyDown: p,
					onPointerDownOutside: m,
					onFocusOutside: h,
					onInteractOutside: g,
					onDismiss: _,
					children: /* @__PURE__ */ O(ue, {
						asChild: !0,
						...C,
						dir: x.dir,
						orientation: "vertical",
						loop: a,
						currentTabStopId: k,
						onCurrentTabStopIdChange: A,
						onEntryFocus: i(f, (e) => {
							x.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ O(u, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": pt(b.open),
							"data-radix-menu-content": "",
							dir: x.dir,
							...S,
							...y,
							ref: M,
							style: {
								outline: "none",
								...y.style
							},
							onKeyDown: i(y.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && re(e.key));
								let i = j.current;
								if (e.target !== i || !he.includes(e.key)) return;
								e.preventDefault();
								let a = E().filter((e) => !e.disabled).map((e) => e.ref.current);
								me.includes(e.key) && a.reverse(), ht(a);
							}),
							onBlur: i(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(N.current), P.current = "");
							}),
							onPointerMove: i(e.onPointerMove, Z((e) => {
								let t = e.target, n = L.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > L.current ? "right" : "left";
									I.current = t, L.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
Ne.displayName = K;
var Re = "MenuGroup", ze = D.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ O(s.div, {
		role: "group",
		...r,
		ref: t
	});
});
ze.displayName = Re;
var Be = "MenuLabel", Ve = D.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ O(s.div, {
		...r,
		ref: t
	});
});
Ve.displayName = Be;
var q = "MenuItem", He = "menu.itemSelect", J = D.forwardRef((e, t) => {
	let { disabled: n = !1, onSelect: r, ...a } = e, o = D.useRef(null), s = G(q, e.__scopeMenu), l = Me(q, e.__scopeMenu), u = c(t, o), d = D.useRef(!1), f = () => {
		let e = o.current;
		if (!n && e) {
			let t = new CustomEvent(He, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(He, (e) => r?.(e), { once: !0 }), p(e, t), t.defaultPrevented ? d.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ O(Ue, {
		...a,
		ref: u,
		disabled: n,
		onClick: i(e.onClick, f),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), d.current = !0;
		},
		onPointerUp: i(e.onPointerUp, (e) => {
			d.current || e.currentTarget?.click();
		}),
		onKeyDown: i(e.onKeyDown, (e) => {
			let t = l.searchRef.current !== "";
			n || t && e.key === " " || fe.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
J.displayName = q;
var Ue = D.forwardRef((e, t) => {
	let { __scopeMenu: n, disabled: r = !1, textValue: a, ...o } = e, l = Me(q, n), u = xe(n), d = D.useRef(null), f = c(t, d), [p, m] = D.useState(!1), [h, g] = D.useState("");
	return D.useEffect(() => {
		let e = d.current;
		e && g((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ O(V.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: a ?? h,
		children: /* @__PURE__ */ O(de, {
			asChild: !0,
			...u,
			focusable: !r,
			children: /* @__PURE__ */ O(s.div, {
				role: "menuitem",
				"data-highlighted": p ? "" : void 0,
				"aria-disabled": r || void 0,
				"data-disabled": r ? "" : void 0,
				...o,
				ref: f,
				onPointerMove: i(e.onPointerMove, Z((e) => {
					r ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: i(e.onPointerLeave, Z((e) => l.onItemLeave(e))),
				onFocus: i(e.onFocus, () => m(!0)),
				onBlur: i(e.onBlur, () => m(!1))
			})
		})
	});
}), We = "MenuCheckboxItem", Ge = D.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...a } = e;
	return /* @__PURE__ */ O($e, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ O(J, {
			role: "menuitemcheckbox",
			"aria-checked": X(n) ? "mixed" : n,
			...a,
			ref: t,
			"data-state": mt(n),
			onSelect: i(a.onSelect, () => r?.(X(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ge.displayName = We;
var Ke = "MenuRadioGroup", [qe, Je] = H(Ke, {
	value: void 0,
	onValueChange: () => {}
}), Ye = D.forwardRef((e, t) => {
	let { value: r, onValueChange: i, ...a } = e, o = n(i);
	return /* @__PURE__ */ O(qe, {
		scope: e.__scopeMenu,
		value: r,
		onValueChange: o,
		children: /* @__PURE__ */ O(ze, {
			...a,
			ref: t
		})
	});
});
Ye.displayName = Ke;
var Xe = "MenuRadioItem", Ze = D.forwardRef((e, t) => {
	let { value: n, ...r } = e, a = Je(Xe, e.__scopeMenu), o = n === a.value;
	return /* @__PURE__ */ O($e, {
		scope: e.__scopeMenu,
		checked: o,
		children: /* @__PURE__ */ O(J, {
			role: "menuitemradio",
			"aria-checked": o,
			...r,
			ref: t,
			"data-state": mt(o),
			onSelect: i(r.onSelect, () => a.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ze.displayName = Xe;
var Qe = "MenuItemIndicator", [$e, et] = H(Qe, { checked: !1 }), tt = D.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = et(Qe, n);
	return /* @__PURE__ */ O(_, {
		present: r || X(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ O(s.span, {
			...i,
			ref: t,
			"data-state": mt(a.checked)
		})
	});
});
tt.displayName = Qe;
var nt = "MenuSeparator", rt = D.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ O(s.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
rt.displayName = nt;
var it = "MenuArrow", at = D.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = U(n);
	return /* @__PURE__ */ O(v, {
		...i,
		...r,
		ref: t
	});
});
at.displayName = it;
var ot = "MenuSub", [st, ct] = H(ot), lt = (e) => {
	let { __scopeMenu: t, children: r, open: i = !1, onOpenChange: a } = e, o = W(ot, t), s = U(t), [c, l] = D.useState(null), [u, f] = D.useState(null), p = n(a);
	return D.useEffect(() => (o.open === !1 && p(!1), () => p(!1)), [o.open, p]), /* @__PURE__ */ O(d, {
		...s,
		children: /* @__PURE__ */ O(Se, {
			scope: t,
			open: i,
			onOpenChange: p,
			content: u,
			onContentChange: f,
			children: /* @__PURE__ */ O(st, {
				scope: t,
				contentId: y(),
				triggerId: y(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
};
lt.displayName = ot;
var Y = "MenuSubTrigger", ut = D.forwardRef((e, t) => {
	let n = W(Y, e.__scopeMenu), r = G(Y, e.__scopeMenu), a = ct(Y, e.__scopeMenu), s = Me(Y, e.__scopeMenu), c = D.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = s, d = { __scopeMenu: e.__scopeMenu }, f = D.useCallback(() => {
		c.current && window.clearTimeout(c.current), c.current = null;
	}, []);
	return D.useEffect(() => f, [f]), D.useEffect(() => {
		let e = l.current;
		return () => {
			window.clearTimeout(e), u(null);
		};
	}, [l, u]), /* @__PURE__ */ O(Ee, {
		asChild: !0,
		...d,
		children: /* @__PURE__ */ O(Ue, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": a.contentId,
			"data-state": pt(n.open),
			...e,
			ref: o(t, a.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: i(e.onPointerMove, Z((t) => {
				s.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !c.current && (s.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
					n.onOpenChange(!0), f();
				}, 100));
			})),
			onPointerLeave: i(e.onPointerLeave, Z((e) => {
				f();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", a = i ? -5 : 5, o = t[i ? "left" : "right"], c = t[i ? "right" : "left"];
					s.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: o,
								y: t.top
							},
							{
								x: c,
								y: t.top
							},
							{
								x: c,
								y: t.bottom
							},
							{
								x: o,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(l.current), l.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300);
				} else {
					if (s.onTriggerLeave(e), e.defaultPrevented) return;
					s.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: i(e.onKeyDown, (t) => {
				let i = s.searchRef.current !== "";
				e.disabled || i && t.key === " " || ge[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
ut.displayName = Y;
var dt = "MenuSubContent", ft = D.forwardRef((e, t) => {
	let n = ke(K, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, o = W(K, e.__scopeMenu), s = G(K, e.__scopeMenu), l = ct(dt, e.__scopeMenu), u = D.useRef(null), d = c(t, u);
	return /* @__PURE__ */ O(V.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ O(_, {
			present: r || o.open,
			children: /* @__PURE__ */ O(V.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ O(Le, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...a,
					ref: d,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: i(e.onFocusOutside, (e) => {
						e.target !== l.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: i(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: i(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = _e[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
ft.displayName = dt;
function pt(e) {
	return e ? "open" : "closed";
}
function X(e) {
	return e === "indeterminate";
}
function mt(e) {
	return X(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ht(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function gt(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function _t(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = gt(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function vt(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function yt(e, t) {
	return t ? vt({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Z(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var bt = we, xt = Ee, St = Ae, Ct = Ne, wt = ze, Tt = Ve, Et = J, Dt = Ge, Ot = Ye, kt = Ze, At = tt, jt = rt, Mt = at, Nt = lt, Pt = ut, Ft = ft, Q = "DropdownMenu", [It, Lt] = a(Q, [be]), $ = be(), [Rt, zt] = It(Q), Bt = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = $(t), l = D.useRef(null), [u, d] = h({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Q
	});
	return /* @__PURE__ */ O(Rt, {
		scope: t,
		triggerId: y(),
		triggerRef: l,
		contentId: y(),
		open: u,
		onOpenChange: d,
		onOpenToggle: D.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ O(bt, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
};
Bt.displayName = Q;
var Vt = "DropdownMenuTrigger", Ht = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, c = zt(Vt, n), l = $(n);
	return /* @__PURE__ */ O(xt, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ O(s.button, {
			type: "button",
			id: c.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": c.open,
			"aria-controls": c.open ? c.contentId : void 0,
			"data-state": c.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...a,
			ref: o(t, c.triggerRef),
			onPointerDown: i(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (c.onOpenToggle(), c.open || e.preventDefault());
			}),
			onKeyDown: i(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && c.onOpenToggle(), e.key === "ArrowDown" && c.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
Ht.displayName = Vt;
var Ut = "DropdownMenuPortal", Wt = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ O(St, {
		...r,
		...n
	});
};
Wt.displayName = Ut;
var Gt = "DropdownMenuContent", Kt = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, a = zt(Gt, n), o = $(n), s = D.useRef(!1);
	return /* @__PURE__ */ O(Ct, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...r,
		ref: t,
		onCloseAutoFocus: i(e.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: i(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
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
Kt.displayName = Gt;
var qt = "DropdownMenuGroup", Jt = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(wt, {
		...i,
		...r,
		ref: t
	});
});
Jt.displayName = qt;
var Yt = "DropdownMenuLabel", Xt = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Tt, {
		...i,
		...r,
		ref: t
	});
});
Xt.displayName = Yt;
var Zt = "DropdownMenuItem", Qt = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Et, {
		...i,
		...r,
		ref: t
	});
});
Qt.displayName = Zt;
var $t = "DropdownMenuCheckboxItem", en = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Dt, {
		...i,
		...r,
		ref: t
	});
});
en.displayName = $t;
var tn = "DropdownMenuRadioGroup", nn = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Ot, {
		...i,
		...r,
		ref: t
	});
});
nn.displayName = tn;
var rn = "DropdownMenuRadioItem", an = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(kt, {
		...i,
		...r,
		ref: t
	});
});
an.displayName = rn;
var on = "DropdownMenuItemIndicator", sn = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(At, {
		...i,
		...r,
		ref: t
	});
});
sn.displayName = on;
var cn = "DropdownMenuSeparator", ln = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(jt, {
		...i,
		...r,
		ref: t
	});
});
ln.displayName = cn;
var un = "DropdownMenuArrow", dn = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Mt, {
		...i,
		...r,
		ref: t
	});
});
dn.displayName = un;
var fn = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = $(t), [s, c] = h({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ O(Nt, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, pn = "DropdownMenuSubTrigger", mn = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Pt, {
		...i,
		...r,
		ref: t
	});
});
mn.displayName = pn;
var hn = "DropdownMenuSubContent", gn = D.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ O(Ft, {
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
gn.displayName = hn;
var _n = Bt, vn = Ht, yn = Wt, bn = Kt, xn = Jt, Sn = Xt, Cn = Qt, wn = en, Tn = nn, En = an, Dn = sn, On = ln, kn = fn, An = mn, jn = gn, Mn = b("Check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Nn = b("Circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Pn = _n, Fn = vn, In = xn, Ln = yn, Rn = kn, zn = Tn, Bn = D.forwardRef(({ className: n, inset: r, children: i, ...a }, o) => /* @__PURE__ */ k(An, {
	ref: o,
	className: t("flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", r && "pl-8", n),
	...a,
	children: [i, /* @__PURE__ */ O(e, {
		icon: E,
		size: "md",
		className: "ml-auto"
	})]
}));
Bn.displayName = An.displayName;
var Vn = D.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ O(jn, {
	ref: r,
	className: t("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}));
Vn.displayName = jn.displayName;
var Hn = D.forwardRef(({ className: e, sideOffset: n = 4, container: r, ...i }, a) => /* @__PURE__ */ O(yn, {
	container: r ?? void 0,
	children: /* @__PURE__ */ O(bn, {
		ref: a,
		sideOffset: n,
		className: t("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-dropdown-menu-content-transform-origin)]", e),
		...i
	})
}));
Hn.displayName = bn.displayName;
var Un = D.forwardRef(({ className: e, inset: n, ...r }, i) => /* @__PURE__ */ O(Cn, {
	onClick: (e) => {
		e.stopPropagation();
	},
	ref: i,
	className: t("relative flex cursor-default select-none items-center rounded py-2 pl-3 pr-5 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "only:after:inset-y-1 only:after:h-auto", "focus:outline-none focus:ring-0 focus:ring-transparent", n && "pl-8", e),
	...r
}));
Un.displayName = Cn.displayName;
var Wn = D.forwardRef(({ className: e, children: n, checked: r, ...i }, a) => /* @__PURE__ */ k(wn, {
	ref: a,
	className: t("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: r,
	...i,
	children: [/* @__PURE__ */ O("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ O(Dn, { children: /* @__PURE__ */ O(Mn, { className: "h-4 w-4" }) })
	}), n]
}));
Wn.displayName = wn.displayName;
var Gn = D.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ k(En, {
	ref: i,
	className: t("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ O("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ O(Dn, { children: /* @__PURE__ */ O(Nn, { className: "h-2 w-2 fill-current" }) })
	}), n]
}));
Gn.displayName = En.displayName;
var Kn = D.forwardRef(({ className: e, inset: n, ...r }, i) => /* @__PURE__ */ O(Sn, {
	ref: i,
	className: t("px-2 py-1.5 text-sm font-semibold", n && "pl-8", e),
	...r
}));
Kn.displayName = Sn.displayName;
var qn = D.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ O(On, {
	ref: r,
	className: t("-mx-1 my-1 h-px bg-f1-border-secondary", e),
	...n
}));
qn.displayName = On.displayName;
//#endregion
export { Kn as a, Gn as c, Vn as d, Bn as f, Un as i, qn as l, Cn as m, Hn as n, Ln as o, Fn as p, In as r, zn as s, Pn as t, Rn as u };
