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
import { F0OneSwitch as s } from "../../../kits/ai/F0OneSwitch/F0OneSwitch.js";
import { useSidebar as re } from "../../../patterns/ApplicationFrame/FrameProvider.js";
import { SidebarIconSvg as ie } from "../../../patterns/Navigation/Sidebar/Icon/index.js";
import { GENIE_GLYPH_ENTER_SCALE as c, GENIE_GLYPH_EXIT_SCALE as l, GENIE_GLYPH_TAP_SCALE as u, GENIE_ORIGIN as d, GENIE_RETRACTED_SCALE as f, HomeEntrance as p, entranceDelay as m, entranceTransition as h, genieCloseTransition as g, glyphTransition as _, withReducedMotion as ae } from "../home-motion.js";
import { widgetTitle as v } from "../slotRenderers.js";
import { SlotWidget as oe } from "../SlotWidget/index.js";
import { useScrollFade as y } from "../useScrollFade.js";
import { WidgetContainer as se } from "../WidgetContainer/index.js";
import { useRailMotion as ce } from "./useRailMotion.js";
import { Children as le, Fragment as ue, forwardRef as de, isValidElement as fe, useEffect as b, useLayoutEffect as pe, useRef as x, useState as S } from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
import { AnimatePresence as me, motion as T } from "motion/react";
//#region src/sds/Home/NewHomeLayout/index.tsx
var he = {
	morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
	afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
	evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
}, ge = ({ period: t, className: n }) => /* @__PURE__ */ C("div", {
	"aria-hidden": !0,
	className: e("pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]", he[t], n)
}), _e = 40, ve = 712, ye = 1e3, E = (e) => {
	let t = n(), [r, i] = S(!0);
	return b(() => {
		if (!e || t) {
			i(!0);
			return;
		}
		let n = setInterval(() => i((e) => !e), ye);
		return () => clearInterval(n);
	}, [e, t]), r;
}, D = .24, O = ({ text: e, ticking: t }) => {
	let n = E(t);
	return /* @__PURE__ */ C("span", {
		className: "whitespace-nowrap px-2 text-2xl font-semibold tabular-nums",
		children: e.split(":").map((e, t) => /* @__PURE__ */ w(ue, { children: [t > 0 ? /* @__PURE__ */ C("span", {
			className: "transition-opacity duration-200",
			style: { opacity: n ? 1 : D },
			children: ":"
		}) : null, e] }, t))
	});
}, k = {
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
}, be = ({ widget: r, order: i, open: a, delayMs: te, onOpen: s, onCancelOpen: re, onClose: ie }) => {
	let d = n(), f = r.railAction, p = E(!!f?.flashing && !a), h = f?.text && !a ? f.text : void 0, g = k[f?.tone ?? "neutral"], oe = {
		initial: {
			opacity: 0,
			scale: d ? 1 : c
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: d ? 1 : l
		},
		whileTap: d ? void 0 : { scale: u },
		transition: ae({
			..._,
			delay: m(i, te)
		}, d)
	}, y = r.hasUpdates ? /* @__PURE__ */ C("span", { className: "pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold ring-2 ring-f1-background" }) : null;
	return f ? /* @__PURE__ */ C(o, {
		label: f.label,
		instant: !0,
		children: /* @__PURE__ */ w(T.div, {
			className: e("group pointer-events-auto relative shrink-0", h ? e("-mr-1 flex flex-row items-center gap-1 rounded-lg p-1", g.pill) : "rounded-lg"),
			onMouseEnter: (e) => s(r.id, e.currentTarget),
			onMouseLeave: re,
			onFocus: (e) => s(r.id, e.currentTarget, !0),
			...oe,
			children: [
				h ? /* @__PURE__ */ C(O, {
					text: h,
					ticking: !!f.ticking
				}) : null,
				/* @__PURE__ */ C(ee, {
					type: "button",
					variant: "ghost",
					size: "lg",
					className: e("size-10 shadow-none after:hidden hover:shadow-none active:shadow-none [&_.main]:px-0", f.text ? g.button : g.solo, "ring-inset group-hover:ring-1", a && "ring-1", f.text ? g.ring : g.soloRing),
					"aria-label": `${f.label}, ${v(r)}`,
					onClick: () => f.onClick(),
					children: /* @__PURE__ */ C(t, {
						size: "lg",
						color: f.text ? g.icon : g.soloIcon,
						icon: p || !r.icon ? f.icon : r.icon
					})
				}),
				y
			]
		})
	}) : /* @__PURE__ */ C(T.button, {
		type: "button",
		"aria-label": v(r),
		"aria-expanded": a,
		onMouseEnter: (e) => s(r.id, e.currentTarget),
		onMouseLeave: re,
		onClick: (e) => a ? ie() : s(r.id, e.currentTarget, !0),
		className: "pointer-events-auto rounded-lg",
		...oe,
		children: /* @__PURE__ */ w("span", {
			className: "relative inline-flex",
			children: [r.icon ? /* @__PURE__ */ C(ne, {
				icon: r.icon,
				size: "lg"
			}) : /* @__PURE__ */ C("span", {
				className: "flex h-10 w-10 items-center justify-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background font-medium text-f1-foreground-secondary",
				children: v(r).charAt(0)
			}), y]
		})
	});
}, A = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden", xe = 16, Se = 768, Ce = 150, we = 150, j = de(function({ children: ne, leftWidgets: c = [], rightWidgets: l = [], aside: u, slotRenderers: m, renderWidget: _, editableWidgetContainers: v = ["main", "right"], addableWidgetContainers: de, virtualizedWidgetContainers: he = [], virtualization: ye, onRemoveWidget: E, onChangeWidgetParams: D, rebuildWidget: O, renderWidgetPreview: k, onClickAddNewWidget: j, onReorderWidgets: M, period: Te = "morning", asideWidth: N = 396, mainWidth: P = ve, bleed: F = 24, stackedPinsAfter: Ee = 2, ctx: I = {}, className: De, oneSwitchTooltip: Oe, oneSwitchAutoOpen: ke, hideOneSwitch: Ae = !1 }, L) {
	let je = a(), { sidebarState: Me, toggleSidebar: Ne, isSmallScreen: Pe } = re(), Fe = n(), R = x(null), [z, Ie] = S(0), [B, V] = S(null), [Le, Re] = S(0), [ze, Be] = S(!1), H = x(null), U = x(null);
	pe(() => {
		let e = R.current;
		if (!e) return;
		let t = () => Ie(e.clientWidth);
		if (t(), typeof ResizeObserver != "function") return;
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, []);
	let [Ve, He] = S(!1);
	z > 0 && !Ve && He(!0);
	let [Ue, We] = S(null), W = (e) => v.includes(e), G = (e) => W(e) && (de?.includes(e) ?? !0), Ge = (e) => _ ? _(e, I) : /* @__PURE__ */ C(oe, {
		header: e.header,
		params: e.params,
		fullHeight: e.fullHeight,
		slots: e.slots,
		loading: e.loading,
		slotRenderers: m,
		ctx: I
	}), Ke = y(), qe = y(), Je = y(), Ye = (e) => he.includes(e) ? {
		...ye,
		scrollElement: e === "main" ? Ke.element : qe.element
	} : !1, Xe = u != null || l.length > 0 || j != null && G("right"), Ze = z > 0 && z < P + xe + N, K = Xe && l.length > 0 && (Ze || (Ue ?? !1)), Qe = K ? _e : N, $e = K ? "Expand widgets panel" : "Collapse widgets panel", q = Xe && Ve, J = z > 0 && z < Se, et = {
		pinned: J ? l.filter((e) => e.locked) : [],
		rest: J ? l.filter((e) => !e.locked) : []
	}, tt = le.toArray(ne), nt = (J ? [
		...tt.slice(0, Ee),
		...et.pinned.map((e) => /* @__PURE__ */ C(ue, { children: Ge(e) }, e.id)),
		...tt.slice(Ee)
	] : tt).map((e, t) => /* @__PURE__ */ C(p, {
		order: t,
		children: e
	}, fe(e) && e.key != null ? e.key : t)), rt = K ? l.find((e) => e.id === B) : void 0;
	b(() => {
		K || (U.current && clearTimeout(U.current), U.current = null, V(null));
	}, [K]), b(() => () => {
		U.current && clearTimeout(U.current), H.current && clearTimeout(H.current);
	}, []);
	let Y = ce({
		collapsed: K,
		open: rt != null,
		glide: ze,
		drawn: q,
		width: Qe
	}), X = Y.mode === "panel", it = x(null);
	B && (it.current = B);
	let Z = x(null);
	Z.current = B;
	let at = B ?? (Y.panelHidden ? null : it.current), ot = X ? {
		transformOrigin: d,
		top: 0,
		right: 48,
		width: N,
		maxHeight: `calc(100% - ${Le}px)`,
		pointerEvents: rt ? void 0 : "none"
	} : {
		transformOrigin: d,
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
	}, Q = () => {
		H.current && clearTimeout(H.current), H.current = null;
	}, $ = () => {
		U.current && clearTimeout(U.current), U.current = null;
	}, st = () => {
		Q(), $(), H.current = setTimeout(() => V(null), Ce);
	}, ct = (e, t) => {
		$();
		let n = R.current;
		if (n) {
			let e = t.getBoundingClientRect().top - n.getBoundingClientRect().top;
			Re(Math.max(0, e));
		}
		Be(Z.current != null), V(e);
	}, lt = (e, t, n = !1) => {
		if (Q(), $(), Z.current !== e) {
			if (n) {
				ct(e, t);
				return;
			}
			U.current = setTimeout(() => ct(e, t), we);
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
			gridTemplateColumns: q && !J && (K || z >= Se) ? `minmax(0, 1fr) var(--home-aside-w, ${Qe}px)` : "minmax(0, 1fr)"
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
				children: /* @__PURE__ */ C(ge, { period: Te })
			}),
			/* @__PURE__ */ w(p, {
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
					children: [Xe && l.length > 0 && !Ze ? /* @__PURE__ */ C(o, {
						label: $e,
						children: /* @__PURE__ */ C(ee, {
							variant: "ghost",
							size: "md",
							compact: !0,
							onClick: () => We(!K),
							"aria-label": $e,
							children: /* @__PURE__ */ C(ie, { isExpanded: !K })
						})
					}) : null, !Ae && /* @__PURE__ */ C(s, {
						tooltip: Oe,
						autoOpen: ke
					})]
				})]
			}),
			/* @__PURE__ */ C("div", {
				ref: Ke.ref,
				className: e("relative isolate min-h-0 overflow-y-auto", A),
				style: {
					gridColumn: 1,
					gridRow: 2,
					marginTop: -F,
					marginBottom: -F,
					paddingTop: F,
					paddingBottom: F,
					...Ke.style
				},
				children: /* @__PURE__ */ C(se, {
					side: "main",
					className: "relative mx-auto w-full",
					style: { maxWidth: `${P}px` },
					widgets: J ? [...c, ...et.rest] : c,
					slotRenderers: m,
					renderWidget: _,
					ctx: I,
					virtualized: Ye("main"),
					disableEdition: !W("main"),
					dragSurfaceSelector: "[data-page-surface]",
					onReorder: M ? (e) => M("main", e) : void 0,
					onRemoveWidget: E,
					onChangeWidgetParams: D,
					rebuildWidget: O,
					renderWidgetPreview: k,
					paramsPreviewWidth: P,
					onClickAddNewWidget: j && G("main") ? () => j("main") : void 0,
					entrance: { order: nt.length },
					children: nt
				})
			}),
			/* @__PURE__ */ C(me, { children: J || !q || !K ? null : /* @__PURE__ */ w(T.aside, {
				ref: Je.ref,
				className: e("-m-1 flex min-h-0 flex-col items-end gap-2 overflow-y-auto p-1", "pointer-events-none z-20", A),
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
				transition: ae(g, Fe),
				onMouseLeave: st,
				onMouseEnter: Q,
				children: [l.map((e, t) => /* @__PURE__ */ C(be, {
					widget: e,
					order: t,
					open: B === e.id,
					delayMs: Y.glyphDelayMs,
					onOpen: lt,
					onCancelOpen: $,
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
						transition: h(l.length, Y.glyphDelayMs, Fe),
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
				className: e("min-h-0 overflow-y-auto", A, X && "absolute z-10 rounded-xl bg-f1-background dark:bg-f1-background-secondary dark:backdrop-blur-[100px] dark:backdrop-saturate-150", Y.mode === "retracting" && "relative z-10"),
				style: ot,
				initial: !1,
				animate: {
					opacity: +!!Y.bodyOut,
					scale: Y.bodyOut ? 1 : f,
					x: Y.bodyOut ? 0 : 10,
					y: X ? Le : 0
				},
				transition: Y.transition,
				onMouseEnter: K ? Q : void 0,
				onMouseLeave: K ? st : void 0,
				children: /* @__PURE__ */ C(se, {
					side: "right",
					widgets: l,
					visibleWidgetId: X ? at : void 0,
					stow: {
						stowed: K,
						pitch: 48,
						scale: _e / N
					},
					slotRenderers: m,
					renderWidget: _,
					ctx: I,
					virtualized: Ye("right"),
					disableEdition: !W("right"),
					disableDrag: K,
					dragSurfaceSelector: "[data-page-surface]",
					onReorder: M ? (e) => M("right", e) : void 0,
					onRemoveWidget: E,
					onChangeWidgetParams: D,
					rebuildWidget: O,
					renderWidgetPreview: k,
					paramsPreviewWidth: N,
					onClickAddNewWidget: j && G("right") && !K ? () => j("right") : void 0,
					entrance: { delayMs: 220 },
					children: K ? null : u
				})
			})
		]
	});
});
//#endregion
export { j as NewHomeLayout };
