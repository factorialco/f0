import { createContext as e, forwardRef as t, useContext as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/lib/imageHandler.tsx
var i = e(void 0), a = ({ children: e, ...t }) => /* @__PURE__ */ r(i.Provider, {
	value: t,
	children: e
}), o = () => ({ ...n(i) }), s = t(function(e, t) {
	let { src: n } = o();
	if (!n) return /* @__PURE__ */ r("img", {
		ref: t,
		...e
	});
	let i = n(e);
	return /* @__PURE__ */ r("img", {
		ref: t,
		...e,
		...i
	});
});
//#endregion
export { s as Image, a as ImageProvider, o as useImageContext };
