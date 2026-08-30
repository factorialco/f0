import { useReducedMotion as e } from "../../../../../../lib/a11y.js";
import { getColumnId as t } from "./useColums.js";
import { useCallback as n, useMemo as r, useState as i } from "react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/hooks/useHeaderGroups.ts
var a = (e) => `f0-collapsing-group-${e}`, o = "border-0 border-r border-solid border-f1-border-secondary", s = /* @__PURE__ */ new Set(), c = (e) => {
	if (!e) return null;
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		t[e] = typeof n == "string" ? {
			label: n,
			defaultCollapsed: !1,
			highlighted: !1
		} : {
			label: n.label,
			collapsedColumns: n.collapsedColumns,
			defaultCollapsed: n.defaultCollapsed ?? !1,
			highlighted: n.highlighted ?? !1
		};
	}), t;
}, l = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		let r = e.headerGroupId;
		if (!r) return;
		let i = t[t.length - 1];
		i?.groupId === r && i.columnIndices[i.columnIndices.length - 1] === n - 1 ? i.columnIndices.push(n) : t.push({
			groupId: r,
			columnIndices: [n]
		});
	}), t;
}, u = (e, n, r, i = s) => {
	let a = /* @__PURE__ */ new Set();
	l(e).forEach((o) => {
		if (!r.has(o.groupId)) return;
		let s = n[o.groupId]?.collapsedColumns, c = o.columnIndices.filter((n) => {
			let r = t(e[n]);
			return i.has(r) || s?.includes(r);
		}), l = new Set(c.length > 0 ? c : [o.columnIndices[0]]);
		o.columnIndices.forEach((e) => {
			l.has(e) || a.add(e);
		});
	});
	let o = e.map((e, n) => i.has(t(e)) ? -1 : n).filter((e) => e !== -1);
	return o.length > 0 && o.every((e) => a.has(e)) && a.delete(o.at(-1)), a;
}, d = (e, t, n = /* @__PURE__ */ new Set()) => {
	let r = [];
	return e.forEach((e, i) => {
		let a = e.headerGroupId;
		if (!a) {
			r.push({
				type: "ungrouped",
				columnIndices: [i]
			});
			return;
		}
		let o = r[r.length - 1];
		if (o && o.type === "group" && o.id === a) o.colSpan++, o.columnIndices.push(i);
		else {
			let e = t[a];
			r.push({
				colSpan: 1,
				id: a,
				type: "group",
				columnIndices: [i],
				label: e?.label ?? a,
				collapsible: e?.collapsedColumns !== void 0,
				collapsed: n.has(a)
			});
		}
	}), r;
}, f = (o, { headerGroups: l, onCollapsedChange: f, preservedColumnIds: p = s } = {}) => {
	let m = r(() => c(l), [l]), [h, g] = i(() => new Set(Object.entries(m ?? {}).filter(([, e]) => e.defaultCollapsed).map(([e]) => e))), [_, v] = i(/* @__PURE__ */ new Set()), y = e(), b = n((e) => {
		v((t) => {
			if (!t.has(e)) return t;
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), x = n((e) => {
		let t = !h.has(e), n = new Set(h);
		t ? n.add(e) : n.delete(e), g(n), y ? b(e) : v((t) => new Set(t).add(e)), f?.(e, t);
	}, [
		h,
		f,
		y,
		b
	]), S = r(() => _.size === 0 ? h : new Set([...h].filter((e) => !_.has(e))), [h, _]), C = r(() => {
		let e = !m || S.size === 0 ? o : (() => {
			let e = u(o, m, S, p);
			return e.size === 0 ? o : o.filter((t, n) => !e.has(n));
		})();
		return m ? e.map((e) => e.headerGroupId && m[e.headerGroupId]?.highlighted ? {
			...e,
			highlighted: !0
		} : e) : e;
	}, [
		o,
		m,
		S,
		p
	]), w = r(() => Object.entries(m ?? {}).filter(([, e]) => e.collapsedColumns !== void 0).map(([e]) => e).sort(), [m]);
	return {
		columns: C,
		collapsingCellClasses: r(() => {
			let e = /* @__PURE__ */ new Map();
			return !m || _.size === 0 || _.forEach((n) => {
				let r = w.indexOf(n);
				r !== -1 && u(C, m, /* @__PURE__ */ new Set([n]), p).forEach((n) => {
					e.set(t(C[n]), a(r));
				});
			}), e;
		}, [
			C,
			m,
			_,
			w,
			p
		]),
		collapseTransitions: r(() => [..._].map((e) => ({
			groupId: e,
			cellClass: a(w.indexOf(e)),
			direction: h.has(e) ? "close" : "open"
		})).filter(({ groupId: e }) => w.includes(e)), [
			_,
			h,
			w
		]),
		settleHeaderGroup: b,
		headerGroups: r(() => !m || !C.some((e) => e.headerGroupId) ? null : d(C, m, h), [
			C,
			m,
			h
		]),
		toggleHeaderGroup: x
	};
};
//#endregion
export { a as collapsingCellClassFor, d as computeHeaderGroups, o as groupBorderClass, c as normalizeHeaderGroups, f as useHeaderGroups };
