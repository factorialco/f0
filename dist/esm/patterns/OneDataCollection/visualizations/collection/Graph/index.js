import { F0Graph as e } from "../../../../F0Graph/F0Graph2.js";
import { F0GraphSkeleton as t } from "../../../../F0Graph/F0GraphSkeleton.js";
import { tagColumn as n } from "../../../../F0Graph/components/F0GraphNode/types.js";
import { F0GraphNode as ee } from "../../../../F0Graph/components/F0GraphNode/F0GraphNode.js";
import { resolveGraphReveal as te } from "./reveal.js";
import { useDataCollectionTreeData as ne } from "./useDataCollectionTreeData.js";
import { useDataCollectionSettings as re } from "../../../Settings/SettingsProvider.js";
import { useCallback as r, useEffect as i, useRef as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/index.tsx
var c = ({ source: c, title: l, subtitle: u, avatar: d, tags: f, nodeActions: ie, nodeTagTypes: p, defaultVisibleTagTypes: m, pinnedTagTypes: h, lockedTagTypes: ae, currentUserNodeId: g, getNodeId: oe, getChildrenCount: se, stackNodes: ce, stackedTrailing: le, childrenFilters: ue, defaultExpandDepth: de, revealNodeId: _, searchSelectionNonce: v, focusOnEntry: y, initialSelectedNodeId: b, loadNodePath: fe, getParentId: pe, loadNodeData: me, liveUpdate: x, zoomPreset: S, minZoom: C, maxZoom: w, centerOnNodeClick: T, nodeClickZoom: E, viewportInset: D, showControls: O, canvasFooterActions: k, enableNodeWindowing: A, nodeWindowPadding: j, loadVisibleNodeData: M, visibleDataDebounceMs: N, onLoadData: P, onLoadError: F }) => {
	let { nodes: I, expandedNodes: L, setExpandedNodes: R, focusedNode: z, highlightedNodes: he, revealNode: B, clearFocus: V, loadVisibleNodeData: ge, isInitialLoading: H } = ne(c, {
		title: l,
		subtitle: u,
		avatar: d,
		tags: f,
		getNodeId: oe,
		getChildrenCount: se,
		stackNodes: ce,
		childrenFilters: ue,
		defaultExpandDepth: de,
		loadNodePath: fe,
		getParentId: pe,
		loadNodeData: me,
		liveUpdate: x,
		focusOnEntry: y,
		zoomPreset: S,
		showControls: O
	}, {
		onLoadData: P,
		onLoadError: F
	}), U = a(null), [W] = o(() => b !== void 0), [_e, ve] = o(() => b ? /* @__PURE__ */ new Set([b]) : /* @__PURE__ */ new Set()), G = r(async (e) => {
		await B(e), U.current?.clearSelection(), U.current?.focusNode(e);
	}, [B]), K = a(void 0), q = a(void 0), J = a(!1);
	i(() => {
		if (H) return;
		let e = te({
			isInitialLoading: H,
			initialConsumed: J.current,
			revealNodeId: _,
			lastRevealed: K.current,
			revealNonce: v,
			lastNonce: q.current
		});
		e.consumeInitial && (J.current = !0), K.current = e.lastRevealed, q.current = e.lastNonce, e.revealId && G(e.revealId);
	}, [
		_,
		v,
		G,
		H
	]);
	let Y = a(c.setCurrentSearch);
	Y.current = c.setCurrentSearch, i(() => (Y.current(void 0), () => Y.current(void 0)), []);
	let { settings: ye } = re(), X = ye.visualization.graph, Z = p ? [...p] : [], be = new Set(m ?? Z), xe = new Set(h ?? []), Se = new Set(Object.keys(ae ?? {})), Ce = new Set(X?.hidden ?? Z.filter((e) => !be.has(e))), Q = X?.order ?? Z, $ = Z.sort((e, t) => (Q.indexOf(e) === -1 ? Infinity : Q.indexOf(e)) - (Q.indexOf(t) === -1 ? Infinity : Q.indexOf(t))), we = $.filter((e) => !Se.has(e) && (xe.has(e) || !Ce.has(e))), Te = f ? (e) => [...f(e)].sort((e, t) => $.indexOf(n(e)) - $.indexOf(n(t))) : void 0;
	return /* @__PURE__ */ s("div", {
		className: "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary bg-[hsl(var(--neutral-3))]",
		children: H ? /* @__PURE__ */ s(t, { showTags: f !== void 0 }) : /* @__PURE__ */ s(e, {
			ref: U,
			nodes: I,
			expandedNodes: L,
			onExpandedNodesChange: R,
			focusedNode: z,
			initialFocusNodeId: y,
			highlightedNodes: he,
			selectionMode: "single",
			selectedNodes: W ? _e : void 0,
			onSelectedNodesChange: (e) => {
				W && ve(e), e.size > 0 && V();
			},
			showControls: O ?? !0,
			canvasFooterActions: k,
			zoomPreset: S,
			minZoom: C,
			maxZoom: w,
			centerOnNodeClick: T,
			nodeClickZoom: E,
			viewportInset: D,
			enableNodeWindowing: A,
			nodeWindowPadding: j,
			loadVisibleNodeData: ge ?? M,
			visibleDataDebounceMs: N,
			reserveTagRow: f !== void 0,
			nodeTagTypes: p,
			visibleTagTypes: we,
			currentUserNodeId: g,
			onFocusUser: g ? () => G(g) : void 0,
			onPaneClick: V,
			renderNode: (e, t) => {
				let n = c.itemOnClick?.(e.data);
				return /* @__PURE__ */ s(ee, {
					...t,
					loading: t.dataLoading,
					avatar: d?.(e.data),
					title: l(e.data),
					trailing: le?.(e.data),
					subtitle: u?.(e.data),
					tags: Te?.(e.data),
					actions: ie?.(e.data),
					hoverCard: !0,
					onClick: () => {
						t.onClick(), n?.();
					}
				});
			}
		})
	});
};
//#endregion
export { c as GraphCollection };
