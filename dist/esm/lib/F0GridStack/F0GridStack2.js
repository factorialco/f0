import { GridStackProvider as e } from "./components/grid-stack-provider.js";
import { GridStackRender as t } from "./components/grid-stack-render.js";
import { GridStackRenderProvider as n } from "./components/grid-stack-render-provider.js";
import './F0GridStack.css';/* empty css            */
import { useMemo as r } from "react";
import { jsx as i } from "react/jsx-runtime";
import "gridstack/dist/gridstack.css";
//#region src/lib/F0GridStack/F0GridStack.tsx
var a = ({ options: a, widgets: o, onChange: s, className: c, static: l, forcePositionSync: u }) => {
	let d = r(() => JSON.stringify(o.map((e) => ({
		id: e.id,
		w: e.w,
		h: e.h,
		x: e.x,
		y: e.y,
		noMove: e.noMove,
		noResize: e.noResize,
		locked: e.locked,
		content: e.content?.toString() ?? "",
		_originalContent: e._originalContent?.toString() ?? "",
		allowedSizes: e.allowedSizes
	}))), [o]), f = r(() => ({
		...a,
		class: c
	}), [
		a,
		d,
		c
	]), p = (e, t, n) => {
		let r = n[0], i = Infinity;
		for (let a of n) {
			let n = a.w - e, o = a.h - t, s = n * n + o * o;
			s < i && (i = s, r = a);
		}
		return r;
	};
	return /* @__PURE__ */ i(e, {
		options: f,
		widgets: o,
		onResizeStop: (e, t) => {
			let n = t.gridstackNode;
			if (!n) return;
			let r = t.gridstackNode?.allowedSizes ?? [];
			if (r.length === 0) return;
			let i = p(n.w ?? 1, n.h ?? 1, r ?? []);
			(n.w !== i.w || n.h !== i.h) && n.grid?.update(t, {
				w: i.w,
				h: i.h
			});
		},
		onChange: s,
		static: l,
		forcePositionSync: u,
		children: /* @__PURE__ */ i(n, { children: /* @__PURE__ */ i(t, {}) })
	});
};
a.displayName = "F0GridStack";
//#endregion
export { a as F0GridStack };
