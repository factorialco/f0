import { useCallback as e } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/useSticky.ts
var t = (t, n, r) => {
	let i = r ? 56 : 0;
	return {
		getStickyPosition: e((e) => e < t && n.length > 1 ? { left: n.slice(0, Math.max(0, e)).reduce((e, t) => e + (t.width ?? t.minWidth ?? 0), i) } : void 0, [
			t,
			n,
			i
		]),
		checkColumnWidth: i
	};
};
//#endregion
export { t as useSticky };
