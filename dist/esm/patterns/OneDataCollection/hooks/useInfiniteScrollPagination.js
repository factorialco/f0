import { isInfiniteScrollPagination as e } from "../../../hooks/datasource/useData.js";
import { useEffect as t, useRef as n } from "react";
//#region src/patterns/OneDataCollection/hooks/useInfiniteScrollPagination.ts
var r = (r, i, a, o) => {
	let s = n(null);
	return t(() => {
		if (!e(r) || !r.hasMore) return;
		let t = s.current;
		if (!t) return;
		let n = new IntersectionObserver((e) => {
			e[0].isIntersecting && !i && !a && o();
		}, {
			root: null,
			rootMargin: "200px",
			threshold: .1
		});
		return n.observe(t), () => {
			n.disconnect();
		};
	}, [
		r,
		a,
		o,
		i
	]), { loadingIndicatorRef: s };
};
//#endregion
export { r as useInfiniteScrollPagination };
