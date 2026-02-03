import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { createContext as c, useContext as h } from "react";
import { w as n, x as u } from "./F0AiChat-Cdk-JKhj.js";
const b = ["xs", "sm", "md", "lg"], w = [
  "inProgress",
  "executing",
  "completed"
], f = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info and a lot of other things...",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    exportTable: "Download table",
    generatedTableFilename: "OneGeneratedTable",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn't work"
      }
    },
    ask: "Ask One"
  }
}, s = c(null);
function g({
  children: e,
  translations: a
}) {
  return /* @__PURE__ */ t(s.Provider, { value: a, children: e });
}
function C() {
  const e = h(s);
  if (e === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return e;
}
const k = ({
  text: e,
  confirmationText: a,
  onConfirm: r,
  cancelText: i,
  onCancel: l
}) => /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
  e && /* @__PURE__ */ t("p", { children: e }),
  /* @__PURE__ */ o("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ t(
      n,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        icon: u,
        onClick: r,
        label: a
      }
    ),
    /* @__PURE__ */ t(
      n,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: l,
        label: i
      }
    )
  ] })
] });
export {
  g as A,
  k as F,
  f as a,
  w as b,
  b as o,
  C as u
};
