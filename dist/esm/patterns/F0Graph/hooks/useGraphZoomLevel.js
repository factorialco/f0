import { zoomPresets as e } from "../types.js";
import { useEffect as t, useMemo as n, useRef as r } from "react";
//#region src/patterns/F0Graph/hooks/useGraphZoomLevel.ts
var i = .05;
function a(a, c) {
	let l = r("detail"), u = n(() => {
		if (c?.thresholds) return c.thresholds;
		let t = c?.preset ?? "default";
		return { ...e[t] };
	}, [c?.thresholds, c?.preset]), d = c?.hysteresis ?? i, f = n(() => {
		let e = l.current, t = u, n = o(a, t);
		return s(a, t, e, d) === e ? e : n;
	}, [
		a,
		u,
		d
	]);
	return t(() => {
		l.current = f;
	}, [f]), f;
}
function o(e, t) {
	return e >= t.detail ? "detail" : e >= t.compact ? "compact" : "dot";
}
function s(e, t, n, r) {
	let i = r;
	switch (n) {
		case "detail": return e >= t.detail - i ? "detail" : o(e, t);
		case "compact": return e >= t.detail + i ? "detail" : e >= t.compact - i ? "compact" : o(e, t);
		case "dot": return e >= t.compact + i ? "compact" : "dot";
	}
}
//#endregion
export { a as useGraphZoomLevel };
