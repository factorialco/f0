import { useAddRow as e } from "../../EditableTable/context/AddRowContext.js";
import { FlatRow as t } from "./FlatRow.js";
import { useCalculateConectorHeight as n } from "../hooks/useCalculateConectorHeight.js";
import { useNestedDataContext as r } from "../providers/NestedProvider.js";
import { useLoadChildren as i } from "../hooks/useLoadChildren.js";
import { useStickyParentRow as a } from "../hooks/useStickyParentRow.js";
import { AddRowRow as o } from "./AddRow/index.js";
import { LoadMoreRow as s } from "./LoadMore/index.js";
import { RowLoading as c } from "./RowLoading/index.js";
import { createElement as l, forwardRef as u, useCallback as d, useEffect as f, useRef as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/NestedRow.tsx
var _ = (e) => e ? (Array.isArray(e) ? e : [e]).filter((e) => e !== void 0) : [], v = (u, v) => {
	let y = p(null), b = p(null), S = e(), C = `${u.nestedRowProps?.depth ?? 0}-${"id" in u.item ? u.item.id + "-" + u.index : u.index}`, { expandedRowIds: w, setRowExpanded: T, isExpandedByDefault: E, resetGeneration: D } = r(), O = w[C] ?? E(u.item, u.nestedRowProps?.depth ?? 0), { children: k, loadChildren: A, isLoading: j, childrenType: M, paginationInfo: N } = i({
		rowId: C,
		item: u.item,
		source: u.source
	}), P = O && j, F = O, I = O && N?.hasMore, L = O && !j ? _(S?.addNestedRowActions?.(u.item)) : [], R = L.length > 0, z = (u.nestedRowProps?.depth ?? 0) === 0, { isSticky: B } = a(O && z, y, b), { calculatedHeight: V, setFirstChildRef: H, setLastChildRef: U } = n({
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
		/* @__PURE__ */ h(t, {
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
		F && k.map((e, n) => {
			let r = e, i = u.source.itemsWithChildren?.(r), a = n === 0, o = n === k.length - 1, s = (u.nestedRowProps?.depth ?? 0) + 1, c = () => {
				if (a) return (e) => {
					H(e);
				};
				if (o && !I && !R) return (e) => {
					U(e);
				};
			}, d = o && Y && !I, f = u.rowWrapper;
			if (i) {
				let t = /* @__PURE__ */ l(x, {
					...u,
					key: `nested-row-${u.groupIndex}-${e.id}-${u.index}-${n}`,
					index: n,
					item: r,
					onCheckedChange: (e) => {
						u.onItemCheckedChange?.(r, e);
					},
					tableWithChildren: u.tableWithChildren,
					ref: c(),
					nestedRowProps: {
						...u.nestedRowProps,
						parentHasChildren: !0,
						depth: s,
						isLastChild: d
					},
					fromVisualization: u.fromVisualization
				});
				return f ? /* @__PURE__ */ h(f, {
					item: r,
					index: n,
					children: t
				}, `nested-row-${u.groupIndex}-${e.id}-${u.index}-${n}`) : t;
			}
			{
				let e = !d && J, i = /* @__PURE__ */ l(t, {
					...u,
					key: `row-${u.groupIndex}-${u.index}-${n}`,
					index: n,
					item: r,
					onCheckedChange: (e) => {
						u.onItemCheckedChange?.(r, e);
					},
					noBorder: e,
					ref: c(),
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
					item: r,
					index: n,
					children: i
				}, `row-${u.groupIndex}-${u.index}-${n}`) : i;
			}
		}),
		P && /* @__PURE__ */ h(c, {
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
		I && !j && /* @__PURE__ */ h(s, {
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
		R && /* @__PURE__ */ h(o, {
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
