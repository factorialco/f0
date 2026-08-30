//#region src/patterns/F0Graph/utils.ts
function e(e, t, n) {
	if (!(!e || !n.has(e))) return [e, ...t.filter((e) => n.has(e))].map((e) => ({ id: e }));
}
function t(e, t, n, r, i) {
	return e <= i.maxX && e + n >= i.minX && t <= i.maxY && t + r >= i.minY;
}
function n(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let n of e) {
		if (!t.has(n.id) || n.parentId === null) continue;
		let e = i.get(n.parentId);
		e ? e.push(n.id) : i.set(n.parentId, [n.id]);
	}
	let a = r === "LR" || r === "RL", o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
	for (let [e, t] of i) {
		if (t.some((e) => n.get(e) === void 0)) continue;
		t.sort((e, t) => {
			let r = n.get(e), i = n.get(t);
			return a ? r.x - i.x : r.y - i.y;
		});
		let r = t.map((e) => n.get(e)).map((e) => {
			let t = e;
			return a ? {
				x: t.x,
				y: t.y + 22,
				width: t.width,
				height: Math.max(0, t.height - 44)
			} : {
				x: t.x + 22,
				y: t.y,
				width: Math.max(0, t.width - 44),
				height: t.height
			};
		}), i = Math.min(...r.map((e) => e.x)), l = Math.min(...r.map((e) => e.y)), u = Math.max(...r.map((e) => e.x + e.width)), d = Math.max(...r.map((e) => e.y + e.height)), f = {
			id: `stack-${e}`,
			x: i - 8,
			y: l - 8,
			width: u - i + 16,
			height: d - l + 16,
			rows: /* @__PURE__ */ new Map()
		};
		t.forEach((e, n) => {
			let i = r[n];
			f.rows.set(e, {
				x: i.x - f.x,
				y: i.y - f.y,
				width: i.width,
				height: i.height
			}), s.set(e, f.id), n > 0 && c.set(e, t[n - 1]);
		}), o.set(e, f);
	}
	return {
		groups: o,
		groupOf: s,
		previousRow: c
	};
}
function r(e, t, n) {
	for (let r of e) if (t >= r.x && t <= r.x + r.width && n >= r.y && n <= r.y + r.height) return r.parentId;
	return null;
}
function i(e) {
	if (e.length === 0) return null;
	let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity;
	for (let a of e) t = Math.min(t, a.x), n = Math.min(n, a.y), r = Math.max(r, a.x + a.width), i = Math.max(i, a.y + a.height);
	return {
		x: t,
		y: n,
		width: r - t,
		height: i - n
	};
}
function a(e, t) {
	let n = /* @__PURE__ */ new Set();
	function r(e, i) {
		if (i < t && e.children.length > 0) {
			n.add(e.id);
			for (let t of e.children) r(t, i + 1);
		}
	}
	for (let t of e) r(t, 0);
	return n;
}
function o(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		if (e.children.length > 0) {
			t.add(e.id);
			for (let t of e.children) n(t);
		}
	}
	for (let t of e) n(t);
	return t;
}
function s(e) {
	let t = [];
	function n(e) {
		for (let r of e.children) t.push({
			id: `${e.id}->${r.id}`,
			source: e.id,
			target: r.id
		}), n(r);
	}
	for (let t of e) n(t);
	return t;
}
function c(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
	for (let r of e) !r.stackNodes || r.children.length === 0 || r.children.some((e) => e.childrenCount > 0 || e.children.length > 0) || (t.add(r.id), r.children.forEach((e, t) => {
		n.set(e.id, t);
	}));
	return {
		stackedParentIds: t,
		stackedNodeIndex: n
	};
}
function l(e, t) {
	let n = [];
	function r(e) {
		if (n.push(e), t.has(e.id)) for (let t of e.children) r(t);
	}
	for (let t of e) r(t);
	return n;
}
//#endregion
export { o as collectExpandableNodeIds, l as collectVisibleNodes, a as computeExpandedByDepth, i as computeLayoutBounds, n as computeStackGroups, s as deriveEdgesFromTree, r as findStackHoverZoneAt, t as nodeIntersectsRect, e as resolveInitialFitViewNodes, c as resolveStackedParents };
