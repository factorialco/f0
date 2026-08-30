import { createContext as e, useContext as t, useMemo as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/providers/ChatRenderConfigProvider.tsx
var i = e({ reducedMotion: !1 }), a = ({ children: e, reducedMotion: t }) => {
	let a = n(() => ({ reducedMotion: t }), [t]);
	return /* @__PURE__ */ r(i.Provider, {
		value: a,
		children: e
	});
}, o = () => t(i);
//#endregion
export { a as ChatRenderConfigProvider, o as useChatRenderConfig };
