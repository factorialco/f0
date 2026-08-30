import { createContext as e, useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/F0Wizard/components/WizardProvider.tsx
var r = e(null);
function i() {
	let e = t(r);
	if (!e) throw Error("useF0Wizard must be used within a F0Wizard");
	return e;
}
function a({ children: e, ...t }) {
	return /* @__PURE__ */ n(r.Provider, {
		value: t,
		children: e
	});
}
//#endregion
export { r as F0WizardContext, a as WizardProvider, i as useF0Wizard };
