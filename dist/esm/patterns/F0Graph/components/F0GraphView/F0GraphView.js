import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { EMPTY_HIGHLIGHTED_NODES as t, EMPTY_TAG_COLUMNS as n, FIT_VIEW_PADDING_LOOSE as r, FIT_VIEW_PADDING_TIGHT as i } from "../../constants.js";
import { F0GraphActionsContext as a, F0GraphExpandContext as o, F0GraphFocusContext as ee, F0GraphRenderConfigContext as te, F0GraphSelectionContext as ne, F0GraphStackHoverContext as re, F0GraphZoomContext as ie, useF0GraphRenderConfigInternal as ae } from "../../contexts.js";
import { useDeferredMerge as oe } from "../../hooks/useDeferredMerge.js";
import { findStackHoverZoneAt as se, resolveInitialFitViewNodes as ce } from "../../utils.js";
import { useExpandState as le } from "../../hooks/useExpandState.js";
import { useGraphKeyboard as ue } from "../../hooks/useGraphKeyboard.js";
import { F0GraphCollapserWrapper as de, F0GraphExpanderWrapper as s, F0GraphNodeWrapper as c, F0GraphStackGroupWrapper as l } from "../../internal/ReactFlowAdapters.js";
import { useGraphRenderModel as fe } from "../../hooks/useGraphRenderModel.js";
import { useGraphViewport as pe } from "../../hooks/useGraphViewport.js";
import { useLazyTree as me } from "../../hooks/useLazyTree.js";
import { useSelectionFocus as he } from "../../hooks/useSelectionFocus.js";
import { useTreeBuilder as ge } from "../../hooks/useTreeBuilder.js";
import { useViewportDataLoader as _e } from "../../hooks/useViewportDataLoader.js";
import { F0GraphControls as ve } from "../F0GraphControls/F0GraphControls.js";
import { F0GraphEdgeBase as u } from "../F0GraphEdge/F0GraphEdge.js";
import { memo as d, useCallback as f, useEffect as p, useImperativeHandle as ye, useMemo as m, useRef as h, useState as be } from "react";
import { Fragment as g, jsx as _, jsxs as xe } from "react/jsx-runtime";
import { Background as Se, BackgroundVariant as Ce, ReactFlow as we, useReactFlow as Te } from "@xyflow/react";
//#region src/patterns/F0Graph/components/F0GraphView/F0GraphView.tsx
function v(e) {
	let t = e.data, n = t?.graphEdge, r = t?.variant ?? "default", i = ae()?.renderEdge;
	if (i && n) {
		let e = i(n, r);
		if (e !== null) return /* @__PURE__ */ _(g, { children: e });
	}
	return /* @__PURE__ */ _(u, {
		...e,
		variant: r
	});
}
v.displayName = "F0GraphEdgeWrapper";
var y = d(v, (e, t) => e.id === t.id && e.data?.showDot === t.data?.showDot && e.data?.variant === t.data?.variant && e.data?.graphEdge === t.data?.graphEdge && e.sourceX === t.sourceX && e.sourceY === t.sourceY && e.targetX === t.targetX && e.targetY === t.targetY && e.sourcePosition === t.sourcePosition && e.targetPosition === t.targetPosition), Ee = {
	graphNode: c,
	expanderNode: s,
	collapserNode: de,
	stackGroup: l
}, De = { graphEdge: u }, Oe = { graphEdge: y };
function ke(ae) {
	let { handleRef: de, nodes: s, edges: c, rootNodes: l, loadChildren: u, deferredNodes: d, onDeferredLoadComplete: g, onDeferredLoadError: v, renderNode: y, zoomPreset: ke, zoomThresholds: Ae, defaultZoom: je = 1, minZoom: Me = .05, maxZoom: b = 2, expandedNodes: Ne, defaultExpandedNodes: Pe, defaultExpandDepth: Fe, onExpandToggle: Ie, onExpandedNodesChange: Le, selectionMode: Re = "single", selectedNodes: ze, onNodeSelect: Be, onSelectedNodesChange: Ve, onPaneClick: He, focusedNode: x, initialFocusNodeId: S, centerOnNodeClick: Ue = !0, nodeClickZoom: We, viewportInset: Ge, highlightedNodes: Ke, nodeWidth: qe, nodeHeight: Je, stackedNodeHeight: C, stackedNodeGap: Ye, canvasActions: Xe, canvasFooterActions: Ze, showControls: Qe = !1, onZoomLevelChange: $e, onViewportChange: et, renderEdge: w, nodeTagTypes: T, visibleTagTypes: tt, defaultVisibleTagTypes: nt, reserveTagRow: rt, onVisibleNodesChange: it, onRenderedNodesChange: at, enableNodeWindowing: E, nodeWindowPadding: ot, loadVisibleNodeData: D, visibleDataDebounceMs: st, layoutEngine: ct, controlLabels: O, currentUserNodeId: k, onFocusUser: lt } = ae, ut = e(), A = Te(), [dt, ft] = be(null), [pt, mt] = be(null), j = h(null), M = h(null), ht = tt ?? nt ?? T ?? n, N = m(() => new Set(ht), [ht]), gt = h(y);
	gt.current = y;
	let _t = m(() => (e, t) => gt.current(e, t), []), vt = w ? Oe : De, P = l !== void 0 && u !== void 0, yt = h([]).current, bt = h(async () => []).current, xt = me({
		rootNodes: P ? l : yt,
		loadChildren: P ? u : bt
	}), F = oe({
		initialNodes: s ?? [],
		initialEdges: c ?? [],
		deferredNodes: P ? void 0 : d
	}), St = h(F.deferredStatus);
	p(() => {
		let e = St.current, t = F.deferredStatus;
		St.current = t, e !== "resolved" && t === "resolved" && g?.(), e !== "error" && t === "error" && F.error && v?.(F.error);
	}, [
		F.deferredStatus,
		F.error,
		g,
		v
	]);
	let Ct = P ? xt.nodes : d ? F.mergedNodes : s ?? [], wt = P ? c : d ? F.mergedEdges : c, { roots: I, nodeMap: L } = ge(Ct), Tt = h(null), Et = h(null), R = h(null), { expandedNodes: z, expandedNodesRef: Dt, anchorNodeRef: Ot, toggleExpand: B, expandAll: kt, collapseAll: At } = le({
		roots: I,
		nodeMap: L,
		isLazyMode: P,
		lazyTree: xt,
		controlledExpanded: Ne,
		defaultExpandedNodes: Pe,
		defaultExpandDepth: Fe,
		onExpandToggle: Ie,
		onExpandedNodesChange: Le
	}), jt = h(null), Mt = h(() => void 0), Nt = h([]), Pt = h("detail"), Ft = m(() => () => jt.current, []), It = m(() => (e) => Mt.current(e), []), { zoomLevel: V, viewportReady: Lt, handleViewportChange: Rt, handleZoomIn: zt, handleZoomOut: Bt, handleFitView: Vt, handleFocusUser: Ht, centerOnNode: Ut, getFitPadding: H, hasViewportInset: Wt } = pe({
		defaultZoom: je,
		zoomPreset: ke,
		zoomThresholds: Ae,
		currentUserNodeId: k,
		onZoomLevelChange: $e,
		onViewportChange: et,
		nodeWindowingActive: E ?? !1,
		getContentBounds: Ft,
		getNodePosition: It,
		viewportInset: Ge
	}), Gt = (E ?? !1) && Lt, { selectedNodes: Kt, focusedNodeId: qt, setFocusedNodeId: U, focusedNodeIdRef: Jt, registerNodeRef: Yt, nodeRefsMapRef: Xt, flatVisibleOrderRef: Zt, selectNode: W, clearSelection: G } = he({
		roots: I,
		expandedNodes: z,
		selectionMode: Re,
		controlledSelected: ze,
		onNodeSelect: Be,
		onSelectedNodesChange: Ve,
		canvasRef: Tt
	}), Qt = Ke ?? t, $t = f((e, t) => {
		let n = A.getViewport();
		A.setViewport({
			x: n.x + e * n.zoom,
			y: n.y + t * n.zoom,
			zoom: n.zoom
		});
	}, [A]), { visibleTreeNodes: K, rfNodes: en, rfEdges: tn, reservedTagHeight: nn, renderedNodeCount: rn, renderedNodeIds: q, treeRootNodeIds: J, contentBounds: an, getNodePosition: on, stackHoverZones: sn } = fe({
		roots: I,
		nodeMap: L,
		expandedNodes: z,
		anchorNodeRef: Ot,
		onAnchorReflow: $t,
		resolvedEdgesProp: wt,
		stableRenderNode: _t,
		nodeTagTypes: T,
		visibleTagTypesSet: N,
		reserveTagRow: rt,
		nodeWidthProp: qe,
		nodeHeightProp: Je,
		stackedNodeHeightProp: C,
		stackedNodeGapProp: Ye,
		layoutEngineProp: ct,
		zoomLevel: V,
		direction: "TB",
		controlLabels: O,
		hoveredEdgeId: dt,
		enableNodeWindowing: Gt,
		nodeWindowPadding: ot
	});
	jt.current = an, Mt.current = on, Nt.current = sn, Pt.current = V;
	let Y = f((e, t, n) => {
		if (n === "touch") return;
		let r = Nt.current;
		if (r.length === 0 || Pt.current === "dot") return;
		let i = A.screenToFlowPosition({
			x: e,
			y: t
		}), a = se(r, i.x, i.y);
		j.current !== a && (j.current = a, mt(a));
	}, [A]), cn = f((e) => {
		M.current = {
			x: e.clientX,
			y: e.clientY,
			pointerType: e.pointerType
		}, Y(e.clientX, e.clientY, e.pointerType);
	}, [Y]), ln = f((e) => {
		Rt(e);
		let t = M.current;
		t && Y(t.x, t.y, t.pointerType);
	}, [Rt, Y]), un = f(() => {
		M.current = null, j.current !== null && (j.current = null, mt(null));
	}, []), dn = m(() => () => {
		G(), He?.();
	}, [G, He]), { handleTreeKeyDown: fn, handleCanvasKeyDown: pn } = ue({
		nodeMap: L,
		clearSelection: G,
		toggleExpand: B,
		selectNode: W,
		focusedNodeIdRef: Jt,
		setFocusedNodeId: U,
		flatVisibleOrderRef: Zt,
		expandedNodesRef: Dt,
		nodeRefsMapRef: Xt
	});
	p(() => {
		it?.(K.length);
	}, [K.length, it]), p(() => {
		at?.(rn);
	}, [rn, at]), _e({
		nodeIds: q,
		loadVisibleNodeData: D,
		debounceMs: st,
		enabled: !E || Lt
	});
	let X = h(() => {});
	X.current = (e) => {
		if (E && Ut(e, 300)) return;
		let t = L.get(e)?.children.map((e) => e.id) ?? [], n = ce(e, t, new Set(q));
		A.fitView({
			nodes: n ?? [{ id: e }],
			duration: 300,
			padding: H(r),
			maxZoom: Math.min(1, b)
		});
	};
	let Z = h(() => {});
	Z.current = (e) => {
		let t = Math.min(We ?? 1.5, b);
		Ut(e, 300, t) || A.fitView({
			nodes: [{ id: e }],
			duration: 300,
			padding: H(i),
			maxZoom: t
		});
	};
	let Q = h(null);
	p(() => () => {
		Q.current && clearTimeout(Q.current);
	}, []);
	let mn = f((e) => {
		W(e), !(!Ue || !L.has(e)) && (Q.current && clearTimeout(Q.current), Q.current = setTimeout(() => Z.current(e), 100));
	}, [
		W,
		Ue,
		L
	]);
	p(() => {
		if (!x) return;
		let e = x, t = setTimeout(() => X.current(e), 100);
		return () => clearTimeout(t);
	}, [x]);
	let $ = h(null), hn = h(!1);
	p(() => {
		if (hn.current || q.length === 0) return;
		if (hn.current = !0, !S) {
			A.fitView(Wt ? { padding: H(i) } : void 0);
			return;
		}
		let e = S;
		$.current = setTimeout(() => Z.current(e), 100);
	}, [
		q.length,
		S,
		A
	]), p(() => () => {
		$.current && clearTimeout($.current);
	}, []);
	let gn = h(() => {});
	gn.current = G, ye(de, () => ({
		focusNode: (e) => X.current(e),
		clearSelection: () => gn.current()
	}), []);
	let _n = m(() => ({
		zoomLevel: V,
		direction: "TB"
	}), [V, "TB"]), vn = m(() => ({ expandedNodes: z }), [z]), yn = m(() => ({
		selectedNodes: Kt,
		highlightedNodes: Qt
	}), [Kt, Qt]), bn = m(() => ({ hoveredStackParentId: pt }), [pt]), xn = m(() => ({
		toggleExpand: B,
		selectNode: W,
		expandAll: kt,
		collapseAll: At
	}), [
		B,
		W,
		kt,
		At
	]), Sn = !P && d !== void 0 && F.deferredStatus === "loading", Cn = K.length > 700, wn = m(() => ({
		renderEdge: w,
		visibleTagTypes: T ? N : void 0,
		deferredLoading: Sn || void 0,
		dataLoadingEnabled: D !== void 0 || void 0,
		tagRowHeight: nn,
		stackedNodeHeight: C,
		largeGraph: Cn
	}), [
		w,
		T,
		N,
		Sn,
		D,
		Cn,
		nn,
		C
	]), Tn = m(() => ({
		focusedNodeId: qt,
		setFocusedNodeId: U,
		registerNodeRef: Yt
	}), [
		qt,
		U,
		Yt
	]), En = J.length === 0, Dn = m(() => J.length > 0 ? J.map((e) => `f0-graph-node-${e}`).join(" ") : void 0, [J]);
	return /* @__PURE__ */ _(a.Provider, {
		value: xn,
		children: /* @__PURE__ */ _(te.Provider, {
			value: wn,
			children: /* @__PURE__ */ _(ee.Provider, {
				value: Tn,
				children: /* @__PURE__ */ _(ie.Provider, {
					value: _n,
					children: /* @__PURE__ */ _(o.Provider, {
						value: vn,
						children: /* @__PURE__ */ _(ne.Provider, {
							value: yn,
							children: /* @__PURE__ */ _(re.Provider, {
								value: bn,
								children: /* @__PURE__ */ xe("div", {
									ref: Tt,
									tabIndex: 0,
									"aria-label": O?.graphCanvas ?? ut.graph.canvas,
									onKeyDown: pn,
									"data-zoom-level": V,
									className: "f0-graph relative h-full w-full outline-none",
									children: [
										/* @__PURE__ */ _("div", {
											ref: Et,
											role: "tree",
											"aria-label": O?.graphView ?? ut.graph.view,
											"aria-owns": Dn,
											"aria-busy": En || void 0,
											onKeyDown: fn,
											onPointerMove: cn,
											onPointerLeave: un,
											onPointerDown: (e) => {
												R.current = {
													x: e.clientX,
													y: e.clientY,
													id: e.pointerId
												};
											},
											onPointerUp: (e) => {
												let t = R.current;
												if (R.current = null, !t || t.id !== e.pointerId) return;
												let n = e.clientX - t.x, r = e.clientY - t.y;
												if (n * n + r * r > 16) return;
												let i = e.target;
												if (i?.closest("[data-no-node-select]")) return;
												let a = i?.closest(".react-flow__node");
												if (!a) return;
												let o = a.getAttribute("data-id");
												o && mn(o);
											},
											className: "h-full w-full",
											children: /* @__PURE__ */ _(we, {
												nodes: en,
												edges: tn,
												nodeTypes: Ee,
												edgeTypes: vt,
												onlyRenderVisibleElements: !Gt,
												minZoom: Me,
												maxZoom: b,
												defaultViewport: {
													x: 0,
													y: 0,
													zoom: je
												},
												onViewportChange: ln,
												onPaneClick: dn,
												onEdgeMouseEnter: (e, t) => {
													let n = t.data?.graphEdge;
													!n?.onEdgeClick && !n?.onEdgeHover || (ft(t.id), n.onEdgeHover?.(n));
												},
												onEdgeMouseLeave: (e, t) => {
													let n = t.data?.graphEdge;
													!n?.onEdgeClick && !n?.onEdgeHover || (ft((e) => e === t.id ? null : e), n.onEdgeHover?.(null));
												},
												onEdgeClick: (e, t) => {
													let n = t.data?.graphEdge;
													n?.onEdgeClick?.(n);
												},
												proOptions: { hideAttribution: !0 },
												nodesDraggable: !1,
												nodesConnectable: !1,
												elementsSelectable: !1,
												nodeClickDistance: 4,
												panOnDrag: !0,
												zoomOnScroll: !0,
												zoomOnPinch: !0,
												children: /* @__PURE__ */ _(Se, {
													id: "f0-graph-bg",
													variant: Ce.Dots,
													gap: 32,
													size: 4,
													color: "var(--f0-graph-bg-dot)"
												})
											})
										}),
										Xe && /* @__PURE__ */ _("div", {
											className: "absolute left-6 top-3 z-10 flex flex-col gap-2 rounded-md backdrop-blur-[140px]",
											children: Xe
										}),
										Ze && /* @__PURE__ */ _("div", {
											className: "absolute bottom-6 right-6 z-10 flex flex-col items-end gap-2",
											children: Ze
										}),
										Qe && /* @__PURE__ */ _("div", {
											className: "absolute bottom-6 left-6 z-10",
											children: /* @__PURE__ */ _(ve, {
												onZoomIn: zt,
												onZoomOut: Bt,
												onFitView: Vt,
												onFocusUser: k ? lt ?? (L.has(k) ? Ht : void 0) : void 0,
												labels: O
											})
										})
									]
								})
							})
						})
					})
				})
			})
		})
	});
}
//#endregion
export { ke as F0GraphView };
