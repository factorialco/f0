import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Minimize.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
import { COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM as i, STACKED_RANK_SEP_RATIO as a } from "../constants.js";
import { useF0GraphActionsInternal as o, useF0GraphExpandInternal as s, useF0GraphFocusInternal as c, useF0GraphRenderConfigInternal as l, useF0GraphSelectionInternal as u, useF0GraphStackHoverInternal as d, useF0GraphZoomInternal as f } from "../contexts.js";
import { F0GraphExpander as p } from "../components/F0GraphExpander/F0GraphExpander.js";
import { memo as m } from "react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
import { Handle as v, Position as y } from "@xyflow/react";
//#region src/patterns/F0Graph/internal/ReactFlowAdapters.tsx
var b = 3, x = (e) => e === y.Bottom || e === y.Top ? { transform: `translate(-${b}px, 0px)` } : void 0;
function S(e) {
	switch (e) {
		case "BT": return {
			source: y.Top,
			target: y.Bottom
		};
		case "LR": return {
			source: y.Right,
			target: y.Left
		};
		case "RL": return {
			source: y.Left,
			target: y.Right
		};
		default: return {
			source: y.Bottom,
			target: y.Top
		};
	}
}
var C = 32, w = {
	detail: (130 - C) / 2,
	compact: (130 - C) / 2,
	dot: (130 - C) / 2
}, T = 130 * a, E = {
	detail: (T - C) / 2,
	compact: (T - C) / 2,
	dot: (T - C) / 2
}, D = (e) => Math.max(0, Math.floor(T - (E[e] + i[e])));
function O({ data: e, id: t }) {
	let n = f(), r = s(), i = u(), a = o(), d = c(), p = l();
	if (!n || !r || !i || !a) return null;
	let { zoomLevel: m } = n, { expandedNodes: y } = r, { selectedNodes: b, highlightedNodes: C } = i, { toggleExpand: w, selectNode: T } = a, { graphNode: E, renderNode: D, ariaLevel: O, ariaSetSize: k, ariaPosInSet: A, visibleChildIds: j, stacked: M } = e, { source: N, target: P } = S(n.direction), F = y.has(t), I = b.has(t), L = C.has(t), R = I ? "selected" : L ? "highlighted" : "default", z = m === "dot" ? "dot" : m === "compact" ? "compact" : "detail", B = (E.childrenCount ?? 0) > 0, V = d?.focusedNodeId === t, H = d ? (e) => d.registerNodeRef(t, e) : () => {}, U = F && j && j.length > 0 ? j.map((e) => `f0-graph-node-${e}`).join(" ") : void 0, W = {
		zoomLevel: m,
		variant: z,
		state: R,
		expanded: F,
		hasChildren: B,
		childrenCount: E.childrenCount,
		level: O,
		tabIndex: V ? 0 : -1,
		setSize: k,
		posInSet: A,
		nodeId: t,
		ariaOwns: U,
		stacked: M ?? !1,
		stackedHeight: p?.stackedNodeHeight,
		onExpandToggle: () => w(t),
		onClick: () => T(t),
		nodeRef: H,
		visibleTagTypes: p?.visibleTagTypes,
		deferredLoading: p?.deferredLoading,
		dataLoading: p?.dataLoadingEnabled ? E.dataLoaded === !1 : void 0
	};
	return /* @__PURE__ */ _(h, { children: [
		/* @__PURE__ */ g(v, {
			type: "target",
			position: P,
			className: "!invisible",
			style: M ? x(P) : void 0
		}),
		/* @__PURE__ */ g("div", {
			className: "pointer-events-none flex items-start justify-center",
			style: { width: "100%" },
			children: /* @__PURE__ */ g("div", {
				className: "pointer-events-auto",
				style: {
					width: M ? "100%" : void 0,
					maxWidth: M ? void 0 : "calc(100% - 20px)"
				},
				children: D(E, W)
			})
		}),
		/* @__PURE__ */ g(v, {
			type: "source",
			position: N,
			className: "!invisible",
			style: M ? x(N) : void 0
		})
	] });
}
O.displayName = "F0GraphNodeWrapper";
var k = m(O, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.graphNode === r.graphNode && n.ariaLevel === r.ariaLevel && n.ariaSetSize === r.ariaSetSize && n.ariaPosInSet === r.ariaPosInSet && n.stacked === r.stacked && (n.visibleChildIds?.join(",") ?? "") === (r.visibleChildIds?.join(",") ?? "") && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function A({ data: e, id: t }) {
	let { count: r, parentId: i, parentWidth: a, loading: u } = e, d = f(), m = s(), y = o(), b = c(), x = l(), C = n();
	if (!d || !m || !y) return null;
	let w = m.expandedNodes.has(i), { source: T, target: E } = S(d.direction), D = b?.focusedNodeId === t, O = b ? (e) => b.registerNodeRef(t, e) : void 0, k = C.t("actions.expand");
	return /* @__PURE__ */ _(h, { children: [
		/* @__PURE__ */ g(v, {
			type: "target",
			position: E,
			className: "!invisible"
		}),
		/* @__PURE__ */ g("div", {
			className: "pointer-events-auto flex items-start justify-center",
			style: {
				width: a,
				height: 80
			},
			children: /* @__PURE__ */ g(p, {
				ref: O,
				count: r,
				expanded: w,
				tabIndex: D ? 0 : -1,
				ariaLabel: k,
				onClick: () => y.toggleExpand(i),
				loading: u || x?.deferredLoading
			})
		}),
		/* @__PURE__ */ g(v, {
			type: "source",
			position: T,
			className: "!invisible"
		})
	] });
}
A.displayName = "F0GraphExpanderWrapper";
var j = m(A, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.count === r.count && n.parentWidth === r.parentWidth && n.loading === r.loading && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function M({ data: i, id: a }) {
	let { parentId: s, parentWidth: l, collapseLabel: u, stacked: p } = i, m = f(), y = o(), b = c(), x = d(), C = n();
	if (!m || !y || m.zoomLevel === "dot") return null;
	let { source: w, target: T } = S(m.direction), E = b?.focusedNodeId === a, O = b ? (e) => b.registerNodeRef(a, e) : void 0, k = u ?? C.actions.collapse, A = E || p === !0 && x?.hoveredStackParentId === s;
	return /* @__PURE__ */ _(h, { children: [
		/* @__PURE__ */ g(v, {
			type: "target",
			position: T,
			className: "!invisible"
		}),
		/* @__PURE__ */ g("div", {
			className: "group pointer-events-auto flex items-start justify-center pt-2",
			style: {
				width: l,
				height: p ? D(m.zoomLevel) : 80
			},
			children: /* @__PURE__ */ g("div", {
				"data-revealed": A ? "true" : "false",
				className: e("backdrop-blur-[120px]", A ? "visible" : "invisible group-hover:visible"),
				children: /* @__PURE__ */ g(r, {
					ref: O,
					variant: "neutral",
					size: "md",
					icon: t,
					hideLabel: !0,
					label: k,
					"aria-label": k,
					"aria-expanded": !0,
					tabIndex: E ? 0 : -1,
					onClick: () => y.toggleExpand(s)
				})
			})
		}),
		/* @__PURE__ */ g(v, {
			type: "source",
			position: w,
			className: "!invisible"
		})
	] });
}
function N(e) {
	return /* @__PURE__ */ g("div", {
		"aria-hidden": !0,
		className: "pointer-events-none h-full w-full"
	});
}
N.displayName = "F0GraphStackGroupWrapper";
var P = m(N);
M.displayName = "F0GraphCollapserWrapper";
var F = m(M, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.parentWidth === r.parentWidth && n.collapseLabel === r.collapseLabel && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
//#endregion
export { w as EXPANDER_Y_OFFSET_BY_ZOOM, E as EXPANDER_Y_OFFSET_STACKED_BY_ZOOM, F as F0GraphCollapserWrapper, j as F0GraphExpanderWrapper, k as F0GraphNodeWrapper, P as F0GraphStackGroupWrapper, T as STACKED_RANK_SEP, D as collapserHoverHeightStacked };
