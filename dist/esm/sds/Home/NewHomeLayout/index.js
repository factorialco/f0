import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/Menu.js";
import r from "../../../icons/app/Plus.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as a } from "../../../experimental/Overlays/Tooltip/index.js";
import { Action as ee } from "../../../ui/Action/Action.js";
import { F0Button as te } from "../../../components/F0Button/F0Button.js";
import { F0AvatarIcon as ne } from "../../../components/avatars/F0AvatarIcon/index.js";
import { useReducedMotion as re } from "../../../lib/a11y.js";
import { F0OneSwitch as o } from "../../../kits/ai/F0OneSwitch/F0OneSwitch.js";
import { useSidebar as s } from "../../../patterns/ApplicationFrame/FrameProvider.js";
import { SidebarIconSvg as ie } from "../../../patterns/Navigation/Sidebar/Icon/index.js";
import { GENIE_GLYPH_ENTER_SCALE as ae, GENIE_GLYPH_EXIT_SCALE as c, GENIE_GLYPH_TAP_SCALE as oe, GENIE_ORIGIN as l, GENIE_RETRACTED_SCALE as u, HomeEntrance as d, entranceDelay as f, entranceTransition as p, genieCloseTransition as m, glyphTransition as h, withReducedMotion as se } from "../home-motion.js";
import { widgetTitle as g } from "../slotRenderers.js";
import { SlotWidget as _ } from "../SlotWidget/index.js";
import { useScrollFade as v } from "../useScrollFade.js";
import { WidgetContainer as ce } from "../WidgetContainer/index.js";
import { useRailMotion as le } from "./useRailMotion.js";
import { Children as ue, Fragment as de, forwardRef as fe, isValidElement as pe, useEffect as y, useLayoutEffect as me, useRef as b, useState as x } from "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
import { AnimatePresence as he, motion as w } from "motion/react";
//#region src/sds/Home/NewHomeLayout/index.tsx
var ge = {
	morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
	afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
	evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
}, _e = ({ period: t, className: n }) => /* @__PURE__ */ S("div", {
	"aria-hidden": !0,
	className: e("pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]", ge[t], n)
}), ve = 40, ye = 712, be = 1e3, T = (e) => {
	let t = re(), [n, r] = x(!0);
	return y(() => {
		if (!e || t) {
			r(!0);
			return;
		}
		let n = setInterval(() => r((e) => !e), be);
		return () => clearInterval(n);
	}, [e, t]), n;
}, E = .24, D = ({ text: e, ticking: t }) => {
	let n = T(t);
	return /* @__PURE__ */ S("span", {
		className: "whitespace-nowrap px-2 text-2xl font-semibold tabular-nums",
		children: e.split(":").map((e, t) => /* @__PURE__ */ C(de, { children: [t > 0 ? /* @__PURE__ */ S("span", {
			className: "transition-opacity duration-200",
			style: { opacity: n ? 1 : E },
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
}, xe = ({ widget: n, order: r, open: i, delayMs: te, onOpen: o, onCancelOpen: s, onClose: ie }) => {
	let l = re(), u = n.railAction, d = T(!!u?.flashing && !i), p = u?.text && !i ? u.text : void 0, m = O[u?.tone ?? "neutral"], _ = {
		initial: {
			opacity: 0,
			scale: l ? 1 : ae
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: l ? 1 : c
		},
		whileTap: l ? void 0 : { scale: oe },
		transition: se({
			...h,
			delay: f(r, te)
		}, l)
	}, v = n.hasUpdates ? /* @__PURE__ */ S("span", { className: "pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" }) : null;
	return u ? /* @__PURE__ */ S(a, {
		label: u.label,
		instant: !0,
		children: /* @__PURE__ */ C(w.div, {
			className: e("group pointer-events-auto relative shrink-0", p ? e("-mr-1 flex flex-row items-center gap-1 rounded-lg p-1", m.pill) : "rounded-lg"),
			onMouseEnter: (e) => o(n.id, e.currentTarget),
			onMouseLeave: s,
			onFocus: (e) => o(n.id, e.currentTarget, !0),
			..._,
			children: [
				p ? /* @__PURE__ */ S(D, {
					text: p,
					ticking: !!u.ticking
				}) : null,
				/* @__PURE__ */ S(ee, {
					type: "button",
					variant: "ghost",
					size: "lg",
					className: e("size-10 shadow-none after:hidden hover:shadow-none active:shadow-none [&_.main]:px-0", u.text ? m.button : m.solo, "ring-inset group-hover:ring-1", i && "ring-1", u.text ? m.ring : m.soloRing),
					"aria-label": `${u.label}, ${g(n)}`,
					onClick: () => u.onClick(),
					children: /* @__PURE__ */ S(t, {
						size: "lg",
						color: u.text ? m.icon : m.soloIcon,
						icon: d || !n.icon ? u.icon : n.icon
					})
				}),
				v
			]
		})
	}) : /* @__PURE__ */ S(w.button, {
		type: "button",
		"aria-label": g(n),
		"aria-expanded": i,
		onMouseEnter: (e) => o(n.id, e.currentTarget),
		onMouseLeave: s,
		onClick: (e) => i ? ie() : o(n.id, e.currentTarget, !0),
		className: "pointer-events-auto rounded-lg",
		..._,
		children: /* @__PURE__ */ C("span", {
			className: "relative inline-flex",
			children: [n.icon ? /* @__PURE__ */ S(ne, {
				icon: n.icon,
				size: "lg"
			}) : /* @__PURE__ */ S("span", {
				className: "flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background font-medium text-f1-foreground-secondary",
				children: g(n).charAt(0)
			}), v]
		})
	});
}, k = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden", Se = 16, Ce = 768, we = 150, Te = 150, A = fe(function({ children: ne, leftWidgets: ae = [], rightWidgets: c = [], aside: oe, slotRenderers: f, renderWidget: h, editableWidgetContainers: g = ["main", "right"], addableWidgetContainers: fe, virtualizedWidgetContainers: ge = [], virtualization: be, onRemoveWidget: T, onChangeWidgetParams: E, rebuildWidget: D, renderWidgetPreview: O, onClickAddNewWidget: A, onReorderWidgets: j, period: Ee = "morning", asideWidth: M = 396, mainWidth: N = ye, bleed: P = 24, stackedPinsAfter: De = 2, ctx: F = {}, className: Oe, oneSwitchTooltip: ke, oneSwitchAutoOpen: Ae, hideOneSwitch: je = !1 }, I) {
	let Me = i(), { sidebarState: Ne, toggleSidebar: Pe, isSmallScreen: Fe } = s(), Ie = re(), L = b(null), [R, Le] = x(0), [z, B] = x(null), [Re, ze] = x(0), [Be, Ve] = x(!1), V = b(null), H = b(null);
	me(() => {
		let e = L.current;
		if (!e) return;
		let t = () => Le(e.clientWidth);
		if (t(), typeof ResizeObserver != "function") return;
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []);
	let [He, Ue] = x(!1);
	R > 0 && !He && Ue(!0);
	let [We, Ge] = x(null), U = (e) => g.includes(e), W = (e) => U(e) && (fe?.includes(e) ?? !0), Ke = (e) => h ? h(e, F) : /* @__PURE__ */ S(_, {
		header: e.header,
		params: e.params,
		fullHeight: e.fullHeight,
		slots: e.slots,
		loading: e.loading,
		slotRenderers: f,
		ctx: F
	}), G = v(), qe = v(), Je = v(), Ye = (e) => ge.includes(e) ? {
		...be,
		scrollElement: e === "main" ? G.element : qe.element
	} : !1, Xe = oe != null || c.length > 0 || A != null && W("right"), Ze = R > 0 && R < N + Se + M, K = Xe && c.length > 0 && (Ze || (We ?? !1)), Qe = K ? ve : M, $e = K ? "Expand widgets panel" : "Collapse widgets panel", q = Xe && He, J = R > 0 && R < Ce, et = {
		pinned: J ? c.filter((e) => e.locked) : [],
		rest: J ? c.filter((e) => !e.locked) : []
	}, Y = ue.toArray(ne), tt = (J ? [
		...Y.slice(0, De),
		...et.pinned.map((e) => /* @__PURE__ */ S(de, { children: Ke(e) }, e.id)),
		...Y.slice(De)
	] : Y).map((e, t) => /* @__PURE__ */ S(d, {
		order: t,
		children: e
	}, pe(e) && e.key != null ? e.key : t)), nt = K ? c.find((e) => e.id === z) : void 0;
	y(() => {
		K || (H.current && clearTimeout(H.current), H.current = null, B(null));
	}, [K]), y(() => () => {
		H.current && clearTimeout(H.current), V.current && clearTimeout(V.current);
	}, []);
	let X = le({
		collapsed: K,
		open: nt != null,
		glide: Be,
		drawn: q,
		width: Qe
	}), Z = X.mode === "panel", rt = b(null);
	z && (rt.current = z);
	let it = b(null);
	it.current = z;
	let at = z ?? (X.panelHidden ? null : rt.current), ot = Z ? {
		transformOrigin: l,
		top: 0,
		right: 48,
		width: M,
		maxHeight: `calc(100% - ${Re}px)`,
		pointerEvents: nt ? void 0 : "none"
	} : {
		transformOrigin: l,
		gridColumn: 2,
		gridRow: 2,
		width: M,
		justifySelf: "end",
		marginTop: -P,
		marginBottom: -P,
		paddingTop: P,
		paddingBottom: P,
		...X.mode === "retracting" ? { pointerEvents: "none" } : null,
		...qe.style
	}, Q = () => {
		V.current && clearTimeout(V.current), V.current = null;
	}, $ = () => {
		H.current && clearTimeout(H.current), H.current = null;
	}, st = () => {
		Q(), $(), V.current = setTimeout(() => B(null), we);
	}, ct = (e, t) => {
		$();
		let n = L.current;
		if (n) {
			let e = t.getBoundingClientRect().top - n.getBoundingClientRect().top;
			ze(Math.max(0, e));
		}
		Ve(it.current != null), B(e);
	}, lt = (e, t, n = !1) => {
		if (Q(), $(), it.current !== e) {
			if (n) {
				ct(e, t);
				return;
			}
			H.current = setTimeout(() => ct(e, t), Te);
		}
	};
	return /* @__PURE__ */ C(w.div, {
		ref: (e) => {
			L.current = e, typeof I == "function" ? I(e) : I && (I.current = e);
		},
		className: e("relative isolate grid grid-rows-[auto_minmax(0,1fr)] items-stretch gap-4 text-f1-foreground", Oe),
		style: {
			"--home-aside-w": X.widthPx,
			height: "100%",
			maxHeight: `calc(100svh - ${2 * P}px)`,
			gridTemplateColumns: q && !J && (K || R >= Ce) ? `minmax(0, 1fr) var(--home-aside-w, ${Qe}px)` : "minmax(0, 1fr)"
		},
		children: [
			/* @__PURE__ */ S("div", {
				"aria-hidden": !0,
				"data-page-surface": !0,
				className: "pointer-events-none absolute -z-10 overflow-hidden bg-f1-special-page",
				style: {
					top: -P,
					bottom: -P,
					left: -P,
					right: -P
				},
				children: /* @__PURE__ */ S(_e, { period: Ee })
			}),
			/* @__PURE__ */ C(d, {
				order: 0,
				className: "col-span-full flex flex-row items-center justify-between",
				children: [Fe || Ne === "hidden" ? /* @__PURE__ */ S(te, {
					variant: "ghost",
					onClick: () => Pe(),
					label: "Open main menu",
					icon: n,
					hideLabel: !0
				}) : /* @__PURE__ */ S("span", {}), /* @__PURE__ */ C("div", {
					className: "flex flex-row items-center gap-2",
					children: [Xe && c.length > 0 && !Ze ? /* @__PURE__ */ S(a, {
						label: $e,
						children: /* @__PURE__ */ S(ee, {
							variant: "ghost",
							size: "md",
							compact: !0,
							onClick: () => Ge(!K),
							"aria-label": $e,
							children: /* @__PURE__ */ S(ie, { isExpanded: !K })
						})
					}) : null, !je && /* @__PURE__ */ S(o, {
						tooltip: ke,
						autoOpen: Ae
					})]
				})]
			}),
			/* @__PURE__ */ S("div", {
				ref: G.ref,
				className: e("relative isolate min-h-0 overflow-y-auto", k),
				style: {
					gridColumn: 1,
					gridRow: 2,
					marginTop: -P,
					marginBottom: -P,
					paddingTop: P,
					paddingBottom: P,
					...G.style
				},
				children: /* @__PURE__ */ S(ce, {
					side: "main",
					className: "relative mx-auto w-full",
					style: { maxWidth: `${N}px` },
					widgets: J ? [...ae, ...et.rest] : ae,
					slotRenderers: f,
					renderWidget: h,
					ctx: F,
					virtualized: Ye("main"),
					disableEdition: !U("main"),
					dragSurfaceSelector: "[data-page-surface]",
					onReorder: j ? (e) => j("main", e) : void 0,
					onRemoveWidget: T,
					onChangeWidgetParams: E,
					rebuildWidget: D,
					renderWidgetPreview: O,
					paramsPreviewWidth: N,
					onClickAddNewWidget: A && W("main") ? () => A("main") : void 0,
					entrance: { order: tt.length },
					children: tt
				})
			}),
			/* @__PURE__ */ S(he, { children: J || !q || !K ? null : /* @__PURE__ */ C(w.aside, {
				ref: Je.ref,
				className: e("-m-1 flex min-h-0 flex-col items-end gap-2 overflow-y-auto p-1", "pointer-events-none z-20", k),
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
				transition: se(m, Ie),
				onMouseLeave: st,
				onMouseEnter: Q,
				children: [c.map((e, t) => /* @__PURE__ */ S(xe, {
					widget: e,
					order: t,
					open: z === e.id,
					delayMs: X.glyphDelayMs,
					onOpen: lt,
					onCancelOpen: $,
					onClose: () => B(null)
				}, e.id)), W("right") && A ? /* @__PURE__ */ S(a, {
					label: Me.widgets.addWidget,
					children: /* @__PURE__ */ S(w.button, {
						type: "button",
						"aria-label": Me.widgets.addWidget,
						onClick: () => A("right"),
						className: "pointer-events-auto flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-f1-border text-f1-foreground-secondary hover:border-f1-border-hover hover:text-f1-foreground",
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: p(c.length, X.glyphDelayMs, Ie),
						children: /* @__PURE__ */ S(t, {
							size: "md",
							icon: r
						})
					})
				}) : null]
			}, "collapsed-strip") }),
			" ",
			J || !q ? null : /* @__PURE__ */ S(w.aside, {
				ref: qe.ref,
				hidden: Z && X.panelHidden,
				className: e("min-h-0 overflow-y-auto", k, Z && "absolute z-10 rounded-xl bg-f1-background dark:bg-f1-background-secondary dark:backdrop-blur-[100px] dark:backdrop-saturate-150", X.mode === "retracting" && "relative z-10"),
				style: ot,
				initial: !1,
				animate: {
					opacity: +!!X.bodyOut,
					scale: X.bodyOut ? 1 : u,
					x: X.bodyOut ? 0 : 10,
					y: Z ? Re : 0
				},
				transition: X.transition,
				onMouseEnter: K ? Q : void 0,
				onMouseLeave: K ? st : void 0,
				children: /* @__PURE__ */ S(ce, {
					side: "right",
					widgets: c,
					visibleWidgetId: Z ? at : void 0,
					stow: {
						stowed: K,
						pitch: 48,
						scale: ve / M
					},
					slotRenderers: f,
					renderWidget: h,
					ctx: F,
					virtualized: Ye("right"),
					disableEdition: !U("right"),
					disableDrag: K,
					dragSurfaceSelector: "[data-page-surface]",
					onReorder: j ? (e) => j("right", e) : void 0,
					onRemoveWidget: T,
					onChangeWidgetParams: E,
					rebuildWidget: D,
					renderWidgetPreview: O,
					paramsPreviewWidth: M,
					onClickAddNewWidget: A && W("right") && !K ? () => A("right") : void 0,
					entrance: { delayMs: 220 },
					children: K ? null : oe
				})
			})
		]
	});
});
//#endregion
export { A as NewHomeLayout };
