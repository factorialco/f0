import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/layouts/LayoutProvider.tsx
var r = e(null);
function i({ children: e, layout: t }) {
	return /* @__PURE__ */ n(r.Provider, {
		value: t,
		children: e
	});
}
function a() {
	return t(r);
}
//#endregion
export { i as LayoutProvider, a as useLayout };
