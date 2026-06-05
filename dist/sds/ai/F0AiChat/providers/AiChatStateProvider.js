import { jsx as Pe } from "react/jsx-runtime";
import { useContext as Ne, createContext as Re, useState as t, useEffect as p, useCallback as i, useRef as E } from "react";
import { DEFAULT_CHAT_WIDTH as A } from "../utils/constants.js";
import { usePersistedState as C } from "./usePersistedState.js";
import { useI18n as we } from "../../../../lib/providers/i18n/i18n-provider.js";
const O = Re(null), He = "ONE-ai-chat-width", We = "ONE-ai-chat-open", Fe = "ONE-ai-chat-visualization-mode", Ve = 300, ze = 712, Ge = (c) => c === "sidepanel" || c === "fullscreen", xe = () => {
}, qe = ({
  children: c,
  enabled: a,
  agent: o,
  initialMessage: b,
  chatHeader: P,
  chatMessages: N,
  chatInput: R,
  welcomeScreenSuggestions: w = [],
  disclaimer: H,
  resizable: W = !1,
  defaultVisualizationMode: h = "sidepanel",
  lockVisualizationMode: F = !1,
  historyEnabled: V = !1,
  footer: z,
  VoiceMode: G,
  entityRefs: x,
  canvasActions: L,
  canvasEntities: K,
  credits: U,
  employeeCredits: Y,
  creditWarning: k,
  fileAttachments: Q,
  onTranscribe: X,
  onThumbsDown: j,
  onThumbsUp: Z,
  tracking: S
}) => {
  const [q, B] = t(z), [J, v] = t(a), [$, _] = C(
    He,
    A,
    (e) => typeof e == "number" && !isNaN(e) && e >= Ve && e <= ze
  ), [n, g] = C(
    We,
    h === "fullscreen",
    (e) => typeof e == "boolean"
  ), ee = h === "canvas" ? "sidepanel" : h, [s, T] = C(
    Fe,
    ee,
    (e) => e === "sidepanel" || e === "fullscreen",
    Ge
  ), [te, ne] = t("chat"), [se, M] = t(() => s !== "fullscreen"), [oe, ie] = t(o), [ae, ce] = t(w), re = we(), [le, ue] = t([
    re.t("ai.inputPlaceholder")
  ]), [de, fe] = t(b);
  p(() => {
    n && S?.onVisibility?.();
  }, [n]);
  const [pe, r] = t(null), l = i(
    (e) => {
      T((d) => {
        const f = typeof e == "function" ? e(d) : e;
        return d === "canvas" && f !== "canvas" && r(null), f;
      });
    },
    [T]
  ), y = E("sidepanel"), [he, ge] = t(!1), [me, Ee] = t(!1), [Ce, Ae] = t(
    null
  ), [Se, ve] = t(null), m = E(null), u = E([]), _e = i((e) => {
    m.current ? m.current(e) : u.current.push(e);
  }, []), Te = i(
    (e) => {
      if (m.current = e, e && u.current.length > 0) {
        const d = u.current;
        u.current = [], d.forEach((f) => e(f));
      }
    },
    []
  ), Me = () => {
    _(A);
  };
  p(() => {
    v(a);
  }, [a]), p(() => {
    if (!n) {
      r(null), l("sidepanel");
      const e = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      M(!e);
    }
  }, [n]), p(() => {
    s === "fullscreen" && !n && g(!0);
  }, [s, n]);
  const ye = i(
    (e) => {
      s !== "canvas" && (y.current = s), r(e), l("canvas"), n || g(!0);
    },
    [s, n]
  ), De = i(() => {
    r(null), s === "canvas" && l(y.current);
  }, [s]), [Ie, D] = t(null), Oe = i((e) => D(e), []), be = i(() => D(null), []);
  return /* @__PURE__ */ Pe(
    O.Provider,
    {
      value: {
        enabled: J,
        setEnabled: v,
        open: n,
        setOpen: g,
        mode: te,
        setMode: ne,
        visualizationMode: s,
        setVisualizationMode: l,
        lockVisualizationMode: F,
        historyEnabled: V,
        footer: q,
        VoiceMode: G,
        setFooter: B,
        shouldPlayEntranceAnimation: se,
        setShouldPlayEntranceAnimation: M,
        agent: oe,
        setAgent: ie,
        initialMessage: de,
        setInitialMessage: fe,
        chatHeader: P,
        chatMessages: N,
        chatInput: R,
        welcomeScreenSuggestions: ae,
        setWelcomeScreenSuggestions: ce,
        onThumbsUp: Z,
        onThumbsDown: j,
        placeholders: le,
        setPlaceholders: ue,
        disclaimer: H,
        resizable: W,
        chatWidth: $,
        setChatWidth: _,
        resetChatWidth: Me,
        tracking: S,
        entityRefs: x,
        canvasActions: L,
        canvasEntities: K,
        credits: U,
        employeeCredits: Y,
        creditWarning: k,
        fileAttachments: Q,
        onTranscribe: X,
        canvasContent: pe,
        openCanvas: ye,
        closeCanvas: De,
        activeGame: Ie,
        openGame: Oe,
        closeGame: be,
        isClarifying: he,
        setIsClarifying: ge,
        fileDragOver: me,
        setFileDragOver: Ee,
        processDroppedFiles: _e,
        setProcessDroppedFilesFunction: Te,
        pendingContext: Ce,
        setPendingContext: Ae,
        pendingQuote: Se,
        setPendingQuote: ve
      },
      children: c
    }
  );
}, Le = /* @__PURE__ */ new Set([
  "enabled",
  "open",
  "fileDragOver",
  "lockVisualizationMode",
  "historyEnabled",
  "resizable",
  "isClarifying"
]), Ke = /* @__PURE__ */ new Set([
  "canvasContent",
  "pendingContext",
  "pendingQuote",
  "activeGame"
]), Ue = /* @__PURE__ */ new Set([
  "agent",
  "initialMessage",
  "chatHeader",
  "chatMessages",
  "chatInput",
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
]), I = {
  chatWidth: A,
  visualizationMode: "sidepanel",
  mode: "chat",
  shouldPlayEntranceAnimation: !0,
  placeholders: [],
  welcomeScreenSuggestions: []
}, Ye = new Proxy({}, {
  get(c, a) {
    if (typeof a != "string") return;
    const o = a;
    if (o in I) return I[o];
    if (Ke.has(o)) return null;
    if (!Ue.has(o))
      return Le.has(o) ? !1 : xe;
  }
});
function Be() {
  return Ne(O) ?? Ye;
}
export {
  qe as AiChatStateProvider,
  Be as useAiChat
};
