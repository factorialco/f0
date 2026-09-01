import { O as e } from "./variants-D_OHTcOj.js";
import { t } from "./utils-CVzxZnoI.js";
import { D as n, E as r, F as i, M as a, N as o, O as s, P as c, c as l, d as u, f as d, j as f, k as p, l as m, o as h, p as g, s as _, u as v, w as y } from "./tooltip-BPSwDQpD.js";
import { b, v as x, y as ee } from "./popover-By8ytmVb.js";
import * as S from "react";
import C from "react";
import { jsx as w, jsxs as T } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom_0e4230adea206cfc9ffba4b61b225db3/node_modules/@radix-ui/react-collection/dist/index.mjs
function E(e) {
	let t = e + "CollectionProvider", [n, r] = a(t), [i, o] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: t, children: n } = e, r = C.useRef(null), a = C.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ w(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	};
	s.displayName = t;
	let l = e + "CollectionSlot", u = f(l), d = C.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = o(l, n), a = c(t, i.collectionRef);
		return /* @__PURE__ */ w(u, {
			ref: a,
			children: r
		});
	});
	d.displayName = l;
	let p = e + "CollectionItemSlot", m = "data-radix-collection-item", h = f(p), g = C.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, a = C.useRef(null), s = c(t, a), l = o(p, n);
		return C.useEffect(() => (l.itemMap.set(a, {
			ref: a,
			...i
		}), () => void l.itemMap.delete(a))), /* @__PURE__ */ w(h, {
			[m]: "",
			ref: s,
			children: r
		});
	});
	g.displayName = p;
	function _(t) {
		let n = o(e + "CollectionConsumer", t);
		return C.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${m}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: d,
			ItemSlot: g
		},
		_,
		r
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
var D = S.createContext(void 0);
function O(e) {
	let t = S.useContext(D);
	return e || t || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var k = 0;
function A() {
	S.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? te()), document.body.insertAdjacentElement("beforeend", e[1] ?? te()), k++, () => {
			k === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), k--;
		};
	}, []);
}
function te() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@18.3.1_@types+react@18.3.18_react-do_56ad7e199d329ef9fa7b3e23f78502a0/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var j = "focusScope.autoFocusOnMount", M = "focusScope.autoFocusOnUnmount", ne = {
	bubbles: !1,
	cancelable: !0
}, N = "FocusScope", re = S.forwardRef((e, t) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...l } = e, [u, d] = S.useState(null), f = n(a), p = n(o), m = S.useRef(null), h = c(t, (e) => d(e)), g = S.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	S.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (g.paused || !u) return;
				let t = e.target;
				u.contains(t) ? m.current = t : I(m.current, { select: !0 });
			}, t = function(e) {
				if (g.paused || !u) return;
				let t = e.relatedTarget;
				t !== null && (u.contains(t) || I(m.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && I(u);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return u && r.observe(u, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		u,
		g.paused
	]), S.useEffect(() => {
		if (u) {
			ce.add(g);
			let e = document.activeElement;
			if (!u.contains(e)) {
				let t = new CustomEvent(j, ne);
				u.addEventListener(j, f), u.dispatchEvent(t), t.defaultPrevented || (ie(de(ae(u)), { select: !0 }), document.activeElement === e && I(u));
			}
			return () => {
				u.removeEventListener(j, f), setTimeout(() => {
					let t = new CustomEvent(M, ne);
					u.addEventListener(M, p), u.dispatchEvent(t), t.defaultPrevented || I(e ?? document.body, { select: !0 }), u.removeEventListener(M, p), ce.remove(g);
				}, 0);
			};
		}
	}, [
		u,
		f,
		p,
		g
	]);
	let _ = S.useCallback((e) => {
		if (!r && !i || g.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = P(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && I(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && I(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		g.paused
	]);
	return /* @__PURE__ */ w(s.div, {
		tabIndex: -1,
		...l,
		ref: h,
		onKeyDown: _
	});
});
re.displayName = N;
function ie(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (I(r, { select: t }), document.activeElement !== n) return;
}
function P(e) {
	let t = ae(e);
	return [oe(t, e), oe(t.reverse(), e)];
}
function ae(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function oe(e, t) {
	for (let n of e) if (!se(n, { upTo: t })) return n;
}
function se(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function F(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function I(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && F(e) && t && e.select();
	}
}
var ce = le();
function le() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = ue(e, t), e.unshift(t);
		},
		remove(t) {
			e = ue(e, t), e[0]?.resume();
		}
	};
}
function ue(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function de(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@18.3.1_@types+react@18.3.18_react-_5a38b86f3cf460fc62cbabc7e38e59fb/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var fe = "rovingFocusGroup.onEntryFocus", pe = {
	bubbles: !1,
	cancelable: !0
}, L = "RovingFocusGroup", [me, he, ge] = E(L), [_e, ve] = a(L, [ge]), [ye, be] = _e(L), xe = S.forwardRef((e, t) => /* @__PURE__ */ w(me.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ w(me.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ w(Se, {
			...e,
			ref: t
		})
	})
}));
xe.displayName = L;
var Se = S.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: r, orientation: a, loop: o = !1, dir: l, currentTabStopId: u, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...g } = e, _ = S.useRef(null), v = c(t, _), y = O(l), [b, x] = h({
		prop: u,
		defaultProp: d ?? null,
		onChange: f,
		caller: L
	}), [ee, C] = S.useState(!1), T = n(p), E = he(r), D = S.useRef(!1), [k, A] = S.useState(0);
	return S.useEffect(() => {
		let e = _.current;
		if (e) return e.addEventListener(fe, T), () => e.removeEventListener(fe, T);
	}, [T]), /* @__PURE__ */ w(ye, {
		scope: r,
		orientation: a,
		dir: y,
		loop: o,
		currentTabStopId: b,
		onItemFocus: S.useCallback((e) => x(e), [x]),
		onItemShiftTab: S.useCallback(() => C(!0), []),
		onFocusableItemAdd: S.useCallback(() => A((e) => e + 1), []),
		onFocusableItemRemove: S.useCallback(() => A((e) => e - 1), []),
		children: /* @__PURE__ */ w(s.div, {
			tabIndex: ee || k === 0 ? -1 : 0,
			"data-orientation": a,
			...g,
			ref: v,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: i(e.onMouseDown, () => {
				D.current = !0;
			}),
			onFocus: i(e.onFocus, (e) => {
				let t = !D.current;
				if (e.target === e.currentTarget && t && !ee) {
					let t = new CustomEvent(fe, pe);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = E().filter((e) => e.focusable);
						Oe([
							e.find((e) => e.active),
							e.find((e) => e.id === b),
							...e
						].filter(Boolean).map((e) => e.ref.current), m);
					}
				}
				D.current = !1;
			}),
			onBlur: i(e.onBlur, () => C(!1))
		})
	});
}), Ce = "RovingFocusGroupItem", we = S.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: a = !1, tabStopId: o, children: c, ...l } = e, u = y(), d = o || u, f = be(Ce, n), p = f.currentTabStopId === d, m = he(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: _ } = f;
	return S.useEffect(() => {
		if (r) return h(), () => g();
	}, [
		r,
		h,
		g
	]), /* @__PURE__ */ w(me.ItemSlot, {
		scope: n,
		id: d,
		focusable: r,
		active: a,
		children: /* @__PURE__ */ w(s.span, {
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
				let t = De(e, f.orientation, f.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = m().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = f.loop ? ke(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Oe(n));
				}
			}),
			children: typeof c == "function" ? c({
				isCurrentTabStop: p,
				hasTabStop: _ != null
			}) : c
		})
	});
});
we.displayName = Ce;
var Te = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Ee(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function De(e, t, n) {
	let r = Ee(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Te[r];
}
function Oe(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ke(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Ae = xe, je = we, Me = ["Enter", " "], Ne = [
	"ArrowDown",
	"PageUp",
	"Home"
], Pe = [
	"ArrowUp",
	"PageDown",
	"End"
], Fe = [...Ne, ...Pe], Ie = {
	ltr: [...Me, "ArrowRight"],
	rtl: [...Me, "ArrowLeft"]
}, Le = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, R = "Menu", [z, Re, ze] = E(R), [B, Be] = a(R, [
	ze,
	g,
	ve
]), V = g(), Ve = ve(), [He, H] = B(R), [Ue, U] = B(R), We = (e) => {
	let { __scopeMenu: t, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = e, c = V(t), [l, u] = S.useState(null), f = S.useRef(!1), p = n(o), m = O(a);
	return S.useEffect(() => {
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
	}, []), /* @__PURE__ */ w(d, {
		...c,
		children: /* @__PURE__ */ w(He, {
			scope: t,
			open: r,
			onOpenChange: p,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ w(Ue, {
				scope: t,
				onClose: S.useCallback(() => p(!1), [p]),
				isUsingKeyboardRef: f,
				dir: m,
				modal: s,
				children: i
			})
		})
	});
};
We.displayName = R;
var Ge = "MenuAnchor", W = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = V(n);
	return /* @__PURE__ */ w(m, {
		...i,
		...r,
		ref: t
	});
});
W.displayName = Ge;
var Ke = "MenuPortal", [qe, Je] = B(Ke, { forceMount: void 0 }), Ye = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = H(Ke, t);
	return /* @__PURE__ */ w(qe, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ w(_, {
			present: n || a.open,
			children: /* @__PURE__ */ w(l, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ye.displayName = Ke;
var G = "MenuContent", [Xe, Ze] = B(G), Qe = S.forwardRef((e, t) => {
	let n = Je(G, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = H(G, e.__scopeMenu), o = U(G, e.__scopeMenu);
	return /* @__PURE__ */ w(z.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ w(_, {
			present: r || a.open,
			children: /* @__PURE__ */ w(z.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ w($e, {
					...i,
					ref: t
				}) : /* @__PURE__ */ w(et, {
					...i,
					ref: t
				})
			})
		})
	});
}), $e = S.forwardRef((e, t) => {
	let n = H(G, e.__scopeMenu), r = S.useRef(null), a = c(t, r);
	return S.useEffect(() => {
		let e = r.current;
		if (e) return b(e);
	}, []), /* @__PURE__ */ w(nt, {
		...e,
		ref: a,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: i(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), et = S.forwardRef((e, t) => {
	let n = H(G, e.__scopeMenu);
	return /* @__PURE__ */ w(nt, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), tt = f("MenuContent.ScrollLock"), nt = S.forwardRef((e, t) => {
	let { __scopeMenu: n, loop: a = !1, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: l, disableOutsidePointerEvents: d, onEntryFocus: f, onEscapeKeyDown: p, onPointerDownOutside: m, onFocusOutside: h, onInteractOutside: g, onDismiss: _, disableOutsideScroll: v, ...y } = e, b = H(G, n), x = U(G, n), C = V(n), T = Ve(n), E = Re(n), [D, O] = S.useState(null), k = S.useRef(null), te = c(t, k, b.onContentChange), j = S.useRef(0), M = S.useRef(""), ne = S.useRef(0), N = S.useRef(null), ie = S.useRef("right"), P = S.useRef(0), ae = v ? ee : S.Fragment, oe = v ? {
		as: tt,
		allowPinchZoom: !0
	} : void 0, se = (e) => {
		let t = M.current + e, n = E().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = Ft(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			M.current = t, window.clearTimeout(j.current), t !== "" && (j.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	S.useEffect(() => () => window.clearTimeout(j.current), []), A();
	let F = S.useCallback((e) => ie.current === N.current?.side && Lt(e, N.current?.area), []);
	return /* @__PURE__ */ w(Xe, {
		scope: n,
		searchRef: M,
		onItemEnter: S.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		onItemLeave: S.useCallback((e) => {
			F(e) || (k.current?.focus(), O(null));
		}, [F]),
		onTriggerLeave: S.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		pointerGraceTimerRef: ne,
		onPointerGraceIntentChange: S.useCallback((e) => {
			N.current = e;
		}, []),
		children: /* @__PURE__ */ w(ae, {
			...oe,
			children: /* @__PURE__ */ w(re, {
				asChild: !0,
				trapped: o,
				onMountAutoFocus: i(s, (e) => {
					e.preventDefault(), k.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: l,
				children: /* @__PURE__ */ w(r, {
					asChild: !0,
					disableOutsidePointerEvents: d,
					onEscapeKeyDown: p,
					onPointerDownOutside: m,
					onFocusOutside: h,
					onInteractOutside: g,
					onDismiss: _,
					children: /* @__PURE__ */ w(Ae, {
						asChild: !0,
						...T,
						dir: x.dir,
						orientation: "vertical",
						loop: a,
						currentTabStopId: D,
						onCurrentTabStopIdChange: O,
						onEntryFocus: i(f, (e) => {
							x.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ w(u, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": jt(b.open),
							"data-radix-menu-content": "",
							dir: x.dir,
							...C,
							...y,
							ref: te,
							style: {
								outline: "none",
								...y.style
							},
							onKeyDown: i(y.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && se(e.key));
								let i = k.current;
								if (e.target !== i || !Fe.includes(e.key)) return;
								e.preventDefault();
								let a = E().filter((e) => !e.disabled).map((e) => e.ref.current);
								Pe.includes(e.key) && a.reverse(), Nt(a);
							}),
							onBlur: i(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(j.current), M.current = "");
							}),
							onPointerMove: i(e.onPointerMove, Z((e) => {
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
Qe.displayName = G;
var rt = "MenuGroup", it = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(s.div, {
		role: "group",
		...r,
		ref: t
	});
});
it.displayName = rt;
var at = "MenuLabel", ot = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(s.div, {
		...r,
		ref: t
	});
});
ot.displayName = at;
var K = "MenuItem", st = "menu.itemSelect", q = S.forwardRef((e, t) => {
	let { disabled: n = !1, onSelect: r, ...a } = e, o = S.useRef(null), s = U(K, e.__scopeMenu), l = Ze(K, e.__scopeMenu), u = c(t, o), d = S.useRef(!1), f = () => {
		let e = o.current;
		if (!n && e) {
			let t = new CustomEvent(st, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(st, (e) => r?.(e), { once: !0 }), p(e, t), t.defaultPrevented ? d.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ w(ct, {
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
			n || t && e.key === " " || Me.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
q.displayName = K;
var ct = S.forwardRef((e, t) => {
	let { __scopeMenu: n, disabled: r = !1, textValue: a, ...o } = e, l = Ze(K, n), u = Ve(n), d = S.useRef(null), f = c(t, d), [p, m] = S.useState(!1), [h, g] = S.useState("");
	return S.useEffect(() => {
		let e = d.current;
		e && g((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ w(z.ItemSlot, {
		scope: n,
		disabled: r,
		textValue: a ?? h,
		children: /* @__PURE__ */ w(je, {
			asChild: !0,
			...u,
			focusable: !r,
			children: /* @__PURE__ */ w(s.div, {
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
}), lt = "MenuCheckboxItem", ut = S.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...a } = e;
	return /* @__PURE__ */ w(vt, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ w(q, {
			role: "menuitemcheckbox",
			"aria-checked": X(n) ? "mixed" : n,
			...a,
			ref: t,
			"data-state": Mt(n),
			onSelect: i(a.onSelect, () => r?.(X(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
ut.displayName = lt;
var dt = "MenuRadioGroup", [ft, pt] = B(dt, {
	value: void 0,
	onValueChange: () => {}
}), mt = S.forwardRef((e, t) => {
	let { value: r, onValueChange: i, ...a } = e, o = n(i);
	return /* @__PURE__ */ w(ft, {
		scope: e.__scopeMenu,
		value: r,
		onValueChange: o,
		children: /* @__PURE__ */ w(it, {
			...a,
			ref: t
		})
	});
});
mt.displayName = dt;
var ht = "MenuRadioItem", gt = S.forwardRef((e, t) => {
	let { value: n, ...r } = e, a = pt(ht, e.__scopeMenu), o = n === a.value;
	return /* @__PURE__ */ w(vt, {
		scope: e.__scopeMenu,
		checked: o,
		children: /* @__PURE__ */ w(q, {
			role: "menuitemradio",
			"aria-checked": o,
			...r,
			ref: t,
			"data-state": Mt(o),
			onSelect: i(r.onSelect, () => a.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
gt.displayName = ht;
var _t = "MenuItemIndicator", [vt, yt] = B(_t, { checked: !1 }), bt = S.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = yt(_t, n);
	return /* @__PURE__ */ w(_, {
		present: r || X(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ w(s.span, {
			...i,
			ref: t,
			"data-state": Mt(a.checked)
		})
	});
});
bt.displayName = _t;
var xt = "MenuSeparator", St = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ w(s.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
St.displayName = xt;
var Ct = "MenuArrow", wt = S.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = V(n);
	return /* @__PURE__ */ w(v, {
		...i,
		...r,
		ref: t
	});
});
wt.displayName = Ct;
var J = "MenuSub", [Tt, Et] = B(J), Dt = (e) => {
	let { __scopeMenu: t, children: r, open: i = !1, onOpenChange: a } = e, o = H(J, t), s = V(t), [c, l] = S.useState(null), [u, f] = S.useState(null), p = n(a);
	return S.useEffect(() => (o.open === !1 && p(!1), () => p(!1)), [o.open, p]), /* @__PURE__ */ w(d, {
		...s,
		children: /* @__PURE__ */ w(He, {
			scope: t,
			open: i,
			onOpenChange: p,
			content: u,
			onContentChange: f,
			children: /* @__PURE__ */ w(Tt, {
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
Dt.displayName = J;
var Y = "MenuSubTrigger", Ot = S.forwardRef((e, t) => {
	let n = H(Y, e.__scopeMenu), r = U(Y, e.__scopeMenu), a = Et(Y, e.__scopeMenu), s = Ze(Y, e.__scopeMenu), c = S.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: u } = s, d = { __scopeMenu: e.__scopeMenu }, f = S.useCallback(() => {
		c.current && window.clearTimeout(c.current), c.current = null;
	}, []);
	return S.useEffect(() => f, [f]), S.useEffect(() => {
		let e = l.current;
		return () => {
			window.clearTimeout(e), u(null);
		};
	}, [l, u]), /* @__PURE__ */ w(W, {
		asChild: !0,
		...d,
		children: /* @__PURE__ */ w(ct, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": a.contentId,
			"data-state": jt(n.open),
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
				e.disabled || i && t.key === " " || Ie[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
Ot.displayName = Y;
var kt = "MenuSubContent", At = S.forwardRef((e, t) => {
	let n = Je(G, e.__scopeMenu), { forceMount: r = n.forceMount, ...a } = e, o = H(G, e.__scopeMenu), s = U(G, e.__scopeMenu), l = Et(kt, e.__scopeMenu), u = S.useRef(null), d = c(t, u);
	return /* @__PURE__ */ w(z.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ w(_, {
			present: r || o.open,
			children: /* @__PURE__ */ w(z.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ w(nt, {
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
						let t = e.currentTarget.contains(e.target), n = Le[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
At.displayName = kt;
function jt(e) {
	return e ? "open" : "closed";
}
function X(e) {
	return e === "indeterminate";
}
function Mt(e) {
	return X(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Nt(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Pt(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Ft(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Pt(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function It(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Lt(e, t) {
	return t ? It({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Z(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Rt = We, zt = W, Bt = Ye, Vt = Qe, Ht = it, Ut = ot, Wt = q, Gt = ut, Kt = mt, qt = gt, Jt = bt, Yt = St, Xt = wt, Zt = Dt, Qt = Ot, $t = At, Q = "DropdownMenu", [en, tn] = a(Q, [Be]), $ = Be(), [nn, rn] = en(Q), an = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, c = $(t), l = S.useRef(null), [u, d] = h({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Q
	});
	return /* @__PURE__ */ w(nn, {
		scope: t,
		triggerId: y(),
		triggerRef: l,
		contentId: y(),
		open: u,
		onOpenChange: d,
		onOpenToggle: S.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: /* @__PURE__ */ w(Rt, {
			...c,
			open: u,
			onOpenChange: d,
			dir: r,
			modal: s,
			children: n
		})
	});
};
an.displayName = Q;
var on = "DropdownMenuTrigger", sn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...a } = e, c = rn(on, n), l = $(n);
	return /* @__PURE__ */ w(zt, {
		asChild: !0,
		...l,
		children: /* @__PURE__ */ w(s.button, {
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
sn.displayName = on;
var cn = "DropdownMenuPortal", ln = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ w(Bt, {
		...r,
		...n
	});
};
ln.displayName = cn;
var un = "DropdownMenuContent", dn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, a = rn(un, n), o = $(n), s = S.useRef(!1);
	return /* @__PURE__ */ w(Vt, {
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
dn.displayName = un;
var fn = "DropdownMenuGroup", pn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Ht, {
		...i,
		...r,
		ref: t
	});
});
pn.displayName = fn;
var mn = "DropdownMenuLabel", hn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Ut, {
		...i,
		...r,
		ref: t
	});
});
hn.displayName = mn;
var gn = "DropdownMenuItem", _n = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Wt, {
		...i,
		...r,
		ref: t
	});
});
_n.displayName = gn;
var vn = "DropdownMenuCheckboxItem", yn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Gt, {
		...i,
		...r,
		ref: t
	});
});
yn.displayName = vn;
var bn = "DropdownMenuRadioGroup", xn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Kt, {
		...i,
		...r,
		ref: t
	});
});
xn.displayName = bn;
var Sn = "DropdownMenuRadioItem", Cn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(qt, {
		...i,
		...r,
		ref: t
	});
});
Cn.displayName = Sn;
var wn = "DropdownMenuItemIndicator", Tn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Jt, {
		...i,
		...r,
		ref: t
	});
});
Tn.displayName = wn;
var En = "DropdownMenuSeparator", Dn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Yt, {
		...i,
		...r,
		ref: t
	});
});
Dn.displayName = En;
var On = "DropdownMenuArrow", kn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Xt, {
		...i,
		...r,
		ref: t
	});
});
kn.displayName = On;
var An = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = $(t), [s, c] = h({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ w(Zt, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, jn = "DropdownMenuSubTrigger", Mn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w(Qt, {
		...i,
		...r,
		ref: t
	});
});
Mn.displayName = jn;
var Nn = "DropdownMenuSubContent", Pn = S.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ w($t, {
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
Pn.displayName = Nn;
var Fn = an, In = sn, Ln = ln, Rn = dn, zn = pn, Bn = hn, Vn = _n, Hn = yn, Un = xn, Wn = Cn, Gn = Tn, Kn = Dn, qn = An, Jn = Mn, Yn = Pn, Xn = x("Check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Zn = x("ChevronRight", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), Qn = x("Circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), $n = Fn, er = In, tr = zn, nr = Ln, rr = qn, ir = Un, ar = S.forwardRef(({ className: n, inset: r, children: i, ...a }, o) => /* @__PURE__ */ T(Jn, {
	ref: o,
	className: t("flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", r && "pl-8", n),
	...a,
	children: [i, /* @__PURE__ */ w(e, {
		icon: Zn,
		size: "md",
		className: "ml-auto"
	})]
}));
ar.displayName = Jn.displayName;
var or = S.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ w(Yn, {
	ref: r,
	className: t("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}));
or.displayName = Yn.displayName;
var sr = S.forwardRef(({ className: e, sideOffset: n = 4, container: r, ...i }, a) => /* @__PURE__ */ w(Ln, {
	container: r ?? void 0,
	children: /* @__PURE__ */ w(Rn, {
		ref: a,
		sideOffset: n,
		className: t("z-50 min-w-[--radix-popper-anchor-width] overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "origin-[var(--radix-dropdown-menu-content-transform-origin)]", e),
		...i
	})
}));
sr.displayName = Rn.displayName;
var cr = S.forwardRef(({ className: e, inset: n, ...r }, i) => /* @__PURE__ */ w(Vn, {
	onClick: (e) => {
		e.stopPropagation();
	},
	ref: i,
	className: t("relative flex cursor-default select-none items-center rounded py-2 pl-3 pr-5 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] first:pt-3 first:after:top-1 first:after:h-[calc(100%-0.25rem)] last:pb-3 last:after:bottom-1 last:after:h-[calc(100%-0.25rem)] hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "only:after:inset-y-1 only:after:h-auto", "focus:outline-none focus:ring-0 focus:ring-transparent", n && "pl-8", e),
	...r
}));
cr.displayName = Vn.displayName;
var lr = S.forwardRef(({ className: e, children: n, checked: r, ...i }, a) => /* @__PURE__ */ T(Hn, {
	ref: a,
	className: t("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: r,
	...i,
	children: [/* @__PURE__ */ w("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ w(Gn, { children: /* @__PURE__ */ w(Xn, { className: "h-4 w-4" }) })
	}), n]
}));
lr.displayName = Hn.displayName;
var ur = S.forwardRef(({ className: e, children: n, ...r }, i) => /* @__PURE__ */ T(Wn, {
	ref: i,
	className: t("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ w("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ w(Gn, { children: /* @__PURE__ */ w(Qn, { className: "h-2 w-2 fill-current" }) })
	}), n]
}));
ur.displayName = Wn.displayName;
var dr = S.forwardRef(({ className: e, inset: n, ...r }, i) => /* @__PURE__ */ w(Bn, {
	ref: i,
	className: t("px-2 py-1.5 text-sm font-semibold", n && "pl-8", e),
	...r
}));
dr.displayName = Bn.displayName;
var fr = S.forwardRef(({ className: e, ...n }, r) => /* @__PURE__ */ w(Kn, {
	ref: r,
	className: t("-mx-1 my-1 h-px bg-f1-border-secondary", e),
	...n
}));
fr.displayName = Kn.displayName;
//#endregion
export { A as _, dr as a, ur as c, or as d, ar as f, re as g, Vn as h, cr as i, fr as l, Zn as m, sr as n, nr as o, er as p, tr as r, ir as s, $n as t, rr as u, O as v, E as y };
