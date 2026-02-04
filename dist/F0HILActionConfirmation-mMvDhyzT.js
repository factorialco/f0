import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { createContext as c, useContext as h } from "react";
import { w as n, x as d } from "./F0AiChat-BK5T8nmw.js";
const f = ["xs", "sm", "md", "lg"], b = [
  "inProgress",
  "executing",
  "completed"
], w = {
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
    removeFile: "Remove file",
    attachFiles: "Attach files",
    dropZoneTitle: "Add files",
    dropZoneDescription: "Drop any files here to add them to your message",
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
function g({ children: e, translations: o }) {
  return t(s.Provider, {
    value: o,
    children: e
  });
}
function C() {
  const e = h(s);
  if (e === null)
    throw new Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
  return e;
}
const A = ({ text: e, confirmationText: o, onConfirm: i, cancelText: r, onCancel: l }) => a("div", {
  className: "flex flex-col gap-2",
  children: [e && t("p", {
    children: e
  }), a("div", {
    className: "flex gap-2",
    children: [t(n, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: d,
      onClick: i,
      label: o
    }), t(n, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: l,
      label: r
    })]
  })]
});
export {
  g as A,
  A as F,
  w as a,
  b,
  f as o,
  C as u
};
