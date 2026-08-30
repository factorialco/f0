import { STACKED_RANK_SEP_RATIO as e } from "../constants.js";
import { useMemo as t } from "react";
//#region src/patterns/F0Graph/hooks/useLayoutEngine.ts
var n = 256, r = 56, i = 120, a = 36, o = 130, s = 40, c = 80;
function l(e) {
	let i = e?.nodeWidth ?? n, a = e?.nodeHeight ?? r, l = e?.rankSep ?? o, d = e?.nodeSep ?? s, f = e?.rootSep ?? c, p = e?.stackedNodeHeight ?? 44, m = e?.stackedNodeGap ?? 16, h = e?.snapGrid ?? 0;
	return t(() => ({ computeLayout(e, t, n) {
		return u(e, t, n, {
			nodeWidth: i,
			nodeHeight: a,
			rankSep: l,
			nodeSep: d,
			rootSep: f,
			stackedNodeHeight: p,
			stackedNodeGap: m,
			snapGrid: h
		});
	} }), [
		i,
		a,
		l,
		d,
		f,
		p,
		m,
		h
	]);
}
function u(t, n, r, o) {
	let { nodeWidth: s, nodeHeight: c, rankSep: l, nodeSep: u, rootSep: d, stackedNodeHeight: f, stackedNodeGap: p, snapGrid: m } = o;
	if (t.length === 0) return {
		nodes: [],
		edges: [],
		width: 0,
		height: 0
	};
	let h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
	for (let e of n) {
		if (e.target.startsWith("expander-")) continue;
		let t = h.get(e.source) ?? [];
		t.push(e.target), h.set(e.source, t), g.set(e.target, e.source);
	}
	let _ = [];
	for (let e of t) e.id.startsWith("expander-") || g.has(e.id) || _.push(e.id);
	let v = /* @__PURE__ */ new Set();
	for (let e of t) e.stackNodes && v.add(e.id);
	let y = r === "LR" || r === "RL", b = r === "BT" || r === "RL", x = y ? s : c, S = y ? c : s, C = x + l, w = u * 2, T = /* @__PURE__ */ new Map(), E = (e) => v.has(e) ? [] : h.get(e) ?? [];
	function D(e, t, n) {
		let r = E(e);
		if (r.length === 0) {
			let r = t + S / 2;
			return T.set(e, {
				cross: r,
				depth: n
			}), {
				crossEnd: t + S,
				centerCross: r
			};
		}
		let i = t, a = 0, o = 0;
		r.forEach((e, t) => {
			let r = D(e, i, n + 1);
			t === 0 && (a = r.centerCross), o = r.centerCross;
			let s = E(e).length > 0;
			i = r.crossEnd + (s ? w : u);
		});
		let s = r[r.length - 1], c = E(s).length > 0, l = i - (c ? w : u), d = (a + o) / 2, f = d - S / 2, p = d + S / 2, m = l;
		if (f < t) {
			let n = t - f;
			O(e, n), d += n, m = l + n;
		}
		return p > m && (m = p), T.set(e, {
			cross: d,
			depth: n
		}), {
			crossEnd: m,
			centerCross: d
		};
	}
	function O(e, t) {
		let n = [e];
		for (; n.length > 0;) {
			let e = n.pop(), r = T.get(e);
			r && (r.cross += t);
			let i = h.get(e);
			if (i) for (let e of i) n.push(e);
		}
	}
	let k = [];
	for (let e of _) {
		D(e, 0, 0);
		let t = Infinity, n = -Infinity, r = (e) => {
			let i = T.get(e);
			if (i) {
				let e = i.cross - S / 2, r = i.cross + S / 2;
				e < t && (t = e), r > n && (n = r);
			}
			let a = h.get(e);
			if (a) for (let e of a) r(e);
		};
		r(e), k.push({
			rootId: e,
			minCross: t,
			maxCross: n
		});
	}
	let A = 0;
	for (let { rootId: e, minCross: t, maxCross: n } of k) {
		let r = A - t;
		r !== 0 && O(e, r), A += n - t + d;
	}
	for (let e of v) {
		let t = T.get(e);
		t && (h.get(e) ?? []).forEach((e, n) => {
			T.set(e, {
				cross: t.cross,
				depth: t.depth + 1,
				stackIndex: n
			});
		});
	}
	let j = 0;
	for (let e of T.values()) e.depth > j && (j = e.depth);
	let M = Infinity, N = Infinity, P = -Infinity, F = -Infinity, I = (e) => m > 0 ? Math.round(e / m) * m : Math.round(e);
	return {
		nodes: t.map((t) => {
			let n = t.id.startsWith("expander-"), r = T.get(t.id);
			!r && n && t.parentId && (r = T.get(t.parentId));
			let o = r?.cross ?? 0, u = r?.depth ?? 0, d = r?.stackIndex, m = d !== void 0, h = n ? i : m && y ? f : s, g = n ? a : m && !y ? f : c, _ = (b ? j - u : u) * C, v = m ? d * (f + p) : 0, S = l * (1 - e), w = m ? b ? _ + x - f / 2 - v + S : _ + f / 2 + v - S : _ + x / 2, E = n ? o : I(o), D = Math.round(w), O = y ? D : E, k = y ? E : D, A = Math.round(O - h / 2), L = Math.round(k - g / 2);
			return A < M && (M = A), L < N && (N = L), A + h > P && (P = A + h), L + g > F && (F = L + g), {
				id: t.id,
				x: A,
				y: L,
				width: h,
				height: g
			};
		}),
		edges: n.map((e) => ({
			id: e.id,
			source: e.source,
			target: e.target,
			points: []
		})),
		width: P === -Infinity ? 0 : P - M,
		height: F === -Infinity ? 0 : F - N
	};
}
//#endregion
export { l as useLayoutEngine };
