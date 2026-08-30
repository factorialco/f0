import { GROUP_ID_SYMBOL as e } from "../useData.js";
import { isGroupRecord as t, isRecordItem as n, parseSelectedState as r } from "./utils.js";
import { useCallback as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
//#region src/hooks/datasource/useSelectable/useSelectable.ts
function l({ data: l, paginationInfo: u, source: d, selectionMode: ee = "multi", selectedState: f, onSelectItems: te, disableSelectAll: p = !1, isSearchActive: m = !1, allPagesSelection: ne, resetOnPageChange: re = !0, preserveSelectionOnDatasetChange: ie = !1, getRenderedSelectableEntries: ae, renderedSelectableCount: h = 0 }) {
	let g = l.type === "grouped", _ = ee === "multi", v = d.selectable, y = !(ne ?? d.allPagesSelection ?? !1), [b, x] = c(r(f)), [S, C] = c(/* @__PURE__ */ new Map()), [w, T] = c(!1), [oe, E] = c(null), D = s(!1), O = s(""), se = s(!1), ce = s(!0), k = s(d.currentFilters), A = s(d.currentSortings), j = d.debouncedCurrentSearch, M = s(j), le = s(""), ue = s(""), N = s(!1), P = s(!1), F = s(void 0), I = o(() => {
		if (y) return l.records?.length || 0;
		let e = u ? u.total : l.records?.length ?? 0;
		return Math.max(e, h);
	}, [
		u,
		l.records?.length,
		y,
		h
	]), L = o(() => u ? "type" in u && u.type === "pages" ? u.currentPage : "cursor" in u ? u.cursor : null : null, [u]), [R, z] = o(() => {
		let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
		for (let [n, r] of b.items?.entries() || []) r.checked ? e.set(n, r.item) : t.set(n, r.item);
		return [e, t];
	}, [b.items]), B = R.size, V = z.size, de = o(() => B === I && I > 0, [I, B]), H = o(() => p ? !1 : m ? w && B > 0 : (w || de) && B > 0, [
		p,
		w,
		de,
		B,
		m
	]), U = o(() => p || m && !D.current || !w ? !1 : V === 0 || "indeterminate", [
		p,
		w,
		V,
		m
	]), W = U === "indeterminate", fe = o(() => {
		let e = /* @__PURE__ */ new Map();
		for (let [t, n] of S.entries()) n.checked && e.set(t, n.group);
		return e;
	}, [S]), G = o(() => {
		if (!g || l.type !== "grouped") return {};
		let e = {};
		for (let t of l.groups) {
			let n = t.records.map((e) => v?.(e)).filter((e) => e !== void 0), r = 0, i = 0;
			for (let e of n) b.items?.get(e)?.checked ? r++ : i++;
			let a = n.length, o = r === a && a > 0, s = r > 0 && r < a;
			e[t.key] = {
				checked: o || s,
				indeterminate: s,
				selectedCount: r,
				unselectedCount: i
			};
		}
		return e;
	}, [
		g,
		l,
		b.items,
		v
	]), K = o(() => g ? Object.values(G).reduce((e, t) => e + (t.selectedCount || 0), 0) : w && oe !== null ? Math.max(0, Math.max(oe, h) - V) : B, [
		G,
		oe,
		V,
		B,
		g,
		w,
		h
	]), { itemsStatus: q, selectedIds: J } = o(() => {
		let e = b.items || /* @__PURE__ */ new Map(), t = d.fetchChildren !== void 0, n = y && !t ? new Set(l.records.map((e) => v?.(e)).filter((e) => e !== void 0)) : null;
		return {
			itemsStatus: Array.from(e.values()).filter((e) => e.item === void 0 ? !1 : y && n ? n.has(e.id) : !0).map(({ item: e, checked: t }) => ({
				item: e,
				checked: t
			})),
			selectedIds: Array.from(e.entries()).filter(([e, t]) => t.checked ? y && n ? n.has(e) : !0 : !1).map(([e]) => e)
		};
	}, [
		b.items,
		y,
		l.records,
		v,
		d.fetchChildren
	]), Y = o(() => Object.fromEntries(Array.from(S.values()).map(({ group: e, checked: t }) => [e.key, !!t])), [S]), pe = o(() => ({
		allChecked: U,
		itemsStatus: q,
		selectedIds: J,
		checkedItems: Array.from(R.values()),
		uncheckedItems: Array.from(z.values()),
		groupsStatus: Y,
		filters: d.currentFilters || {},
		selectedCount: K,
		totalKnownItemsCount: I
	}), [
		U,
		q,
		J,
		R,
		z,
		Y,
		d.currentFilters,
		K,
		I
	]), me = {
		checked: w || W,
		indeterminate: W,
		selectedCount: K,
		unselectedCount: V
	}, he = i((e) => b.items?.get(e)?.item ?? l.records.find((t) => {
		let n = v?.(t);
		return n !== void 0 && n === e;
	}), [
		b.items,
		l.records,
		v
	]), ge = i(() => l.type === "grouped" ? l.groups.flatMap((e) => e.records) : l.records, [l]), _e = i((e) => {
		if (!e) return "";
		let t = Array.from(e.items?.entries() || []).map(([e, t]) => `${e}:${t.checked}`).sort().join(","), n = Array.from(e.groups?.entries() || []).map(([e, t]) => `${e}:${t.checked}`).sort().join(",");
		return `${e.allSelected}|${t}|${n}`;
	}, []), ve = i((e) => {
		let t = r(e);
		x((e) => {
			let n = /* @__PURE__ */ new Map(), r = new Set(t.items?.keys() || []);
			for (let [t, i] of e.items?.entries() || []) !_ && !r.has(t) && i.checked ? n.set(t, {
				...i,
				checked: !1
			}) : n.set(t, i);
			for (let [e, r] of t.items?.entries() || []) {
				let t = n.get(e), i = he(e);
				if (!t) n.set(e, {
					id: e,
					checked: r.checked,
					item: i
				});
				else {
					let a = t.checked !== r.checked && (!_ || r.checked), o = t.item === void 0 && i !== void 0;
					(o || a) && n.set(e, {
						...t,
						...o ? { item: i } : {},
						...a ? { checked: r.checked } : {}
					});
				}
			}
			for (let e of l.records) {
				let t = v?.(e);
				t && !n.has(t) && n.set(t, {
					id: t,
					checked: w,
					item: e
				});
			}
			let i = /* @__PURE__ */ new Map();
			for (let [e, n] of t.groups?.entries() || []) i.set(String(e), {
				id: e,
				checked: n.checked
			});
			return {
				allSelected: e.allSelected,
				items: n,
				groups: i
			};
		});
	}, [
		l.records,
		v,
		w,
		he,
		_
	]), X = i((e, t, n = !1, r) => {
		let i = (Array.isArray(e) ? e : [e]).slice(0, _ ? void 0 : 1), a = Array.isArray(r) ? r : r === void 0 ? [] : [r];
		x((e) => {
			let r = !_ && t ? /* @__PURE__ */ new Map() : new Map(e.items), o = 0;
			for (let s of i) {
				if (n && r.has(s)) continue;
				o++;
				let i = e.items?.get(s)?.item, c = a.find((e) => {
					let t = v?.(e);
					return t !== void 0 && t === s;
				}), u = i ?? c ?? l.records.find((e) => {
					let t = v?.(e);
					return t !== void 0 && t === s;
				});
				r.set(s, {
					id: s,
					checked: t,
					item: u
				});
			}
			return o === 0 ? e : {
				...e,
				items: r
			};
		});
	}, [
		_,
		l.records,
		v
	]), Z = i((e, n) => {
		if (!g || l.type !== "grouped") return;
		let r = t(e) ? [e.key] : Array.isArray(e) ? [...e] : [e], i = l.groups.filter((e) => r.includes(e.key));
		if (i.length === 0) return;
		let a = i.flatMap((e) => e.records.map((e) => v?.(e)).filter((e) => e !== void 0));
		a.length > 0 && X(a, n), C((e) => {
			let t = new Map(e);
			for (let e of i) t.set(e.key, {
				group: e,
				checked: n
			});
			return t;
		});
	}, [
		g,
		l,
		v,
		X
	]), Q = i(() => {
		let e = ae?.() ?? [];
		return e.length > 0 ? e : l.records.map((e) => {
			let t = v?.(e);
			return t === void 0 ? void 0 : [t, e];
		}).filter((e) => e !== void 0);
	}, [
		ae,
		l.records,
		v
	]), ye = i((e, t) => {
		if (n(e, v !== void 0)) {
			let n = v?.(e);
			n !== void 0 && X(n, t, !1, e);
			return;
		}
		X(e, t);
	}, [v, X]), be = i((e) => {
		if (!_) return;
		if (!e && w) {
			T(!1), D.current = !1, E(null), C(/* @__PURE__ */ new Map()), N.current = !1, x(() => ({
				allSelected: !1,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Map()
			}));
			return;
		}
		let t = g && l.type === "grouped" ? [] : Q(), n = t.length || l.records?.length || 0;
		if (e && E((e) => e === null ? n : e), g && l.type === "grouped") {
			let t = l.groups.map((e) => e.key);
			t.length > 0 && Z(t, e);
		} else {
			let n = t.map(([e]) => e), r = t.map(([, e]) => e);
			n.length > 0 && X(n, e, !1, r);
		}
		e || (T(!1), D.current = !1, E(null));
	}, [
		_,
		w,
		g,
		l,
		Q,
		Z,
		X
	]), xe = i((e) => {
		if (_) {
			if (T(e), D.current = e, E(e ? I : null), g && l.type === "grouped") {
				let t = l.groups.map((e) => e.key);
				t.length > 0 && Z(t, e);
			} else if (e) {
				let e = Q();
				x((t) => {
					let n = /* @__PURE__ */ new Map();
					for (let [t, r] of e) n.set(t, {
						id: t,
						checked: !0,
						item: r
					});
					return {
						...t,
						allSelected: !0,
						items: n
					};
				});
			} else {
				let e = Q().map(([e]) => e);
				e.length > 0 && X(e, !1), x((e) => {
					let t = new Map(e.items), n = !1;
					for (let [e, r] of t.entries()) r.checked !== !1 && (t.set(e, {
						...r,
						checked: !1
					}), n = !0);
					return n ? {
						...e,
						allSelected: !1,
						items: t
					} : e;
				});
			}
		}
	}, [
		_,
		I,
		g,
		l,
		Q,
		Z,
		X
	]), $ = i(() => {
		T(!1), D.current = !1, E(null), C(/* @__PURE__ */ new Map()), N.current = !1, x(() => ({
			allSelected: !1,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Map()
		}));
	}, []);
	return a(() => {
		x((e) => ({
			...e,
			allSelected: U
		}));
	}, [U]), a(() => {
		let e = _e(f);
		if (!se.current) {
			se.current = !0, O.current = e;
			return;
		}
		e !== O.current && (O.current = e, ve(f));
	}, [
		f,
		_e,
		ve
	]), a(() => {
		if (ce.current) {
			ce.current = !1, k.current = d.currentFilters, A.current = d.currentSortings, M.current = j;
			return;
		}
		let e = JSON.stringify(d.currentFilters) !== JSON.stringify(k.current), t = JSON.stringify(d.currentSortings) !== JSON.stringify(A.current), n = j !== M.current;
		(e || t || n) && (!p && (!ie || w) && (P.current = !0, $()), k.current = d.currentFilters, A.current = d.currentSortings, M.current = j);
	}, [
		d.currentFilters,
		d.currentSortings,
		j,
		$,
		p,
		ie,
		w
	]), a(() => {
		if (!re) return;
		if (u?.type === "infinite-scroll") {
			F.current = L;
			return;
		}
		let e = F.current;
		if (e === void 0) {
			F.current = L;
			return;
		}
		L !== e && (w || $()), F.current = L;
	}, [
		L,
		w,
		$,
		re,
		u?.type
	]), a(() => {
		N.current = H;
	}, [H]), a(() => {
		let t = ge();
		if (t.length === 0) return;
		let n = t.map((e) => v?.(e)).filter((e) => e !== void 0), r = n.join(",");
		if (r !== le.current) {
			if (le.current = r, P.current) {
				P.current = !1;
				return;
			}
			if (g) for (let n of t) {
				let t = v?.(n);
				if (t === void 0) continue;
				let r = n[e];
				r && S.get(r)?.checked && X(t, !0, !0);
			}
			else _ && !y && X(n, N.current, !0);
			x((e) => {
				let n = !1, r = new Map(e.items);
				for (let [e, i] of r.entries()) if (i.item === void 0) {
					let a = t.find((t) => {
						let n = v?.(t);
						return n !== void 0 && n === e;
					});
					a && (r.set(e, {
						...i,
						item: a
					}), n = !0);
				}
				return n ? {
					...e,
					items: r
				} : e;
			});
		}
	}, [
		l.records,
		l.groups,
		v,
		ge,
		g,
		S,
		_,
		X,
		y
	]), a(() => {
		B === 0 && (T(!1), D.current = !1);
	}, [B]), a(() => {
		let e = JSON.stringify({
			allSelectedCheck: w,
			allSelectedState: U,
			itemsCount: b.items?.size ?? 0,
			checkedCount: B
		});
		e !== ue.current && (ue.current = e, te?.({
			allSelected: U,
			itemsStatus: q,
			selectedIds: J,
			groupsStatus: Y,
			filters: d.currentFilters || {},
			selectedCount: K
		}, $, xe));
	}, [
		w,
		U,
		q,
		J,
		Y,
		K,
		B
	]), {
		isAllSelected: H,
		isPartiallySelected: W,
		selectedItems: R,
		selectedGroups: fe,
		allSelectedStatus: me,
		clearSelection: $,
		handleSelectItemChange: ye,
		handleSelectAll: be,
		handleSelectAllItems: xe,
		handleSelectGroupChange: Z,
		selectionMeta: {
			selectedItemsCount: K,
			totalKnownItemsCount: I,
			checkedItems: Array.from(R.values()),
			uncheckedItems: Array.from(z.values())
		},
		groupAllSelectedStatus: G,
		selectionStatus: pe,
		selectedState: b
	};
}
//#endregion
export { l as useSelectable };
