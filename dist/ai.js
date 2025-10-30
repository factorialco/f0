import { n as u, g as A, A as C, o as d, u as x } from "./index-D1_1GCzL.js";
import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { y as o, av as l } from "./dialog-BF8CBjf_.js";
import { cx as b, cy as g, bc as y } from "./dialog-BF8CBjf_.js";
const h = ({ text: s, confirmationText: t, onConfirm: r, cancelText: e, onCancel: n }) => i("div", {
  className: "flex flex-col gap-2",
  children: [s && a("p", {
    children: s
  }), i("div", {
    className: "flex gap-2",
    children: [a(o, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: l,
      onClick: r,
      label: t
    }), a(o, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: n,
      label: e
    })]
  })]
});
export {
  u as ActionItem,
  A as AiChat,
  C as AiChatProvider,
  b as AiChatTranslationsProvider,
  d as AiFullscreenChat,
  h as HILActionConfirmation,
  g as aiTranslations,
  x as useAiChat,
  y as useAiChatTranslations
};
