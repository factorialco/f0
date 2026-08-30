import { cn as e } from "../../../../lib/utils.js";
import { SortableBlock as t } from "./components/SortableBlock.js";
import { useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useDeepCompareEffect as a } from "@reactuses/core";
import { DndContext as o, DragOverlay as s, KeyboardSensor as c, PointerSensor as l, useSensor as u, useSensors as d } from "@dnd-kit/core";
import { SortableContext as f, arrayMove as p, sortableKeyboardCoordinates as m } from "@dnd-kit/sortable";
//#region src/layouts/Layout/groups/GroupMasonry/GroupMasonry.tsx
var h = ({ blocks: h, sortable: g = !1, onSort: _ = () => {}, main: v = !1 }) => {
	let [y, b] = n([]);
	a(() => {
		b(h.map((e, t) => ({
			id: e.id ?? t.toString(),
			render: e.render
		})));
	}, [h]);
	let [x, S] = n(null), C = d(u(l), u(c, { coordinateGetter: m }));
	return /* @__PURE__ */ r("div", {
		className: e("flex flex-wrap items-stretch gap-4", v && "flex-1"),
		children: /* @__PURE__ */ i(o, {
			sensors: C,
			onDragStart: (e) => {
				S(e.active.id);
			},
			onDragEnd: (e) => {
				let { active: t, over: n } = e;
				S(null), n && t.id !== n.id && b((e) => {
					let r = e.findIndex((e) => e.id === t.id), i = e.findIndex((e) => e.id === n.id);
					return p(e, r, i);
				});
			},
			children: [/* @__PURE__ */ r(f, {
				items: y,
				children: y.map((e) => /* @__PURE__ */ r(t, {
					id: e.id,
					children: e.render
				}, e.id))
			}), /* @__PURE__ */ r(s, { children: x ? /* @__PURE__ */ r(t, {
				id: x,
				children: y.find((e) => e.id === x)?.render
			}) : null })]
		})
	});
};
h.displayName = "GroupMasonry", h.__isPageLayoutGroup = !0;
//#endregion
export { h as GroupMasonry };
