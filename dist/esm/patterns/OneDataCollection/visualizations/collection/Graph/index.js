import { useDataCollectionSettings as e } from "../../../Settings/SettingsProvider.js";
import { F0Graph as t } from "../../../../F0Graph/F0Graph2.js";
import { F0GraphSkeleton as n } from "../../../../F0Graph/F0GraphSkeleton.js";
import { tagColumn as r } from "../../../../F0Graph/components/F0GraphNode/types.js";
import { F0GraphNode as ee } from "../../../../F0Graph/components/F0GraphNode/F0GraphNode.js";
import { resolveGraphReveal as te } from "./reveal.js";
import { useDataCollectionTreeData as ne } from "./useDataCollectionTreeData.js";
import { useCallback as re, useEffect as i, useRef as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/index.tsx
var c = ({ source: c, title: l, subtitle: u, avatar: d, tags: f, nodeActions: ie, nodeTagTypes: p, defaultVisibleTagTypes: m, pinnedTagTypes: h, lockedTagTypes: g, currentUserNodeId: _, getNodeId: ae, getChildrenCount: oe, stackNodes: se, stackedTrailing: ce, childrenFilters: le, defaultExpandDepth: ue, revealNodeId: v, searchSelectionNonce: y, focusOnEntry: b, initialSelectedNodeId: x, loadNodePath: de, getParentId: fe, loadNodeData: pe, liveUpdate: me, zoomPreset: S, minZoom: C, maxZoom: w, centerOnNodeClick: T, nodeClickZoom: E, viewportInset: D, showControls: O, canvasFooterActions: k, enableNodeWindowing: A, nodeWindowPadding: j, loadVisibleNodeData: M, visibleDataDebounceMs: N, onLoadData: P, onLoadError: F }) => {
	let { nodes: I, expandedNodes: L, setExpandedNodes: R, focusedNode: z, highlightedNodes: he, revealNode: B, clearFocus: V, loadVisibleNodeData: ge, isInitialLoading: H } = ne(c, {
		title: l,
		subtitle: u,
		avatar: d,
		tags: f,
		getNodeId: ae,
		getChildrenCount: oe,
		stackNodes: se,
		childrenFilters: le,
		defaultExpandDepth: ue,
		loadNodePath: de,
		getParentId: fe,
		loadNodeData: pe,
		liveUpdate: me,
		focusOnEntry: b,
		zoomPreset: S,
		showControls: O
	}, {
		onLoadData: P,
		onLoadError: F
	}), U = a(null), [W] = o(() => x !== void 0), [_e, ve] = o(() => x ? /* @__PURE__ */ new Set([x]) : /* @__PURE__ */ new Set()), G = re(async (e) => {
		await B(e), U.current?.clearSelection(), U.current?.focusNode(e);
	}, [B]), K = a(void 0), q = a(void 0), J = a(!1);
	i(() => {
		if (H) return;
		let e = te({
			isInitialLoading: H,
			initialConsumed: J.current,
			revealNodeId: v,
			lastRevealed: K.current,
			revealNonce: y,
			lastNonce: q.current
		});
		e.consumeInitial && (J.current = !0), K.current = e.lastRevealed, q.current = e.lastNonce, e.revealId && G(e.revealId);
	}, [
		v,
		y,
		G,
		H
	]);
	let Y = a(c.setCurrentSearch);
	Y.current = c.setCurrentSearch, i(() => (Y.current(void 0), () => Y.current(void 0)), []);
	let { settings: ye } = e(), X = ye.visualization.graph, Z = p ? [...p] : [], be = new Set(m ?? Z), xe = new Set(h ?? []), Se = new Set(Object.keys(g ?? {})), Ce = new Set(X?.hidden ?? Z.filter((e) => !be.has(e))), Q = X?.order ?? Z, $ = Z.sort((e, t) => (Q.indexOf(e) === -1 ? Infinity : Q.indexOf(e)) - (Q.indexOf(t) === -1 ? Infinity : Q.indexOf(t))), we = $.filter((e) => !Se.has(e) && (xe.has(e) || !Ce.has(e))), Te = f ? (e) => [...f(e)].sort((e, t) => $.indexOf(r(e)) - $.indexOf(r(t))) : void 0;
	return /* @__PURE__ */ s("div", {
		className: "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary bg-[hsl(var(--neutral-3))]",
		children: H ? /* @__PURE__ */ s(n, { showTags: f !== void 0 }) : /* @__PURE__ */ s(t, {
			ref: U,
			nodes: I,
			expandedNodes: L,
			onExpandedNodesChange: R,
			focusedNode: z,
			initialFocusNodeId: b,
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
			currentUserNodeId: _,
			onFocusUser: _ ? () => G(_) : void 0,
			onPaneClick: V,
			renderNode: (e, t) => {
				let n = c.itemOnClick?.(e.data);
				return /* @__PURE__ */ s(ee, {
					...t,
					loading: t.dataLoading,
					avatar: d?.(e.data),
					title: l(e.data),
					trailing: ce?.(e.data),
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
