import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Graph/useDataCollectionTreeData.ts
var i = 200, a = (e) => ({
	message: "Error fetching data",
	cause: e
}), o = (e) => Array.isArray(e) ? e : e && typeof e == "object" && "records" in e ? e.records ?? [] : [], s = (e) => {
	if (e && typeof e == "object" && "subscribe" in e) {
		let t = e;
		return new Promise((e, n) => {
			let r = !1, i = t.subscribe({
				next: (t) => {
					if (!r) {
						if (t?.error) {
							r = !0, n(t.error), i.unsubscribe();
							return;
						}
						t?.data && (r = !0, e(o(t.data)), i.unsubscribe());
					}
				},
				error: (e) => {
					r || (r = !0, n(e));
				},
				complete: () => {
					r || (r = !0, e([]));
				}
			});
		});
	}
	return e && typeof e == "object" && "then" in e ? e.then((e) => o(e)) : Promise.resolve(o(e));
}, c = (e) => (e.childrenCount ?? 0) > 0, l = (e, t) => {
	if (t.size === 0) return e;
	let n = !1, r = e.map((e) => {
		let r = t.get(e.id);
		return r ? (n = !0, {
			...e,
			data: r,
			dataLoaded: !0
		}) : e;
	});
	return n ? r : e;
}, u = (e, t, n) => {
	let r = new Set(e.map((e) => e.id)), i = t.filter((e) => !r.has(e.id));
	return [...e.map((e) => e.id === n ? {
		...e,
		childrenLoaded: !0
	} : e), ...i];
}, d = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		if (n.parentId === null) continue;
		let e = t.get(n.parentId) ?? [];
		e.push(n.id), t.set(n.parentId, e);
	}
	return t;
}, f = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	if (e.length === 0) return n;
	let r = d(t.values()), i = [];
	for (let r of e) t.has(r) && !n.has(r) && (n.add(r), i.push(r));
	for (let e = 0; e < i.length; e++) for (let t of r.get(i[e]) ?? []) n.has(t) || (n.add(t), i.push(t));
	return n;
}, p = (e) => {
	let t = [];
	for (let n of e.values()) n.parentId !== null && !e.has(n.parentId) && t.push(n.id);
	return t;
}, m = ({ records: e, byId: t, touchedParents: n, getId: r, getParentId: i, getChildrenCount: a, stackNodes: o, hydrates: s }) => {
	for (let c of e) {
		let e = r(c), l = t.get(e), u = i ? i(c) : l?.parentId ?? null, d = a(c);
		l ? (l.parentId !== u && (l.parentId !== null && n.add(l.parentId), u !== null && n.add(u)), t.set(e, {
			...l,
			data: c,
			parentId: u,
			childrenCount: d,
			stackNodes: o?.(c),
			dataLoaded: s ? !0 : l.dataLoaded
		})) : (u !== null && n.add(u), t.set(e, {
			id: e,
			parentId: u,
			data: c,
			childrenCount: d,
			childrenLoaded: !1,
			stackNodes: o?.(c),
			dataLoaded: s ? !0 : void 0
		}));
	}
}, h = (e, t, n) => {
	if (t.size === 0) return;
	let r = /* @__PURE__ */ new Map();
	for (let n of e.values()) n.parentId === null || !t.has(n.parentId) || r.set(n.parentId, (r.get(n.parentId) ?? 0) + 1);
	for (let i of t) {
		let t = e.get(i);
		if (!t) continue;
		let a = r.get(i) ?? 0;
		if (n.has(i) || t.childrenLoaded) e.set(i, {
			...t,
			childrenCount: a,
			childrenLoaded: !0
		}), n.add(i);
		else {
			let r = Math.max(t.childrenCount ?? 0, a), o = a > 0 && r === a;
			e.set(i, {
				...t,
				childrenCount: r,
				childrenLoaded: o || t.childrenLoaded
			}), o && n.add(i);
		}
	}
};
function g(o, d, g) {
	let _ = n(o);
	_.current = o;
	let v = n(d);
	v.current = d;
	let y = n(g);
	y.current = g;
	let [b, x] = r([]), S = n([]);
	S.current = b;
	let [C, w] = r(/* @__PURE__ */ new Set()), T = n(C);
	T.current = C;
	let [E, D] = r(void 0), [O, k] = r(/* @__PURE__ */ new Set()), [A, j] = r(!0), [M, N] = r(null), P = n(/* @__PURE__ */ new Set()), F = e((e) => {
		let t = v.current;
		return t.getNodeId ? t.getNodeId(e) : String(e.id);
	}, []), I = e((e, t) => ({
		id: F(e),
		parentId: t,
		data: e,
		childrenCount: v.current.getChildrenCount(e),
		childrenLoaded: !1,
		stackNodes: v.current.stackNodes?.(e),
		dataLoaded: !v.current.loadNodeData && void 0
	}), [F]), L = e(async (e) => {
		let t = _.current, n = t.dataAdapter, r = t.currentSortings ? [{
			field: String(t.currentSortings.field),
			order: t.currentSortings.order
		}] : [], a = {
			filters: {
				...t.currentFilters,
				...e
			},
			sortings: r,
			navigationFilters: t.currentNavigationFilters
		}, o = "perPage" in n && typeof n.perPage == "number" ? n.perPage : i;
		return n.paginationType === void 0 ? s(n.fetchData(a)) : n.paginationType === "pages" ? s(n.fetchData({
			...a,
			pagination: {
				currentPage: 1,
				perPage: o
			}
		})) : n.paginationType === "infinite-scroll" ? s(n.fetchData({
			...a,
			pagination: {
				cursor: null,
				perPage: o
			}
		})) : s(n.fetchData({
			...a,
			pagination: {}
		}));
	}, []), R = e(async (e) => {
		if (P.current.has(e)) return S.current.filter((t) => t.parentId === e);
		P.current.add(e);
		try {
			let t = (await L(v.current.childrenFilters(e))).map((t) => I(t, e));
			return x((n) => u(n, t, e)), t;
		} catch (t) {
			P.current.delete(e);
			let n = a(t);
			return N(n), y.current.onLoadError(n), [];
		}
	}, [L, I]), z = e(async (e) => {
		let t = S.current.filter((t) => t.parentId === null && e.has(t.id) && c(t)), n = /* @__PURE__ */ new Set();
		for (; t.length > 0;) {
			let r = t.filter((e) => !n.has(e.id));
			if (r.forEach((e) => n.add(e.id)), r.length === 0) break;
			let i = await Promise.all(r.map((e) => R(e.id).then((e) => ({ children: e })))), a = [];
			for (let { children: t } of i) for (let n of t) e.has(n.id) && c(n) && a.push(n);
			t = a;
		}
	}, [R]), B = e((e) => {
		w(e), z(e);
	}, [z]), V = e(async (e) => {
		let t = v.current, n = t.loadNodePath ? await t.loadNodePath(e) : [];
		n.length > 0 && x((e) => {
			let r = new Set(e.map((e) => e.id)), i = n.filter((e) => !r.has(F(e))).map((e, r) => {
				let i = t.getParentId ? t.getParentId(e) : r > 0 ? F(n[r - 1]) : null;
				return I(e, i);
			});
			return i.length > 0 ? [...e, ...i] : e;
		});
		let r = n.map(F).filter((t) => t !== e);
		return await Promise.all([...r, e].map((e) => R(e))), r;
	}, [
		F,
		I,
		R
	]), H = e(async (e) => {
		try {
			let t = await V(e);
			B(/* @__PURE__ */ new Set([...T.current, ...t])), D(e), k(/* @__PURE__ */ new Set([e]));
		} catch (e) {
			let t = a(e);
			N(t), y.current.onLoadError(t);
		}
	}, [V, B]), U = e(() => {
		D(void 0), k(/* @__PURE__ */ new Set());
	}, []), W = e((e) => {
		let t = v.current.loadNodeData;
		if (!t) return;
		let n = new Map(S.current.map((e) => [e.id, e])), r = e.filter((e) => n.get(e)?.dataLoaded === !1);
		r.length !== 0 && t(r).then((e) => {
			let t = new Map(e.map((e) => [F(e), e]));
			x((e) => l(e, t));
		}).catch((e) => {
			let t = a(e);
			N(t), y.current.onLoadError(t);
		});
	}, [F]), G = e((e, t) => {
		if (e.length === 0 && t.length === 0) return;
		let n = v.current;
		x((r) => {
			let i = new Map(r.map((e) => [e.id, e])), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = (e) => {
				for (let t of f(e, i)) {
					let e = i.get(t)?.parentId;
					e != null && o.add(e), i.delete(t), P.current.delete(t), a.add(t);
				}
			};
			if (s(t), m({
				records: e,
				byId: i,
				touchedParents: o,
				getId: F,
				getParentId: n.getParentId,
				getChildrenCount: n.getChildrenCount,
				stackNodes: n.stackNodes,
				hydrates: !!n.loadNodeData
			}), s(p(i)), h(i, o, P.current), a.size > 0) {
				let e = T.current, t = new Set([...e].filter((e) => !a.has(e)));
				t.size !== e.size && w(t);
			}
			let c = r.map((e) => i.get(e.id)).filter((e) => !!e), l = new Set(c.map((e) => e.id)), u = [...i.values()].filter((e) => !l.has(e.id));
			return [...c, ...u];
		});
	}, [F]), K = e(async () => {
		j(!0), N(null), x([]), S.current = [], P.current = /* @__PURE__ */ new Set();
		try {
			let e = Math.max(0, v.current.defaultExpandDepth ?? 1), t = (await L(v.current.childrenFilters(null))).map((e) => I(e, null));
			x(t), S.current = t;
			let n = /* @__PURE__ */ new Set(), r = t;
			for (let t = 0; t < e && r.length > 0; t++) {
				let e = r.filter(c);
				if (e.length === 0) break;
				let t = await Promise.all(e.map((e) => R(e.id)));
				e.forEach((e) => n.add(e.id)), r = e.flatMap((e, n) => t[n]);
			}
			let i = v.current.focusOnEntry;
			if (i && v.current.loadNodePath) try {
				let e = await V(i);
				for (let t of e) n.add(t);
			} catch {}
			w(n), y.current.onLoadData({
				totalItems: t.length,
				filters: _.current.currentFilters,
				search: _.current.currentSearch,
				isInitialLoading: !1,
				data: t.map((e) => e.data)
			});
		} catch (e) {
			let t = a(e);
			N(t), y.current.onLoadError(t);
		} finally {
			j(!1);
		}
	}, [
		L,
		I,
		R,
		V
	]), q = JSON.stringify(o.currentFilters), J = JSON.stringify(o.currentNavigationFilters);
	t(() => {
		K();
	}, [
		q,
		J,
		K
	]);
	let Y = d.liveUpdate?.version, X = n(Y);
	return t(() => {
		let e = v.current.liveUpdate;
		!e || e.version === X.current || (X.current = e.version, G(e.upsert ?? [], e.remove ?? []));
	}, [Y, G]), {
		nodes: b,
		expandedNodes: C,
		setExpandedNodes: B,
		focusedNode: E,
		highlightedNodes: O,
		revealNode: H,
		clearFocus: U,
		loadVisibleNodeData: d.loadNodeData ? W : void 0,
		isInitialLoading: A,
		error: M
	};
}
//#endregion
export { g as useDataCollectionTreeData };
