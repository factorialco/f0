import { collectVisibleNodes as e } from "../utils.js";
import { useCallback as t, useEffect as n, useMemo as r, useRef as i, useState as a } from "react";
//#region src/patterns/F0Graph/hooks/useSelectionFocus.ts
function o({ roots: o, expandedNodes: s, selectionMode: c, controlledSelected: l, onNodeSelect: u, onSelectedNodesChange: d, canvasRef: f }) {
	let [p, m] = a(/* @__PURE__ */ new Set()), h = l ?? p, g = l !== void 0, _ = i(h);
	n(() => {
		_.current = h;
	}, [h]);
	let [v, y] = a(() => {
		let t = e(o, s);
		return t.length > 0 ? t[0].id : null;
	}), b = i(v);
	n(() => {
		b.current = v;
	}, [v]);
	let x = i(/* @__PURE__ */ new Map()), S = t((e, t) => {
		t ? x.current.set(e, t) : x.current.delete(e);
	}, []), C = r(() => {
		let e = [];
		function t(n) {
			for (let r of n) e.push(r.id), s.has(r.id) && r.children.length > 0 ? (t(r.children), e.push(`collapser-${r.id}`)) : r.childrenCount > 0 && e.push(`expander-${r.id}`);
		}
		for (let e of o) t([e]);
		return e;
	}, [o, s]), w = r(() => new Set(C), [C]), T = i(C);
	return n(() => {
		T.current = C;
	}, [C]), n(() => {
		if (C.length !== 0 && (v === null || !w.has(v))) {
			let e = v === null ? C.find((e) => h.has(e)) : void 0;
			y(e ?? C[0]);
		}
	}, [
		C,
		v,
		h,
		w
	]), {
		selectedNodes: h,
		focusedNodeId: v,
		setFocusedNodeId: y,
		focusedNodeIdRef: b,
		registerNodeRef: S,
		nodeRefsMapRef: x,
		flatVisibleOrderRef: T,
		selectNode: t((e) => {
			if (b.current = e, y(e), c !== "none") {
				let t = _.current;
				if (!t.has(e)) {
					let n = c === "single" ? /* @__PURE__ */ new Set([e]) : /* @__PURE__ */ new Set([...t, e]);
					g || m(n), u?.(e, !0), d?.(n);
				}
			}
		}, [
			c,
			g,
			u,
			d
		]),
		clearSelection: t(() => {
			let e = _.current;
			g || m(/* @__PURE__ */ new Set()), e.size > 0 && d?.(/* @__PURE__ */ new Set()), y(null), f.current?.focus();
		}, [
			g,
			d,
			f
		])
	};
}
//#endregion
export { o as useSelectionFocus };
