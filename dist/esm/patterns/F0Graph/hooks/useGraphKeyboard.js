import { FIT_VIEW_PADDING_LOOSE as e, FIT_VIEW_PADDING_TIGHT as t } from "../constants.js";
import { useCallback as n, useEffect as r, useRef as i } from "react";
import { useReactFlow as a } from "@xyflow/react";
//#region src/patterns/F0Graph/hooks/useGraphKeyboard.ts
function o({ nodeMap: o, clearSelection: s, toggleExpand: c, selectNode: l, focusedNodeIdRef: u, setFocusedNodeId: d, flatVisibleOrderRef: f, expandedNodesRef: p, nodeRefsMapRef: m }) {
	let h = a(), g = i(o);
	return r(() => {
		g.current = o;
	}, [o]), {
		handleTreeKeyDown: n((n) => {
			if (n.key === "Escape") {
				n.stopPropagation(), s();
				return;
			}
			let r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			switch (n.key) {
				case "+":
				case "=":
					n.preventDefault(), h.zoomIn({ duration: r ? 0 : 300 });
					return;
				case "-":
					n.preventDefault(), h.zoomOut({ duration: r ? 0 : 300 });
					return;
				case "0":
					n.preventDefault(), h.fitView({
						duration: r ? 0 : 400,
						padding: t
					});
					return;
			}
			let i = u.current;
			if (!i) return;
			let a = f.current, o = a.indexOf(i);
			if (o === -1) return;
			let _ = null;
			switch (n.key) {
				case "ArrowDown":
					n.preventDefault(), n.stopPropagation(), o < a.length - 1 && (_ = a[o + 1]);
					break;
				case "ArrowUp":
					n.preventDefault(), n.stopPropagation(), o > 0 && (_ = a[o - 1]);
					break;
				case "ArrowRight": {
					n.preventDefault(), n.stopPropagation();
					let e = g.current.get(i);
					e !== void 0 && (e.children.length > 0 || e.childrenCount > 0) && (p.current.has(i) ? o < a.length - 1 && (_ = a[o + 1]) : c(i));
					break;
				}
				case "ArrowLeft": {
					n.preventDefault(), n.stopPropagation();
					let e = g.current.get(i), t = e !== void 0 && (e.children.length > 0 || e.childrenCount > 0);
					e && p.current.has(i) && t ? c(i) : e?.parentId && (_ = e.parentId);
					break;
				}
				case "Home":
					n.preventDefault(), n.stopPropagation(), a.length > 0 && (_ = a[0]);
					break;
				case "End":
					n.preventDefault(), n.stopPropagation(), a.length > 0 && (_ = a[a.length - 1]);
					break;
				case "Enter":
				case " ":
					n.preventDefault(), n.stopPropagation(), i.startsWith("expander-") || i.startsWith("collapser-") ? c(i.replace(/^(expander|collapser)-/, "")) : l(i);
					break;
				default: return;
			}
			if (_) {
				u.current = _, d(_);
				let t = m.current.get(_);
				if (t) {
					t.focus();
					let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
					h.fitView({
						nodes: [{ id: _.replace(/^(expander|collapser)-/, "") }],
						duration: n ? 0 : 300,
						padding: e
					});
				}
			}
		}, [
			s,
			c,
			l,
			h,
			u,
			f,
			p,
			m,
			d
		]),
		handleCanvasKeyDown: n((e) => {
			if (e.target !== e.currentTarget) return;
			let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches, r = n ? 0 : 200, i = e.shiftKey ? 200 : 50;
			switch (e.key) {
				case "ArrowUp":
					e.preventDefault();
					{
						let e = h.getViewport();
						h.setViewport({
							x: e.x,
							y: e.y + i,
							zoom: e.zoom
						}, { duration: r });
					}
					break;
				case "ArrowDown":
					e.preventDefault();
					{
						let e = h.getViewport();
						h.setViewport({
							x: e.x,
							y: e.y - i,
							zoom: e.zoom
						}, { duration: r });
					}
					break;
				case "ArrowLeft":
					e.preventDefault();
					{
						let e = h.getViewport();
						h.setViewport({
							x: e.x + i,
							y: e.y,
							zoom: e.zoom
						}, { duration: r });
					}
					break;
				case "ArrowRight":
					e.preventDefault();
					{
						let e = h.getViewport();
						h.setViewport({
							x: e.x - i,
							y: e.y,
							zoom: e.zoom
						}, { duration: r });
					}
					break;
				case "+":
				case "=":
					e.preventDefault(), h.zoomIn({ duration: n ? 0 : 300 });
					break;
				case "-":
					e.preventDefault(), h.zoomOut({ duration: n ? 0 : 300 });
					break;
				case "0":
					e.preventDefault(), h.fitView({
						duration: n ? 0 : 400,
						padding: t
					});
					break;
				default: return;
			}
		}, [h])
	};
}
//#endregion
export { o as useGraphKeyboard };
