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
var b = 6, x = b / 2, S = (e) => e === y.Bottom || e === y.Top ? { transform: `translate(-${x}px, 0px)` } : void 0, C = (e, t, n) => {
	if (!(n <= 0)) switch (e) {
		case y.Bottom: return {
			top: t - b,
			bottom: "auto",
			transform: `translate(-${x}px, 0px)`
		};
		case y.Left:
		case y.Right: return { top: t / 2 };
		default: return;
	}
};
function w(e) {
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
var T = 32, E = {
	detail: (130 - T) / 2,
	compact: (130 - T) / 2,
	dot: (130 - T) / 2
}, D = 130 * a, O = {
	detail: (D - T) / 2,
	compact: (D - T) / 2,
	dot: (D - T) / 2
}, k = (e) => Math.max(0, Math.floor(D - (O[e] + i[e])));
function A({ data: e, id: t }) {
	let n = f(), r = s(), i = u(), a = o(), d = c(), p = l();
	if (!n || !r || !i || !a) return null;
	let { zoomLevel: m } = n, { expandedNodes: y } = r, { selectedNodes: b, highlightedNodes: x } = i, { toggleExpand: T, selectNode: E } = a, { graphNode: D, renderNode: O, ariaLevel: k, ariaSetSize: A, ariaPosInSet: j, visibleChildIds: M, stacked: N } = e, { source: P, target: F } = w(n.direction), I = y.has(t), L = b.has(t), R = x.has(t), z = L ? "selected" : R ? "highlighted" : "default", B = m === "dot" ? "dot" : m === "compact" ? "compact" : "detail", V = (D.childrenCount ?? 0) > 0, H = d?.focusedNodeId === t, U = d ? (e) => d.registerNodeRef(t, e) : () => {}, W = I && M && M.length > 0 ? M.map((e) => `f0-graph-node-${e}`).join(" ") : void 0, G = {
		zoomLevel: m,
		variant: B,
		state: z,
		expanded: I,
		hasChildren: V,
		childrenCount: D.childrenCount,
		level: k,
		tabIndex: H ? 0 : -1,
		setSize: A,
		posInSet: j,
		nodeId: t,
		ariaOwns: W,
		stacked: N ?? !1,
		stackedHeight: p?.stackedNodeHeight,
		onExpandToggle: () => T(t),
		onClick: () => E(t),
		nodeRef: U,
		visibleTagTypes: p?.visibleTagTypes,
		deferredLoading: p?.deferredLoading,
		dataLoading: p?.dataLoadingEnabled ? D.dataLoaded === !1 : void 0
	}, K = N ? p?.stackedNodeHeight ?? 44 : p?.nodeHeight ?? 56, q = (e) => {
		let t = C(e, K, p?.tagRowHeight ?? 0), n = N ? S(e) : void 0;
		return t || n ? {
			...t,
			...n
		} : void 0;
	};
	return /* @__PURE__ */ _(h, { children: [
		/* @__PURE__ */ g(v, {
			type: "target",
			position: F,
			className: "!invisible",
			style: q(F)
		}),
		/* @__PURE__ */ g("div", {
			className: "pointer-events-none flex items-start justify-center",
			style: { width: "100%" },
			children: /* @__PURE__ */ g("div", {
				className: "pointer-events-auto",
				style: {
					width: N ? "100%" : void 0,
					maxWidth: N ? void 0 : "calc(100% - 20px)"
				},
				children: O(D, G)
			})
		}),
		/* @__PURE__ */ g(v, {
			type: "source",
			position: P,
			className: "!invisible",
			style: q(P)
		})
	] });
}
A.displayName = "F0GraphNodeWrapper";
var j = m(A, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.graphNode === r.graphNode && n.ariaLevel === r.ariaLevel && n.ariaSetSize === r.ariaSetSize && n.ariaPosInSet === r.ariaPosInSet && n.stacked === r.stacked && (n.visibleChildIds?.join(",") ?? "") === (r.visibleChildIds?.join(",") ?? "") && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function M({ data: e, id: t }) {
	let { count: r, parentId: i, parentWidth: a, loading: u } = e, d = f(), m = s(), y = o(), b = c(), x = l(), S = n();
	if (!d || !m || !y) return null;
	let C = m.expandedNodes.has(i), { source: T, target: E } = w(d.direction), D = b?.focusedNodeId === t, O = b ? (e) => b.registerNodeRef(t, e) : void 0, k = S.t("actions.expand");
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
				expanded: C,
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
M.displayName = "F0GraphExpanderWrapper";
var N = m(M, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.count === r.count && n.parentWidth === r.parentWidth && n.loading === r.loading && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
function P({ data: i, id: a }) {
	let { parentId: s, parentWidth: l, collapseLabel: u, stacked: p } = i, m = f(), y = o(), b = c(), x = d(), S = n();
	if (!m || !y || m.zoomLevel === "dot") return null;
	let { source: C, target: T } = w(m.direction), E = b?.focusedNodeId === a, D = b ? (e) => b.registerNodeRef(a, e) : void 0, O = u ?? S.actions.collapse, A = E || p === !0 && x?.hoveredStackParentId === s;
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
				height: p ? k(m.zoomLevel) : 80
			},
			children: /* @__PURE__ */ g("div", {
				"data-revealed": A ? "true" : "false",
				className: e("backdrop-blur-[120px]", A ? "visible" : "invisible group-hover:visible"),
				children: /* @__PURE__ */ g(r, {
					ref: D,
					variant: "neutral",
					size: "md",
					icon: t,
					hideLabel: !0,
					label: O,
					"aria-label": O,
					"aria-expanded": !0,
					tabIndex: E ? 0 : -1,
					onClick: () => y.toggleExpand(s)
				})
			})
		}),
		/* @__PURE__ */ g(v, {
			type: "source",
			position: C,
			className: "!invisible"
		})
	] });
}
function F(e) {
	return /* @__PURE__ */ g("div", {
		"aria-hidden": !0,
		className: "pointer-events-none h-full w-full"
	});
}
F.displayName = "F0GraphStackGroupWrapper";
var I = m(F);
P.displayName = "F0GraphCollapserWrapper";
var L = m(P, (e, t) => {
	if (e.id !== t.id) return !1;
	let n = e.data, r = t.data;
	return n.parentId === r.parentId && n.parentWidth === r.parentWidth && n.collapseLabel === r.collapseLabel && e.positionAbsoluteX === t.positionAbsoluteX && e.positionAbsoluteY === t.positionAbsoluteY;
});
//#endregion
export { E as EXPANDER_Y_OFFSET_BY_ZOOM, O as EXPANDER_Y_OFFSET_STACKED_BY_ZOOM, L as F0GraphCollapserWrapper, N as F0GraphExpanderWrapper, j as F0GraphNodeWrapper, I as F0GraphStackGroupWrapper, D as STACKED_RANK_SEP, k as collapserHoverHeightStacked };
