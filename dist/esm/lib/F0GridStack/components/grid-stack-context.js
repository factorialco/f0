import { createContext as e, useContext as t } from "react";
//#region src/lib/F0GridStack/components/grid-stack-context.ts
var n = e(null);
function r() {
	let e = t(n);
	if (!e) throw Error("useGridStackContext must be used within a GridStackProvider");
	return e;
}
//#endregion
export { n as GridStackContext, r as useGridStackContext };
