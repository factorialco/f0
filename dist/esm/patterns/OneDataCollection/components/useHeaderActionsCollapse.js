import { useCallback as e, useRef as t, useState as n } from "react";
import { useResizeObserver as r } from "usehooks-ts";
//#region src/patterns/OneDataCollection/components/useHeaderActionsCollapse.ts
var i = 16;
function a(a, o, s) {
	let [c, l] = n(!1), u = t(!1), d = t(0), f = e(() => {
		let e = a.current, t = o.current;
		if (!e || !t) return;
		u.current || (d.current = t.scrollWidth);
		let n = getComputedStyle(e), r = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), c = s?.current?.offsetWidth ?? 0, f = e.clientWidth - r - (c > 0 ? c + i : 0), p = d.current > f;
		p !== u.current && (u.current = p, l(p));
	}, [
		a,
		o,
		s
	]);
	return r({
		ref: a,
		onResize: f
	}), r({
		ref: o,
		onResize: f
	}), c;
}
//#endregion
export { a as useHeaderActionsCollapse };
