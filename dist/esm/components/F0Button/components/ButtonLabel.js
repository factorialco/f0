import { cn as e } from "../../../lib/utils.js";
import { useEffect as t, useRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/F0Button/components/ButtonLabel.tsx
function i({ className: i, label: a, onOverflowChange: o }) {
	let s = n(null);
	return t(function() {
		let e = s.current;
		if (!e) return;
		let t = () => {
			o(e.scrollWidth > e.clientWidth);
		};
		t();
		let n = requestAnimationFrame(t), r = setTimeout(t, 100), i = new ResizeObserver(t);
		return i.observe(e), () => {
			cancelAnimationFrame(n), clearTimeout(r), i.disconnect();
		};
	}, [a, o]), /* @__PURE__ */ r("span", {
		ref: s,
		className: e("block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap", i),
		children: a
	});
}
//#endregion
export { i as ButtonLabel };
