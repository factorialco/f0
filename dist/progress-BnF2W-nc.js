import { t as e } from "./dist-CqnuTXEz.js";
import { d as t, u as n } from "./OneEllipsis-DuhKMtYp.js";
import { D as r, c as i, f as a, ht as o, s } from "./variants-BOK7SMP_.js";
import { n as c, t as l } from "./utils-CVzxZnoI.js";
import { i as u, u as d } from "./F0Button-DTIyyURd.js";
import { m as f, p, rt as m, y as h } from "./F0Checkbox-BNfJ1XN6.js";
import { _ as g, a as _, b as v, f as y, g as b, h as x, i as ee, m as S, p as C, t as w, y as te } from "./popover-By8ytmVb.js";
import { a as ne, i as re, l as T, n as ie, p as ae, t as oe } from "./dropdown-menu-CiJk0TZy.js";
import { a as E, d as D, n as O, r as k, s as A, t as j, u as se } from "./dist-zRL9MpsG.js";
import * as M from "react";
import N, { forwardRef as P, useEffect as F, useLayoutEffect as ce, useMemo as I, useRef as L, useState as R } from "react";
import { Fragment as z, jsx as B, jsxs as V } from "react/jsx-runtime";
var le = P((e, t) => /* @__PURE__ */ V("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ B("circle", {
			cx: 12,
			cy: 12,
			r: 1.5,
			fill: "currentColor",
			transform: "rotate(90 12 12)"
		}),
		/* @__PURE__ */ B("circle", {
			cx: 12,
			cy: 6.5,
			r: 1.5,
			fill: "currentColor",
			transform: "rotate(90 12 6.5)"
		}),
		/* @__PURE__ */ B("circle", {
			cx: 12,
			cy: 17.5,
			r: 1.5,
			fill: "currentColor",
			transform: "rotate(90 12 17.5)"
		})
	]
})), H = P((e, t) => /* @__PURE__ */ V("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ B("circle", {
			cx: 12,
			cy: 12,
			r: 1.5,
			fill: "currentColor"
		}),
		/* @__PURE__ */ B("circle", {
			cx: 6.5,
			cy: 12,
			r: 1.5,
			fill: "currentColor"
		}),
		/* @__PURE__ */ B("circle", {
			cx: 17.5,
			cy: 12,
			r: 1.5,
			fill: "currentColor"
		})
	]
})), ue = (e) => typeof e == "string" ? e : [e.title, e.description].filter(Boolean).join(" "), U = (e) => e.map((e) => e.trim()).map((e) => /[.!?:;]$/.test(e) ? e : `${e}.`).join(" "), de = (e) => {
	if (!e) return;
	if (typeof e == "string") return e;
	let t = [
		e.title,
		e.description,
		...(e.items ?? []).map(ue)
	].filter((e) => !!(e && e.trim()));
	return t.length > 0 ? U(t) : void 0;
}, fe = (e) => {
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
}, W = ({ tooltip: e, children: t }) => {
	let n = fe(e);
	return n ? /* @__PURE__ */ B(i, {
		instant: !0,
		...n,
		children: t
	}) : /* @__PURE__ */ B(z, { children: t });
}, pe = ({ item: e }) => /* @__PURE__ */ V(z, { children: [
	e.avatar && /* @__PURE__ */ B(m, {
		avatar: e.avatar,
		size: "xs"
	}),
	e.icon && /* @__PURE__ */ B(r, {
		icon: e.icon,
		size: "md",
		className: l("text-f1-icon", e.critical && "text-f1-icon-critical")
	}),
	/* @__PURE__ */ V("div", {
		className: "flex flex-col items-start",
		children: [e.label, e.description && /* @__PURE__ */ B("div", {
			className: l("font-normal text-f1-foreground-secondary", e.critical && "text-f1-foreground-critical"),
			children: e.description
		})]
	})
] }), me = ({ item: e }) => {
	let { label: t, icon: n, avatar: r, description: i, disabledTooltip: a, href: o, critical: s, disabled: c, ...u } = e, f = l("flex items-start gap-1.5 w-full", s && "text-f1-foreground-critical"), p = /* @__PURE__ */ B(re, {
		asChild: !0,
		className: l(f, "cursor-pointer"),
		disabled: c,
		children: o ? /* @__PURE__ */ B(d, {
			href: o,
			className: l(f, "text-f1-foreground no-underline hover:cursor-pointer"),
			...u,
			children: /* @__PURE__ */ B(pe, { item: e })
		}) : /* @__PURE__ */ B("div", {
			...u,
			className: f,
			children: /* @__PURE__ */ B(pe, { item: e })
		})
	});
	return c && a ? /* @__PURE__ */ B(W, {
		tooltip: a,
		children: /* @__PURE__ */ B("span", {
			className: "block w-full cursor-not-allowed",
			children: p
		})
	}) : p;
};
function he(e, t) {
	return e.type === "separator" ? /* @__PURE__ */ B(T, {}, t) : e.type === "label" ? /* @__PURE__ */ B(ne, {
		className: "flex-1 text-xs font-medium leading-4 text-f1-foreground-secondary",
		children: e.text
	}, t) : /* @__PURE__ */ B(me, { item: {
		...e,
		onClick: () => {
			setTimeout(() => {
				e.onClick?.();
			}, 200);
		}
	} }, t);
}
function ge({ items: e, icon: t = H, align: n = "start", size: r, children: i, open: o, onOpenChange: s, label: c, disabled: l, ...d }) {
	let f = a(), [p, m] = R(!1), h = o !== void 0 && s !== void 0, g = h ? o : p, _ = h ? s : m;
	F(() => {
		l && g && _(!1);
	}, [
		l,
		g,
		_
	]);
	let v = !l && g, y = (e) => {
		_(e);
	}, b = i ? N.isValidElement(i) ? N.cloneElement(i, {
		disabled: i.props.disabled ?? l,
		"aria-disabled": i.props["aria-disabled"] ?? (l ? !0 : void 0)
	}) : i : /* @__PURE__ */ B(u, {
		...d,
		hideLabel: !c,
		icon: t,
		size: r,
		label: c ?? f.actions.toggleDropdownMenu,
		variant: "outline",
		pressed: v,
		compact: !c,
		noAutoTooltip: !0,
		noTitle: !0,
		disabled: l
	});
	return /* @__PURE__ */ V(oe, {
		open: v,
		onOpenChange: y,
		children: [/* @__PURE__ */ B(ae, {
			asChild: !0,
			disabled: l,
			children: b
		}), /* @__PURE__ */ B(ie, {
			align: n,
			children: e.map((e, t) => he(e, t))
		})]
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.5_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.mjs
var G = "Dialog", [_e, ve] = D(G), [ye, K] = _e(G), be = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = M.useRef(null), c = M.useRef(null), [l = !1, u] = j({
		prop: r,
		defaultProp: i,
		onChange: a
	});
	return /* @__PURE__ */ B(ye, {
		scope: t,
		triggerRef: s,
		contentRef: c,
		contentId: g(),
		titleId: g(),
		descriptionId: g(),
		open: l,
		onOpenChange: u,
		onOpenToggle: M.useCallback(() => u((e) => !e), [u]),
		modal: o,
		children: n
	});
};
be.displayName = G;
var xe = "DialogTrigger", Se = M.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(xe, n), a = A(t, i.triggerRef);
	return /* @__PURE__ */ B(k.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Be(i.open),
		...r,
		ref: a,
		onClick: O(e.onClick, i.onOpenToggle)
	});
});
Se.displayName = xe;
var Ce = "DialogPortal", [we, Te] = _e(Ce, { forceMount: void 0 }), Ee = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = K(Ce, t);
	return /* @__PURE__ */ B(we, {
		scope: t,
		forceMount: n,
		children: M.Children.map(r, (e) => /* @__PURE__ */ B(C, {
			present: n || a.open,
			children: /* @__PURE__ */ B(S, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
Ee.displayName = Ce;
var De = "DialogOverlay", Oe = M.forwardRef((e, t) => {
	let n = Te(De, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = K(De, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ B(C, {
		present: r || a.open,
		children: /* @__PURE__ */ B(ke, {
			...i,
			ref: t
		})
	}) : null;
});
Oe.displayName = De;
var ke = M.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(De, n);
	return /* @__PURE__ */ B(te, {
		as: E,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ B(k.div, {
			"data-state": Be(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), q = "DialogContent", Ae = M.forwardRef((e, t) => {
	let n = Te(q, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = K(q, e.__scopeDialog);
	return /* @__PURE__ */ B(C, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ B(je, {
			...i,
			ref: t
		}) : /* @__PURE__ */ B(Me, {
			...i,
			ref: t
		})
	});
});
Ae.displayName = q;
var je = M.forwardRef((e, t) => {
	let n = K(q, e.__scopeDialog), r = M.useRef(null), i = A(t, n.contentRef, r);
	return M.useEffect(() => {
		let e = r.current;
		if (e) return v(e);
	}, []), /* @__PURE__ */ B(Ne, {
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
}), Me = M.forwardRef((e, t) => {
	let n = K(q, e.__scopeDialog), r = M.useRef(!1), i = M.useRef(!1);
	return /* @__PURE__ */ B(Ne, {
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
}), Ne = M.forwardRef((e, t) => {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = K(q, n), c = M.useRef(null), l = A(t, c);
	return y(), /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(x, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ B(b, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionId,
			"aria-labelledby": s.titleId,
			"data-state": Be(s.open),
			...o,
			ref: l,
			onDismiss: () => s.onOpenChange(!1)
		})
	}), /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(We, { titleId: s.titleId }), /* @__PURE__ */ B(Ke, {
		contentRef: c,
		descriptionId: s.descriptionId
	})] })] });
}), Pe = "DialogTitle", Fe = M.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Pe, n);
	return /* @__PURE__ */ B(k.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
Fe.displayName = Pe;
var Ie = "DialogDescription", Le = M.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Ie, n);
	return /* @__PURE__ */ B(k.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
Le.displayName = Ie;
var Re = "DialogClose", ze = M.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = K(Re, n);
	return /* @__PURE__ */ B(k.button, {
		type: "button",
		...r,
		ref: t,
		onClick: O(e.onClick, () => i.onOpenChange(!1))
	});
});
ze.displayName = Re;
function Be(e) {
	return e ? "open" : "closed";
}
var Ve = "DialogTitleWarning", [He, Ue] = se(Ve, {
	contentName: q,
	titleName: Pe,
	docsSlug: "dialog"
}), We = ({ titleId: e }) => {
	let t = Ue(Ve), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return M.useEffect(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, Ge = "DialogDescriptionWarning", Ke = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ue(Ge).contentName}}.`;
	return M.useEffect(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, qe = be, Je = Se, Ye = Ee, Xe = Oe, Ze = Ae, Qe = Fe, $e = Le, et = ze;
//#endregion
//#region ../../node_modules/.pnpm/vaul@1.1.2_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/vaul/dist/index.mjs
function tt(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var nt = N.createContext({
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
	let e = N.useContext(nt);
	if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
	return e;
};
tt("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
function rt() {
	let e = navigator.userAgent;
	return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e));
}
function it() {
	return lt(/^Mac/);
}
function at() {
	return lt(/^iPhone/);
}
function ot() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function st() {
	return lt(/^iPad/) || it() && navigator.maxTouchPoints > 1;
}
function ct() {
	return at() || st();
}
function lt(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var ut = 24, dt = typeof window < "u" ? ce : F;
function ft(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
var pt = typeof document < "u" && window.visualViewport;
function mt(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function ht(e) {
	for (mt(e) && (e = e.parentElement); e && !mt(e);) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
var gt = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]), _t = 0, vt;
function yt(e = {}) {
	let { isDisabled: t } = e;
	dt(() => {
		if (!t) return _t++, _t === 1 && ct() && (vt = bt()), () => {
			_t--, _t === 0 && vt?.();
		};
	}, [t]);
}
function bt() {
	let e, t = 0, n = (n) => {
		e = ht(n.target), (e !== document.documentElement || e !== document.body) && (t = n.changedTouches[0].pageY);
	}, r = (n) => {
		if (!e || e === document.documentElement || e === document.body) {
			n.preventDefault();
			return;
		}
		let r = n.changedTouches[0].pageY, i = e.scrollTop, a = e.scrollHeight - e.clientHeight;
		a !== 0 && ((i <= 0 && r > t || i >= a && r < t) && n.preventDefault(), t = r);
	}, i = (e) => {
		let t = e.target;
		Ct(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
			t.style.transform = "";
		}));
	}, a = (e) => {
		let t = e.target;
		Ct(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
			t.style.transform = "", pt && (pt.height < window.innerHeight ? requestAnimationFrame(() => {
				St(t);
			}) : pt.addEventListener("resize", () => St(t), { once: !0 }));
		}));
	}, o = () => {
		window.scrollTo(0, 0);
	}, s = window.pageXOffset, c = window.pageYOffset, l = ft(xt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
	window.scrollTo(0, 0);
	let u = ft(Y(document, "touchstart", n, {
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
function xt(e, t, n) {
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
function St(e) {
	let t = document.scrollingElement || document.documentElement;
	for (; e && e !== t;) {
		let t = ht(e);
		if (t !== document.documentElement && t !== document.body && t !== e) {
			let n = t.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
			e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + ut && (t.scrollTop += r - n);
		}
		e = t.parentElement;
	}
}
function Ct(e) {
	return e instanceof HTMLInputElement && !gt.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function wt(e, t) {
	typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Tt(...e) {
	return (t) => e.forEach((e) => wt(e, t));
}
function Et(...e) {
	return M.useCallback(Tt(...e), e);
}
var Dt = /* @__PURE__ */ new WeakMap();
function X(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement)) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && Dt.set(e, r);
}
function Ot(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = Dt.get(e);
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
function kt(e, t) {
	if (!e) return null;
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? parseFloat(i[1].split(", ")[Z(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[Z(t) ? 5 : 4]) : null);
}
function At(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function jt(e, t) {
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
}, Mt = .4, Nt = .25, Pt = 100, Ft = 8, It = 16, Lt = 26, Rt = "vaul-dragging";
function zt(e) {
	let t = N.useRef(e);
	return N.useEffect(() => {
		t.current = e;
	}), N.useMemo(() => (...e) => t.current == null ? void 0 : t.current.call(t, ...e), []);
}
function Bt({ defaultProp: e, onChange: t }) {
	let n = N.useState(e), [r] = n, i = N.useRef(r), a = zt(t);
	return N.useEffect(() => {
		i.current !== r && (a(r), i.current = r);
	}, [
		r,
		i,
		a
	]), n;
}
function Vt({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	let [r, i] = Bt({
		defaultProp: t,
		onChange: n
	}), a = e !== void 0, o = a ? e : r, s = zt(n);
	return [o, N.useCallback((t) => {
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
function Ht({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: i, fadeFromIndex: a, onSnapPointChange: o, direction: s = "bottom", container: c, snapToSequentialPoint: l }) {
	let [u, d] = Vt({
		prop: e,
		defaultProp: n?.[0],
		onChange: t
	}), [f, p] = N.useState(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	N.useEffect(() => {
		function e() {
			p({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			});
		}
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let m = N.useMemo(() => u === n?.[n.length - 1] || null, [n, u]), h = N.useMemo(() => n?.findIndex((e) => e === u) ?? null, [n, u]), g = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === u || !n, _ = N.useMemo(() => {
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
	]), v = N.useMemo(() => h === null ? null : _?.[h], [_, h]), y = N.useCallback((e) => {
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
	N.useEffect(() => {
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
		if (r > Mt && Math.abs(e) < g * .4) {
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
	function ee(e, t) {
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
		getPercentageDragged: ee,
		setActiveSnapPoint: d,
		activeSnapPointIndex: h,
		onRelease: b,
		onDrag: x,
		snapPointsOffset: _
	};
}
function Ut() {
	let { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: i } = J(), a = N.useRef(null), o = I(() => document.body.style.backgroundColor, []);
	function s() {
		return (window.innerWidth - Lt) / window.innerWidth;
	}
	N.useEffect(() => {
		if (t && n) {
			a.current && clearTimeout(a.current);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			r && !i && jt(document.body, { background: "black" }), jt(t, {
				transformOrigin: Z(e) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${Q.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${Q.EASE.join(",")})`
			});
			let n = jt(t, {
				borderRadius: `${Ft}px`,
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
var Wt = null;
function Gt({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: i, noBodyStyles: a }) {
	let [o, s] = N.useState(() => typeof window < "u" ? window.location.href : ""), c = N.useRef(0), l = N.useCallback(() => {
		if (ot() && Wt === null && e && !a) {
			Wt = {
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
	}, [e]), u = N.useCallback(() => {
		if (ot() && Wt !== null && !a) {
			let e = -parseInt(document.body.style.top, 10), t = -parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, Wt), window.requestAnimationFrame(() => {
				if (i && o !== window.location.href) {
					s(window.location.href);
					return;
				}
				window.scrollTo(t, e);
			}), Wt = null;
		}
	}, [o]);
	return N.useEffect(() => {
		function e() {
			c.current = window.scrollY;
		}
		return e(), window.addEventListener("scroll", e), () => {
			window.removeEventListener("scroll", e);
		};
	}, []), N.useEffect(() => {
		if (t) return () => {
			typeof document > "u" || document.querySelector("[data-vaul-drawer]") || u();
		};
	}, [t, u]), N.useEffect(() => {
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
function Kt({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: i, snapPoints: a, shouldScaleBackground: o = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = Nt, scrollLockTimeout: l = Pt, dismissible: u = !0, handleOnly: d = !1, fadeFromIndex: f = a && a.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: g = !0, onClose: _, nested: v, noBodyStyles: y = !1, direction: b = "bottom", defaultOpen: x = !1, disablePreventScroll: ee = !0, snapToSequentialPoint: S = !1, preventScrollRestoration: C = !1, repositionInputs: w = !0, onAnimationEnd: te, container: ne, autoFocus: re = !1 }) {
	let [T = !1, ie] = Vt({
		defaultProp: x,
		prop: e,
		onChange: (e) => {
			t?.(e), !e && !v && ge(), setTimeout(() => {
				te?.(e);
			}, Q.DURATION * 1e3), e && !g && typeof window < "u" && window.requestAnimationFrame(() => {
				document.body.style.pointerEvents = "auto";
			}), e || (document.body.style.pointerEvents = "auto");
		}
	}), [ae, oe] = N.useState(!1), [E, D] = N.useState(!1), [O, k] = N.useState(!1), A = N.useRef(null), j = N.useRef(null), se = N.useRef(null), M = N.useRef(null), P = N.useRef(null), F = N.useRef(!1), ce = N.useRef(null), I = N.useRef(0), L = N.useRef(!1), R = N.useRef(!x), z = N.useRef(0), B = N.useRef(null), V = N.useRef(B.current?.getBoundingClientRect().height || 0), le = N.useRef(B.current?.getBoundingClientRect().width || 0), H = N.useRef(0), { activeSnapPoint: ue, activeSnapPointIndex: U, setActiveSnapPoint: de, onRelease: fe, snapPointsOffset: W, onDrag: pe, shouldFade: me, getPercentageDragged: he } = Ht({
		snapPoints: a,
		activeSnapPointProp: p,
		setActiveSnapPointProp: m,
		drawerRef: B,
		fadeFromIndex: f,
		overlayRef: A,
		onSnapPointChange: N.useCallback((e) => {
			a && e === W.length - 1 && (j.current = /* @__PURE__ */ new Date());
		}, []),
		direction: b,
		container: ne,
		snapToSequentialPoint: S
	});
	yt({ isDisabled: !T || E || !g || O || !ae || !w || !ee });
	let { restorePositionSetting: ge } = Gt({
		isOpen: T,
		modal: g,
		nested: v ?? !1,
		hasBeenOpened: ae,
		preventScrollRestoration: C,
		noBodyStyles: y
	});
	function G() {
		return (window.innerWidth - Lt) / window.innerWidth;
	}
	function _e(e) {
		!u && !a || B.current && !B.current.contains(e.target) || (V.current = B.current?.getBoundingClientRect().height || 0, le.current = B.current?.getBoundingClientRect().width || 0, D(!0), se.current = /* @__PURE__ */ new Date(), ct() && window.addEventListener("touchend", () => F.current = !1, { once: !0 }), e.target.setPointerCapture(e.pointerId), I.current = Z(b) ? e.pageY : e.pageX);
	}
	function ve(e, t) {
		let n = e, r = window.getSelection()?.toString(), i = B.current ? kt(B.current, b) : null, a = /* @__PURE__ */ new Date();
		if (n.tagName === "SELECT" || n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (b === "right" || b === "left") return !0;
		if (j.current && a.getTime() - j.current.getTime() < 500) return !1;
		if (i !== null && (b === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (P.current && a.getTime() - P.current.getTime() < l && i === 0 || t) return P.current = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return P.current = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function ye(e) {
		if (B.current && E) {
			let t = b === "bottom" || b === "right" ? 1 : -1, n = (I.current - (Z(b) ? e.pageY : e.pageX)) * t, i = n > 0, s = a && !u && !i;
			if (s && U === 0) return;
			let c = Math.abs(n), l = document.querySelector("[data-vaul-drawer-wrapper]"), d = c / (b === "bottom" || b === "top" ? V.current : le.current), p = he(c, i);
			if (p !== null && (d = p), s && d >= 1 || !F.current && !ve(e.target, i)) return;
			if (B.current.classList.add(Rt), F.current = !0, X(B.current, { transition: "none" }), X(A.current, { transition: "none" }), a && pe({ draggedDistance: n }), i && !a) {
				let e = At(n), r = Math.min(e * -1, 0) * t;
				X(B.current, { transform: Z(b) ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)` });
				return;
			}
			let m = 1 - d;
			if ((me || f && U === f - 1) && (r?.(e, d), X(A.current, {
				opacity: `${m}`,
				transition: "none"
			}, !0)), l && A.current && o) {
				let e = Math.min(G() + d * (1 - G()), 1), t = 8 - d * 8, n = Math.max(0, 14 - d * 14);
				X(l, {
					borderRadius: `${t}px`,
					transform: Z(b) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!a) {
				let e = c * t;
				X(B.current, { transform: Z(b) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	N.useEffect(() => {
		window.requestAnimationFrame(() => {
			R.current = !0;
		});
	}, []), N.useEffect(() => {
		var e;
		function t() {
			if (!B.current || !w) return;
			let e = document.activeElement;
			if (Ct(e) || L.current) {
				let e = window.visualViewport?.height || 0, t = window.innerHeight, n = t - e, r = B.current.getBoundingClientRect().height || 0, i = r > t * .8;
				H.current ||= r;
				let o = B.current.getBoundingClientRect().top;
				if (Math.abs(z.current - n) > 60 && (L.current = !L.current), a && a.length > 0 && W && U) {
					let e = W[U] || 0;
					n += e;
				}
				if (z.current = n, r > e || L.current) {
					let t = B.current.getBoundingClientRect().height, r = t;
					t > e && (r = e - (i ? o : Lt)), h ? B.current.style.height = `${t - Math.max(n, 0)}px` : B.current.style.height = `${Math.max(r, e - o)}px`;
				} else rt() || (B.current.style.height = `${H.current}px`);
				a && a.length > 0 && !L.current ? B.current.style.bottom = "0px" : B.current.style.bottom = `${Math.max(n, 0)}px`;
			}
		}
		return (e = window.visualViewport) == null || e.addEventListener("resize", t), () => window.visualViewport?.removeEventListener("resize", t);
	}, [
		U,
		a,
		W
	]);
	function K(e) {
		xe(), _?.(), e || ie(!1), setTimeout(() => {
			a && de(a[0]);
		}, Q.DURATION * 1e3);
	}
	function be() {
		if (!B.current) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]"), t = kt(B.current, b);
		X(B.current, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`
		}), X(A.current, {
			transition: `opacity ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			opacity: "1"
		}), o && t && t > 0 && T && X(e, {
			borderRadius: `${Ft}px`,
			overflow: "hidden",
			...Z(b) ? {
				transform: `scale(${G()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${G()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${Q.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${Q.EASE.join(",")})`
		}, !0);
	}
	function xe() {
		!E || !B.current || (B.current.classList.remove(Rt), F.current = !1, D(!1), M.current = /* @__PURE__ */ new Date());
	}
	function Se(e) {
		if (!E || !B.current) return;
		B.current.classList.remove(Rt), F.current = !1, D(!1), M.current = /* @__PURE__ */ new Date();
		let t = kt(B.current, b);
		if (!e || !ve(e.target, !1) || !t || Number.isNaN(t) || se.current === null) return;
		let n = M.current.getTime() - se.current.getTime(), r = I.current - (Z(b) ? e.pageY : e.pageX), o = Math.abs(r) / n;
		if (o > .05 && (k(!0), setTimeout(() => {
			k(!1);
		}, 200)), a) {
			fe({
				draggedDistance: r * (b === "bottom" || b === "right" ? 1 : -1),
				closeDrawer: K,
				velocity: o,
				dismissible: u
			}), i?.(e, !0);
			return;
		}
		if (b === "bottom" || b === "right" ? r > 0 : r < 0) {
			be(), i?.(e, !0);
			return;
		}
		if (o > Mt) {
			K(), i?.(e, !1);
			return;
		}
		let s = Math.min(B.current.getBoundingClientRect().height ?? 0, window.innerHeight), l = Math.min(B.current.getBoundingClientRect().width ?? 0, window.innerWidth);
		if (Math.abs(t) >= (b === "left" || b === "right" ? l : s) * c) {
			K(), i?.(e, !1);
			return;
		}
		i?.(e, !0), be();
	}
	N.useEffect(() => (T && (X(document.documentElement, { scrollBehavior: "auto" }), j.current = /* @__PURE__ */ new Date()), () => {
		Ot(document.documentElement, "scrollBehavior");
	}), [T]);
	function Ce(e) {
		let t = e ? (window.innerWidth - It) / window.innerWidth : 1, n = e ? -16 : 0;
		ce.current && window.clearTimeout(ce.current), X(B.current, {
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			transform: Z(b) ? `scale(${t}) translate3d(0, ${n}px, 0)` : `scale(${t}) translate3d(${n}px, 0, 0)`
		}), !e && B.current && (ce.current = setTimeout(() => {
			let e = kt(B.current, b);
			X(B.current, {
				transition: "none",
				transform: Z(b) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function we(e, t) {
		if (t < 0) return;
		let n = (window.innerWidth - It) / window.innerWidth, r = n + t * (1 - n), i = -16 + t * It;
		X(B.current, {
			transform: Z(b) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function Te(e, t) {
		let n = Z(b) ? window.innerHeight : window.innerWidth, r = t ? (n - It) / n : 1, i = t ? -16 : 0;
		t && X(B.current, {
			transition: `transform ${Q.DURATION}s cubic-bezier(${Q.EASE.join(",")})`,
			transform: Z(b) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`
		});
	}
	return N.useEffect(() => {
		g || window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		});
	}, [g]), /*#__PURE__*/ N.createElement(qe, {
		defaultOpen: x,
		onOpenChange: (e) => {
			!u && !e || (e ? oe(!0) : K(!0), ie(e));
		},
		open: T
	}, /*#__PURE__*/ N.createElement(nt.Provider, { value: {
		activeSnapPoint: ue,
		snapPoints: a,
		setActiveSnapPoint: de,
		drawerRef: B,
		overlayRef: A,
		onOpenChange: t,
		onPress: _e,
		onRelease: Se,
		onDrag: ye,
		dismissible: u,
		shouldAnimate: R,
		handleOnly: d,
		isOpen: T,
		isDragging: E,
		shouldFade: me,
		closeDrawer: K,
		onNestedDrag: we,
		onNestedOpenChange: Ce,
		onNestedRelease: Te,
		keyboardIsOpen: L,
		modal: g,
		snapPointsOffset: W,
		activeSnapPointIndex: U,
		direction: b,
		shouldScaleBackground: o,
		setBackgroundColorOnScale: s,
		noBodyStyles: y,
		container: ne,
		autoFocus: re
	} }, n));
}
var qt = /*#__PURE__*/ N.forwardRef(function({ ...e }, t) {
	let { overlayRef: n, snapPoints: r, onRelease: i, shouldFade: a, isOpen: o, modal: s, shouldAnimate: c } = J(), l = Et(t, n), u = r && r.length > 0;
	if (!s) return null;
	let d = N.useCallback((e) => i(e), [i]);
	return /*#__PURE__*/ N.createElement(Xe, {
		onMouseUp: d,
		ref: l,
		"data-vaul-overlay": "",
		"data-vaul-snap-points": o && u ? "true" : "false",
		"data-vaul-snap-points-overlay": o && a ? "true" : "false",
		"data-vaul-animate": c?.current ? "true" : "false",
		...e
	});
});
qt.displayName = "Drawer.Overlay";
var Jt = /*#__PURE__*/ N.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, i) {
	let { drawerRef: a, onPress: o, onRelease: s, onDrag: c, keyboardIsOpen: l, snapPointsOffset: u, activeSnapPointIndex: d, modal: f, isOpen: p, direction: m, snapPoints: h, container: g, handleOnly: _, shouldAnimate: v, autoFocus: y } = J(), [b, x] = N.useState(!1), ee = Et(i, a), S = N.useRef(null), C = N.useRef(null), w = N.useRef(!1), te = h && h.length > 0;
	Ut();
	let ne = (e, t, n = 0) => {
		if (w.current) return !0;
		let r = Math.abs(e.y), i = Math.abs(e.x), a = i > r, o = ["bottom", "right"].includes(t) ? 1 : -1;
		if (t === "left" || t === "right") {
			if (!(e.x * o < 0) && i >= 0 && i <= n) return a;
		} else if (!(e.y * o < 0) && r >= 0 && r <= n) return !a;
		return w.current = !0, !0;
	};
	N.useEffect(() => {
		te && window.requestAnimationFrame(() => {
			x(!0);
		});
	}, []);
	function re(e) {
		S.current = null, w.current = !1, s(e);
	}
	return /*#__PURE__*/ N.createElement(Ze, {
		"data-vaul-drawer-direction": m,
		"data-vaul-drawer": "",
		"data-vaul-delayed-snap-points": b ? "true" : "false",
		"data-vaul-snap-points": p && te ? "true" : "false",
		"data-vaul-custom-container": g ? "true" : "false",
		"data-vaul-animate": v?.current ? "true" : "false",
		...r,
		ref: ee,
		style: u && u.length > 0 ? {
			"--snap-point-height": `${u[d ?? 0]}px`,
			...t
		} : t,
		onPointerDown: (e) => {
			_ || (r.onPointerDown == null || r.onPointerDown.call(r, e), S.current = {
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
			if (C.current = e, _ || (r.onPointerMove == null || r.onPointerMove.call(r, e), !S.current)) return;
			let t = e.pageY - S.current.y, n = e.pageX - S.current.x, i = e.pointerType === "touch" ? 10 : 2;
			ne({
				x: n,
				y: t
			}, m, i) ? c(e) : (Math.abs(n) > i || Math.abs(t) > i) && (S.current = null);
		},
		onPointerUp: (e) => {
			r.onPointerUp == null || r.onPointerUp.call(r, e), S.current = null, w.current = !1, s(e);
		},
		onPointerOut: (e) => {
			r.onPointerOut == null || r.onPointerOut.call(r, e), re(C.current);
		},
		onContextMenu: (e) => {
			r.onContextMenu == null || r.onContextMenu.call(r, e), C.current && re(C.current);
		}
	});
});
Jt.displayName = "Drawer.Content";
var Yt = 250, Xt = 120, Zt = /*#__PURE__*/ N.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
	let { closeDrawer: i, isDragging: a, snapPoints: o, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: l, handleOnly: u, isOpen: d, onPress: f, onDrag: p } = J(), m = N.useRef(null), h = N.useRef(!1);
	function g() {
		if (h.current) {
			y();
			return;
		}
		window.setTimeout(() => {
			_();
		}, Xt);
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
		}, Yt);
	}
	function y() {
		m.current && window.clearTimeout(m.current), h.current = !1;
	}
	return /*#__PURE__*/ N.createElement("div", {
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
	}, /*#__PURE__*/ N.createElement("span", {
		"data-vaul-handle-hitarea": "",
		"aria-hidden": "true"
	}, t));
});
Zt.displayName = "Drawer.Handle";
function Qt({ onDrag: e, onOpenChange: t, open: n, ...r }) {
	let { onNestedDrag: i, onNestedOpenChange: a, onNestedRelease: o } = J();
	if (!i) throw Error("Drawer.NestedRoot must be placed in another drawer");
	return /*#__PURE__*/ N.createElement(Kt, {
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
function $t(e) {
	let t = J(), { container: n = t.container, ...r } = e;
	return /*#__PURE__*/ N.createElement(Ye, {
		container: n,
		...r
	});
}
var $ = {
	Root: Kt,
	NestedRoot: Qt,
	Content: Jt,
	Overlay: qt,
	Trigger: Je,
	Portal: $t,
	Handle: Zt,
	Close: et,
	Title: Qe,
	Description: $e
}, en = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ B($.Root, {
	shouldScaleBackground: e,
	...t
});
en.displayName = "Drawer";
var tn = $.Trigger, nn = $.Portal;
$.Close;
var rn = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ B($.Overlay, {
	ref: n,
	className: l("bg-black/80 fixed inset-0 z-50", e),
	...t
}));
rn.displayName = $.Overlay.displayName;
var an = M.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ V(nn, { children: [/* @__PURE__ */ B(rn, {}), /* @__PURE__ */ V($.Content, {
	ref: r,
	className: l("bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-xl focus:outline-none", e),
	...n,
	children: [/* @__PURE__ */ B("div", { className: "mx-auto mt-2 h-1 w-8 rounded-full bg-f1-border" }), t]
})] }));
an.displayName = "DrawerContent";
var on = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ B($.Title, {
	ref: n,
	className: l("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
on.displayName = $.Title.displayName;
var sn = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ B($.Description, {
	ref: n,
	className: l("text-muted-foreground text-sm", e),
	...t
}));
sn.displayName = $.Description.displayName;
//#endregion
//#region src/experimental/Navigation/Dropdown/index.tsx
var cn = [], ln = o("Dropdown", (e) => {
	let { open: t, onOpenChange: r, dataTestId: i, ...a } = e, o = cn.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, a);
	return /* @__PURE__ */ B(n, {
		dataTestId: i,
		children: /* @__PURE__ */ B(ge, {
			...o,
			open: t,
			onOpenChange: r,
			align: e.align || "end"
		})
	});
}), un = o("MobileDropdown", ({ items: e, children: t, dataTestId: i }) => {
	let [a, o] = R(!1);
	return /* @__PURE__ */ B(n, {
		dataTestId: i,
		children: /* @__PURE__ */ V(en, {
			open: a,
			onOpenChange: o,
			children: [
				/* @__PURE__ */ B(tn, {
					asChild: !0,
					children: t || /* @__PURE__ */ B(u, {
						label: "Other actions",
						icon: H,
						variant: "outline",
						size: "lg",
						pressed: a,
						noTitle: !0
					})
				}),
				/* @__PURE__ */ B(rn, { className: "bg-f1-background-overlay" }),
				/* @__PURE__ */ B(an, {
					className: "bg-f1-background",
					children: /* @__PURE__ */ B("div", {
						className: "flex flex-col px-2 pb-3 pt-2",
						children: e.map((e, t) => e.type === "separator" ? /* @__PURE__ */ B("div", { className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary" }, `separator-${t}`) : e.type === "label" ? /* @__PURE__ */ B("span", {
							className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
							children: e.text
						}, `label-${t}`) : e.href ? /* @__PURE__ */ B(d, {
							href: e.href,
							className: l("flex w-full items-start gap-1.5", e.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
							children: /* @__PURE__ */ B(pe, { item: e })
						}, `link-${t}`) : /* @__PURE__ */ V("button", {
							onClick: (t) => {
								t.preventDefault(), t.stopPropagation(), e.onClick?.(), o(!1);
							},
							className: "flex w-full cursor-pointer items-center gap-2 p-3",
							children: [e.icon && /* @__PURE__ */ B("span", {
								className: l("h-5 w-5 text-f1-icon", e.critical && "text-f1-icon-critical"),
								children: /* @__PURE__ */ B(r, {
									icon: e.icon,
									size: "md"
								})
							}), /* @__PURE__ */ B("span", {
								className: l("font-medium", e.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
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
function dn(e, t) {
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
var fn = e({
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
}), pn = ({ count: e, size: t = "md", type: n, list: i, avatarType: a = "person" }) => {
	let [o, s] = R(!1), u = L(!1), d = L(null), h = L(void 0);
	F(() => () => clearTimeout(h.current), []);
	let g = () => clearTimeout(h.current), v = () => {
		g(), u.current = !0, s(!0);
	}, y = () => {
		g(), h.current = setTimeout(() => s(!1), 150);
	}, b = t === "xs" ? /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(r, {
		icon: H,
		size: "xs"
	}), /* @__PURE__ */ V("span", {
		className: "sr-only",
		children: ["+", e]
	})] }) : `+${e}`;
	if (!i?.length) return /* @__PURE__ */ B("div", {
		className: l("cursor-default font-medium transition", fn({
			size: t,
			type: n
		})),
		children: b
	});
	let x = i.map((e, t) => {
		let n = e.tooltipDescription;
		return /* @__PURE__ */ V("div", {
			className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
			children: [/* @__PURE__ */ B("div", {
				className: "h-6 w-6 shrink-0",
				children: /* @__PURE__ */ B(m, {
					avatar: {
						type: a,
						...e
					},
					size: "sm"
				})
			}), /* @__PURE__ */ V("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ B("div", {
					className: "truncate font-semibold",
					children: dn(a, e)
				}), n && /* @__PURE__ */ B("div", {
					className: "truncate text-sm text-current opacity-70",
					children: n
				})]
			})]
		}, t);
	});
	return /* @__PURE__ */ V(w, {
		open: o,
		onOpenChange: s,
		children: [/* @__PURE__ */ B(_, {
			asChild: !0,
			children: /* @__PURE__ */ B("button", {
				type: "button",
				onPointerEnter: v,
				onPointerLeave: y,
				onClick: (e) => {
					u.current = !1, o && (e.preventDefault(), d.current?.focus());
				},
				className: l("cursor-pointer font-medium transition hover:bg-f1-background-secondary-hover", fn({
					size: t,
					type: n
				}), c()),
				children: b
			})
		}), /* @__PURE__ */ B(ee, {
			ref: d,
			side: "top",
			className: "w-[200px] overflow-hidden rounded border-0 bg-f1-background-inverse p-0 font-medium text-f1-foreground-inverse shadow-none",
			onPointerEnter: g,
			onPointerLeave: y,
			onOpenAutoFocus: (e) => {
				u.current && e.preventDefault();
			},
			onCloseAutoFocus: (e) => {
				u.current && e.preventDefault();
			},
			children: /* @__PURE__ */ V(p, {
				className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
				children: [x, /* @__PURE__ */ B(f, {
					orientation: "vertical",
					className: "[&_div]:bg-f1-background"
				})]
			})
		})]
	});
}, mn = [
	"xs",
	"sm",
	"md"
], hn = {
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
}, gn = ({ avatars: e, size: t = "md", type: n, noTooltip: r = !1, remainingCount: i, max: a, tooltipScroll: o, layout: c }) => {
	if (t && !mn.includes(t)) {
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
	}[t] ?? 0, u = I(() => ({
		xs: 20,
		sm: 24,
		md: 32
	})[t], [t]);
	return /* @__PURE__ */ B(h, {
		max: a,
		min: a,
		items: e.map((e) => ({
			type: n,
			...e
		})),
		gap: l,
		itemsWidth: u,
		className: "flex items-center",
		renderListItem: (a, o) => {
			let c = dn(n, a), l = a.tooltipDescription, u = !!a.badge, d = o === e.length - 1, f = /* @__PURE__ */ B("div", {
				className: "flex h-fit w-fit shrink-0 items-center justify-center",
				style: (!d || d && i !== void 0) && !u ? { clipPath: hn[n === "person" ? "rounded" : "base"][t] } : void 0,
				children: /* @__PURE__ */ B(m, {
					avatar: {
						...a,
						type: n
					},
					size: t
				})
			});
			return /* @__PURE__ */ B("div", { children: r ? f : /* @__PURE__ */ B(s, {
				label: c,
				description: l,
				children: f
			}) }, o);
		},
		renderDropdownItem: () => null,
		forceShowingOverflowIndicator: i !== void 0,
		renderOverflowIndicator: (r) => /* @__PURE__ */ B("div", {
			className: "flex h-fit w-fit items-center",
			style: { marginLeft: l },
			children: /* @__PURE__ */ B(pn, {
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
gn.displayName = "AvatarList";
//#endregion
//#region src/components/avatars/F0AvatarList/index.tsx
var _n = t(gn), vn = (e, t) => {
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
	return yn(n[e % n.length], t);
}, yn = (e, t) => {
	let n = t === void 0 ? "" : ` / ${t}`;
	return `hsl(var(--${`chart-${e}`})${n})`;
}, bn = "Progress", xn = 100, [Sn, Cn] = D(bn), [wn, Tn] = Sn(bn), En = M.forwardRef((e, t) => {
	let { __scopeProgress: n, value: r = null, max: i, getValueLabel: a = kn, ...o } = e;
	(i || i === 0) && !Mn(i) && console.error(Pn(`${i}`, "Progress"));
	let s = Mn(i) ? i : xn;
	r !== null && !Nn(r, s) && console.error(Fn(`${r}`, "Progress"));
	let c = Nn(r, s) ? r : null, l = jn(c) ? a(c, s) : void 0;
	return /* @__PURE__ */ B(wn, {
		scope: n,
		value: c,
		max: s,
		children: /* @__PURE__ */ B(k.div, {
			"aria-valuemax": s,
			"aria-valuemin": 0,
			"aria-valuenow": jn(c) ? c : void 0,
			"aria-valuetext": l,
			role: "progressbar",
			"data-state": An(c, s),
			"data-value": c ?? void 0,
			"data-max": s,
			...o,
			ref: t
		})
	});
});
En.displayName = bn;
var Dn = "ProgressIndicator", On = M.forwardRef((e, t) => {
	let { __scopeProgress: n, ...r } = e, i = Tn(Dn, n);
	return /* @__PURE__ */ B(k.div, {
		"data-state": An(i.value, i.max),
		"data-value": i.value ?? void 0,
		"data-max": i.max,
		...r,
		ref: t
	});
});
On.displayName = Dn;
function kn(e, t) {
	return `${Math.round(e / t * 100)}%`;
}
function An(e, t) {
	return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function jn(e) {
	return typeof e == "number";
}
function Mn(e) {
	return jn(e) && !isNaN(e) && e > 0;
}
function Nn(e, t) {
	return jn(e) && !isNaN(e) && e <= t && e >= 0;
}
function Pn(e, t) {
	return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${xn}\`.`;
}
function Fn(e, t) {
	return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${xn} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var In = En, Ln = On, Rn = M.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ B(In, {
	ref: r,
	value: t,
	className: l("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
	...n,
	children: /* @__PURE__ */ B(Ln, {
		className: "h-full w-full flex-1 transition-all",
		style: {
			backgroundColor: n.color,
			transform: `translateX(-${100 - (t || 0)}%)`
		}
	})
}));
Rn.displayName = In.displayName;
//#endregion
export { ge as _, ln as a, H as b, an as c, Ze as d, $e as f, Qe as g, qe as h, _n as i, sn as l, Ye as m, vn as n, un as o, Xe as p, yn as r, en as s, Rn as t, rn as u, W as v, le as x, de as y };
