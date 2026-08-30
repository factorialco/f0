"use client";
import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/context/AddRowContext.tsx
var r = e(null);
function i({ addRowActions: e, addRowActionsLabel: t, addNestedRowActions: i, addNestedRowActionsLabel: a, children: o }) {
	return /* @__PURE__ */ n(r.Provider, {
		value: {
			addRowActions: e,
			addRowActionsLabel: t,
			addNestedRowActions: i,
			addNestedRowActionsLabel: a
		},
		children: o
	});
}
function a() {
	return t(r);
}
//#endregion
export { i as AddRowProvider, a as useAddRow };
