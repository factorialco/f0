import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/patterns/F0AnalyticsDashboard/hooks/useDashboardItemData.ts
function i(i, a, o, s = "") {
	let [c, l] = r(void 0), [u, d] = r(!0), [f, p] = r(void 0), m = n(0), h = n(i);
	h.current = i;
	let g = n(a);
	g.current = a;
	let _ = e(() => {
		let e = ++m.current;
		d(!0), p(void 0);
		let t = o ? g.current : {};
		h.current(t).then((t) => {
			e === m.current && (l(t), d(!1));
		}).catch((t) => {
			e === m.current && (p(t instanceof Error ? t : Error(String(t))), d(!1));
		});
	}, [o]), v = o ? JSON.stringify(a) : "disabled";
	return t(() => {
		_();
	}, [
		v,
		s,
		_
	]), {
		data: c,
		isLoading: u,
		error: f,
		retry: e(() => {
			_();
		}, [_])
	};
}
//#endregion
export { i as useDashboardItemData };
