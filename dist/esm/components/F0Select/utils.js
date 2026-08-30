import { useCallback as e, useLayoutEffect as t, useRef as n, useState as r } from "react";
function i(e, t) {
	return e.textContent = t, e.offsetWidth;
}
function a(a) {
	let o = n(null), [s, c] = r(!0), l = e(() => {
		let e = o.current;
		if (!e || a.length === 0) {
			c(!0);
			return;
		}
		let t = e.offsetWidth;
		if (t === 0) {
			c(!0);
			return;
		}
		let n = document.createElement("span");
		n.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font:inherit;", e.appendChild(n);
		let r = i(n, ", "), s = 0;
		for (let o = 0; o < a.length; o++) {
			let l = i(n, a[o]);
			if (s += o === 0 ? l : r + l, s > t) {
				e.removeChild(n), c(!1);
				return;
			}
		}
		e.removeChild(n), c(!0);
	}, [a]);
	return t(() => {
		l();
		let e = o.current;
		if (!e) return;
		let t = new ResizeObserver(() => {
			l();
		});
		return t.observe(e), () => {
			t.disconnect();
		};
	}, [l]), {
		allFit: s,
		containerRef: o
	};
}
//#endregion
export { a as useLabelsOverflow };
