import { useCallback as e, useEffect as t, useRef as n } from "react";
function r({ onSettled: r }) {
	let i = n(!1), a = n(null), o = n(null), s = n(null), c = n(r);
	c.current = r;
	let l = e(() => {
		o.current = null, i.current && (i.current = !1, c.current());
	}, []), u = e((e) => {
		if (s.current?.disconnect(), s.current = null, o.current != null && (window.clearTimeout(o.current), o.current = null), i.current = !1, a.current = e ? e.clientWidth : null, !e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => {
			let t = e.clientWidth;
			t !== a.current && (a.current = t, i.current = !0, o.current != null && window.clearTimeout(o.current), o.current = window.setTimeout(l, 120));
		});
		t.observe(e), s.current = t;
	}, [l]);
	return t(() => () => {
		s.current?.disconnect(), s.current = null, o.current != null && window.clearTimeout(o.current);
	}, []), {
		observeResize: u,
		resizingRef: i
	};
}
//#endregion
export { r as useTranscriptResizeAnchor };
