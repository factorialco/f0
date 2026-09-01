import { experimentalComponent as e } from "../../lib/experimental.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { useReducedMotion as r } from "../../lib/a11y.js";
import { useI18n as i } from "../../lib/providers/i18n/i18n-provider.js";
import { useAiPromotionChat as a } from "../../experimental/AiPromotionChat/providers/AiPromotionChatStateProvider.js";
import { FrameProvider as o, useSidebar as s } from "./FrameProvider.js";
import { useAiChat as c } from "../../kits/ai/F0AiChat/providers/AiChatStateProvider.js";
import { F0AiChat as l, F0AiChatProvider as u } from "../../kits/ai/F0AiChat/F0AiChat.js";
import { F0CanvasPanel as ee } from "../../kits/ai/F0CanvasPanel/F0CanvasPanel.js";
import { AiPromotionChat as d, AiPromotionChatProvider as f } from "../../experimental/AiPromotionChat/index.js";
import { HostedPanelWindow as p } from "../../kits/ai/F0AiChat/components/layout/HostedPanelWindow.js";
import { Fragment as m, useEffect as h, useMemo as te, useRef as g, useState as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
import { AnimatePresence as ne, LayoutGroup as re, MotionConfig as ie, motion as x } from "motion/react";
import { useMediaQuery as S } from "usehooks-ts";
import { breakpoints as C } from "@factorialco/f0-core";
//#region src/patterns/ApplicationFrame/index.tsx
var w = {
	duration: .3,
	ease: [
		0,
		0,
		.1,
		1
	]
}, ae = { duration: 0 };
function T({ children: e, sidebar: t, banner: n, ai: r, aiPromotion: i }) {
	return /* @__PURE__ */ y(o, { children: /* @__PURE__ */ y(E, {
		ai: r,
		aiPromotion: i,
		sidebar: t,
		banner: n,
		children: e
	}) });
}
function E({ children: e, sidebar: t, banner: n, ai: r, aiPromotion: i }) {
	let a = r?.enabled ? u : i?.enabled ? f : m, o = r?.enabled ? r : i?.enabled ? i : void 0;
	return /* @__PURE__ */ y(a, {
		...o,
		children: /* @__PURE__ */ y(j, {
			ai: r,
			aiPromotion: i,
			sidebar: t,
			banner: n,
			children: e
		})
	});
}
var D = e("ApplicationFrame", T), O = ({ contentId: e }) => {
	let t = i();
	return /* @__PURE__ */ y("a", {
		href: `#${e}`,
		className: n("absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"),
		children: t.actions.skipToContent
	});
};
function k(e, t, n) {
	return !t && e ? n === "hidden" : t && !e ? n !== "hidden" : !1;
}
function A(e, t) {
	let { sidebarState: n, toggleSidebar: r } = s(), i = g(e);
	h(() => {
		t && k(e, i.current, n) && r({ isInvokedByUser: !1 }), i.current = e;
	}, [
		e,
		t,
		n,
		r
	]);
}
function j({ ai: e, aiPromotion: n, children: i, sidebar: o, banner: u }) {
	let { sidebarState: f, toggleSidebar: m, isSmallScreen: T, setForceFloat: E } = s(), D = r(), { open: k, visualizationMode: j, canvasContent: M, canvasEntities: oe, closeCanvas: se, chatWidth: ce, resizable: le, panelSide: N, panelContent: ue, panelContentSide: P, restoringPanelContentId: F, isResizing: I } = c(), L = j === "fullscreen", R = j === "canvas", { open: z } = a(), B = le ? ce : 360, V = M?.coversChat === !0 ? 0 : B, H = N === "left", U = P !== N, W = !!(ue || F), G = (W ? P : N) === "left", K = g(L), q = L && !K.current, J = !L && K.current, [Y, X] = _(!1);
	h(() => {
		!L && K.current && X(!0), K.current = L;
	}, [L]);
	let Z = L || Y || J, de = te(() => q ? {
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
	} : { duration: 0 }, [q, J]), fe = I ? ae : w, pe = S(`(max-width: ${C.xl}px)`, { initializeWithValue: !0 }), Q = S(`(max-width: ${C.md}px)`, { initializeWithValue: !0 }), $ = k && !G;
	return h(() => {
		E($);
	}, [$, E]), h(() => {
		E(z);
	}, [z, E]), A($, pe), /* @__PURE__ */ y(ie, {
		reducedMotion: D ? "always" : "never",
		transition: {
			ease: [
				.25,
				.1,
				.25,
				1
			],
			duration: D ? 0 : .2
		},
		children: /* @__PURE__ */ b("div", {
			className: "scrollbar-macos grid h-screen w-full max-w-full grid-cols-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden",
			children: [/* @__PURE__ */ y("div", {
				className: "col-[1/-1]",
				children: u
			}), /* @__PURE__ */ y(re, {
				id: "ai-chat-group",
				children: /* @__PURE__ */ b("div", {
					className: "relative isolate flex h-full",
					children: [
						/* @__PURE__ */ y(ne, { children: f === "unlocked" && /* @__PURE__ */ y(x.nav, {
							className: t("fixed inset-0 z-20 bg-f1-background-inverse", !T && "hidden"),
							initial: { opacity: 0 },
							animate: { opacity: .1 },
							exit: { opacity: 0 },
							transition: { duration: D ? 0 : .2 },
							onClick: () => m()
						}) }),
						/* @__PURE__ */ b("div", {
							className: t(f === "locked" ? "z-0" : "z-30", !D && "transition-all", f === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"),
							ref: (e) => {
								f === "hidden" ? e?.setAttribute("inert", "") : e?.removeAttribute("inert");
							},
							children: [/* @__PURE__ */ y(O, { contentId: "content" }), o]
						}),
						/* @__PURE__ */ b(x.div, {
							className: "relative min-w-0 flex-1",
							animate: {
								paddingRight: k && !Q && !G ? B : 0,
								paddingLeft: k && !Q && G ? B : 0
							},
							transition: {
								paddingRight: w,
								paddingLeft: w
							},
							children: [
								/* @__PURE__ */ y(x.main, {
									id: "content",
									layoutId: "main",
									className: t("relative z-10 flex h-full max-w-full flex-1 xs:py-1", Z ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto", !k && !z && "xs:pr-1", f === "locked" || G && k ? "pl-0" : "xs:pl-1", k && G && "xs:pr-1"),
									layoutDependency: f,
									children: /* @__PURE__ */ y(x.div, {
										className: t("flex max-w-full flex-1", Z ? "overflow-hidden" : "overflow-x-hidden overflow-y-auto"),
										layout: "position",
										children: i
									})
								}),
								e?.enabled && R && M && /* @__PURE__ */ y(x.div, {
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
									children: /* @__PURE__ */ y(ee, {
										content: M,
										onClose: se,
										entities: oe,
										side: N
									})
								}),
								e?.enabled && (() => {
									let e = (e, n, r) => /* @__PURE__ */ y(x.div, {
										className: t("pointer-events-none", "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full", Q ? "fixed inset-0 z-[30]" : t("absolute top-0 bottom-0", e === "left" ? "left-0" : "right-0", Z || R ? "z-20" : "z-0", f !== "locked" && (e === "left" || Z) && "md:pl-1")),
										animate: { width: Q || L && n ? "100%" : B },
										transition: de,
										onAnimationComplete: () => {
											Y && n && X(!1);
										},
										children: r
									}, `panel-${e}`);
									return /* @__PURE__ */ b(v, { children: [e(N, !U || !W, /* @__PURE__ */ y(l, {})), U && e(P, W, /* @__PURE__ */ y(p, {}))] });
								})()
							]
						}),
						n?.enabled && /* @__PURE__ */ y(d, {})
					]
				})
			})]
		})
	});
}
//#endregion
export { D as ApplicationFrame };
