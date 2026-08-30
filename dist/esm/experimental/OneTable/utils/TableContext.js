import { createContext as e, useContext as t } from "react";
//#region src/experimental/OneTable/utils/TableContext.tsx
var n = e(void 0);
function r() {
	let e = t(n);
	if (!e) throw Error("useTable must be used within a TableProvider");
	return e;
}
//#endregion
export { n as TableContext, r as useTable };
