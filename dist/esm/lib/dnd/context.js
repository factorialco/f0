import { createContext as e, useContext as t, useMemo as n, useRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/lib/dnd/context.tsx
var a = e(null);
function o() {
	return t(a);
}
function s({ driver: e, children: t }) {
	let o = r(e), s = n(() => ({ driver: o.current }), []);
	return /* @__PURE__ */ i(a.Provider, {
		value: s,
		children: t
	});
}
//#endregion
export { s as DndProvider, o as useDndContextOptional };
