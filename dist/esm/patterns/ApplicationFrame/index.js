import { experimentalComponent as e } from "../../lib/experimental.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { useReducedMotion as i } from "../../lib/a11y.js";
import { useAiChat as a } from "../../kits/ai/F0AiChat/providers/AiChatStateProvider.js";
import { F0AiChat as o, F0AiChatProvider as s } from "../../kits/ai/F0AiChat/F0AiChat.js";
import { F0CanvasPanel as ee } from "../../kits/ai/F0CanvasPanel/F0CanvasPanel.js";
import { useAiPromotionChat as te } from "../../experimental/AiPromotionChat/providers/AiPromotionChatStateProvider.js";
import { AiPromotionChat as ne, AiPromotionChatProvider as c } from "../../experimental/AiPromotionChat/index.js";
import { HostedPanelWindow as l } from "../../kits/ai/F0AiChat/components/layout/HostedPanelWindow.js";
import { FrameProvider as u, useSidebar as d } from "./FrameProvider.js";
import { Fragment as f, useEffect as p, useMemo as re, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { AnimatePresence as ie, LayoutGroup as ae, MotionConfig as oe, motion as y } from "motion/react";
import { useMediaQuery as b } from "usehooks-ts";
import { breakpoints as x } from "@factorialco/f0-core";
//#region src/patterns/ApplicationFrame/index.tsx
var S = {
	duration: .3,
	ease: [
		0,
		0,
		.1,
		1
	]
}, C = { duration: 0 };
function w({ children: e, sidebar: t, banner: n, ai: r, aiPromotion: i }) {
	return /* @__PURE__ */ _(u, { children: /* @__PURE__ */ _(T, {
		ai: r,
		aiPromotion: i,
		sidebar: t,
		banner: n,
		children: e
	}) });
}
function T({ children: e, sidebar: t, banner: n, ai: r, aiPromotion: i }) {
	let a = r?.enabled ? s : i?.enabled ? c : f, o = r?.enabled ? r : i?.enabled ? i : void 0;
	return /* @__PURE__ */ _(a, {
		...o,
		children: /* @__PURE__ */ _(k, {
			ai: r,
			aiPromotion: i,
			sidebar: t,
			banner: n,
			children: e
		})
	});
}
var E = e("ApplicationFrame", w), D = ({ contentId: e }) => {
	let t = r();
	return /* @__PURE__ */ _("a", {
		href: `#${e}`,
		className: n("absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"),
		children: t.actions.skipToContent
	});
};
function O(e, t, n) {
	return !t && e ? n === "hidden" : t && !e ? n !== "hidden" : !1;
}
function se(e, t) {
	let { sidebarState: n, toggleSidebar: r } = d(), i = m(e);
	p(() => {
		t && O(e, i.current, n) && r({ isInvokedByUser: !1 }), i.current = e;
	}, [
		e,
		t,
		n,
		r
	]);
}
function k({ ai: e, aiPromotion: n, children: r, sidebar: s, banner: c }) {
	let { sidebarState: u, toggleSidebar: f, isSmallScreen: w, setForceFloat: T } = d(), E = i(), { open: O, visualizationMode: k, canvasContent: A, canvasEntities: j, closeCanvas: M, chatWidth: ce, resizable: le, panelSide: N, panelContent: ue, panelContentSide: P, restoringPanelContentId: F, isResizing: I } = a(), L = k === "fullscreen", R = k === "canvas", { open: z } = te(), B = le ? ce : 360, V = A?.coversChat === !0 ? 0 : B, H = N === "left", U = P !== N, W = !!(ue || F), G = (W ? P : N) === "left", K = m(L), q = L && !K.current, J = !L && K.current, [Y, X] = h(!1);
	p(() => {
		!L && K.current && X(!0), K.current = L;
	}, [L]);
	let Z = L || Y || J, de = re(() => q ? {
		duration: .15,
		ease: "easeOut"
	} : J ? {
		duration: .4,
		ease: [
			.25,
			.1,
			.25,
			1
		]
	} : { duration: 0 }, [q, J]), fe = I ? C : S, pe = b(`(max-width: ${x.xl}px)`, { initializeWithValue: !0 }), Q = b(`(max-width: ${x.md}px)`, { initializeWithValue: !0 }), $ = O && !G;
	return p(() => {
		T($);
	}, [$, T]), p(() => {
		T(z);
	}, [z, T]), se($, pe), /* @__PURE__ */ _(oe, {
		reducedMotion: E ? "always" : "never",
		transition: {
			ease: [
				.25,
				.1,
				.25,
				1
			],
			duration: E ? 0 : .2
		},
		children: /* @__PURE__ */ v("div", {
			className: "scrollbar-macos grid h-screen w-full max-w-full grid-cols-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden",
			children: [/* @__PURE__ */ _("div", {
				className: "col-[1/-1]",
				children: c
			}), /* @__PURE__ */ _(ae, {
				id: "ai-chat-group",
				children: /* @__PURE__ */ v("div", {
					className: "relative isolate flex h-full",
					children: [
						/* @__PURE__ */ _(ie, { children: u === "unlocked" && /* @__PURE__ */ _(y.nav, {
							className: t("fixed inset-0 z-20 bg-f1-background-inverse", !w && "hidden"),
							initial: { opacity: 0 },
							animate: { opacity: .1 },
							exit: { opacity: 0 },
							transition: { duration: E ? 0 : .2 },
							onClick: () => f()
						}) }),
						/* @__PURE__ */ v("div", {
							className: t(u === "locked" ? "z-0" : "z-30", !E && "transition-all", u === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"),
							ref: (e) => {
								u === "hidden" ? e?.setAttribute("inert", "") : e?.removeAttribute("inert");
							},
							children: [/* @__PURE__ */ _(D, { contentId: "content" }), s]
						}),
						/* @__PURE__ */ v(y.div, {
							className: "relative min-w-0 flex-1",
							animate: {
								paddingRight: O && !Q && !G ? B : 0,
								paddingLeft: O && !Q && G ? B : 0
							},
							transition: {
								paddingRight: S,
								paddingLeft: S
							},
							children: [
								/* @__PURE__ */ _(y.main, {
									id: "content",
									layoutId: "main",
									className: t("relative z-10 flex h-full max-w-full flex-1 xs:py-1", Z ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto", !O && !z && "xs:pr-1", u === "locked" || G && O ? "pl-0" : "xs:pl-1", O && G && "xs:pr-1"),
									layoutDependency: u,
									children: /* @__PURE__ */ _(y.div, {
										className: t("flex max-w-full flex-1", Z ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto"),
										layout: "position",
										children: r
									})
								}),
								e?.enabled && R && A && /* @__PURE__ */ _(y.div, {
									className: t("pointer-events-none flex", H ? "justify-start" : "justify-end", Q ? "fixed inset-0 z-[50]" : t("absolute bottom-0 top-0 z-[21]", H ? "right-0" : "left-0")),
									animate: Q ? {
										left: 0,
										right: 0
									} : H ? {
										left: V,
										right: 0
									} : {
										left: 0,
										right: V
									},
									transition: fe,
									children: /* @__PURE__ */ _(ee, {
										content: A,
										onClose: M,
										entities: j,
										side: N
									})
								}),
								e?.enabled && (() => {
									let e = (e, n, r) => /* @__PURE__ */ _(y.div, {
										className: t("pointer-events-none", "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full", Q ? "fixed inset-0 z-[30]" : t("absolute top-0 bottom-0", e === "left" ? "left-0" : "right-0", Z || R ? "z-20" : "z-0", u !== "locked" && (e === "left" || Z) && "md:pl-1")),
										animate: { width: Q || L && n ? "100%" : B },
										transition: de,
										onAnimationComplete: () => {
											Y && n && X(!1);
										},
										children: r
									}, `panel-${e}`);
									return /* @__PURE__ */ v(g, { children: [e(N, !U || !W, /* @__PURE__ */ _(o, {})), U && e(P, W, /* @__PURE__ */ _(l, {}))] });
								})()
							]
						}),
						n?.enabled && /* @__PURE__ */ _(ne, {})
					]
				})
			})]
		})
	});
}
//#endregion
export { E as ApplicationFrame };
