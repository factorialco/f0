import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/providers/AiChatTranslationsProvider.tsx
var r = e(null);
function i({ children: e, translations: t }) {
	return /* @__PURE__ */ n(r.Provider, {
		value: t,
		children: e
	});
}
function a() {
	let e = t(r);
	if (e === null) throw Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
	return e;
}
//#endregion
export { i as AiChatTranslationsProvider, a as useAiChatTranslations };
