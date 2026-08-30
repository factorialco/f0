import { createContext as e, useContext as t } from "react";
//#region src/patterns/F0Form/formRendererContext.tsx
var n = e(void 0), r = n.Provider;
function i() {
	let e = t(n);
	if (!e) throw Error("F0Form fields must be rendered inside F0Form");
	return e;
}
//#endregion
export { r as F0FormRendererProvider, i as useF0FormRenderer };
