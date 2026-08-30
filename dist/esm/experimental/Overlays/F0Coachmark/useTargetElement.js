import { useEffect as e, useRef as t, useState as n } from "react";
//#region src/experimental/Overlays/F0Coachmark/useTargetElement.ts
var r = process.env.NODE_ENV !== "production", i = (e) => {
	if (typeof e != "string") return e.isConnected ? e : null;
	let t = document.querySelectorAll(e);
	return r && t.length > 1 && console.warn(`[f0] coachmarks: the selector "${e}" matched ${t.length} elements. Anchoring to the first one — use a selector that matches exactly one.`), t[0] ?? null;
}, a = (a) => {
	let [o, s] = n(null), c = t(null);
	return e(() => {
		let e = (e) => {
			e !== c.current && (c.current = e, s(e));
		};
		if (a === void 0 || typeof document > "u") {
			e(null);
			return;
		}
		e(i(a)), r && c.current === null && typeof a == "string" && console.warn(`[f0] coachmarks: no element matches the selector "${a}" yet. The coachmark will show as soon as one does.`);
		let t = new MutationObserver(() => e(i(a)));
		return t.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => t.disconnect();
	}, [a]), o;
};
//#endregion
export { a as useTargetElement };
