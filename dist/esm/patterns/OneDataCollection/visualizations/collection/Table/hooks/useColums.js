import { useEffect as e, useMemo as t, useState as n } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useColums.ts
var r = (e) => e.id ?? e.label ?? "column", i = (e, t, n) => n ? [.../* @__PURE__ */ new Set([...e ?? [], t])] : (e ?? []).filter((e) => e !== t), a = (e) => [...e].sort((t, n) => (t.order ?? e.length) - (n.order ?? e.length)).map((e) => r(e)), o = (e) => e.filter((e) => e.hidden && !e.noHiding).map((e) => r(e)), s = (i, s, c, l, u, d, f) => {
	let p = () => {
		if (!u || c?.hidden === void 0) return o(i);
		if (!c.order || c.order.length === 0) return c.hidden;
		let e = new Set(c.order), t = i.filter((t) => t.hidden && !t.noHiding && !e.has(r(t))).map(r);
		return [...c.hidden, ...t];
	}, [m, h] = n(p()), [g, _] = n((l && c?.order !== void 0 ? c.order : void 0) ?? a(i));
	e(() => {
		u && h(p());
	}, [JSON.stringify(c?.hidden), u]), e(() => {
		l && _(c?.order === void 0 ? a(i) : c.order);
	}, [JSON.stringify(c?.order), l]);
	let v = f ? s : s || 1, y = t(() => {
		let e = i.slice(0, v), t = [...i.slice(v)].sort((e, t) => {
			let n = g.indexOf(r(e)), i = g.indexOf(r(t));
			return (n === -1 ? g.length : n) - (i === -1 ? g.length : i);
		});
		return [...e, ...t];
	}, [
		i,
		v,
		g
	]), b = t(() => y.map(r), [y]), x = t(() => {
		let e = y.slice(0, v), t = y.slice(v), n = new Map(t.map((e) => [r(e), e])), i = [...new Set(d ?? [])].map((e) => n.get(e)).filter((e) => !!e), a = new Set(i.map(r)), o = t.filter((e) => !a.has(r(e))), s = f ? o.find((e) => !m.includes(r(e))) ?? o.at(-1) ?? t.at(-1) : void 0, c = s ? r(s) : void 0, l = i.filter((e) => r(e) !== c), u = new Set(l.map(r)), p = t.filter((e) => !u.has(r(e))), h = p.filter((e) => !m.includes(r(e))), g = f && h.length === 0 ? c : void 0, _ = p.filter((e) => r(e) === g || !m.includes(r(e))).map(r);
		return {
			leadingColumns: e,
			managedLockedColumns: l,
			managedLockedIds: u,
			unlockedColumns: p,
			forcedVisibleUnlockedId: g,
			soleVisibleUnlockedId: f && _.length === 1 ? _[0] : void 0
		};
	}, [
		y,
		v,
		d,
		f,
		m
	]), S = t(() => {
		let { leadingColumns: e, managedLockedColumns: t, managedLockedIds: n, unlockedColumns: i, forcedVisibleUnlockedId: a, soleVisibleUnlockedId: o } = x, s = (e, t, i) => {
			let s = r(e), c = i || n.has(s);
			return {
				column: {
					...e,
					id: s
				},
				canHide: c || s === o ? !1 : u ? !(e.noHiding ?? !1) : !1,
				visible: c || s === a || !m.includes(s),
				sortable: !c && !!l,
				frozen: i,
				locked: c,
				order: t
			};
		};
		return [
			...e.map((e, t) => s(e, t, !0)),
			...t.map((t, n) => s(t, n + e.length, !1)),
			...i.map((n, r) => s(n, r + e.length + t.length, !1))
		];
	}, [
		m,
		l,
		u,
		x
	]), C = t(() => x.managedLockedColumns.map(r), [x.managedLockedColumns]), w = t(() => [...y.slice(0, s).map(r), ...C], [
		y,
		s,
		C
	]);
	return {
		columns: t(() => S.filter((e) => e.visible).map((e) => e.column), [S]),
		columnsWithStatus: S,
		colsHidden: m,
		setColsHidden: h,
		colsOrder: g,
		setColsOrder: _,
		savedOrder: b,
		managedLockedColumnIds: C,
		stickyColumnIds: w
	};
};
//#endregion
export { o as getColsHiddenFromDefinition, a as getColsOrderFromDefinition, r as getColumnId, i as getNextLockedColumnIds, s as useColumns };
