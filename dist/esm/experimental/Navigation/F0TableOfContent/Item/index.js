import { cn as e } from "../../../../lib/utils.js";
import { dropTargetForElements as t } from "../../../../_embedded/BeMnDuG8.js";
import "../../../../_embedded/nR-CGXgB.js";
import { attachClosestEdge as n, extractClosestEdge as r } from "../../../../_embedded/Cky57_ZF.js";
import { useDraggable as i } from "../../../../lib/dnd/hooks.js";
import { PrimitiveItem as a } from "./PrimitiveItem.js";
import { useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { jsx as u } from "react/jsx-runtime";
import { motion as d } from "motion/react";
//#region src/experimental/Navigation/F0TableOfContent/Item/index.tsx
function f({ item: f, counter: p, isActive: m, collapsible: h = !1, isExpanded: g = !1, onToggleExpanded: _ = () => {}, sortable: v, children: y, onDragOver: b, onDragLeave: x, onDrop: S, canDropInside: C = !1, currentParentId: w = null, justDropped: T = !1 }) {
	let [E, D] = l(!1), [O, k] = l(!1), A = c(null), [j, M] = l(null), [N, P] = l(!1), F = c(null), I = s(() => ({
		kind: "toc-item",
		id: f.id,
		data: {
			item: f,
			currentParentId: w
		}
	}), [
		f.id,
		w,
		f
	]);
	return i({
		ref: A,
		payload: I,
		disabled: !v
	}), o(() => {
		if (!(!A.current || !v)) return t({
			element: A.current,
			canDrop: ({ source: e }) => {
				let t = e.data;
				return t.kind === "toc-item" && t.id !== f.id;
			},
			getData: ({ input: e, element: t }) => {
				let r = t.getBoundingClientRect(), i = e.clientY - r.top, a = r.height * .6;
				return C && i > a ? {
					type: "toc-item-target",
					id: f.id,
					position: "inside"
				} : n({
					type: "toc-item-target",
					id: f.id
				}, {
					input: e,
					element: t,
					allowedEdges: ["top", "bottom"]
				});
			},
			onDragEnter: ({ source: e }) => {
				if (e.data.id === f.id) {
					M(null), P(!1), F.current = null;
					return;
				}
			},
			onDrag: ({ self: e, source: t }) => {
				if (t.data.id === f.id) {
					M(null), P(!1), F.current = null;
					return;
				}
				let n = e.data, i = r(e.data);
				if (n.position === "inside") {
					let e = F.current;
					(!e || !e.isInside || e.edge !== null) && (P(!0), M(null), F.current = {
						edge: null,
						isInside: !0
					}, b?.(f.id, "inside"));
				} else if (i && (i === "top" || i === "bottom")) {
					let e = i === "top" ? "before" : "after", t = F.current;
					!t || t.edge !== i || t.isInside !== !1 ? (M(i), P(!1), F.current = {
						edge: i,
						isInside: !1,
						lastReportTime: Date.now()
					}, b?.(f.id, e)) : Date.now() - (t.lastReportTime || 0) > 50 && (b?.(f.id, e), F.current = {
						...t,
						lastReportTime: Date.now()
					});
				} else if (!i) {
					let e = F.current;
					if (e?.edge) {
						let t = e.edge === "top" ? "before" : "after";
						Date.now() - (e.lastReportTime || 0) > 50 && (b?.(f.id, t), F.current = {
							...e,
							lastReportTime: Date.now()
						});
					}
				}
			},
			onDragLeave: () => {
				x?.();
			},
			onDrop: ({ self: e }) => {
				let t = e.data, n = "after";
				n = t.position === "inside" ? "inside" : r(e.data) === "top" ? "before" : "after", M(null), P(!1), S && S(f.id, n);
			}
		});
	}, [
		f.id,
		v,
		C,
		b,
		x,
		S
	]), /* @__PURE__ */ u(d.div, {
		ref: A,
		className: e("relative rounded-lg transition-colors", v && "cursor-grab active:cursor-grabbing", j === "top" && "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5", j === "bottom" && "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5", N && C && "bg-f1-background-hover/30", T && "bg-f1-background-selected"),
		animate: {},
		transition: { duration: 0 },
		children: /* @__PURE__ */ u(a, {
			item: f,
			counter: p,
			isActive: m,
			sortable: v,
			collapsible: h,
			isExpanded: g,
			onToggleExpanded: _,
			open: E,
			setOpen: D,
			isHovered: O,
			setIsHovered: k,
			children: y
		})
	});
}
//#endregion
export { f as Item };
