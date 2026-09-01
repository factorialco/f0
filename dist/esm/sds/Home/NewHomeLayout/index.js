import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import { useReducedMotion as n } from "../../../lib/a11y.js";
import r from "../../../icons/app/Menu.js";
import i from "../../../icons/app/Plus.js";
import { useI18n as a } from "../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as o } from "../../../experimental/Overlays/Tooltip/index.js";
import { Action as ee } from "../../../ui/Action/Action.js";
import { F0Button as te } from "../../../components/F0Button/F0Button.js";
import { F0AvatarIcon as ne } from "../../../components/avatars/F0AvatarIcon/index.js";
import { useSidebar as s } from "../../../patterns/ApplicationFrame/FrameProvider.js";
import { F0OneSwitch as c } from "../../../kits/ai/F0OneSwitch/F0OneSwitch.js";
import { SidebarIconSvg as re } from "../../../patterns/Navigation/Sidebar/Icon/index.js";
import { GENIE_GLYPH_TAP_SCALE as l, GENIE_ORIGIN as u, GENIE_RETRACTED_SCALE as d, HomeEntrance as f, entranceDelay as p, entranceTransition as m, genieCloseTransition as h, glyphTransition as g, withReducedMotion as ie } from "../home-motion.js";
import { widgetTitle as _ } from "../slotRenderers.js";
import { SlotWidget as v } from "../SlotWidget/index.js";
import { useScrollFade as y } from "../useScrollFade.js";
import { WidgetContainer as ae } from "../WidgetContainer/index.js";
import { useRailMotion as oe } from "./useRailMotion.js";
import { Children as se, Fragment as ce, forwardRef as b, isValidElement as le, useEffect as ue, useLayoutEffect as de, useRef as x, useState as S } from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
import { AnimatePresence as fe, motion as T } from "motion/react";
//#region src/sds/Home/NewHomeLayout/index.tsx
var pe = {
	morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
	afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
	evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
}, me = ({ period: t, className: n }) => /* @__PURE__ */ C("div", {
	"aria-hidden": !0,
	className: e("pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]", pe[t], n)
}), he = 40, ge = 672, _e = 1e3, E = (e) => {
	let t = n(), [r, i] = S(!0);
	return ue(() => {
		if (!e || t) {
			i(!0);
			return;
		}
		let n = setInterval(() => i((e) => !e), _e);
		return () => clearInterval(n);
	}, [e, t]), r;
}, ve = .24, D = ({ text: e, ticking: t }) => {
	let n = E(t);
	return /* @__PURE__ */ C("span", {
		className: "whitespace-nowrap px-2 text-2xl font-semibold tabular-nums",
		children: e.split(":").map((e, t) => /* @__PURE__ */ w(ce, { children: [t > 0 ? /* @__PURE__ */ C("span", {
			className: "transition-opacity duration-200",
			style: { opacity: n ? 1 : ve },
			children: ":"
		}) : null, e] }, t))
	});
}, O = {
	neutral: {
		pill: "bg-f1-background-inverse text-f1-foreground-inverse",
		button: "bg-f1-background-accent-bold hover:bg-f1-background-accent-bold-hover",
		icon: "inverse",
		ring: "ring-f1-border-inverse",
		solo: "bg-f1-background-accent-bold hover:bg-f1-background-accent-bold-hover",
		soloIcon: "inverse",
		soloRing: "ring-f1-border-inverse"
	},
	accent: {
		pill: "bg-f1-background-accent-bold text-f1-foreground-inverse",
		button: "bg-f1-background hover:bg-f1-background",
		icon: "accent",
		ring: "ring-f1-border-secondary",
		solo: "bg-f1-background-accent-bold hover:bg-f1-background-accent-bold-hover",
		soloIcon: "inverse",
		soloRing: "ring-f1-border-inverse"
	},
	critical: {
		pill: "bg-f1-background-critical-bold text-f1-foreground-inverse",
		button: "bg-f1-background hover:bg-f1-background",
		icon: "critical",
		ring: "ring-f1-border-secondary",
		solo: "bg-f1-background-critical-bold",
		soloIcon: "inverse",
		soloRing: "ring-f1-border-inverse"
	},
	warning: {
		pill: "bg-f1-background-warning-bold text-f1-foreground-inverse",
		button: "bg-f1-background hover:bg-f1-background",
		icon: "warning",
		ring: "ring-f1-border-secondary",
		solo: "bg-f1-background-warning-bold",
		soloIcon: "inverse",
		soloRing: "ring-f1-border-inverse"
	},
	promote: {
		pill: "bg-f1-background-promote-bold text-f1-foreground-inverse",
		button: "bg-f1-background hover:bg-f1-background",
		icon: "promote",
		ring: "ring-f1-border-secondary",
		solo: "bg-f1-background-promote-bold",
		soloIcon: "inverse",
		soloRing: "ring-f1-border-inverse"
	},
	positive: {
		pill: "bg-f1-background-positive-bold text-f1-foreground-inverse",
		button: "bg-f1-background hover:bg-f1-background",
		icon: "positive",
		ring: "ring-f1-border-secondary",
		solo: "bg-f1-background-positive-bold",
		soloIcon: "inverse",
		soloRing: "ring-f1-border-inverse"
	}
}, ye = ({ widget: r, order: i, open: a, delayMs: te, onOpen: s, onCancelOpen: c, onClose: re }) => {
	let u = n(), d = r.railAction, f = E(!!d?.flashing && !a), m = d?.text && !a ? d.text : void 0, h = O[d?.tone ?? "neutral"], v = {
		initial: {
			opacity: 0,
			x: u ? 0 : -8
		},
		animate: {
			opacity: 1,
			x: 0
		},
		exit: {
			opacity: 0,
			x: u ? 0 : -8
		},
		whileTap: u ? void 0 : { scale: l },
		transition: ie({
			...g,
			delay: p(i, te)
		}, u)
	}, y = r.hasUpdates ? /* @__PURE__ */ C("span", { className: "pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" }) : null;
	return d ? /* @__PURE__ */ C(o, {
		label: d.label,
		instant: !0,
		children: /* @__PURE__ */ w(T.div, {
			className: e("group pointer-events-auto relative shrink-0", m ? e("-mr-1 -my-1 flex flex-row items-center gap-1 rounded-lg p-1", h.pill) : "rounded-lg"),
			onMouseEnter: (e) => s(r.id, e.currentTarget),
			onMouseLeave: c,
			onFocus: (e) => s(r.id, e.currentTarget, !0),
			...v,
			children: [
				m ? /* @__PURE__ */ C(D, {
					text: m,
					ticking: !!d.ticking
				}) : null,
				/* @__PURE__ */ C(ee, {
					type: "button",
					variant: "ghost",
					size: "lg",
					className: e("size-10 shadow-none after:hidden hover:shadow-none active:shadow-none [&_.main]:px-0", d.text ? h.button : h.solo, "ring-inset group-hover:ring-1", a && "ring-1", d.text ? h.ring : h.soloRing),
					"aria-label": `${d.label}, ${_(r)}`,
					onClick: () => d.onClick(),
					children: /* @__PURE__ */ C(t, {
						size: "lg",
						color: d.text ? h.icon : h.soloIcon,
						icon: f || !r.icon ? d.icon : r.icon
					})
				}),
				y
			]
		})
	}) : /* @__PURE__ */ C(T.button, {
		type: "button",
		"aria-label": _(r),
		"aria-expanded": a,
		onMouseEnter: (e) => s(r.id, e.currentTarget),
		onMouseLeave: c,
		onClick: (e) => a ? re() : s(r.id, e.currentTarget, !0),
		className: "pointer-events-auto rounded-lg",
		...v,
		children: /* @__PURE__ */ w("span", {
			className: "relative inline-flex",
			children: [r.icon ? /* @__PURE__ */ C(ne, {
				icon: r.icon,
				size: "lg"
			}) : /* @__PURE__ */ C("span", {
				className: "flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background font-medium text-f1-foreground-secondary",
				children: _(r).charAt(0)
			}), y]
		})
	});
}, k = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden", be = 16, xe = 768, Se = 150, Ce = 150, A = b(function({ children: ne, leftWidgets: l = [], rightWidgets: p = [], aside: g, slotRenderers: _, renderWidget: b, editableWidgetContainers: pe = ["main", "right"], addableWidgetContainers: _e, virtualizedWidgetContainers: E = [], virtualization: ve, onRemoveWidget: D, onChangeWidgetParams: O, rebuildWidget: A, renderWidgetPreview: we, onClickAddNewWidget: j, onReorderWidgets: M, period: Te = "morning", asideWidth: N = 396, mainWidth: P = ge, bleed: F = 24, stackedPinsAfter: Ee = 2, ctx: I = {}, className: De, oneSwitchTooltip: Oe, oneSwitchAutoOpen: ke, hideOneSwitch: Ae = !1 }, L) {
	let je = a(), { sidebarState: Me, toggleSidebar: Ne, isSmallScreen: Pe } = s(), Fe = n(), R = x(null), [z, Ie] = S(0), [B, V] = S(null), [H, Le] = S(0), [Re, ze] = S(!1), U = x(null), W = x(null);
	de(() => {
		let e = R.current;
		if (!e) return;
		let t = () => Ie(e.clientWidth);
		if (t(), typeof ResizeObserver != "function") return;
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []);
	let [Be, Ve] = S(!1);
	z > 0 && !Be && Ve(!0);
	let [He, Ue] = S(null), We = (e) => pe.includes(e), G = (e) => We(e) && (_e?.includes(e) ?? !0), Ge = (e) => b ? b(e, I) : /* @__PURE__ */ C(v, {
		header: e.header,
		params: e.params,
		fullHeight: e.fullHeight,
		slots: e.slots,
		loading: e.loading,
		slotRenderers: _,
		ctx: I
	}), Ke = y(), qe = y(), Je = y(), Ye = (e) => E.includes(e) ? {
		...ve,
		scrollElement: e === "main" ? Ke.element : qe.element
	} : !1, Xe = g != null || p.length > 0 || j != null && G("right"), Ze = z > 0 && z < P + be + N, K = Xe && p.length > 0 && (Ze || (He ?? !1)), Qe = K ? he : N, $e = K ? "Expand widgets panel" : "Collapse widgets panel", q = Xe && Be, J = z > 0 && z < xe, et = {
		pinned: J ? p.filter((e) => e.locked) : [],
		rest: J ? p.filter((e) => !e.locked) : []
	}, tt = se.toArray(ne), nt = (J ? [
		...tt.slice(0, Ee),
		...et.pinned.map((e) => /* @__PURE__ */ C(ce, { children: Ge(e) }, e.id)),
		...tt.slice(Ee)
	] : tt).map((e, t) => /* @__PURE__ */ C(f, {
		order: t,
		children: e
	}, le(e) && e.key != null ? e.key : t)), rt = K ? p.find((e) => e.id === B) : void 0;
	ue(() => {
		K || (W.current && clearTimeout(W.current), W.current = null, V(null));
	}, [K]), ue(() => () => {
		W.current && clearTimeout(W.current), U.current && clearTimeout(U.current);
	}, []);
	let Y = oe({
		collapsed: K,
		open: rt != null,
		glide: Re,
		drawn: q,
		width: Qe
	}), X = Y.mode === "panel", it = x(null);
	B && (it.current = B);
	let at = x(null);
	at.current = B;
	let ot = B ?? (Y.panelHidden ? null : it.current), st = X ? {
		transformOrigin: u,
		top: 0,
		right: 48,
		width: N,
		maxHeight: `calc(100% - ${H}px)`,
		pointerEvents: rt ? void 0 : "none"
	} : {
		transformOrigin: u,
		gridColumn: 2,
		gridRow: 2,
		width: N,
		justifySelf: "end",
		marginTop: -F,
		marginBottom: -F,
		paddingTop: F,
		paddingBottom: F,
		...Y.mode === "retracting" ? { pointerEvents: "none" } : null,
		...qe.style
	}, Z = () => {
		U.current && clearTimeout(U.current), U.current = null;
	}, Q = () => {
		W.current && clearTimeout(W.current), W.current = null;
	}, $ = () => {
		Z(), Q(), U.current = setTimeout(() => V(null), Se);
	}, ct = (e, t) => {
		Q();
		let n = R.current;
		if (n) {
			let e = t.getBoundingClientRect().top - n.getBoundingClientRect().top;
			Le(Math.max(0, e));
		}
		ze(at.current != null), V(e);
	}, lt = (e, t, n = !1) => {
		if (Z(), Q(), at.current !== e) {
			if (n) {
				ct(e, t);
				return;
			}
			W.current = setTimeout(() => ct(e, t), Ce);
		}
	};
	return /* @__PURE__ */ w(T.div, {
		ref: (e) => {
			R.current = e, typeof L == "function" ? L(e) : L && (L.current = e);
		},
		className: e("relative isolate grid grid-rows-[auto_minmax(0,1fr)] items-stretch gap-4 text-f1-foreground", De),
		style: {
			"--home-aside-w": Y.widthPx,
			height: "100%",
			maxHeight: `calc(100svh - ${2 * F}px)`,
			gridTemplateColumns: q && !J && (K || z >= xe) ? `minmax(0, 1fr) var(--home-aside-w, ${Qe}px)` : "minmax(0, 1fr)"
		},
		children: [
			/* @__PURE__ */ C("div", {
				"aria-hidden": !0,
				"data-page-surface": !0,
				className: "pointer-events-none absolute -z-10 overflow-hidden bg-f1-special-page",
				style: {
					top: -F,
					bottom: -F,
					left: -F,
					right: -F
				},
				children: /* @__PURE__ */ C(me, { period: Te })
			}),
			/* @__PURE__ */ w(f, {
				order: 0,
				className: "col-span-full flex flex-row items-center justify-between",
				children: [Pe || Me === "hidden" ? /* @__PURE__ */ C(te, {
					variant: "ghost",
					onClick: () => Ne(),
					label: "Open main menu",
					icon: r,
					hideLabel: !0
				}) : /* @__PURE__ */ C("span", {}), /* @__PURE__ */ w("div", {
					className: "flex flex-row items-center gap-2",
					children: [Xe && p.length > 0 && !Ze ? /* @__PURE__ */ C(o, {
						label: $e,
						children: /* @__PURE__ */ C(ee, {
							variant: "ghost",
							size: "md",
							compact: !0,
							onClick: () => Ue(!K),
							"aria-label": $e,
							children: /* @__PURE__ */ C(re, { isExpanded: !K })
						})
					}) : null, !Ae && /* @__PURE__ */ C(c, {
						tooltip: Oe,
						autoOpen: ke
					})]
				})]
			}),
			/* @__PURE__ */ C("div", {
				ref: Ke.ref,
				className: e("relative isolate min-h-0 overflow-y-auto", k),
				style: {
					gridColumn: 1,
					gridRow: 2,
					marginTop: -F,
					marginBottom: -F,
					paddingTop: F,
					paddingBottom: F,
					...Ke.style
				},
				children: /* @__PURE__ */ C(ae, {
					side: "main",
					className: "relative mx-auto w-full",
					style: { maxWidth: `${P}px` },
					widgets: J ? [...l, ...et.rest] : l,
					slotRenderers: _,
					renderWidget: b,
					ctx: I,
					virtualized: Ye("main"),
					disableEdition: !We("main"),
					dragSurfaceSelector: "[data-page-surface]",
					onReorder: M ? (e) => M("main", e) : void 0,
					onRemoveWidget: D,
					onChangeWidgetParams: O,
					rebuildWidget: A,
					renderWidgetPreview: we,
					paramsPreviewWidth: P,
					onClickAddNewWidget: j && G("main") ? () => j("main") : void 0,
					entrance: { order: nt.length },
					children: nt
				})
			}),
			/* @__PURE__ */ C(fe, { children: J || !q || !K ? null : /* @__PURE__ */ w(T.aside, {
				ref: Je.ref,
				className: e("-m-1 -ml-3 flex min-h-0 flex-col items-end gap-2 overflow-y-auto p-1 pl-3", "pointer-events-none z-20", k),
				style: {
					gridColumn: 2,
					gridRow: 2,
					width: "fit-content",
					justifySelf: "end",
					...Je.style
				},
				initial: { opacity: 1 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: ie(h, Fe),
				onMouseLeave: $,
				onMouseEnter: Z,
				children: [p.map((e, t) => /* @__PURE__ */ C(ye, {
					widget: e,
					order: t,
					open: B === e.id,
					delayMs: Y.glyphDelayMs,
					onOpen: lt,
					onCancelOpen: Q,
					onClose: () => V(null)
				}, e.id)), G("right") && j ? /* @__PURE__ */ C(o, {
					label: je.widgets.addWidget,
					children: /* @__PURE__ */ C(T.button, {
						type: "button",
						"aria-label": je.widgets.addWidget,
						onClick: () => j("right"),
						className: "pointer-events-auto flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-f1-border text-f1-foreground-secondary hover:border-f1-border-hover hover:text-f1-foreground",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: m(p.length, Y.glyphDelayMs, Fe),
						children: /* @__PURE__ */ C(t, {
							size: "md",
							icon: i
						})
					})
				}) : null]
			}, "collapsed-strip") }),
			" ",
			J || !q ? null : /* @__PURE__ */ C(T.aside, {
				ref: qe.ref,
				hidden: X && Y.panelHidden,
				className: e("min-h-0 overflow-y-auto", k, X && "absolute z-10 rounded-xl bg-f1-background dark:bg-f1-background-secondary dark:backdrop-blur-[100px] dark:backdrop-saturate-150", Y.mode === "retracting" && "relative z-10"),
				style: st,
				initial: !1,
				animate: {
					opacity: +!!Y.bodyOut,
					scale: Y.bodyOut ? 1 : d,
					x: Y.bodyOut ? 0 : 10,
					y: X ? H : 0
				},
				transition: Y.transition,
				onMouseEnter: K ? Z : void 0,
				onMouseLeave: K ? $ : void 0,
				children: /* @__PURE__ */ C(ae, {
					side: "right",
					widgets: p,
					visibleWidgetId: X ? ot : void 0,
					stow: { stowed: K },
					slotRenderers: _,
					renderWidget: b,
					ctx: I,
					virtualized: Ye("right"),
					disableEdition: !We("right"),
					disableDrag: K,
					dragSurfaceSelector: "[data-page-surface]",
					onReorder: M ? (e) => M("right", e) : void 0,
					onRemoveWidget: D,
					onChangeWidgetParams: O,
					rebuildWidget: A,
					renderWidgetPreview: we,
					paramsPreviewWidth: N,
					onClickAddNewWidget: j && G("right") && !K ? () => j("right") : void 0,
					entrance: { delayMs: 220 },
					children: K ? null : g
				})
			}),
			X && rt ? /* @__PURE__ */ C("div", {
				"aria-hidden": !0,
				className: "absolute z-10",
				style: {
					top: H,
					bottom: 0,
					right: 0,
					width: 48
				},
				onMouseEnter: Z,
				onMouseLeave: $
			}) : null
		]
	});
});
//#endregion
export { A as NewHomeLayout };
