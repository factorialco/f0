import { useCallback as e, useState as t } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/hooks/useInputTextWidth.ts
var n = null;
function r(e, t) {
	n ||= document.createElement("canvas");
	let r = n.getContext("2d");
	return r ? (r.font = t, Math.ceil(r.measureText(e).width)) : 0;
}
function i(n, i = 26, a = 48) {
	let [o, s] = t(null);
	return {
		ref: e((e) => {
			if (e) {
				let t = e.querySelector("input");
				t && s(getComputedStyle(t).font);
			}
		}, []),
		width: o ? Math.max(r(n || "\xA0", o) + i, a) : void 0
	};
}
//#endregion
export { i as useInputTextWidth };
