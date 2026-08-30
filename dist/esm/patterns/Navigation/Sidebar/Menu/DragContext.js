import { createContext as e, useContext as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Menu/DragContext.tsx
var i = e(void 0);
function a({ children: e }) {
	let [t, a] = n(!1), [o, s] = n(null);
	return /* @__PURE__ */ r(i.Provider, {
		value: {
			isDragging: t,
			setIsDragging: a,
			draggedItemId: o,
			setDraggedItemId: s
		},
		children: e
	});
}
function o() {
	let e = t(i);
	if (!e) throw Error("useDragContext must be used within a DragProvider");
	return e;
}
//#endregion
export { a as DragProvider, o as useDragContext };
