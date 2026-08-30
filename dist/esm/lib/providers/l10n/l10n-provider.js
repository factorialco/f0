"use client";
import { defaults as e } from "./l10n-provider-defaults.js";
import { createContext as t, useContext as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/lib/providers/l10n/l10n-provider.tsx
var i = t(e);
function a({ children: e, l10n: t }) {
	return /* @__PURE__ */ r(i.Provider, {
		value: t,
		children: e
	});
}
function o() {
	let e = n(i);
	if (e === null) throw Error("useL10n must be used within an L10nProvider");
	return e;
}
//#endregion
export { a as L10nProvider, o as useL10n };
