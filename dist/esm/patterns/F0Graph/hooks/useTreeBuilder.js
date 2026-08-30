import { useMemo as e } from "react";
//#region src/patterns/F0Graph/hooks/useTreeBuilder.ts
function t(t) {
	return e(() => r(t), [t]);
}
function n(e) {
	return e.parentIds && e.parentIds.length > 0 ? e.parentIds[0] : e.parentId;
}
function r(e) {
	let t = /* @__PURE__ */ new Map(), r = [], i = [], a = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = n(r), i = r.parentIds && r.parentIds.length > 0 ? r.parentIds : void 0, a = {
			id: r.id,
			parentId: e,
			data: r.data,
			children: [],
			depth: 0,
			childrenCount: r.childrenCount ?? 0,
			childrenLoaded: r.childrenLoaded ?? !1,
			dataLoaded: r.dataLoaded,
			stackNodes: r.stackNodes
		};
		i && (a.dagParentIds = i), t.set(r.id, a);
	}
	for (let [e, n] of t) n.parentId === e && (i.push(e), a.add(e), n.parentId = null);
	let o = [];
	for (let [e, n] of t) {
		if (a.has(e)) {
			o.push(n);
			continue;
		}
		if (n.parentId === null) o.push(n);
		else {
			let i = t.get(n.parentId);
			i ? i.children.push(n) : (r.push(e), n.parentId = null, o.push(n));
		}
	}
	let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
	function l(e) {
		if (c.has(e.id)) {
			i.push(e.id), a.add(e.id);
			return;
		}
		if (!s.has(e.id)) {
			s.add(e.id), c.add(e.id), e.children = e.children.filter((e) => !c.has(e.id) || (i.push(e.id), a.add(e.id), e.parentId = null, o.push(e), !1));
			for (let t of e.children) l(t);
			c.delete(e.id);
		}
	}
	for (let e of [...o]) l(e);
	for (let e of t.values()) s.has(e.id) || l(e);
	function u(e, t) {
		e.depth = t;
		for (let n of e.children) u(n, t + 1);
	}
	for (let e of o) u(e, 0);
	return {
		roots: o,
		nodeMap: t,
		orphans: r,
		cycles: i
	};
}
//#endregion
export { t as useTreeBuilder };
