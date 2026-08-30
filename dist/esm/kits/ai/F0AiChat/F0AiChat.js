import { experimentalComponent as e } from "../../../lib/experimental.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import n from "../../../icons/app/Cross.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as i } from "../../../ui/skeleton.js";
import { ButtonInternal as a } from "../../../components/F0Button/internal.js";
import { useRevealOnChange as o } from "./hooks/useRevealOnChange.js";
import { AiChatStateProvider as s, useAiChat as c } from "./providers/AiChatStateProvider.js";
import { SidebarWindow as l } from "./components/layout/ChatWindow.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { AnimatePresence as f, motion as p } from "motion/react";
//#region src/kits/ai/F0AiChat/F0AiChat.tsx
var m = ({ enabled: e = !1, side: t, panelContentSide: n, initialMessage: r, chatHeader: i, chatMessages: a, chatInput: o, chatOverlay: c, welcomeScreenSuggestions: l, welcomeScreenCards: d, disclaimer: f, resizable: p = !1, defaultVisualizationMode: m, lockVisualizationMode: h, historyEnabled: g, footer: _, VoiceMode: v, entityRefs: y, canvasActions: b, canvasEntities: x, credits: S, employeeCredits: C, creditWarning: w, fileAttachments: T, onTranscribe: E, onThumbsUp: D, onThumbsDown: O, children: k, agent: A, tracking: j }) => /* @__PURE__ */ u(s, {
	enabled: e,
	side: t,
	panelContentSide: n,
	onThumbsUp: D,
	onThumbsDown: O,
	agent: A,
	initialMessage: r,
	chatHeader: i,
	chatMessages: a,
	chatInput: o,
	chatOverlay: c,
	welcomeScreenSuggestions: l,
	welcomeScreenCards: d,
	disclaimer: f,
	resizable: p,
	defaultVisualizationMode: m,
	lockVisualizationMode: h,
	historyEnabled: g,
	footer: _,
	VoiceMode: v,
	tracking: j,
	entityRefs: y,
	canvasActions: b,
	canvasEntities: x,
	credits: S,
	employeeCredits: C,
	creditWarning: w,
	fileAttachments: T,
	onTranscribe: E,
	children: k
}), h = e("F0AiChat", ({ header: e, messages: s, input: m, overlay: h }) => {
	let { enabled: g, open: _, setOpen: v, mode: y, visualizationMode: b, VoiceMode: x, tracking: S, chatHeader: C, chatMessages: w, chatInput: T, chatOverlay: E, panelContent: D, panelSide: O, panelContentSide: k, restoringPanelContentId: A } = c(), j = r(), M = k !== O, { motionProps: N } = o(b === "fullscreen" ? "fullscreen" : "docked", (e, t) => t === "fullscreen" ? 220 : 460), P = t(), F = e ?? C, I = s ?? w, L = m ?? T, R = h ?? E;
	if (!g) return null;
	let z, B;
	return D && !M ? (z = `panel:${D.id}`, B = D.content) : A && !M ? (z = `restoring:${A}`, B = /* @__PURE__ */ u(i, {
		role: "status",
		"aria-busy": !0,
		className: "h-full w-full rounded-none"
	})) : y === "voice" && x ? (z = "voice", B = /* @__PURE__ */ d("div", {
		className: "flex h-full w-full flex-col",
		children: [/* @__PURE__ */ u("div", {
			className: "absolute right-3 top-3 z-20",
			children: /* @__PURE__ */ u(a, {
				variant: "ghost",
				hideLabel: !0,
				label: j.ai.closeChat,
				icon: n,
				onClick: () => {
					v(!1), S?.onClose?.();
				}
			})
		}), /* @__PURE__ */ u(x, {})]
	})) : (z = "chat", B = /* @__PURE__ */ d("div", {
		className: "relative flex h-full w-full flex-col",
		children: [/* @__PURE__ */ d("div", {
			ref: (e) => {
				R ? e?.setAttribute("inert", "") : e?.removeAttribute("inert");
			},
			className: "flex min-h-0 flex-1 flex-col",
			children: [F, /* @__PURE__ */ d(p.div, {
				className: "flex min-h-0 flex-1 flex-col",
				...N,
				children: [/* @__PURE__ */ u("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden",
					children: I
				}), L]
			})]
		}), R && /* @__PURE__ */ u("div", {
			className: "absolute inset-0 z-30 flex items-center justify-center bg-f1-background-overlay p-4",
			children: R
		})]
	})), /* @__PURE__ */ u(l, {
		visible: M ? _ && !D && !A : void 0,
		exitStyle: M && _ ? "hold" : "shrink",
		acceptsWidgetDrop: z === "chat" && !R,
		children: /* @__PURE__ */ u(f, {
			initial: !1,
			children: /* @__PURE__ */ u(p.div, {
				className: "absolute inset-0 flex flex-col overflow-hidden",
				initial: !P && { opacity: 0 },
				animate: { opacity: 1 },
				exit: P ? void 0 : { opacity: 0 },
				transition: {
					duration: P ? 0 : .15,
					ease: "easeOut"
				},
				children: B
			}, z)
		})
	});
}), g = e("F0AiChatProvider", m);
//#endregion
export { h as F0AiChat, g as F0AiChatProvider };
