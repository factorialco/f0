import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/patterns/F0Map/hooks/useIsDarkContext.ts
var i = () => {
	let [i, a] = r(!1), o = n(null), s = e((e) => {
		if (o.current?.disconnect(), o.current = null, !e) return;
		let t = () => a(e.closest(".dark") !== null);
		t();
		let n = new MutationObserver(t);
		for (let t = e; t; t = t.parentElement) n.observe(t, {
			attributes: !0,
			attributeFilter: ["class"]
		});
		o.current = n;
	}, []);
	return t(() => () => o.current?.disconnect(), []), {
		containerRef: s,
		isDark: i
	};
};
//#endregion
export { i as useIsDarkContext };
