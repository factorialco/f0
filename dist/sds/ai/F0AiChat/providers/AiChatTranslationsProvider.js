import { jsx as o } from "react/jsx-runtime";
import { createContext as i, useContext as e } from "react";
const n = i(null);
function u({
  children: t,
  translations: r
}) {
  return /* @__PURE__ */ o(n.Provider, { value: r, children: t });
}
function l() {
  const t = e(n);
  if (t === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return t;
}
export {
  u as AiChatTranslationsProvider,
  l as useAiChatTranslations
};
