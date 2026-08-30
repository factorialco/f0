import { useCallback as e, useRef as t, useState as n } from "react";
//#region src/sds/chat/F0Chat/hooks/useMountOnVisible.ts
var r = () => {
	let [r, i] = n(() => typeof IntersectionObserver > "u"), a = t(null), o = t(r);
	return {
		ref: e((e) => {
			if (a.current?.disconnect(), a.current = null, !e || o.current || typeof IntersectionObserver > "u") return;
			let t = new IntersectionObserver((e) => {
				e.some((e) => e.isIntersecting) && (o.current = !0, t.disconnect(), a.current = null, i(!0));
			});
			t.observe(e), a.current = t;
		}, []),
		shouldMount: r
	};
};
//#endregion
export { r as useMountOnVisible };
