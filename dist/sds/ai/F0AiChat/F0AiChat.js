import { jsx as e, jsxs as C } from "react/jsx-runtime";
import { ButtonInternal as S } from "../../../components/F0Button/internal.js";
import z from "../../../icons/app/Cross.js";
import { experimentalComponent as x } from "../../../lib/experimental.js";
import { SidebarWindow as v } from "./components/layout/ChatWindow.js";
import { useAiChat as B, AiChatStateProvider as H } from "./providers/AiChatStateProvider.js";
import { useI18n as L } from "../../../lib/providers/i18n/i18n-provider.js";
const O = ({
  enabled: t = !1,
  initialMessage: r,
  chatHeader: i,
  chatMessages: n,
  chatInput: l,
  welcomeScreenSuggestions: a,
  disclaimer: o,
  resizable: s = !1,
  defaultVisualizationMode: c,
  lockVisualizationMode: h,
  historyEnabled: d,
  footer: m,
  VoiceMode: f,
  entityRefs: p,
  canvasActions: u,
  canvasEntities: A,
  credits: F,
  employeeCredits: g,
  creditWarning: b,
  fileAttachments: w,
  onTranscribe: N,
  onThumbsUp: P,
  onThumbsDown: I,
  children: j,
  agent: k,
  tracking: M
}) => /* @__PURE__ */ e(
  H,
  {
    enabled: t,
    onThumbsUp: P,
    onThumbsDown: I,
    agent: k,
    initialMessage: r,
    chatHeader: i,
    chatMessages: n,
    chatInput: l,
    welcomeScreenSuggestions: a,
    disclaimer: o,
    resizable: s,
    defaultVisualizationMode: c,
    lockVisualizationMode: h,
    historyEnabled: d,
    footer: m,
    VoiceMode: f,
    tracking: M,
    entityRefs: p,
    canvasActions: u,
    canvasEntities: A,
    credits: F,
    employeeCredits: g,
    creditWarning: b,
    fileAttachments: w,
    onTranscribe: N,
    children: j
  }
), R = ({
  header: t,
  messages: r,
  input: i
}) => {
  const {
    enabled: n,
    setOpen: l,
    mode: a,
    VoiceMode: o,
    tracking: s,
    chatHeader: c,
    chatMessages: h,
    chatInput: d
  } = B(), m = L(), f = t ?? c, p = r ?? h, u = i ?? d;
  return n ? a === "voice" && o ? /* @__PURE__ */ e(v, { children: /* @__PURE__ */ C("div", { className: "flex h-full w-full flex-col", children: [
    /* @__PURE__ */ e("div", { className: "absolute right-3 top-3 z-20", children: /* @__PURE__ */ e(
      S,
      {
        variant: "ghost",
        hideLabel: !0,
        label: m.ai.closeChat,
        icon: z,
        onClick: () => {
          l(!1), s?.onClose?.();
        }
      }
    ) }),
    /* @__PURE__ */ e(o, {})
  ] }) }) : /* @__PURE__ */ e(v, { children: /* @__PURE__ */ C("div", { className: "flex h-full w-full flex-col", children: [
    f,
    /* @__PURE__ */ e("div", { className: "flex min-h-0 flex-1 flex-col overflow-hidden", children: p }),
    u
  ] }) }) : null;
}, J = x("F0AiChat", R), K = x(
  "F0AiChatProvider",
  O
);
export {
  J as F0AiChat,
  K as F0AiChatProvider
};
