import { createAtlaskitDriver as e } from "../../../../../lib/dnd/atlaskitDriver.js";
import { DndProvider as t } from "../../../../../lib/dnd/context.js";
import { Kanban as n } from "../../../../../ui/Kanban/Kanban.js";
import { useMemo as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Kanban/KanbanBoard.tsx
var o = ({ lanes: o, renderCard: s, getKey: c, onCreate: l, onMove: u, idProvider: d, allowReorder: f, loading: p, heightMode: m }) => {
	let [h] = i(() => Symbol("kanban-visualization")), g = r(() => {
		let e = /* @__PURE__ */ new Map();
		return o.forEach((t) => {
			let n = /* @__PURE__ */ new Map();
			t.items.forEach((e, t) => {
				let r = d ? d(e, t) : e?.id ?? t;
				n.set(String(r), t);
			}), e.set(String(t.id), n);
		}), e;
	}, [o, d]), _ = r(() => ({
		instanceId: h,
		getIndexById: (e, t) => {
			let n = g.get(e)?.get(t) ?? -1;
			return f ? n : -1;
		},
		onMove: u
	}), [
		h,
		g,
		f,
		u
	]), v = r(() => ({
		lanes: o,
		loading: p,
		getKey: c,
		renderCard: s,
		onCreate: l,
		dnd: _,
		heightMode: m
	}), [
		o,
		p,
		c,
		s,
		l,
		_,
		m
	]);
	return u ? /* @__PURE__ */ a(t, {
		driver: e(h),
		children: /* @__PURE__ */ a(n, { ...v })
	}) : /* @__PURE__ */ a(n, { ...v });
};
//#endregion
export { o as KanbanBoard };
