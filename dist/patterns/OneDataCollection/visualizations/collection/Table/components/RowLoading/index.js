import { jsx as f, Fragment as H } from "react/jsx-runtime";
import { forwardRef as R, useRef as S, useLayoutEffect as _ } from "react";
import { Row as A } from "../Row.js";
const O = 5, P = ({
  rowRef: o,
  rowIndex: n,
  source: r,
  item: d,
  columns: g,
  frozenColumnsLeft: e,
  nestedRowProps: i,
  groupIndex: t,
  onCheckedChange: u,
  selectedItems: c,
  checkColumnWidth: L,
  tableWithChildren: C,
  shouldHideBorder: w,
  fromVisualization: I,
  headerGroups: B
}, h) => {
  const l = S(null), s = o?.current;
  _(() => {
    if (l.current && s) {
      const a = o.current.getBoundingClientRect().height;
      l.current.style.height = `${a}px`;
    }
  }, [s, o]);
  const m = i?.depth ?? 0, y = (a) => {
    l.current = a, typeof h == "function" && h(a);
  };
  return /* @__PURE__ */ f(
    A,
    {
      source: {
        ...r,
        itemsWithChildren: () => !1
      },
      item: d,
      index: n,
      frozenColumnsLeft: e,
      columns: g,
      noBorder: w ?? !1,
      groupIndex: t,
      onCheckedChange: u,
      selectedItems: c,
      checkColumnWidth: L,
      loading: !0,
      headerGroups: B,
      ref: y,
      nestedRowProps: {
        ...i,
        depth: i?.parentHasChildren ? m + 1 : m,
        hasLoadedChildren: !1,
        expanded: !1
      },
      tableWithChildren: C,
      fromVisualization: I
    },
    `row-loading-${n}`
  );
}, $ = R(P), p = ({
  rowRef: o,
  ...n
}, r) => {
  const d = n.source.childrenCount?.({
    item: n.item,
    pagination: n.paginationInfo
  }), g = n.paginationInfo ? n.paginationInfo.total ? Math.min(
    n.paginationInfo.perPage,
    n.paginationInfo.total - n.paginationInfo.currentPage * n.paginationInfo.perPage
  ) : n.paginationInfo.perPage : void 0, e = d ?? g ?? O;
  return /* @__PURE__ */ f(H, { children: Array.from({ length: e }).map((i, t) => {
    const c = !(t === e - 1) || n.shouldHideBorder;
    return /* @__PURE__ */ f(
      $,
      {
        ref: r,
        rowRef: o,
        rowIndex: t,
        ...n,
        shouldHideBorder: c
      },
      `row-loading-${t}`
    );
  }) });
}, F = R(p);
export {
  O as DEFAULT_LOADING_ROWS_COUNT,
  F as RowLoading
};
