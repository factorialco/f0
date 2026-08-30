import { Children as e, isValidElement as t } from "react";
//#region src/layouts/Layout/internal/utils.ts
var n = (e) => !t(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutBlock" in e.type, r = (e) => !t(e) || !e.type || typeof e.type == "string" || typeof e.type == "symbol" ? !1 : "__isPageLayoutGroup" in e.type, i = (t, i, a) => {
	let o = e.toArray(i);
	for (let e of o) a.includes("block") && n(e) || a.includes("group") && r(e) || console.warn(`${t}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`, e);
};
//#endregion
export { n as isPageLayoutBlockComponent, r as isPageLayoutGroupComponent, i as validLayoutChildrenGuard };
