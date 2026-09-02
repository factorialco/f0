import { GROUP_ID_SYMBOL as e } from "../useData.js";
import { isGroupRecord as t, isRecordItem as n, parseSelectedState as r } from "./utils.js";
import { useCallback as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
//#region src/hooks/datasource/useSelectable/useSelectable.ts
function l({ data: l, paginationInfo: u, source: d, selectionMode: ee = "multi", selectedState: f, onSelectItems: te, disableSelectAll: ne, isSearchActive: p = !1, allPagesSelection: re, resetOnPageChange: ie = !0, preserveSelectionOnDatasetChange: ae = !1, getRenderedSelectableEntries: oe, renderedSelectableCount: m = 0 }) {
	let h = l.type === "grouped", g = ee === "multi", _ = d.selectable, v = i((e) => d.selectionInherited?.(e) === !0 || d.selectionDisabled?.(e) === !0, [d]), y = ne ?? d.disableSelectAll ?? !1, b = !(re ?? d.allPagesSelection ?? !1), [x, S] = c(r(f)), [C, w] = c(/* @__PURE__ */ new Map()), [T, E] = c(!1), [D, O] = c(null), k = s(!1), A = s(""), se = s(!1), ce = s(!0), le = s(d.currentFilters), ue = s(d.currentSortings), j = d.debouncedCurrentSearch, M = s(j), de = s(""), fe = s(""), N = s(!1), P = s(!1), F = s(void 0), I = o(() => {
		if (b) return l.records?.length || 0;
		let e = u ? u.total : l.records?.length ?? 0;
		return Math.max(e, m);
	}, [
		u,
		l.records?.length,
		b,
		m
	]), L = o(() => u ? "type" in u && u.type === "pages" ? u.currentPage : "cursor" in u ? u.cursor : null : null, [u]), [R, z] = o(() => {
		let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
		for (let [n, r] of x.items?.entries() || []) r.checked ? e.set(n, r.item) : t.set(n, r.item);
		return [e, t];
	}, [x.items]), B = R.size, V = z.size, pe = o(() => B === I && I > 0, [I, B]), H = o(() => y ? !1 : p ? T && B > 0 : (T || pe) && B > 0, [
		y,
		T,
		pe,
		B,
		p
	]), U = o(() => y || p && !k.current || !T ? !1 : V === 0 || "indeterminate", [
		y,
		T,
		V,
		p
	]), W = U === "indeterminate", me = o(() => {
		let e = /* @__PURE__ */ new Map();
		for (let [t, n] of C.entries()) n.checked && e.set(t, n.group);
		return e;
	}, [C]), G = o(() => {
		if (!h || l.type !== "grouped") return {};
		let e = {};
		for (let t of l.groups) {
			let n = t.records.map((e) => _?.(e)).filter((e) => e !== void 0), r = 0, i = 0;
			for (let e of n) x.items?.get(e)?.checked ? r++ : i++;
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
		h,
		l,
		x.items,
		_
	]), K = o(() => h ? Object.values(G).reduce((e, t) => e + (t.selectedCount || 0), 0) : T && D !== null ? Math.max(0, Math.max(D, m) - V) : B, [
		G,
		D,
		V,
		B,
		h,
		T,
		m
	]), { itemsStatus: q, selectedIds: J } = o(() => {
		let e = x.items || /* @__PURE__ */ new Map(), t = d.fetchChildren !== void 0, n = b && !t ? new Set(l.records.map((e) => _?.(e)).filter((e) => e !== void 0)) : null;
		return {
			itemsStatus: Array.from(e.values()).filter((e) => e.item === void 0 ? !1 : b && n ? n.has(e.id) : !0).map(({ item: e, checked: t }) => ({
				item: e,
				checked: t
			})),
			selectedIds: Array.from(e.entries()).filter(([e, t]) => t.checked ? b && n ? n.has(e) : !0 : !1).map(([e]) => e)
		};
	}, [
		x.items,
		b,
		l.records,
		_,
		d.fetchChildren
	]), Y = o(() => Object.fromEntries(Array.from(C.values()).map(({ group: e, checked: t }) => [e.key, !!t])), [C]), he = o(() => ({
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
	]), ge = {
		checked: T || W,
		indeterminate: W,
		selectedCount: K,
		unselectedCount: V
	}, _e = i((e) => x.items?.get(e)?.item ?? l.records.find((t) => {
		let n = _?.(t);
		return n !== void 0 && n === e;
	}), [
		x.items,
		l.records,
		_
	]), ve = i(() => l.type === "grouped" ? l.groups.flatMap((e) => e.records) : l.records, [l]), ye = i((e) => {
		if (!e) return "";
		let t = Array.from(e.items?.entries() || []).map(([e, t]) => `${e}:${t.checked}`).sort().join(","), n = Array.from(e.groups?.entries() || []).map(([e, t]) => `${e}:${t.checked}`).sort().join(",");
		return `${e.allSelected}|${t}|${n}`;
	}, []), be = i((e) => {
		let t = r(e);
		S((e) => {
			let n = /* @__PURE__ */ new Map(), r = new Set(t.items?.keys() || []);
			for (let [t, i] of e.items?.entries() || []) !g && !r.has(t) && i.checked ? n.set(t, {
				...i,
				checked: !1
			}) : n.set(t, i);
			for (let [e, r] of t.items?.entries() || []) {
				let t = n.get(e), i = _e(e);
				if (!t) n.set(e, {
					id: e,
					checked: r.checked,
					item: i
				});
				else {
					let a = t.checked !== r.checked && (!g || r.checked), o = t.item === void 0 && i !== void 0;
					(o || a) && n.set(e, {
						...t,
						...o ? { item: i } : {},
						...a ? { checked: r.checked } : {}
					});
				}
			}
			for (let e of l.records) {
				let t = _?.(e);
				t && !n.has(t) && n.set(t, {
					id: t,
					checked: T,
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
		_,
		T,
		_e,
		g
	]), X = i((e, t, n = !1, r) => {
		let i = (Array.isArray(e) ? e : [e]).slice(0, g ? void 0 : 1), a = Array.isArray(r) ? r : r === void 0 ? [] : [r];
		S((e) => {
			let r = !g && t ? /* @__PURE__ */ new Map() : new Map(e.items), o = 0;
			for (let s of i) {
				if (n && r.has(s)) continue;
				o++;
				let i = e.items?.get(s)?.item, c = a.find((e) => {
					let t = _?.(e);
					return t !== void 0 && t === s;
				}), u = i ?? c ?? l.records.find((e) => {
					let t = _?.(e);
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
		g,
		l.records,
		_
	]), Z = i((e, n) => {
		if (!h || l.type !== "grouped") return;
		let r = t(e) ? [e.key] : Array.isArray(e) ? [...e] : [e], i = l.groups.filter((e) => r.includes(e.key));
		if (i.length === 0) return;
		let a = i.flatMap((e) => e.records.map((e) => _?.(e)).filter((e) => e !== void 0));
		a.length > 0 && X(a, n), w((e) => {
			let t = new Map(e);
			for (let e of i) t.set(e.key, {
				group: e,
				checked: n
			});
			return t;
		});
	}, [
		h,
		l,
		_,
		X
	]), Q = i(() => {
		let e = ([, e]) => v(e) === !0, t = oe?.() ?? [];
		return t.length > 0 ? t.filter((t) => !e(t)) : l.records.map((e) => {
			let t = _?.(e);
			return t === void 0 ? void 0 : [t, e];
		}).filter((e) => e !== void 0).filter((t) => !e(t));
	}, [
		oe,
		l.records,
		_,
		v
	]), xe = i((e, t) => {
		if (n(e, _ !== void 0)) {
			if (v(e)) return;
			let n = _?.(e);
			n !== void 0 && X(n, t, !1, e);
			return;
		}
		X(e, t);
	}, [
		_,
		v,
		X
	]), Se = i((e) => {
		if (!g) return;
		if (!e && T) {
			E(!1), k.current = !1, O(null), w(/* @__PURE__ */ new Map()), N.current = !1, S(() => ({
				allSelected: !1,
				items: /* @__PURE__ */ new Map(),
				groups: /* @__PURE__ */ new Map()
			}));
			return;
		}
		let t = h && l.type === "grouped" ? [] : Q(), n = t.length || l.records?.length || 0;
		if (e && O((e) => e === null ? n : e), h && l.type === "grouped") {
			let t = l.groups.map((e) => e.key);
			t.length > 0 && Z(t, e);
		} else {
			let n = t.map(([e]) => e), r = t.map(([, e]) => e);
			n.length > 0 && X(n, e, !1, r);
		}
		e || (E(!1), k.current = !1, O(null));
	}, [
		g,
		T,
		h,
		l,
		Q,
		Z,
		X
	]), Ce = i((e) => {
		if (g) {
			if (E(e), k.current = e, O(e ? I : null), h && l.type === "grouped") {
				let t = l.groups.map((e) => e.key);
				t.length > 0 && Z(t, e);
			} else if (e) {
				let e = Q();
				S((t) => {
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
				e.length > 0 && X(e, !1), S((e) => {
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
		g,
		I,
		h,
		l,
		Q,
		Z,
		X
	]), $ = i(() => {
		E(!1), k.current = !1, O(null), w(/* @__PURE__ */ new Map()), N.current = !1, S(() => ({
			allSelected: !1,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Map()
		}));
	}, []);
	return a(() => {
		S((e) => ({
			...e,
			allSelected: U
		}));
	}, [U]), a(() => {
		let e = ye(f);
		if (!se.current) {
			se.current = !0, A.current = e;
			return;
		}
		e !== A.current && (A.current = e, be(f));
	}, [
		f,
		ye,
		be
	]), a(() => {
		if (ce.current) {
			ce.current = !1, le.current = d.currentFilters, ue.current = d.currentSortings, M.current = j;
			return;
		}
		let e = JSON.stringify(d.currentFilters) !== JSON.stringify(le.current), t = JSON.stringify(d.currentSortings) !== JSON.stringify(ue.current), n = j !== M.current;
		(e || t || n) && (!y && (!ae || T) && (P.current = !0, $()), le.current = d.currentFilters, ue.current = d.currentSortings, M.current = j);
	}, [
		d.currentFilters,
		d.currentSortings,
		j,
		$,
		y,
		ae,
		T
	]), a(() => {
		if (!ie) return;
		if (u?.type === "infinite-scroll") {
			F.current = L;
			return;
		}
		let e = F.current;
		if (e === void 0) {
			F.current = L;
			return;
		}
		L !== e && (T || $()), F.current = L;
	}, [
		L,
		T,
		$,
		ie,
		u?.type
	]), a(() => {
		N.current = H;
	}, [H]), a(() => {
		let t = ve();
		if (t.length === 0) return;
		let n = t.map((e) => _?.(e)).filter((e) => e !== void 0), r = n.join(",");
		if (r !== de.current) {
			if (de.current = r, P.current) {
				P.current = !1;
				return;
			}
			if (h) for (let n of t) {
				let t = _?.(n);
				if (t === void 0) continue;
				let r = n[e];
				r && C.get(r)?.checked && X(t, !0, !0);
			}
			else g && !b && X(n, N.current, !0);
			S((e) => {
				let n = !1, r = new Map(e.items);
				for (let [e, i] of r.entries()) if (i.item === void 0) {
					let a = t.find((t) => {
						let n = _?.(t);
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
		_,
		ve,
		h,
		C,
		g,
		X,
		b
	]), a(() => {
		B === 0 && (E(!1), k.current = !1);
	}, [B]), a(() => {
		let e = JSON.stringify({
			allSelectedCheck: T,
			allSelectedState: U,
			itemsCount: x.items?.size ?? 0,
			checkedCount: B
		});
		e !== fe.current && (fe.current = e, te?.({
			allSelected: U,
			itemsStatus: q,
			selectedIds: J,
			groupsStatus: Y,
			filters: d.currentFilters || {},
			selectedCount: K
		}, $, Ce));
	}, [
		T,
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
		selectedGroups: me,
		allSelectedStatus: ge,
		clearSelection: $,
		handleSelectItemChange: xe,
		handleSelectAll: Se,
		handleSelectAllItems: Ce,
		handleSelectGroupChange: Z,
		selectionMeta: {
			selectedItemsCount: K,
			totalKnownItemsCount: I,
			checkedItems: Array.from(R.values()),
			uncheckedItems: Array.from(z.values())
		},
		groupAllSelectedStatus: G,
		selectionStatus: he,
		selectedState: x
	};
}
//#endregion
export { l as useSelectable };
