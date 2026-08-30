import { resolveChartTheme as e } from "./theme.js";
import { useCallback as t, useEffect as n, useState as r } from "react";
//#region src/kits/F0DataChart/utils/useChartTheme.ts
function i(e) {
	let t = [], n = e;
	for (; n;) t.push(n), n = n.parentElement;
	return t;
}
function a(a) {
	let [o, s] = r(() => e(a.current)), c = t(() => {
		s(e(a.current));
	}, [a]);
	return n(() => {
		let t = a.current;
		if (!t) return;
		s(e(t));
		let n = new MutationObserver(c);
		for (let e of i(t)) n.observe(e, {
			attributes: !0,
			attributeFilter: ["class"]
		});
		return () => n.disconnect();
	}, [a, c]), o;
}
//#endregion
export { a as useChartTheme };
