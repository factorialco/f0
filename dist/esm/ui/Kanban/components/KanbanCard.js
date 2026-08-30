import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Link as n } from "../../../components/F0Link/F0Link.js";
import { CardInternal as r } from "../../../components/F0Card/CardInternal.js";
import { useDraggable as i } from "../../../lib/dnd/hooks.js";
import { useEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { dropTargetForElements as d } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { attachClosestEdge as f, extractClosestEdge as p } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { DropIndicator as m } from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box";
//#region src/ui/Kanban/components/KanbanCard.tsx
var h = "button, a[href], input, select, textarea, [role=\"button\"], [role=\"checkbox\"], [role=\"menuitem\"], [role=\"option\"], [role=\"radio\"], [role=\"switch\"]", g = (e) => e instanceof HTMLElement && !!e.closest(h);
function _({ drag: h, id: _, index: v, total: y, laneId: b, draggable: x = !1, showIndicator: S = !0, disabledEdges: C = [], forcedEdge: w = null, ...T }) {
	let E = o(null), D = o(null), [O, k] = s(null);
	i({
		ref: E,
		payload: {
			kind: h.type ?? "list-card",
			id: h.id,
			data: h.data
		}
	}), a(() => {
		if (E.current) return d({
			element: E.current,
			getData: ({ input: e, element: t }) => f({
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
				let n = p(e.data);
				k(n === "top" || n === "bottom" ? n : null);
			},
			onDrag: ({ self: e, source: t }) => {
				if (t?.data?.id === _) {
					k(null);
					return;
				}
				let n = p(e.data);
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
	return /* @__PURE__ */ u("div", {
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
			/* @__PURE__ */ l(r, {
				...T,
				disableOverlayLink: x
			}),
			T.link && /* @__PURE__ */ l(n, {
				ref: D,
				href: T.link,
				className: e("!z-1 pointer-events-none absolute inset-0 block rounded-xl", t()),
				"aria-label": T.title,
				children: "\xA0"
			}),
			S && (w ?? O) && /* @__PURE__ */ l(c, { children: (() => {
				let e = w ?? O;
				return C.includes(e) ? null : /* @__PURE__ */ l(m, {
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
