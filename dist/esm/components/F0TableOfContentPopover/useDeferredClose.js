import { useCallback as e, useEffect as t, useRef as n } from "react";
//#region src/components/F0TableOfContentPopover/useDeferredClose.ts
var r = "[role='menu']";
function i(i, a) {
	let o = n(null), s = e(() => {
		o.current?.(), o.current = null;
	}, []);
	return t(() => s, [s]), { deferClose: e(() => {
		if (!document.querySelector(r)) return !1;
		s();
		let e = () => {
			n.disconnect(), document.removeEventListener("pointermove", c), o.current = null;
		}, t = () => {
			e(), a();
		}, n = new MutationObserver(() => {
			document.querySelector(r) || t();
		});
		n.observe(document.body, {
			childList: !0,
			subtree: !0
		});
		let c = (e) => {
			let n = e.target;
			!n.closest(r) && !i.current?.contains(n) && t();
		};
		return document.addEventListener("pointermove", c), o.current = e, !0;
	}, [
		i,
		a,
		s
	]) };
}
//#endregion
export { i as useDeferredClose };
