import { createContext as e, useContext as t } from "react";
//#region src/ui/Select/SelectContext.tsx
var n = e({
	value: "",
	open: !1,
	multiple: !1
}), r = () => t(n);
//#endregion
export { n as SelectContext, r as useSelectContext };
