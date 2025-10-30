import { n as p, g as h, A, o as x, u as C } from "./index-kIQU8GWL.js";
import { jsxs as o, jsx as a } from "react/jsx-runtime";
import { y as i, av as l } from "./dialog-D3AmLiwa.js";
import { cw as b, A as g, cx as I, bc as T, u as y } from "./dialog-D3AmLiwa.js";
import { d as P } from "./i18n-provider-defaults-CzsArkn4.js";
const u = ({ text: s, confirmationText: t, onConfirm: r, cancelText: e, onCancel: n }) => o("div", {
  className: "flex flex-col gap-2",
  children: [s && a("p", {
    children: s
  }), o("div", {
    className: "flex gap-2",
    children: [a(i, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: l,
      onClick: r,
      label: t
    }), a(i, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: n,
      label: e
    })]
  })]
});
export {
  p as ActionItem,
  h as AiChat,
  A as AiChatProvider,
  b as AiChatTranslationsProvider,
  x as AiFullscreenChat,
  u as HILActionConfirmation,
  g as I18nProvider,
  I as aiTranslations,
  P as defaultTranslations,
  C as useAiChat,
  T as useAiChatTranslations,
  y as useI18n
};
