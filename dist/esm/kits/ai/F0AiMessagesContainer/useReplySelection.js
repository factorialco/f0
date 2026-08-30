import { useCallback as e, useEffect as t, useState as n } from "react";
//#region src/kits/ai/F0AiMessagesContainer/useReplySelection.ts
var r = 2;
function i(e, t) {
	if (!e.intersectsNode(t)) return null;
	let n = document.createRange();
	n.selectNodeContents(t);
	let i = e.cloneRange();
	i.compareBoundaryPoints(Range.START_TO_START, n) < 0 && i.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(Range.END_TO_END, n) > 0 && i.setEnd(n.endContainer, n.endOffset);
	let a = i.toString().trim();
	if (a.length < r) return null;
	let o = i.getBoundingClientRect();
	return {
		rect: o.width > 0 || o.height > 0 ? o : t.getBoundingClientRect(),
		text: a
	};
}
function a({ containerRef: r, enabled: a = !0 }) {
	let [o, s] = n(null), c = e(() => s(null), []);
	return t(() => {
		if (!a || typeof window > "u") return;
		let e = r.current;
		if (!e) return;
		let t = () => {
			let t = window.getSelection();
			if (!t || t.isCollapsed || t.rangeCount === 0) {
				s(null);
				return;
			}
			s(i(t.getRangeAt(0), e));
		}, n = () => {
			window.setTimeout(t, 0);
		}, o = () => {
			let e = window.getSelection();
			(!e || e.isCollapsed || e.rangeCount === 0) && s(null);
		};
		return document.addEventListener("mouseup", n), document.addEventListener("keyup", n), document.addEventListener("selectionchange", o), () => {
			document.removeEventListener("mouseup", n), document.removeEventListener("keyup", n), document.removeEventListener("selectionchange", o);
		};
	}, [r, a]), {
		anchor: o,
		clear: c
	};
}
//#endregion
export { a as useReplySelection };
