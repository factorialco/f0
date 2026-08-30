import { readFromLocalStorage as e, writeToLocalStorage as t } from "../../../../lib/local-storage.js";
import { useEffect as n, useState as r } from "react";
//#region src/kits/ai/F0AiChat/providers/usePersistedState.ts
function i(i, a, o, s, c = 0) {
	let [l, u] = r(() => {
		if (typeof window > "u") return a;
		let t = e(i, null);
		return t === null || o && !o(t) ? a : t;
	});
	return n(() => {
		if (typeof window > "u" || s && !s(l)) return;
		if (c <= 0) {
			t(i, l);
			return;
		}
		let e = window.setTimeout(() => t(i, l), c);
		return () => window.clearTimeout(e);
	}, [
		i,
		l,
		s,
		c
	]), [l, u];
}
//#endregion
export { i as usePersistedState };
