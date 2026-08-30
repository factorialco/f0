import { t as e } from "./dist-HAF2K0vx.js";
import { d as t, u as n } from "./OneEllipsis-DuhKMtYp.js";
import { L as r, S as i, Tt as a, _ as o, i as s, p as c, v as l } from "./F0Button-BFtTqm8n.js";
import { n as u, t as d } from "./utils-CVzxZnoI.js";
import { m as f, p, rt as m, y as h } from "./F0Checkbox-B2ZT94HT.js";
import { D as g, M as _, O as v, S as y, _ as b, a as x, b as S, f as C, g as w, h as T, i as ee, j as te, m as ne, p as E, t as re, v as D, w as ie, y as O } from "./popover-DDfM6CZG.js";
import { a as ae, i as oe, l as se, n as k, p as A, t as ce } from "./dropdown-menu-BiGeoaAq.js";
import * as j from "react";
import M, { forwardRef as N, useEffect as P, useLayoutEffect as le, useMemo as F, useRef as I, useState as ue } from "react";
import { Fragment as L, jsx as R, jsxs as z } from "react/jsx-runtime";
var de = N((e, t) => /* @__PURE__ */ z("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ R("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M16.9497 7.05026L12 12L7.05025 16.9498"
	}), /* @__PURE__ */ R("path", {
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M12 12L7.05025 7.05026L16.9497 16.9498"
	})]
})), fe = N((e, t) => /* @__PURE__ */ z("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ R("circle", {
			cx: 12,
			cy: 12,
			r: 1.5,
			fill: "currentColor",
			transform: "rotate(90 12 12)"
		}),
		/* @__PURE__ */ R("circle", {
			cx: 12,
			cy: 6.5,
			r: 1.5,
			fill: "currentColor",
			transform: "rotate(90 12 6.5)"
		}),
		/* @__PURE__ */ R("circle", {
			cx: 12,
			cy: 17.5,
			r: 1.5,
			fill: "currentColor",
			transform: "rotate(90 12 17.5)"
		})
	]
})), B = N((e, t) => /* @__PURE__ */ z("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ R("circle", {
			cx: 12,
			cy: 12,
			r: 1.5,
			fill: "currentColor"
		}),
		/* @__PURE__ */ R("circle", {
			cx: 6.5,
			cy: 12,
			r: 1.5,
			fill: "currentColor"
		}),
		/* @__PURE__ */ R("circle", {
			cx: 17.5,
			cy: 12,
			r: 1.5,
			fill: "currentColor"
		})
	]
})), V = (e) => typeof e == "string" ? e : [e.title, e.description].filter(Boolean).join(" "), pe = (e) => e.map((e) => e.trim()).map((e) => /[.!?:;]$/.test(e) ? e : `${e}.`).join(" "), me = (e) => {
	if (!e) return;
	if (typeof e == "string") return e;
	let t = [
		e.title,
		e.description,
		...(e.items ?? []).map(V)
	].filter((e) => !!(e && e.trim()));
	return t.length > 0 ? pe(t) : void 0;
}, H = (e) => {
	if (!e) return;
	if (typeof e == "string") return { label: e };
	let { title: t, description: n, items: r } = e;
	if (t) return {
		label: t,
		description: n,
		items: r
	};
	if (n) return {
		description: n,
		items: r
	};
	if (r?.length) return { items: r };
}, he = ({ tooltip: e, children: t }) => {
	let n = H(e);
	return n ? /* @__PURE__ */ R(l, {
		instant: !0,
		...n,
		children: t
	}) : /* @__PURE__ */ R(L, { children: t });
}, U = ({ item: e }) => /* @__PURE__ */ z(L, { children: [
	e.avatar && /* @__PURE__ */ R(m, {
		avatar: e.avatar,
		size: "xs"
	}),
	e.icon && /* @__PURE__ */ R(r, {
		icon: e.icon,
		size: "md",
		className: d("text-f1-icon", e.critical && "text-f1-icon-critical")
	}),
	/* @__PURE__ */ z("div", {
		className: "flex flex-col items-start",
		children: [e.label, e.description && /* @__PURE__ */ R("div", {
			className: d("font-normal text-f1-foreground-secondary", e.critical && "text-f1-foreground-critical"),
			children: e.description
		})]
	})
] }), ge = ({ item: e }) => {
	let { label: t, icon: n, avatar: r, description: i, disabledTooltip: a, href: o, critical: s, disabled: l, ...u } = e, f = d("flex items-start gap-1.5 w-full", s && "text-f1-foreground-critical"), p = /* @__PURE__ */ R(oe, {
		asChild: !0,
		className: d(f, "cursor-pointer"),
		disabled: l,
		children: o ? /* @__PURE__ */ R(c, {
			href: o,
			className: d(f, "text-f1-foreground no-underline hover:cursor-pointer"),
			...u,
			children: /* @__PURE__ */ R(U, { item: e })
		}) : /* @__PURE__ */ R("div", {
			...u,
			className: f,
			children: /* @__PURE__ */ R(U, { item: e })
		})
	});
	return l && a ? /* @__PURE__ */ R(he, {
		tooltip: a,
		children: /* @__PURE__ */ R("span", {
			className: "block w-full cursor-not-allowed",
			children: p
		})
	}) : p;
};
function _e(e, t) {
	return e.type === "separator" ? /* @__PURE__ */ R(se, {}, t) : e.type === "label" ? /* @__PURE__ */ R(ae, {
		className: "flex-1 text-xs font-medium leading-4 text-f1-foreground-secondary",
		children: e.text
	}, t) : /* @__PURE__ */ R(ge, { item: {
		...e,
		onClick: () => {
			setTimeout(() => {
				e.onClick?.();
			}, 200);
		}
	} }, t);
}
function W({ items: e, icon: t = B, align: n = "start", size: r, children: a, open: o, onOpenChange: c, label: l, disabled: u, ...d }) {
	let f = i(), [p, m] = ue(!1), h = o !== void 0 && c !== void 0, g = h ? o : p, _ = h ? c : m;
	P(() => {
		u && g && _(!1);
	}, [
		u,
		g,
		_
	]);
	let v = !u && g, y = (e) => {
		_(e);
	}, b = a ? M.isValidElement(a) ? M.cloneElement(a, {
		disabled: a.props.disabled ?? u,
		"aria-disabled": a.props["aria-disabled"] ?? (u ? !0 : void 0)
	}) : a : /* @__PURE__ */ R(s, {
		...d,
		hideLabel: !l,
		icon: t,
		size: r,
		label: l ?? f.actions.toggleDropdownMenu,
		variant: "outline",
		pressed: v,
		compact: !l,
		noAutoTooltip: !0,
		noTitle: !0,
		disabled: u
	});
	return /* @__PURE__ */ z(ce, {
		open: v,
		onOpenChange: y,
		children: [/* @__PURE__ */ R(A, {
			asChild: !0,
			disabled: u,
			children: b
		}), /* @__PURE__ */ R(k, {
			align: n,
			children: e.map((e, t) => _e(e, t))
		})]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.5_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.mjs
var ve = "Dialog", [ye, be] = v(ve), [G, K] = ye(ve), xe = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = j.useRef(null), c = j.useRef(null), [l = !1, u] = b({
		prop: r,
		defaultProp: i,
		onChange: a
	});
	return /* @__PURE__ */ R(G, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: D(),
		titleId: D(),
		descriptionId: D(),
		open: l,
		onOpenChange: u,
		onOpenToggle: j.useCallback(() => u((e) => !e), [u]),
		modal: o,
		children: n
	});
};
xe.displayName = ve;
var Se = "DialogTrigger", Ce = j.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Se, n), a = ie(t, i.triggerRef);
	return /* @__PURE__ */ R(S.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Ve(i.open),
		...r,
		ref: a,
		onClick: O(e.onClick, i.onOpenToggle)
	});
});
Ce.displayName = Se;
var we = "DialogPortal", [Te, Ee] = ye(we, { forceMount: void 0 }), De = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = K(we, t);
	return /* @__PURE__ */ R(Te, {
		scope: t,
		forceMount: n,
		children: j.Children.map(r, (e) => /* @__PURE__ */ R(E, {
			present: n || a.open,
			children: /* @__PURE__ */ R(ne, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
De.displayName = we;
var Oe = "DialogOverlay", ke = j.forwardRef((e, t) => {
	let n = Ee(Oe, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = K(Oe, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ R(E, {
		present: r || a.open,
		children: /* @__PURE__ */ R(Ae, {
			...i,
			ref: t
		})
	}) : null;
});
ke.displayName = Oe;
var Ae = j.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Oe, n);
	return /* @__PURE__ */ R(te, {
		as: y,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ R(S.div, {
			"data-state": Ve(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), q = "DialogContent", je = j.forwardRef((e, t) => {
	let n = Ee(q, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = K(q, e.__scopeDialog);
	return /* @__PURE__ */ R(E, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ R(Me, {
			...i,
			ref: t
		}) : /* @__PURE__ */ R(Ne, {
			...i,
			ref: t
		})
	});
});
je.displayName = q;
var Me = j.forwardRef((e, t) => {
	let n = K(q, e.__scopeDialog), r = j.useRef(null), i = ie(t, n.contentRef, r);
	return j.useEffect(() => {
		let e = r.current;
		if (e) return _(e);
	}, []), /* @__PURE__ */ R(Pe, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: O(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: O(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: O(e.onFocusOutside, (e) => e.preventDefault())
	});
}), Ne = j.forwardRef((e, t) => {
	let n = K(q, e.__scopeDialog), r = j.useRef(!1), i = j.useRef(!1);
	return /* @__PURE__ */ R(Pe, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), Pe = j.forwardRef((e, t) => {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = K(q, n), c = j.useRef(null), l = ie(t, c);
	return C(), /* @__PURE__ */ z(L, { children: [/* @__PURE__ */ R(T, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ R(w, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionId,
			"aria-labelledby": s.titleId,
			"data-state": Ve(s.open),
			...o,
			ref: l,
			onDismiss: () => s.onOpenChange(!1)
		})
	}), /* @__PURE__ */ z(L, { children: [/* @__PURE__ */ R(Ge, { titleId: s.titleId }), /* @__PURE__ */ R(qe, {
		contentRef: c,
		descriptionId: s.descriptionId
	})] })] });
}), Fe = "DialogTitle", Ie = j.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Fe, n);
	return /* @__PURE__ */ R(S.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
Ie.displayName = Fe;
var Le = "DialogDescription", Re = j.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Le, n);
	return /* @__PURE__ */ R(S.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
Re.displayName = Le;
var ze = "DialogClose", Be = j.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(ze, n);
	return /* @__PURE__ */ R(S.button, {
		type: "button",
		...r,
		ref: t,
		onClick: O(e.onClick, () => i.onOpenChange(!1))
	});
});
Be.displayName = ze;
function Ve(e) {
	return e ? "open" : "closed";
}
var He = "DialogTitleWarning", [Ue, We] = g(He, {
	contentName: q,
	titleName: Fe,
	docsSlug: "dialog"
}), Ge = ({ titleId: e }) => {
	let t = We(He), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return j.useEffect(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, Ke = "DialogDescriptionWarning", qe = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${We(Ke).contentName}}.`;
	return j.useEffect(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, Je = xe, Ye = Ce, Xe = De, Ze = ke, Qe = je, $e = Ie, et = Re, tt = Be;
//#endregion
//#region ../../node_modules/.pnpm/vaul@1.1.2_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/vaul/dist/index.mjs
function nt(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var rt = M.createContext({
	drawerRef: { current: null },
	overlayRef: { current: null },
	onPress: () => {},
	onRelease: () => {},
	onDrag: () => {},
	onNestedDrag: () => {},
	onNestedOpenChange: () => {},
	onNestedRelease: () => {},
	openProp: void 0,
	dismissible: !1,
	isOpen: !1,
	isDragging: !1,
	keyboardIsOpen: { current: !1 },
	snapPointsOffset: null,
	snapPoints: null,
	handleOnly: !1,
	modal: !1,
	shouldFade: !1,
	activeSnapPoint: null,
	onOpenChange: () => {},
	setActiveSnapPoint: () => {},
	closeDrawer: () => {},
	direction: "bottom",
	shouldAnimate: { current: !0 },
	shouldScaleBackground: !1,
	setBackgroundColorOnScale: !0,
	noBodyStyles: !1,
	container: null,
	autoFocus: !1
}), J = () => {
	let e = M.useContext(rt);
	if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
	return e;
};
nt("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
function it() {
	let e = navigator.userAgent;
	return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e));
}
function at() {
	return ut(/^Mac/);
}
function ot() {
	return ut(/^iPhone/);
}
function st() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function ct() {
	return ut(/^iPad/) || at() && navigator.maxTouchPoints > 1;
}
function lt() {
	return ot() || ct();
}
function ut(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var dt = 24, ft = typeof window < "u" ? le : P;
function pt(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
var mt = typeof document < "u" && window.visualViewport;
function ht(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function gt(e) {
	for (ht(e) && (e = e.parentElement); e && !ht(e);) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
var _t = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]), vt = 0, yt;
function bt(e = {}) {
	let { isDisabled: t } = e;
	ft(() => {
		if (!t) return vt++, vt === 1 && lt() && (yt = xt()), () => {
			vt--, vt === 0 && yt?.();
		};
	}, [t]);
}
function xt() {
	let e, t = 0, n = (n) => {
		e = gt(n.target), (e !== document.documentElement || e !== document.body) && (t = n.changedTouches[0].pageY);
	}, r = (n) => {
		if (!e || e === document.documentElement || e === document.body) {
			n.preventDefault();
			return;
		}
		let r = n.changedTouches[0].pageY, i = e.scrollTop, a = e.scrollHeight - e.clientHeight;
		a !== 0 && ((i <= 0 && r > t || i >= a && r < t) && n.preventDefault(), t = r);
	}, i = (e) => {
		let t = e.target;
		wt(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
			t.style.transform = "";
		}));
	}, a = (e) => {
		let t = e.target;
		wt(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
			t.style.transform = "", mt && (mt.height < window.innerHeight ? requestAnimationFrame(() => {
				Ct(t);
			}) : mt.addEventListener("resize", () => Ct(t), { once: !0 }));
		}));
	}, o = () => {
		window.scrollTo(0, 0);
	}, s = window.pageXOffset, c = window.pageYOffset, l = pt(St(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
	window.scrollTo(0, 0);
	let u = pt(Y(document, "touchstart", n, {
		passive: !1,
		capture: !0
	}), Y(document, "touchmove", r, {
		passive: !1,
		capture: !0
	}), Y(document, "touchend", i, {
		passive: !1,
		capture: !0
	}), Y(document, "focus", a, !0), Y(window, "scroll", o));
	return () => {
		l(), u(), window.scrollTo(s, c);
	};
}
function St(e, t, n) {
	let r = e.style[t];
	return e.style[t] = n, () => {
		e.style[t] = r;
	};
}
function Y(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
function Ct(e) {
	let t = document.scrollingElement || document.documentElement;
	for (; e && e !== t;) {
		let t = gt(e);
		if (t !== document.documentElement && t !== document.body && t !== e) {
			let n = t.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
			e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + dt && (t.scrollTop += r - n);
		}
		e = t.parentElement;
	}
}
function wt(e) {
	return e instanceof HTMLInputElement && !_t.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Tt(e, t) {
	typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Et(...e) {
	return (t) => e.forEach((e) => Tt(e, t));
}
function Dt(...e) {
	return j.useCallback(Et(...e), e);
}
var Ot = /* @__PURE__ */ new WeakMap();
function X(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement)) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && Ot.set(e, r);
}
function kt(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = Ot.get(e);
	n && (e.style[t] = n[t]);
}
var Z = (e) => {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
};
function At(e, t) {
	if (!e) return null;
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? parseFloat(i[1].split(", ")[Z(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[Z(t) ? 5 : 4]) : null);
}
function jt(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function Mt(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
var Q = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, Nt = .4, Pt = .25, Ft = 100, It = 8, Lt = 16, Rt = 26, zt = "vaul-dragging";
function Bt(e) {
	let t = M.useRef(e);
	return M.useEffect(() => {
		t.current = e;
	}), M.useMemo(() => (...e) => t.current == null ? void 0 : t.current.call(t, ...e), []);
}
function Vt({ defaultProp: e, onChange: t }) {
	let n = M.useState(e), [r] = n, i = M.useRef(r), a = Bt(t);
	return M.useEffect(() => {
		i.current !== r && (a(r), i.current = r);
	}, [
		r,
		i,
		a
	]), n;
}
function Ht({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	let [r, i] = Vt({
		defaultProp: t,
		onChange: n
	}), a = e !== void 0, o = a ? e : r, s = Bt(n);
	return [o, M.useCallback((t) => {
		if (a) {
			let n = typeof t == "function" ? t(e) : t;
			n !== e && s(n);
		} else i(t);
	}, [
		a,
		e,
		i,
		s
	])];
}
function Ut({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: i, fadeFromIndex: a, onSnapPointChange: o, direction: s = "bottom", container: c, snapToSequentialPoint: l }) {
	let [u, d] = Ht({
		prop: e,
		defaultProp: n?.[0],
		onChange: t
	}), [f, p] = M.useState(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	M.useEffect(() => {
		function e() {
			p({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			});
		}
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let m = M.useMemo(() => u === n?.[n.length - 1] || null, [n, u]), h = M.useMemo(() => n?.findIndex((e) => e === u) ?? null, [n, u]), g = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === u || !n, _ = M.useMemo(() => {
		let e = c ? {
			width: c.getBoundingClientRect().width,
			height: c.getBoundingClientRect().height
		} : typeof window < "u" ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		return n?.map((t) => {
			let n = typeof t == "string", r = 0;
			if (n && (r = parseInt(t, 10)), Z(s)) {
				let i = n ? r : f ? t * e.height : 0;
				return f ? s === "bottom" ? e.height - i : -e.height + i : i;
			}
			let i = n ? r : f ? t * e.width : 0;
			return f ? s === "right" ? e.width - i : -e.width + i : i;
		}) ?? [];
	}, [
		n,
		f,
		c
	]), v = M.useMemo(() => h === null ? null : _?.[h], [_, h]), y = M.useCallback((e) => {
		let t = _?.findIndex((t) => t === e) ?? null;
		o(t), X(r.current, {
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			transform: Z(s) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
		}), _ && t !== _.length - 1 && a !== void 0 && t !== a && t < a ? X(i.current, {
			transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			opacity: "0"
		}) : X(i.current, {
			transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			opacity: "1"
		}), d(n?.[Math.max(t, 0)]);
	}, [
		r.current,
		n,
		_,
		a,
		i,
		d
	]);
	M.useEffect(() => {
		if (u || e) {
			let t = n?.findIndex((t) => t === e || t === u) ?? -1;
			_ && t !== -1 && typeof _[t] == "number" && y(_[t]);
		}
	}, [
		u,
		e,
		n,
		_,
		y
	]);
	function b({ draggedDistance: e, closeDrawer: t, velocity: r, dismissible: o }) {
		if (a === void 0) return;
		let c = s === "bottom" || s === "right" ? (v ?? 0) - e : (v ?? 0) + e, u = h === a - 1, d = h === 0, f = e > 0;
		if (u && X(i.current, { transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})` }), !l && r > 2 && !f) {
			o ? t() : y(_[0]);
			return;
		}
		if (!l && r > 2 && f && _ && n) {
			y(_[n.length - 1]);
			return;
		}
		let p = _?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - c) < Math.abs(e - c) ? t : e), g = Z(s) ? window.innerHeight : window.innerWidth;
		if (r > Nt && Math.abs(e) < g * .4) {
			let e = f ? 1 : -1;
			if (e > 0 && m && n) {
				y(_[n.length - 1]);
				return;
			}
			if (d && e < 0 && o && t(), h === null) return;
			y(_[h + e]);
			return;
		}
		y(p);
	}
	function x({ draggedDistance: e }) {
		if (v === null) return;
		let t = s === "bottom" || s === "right" ? v - e : v + e;
		(s === "bottom" || s === "right") && t < _[_.length - 1] || (s === "top" || s === "left") && t > _[_.length - 1] || X(r.current, { transform: Z(s) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
	}
	function S(e, t) {
		if (!n || typeof h != "number" || !_ || a === void 0) return null;
		let r = h === a - 1;
		if (h >= a && t) return 0;
		if (r && !t) return 1;
		if (!g && !r) return null;
		let i = r ? h + 1 : h - 1, o = r ? _[i] - _[i - 1] : _[i + 1] - _[i], s = e / Math.abs(o);
		return r ? 1 - s : s;
	}
	return {
		isLastSnapPoint: m,
		activeSnapPoint: u,
		shouldFade: g,
		getPercentageDragged: S,
		setActiveSnapPoint: d,
		activeSnapPointIndex: h,
		onRelease: b,
		onDrag: x,
		snapPointsOffset: _
	};
}
function Wt() {
	let { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: i } = J(), a = M.useRef(null), o = F(() => document.body.style.backgroundColor, []);
	function s() {
		return (window.innerWidth - Rt) / window.innerWidth;
	}
	M.useEffect(() => {
		if (t && n) {
			a.current && clearTimeout(a.current);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			r && !i && Mt(document.body, { background: "black" }), Mt(t, {
				transformOrigin: Z(e) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${Q.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${Q.EASE.join(",")})`
			});
			let n = Mt(t, {
				borderRadius: `${It}px`,
				overflow: "hidden",
				...Z(e) ? { transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			return () => {
				n(), a.current = window.setTimeout(() => {
					o ? document.body.style.background = o : document.body.style.removeProperty("background");
				}, Q.DURATION * 1e3);
			};
		}
	}, [
		t,
		n,
		o
	]);
}
var Gt = null;
function Kt({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: i, noBodyStyles: a }) {
	let [o, s] = M.useState(() => typeof window < "u" ? window.location.href : ""), c = M.useRef(0), l = M.useCallback(() => {
		if (st() && Gt === null && e && !a) {
			Gt = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height,
				right: "unset"
			};
			let { scrollX: e, innerHeight: t } = window;
			document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
				top: `${-c.current}px`,
				left: `${-e}px`,
				right: "0px",
				height: "auto"
			}), window.setTimeout(() => window.requestAnimationFrame(() => {
				let e = t - window.innerHeight;
				e && c.current >= t && (document.body.style.top = `${-(c.current + e)}px`);
			}), 300);
		}
	}, [e]), u = M.useCallback(() => {
		if (st() && Gt !== null && !a) {
			let e = -parseInt(document.body.style.top, 10), t = -parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, Gt), window.requestAnimationFrame(() => {
				if (i && o !== window.location.href) {
					s(window.location.href);
					return;
				}
				window.scrollTo(t, e);
			}), Gt = null;
		}
	}, [o]);
	return M.useEffect(() => {
		function e() {
			c.current = window.scrollY;
		}
		return e(), window.addEventListener("scroll", e), () => {
			window.removeEventListener("scroll", e);
		};
	}, []), M.useEffect(() => {
		if (t) return () => {
			typeof document > "u" || document.querySelector("[data-vaul-drawer]") || u();
		};
	}, [t, u]), M.useEffect(() => {
		n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && l(), t || window.setTimeout(() => {
			u();
		}, 500)) : u());
	}, [
		e,
		r,
		o,
		t,
		n,
		l,
		u
	]), { restorePositionSetting: u };
}
function qt({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: i, snapPoints: a, shouldScaleBackground: o = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = Pt, scrollLockTimeout: l = Ft, dismissible: u = !0, handleOnly: d = !1, fadeFromIndex: f = a && a.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: g = !0, onClose: _, nested: v, noBodyStyles: y = !1, direction: b = "bottom", defaultOpen: x = !1, disablePreventScroll: S = !0, snapToSequentialPoint: C = !1, preventScrollRestoration: w = !1, repositionInputs: T = !0, onAnimationEnd: ee, container: te, autoFocus: ne = !1 }) {
	let [E = !1, re] = Ht({
		defaultProp: x,
		prop: e,
		onChange: (e) => {
			t?.(e), !e && !v && _e(), setTimeout(() => {
				ee?.(e);
			}, Q.DURATION * 1e3), e && !g && typeof window < "u" && window.requestAnimationFrame(() => {
				document.body.style.pointerEvents = "auto";
			}), e || (document.body.style.pointerEvents = "auto");
		}
	}), [D, ie] = M.useState(!1), [O, ae] = M.useState(!1), [oe, se] = M.useState(!1), k = M.useRef(null), A = M.useRef(null), ce = M.useRef(null), j = M.useRef(null), N = M.useRef(null), P = M.useRef(!1), le = M.useRef(null), F = M.useRef(0), I = M.useRef(!1), ue = M.useRef(!x), L = M.useRef(0), R = M.useRef(null), z = M.useRef(R.current?.getBoundingClientRect().height || 0), de = M.useRef(R.current?.getBoundingClientRect().width || 0), fe = M.useRef(0), { activeSnapPoint: B, activeSnapPointIndex: V, setActiveSnapPoint: pe, onRelease: me, snapPointsOffset: H, onDrag: he, shouldFade: U, getPercentageDragged: ge } = Ut({
		snapPoints: a,
		activeSnapPointProp: p,
		setActiveSnapPointProp: m,
		drawerRef: R,
		fadeFromIndex: f,
		overlayRef: k,
		onSnapPointChange: M.useCallback((e) => {
			a && e === H.length - 1 && (A.current = /* @__PURE__ */ new Date());
		}, []),
		direction: b,
		container: te,
		snapToSequentialPoint: C
	});
	bt({ isDisabled: !E || O || !g || oe || !D || !T || !S });
	let { restorePositionSetting: _e } = Kt({
		isOpen: E,
		modal: g,
		nested: v ?? !1,
		hasBeenOpened: D,
		preventScrollRestoration: w,
		noBodyStyles: y
	});
	function W() {
		return (window.innerWidth - Rt) / window.innerWidth;
	}
	function ve(e) {
		!u && !a || R.current && !R.current.contains(e.target) || (z.current = R.current?.getBoundingClientRect().height || 0, de.current = R.current?.getBoundingClientRect().width || 0, ae(!0), ce.current = /* @__PURE__ */ new Date(), lt() && window.addEventListener("touchend", () => P.current = !1, { once: !0 }), e.target.setPointerCapture(e.pointerId), F.current = Z(b) ? e.pageY : e.pageX);
	}
	function ye(e, t) {
		let n = e, r = window.getSelection()?.toString(), i = R.current ? At(R.current, b) : null, a = /* @__PURE__ */ new Date();
		if (n.tagName === "SELECT" || n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (b === "right" || b === "left") return !0;
		if (A.current && a.getTime() - A.current.getTime() < 500) return !1;
		if (i !== null && (b === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (N.current && a.getTime() - N.current.getTime() < l && i === 0 || t) return N.current = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return N.current = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function be(e) {
		if (R.current && O) {
			let t = b === "bottom" || b === "right" ? 1 : -1, n = (F.current - (Z(b) ? e.pageY : e.pageX)) * t, i = n > 0, s = a && !u && !i;
			if (s && V === 0) return;
			let c = Math.abs(n), l = document.querySelector("[data-vaul-drawer-wrapper]"), d = c / (b === "bottom" || b === "top" ? z.current : de.current), p = ge(c, i);
			if (p !== null && (d = p), s && d >= 1 || !P.current && !ye(e.target, i)) return;
			if (R.current.classList.add(zt), P.current = !0, X(R.current, { transition: "none" }), X(k.current, { transition: "none" }), a && he({ draggedDistance: n }), i && !a) {
				let e = jt(n), r = Math.min(e * -1, 0) * t;
				X(R.current, { transform: Z(b) ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)` });
				return;
			}
			let m = 1 - d;
			if ((U || f && V === f - 1) && (r?.(e, d), X(k.current, {
				opacity: `${m}`,
				transition: "none"
			}, !0)), l && k.current && o) {
				let e = Math.min(W() + d * (1 - W()), 1), t = 8 - d * 8, n = Math.max(0, 14 - d * 14);
				X(l, {
					borderRadius: `${t}px`,
					transform: Z(b) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!a) {
				let e = c * t;
				X(R.current, { transform: Z(b) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	M.useEffect(() => {
		window.requestAnimationFrame(() => {
			ue.current = !0;
		});
	}, []), M.useEffect(() => {
		var e;
		function t() {
			if (!R.current || !T) return;
			let e = document.activeElement;
			if (wt(e) || I.current) {
				let e = window.visualViewport?.height || 0, t = window.innerHeight, n = t - e, r = R.current.getBoundingClientRect().height || 0, i = r > t * .8;
				fe.current ||= r;
				let o = R.current.getBoundingClientRect().top;
				if (Math.abs(L.current - n) > 60 && (I.current = !I.current), a && a.length > 0 && H && V) {
					let e = H[V] || 0;
					n += e;
				}
				if (L.current = n, r > e || I.current) {
					let t = R.current.getBoundingClientRect().height, r = t;
					t > e && (r = e - (i ? o : Rt)), h ? R.current.style.height = `${t - Math.max(n, 0)}px` : R.current.style.height = `${Math.max(r, e - o)}px`;
				} else it() || (R.current.style.height = `${fe.current}px`);
				a && a.length > 0 && !I.current ? R.current.style.bottom = "0px" : R.current.style.bottom = `${Math.max(n, 0)}px`;
			}
		}
		return (e = window.visualViewport) == null || e.addEventListener("resize", t), () => window.visualViewport?.removeEventListener("resize", t);
	}, [
		V,
		a,
		H
	]);
	function G(e) {
		xe(), _?.(), e || re(!1), setTimeout(() => {
			a && pe(a[0]);
		}, Q.DURATION * 1e3);
	}
	function K() {
		if (!R.current) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]"), t = At(R.current, b);
		X(R.current, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`
		}), X(k.current, {
			transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			opacity: "1"
		}), o && t && t > 0 && E && X(e, {
			borderRadius: `${It}px`,
			overflow: "hidden",
			...Z(b) ? {
				transform: `scale(${W()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${W()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${Q.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${Q.EASE.join(",")})`
		}, !0);
	}
	function xe() {
		!O || !R.current || (R.current.classList.remove(zt), P.current = !1, ae(!1), j.current = /* @__PURE__ */ new Date());
	}
	function Se(e) {
		if (!O || !R.current) return;
		R.current.classList.remove(zt), P.current = !1, ae(!1), j.current = /* @__PURE__ */ new Date();
		let t = At(R.current, b);
		if (!e || !ye(e.target, !1) || !t || Number.isNaN(t) || ce.current === null) return;
		let n = j.current.getTime() - ce.current.getTime(), r = F.current - (Z(b) ? e.pageY : e.pageX), o = Math.abs(r) / n;
		if (o > .05 && (se(!0), setTimeout(() => {
			se(!1);
		}, 200)), a) {
			me({
				draggedDistance: r * (b === "bottom" || b === "right" ? 1 : -1),
				closeDrawer: G,
				velocity: o,
				dismissible: u
			}), i?.(e, !0);
			return;
		}
		if (b === "bottom" || b === "right" ? r > 0 : r < 0) {
			K(), i?.(e, !0);
			return;
		}
		if (o > Nt) {
			G(), i?.(e, !1);
			return;
		}
		let s = Math.min(R.current.getBoundingClientRect().height ?? 0, window.innerHeight), l = Math.min(R.current.getBoundingClientRect().width ?? 0, window.innerWidth);
		if (Math.abs(t) >= (b === "left" || b === "right" ? l : s) * c) {
			G(), i?.(e, !1);
			return;
		}
		i?.(e, !0), K();
	}
	M.useEffect(() => (E && (X(document.documentElement, { scrollBehavior: "auto" }), A.current = /* @__PURE__ */ new Date()), () => {
		kt(document.documentElement, "scrollBehavior");
	}), [E]);
	function Ce(e) {
		let t = e ? (window.innerWidth - Lt) / window.innerWidth : 1, n = e ? -16 : 0;
		le.current && window.clearTimeout(le.current), X(R.current, {
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			transform: Z(b) ? `scale(${t}) translate3d(0, ${n}px, 0)` : `scale(${t}) translate3d(${n}px, 0, 0)`
		}), !e && R.current && (le.current = setTimeout(() => {
			let e = At(R.current, b);
			X(R.current, {
				transition: "none",
				transform: Z(b) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function we(e, t) {
		if (t < 0) return;
		let n = (window.innerWidth - Lt) / window.innerWidth, r = n + t * (1 - n), i = -16 + t * Lt;
		X(R.current, {
			transform: Z(b) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function Te(e, t) {
		let n = Z(b) ? window.innerHeight : window.innerWidth, r = t ? (n - Lt) / n : 1, i = t ? -16 : 0;
		t && X(R.current, {
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			transform: Z(b) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`
		});
	}
	return M.useEffect(() => {
		g || window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		});
	}, [g]), /*#__PURE__*/ M.createElement(Je, {
		defaultOpen: x,
		onOpenChange: (e) => {
			!u && !e || (e ? ie(!0) : G(!0), re(e));
		},
		open: E
	}, /*#__PURE__*/ M.createElement(rt.Provider, { value: {
		activeSnapPoint: B,
		snapPoints: a,
		setActiveSnapPoint: pe,
		drawerRef: R,
		overlayRef: k,
		onOpenChange: t,
		onPress: ve,
		onRelease: Se,
		onDrag: be,
		dismissible: u,
		shouldAnimate: ue,
		handleOnly: d,
		isOpen: E,
		isDragging: O,
		shouldFade: U,
		closeDrawer: G,
		onNestedDrag: we,
		onNestedOpenChange: Ce,
		onNestedRelease: Te,
		keyboardIsOpen: I,
		modal: g,
		snapPointsOffset: H,
		activeSnapPointIndex: V,
		direction: b,
		shouldScaleBackground: o,
		setBackgroundColorOnScale: s,
		noBodyStyles: y,
		container: te,
		autoFocus: ne
	} }, n));
}
var Jt = /*#__PURE__*/ M.forwardRef(function({ ...e }, t) {
	let { overlayRef: n, snapPoints: r, onRelease: i, shouldFade: a, isOpen: o, modal: s, shouldAnimate: c } = J(), l = Dt(t, n), u = r && r.length > 0;
	if (!s) return null;
	let d = M.useCallback((e) => i(e), [i]);
	return /*#__PURE__*/ M.createElement(Ze, {
		onMouseUp: d,
		ref: l,
		"data-vaul-overlay": "",
		"data-vaul-snap-points": o && u ? "true" : "false",
		"data-vaul-snap-points-overlay": o && a ? "true" : "false",
		"data-vaul-animate": c?.current ? "true" : "false",
		...e
	});
});
Jt.displayName = "Drawer.Overlay";
var Yt = /*#__PURE__*/ M.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, i) {
	let { drawerRef: a, onPress: o, onRelease: s, onDrag: c, keyboardIsOpen: l, snapPointsOffset: u, activeSnapPointIndex: d, modal: f, isOpen: p, direction: m, snapPoints: h, container: g, handleOnly: _, shouldAnimate: v, autoFocus: y } = J(), [b, x] = M.useState(!1), S = Dt(i, a), C = M.useRef(null), w = M.useRef(null), T = M.useRef(!1), ee = h && h.length > 0;
	Wt();
	let te = (e, t, n = 0) => {
		if (T.current) return !0;
		let r = Math.abs(e.y), i = Math.abs(e.x), a = i > r, o = ["bottom", "right"].includes(t) ? 1 : -1;
		if (t === "left" || t === "right") {
			if (!(e.x * o < 0) && i >= 0 && i <= n) return a;
		} else if (!(e.y * o < 0) && r >= 0 && r <= n) return !a;
		return T.current = !0, !0;
	};
	M.useEffect(() => {
		ee && window.requestAnimationFrame(() => {
			x(!0);
		});
	}, []);
	function ne(e) {
		C.current = null, T.current = !1, s(e);
	}
	return /*#__PURE__*/ M.createElement(Qe, {
		"data-vaul-drawer-direction": m,
		"data-vaul-drawer": "",
		"data-vaul-delayed-snap-points": b ? "true" : "false",
		"data-vaul-snap-points": p && ee ? "true" : "false",
		"data-vaul-custom-container": g ? "true" : "false",
		"data-vaul-animate": v?.current ? "true" : "false",
		...r,
		ref: S,
		style: u && u.length > 0 ? {
			"--snap-point-height": `${u[d ?? 0]}px`,
			...t
		} : t,
		onPointerDown: (e) => {
			_ || (r.onPointerDown == null || r.onPointerDown.call(r, e), C.current = {
				x: e.pageX,
				y: e.pageY
			}, o(e));
		},
		onOpenAutoFocus: (e) => {
			n?.(e), y || e.preventDefault();
		},
		onPointerDownOutside: (t) => {
			if (e?.(t), !f || t.defaultPrevented) {
				t.preventDefault();
				return;
			}
			l.current &&= !1;
		},
		onFocusOutside: (e) => {
			if (!f) {
				e.preventDefault();
				return;
			}
		},
		onPointerMove: (e) => {
			if (w.current = e, _ || (r.onPointerMove == null || r.onPointerMove.call(r, e), !C.current)) return;
			let t = e.pageY - C.current.y, n = e.pageX - C.current.x, i = e.pointerType === "touch" ? 10 : 2;
			te({
				x: n,
				y: t
			}, m, i) ? c(e) : (Math.abs(n) > i || Math.abs(t) > i) && (C.current = null);
		},
		onPointerUp: (e) => {
			r.onPointerUp == null || r.onPointerUp.call(r, e), C.current = null, T.current = !1, s(e);
		},
		onPointerOut: (e) => {
			r.onPointerOut == null || r.onPointerOut.call(r, e), ne(w.current);
		},
		onContextMenu: (e) => {
			r.onContextMenu == null || r.onContextMenu.call(r, e), w.current && ne(w.current);
		}
	});
});
Yt.displayName = "Drawer.Content";
var Xt = 250, Zt = 120, Qt = /*#__PURE__*/ M.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
	let { closeDrawer: i, isDragging: a, snapPoints: o, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: l, handleOnly: u, isOpen: d, onPress: f, onDrag: p } = J(), m = M.useRef(null), h = M.useRef(!1);
	function g() {
		if (h.current) {
			y();
			return;
		}
		window.setTimeout(() => {
			_();
		}, Zt);
	}
	function _() {
		if (a || e || h.current) {
			y();
			return;
		}
		if (y(), !o || o.length === 0) {
			l || i();
			return;
		}
		if (s === o[o.length - 1] && l) {
			i();
			return;
		}
		let t = o.findIndex((e) => e === s);
		if (t === -1) return;
		let n = o[t + 1];
		c(n);
	}
	function v() {
		m.current = window.setTimeout(() => {
			h.current = !0;
		}, Xt);
	}
	function y() {
		m.current && window.clearTimeout(m.current), h.current = !1;
	}
	return /*#__PURE__*/ M.createElement("div", {
		onClick: g,
		onPointerCancel: y,
		onPointerDown: (e) => {
			u && f(e), v();
		},
		onPointerMove: (e) => {
			u && p(e);
		},
		ref: r,
		"data-vaul-drawer-visible": d ? "true" : "false",
		"data-vaul-handle": "",
		"aria-hidden": "true",
		...n
	}, /*#__PURE__*/ M.createElement("span", {
		"data-vaul-handle-hitarea": "",
		"aria-hidden": "true"
	}, t));
});
Qt.displayName = "Drawer.Handle";
function $t({ onDrag: e, onOpenChange: t, open: n, ...r }) {
	let { onNestedDrag: i, onNestedOpenChange: a, onNestedRelease: o } = J();
	if (!i) throw Error("Drawer.NestedRoot must be placed in another drawer");
	return /*#__PURE__*/ M.createElement(qt, {
		nested: !0,
		open: n,
		onClose: () => {
			a(!1);
		},
		onDrag: (t, n) => {
			i(t, n), e?.(t, n);
		},
		onOpenChange: (e) => {
			e && a(e), t?.(e);
		},
		onRelease: o,
		...r
	});
}
function en(e) {
	let t = J(), { container: n = t.container, ...r } = e;
	return /*#__PURE__*/ M.createElement(Xe, {
		container: n,
		...r
	});
}
var $ = {
	Root: qt,
	NestedRoot: $t,
	Content: Yt,
	Overlay: Jt,
	Trigger: Ye,
	Portal: en,
	Handle: Qt,
	Close: tt,
	Title: $e,
	Description: et
}, tn = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ R($.Root, {
	shouldScaleBackground: e,
	...t
});
tn.displayName = "Drawer";
var nn = $.Trigger, rn = $.Portal;
$.Close;
var an = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ R($.Overlay, {
	ref: n,
	className: d("bg-black/80 fixed inset-0 z-50", e),
	...t
}));
an.displayName = $.Overlay.displayName;
var on = j.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ z(rn, { children: [/* @__PURE__ */ R(an, {}), /* @__PURE__ */ z($.Content, {
	ref: r,
	className: d("bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-xl focus:outline-none", e),
	...n,
	children: [/* @__PURE__ */ R("div", { className: "mx-auto mt-2 h-1 w-8 rounded-full bg-f1-border" }), t]
})] }));
on.displayName = "DrawerContent";
var sn = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ R($.Title, {
	ref: n,
	className: d("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
sn.displayName = $.Title.displayName;
var cn = j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ R($.Description, {
	ref: n,
	className: d("text-muted-foreground text-sm", e),
	...t
}));
cn.displayName = $.Description.displayName;
//#endregion
//#region src/experimental/Navigation/Dropdown/index.tsx
var ln = [], un = a("Dropdown", (e) => {
	let { open: t, onOpenChange: r, dataTestId: i, ...a } = e, o = ln.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, a);
	return /* @__PURE__ */ R(n, {
		dataTestId: i,
		children: /* @__PURE__ */ R(W, {
			...o,
			open: t,
			onOpenChange: r,
			align: e.align || "end"
		})
	});
}), dn = a("MobileDropdown", ({ items: e, children: t, dataTestId: i }) => {
	let [a, o] = ue(!1);
	return /* @__PURE__ */ R(n, {
		dataTestId: i,
		children: /* @__PURE__ */ z(tn, {
			open: a,
			onOpenChange: o,
			children: [
				/* @__PURE__ */ R(nn, {
					asChild: !0,
					children: t || /* @__PURE__ */ R(s, {
						label: "Other actions",
						icon: B,
						variant: "outline",
						size: "lg",
						pressed: a,
						noTitle: !0
					})
				}),
				/* @__PURE__ */ R(an, { className: "bg-f1-background-overlay" }),
				/* @__PURE__ */ R(on, {
					className: "bg-f1-background",
					children: /* @__PURE__ */ R("div", {
						className: "flex flex-col px-2 pb-3 pt-2",
						children: e.map((e, t) => e.type === "separator" ? /* @__PURE__ */ R("div", { className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary" }, `separator-${t}`) : e.type === "label" ? /* @__PURE__ */ R("span", {
							className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
							children: e.text
						}, `label-${t}`) : e.href ? /* @__PURE__ */ R(c, {
							href: e.href,
							className: d("flex w-full items-start gap-1.5", e.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
							children: /* @__PURE__ */ R(U, { item: e })
						}, `link-${t}`) : /* @__PURE__ */ z("button", {
							onClick: (t) => {
								t.preventDefault(), t.stopPropagation(), e.onClick?.(), o(!1);
							},
							className: "flex w-full cursor-pointer items-center gap-2 p-3",
							children: [e.icon && /* @__PURE__ */ R("span", {
								className: d("h-5 w-5 text-f1-icon", e.critical && "text-f1-icon-critical"),
								children: /* @__PURE__ */ R(r, {
									icon: e.icon,
									size: "md"
								})
							}), /* @__PURE__ */ R("span", {
								className: d("font-medium", e.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
								children: e.label
							})]
						}, e.label))
					})
				})
			]
		})
	});
});
//#endregion
//#region src/components/avatars/F0AvatarList/utils.ts
function fn(e, t) {
	switch (e) {
		case "person": return `${t.firstName} ${t.lastName}`;
		case "team": return t.name;
		case "company": return t.name;
		case "file": return t.file.name;
		case "flag": return t.name;
		default: return "";
	}
}
//#endregion
//#region src/components/avatars/F0AvatarList/components/MaxCounter.tsx
var pn = e({
	base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
	variants: {
		size: {
			xs: "h-5 w-5 rounded-xs text-sm",
			sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
			md: "h-8 min-w-8 rounded px-1.5"
		},
		type: {
			base: "",
			rounded: "!rounded-full"
		}
	},
	compoundVariants: [{
		size: "sm",
		type: "rounded",
		className: "px-1.5"
	}, {
		size: "md",
		type: "rounded",
		className: "px-2"
	}],
	defaultVariants: {
		size: "md",
		type: "base"
	}
}), mn = ({ count: e, size: t = "md", type: n, list: i, avatarType: a = "person" }) => {
	let [o, s] = ue(!1), c = I(!1), l = I(null), h = I(void 0);
	P(() => () => clearTimeout(h.current), []);
	let g = () => clearTimeout(h.current), _ = () => {
		g(), c.current = !0, s(!0);
	}, v = () => {
		g(), h.current = setTimeout(() => s(!1), 150);
	}, y = t === "xs" ? /* @__PURE__ */ z(L, { children: [/* @__PURE__ */ R(r, {
		icon: B,
		size: "xs"
	}), /* @__PURE__ */ z("span", {
		className: "sr-only",
		children: ["+", e]
	})] }) : `+${e}`;
	if (!i?.length) return /* @__PURE__ */ R("div", {
		className: d("cursor-default font-medium transition", pn({
			size: t,
			type: n
		})),
		children: y
	});
	let b = i.map((e, t) => {
		let n = e.tooltipDescription;
		return /* @__PURE__ */ z("div", {
			className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
			children: [/* @__PURE__ */ R("div", {
				className: "h-6 w-6 shrink-0",
				children: /* @__PURE__ */ R(m, {
					avatar: {
						type: a,
						...e
					},
					size: "sm"
				})
			}), /* @__PURE__ */ z("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ R("div", {
					className: "truncate font-semibold",
					children: fn(a, e)
				}), n && /* @__PURE__ */ R("div", {
					className: "truncate text-sm text-current opacity-70",
					children: n
				})]
			})]
		}, t);
	});
	return /* @__PURE__ */ z(re, {
		open: o,
		onOpenChange: s,
		children: [/* @__PURE__ */ R(x, {
			asChild: !0,
			children: /* @__PURE__ */ R("button", {
				type: "button",
				onPointerEnter: _,
				onPointerLeave: v,
				onClick: (e) => {
					c.current = !1, o && (e.preventDefault(), l.current?.focus());
				},
				className: d("cursor-pointer font-medium transition hover:bg-f1-background-secondary-hover", pn({
					size: t,
					type: n
				}), u()),
				children: y
			})
		}), /* @__PURE__ */ R(ee, {
			ref: l,
			side: "top",
			className: "w-[200px] overflow-hidden rounded border-0 bg-f1-background-inverse p-0 font-medium text-f1-foreground-inverse shadow-none",
			onPointerEnter: g,
			onPointerLeave: v,
			onOpenAutoFocus: (e) => {
				c.current && e.preventDefault();
			},
			onCloseAutoFocus: (e) => {
				c.current && e.preventDefault();
			},
			children: /* @__PURE__ */ z(p, {
				className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
				children: [b, /* @__PURE__ */ R(f, {
					orientation: "vertical",
					className: "[&_div]:bg-f1-background"
				})]
			})
		})]
	});
}, hn = [
	"xs",
	"sm",
	"md"
], gn = {
	base: {
		md: "path('M1.08993 5.46009C0 7.59921 0 10.3995 0 16C0 21.6005 0 24.4008 1.08993 26.5399C2.04867 28.4215 3.57847 29.9513 5.46009 30.9101C7.59921 32 10.3995 32 16 32C21.6005 32 24.4008 32 26.5399 30.9101C27.4506 30.446 28.279 29.8482 29 29.1414C28.2314 28.388 27.5846 27.5108 27.0899 26.5399C26 24.4008 26 21.6005 26 16C26 10.3995 26 7.59921 27.0899 5.46009C27.5846 4.48921 28.2314 3.612 29 2.85857C28.279 2.15181 27.4506 1.55398 26.5399 1.08993C24.4008 0 21.6005 0 16 0C10.3995 0 7.59921 0 5.46009 1.08993C3.57847 2.04867 2.04867 3.57847 1.08993 5.46009Z')",
		sm: "path('M0.608964 4.93853C0 6.4087 0 8.27247 0 12C0 15.7275 0 17.5913 0.608964 19.0615C1.42092 21.0217 2.97831 22.5791 4.93853 23.391C6.4087 24 8.27247 24 12 24C15.7275 24 17.5913 24 19.0615 23.391C19.9729 23.0135 20.7972 22.4749 21.5 21.8095C20.6912 21.0438 20.0434 20.1103 19.609 19.0615C19 17.5913 19 15.7275 19 12C19 8.27247 19 6.4087 19.609 4.93853C20.0434 3.88971 20.6912 2.95622 21.5 2.19052C20.7972 1.52515 19.9729 0.986481 19.0615 0.608964C17.5913 0 15.7275 0 12 0C8.27247 0 6.4087 0 4.93853 0.608964C2.97831 1.42092 1.42092 2.97831 0.608964 4.93853Z')",
		xs: "path('M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V11.4C0 14.7603 0 16.4405 0.653961 17.7239C1.2292 18.8529 2.14708 19.7708 3.27606 20.346C4.55953 21 6.23969 21 9.6 21H10.4C13.7603 21 15.4405 21 16.7239 20.346C17.188 20.1096 17.6164 19.8152 18 19.4721C17.4504 18.9805 16.9927 18.3889 16.654 17.7239C16 16.4405 16 14.7603 16 11.4V9.6C16 6.23969 16 4.55953 16.654 3.27606C16.9927 2.61115 17.4504 2.01946 18 1.52786C17.6164 1.18476 17.188 0.890414 16.7239 0.653961C15.4405 0 13.7603 0 10.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606Z')"
	},
	rounded: {
		md: "path('M29 6.67055C27.1119 9.29683 26 12.5186 26 16C26 19.4814 27.1119 22.7032 29 25.3295C26.0958 29.3692 21.3551 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C21.3551 0 26.0958 2.63083 29 6.67055Z')",
		sm: "path('M21.3746 4.50813C19.1755 1.76008 15.7933 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C15.7933 24 19.1755 22.2399 21.3746 19.4919C19.8788 17.3743 19 14.7898 19 12C19 9.21023 19.8788 6.62571 21.3746 4.50813Z')",
		xs: "path('M18 4.19899C16.7442 5.95406 16 8.13577 16 10.5C16 12.8642 16.7442 15.0459 18 16.801C16.1755 19.3508 13.2712 21 10 21C4.47716 21 0 16.299 0 10.5C0 4.70102 4.47716 0 10 0C13.2712 0 16.1755 1.64923 18 4.19899Z')"
	}
}, _n = ({ avatars: e, size: t = "md", type: n, noTooltip: r = !1, remainingCount: i, max: a, tooltipScroll: s, layout: c }) => {
	if (t && !hn.includes(t)) {
		let e = {
			small: "sm",
			medium: "md",
			xsmall: "xs"
		};
		console.warn(`The avatar list size: ${t} is deprecated. Use ${e[t]} instead.`), t = e[t] ?? "md";
	}
	let l = {
		xs: -2,
		sm: -3,
		md: -4
	}[t] ?? 0, u = F(() => ({
		xs: 20,
		sm: 24,
		md: 32
	})[t], [t]);
	return /* @__PURE__ */ R(h, {
		max: a,
		min: a,
		items: e.map((e) => ({
			type: n,
			...e
		})),
		gap: l,
		itemsWidth: u,
		className: "flex items-center",
		renderListItem: (a, s) => {
			let c = fn(n, a), l = a.tooltipDescription, u = !!a.badge, d = s === e.length - 1, f = /* @__PURE__ */ R("div", {
				className: "flex h-fit w-fit shrink-0 items-center justify-center",
				style: (!d || d && i !== void 0) && !u ? { clipPath: gn[n === "person" ? "rounded" : "base"][t] } : void 0,
				children: /* @__PURE__ */ R(m, {
					avatar: {
						...a,
						type: n
					},
					size: t
				})
			});
			return /* @__PURE__ */ R("div", { children: r ? f : /* @__PURE__ */ R(o, {
				label: c,
				description: l,
				children: f
			}) }, s);
		},
		renderDropdownItem: () => null,
		forceShowingOverflowIndicator: i !== void 0,
		renderOverflowIndicator: (r) => /* @__PURE__ */ R("div", {
			className: "flex h-fit w-fit items-center",
			style: { marginLeft: l },
			children: /* @__PURE__ */ R(mn, {
				count: (i ?? 0) + r,
				size: t,
				type: n === "person" ? "rounded" : "base",
				avatarType: n,
				list: i ? void 0 : e.slice(e.length - r)
			})
		}),
		overflowIndicatorWithPopover: !1
	});
};
_n.displayName = "AvatarList";
//#endregion
//#region src/components/avatars/F0AvatarList/index.tsx
var vn = t(_n), yn = (e, t) => {
	let n = [
		"categorical-1",
		"categorical-2",
		"categorical-3",
		"categorical-4",
		"categorical-5",
		"categorical-6",
		"categorical-7",
		"categorical-8"
	];
	return bn(n[e % n.length], t);
}, bn = (e, t) => {
	let n = t === void 0 ? "" : ` / ${t}`;
	return `hsl(var(--${`chart-${e}`})${n})`;
}, xn = "Progress", Sn = 100, [Cn, wn] = v(xn), [Tn, En] = Cn(xn), Dn = j.forwardRef((e, t) => {
	let { __scopeProgress: n, value: r = null, max: i, getValueLabel: a = An, ...o } = e;
	(i || i === 0) && !Nn(i) && console.error(Fn(`${i}`, "Progress"));
	let s = Nn(i) ? i : Sn;
	r !== null && !Pn(r, s) && console.error(In(`${r}`, "Progress"));
	let c = Pn(r, s) ? r : null, l = Mn(c) ? a(c, s) : void 0;
	return /* @__PURE__ */ R(Tn, {
		scope: n,
		value: c,
		max: s,
		children: /* @__PURE__ */ R(S.div, {
			"aria-valuemax": s,
			"aria-valuemin": 0,
			"aria-valuenow": Mn(c) ? c : void 0,
			"aria-valuetext": l,
			role: "progressbar",
			"data-state": jn(c, s),
			"data-value": c ?? void 0,
			"data-max": s,
			...o,
			ref: t
		})
	});
});
Dn.displayName = xn;
var On = "ProgressIndicator", kn = j.forwardRef((e, t) => {
	let { __scopeProgress: n, ...r } = e, i = En(On, n);
	return /* @__PURE__ */ R(S.div, {
		"data-state": jn(i.value, i.max),
		"data-value": i.value ?? void 0,
		"data-max": i.max,
		...r,
		ref: t
	});
});
kn.displayName = On;
function An(e, t) {
	return `${Math.round(e / t * 100)}%`;
}
function jn(e, t) {
	return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Mn(e) {
	return typeof e == "number";
}
function Nn(e) {
	return Mn(e) && !isNaN(e) && e > 0;
}
function Pn(e, t) {
	return Mn(e) && !isNaN(e) && e <= t && e >= 0;
}
function Fn(e, t) {
	return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Sn}\`.`;
}
function In(e, t) {
	return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Sn} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ln = Dn, Rn = kn, zn = j.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ R(Ln, {
	ref: r,
	value: t,
	className: d("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
	...n,
	children: /* @__PURE__ */ R(Rn, {
		className: "h-full w-full flex-1 transition-all",
		style: {
			backgroundColor: n.color,
			transform: `translateX(-${100 - (t || 0)}%)`
		}
	})
}));
zn.displayName = Ln.displayName;
//#endregion
export { de as S, W as _, un as a, B as b, on as c, Qe as d, et as f, $e as g, Je as h, vn as i, cn as l, Xe as m, yn as n, dn as o, Ze as p, bn as r, tn as s, zn as t, an as u, he as v, fe as x, me as y };
