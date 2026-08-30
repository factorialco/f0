"use client";
import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { usePersistedState as t } from "./usePersistedState.js";
import { createContext as n, useCallback as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as ee } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/providers/AiChatStateProvider.tsx
var c = n(null), te = "ONE-ai-chat-width", ne = 150, re = "ONE-ai-chat-open", ie = "ONE-ai-chat-visualization-mode", ae = "ONE-ai-chat-panel-content-id", oe = 300, se = 712, ce = 5e3, le = (e) => e === "sidepanel" || e === "fullscreen", l = () => {}, u = ({ children: n, enabled: i, side: l = "right", panelContentSide: u, agent: d, initialMessage: f, chatHeader: p, chatMessages: m, chatInput: h, chatOverlay: g, welcomeScreenSuggestions: _ = [], welcomeScreenCards: v = [], disclaimer: y, resizable: ue = !1, defaultVisualizationMode: b = "sidepanel", lockVisualizationMode: de = !1, historyEnabled: fe = !1, footer: pe, VoiceMode: me, entityRefs: he, canvasActions: ge, canvasEntities: _e, credits: ve, employeeCredits: ye, creditWarning: x, fileAttachments: S, onTranscribe: C, onThumbsDown: w, onThumbsUp: T, tracking: E }) => {
	let [D, O] = s(pe), [k, A] = s(i), [j, M] = t(te, 360, (e) => typeof e == "number" && !isNaN(e) && e >= oe && e <= se, void 0, ne), [N, P] = s(!1), [F, I] = t(re, b === "fullscreen", (e) => typeof e == "boolean"), [L, R] = t(ie, b === "canvas" ? "sidepanel" : b, (e) => e === "sidepanel" || e === "fullscreen", le), [be, xe] = s("chat"), [Se, z] = s(() => L !== "fullscreen"), [Ce, we] = s(d), [Te, Ee] = s(_), [De, Oe] = s(v), ke = e(), [Ae, je] = s([ke.t("ai.inputPlaceholder")]), [B, Me] = s(f);
	a(() => {
		F && E?.onVisibility?.();
	}, [F]);
	let [Ne, V] = s(null), H = r((e) => {
		R((t) => {
			let n = typeof e == "function" ? e(t) : e;
			return t === "canvas" && n !== "canvas" && V(null), n === "fullscreen" && I(!0), n;
		});
	}, [R, I]), U = o("sidepanel"), [Pe, Fe] = s(!1), [Ie, Le] = s(!1), [Re, ze] = s(null), [Be, Ve] = s(null), W = o(null), G = o([]), He = r((e) => {
		W.current ? W.current(e) : G.current.push(e);
	}, []), Ue = r((e) => {
		if (W.current = e, e && G.current.length > 0) {
			let t = G.current;
			G.current = [], t.forEach((t) => e(t));
		}
	}, []), K = o(null), q = o(!1), We = r(() => K.current ? (K.current(), !0) : (q.current = !0, !1), []), Ge = r((e) => {
		K.current = e, e && q.current && (q.current = !1, e());
	}, []), Ke = () => {
		M(360);
	};
	a(() => {
		A(i);
	}, [i]), a(() => {
		if (!F) {
			q.current = !1, V(null), H("sidepanel");
			let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			z(!e);
		}
	}, [F]);
	let qe = r((e) => {
		L !== "canvas" && (U.current = L), V(e), H("canvas"), F || I(!0);
	}, [L, F]), Je = r(() => {
		V(null), L === "canvas" && H(U.current);
	}, [L]), [Ye, J] = s(null), Xe = r((e) => J(e), []), Ze = r(() => J(null), []), [Y, X] = s(null), [Qe, Z] = t(ae, null, (e) => e === null || typeof e == "string"), [Q, $] = s(() => F ? Qe : null), $e = r((e) => {
		X(e), $(null), e && !F && I(!0);
	}, [F, I]), et = r(() => {
		X(null), $(null);
	}, []), tt = r(() => $(null), []);
	a(() => {
		Q || Z(Y?.id ?? null);
	}, [
		Y,
		Q,
		Z
	]), a(() => {
		F || $(null);
	}, [F]), a(() => {
		if (!Q) return;
		let e = setTimeout(() => $(null), ce);
		return () => clearTimeout(e);
	}, [Q]);
	let [nt, rt] = s(l), [it, at] = s(u ?? l);
	return /* @__PURE__ */ ee(c.Provider, {
		value: {
			enabled: k,
			setEnabled: A,
			open: F,
			setOpen: I,
			mode: be,
			setMode: xe,
			visualizationMode: L,
			setVisualizationMode: H,
			lockVisualizationMode: de,
			historyEnabled: fe,
			footer: D,
			VoiceMode: me,
			setFooter: O,
			shouldPlayEntranceAnimation: Se,
			setShouldPlayEntranceAnimation: z,
			agent: Ce,
			setAgent: we,
			initialMessage: B,
			setInitialMessage: Me,
			chatHeader: p,
			chatMessages: m,
			chatInput: h,
			chatOverlay: g,
			welcomeScreenSuggestions: Te,
			setWelcomeScreenSuggestions: Ee,
			welcomeScreenCards: De,
			setWelcomeScreenCards: Oe,
			onThumbsUp: T,
			onThumbsDown: w,
			placeholders: Ae,
			setPlaceholders: je,
			disclaimer: y,
			resizable: ue,
			chatWidth: j,
			setChatWidth: M,
			resetChatWidth: Ke,
			isResizing: N,
			setIsResizing: P,
			tracking: E,
			entityRefs: he,
			canvasActions: ge,
			canvasEntities: _e,
			credits: ve,
			employeeCredits: ye,
			creditWarning: x,
			fileAttachments: S,
			onTranscribe: C,
			canvasContent: Ne,
			openCanvas: qe,
			closeCanvas: Je,
			activeGame: Ye,
			openGame: Xe,
			closeGame: Ze,
			isClarifying: Pe,
			setIsClarifying: Fe,
			fileDragOver: Ie,
			setFileDragOver: Le,
			processDroppedFiles: He,
			setProcessDroppedFilesFunction: Ue,
			focusChatInput: We,
			setFocusChatInputFunction: Ge,
			pendingContext: Re,
			setPendingContext: ze,
			pendingQuote: Be,
			setPendingQuote: Ve,
			panelContent: Y,
			setPanelContent: $e,
			clearPanelContent: et,
			restoringPanelContentId: Q,
			cancelPanelContentRestore: tt,
			panelSide: nt,
			setPanelSide: rt,
			panelContentSide: it,
			setPanelContentSide: at
		},
		children: n
	});
}, d = /* @__PURE__ */ new Set([
	"enabled",
	"open",
	"fileDragOver",
	"lockVisualizationMode",
	"historyEnabled",
	"resizable",
	"isClarifying"
]), f = /* @__PURE__ */ new Set([
	"canvasContent",
	"pendingContext",
	"pendingQuote",
	"activeGame",
	"panelContent",
	"restoringPanelContentId"
]), p = /* @__PURE__ */ new Set([
	"agent",
	"initialMessage",
	"chatHeader",
	"chatMessages",
	"chatInput",
	"chatOverlay",
	"disclaimer",
	"footer",
	"VoiceMode",
	"tracking",
	"entityRefs",
	"canvasActions",
	"canvasEntities",
	"credits",
	"employeeCredits",
	"creditWarning",
	"fileAttachments",
	"onTranscribe",
	"onThumbsUp",
	"onThumbsDown"
]), m = {
	chatWidth: 360,
	panelSide: "right",
	panelContentSide: "right",
	visualizationMode: "sidepanel",
	mode: "chat",
	shouldPlayEntranceAnimation: !0,
	placeholders: [],
	welcomeScreenSuggestions: [],
	welcomeScreenCards: [],
	focusChatInput: () => !1
}, h = new Proxy({}, { get(e, t) {
	if (typeof t != "string") return;
	let n = t;
	if (n in m) return m[n];
	if (f.has(n)) return null;
	if (!p.has(n)) return !d.has(n) && l;
} });
function g() {
	return i(c) ?? h;
}
//#endregion
export { u as AiChatStateProvider, g as useAiChat };
