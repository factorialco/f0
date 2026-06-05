import { jsx as i, jsxs as U, Fragment as X } from "react/jsx-runtime";
import { forwardRef as M, useRef as E, useCallback as Y, createElement as B } from "react";
import { useAddRow as Z } from "../../EditableTable/context/AddRowContext.js";
import { useCalculateConectorHeight as _ } from "../hooks/useCalculateConectorHeight.js";
import { useLoadChildren as p } from "../hooks/useLoadChildren.js";
import { useStickyParentRow as ee } from "../hooks/useStickyParentRow.js";
import { useNestedDataContext as te } from "../providers/NestedProvider.js";
import { AddRowRow as ne } from "./AddRow/index.js";
import { LoadMoreRow as oe } from "./LoadMore/index.js";
import { Row as I } from "./Row.js";
import { RowLoading as ie } from "./RowLoading/index.js";
const de = (e) => e ? (Array.isArray(e) ? e : [e]).filter(
  (r) => r !== void 0
) : [], re = (e, r) => {
  const l = E(null), b = E(null), H = Z(), f = `${e.nestedRowProps?.depth ?? 0}-${"id" in e.item ? e.item.id + "-" + e.index : e.index}`, { expandedRowIds: F, setRowExpanded: L } = te(), o = F[f] ?? !1, { children: a, loadChildren: $, isLoading: g, childrenType: h, paginationInfo: x } = p({
    rowId: f,
    item: e.item,
    source: e.source,
    onClearFetchedData: () => L(f, !1)
  }), T = o && g, j = o, R = o && x?.hasMore, A = o && !g ? de(H?.addNestedRowActions?.(e.item)) : [], c = A.length > 0, V = (e.nestedRowProps?.depth ?? 0) === 0, { isSticky: k } = ee(
    o && V,
    l,
    b
  ), { calculatedHeight: D, setFirstChildRef: N, setLastChildRef: u } = _({
    nestedVariant: h,
    withHasMore: !!R,
    withAddRowActions: c,
    isSticky: k
  }), O = Y(
    (t) => {
      l.current = t, typeof r == "function" && r(t);
    },
    [r]
  ), W = () => {
    const t = !o;
    L(f, t), t && !a.length && $();
  }, y = {
    depth: e.nestedRowProps?.depth ?? 0,
    expanded: o,
    onExpand: W,
    nestedVariant: h,
    connectorHeight: D
  }, z = e.fromVisualization === "table", w = (e.nestedRowProps?.isLastChild || V) ?? !1, q = (o || !w) && z;
  return /* @__PURE__ */ U(X, { children: [
    /* @__PURE__ */ i(
      I,
      {
        ...e,
        disableHover: !e.source.itemOnClick,
        noBorder: q,
        ref: O,
        nestedRowProps: {
          ...y,
          // If nestedRowProps.parentHasChildren is not provided, we need to set it to true if the parent has children
          // This nestedRowProps.parentHasChildren is provided on children iteration
          parentHasChildren: (e.nestedRowProps?.parentHasChildren ?? a.length > 0) || c,
          hasLoadedChildren: !1,
          isLastChild: w,
          stickyRow: k
        },
        tableWithChildren: e.tableWithChildren,
        fromVisualization: e.fromVisualization
      }
    ),
    j && a.map((t, n) => {
      const s = t, G = e.source.itemsWithChildren?.(s), J = n === 0, v = n === a.length - 1, K = (e.nestedRowProps?.depth ?? 0) + 1, S = () => {
        if (J)
          return (d) => {
            N(d);
          };
        if (v && !R && !c)
          return (d) => {
            u(d);
          };
      }, P = v && w && !R, m = e.rowWrapper;
      if (G) {
        const d = /* @__PURE__ */ B(
          le,
          {
            ...e,
            key: `nested-row-${e.groupIndex}-${t.id}-${e.index}-${n}`,
            index: n,
            item: s,
            onCheckedChange: (C) => {
              e.onItemCheckedChange?.(s, C);
            },
            tableWithChildren: e.tableWithChildren,
            ref: S(),
            nestedRowProps: {
              ...e.nestedRowProps,
              parentHasChildren: !0,
              depth: K,
              isLastChild: P
            },
            fromVisualization: e.fromVisualization
          }
        );
        return m ? /* @__PURE__ */ i(
          m,
          {
            item: s,
            index: n,
            children: d
          },
          `nested-row-${e.groupIndex}-${t.id}-${e.index}-${n}`
        ) : d;
      } else {
        const d = !P && z, C = /* @__PURE__ */ B(
          I,
          {
            ...e,
            key: `row-${e.groupIndex}-${e.index}-${n}`,
            index: n,
            item: s,
            onCheckedChange: (Q) => {
              e.onItemCheckedChange?.(s, Q);
            },
            noBorder: d,
            ref: S(),
            nestedRowProps: {
              ...e.nestedRowProps,
              depth: (e.nestedRowProps?.depth ?? 0) + 1,
              parentHasChildren: !0,
              nestedVariant: h,
              onExpand: W,
              isLastChild: P
            },
            fromVisualization: e.fromVisualization,
            tableWithChildren: e.tableWithChildren
          }
        );
        return m ? /* @__PURE__ */ i(
          m,
          {
            item: s,
            index: n,
            children: C
          },
          `row-${e.groupIndex}-${e.index}-${n}`
        ) : C;
      }
    }),
    T && /* @__PURE__ */ i(
      ie,
      {
        ...e,
        rowRef: l,
        nestedRowProps: {
          ...y,
          parentHasChildren: a.length > 0
        },
        paginationInfo: x,
        ref: u,
        shouldHideBorder: !w
      }
    ),
    R && !g && /* @__PURE__ */ i(
      oe,
      {
        ...e,
        disableHover: !0,
        rowRef: l,
        onLoadMoreChildren: $,
        ref: c ? void 0 : u,
        nestedRowProps: {
          ...e.nestedRowProps,
          parentHasChildren: !0,
          nestedVariant: h,
          isLastChild: w
        }
      }
    ),
    c && /* @__PURE__ */ i(
      ne,
      {
        ...e,
        disableHover: !0,
        rowRef: l,
        addRowActions: A,
        addRowLabel: H?.addNestedRowActionsLabel,
        ref: (t) => {
          a.length === 0 && N(t), u(t);
        },
        nestedRowProps: {
          ...e.nestedRowProps,
          parentHasChildren: !0,
          nestedVariant: h
        }
      }
    ),
    o && /* @__PURE__ */ i("tr", { "aria-hidden": "true", className: "h-0 border-none p-0", children: /* @__PURE__ */ i(
      "td",
      {
        ref: b,
        colSpan: e.columns.length + (e.source.selectable ? 1 : 0) + (e.source.itemActions ? 2 : 0),
        className: "h-0 border-none p-0"
      }
    ) })
  ] });
}, se = (e, r) => /* @__PURE__ */ i(ae, { ...e, ref: r }), ae = M(re), le = M(se);
export {
  le as NestedRow
};
