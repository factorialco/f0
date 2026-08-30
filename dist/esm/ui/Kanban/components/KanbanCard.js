import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Link as n } from "../../../components/F0Link/F0Link.js";
import { CardInternal as r } from "../../../components/F0Card/CardInternal.js";
import { dropTargetForElements as i } from "../../../_embedded/BeMnDuG8.js";
import "../../../_embedded/nR-CGXgB.js";
import { attachClosestEdge as a, extractClosestEdge as o } from "../../../_embedded/Cky57_ZF.js";
import { useDraggable as s } from "../../../lib/dnd/hooks.js";
import { DropIndicator as c } from "../../../_embedded/BjXuHMwL.js";
import { useEffect as l, useRef as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/ui/Kanban/components/KanbanCard.tsx
var h = "button, a[href], input, select, textarea, [role=\"button\"], [role=\"checkbox\"], [role=\"menuitem\"], [role=\"option\"], [role=\"radio\"], [role=\"switch\"]", g = (e) => e instanceof HTMLElement && !!e.closest(h);
function _({ drag: h, id: _, index: v, total: y, laneId: b, draggable: x = !1, showIndicator: S = !0, disabledEdges: C = [], forcedEdge: w = null, ...T }) {
	let E = u(null), D = u(null), [O, k] = d(null);
	s({
		ref: E,
		payload: {
			kind: h.type ?? "list-card",
			id: h.id,
			data: h.data
		}
	}), l(() => {
		if (E.current) return i({
			element: E.current,
			getData: ({ input: e, element: t }) => a({
				type: "list-card-target",
				id: _,
				index: v,
				laneId: b
			}, {
				input: e,
				element: t,
				allowedEdges: ["top", "bottom"]
			}),
			onDragEnter: ({ self: e, source: t }) => {
				if (t?.data?.id === _) {
					k(null);
					return;
				}
				let n = o(e.data);
				k(n === "top" || n === "bottom" ? n : null);
			},
			onDrag: ({ self: e, source: t }) => {
				if (t?.data?.id === _) {
					k(null);
					return;
				}
				let n = o(e.data);
				k(n === "top" || n === "bottom" ? n : null);
			},
			onDragLeave: () => k(null),
			onDrop: () => k(null)
		});
	}, [
		_,
		v,
		b
	]);
	let A = v === 0, j = v === y - 1;
	return /* @__PURE__ */ m("div", {
		ref: E,
		className: e("group relative my-1", x && "cursor-grab active:cursor-grabbing", A && "mt-1.5", j && "mb-1.5"),
		"data-kanban-card": "true",
		"data-index": v,
		"data-lane-id": b,
		onClick: (e) => {
			if (x && !g(e.target)) {
				if (T.onClick) {
					T.onClick(), e.preventDefault(), e.stopPropagation();
					return;
				}
				D.current && (D.current.click(), e.preventDefault(), e.stopPropagation());
			}
		},
		children: [
			/* @__PURE__ */ p(r, {
				...T,
				disableOverlayLink: x
			}),
			T.link && /* @__PURE__ */ p(n, {
				ref: D,
				href: T.link,
				className: e("!z-1 pointer-events-none absolute inset-0 block rounded-xl", t()),
				"aria-label": T.title,
				children: "\xA0"
			}),
			S && (w ?? O) && /* @__PURE__ */ p(f, { children: (() => {
				let e = w ?? O;
				return C.includes(e) ? null : /* @__PURE__ */ p(c, {
					edge: e,
					type: "terminal-no-bleed",
					gap: "4px"
				});
			})() })
		]
	});
}
//#endregion
export { _ as KanbanCard };
