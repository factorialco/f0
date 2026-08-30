"use client";
import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/providers/ChatSurfaceProvider.tsx
var r = e("transcript"), i = ({ surface: e, children: t }) => /* @__PURE__ */ n(r.Provider, {
	value: e,
	children: t
});
function a() {
	return t(r);
}
//#endregion
export { i as ChatSurfaceProvider, a as useChatSurface };
