import { useAddRow as e } from "../../EditableTable/context/AddRowContext.js";
import { useCalculateConectorHeight as t } from "../hooks/useCalculateConectorHeight.js";
import { useNestedDataContext as n } from "../providers/NestedProvider.js";
import { useLoadChildren as r } from "../hooks/useLoadChildren.js";
import { useStickyParentRow as i } from "../hooks/useStickyParentRow.js";
import { AddRowRow as a } from "./AddRow/index.js";
import { LoadMoreRow as o } from "./LoadMore/index.js";
import { RowLoading as s } from "./RowLoading/index.js";
import { Row as c } from "./Row.js";
import { createElement as l, forwardRef as u, useCallback as d, useEffect as f, useRef as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/NestedRow.tsx
var _ = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], v = (u, v) => {
	let y = p(null), b = p(null), S = e(), C = `${u.nestedRowProps?.depth ?? 0}-${"id" in u.item ? u.item.id + "-" + u.index : u.index}`, { expandedRowIds: w, setRowExpanded: T, isExpandedByDefault: E, resetGeneration: D } = n(), O = w[C] ?? E(u.item, u.nestedRowProps?.depth ?? 0), { children: k, loadChildren: A, isLoading: j, childrenType: M, paginationInfo: N } = r({
		rowId: C,
		item: u.item,
		source: u.source
	}), P = O && j, F = O, I = O && N?.hasMore, L = O && !j ? _(S?.addNestedRowActions?.(u.item)) : [], R = L.length > 0, z = (u.nestedRowProps?.depth ?? 0) === 0, { isSticky: B } = i(O && z, y, b), { calculatedHeight: V, setFirstChildRef: H, setLastChildRef: U } = t({
		nestedVariant: M,
		withHasMore: !!I,
		withAddRowActions: R,
		isSticky: B
	}), W = d((e) => {
		y.current = e, typeof v == "function" && v(e);
	}, [v]), G = () => {
		let e = !O;
		T(C, e), e && !k.length && A();
	}, K = p(null);
	f(() => {
		!O || k.length || K.current !== D && (K.current = D, A());
	}, [
		O,
		k.length,
		A,
		D
	]);
	let q = {
		depth: u.nestedRowProps?.depth ?? 0,
		expanded: O,
		onExpand: G,
		nestedVariant: M,
		connectorHeight: V
	}, J = u.fromVisualization === "table", Y = (u.nestedRowProps?.isLastChild || z) ?? !1, X = (O || !Y) && J;
	return /* @__PURE__ */ g(m, { children: [
		/* @__PURE__ */ h(c, {
			...u,
			noBorder: X,
			ref: W,
			nestedRowProps: {
				...q,
				parentHasChildren: (u.nestedRowProps?.parentHasChildren ?? k.length > 0) || R,
				hasLoadedChildren: !1,
				isLastChild: Y,
				stickyRow: B
			},
			tableWithChildren: u.tableWithChildren,
			fromVisualization: u.fromVisualization
		}),
		F && k.map((e, t) => {
			let n = e, r = u.source.itemsWithChildren?.(n), i = t === 0, a = t === k.length - 1, o = (u.nestedRowProps?.depth ?? 0) + 1, s = () => {
				if (i) return (e) => {
					H(e);
				};
				if (a && !I && !R) return (e) => {
					U(e);
				};
			}, d = a && Y && !I, f = u.rowWrapper;
			if (r) {
				let r = /* @__PURE__ */ l(x, {
					...u,
					key: `nested-row-${u.groupIndex}-${e.id}-${u.index}-${t}`,
					index: t,
					item: n,
					onCheckedChange: (e) => {
						u.onItemCheckedChange?.(n, e);
					},
					tableWithChildren: u.tableWithChildren,
					ref: s(),
					nestedRowProps: {
						...u.nestedRowProps,
						parentHasChildren: !0,
						depth: o,
						isLastChild: d
					},
					fromVisualization: u.fromVisualization
				});
				return f ? /* @__PURE__ */ h(f, {
					item: n,
					index: t,
					children: r
				}, `nested-row-${u.groupIndex}-${e.id}-${u.index}-${t}`) : r;
			}
			{
				let e = !d && J, r = /* @__PURE__ */ l(c, {
					...u,
					key: `row-${u.groupIndex}-${u.index}-${t}`,
					index: t,
					item: n,
					onCheckedChange: (e) => {
						u.onItemCheckedChange?.(n, e);
					},
					noBorder: e,
					ref: s(),
					nestedRowProps: {
						...u.nestedRowProps,
						depth: (u.nestedRowProps?.depth ?? 0) + 1,
						parentHasChildren: !0,
						nestedVariant: M,
						onExpand: G,
						isLastChild: d
					},
					fromVisualization: u.fromVisualization,
					tableWithChildren: u.tableWithChildren
				});
				return f ? /* @__PURE__ */ h(f, {
					item: n,
					index: t,
					children: r
				}, `row-${u.groupIndex}-${u.index}-${t}`) : r;
			}
		}),
		P && /* @__PURE__ */ h(s, {
			...u,
			rowRef: y,
			nestedRowProps: {
				...q,
				parentHasChildren: k.length > 0
			},
			paginationInfo: N,
			ref: U,
			shouldHideBorder: !Y
		}),
		I && !j && /* @__PURE__ */ h(o, {
			...u,
			disableHover: !0,
			rowRef: y,
			onLoadMoreChildren: A,
			ref: R ? void 0 : U,
			nestedRowProps: {
				...u.nestedRowProps,
				parentHasChildren: !0,
				nestedVariant: M,
				isLastChild: Y
			}
		}),
		R && /* @__PURE__ */ h(a, {
			...u,
			disableHover: !0,
			rowRef: y,
			addRowActions: L,
			addRowLabel: S?.addNestedRowActionsLabel,
			ref: (e) => {
				k.length === 0 && H(e), U(e);
			},
			nestedRowProps: {
				...u.nestedRowProps,
				parentHasChildren: !0,
				nestedVariant: M
			}
		}),
		O && /* @__PURE__ */ h("tr", {
			"aria-hidden": "true",
			className: "h-0 border-none p-0",
			children: /* @__PURE__ */ h("td", {
				ref: b,
				colSpan: u.columns.length + +!!u.source.selectable + (u.source.itemActions ? 2 : 0),
				className: "h-0 border-none p-0"
			})
		})
	] });
}, y = (e, t) => /* @__PURE__ */ h(b, {
	...e,
	ref: t
}), b = u(v), x = u(y);
//#endregion
export { x as NestedRow };
