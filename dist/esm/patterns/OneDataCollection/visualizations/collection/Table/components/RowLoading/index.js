import { Row as e } from "../Row.js";
import { forwardRef as t, useLayoutEffect as n, useRef as r } from "react";
import { Fragment as i, jsx as a } from "react/jsx-runtime";
var o = t(({ rowRef: t, rowIndex: i, source: o, item: s, columns: c, frozenColumnsLeft: l, nestedRowProps: u, groupIndex: d, onCheckedChange: f, selectedItems: p, checkColumnWidth: m, tableWithChildren: h, shouldHideBorder: g, fromVisualization: _, headerGroups: v }, y) => {
	let b = r(null), x = t?.current;
	n(() => {
		if (b.current && x) {
			let e = t.current.getBoundingClientRect().height;
			b.current.style.height = `${e}px`;
		}
	}, [x, t]);
	let S = u?.depth ?? 0, C = (e) => {
		b.current = e, typeof y == "function" && y(e);
	};
	return /* @__PURE__ */ a(e, {
		source: {
			...o,
			itemsWithChildren: () => !1
		},
		item: s,
		index: i,
		frozenColumnsLeft: l,
		columns: c,
		noBorder: g ?? !1,
		groupIndex: d,
		onCheckedChange: f,
		selectedItems: p,
		checkColumnWidth: m,
		loading: !0,
		headerGroups: v,
		ref: C,
		nestedRowProps: {
			...u,
			depth: u?.parentHasChildren ? S + 1 : S,
			hasLoadedChildren: !1,
			expanded: !1
		},
		tableWithChildren: h,
		fromVisualization: _
	}, `row-loading-${i}`);
}), s = t(({ rowRef: e, ...t }, n) => {
	let r = t.source.childrenCount?.({
		item: t.item,
		pagination: t.paginationInfo
	}), s = t.paginationInfo ? t.paginationInfo.total ? Math.min(t.paginationInfo.perPage, t.paginationInfo.total - t.paginationInfo.currentPage * t.paginationInfo.perPage) : t.paginationInfo.perPage : void 0, c = r ?? s ?? 5;
	return /* @__PURE__ */ a(i, { children: Array.from({ length: c }).map((r, i) => {
		let s = i !== c - 1 || t.shouldHideBorder;
		return /* @__PURE__ */ a(o, {
			ref: n,
			rowRef: e,
			rowIndex: i,
			...t,
			shouldHideBorder: s
		}, `row-loading-${i}`);
	}) });
});
//#endregion
export { s as RowLoading };
