import { useF0GraphZoomInternal as e } from "../../contexts.js";
import { memo as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
import { BaseEdge as a, getBezierPath as o, getSmoothStepPath as s, getStraightPath as c } from "@xyflow/react";
//#region src/patterns/F0Graph/components/F0GraphEdge/F0GraphEdge.tsx
var l = {
	default: "var(--f0-graph-edge-default)",
	hover: "var(--f0-graph-edge-hover)",
	highlighted: "var(--f0-graph-edge-highlighted)",
	dimmed: "var(--f0-graph-edge-default)"
}, u = "f0-edge-dot", d = 5, f = {
	smoothstep: s,
	straight: c,
	bezier: o
};
function p({ variant: t, strokeWidth: o = 1, pathType: s, type: p, ...m }) {
	let h = m.data?.variant, g = t ?? h ?? "default", _ = e(), v = (_ ? _.zoomLevel === "detail" ? 1 : _.zoomLevel === "compact" ? 2 : 4 : void 0) ?? m.style?.strokeWidth ?? o, y = m.data?.showDot !== !1, b = s ?? m.data?.pathType ?? "smoothstep", [x] = ((m.sourcePosition === "bottom" || m.sourcePosition === "top" ? Math.abs(m.sourceX - m.targetX) : Math.abs(m.sourceY - m.targetY)) < 2 ? c : f[b] ?? f.smoothstep)({
		sourceX: m.sourceX,
		sourceY: m.sourceY,
		targetX: m.targetX,
		targetY: m.targetY,
		sourcePosition: m.sourcePosition,
		targetPosition: m.targetPosition,
		borderRadius: 10
	}), S = l[g];
	return /* @__PURE__ */ i(n, { children: [y && /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ r("marker", {
		id: `${u}-${m.id}`,
		viewBox: "0 0 10 10",
		refX: d,
		refY: d,
		markerWidth: d,
		markerHeight: d,
		children: /* @__PURE__ */ r("circle", {
			cx: d,
			cy: d,
			r: d * .8,
			fill: S
		})
	}) }), /* @__PURE__ */ r(a, {
		id: m.id,
		path: x,
		markerEnd: y ? `url(#${u}-${m.id})` : void 0,
		style: {
			stroke: S,
			strokeWidth: v,
			opacity: g === "dimmed" ? .5 : void 0
		}
	})] });
}
p.displayName = "F0GraphEdge";
var m = t(p, (e, t) => e.id === t.id && e.variant === t.variant && e.strokeWidth === t.strokeWidth && e.data?.variant === t.data?.variant && e.data?.showDot === t.data?.showDot && e.data?.pathType === t.data?.pathType && e.style?.strokeWidth === t.style?.strokeWidth && e.sourceX === t.sourceX && e.sourceY === t.sourceY && e.targetX === t.targetX && e.targetY === t.targetY && e.sourcePosition === t.sourcePosition && e.targetPosition === t.targetPosition);
m.displayName = "F0GraphEdge";
//#endregion
export { m as F0GraphEdge, p as F0GraphEdgeBase };
