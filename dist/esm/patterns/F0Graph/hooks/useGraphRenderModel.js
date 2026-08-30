import { COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM as e } from "../constants.js";
import { collectVisibleNodes as t, computeLayoutBounds as n, computeStackGroups as r, deriveEdgesFromTree as i, nodeIntersectsRect as a, resolveStackedParents as o } from "../utils.js";
import { EXPANDER_Y_OFFSET_BY_ZOOM as s, EXPANDER_Y_OFFSET_STACKED_BY_ZOOM as c } from "../internal/ReactFlowAdapters.js";
import { useLayoutEngine as l } from "./useLayoutEngine.js";
import { useViewportGeometry as u } from "./useViewportGeometry.js";
import { useCallback as d, useLayoutEffect as f, useMemo as p, useRef as m } from "react";
import { Position as h } from "@xyflow/react";
//#region src/patterns/F0Graph/hooks/useGraphRenderModel.ts
var g = 6, _ = 26, v = 4, y = 2;
function b({ roots: b, nodeMap: x, expandedNodes: S, anchorNodeRef: C, onAnchorReflow: ee, resolvedEdgesProp: w, stableRenderNode: te, nodeTagTypes: ne, visibleTagTypesSet: re, reserveTagRow: ie, nodeWidthProp: T, nodeHeightProp: ae, stackedNodeHeightProp: oe, stackedNodeGapProp: se, layoutEngineProp: E, zoomLevel: D, direction: O, controlLabels: ce, hoveredEdgeId: k, enableNodeWindowing: A, nodeWindowPadding: le }) {
	let j = p(() => t(b, S), [b, S]), M = p(() => {
		let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
		for (let e of j) {
			let n = e.parentId;
			t.has(n) || t.set(n, []), t.get(n).push(e);
		}
		for (let n of t.values()) for (let t = 0; t < n.length; t++) e.set(n[t].id, {
			level: n[t].depth + 1,
			setSize: n.length,
			posInSet: t + 1
		});
		return e;
	}, [j]), N = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of j) {
			if (t.childrenCount === 0) continue;
			let n = S.has(t.id), r = n && t.children.length === 0;
			(!n || r) && e.set(t.id, {
				expanderId: `expander-${t.id}`,
				avatars: [],
				count: t.childrenCount,
				loading: r
			});
		}
		return e;
	}, [j, S]), { stackedParentIds: P, stackedNodeIndex: F } = p(() => E ? {
		stackedParentIds: /* @__PURE__ */ new Set(),
		stackedNodeIndex: /* @__PURE__ */ new Map()
	} : o(j), [j, E]), ue = p(() => w && w.length > 0 ? w : i(b), [w, b]), { visibleEdges: I, expanderNodes: L } = p(() => {
		let e = new Set(j.map((e) => e.id)), t = [], n = [], r = new Set(N.keys());
		for (let [r, i] of N) e.has(r) && (t.push({
			id: `${r}->${i.expanderId}`,
			source: r,
			target: i.expanderId
		}), n.push({
			id: i.expanderId,
			parentId: r,
			avatars: i.avatars,
			count: i.count,
			loading: i.loading
		}));
		for (let n of ue) r.has(n.source) || e.has(n.source) && e.has(n.target) && t.push(n);
		return {
			visibleEdges: t,
			expanderNodes: n
		};
	}, [
		ue,
		j,
		N
	]), R = p(() => {
		let e = L.map((e) => ({
			id: e.id,
			parentId: e.parentId,
			data: null,
			children: [],
			depth: 0,
			childrenCount: 0,
			childrenLoaded: !0
		}));
		return [...j.map((e) => {
			let t = P.has(e.id);
			return !!e.stackNodes === t ? e : {
				...e,
				stackNodes: t
			};
		}), ...e];
	}, [
		j,
		L,
		P
	]), z = p(() => I, [I]), B = ie ?? (ne ? re.size > 0 : !1), de = ne ? re.size : 1, V = B ? Math.max(1, Math.ceil(de / y)) : 0, H = V > 0 ? g + V * _ + (V - 1) * v : 0, U = (ae ?? 56) + H, fe = (oe ?? 44) + H, pe = l({
		nodeWidth: T,
		nodeHeight: U,
		stackedNodeHeight: fe,
		stackedNodeGap: se,
		snapGrid: 32
	}), me = E ?? pe, W = p(() => me.computeLayout(R, z, O), [
		me,
		R,
		z,
		O
	]), G = p(() => new Map(W.nodes.map((e) => [e.id, e])), [W.nodes]), K = p(() => r(j, F, G, O), [
		j,
		F,
		G,
		O
	]), he = p(() => {
		let e = [];
		for (let [t, n] of K.groups) {
			let r = G.get(t);
			if (!r) continue;
			let i = Math.min(r.x, n.x), a = Math.min(r.y, n.y);
			e.push({
				parentId: t,
				x: i,
				y: a,
				width: Math.max(r.x + r.width, n.x + n.width) - i,
				height: Math.max(r.y + r.height, n.y + n.height) - a
			});
		}
		return e;
	}, [K, G]), ge = p(() => n(W.nodes), [W.nodes]), _e = d((e) => G.get(e), [G]), q = u({
		enabled: A ?? !1,
		padding: le
	}), J = s[D], Y = c[D], X = e[D], ve = m(/* @__PURE__ */ new Map()), ye = p(() => {
		let e = C.current;
		if (!e) return {
			dx: 0,
			dy: 0
		};
		let t = W.nodes.find((t) => t.id === e), n = ve.current.get(e);
		return n && t ? {
			dx: n.x - t.x,
			dy: n.y - t.y
		} : {
			dx: 0,
			dy: 0
		};
	}, [W.nodes, C]);
	f(() => {
		let { dx: e, dy: t } = ye;
		ve.current = new Map(W.nodes.map((e) => [e.id, {
			x: e.x,
			y: e.y
		}]));
		let n = C.current;
		if (n) {
			(e !== 0 || t !== 0) && ee?.(e, t);
			let r = x.get(n);
			r !== void 0 && S.has(n) && r.childrenCount > 0 && r.children.length === 0 || (C.current = null);
		}
	}, [
		W.nodes,
		ye,
		x,
		S,
		C,
		ee
	]);
	let Z = p(() => {
		if (!A || !q) return null;
		let e = T ?? 256, t = /* @__PURE__ */ new Set();
		for (let n of W.nodes) a(n.x, n.y, n.width || e, n.height || U, q) && t.add(n.id);
		let n = Array.from(t);
		for (let e of n) {
			let n = x.get(e)?.parentId ?? null;
			for (; n !== null && !t.has(n);) t.add(n), n = x.get(n)?.parentId ?? null;
		}
		let r = new Set(n);
		for (let e of I) r.has(e.source) !== r.has(e.target) && (t.add(e.source), t.add(e.target));
		for (let e of Array.from(t)) {
			let n = K.previousRow.get(e);
			n && t.add(n);
		}
		return t;
	}, [
		A,
		q,
		I,
		W.nodes,
		T,
		U,
		x,
		K
	]), be = m(/* @__PURE__ */ new Map()), Q = p(() => {
		let e = T ?? 256, t = U, n = (e) => !Z || Z.has(e), r = Z !== null, i = O === "LR" || O === "RL", a = O === "TB" ? h.Bottom : O === "BT" ? h.Top : O === "LR" ? h.Right : h.Left, o = O === "TB" ? h.Top : O === "BT" ? h.Bottom : O === "LR" ? h.Left : h.Right, s = (e, t) => {
			let n = (n) => n === h.Top ? {
				x: e / 2,
				y: 0
			} : n === h.Bottom ? {
				x: e / 2,
				y: t
			} : n === h.Left ? {
				x: 0,
				y: t / 2
			} : {
				x: e,
				y: t / 2
			};
			return [{
				type: "source",
				position: a,
				...n(a),
				width: 1,
				height: 1
			}, {
				type: "target",
				position: o,
				...n(o),
				width: 1,
				height: 1
			}];
		}, c = s(e, t), l = [];
		for (let e of K.groups.values()) [...e.rows.keys()].some(n) && l.push({
			id: e.id,
			type: "stackGroup",
			position: {
				x: e.x,
				y: e.y * 1
			},
			width: e.width,
			height: e.height,
			selectable: !1,
			draggable: !1,
			focusable: !1,
			zIndex: 0,
			targetPosition: o,
			...r ? { handles: s(e.width, e.height) } : null,
			data: { direction: O }
		});
		let u = [];
		for (let i of j) {
			if (!n(i.id)) continue;
			let l = G.get(i.id), d = be.current.get(i.id), f;
			d !== void 0 && d.parentId === i.parentId && d.data === i.data && d.childrenCount === i.childrenCount && d.childrenLoaded === i.childrenLoaded && d.dataLoaded === i.dataLoaded ? f = d : (f = {
				id: i.id,
				parentId: i.parentId,
				data: i.data,
				childrenCount: i.childrenCount,
				childrenLoaded: i.childrenLoaded,
				dataLoaded: i.dataLoaded
			}, be.current.set(i.id, f));
			let p = M.get(i.id), m;
			if (S.has(i.id) && i.children.length > 0) {
				let e = i.children.map((e) => e.id).filter((e) => n(e));
				m = e.length > 0 ? e : void 0;
			}
			let h = F.has(i.id), g = K.groupOf.get(i.id), _ = g ? K.groups.get(i.parentId ?? "")?.rows.get(i.id) : void 0, v = _ ? _.width : h ? l?.width ?? e : e, y = _ ? _.height : h ? l?.height ?? t : t;
			u.push({
				id: i.id,
				type: "graphNode",
				..._ && g ? { parentId: g } : null,
				position: _ ? {
					x: _.x,
					y: _.y
				} : {
					x: l?.x ?? 0,
					y: (l?.y ?? 0) * 1
				},
				width: v,
				...r ? {
					height: y,
					handles: h ? s(v, y) : c
				} : null,
				sourcePosition: a,
				targetPosition: o,
				data: {
					graphNode: f,
					renderNode: te,
					ariaLevel: p?.level ?? 1,
					ariaSetSize: p?.setSize ?? 1,
					ariaPosInSet: p?.posInSet ?? 1,
					visibleChildIds: m,
					stacked: h || void 0
				}
			});
		}
		for (let r of L) {
			if (!n(r.id)) continue;
			let s = G.get(r.parentId) ?? {
				x: 0,
				y: 0,
				width: e,
				height: t
			}, c = s.width ?? e, l = s.height ?? t, d = P.has(r.parentId) ? Y : J, f = i ? O === "LR" ? s.x + c + d : s.x - c : s.x, p = i ? s.y * 1 : O === "TB" ? s.y * 1 + l + d : s.y * 1 - l;
			u.push({
				id: r.id,
				type: "expanderNode",
				position: {
					x: f,
					y: p
				},
				sourcePosition: a,
				targetPosition: o,
				data: {
					avatars: r.avatars,
					count: r.count,
					expanded: S.has(r.parentId),
					parentId: r.parentId,
					parentWidth: e,
					loading: r.loading
				}
			});
		}
		for (let r of j) {
			if (!S.has(r.id) || r.children.length === 0 || !n(r.id)) continue;
			let s = G.get(r.id), c = s?.x ?? 0, l = s?.y ?? 0, d = s?.width ?? e, f = s?.height ?? t, p = P.has(r.id) ? Y : J, m = i ? O === "LR" ? c + d + p + X : c - d : c, h = i ? l * 1 : O === "TB" ? l * 1 + f + p + X : l * 1 - f;
			u.push({
				id: `collapser-${r.id}`,
				type: "collapserNode",
				zIndex: 10,
				position: {
					x: m,
					y: h
				},
				sourcePosition: a,
				targetPosition: o,
				data: {
					parentId: r.id,
					parentWidth: e,
					collapseLabel: ce?.collapseChildren,
					stacked: P.has(r.id)
				}
			});
		}
		return [...l, ...u];
	}, [
		Z,
		G,
		K,
		j,
		L,
		S,
		te,
		J,
		Y,
		X,
		P,
		T,
		U,
		O,
		M,
		F,
		ce?.collapseChildren
	]), $ = p(() => Q.filter((e) => e.type === "graphNode").map((e) => e.id), [Q]), xe = p(() => {
		let e = new Set($);
		return Q.filter((e) => e.type === "graphNode").filter((t) => {
			let { parentId: n } = t.data.graphNode;
			return n == null || !e.has(n);
		}).map((e) => e.id);
	}, [Q, $]);
	return {
		visibleTreeNodes: j,
		rfNodes: Q,
		rfEdges: p(() => {
			let e = new Set(j.filter((e) => S.has(e.id) && e.children.length > 0).map((e) => e.id)), t = (e) => K.previousRow.get(e.target) ?? e.source;
			return I.filter((e) => !Z || Z.has(t(e)) && Z.has(e.target)).map((n) => {
				let r = K.previousRow.get(n.target), i = t(n), a = !!(n.onEdgeClick || n.onEdgeHover) && n.id === k, o = n.data;
				return {
					id: n.id,
					source: i,
					target: n.target,
					type: "graphEdge",
					data: {
						...o,
						graphEdge: n,
						...a ? { variant: "hover" } : null,
						showDot: !n.target.startsWith("expander-") && !n.source.startsWith("expander-") && !e.has(i) && r === void 0
					}
				};
			});
		}, [
			I,
			j,
			S,
			k,
			Z,
			F,
			K
		]),
		reservedTagHeight: H,
		tagsAffectLayout: B,
		renderedNodeCount: $.length,
		renderedNodeIds: $,
		treeRootNodeIds: xe,
		contentBounds: ge,
		getNodePosition: _e,
		stackHoverZones: he
	};
}
//#endregion
export { b as useGraphRenderModel };
