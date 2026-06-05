import { jsx as t, jsxs as s, Fragment as E } from "react/jsx-runtime";
import { useState as je, useMemo as W, useEffect as He, Fragment as oe } from "react";
import { OneTable as se } from "../../../../../experimental/OneTable/Table/index.js";
import { TableBody as Re } from "../../../../../experimental/OneTable/TableBody/index.js";
import { TableCell as u } from "../../../../../experimental/OneTable/TableCell/index.js";
import { TableFooter as Ee } from "../../../../../experimental/OneTable/TableFooter/index.js";
import { TableHead as p } from "../../../../../experimental/OneTable/TableHead/index.js";
import { TableHeader as We } from "../../../../../experimental/OneTable/TableHeader/index.js";
import { TableRow as v } from "../../../../../experimental/OneTable/TableRow/index.js";
import Be from "../../../../../icons/app/Add.js";
import "../../../../../icons/app/Menu.js";
import { cn as k } from "../../../../../lib/utils.js";
import { useDataCollectionSettings as ze } from "../../../Settings/SettingsProvider.js";
import { GroupHeader as Ke } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { Skeleton as qe } from "../../../../../ui/skeleton.js";
import { useInfiniteScrollPagination as Je } from "../../../hooks/useInfiniteScrollPagination.js";
import { useAddRow as Qe } from "../EditableTable/context/AddRowContext.js";
import { statusToChecked as de } from "../utils.js";
import { Row as ce } from "./components/Row.js";
import { useColumns as Ue } from "./hooks/useColums.js";
import { useHeaderGroups as Ve, groupBorderClass as _ } from "./hooks/useHeaderGroups.js";
import { NestedDataProvider as Xe } from "./providers/NestedProvider.js";
import { useSticky as Ye } from "./useSticky.js";
import { motion as Ze } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { AnimatePresence as et } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { useGroups as tt, getAnimationVariants as lt } from "../../../../../hooks/datasource/useGroups.js";
import { useI18n as nt } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { useDataCollectionData as it } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { useSelectable as rt } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import { F0Checkbox as me } from "../../../../../components/F0Checkbox/F0Checkbox.js";
import { F0Button as he } from "../../../../../components/F0Button/F0Button.js";
import { isInfiniteScrollPagination as at } from "../../../../../hooks/datasource/useData.js";
import { F0ButtonDropdown as fe } from "../../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { PagesPagination as ot } from "../../../components/PagesPagination/PagesPagination.js";
const st = (h) => h ? (Array.isArray(h) ? h : [h]).filter(
  (n) => n !== void 0
) : [], dt = ({ text: h, count: n }) => {
  const C = String(n), A = h.indexOf(C);
  if (A === -1)
    return /* @__PURE__ */ t("span", { className: "font-me text-base font-medium text-f1-foreground-secondary", children: h });
  const F = h.slice(0, A), O = h.slice(A + C.length);
  return /* @__PURE__ */ s("span", { className: "text-base font-medium text-f1-foreground-secondary", children: [
    F,
    /* @__PURE__ */ t("span", { className: "font-semibold text-f1-foreground", children: C }),
    O
  ] });
}, Kt = ({
  columns: h,
  source: n,
  frozenColumns: C = 0,
  onSelectItems: A,
  onLoadData: F,
  onLoadError: O,
  allowColumnHiding: ue,
  allowColumnReordering: pe,
  referenceRowType: B,
  headerGroupLabels: ge,
  bordered: be,
  rowWrapper: w,
  cellRenderer: z,
  showItemActions: D,
  visualizationSettings: ye,
  fromVisualization: x = "table",
  summaryPlaceholder: ke = "-"
}) => {
  const { t: L, ...g } = nt(), K = Qe(), [q] = je(
    () => Ze.create(
      ce
    )
  ), { settings: Ce } = ze(), { columns: a } = Ue(
    h,
    C,
    ye ?? Ce.visualization?.table,
    pe,
    ue
  ), {
    data: d,
    paginationInfo: c,
    setPage: Se,
    isInitialLoading: J,
    isLoadingMore: Q,
    loadMore: ve,
    summaries: M
  } = it(n, {
    onError: (e) => {
      O(e);
    }
  }), { currentSortings: P, setCurrentSortings: we, isLoading: U } = n, f = D !== !1 && !!n.itemActions, $ = x === "editableTable", V = $ ? 1 : 2, X = W(
    () => D === !1 ? {
      ...n,
      itemActions: void 0
    } : n,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only recompute when source identity or showItemActions changes
    [n, D]
  ), { loadingIndicatorRef: Ne } = Je(
    c,
    U,
    Q,
    ve
  );
  He(() => {
    F({
      totalItems: c?.total || d.records.length,
      filters: n.currentFilters,
      search: n.currentSearch,
      isInitialLoading: J,
      data: d.records
    });
  }, [c?.total, d.records]);
  const N = W(() => C, [C]), Y = (e, l) => "id" in e && e.id !== void 0 && e.id !== null ? `id:${String(e.id)}` : `index:${String(l)}`, {
    selectedItems: j,
    allSelectedStatus: o,
    groupAllSelectedStatus: Z,
    handleSelectItemChange: T,
    handleSelectAll: Ae,
    handleSelectAllItems: $e,
    handleSelectGroupChange: Ie
  } = rt({
    data: d,
    paginationInfo: c,
    source: n,
    onSelectItems: A,
    selectionMode: "multi",
    selectedState: n.defaultSelectedItems
  }), b = W(() => !M || !n.summaries ? null : {
    data: M,
    sticky: !0,
    label: n.summaries?.label
  }, [M, n.summaries]), xe = (e, l, i) => {
    if (!(!e || !l))
      return i === null ? "none" : i.field === e ? i.order : "none";
  }, Pe = (e) => e == null || e === "", Te = (e) => e ?? ke, Ge = (e) => {
    we(() => !P || P.field !== e ? {
      field: e,
      order: "asc"
    } : P.order === "asc" ? {
      field: e,
      order: "desc"
    } : null);
  }, H = n.grouping?.collapsible, _e = n.grouping?.defaultOpenGroups, { openGroups: ee, setGroupOpen: Fe } = tt(
    d?.type === "grouped" ? d.groups : [],
    _e
  ), te = a.length + (f ? 1 : 0) + (n.selectable ? 1 : 0), { getStickyPosition: R, checkColumnWidth: S } = Ye(
    N,
    a,
    !!n.selectable
  ), y = Ve(a, ge), le = d?.records.some(
    (e) => n.itemsWithChildren?.(e)
  );
  if (J)
    return /* @__PURE__ */ t(se.Skeleton, { columns: te });
  n.sortings || a.forEach((e) => {
    e.sorting && console.warn(
      "Sorting is defined on a column but no sortings are provided in the data source"
    );
  });
  const ne = o.selectedCount > 0 || o.checked, ie = (d?.records ?? []).map((e) => n.selectable?.(e)).filter((e) => e !== void 0), re = ie.length > 0 && ie.every((e) => j.has(e)), ae = o.checked && !o.indeterminate || re, Oe = !!n.allPagesSelection && (!o.checked || o.indeterminate) && c?.total !== void 0 && c.total > o.selectedCount, De = a.length + (f ? V : 0), Le = o.selectedCount === 1 ? g.status.selected.singular : g.status.selected.plural;
  return /* @__PURE__ */ t("div", { className: "flex h-full min-h-0 flex-col gap-4", children: /* @__PURE__ */ s(le ? Xe : oe, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: k(
          be && "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"
        ),
        children: /* @__PURE__ */ s(se, { loading: U, children: [
          /* @__PURE__ */ s(We, { sticky: !0, children: [
            y ? /* @__PURE__ */ s(v, { children: [
              n.selectable && /* @__PURE__ */ t(
                p,
                {
                  align: "left",
                  sticky: { left: 0 },
                  width: S,
                  className: k(
                    _,
                    "hover:after:bg-transparent"
                  ),
                  children: /* @__PURE__ */ t("div", { className: "ml-3.5 flex w-full items-center justify-start" })
                }
              ),
              y.map((e, l) => {
                const i = k(
                  _,
                  "hover:after:bg-transparent"
                );
                return e.type === "group" ? /* @__PURE__ */ t(
                  p,
                  {
                    align: "right",
                    colSpan: e.colSpan,
                    className: i,
                    children: e.label
                  },
                  `header-group-${e.id}-${l}`
                ) : /* @__PURE__ */ t(
                  p,
                  {
                    align: "right",
                    className: i,
                    width: a[e.columnIndices[0]].width,
                    minWidth: a[e.columnIndices[0]].minWidth,
                    sticky: R(e.columnIndices[0]),
                    children: /* @__PURE__ */ t("span", {})
                  },
                  `header-ungrouped-${e.columnIndices[0]}`
                );
              }),
              f && ($ ? /* @__PURE__ */ t(
                p,
                {
                  width: "fit",
                  sticky: { right: 0 },
                  children: /* @__PURE__ */ t("span", { className: "sr-only", children: g.collections.actions.actions })
                },
                "actions"
              ) : /* @__PURE__ */ s(E, { children: [
                /* @__PURE__ */ t("th", { className: "hidden md:table-cell" }),
                /* @__PURE__ */ t(
                  p,
                  {
                    hidden: !0,
                    width: 68,
                    sticky: { right: 0 },
                    className: "table-cell md:hidden",
                    children: /* @__PURE__ */ t("span", {})
                  },
                  "actions"
                )
              ] }))
            ] }) : null,
            /* @__PURE__ */ s(v, { children: [
              n.selectable && /* @__PURE__ */ t(
                p,
                {
                  width: S,
                  sticky: { left: 0 },
                  align: "left",
                  className: y ? k("[&>div:first-child]:hidden", _) : void 0,
                  children: /* @__PURE__ */ t("div", { className: "ml-3.5 flex w-full items-center justify-start", children: /* @__PURE__ */ t(
                    me,
                    {
                      checked: ae,
                      indeterminate: ne && !ae,
                      onCheckedChange: Ae,
                      title: g.actions.selectAll,
                      hideLabel: !0,
                      disabled: d?.records.length === 0
                    }
                  ) })
                }
              ),
              a.map(({ sorting: e, label: l, ...i }, r) => {
                const m = y?.find(
                  (I) => I.type === "group" && I.columnIndices.includes(r)
                ), G = !!y && (!m || m.columnIndices[m.columnIndices.length - 1] === r);
                return /* @__PURE__ */ t(
                  p,
                  {
                    sortState: xe(
                      e,
                      n.sortings,
                      P
                    ),
                    width: i.width,
                    align: i.align,
                    sticky: R(r),
                    ...i,
                    hidden: !1,
                    className: k(
                      y && "[&>div:first-child]:hidden",
                      G && _,
                      x === "editableTable" && (r !== a.length - 1 || f) && "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                    ) || void 0,
                    onSortClick: e ? () => {
                      e && Ge(e);
                    } : void 0,
                    children: l
                  },
                  `table-head-${r}`
                );
              }),
              f && ($ ? /* @__PURE__ */ t(p, { width: "fit", sticky: { right: 0 }, children: /* @__PURE__ */ t("span", { className: "sr-only", children: g.collections.actions.actions }) }, "actions") : /* @__PURE__ */ s(E, { children: [
                /* @__PURE__ */ t("th", { className: "hidden md:table-cell" }),
                /* @__PURE__ */ t(
                  p,
                  {
                    width: 68,
                    hidden: !0,
                    sticky: {
                      right: 0
                    },
                    className: "table-cell md:hidden",
                    children: g.collections.actions.actions
                  },
                  "actions"
                )
              ] }))
            ] }),
            ne && n.selectable && !!n.allPagesSelection && /* @__PURE__ */ t(v, { children: /* @__PURE__ */ t(
              "th",
              {
                colSpan: 1 + De,
                className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background-secondary px-5",
                children: /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ t(
                    dt,
                    {
                      text: o.checked && !o.indeterminate ? L("status.selected.allItemsSelected", {
                        total: c?.total ?? o.selectedCount
                      }) : re ? L("status.selected.allOnPage", {
                        count: o.selectedCount
                      }) : `${o.selectedCount} ${Le}`,
                      count: o.checked && !o.indeterminate ? c?.total ?? o.selectedCount : o.selectedCount
                    }
                  ),
                  Oe && /* @__PURE__ */ t(
                    he,
                    {
                      variant: "outline",
                      label: L("status.selected.selectAllItems", {
                        total: c?.total ?? 0
                      }),
                      onClick: () => $e(!0),
                      size: "sm"
                    }
                  )
                ] })
              }
            ) })
          ] }),
          /* @__PURE__ */ s(Re, { children: [
            d?.type === "grouped" && d.groups.map((e, l) => {
              const i = e.itemCount;
              return /* @__PURE__ */ s(oe, { children: [
                /* @__PURE__ */ s(v, { sticky: !0, children: [
                  n.selectable && /* @__PURE__ */ t(
                    u,
                    {
                      width: S,
                      sticky: { left: 0 },
                      children: /* @__PURE__ */ t("div", { className: "pointer-events-auto ml-1.5 flex items-center justify-start", children: /* @__PURE__ */ t(
                        me,
                        {
                          checked: !!de(
                            Z[e.key]
                          ),
                          indeterminate: de(
                            Z[e.key]
                          ) === "indeterminate",
                          title: g.actions.selectAll,
                          hideLabel: !0,
                          onCheckedChange: (r) => Ie(e, r)
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ t(
                    u,
                    {
                      sticky: {
                        left: n.selectable ? S : 0
                      },
                      colSpan: N || 1,
                      children: /* @__PURE__ */ t(
                        Ke,
                        {
                          selectable: !1,
                          showOpenChange: H,
                          label: e.label,
                          itemCount: i,
                          open: ee[e.key],
                          onOpenChange: (r) => Fe(e.key, r)
                        }
                      )
                    }
                  ),
                  a.length - (N || 1) > 0 && /* @__PURE__ */ t(
                    u,
                    {
                      colSpan: a.length - (N || 1),
                      children: " "
                    }
                  )
                ] }, `group-header-${e.key}`),
                /* @__PURE__ */ t(et, { children: q && (!H || ee[e.key]) && e.records.map((r, m) => {
                  const G = `row-${l}-${Y(r, m)}`, I = /* @__PURE__ */ t(
                    q,
                    {
                      variants: lt(),
                      initial: H ? "hidden" : "visible",
                      animate: "visible",
                      exit: "hidden",
                      custom: m,
                      layout: !0,
                      source: X,
                      item: r,
                      index: m,
                      groupIndex: l,
                      onItemCheckedChange: T,
                      onCheckedChange: (Me) => T(r, Me),
                      selectedItems: j,
                      columns: a,
                      frozenColumnsLeft: N,
                      checkColumnWidth: S,
                      referenceRowType: B,
                      rowWrapper: w,
                      cellRenderer: z,
                      headerGroups: y,
                      fromVisualization: x
                    },
                    G
                  );
                  return w ? /* @__PURE__ */ t(
                    w,
                    {
                      item: r,
                      index: m,
                      children: I
                    },
                    G
                  ) : I;
                }) }, `group-animate-${l}`)
              ] }, `group-${e.key}`);
            }),
            d?.type === "flat" && d.records.map((e, l) => {
              const i = `row-${Y(e, l)}`, r = /* @__PURE__ */ t(
                ce,
                {
                  groupIndex: 0,
                  source: X,
                  item: e,
                  index: l,
                  onItemCheckedChange: T,
                  onCheckedChange: (m) => T(e, m),
                  selectedItems: j,
                  columns: a,
                  frozenColumnsLeft: N,
                  checkColumnWidth: S,
                  tableWithChildren: le,
                  referenceRowType: B,
                  rowWrapper: w,
                  cellRenderer: z,
                  fromVisualization: x,
                  headerGroups: y
                },
                i
              );
              return w ? /* @__PURE__ */ t(w, { item: e, index: l, children: r }, i) : r;
            }),
            c?.type === "infinite-scroll" && Q && Array.from({ length: 5 }).map((e, l) => /* @__PURE__ */ t(v, { children: Array.from({ length: te }).map(
              (i, r) => /* @__PURE__ */ t(
                u,
                {
                  children: /* @__PURE__ */ t(qe, { className: "h-4 w-full" })
                },
                `skeleton-cell-${l}-${r}`
              )
            ) }, `skeleton-row-${l}`)),
            at(c) && c.hasMore && /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t(
              "td",
              {
                colSpan: a.length + (n.selectable ? 1 : 0) + (f ? 1 : 0),
                ref: Ne,
                className: "h-10",
                "aria-hidden": "true"
              }
            ) })
          ] }),
          (() => {
            const e = st(K?.addRowActions?.());
            return !b && e.length === 0 ? null : /* @__PURE__ */ s(Ee, { children: [
              b && /* @__PURE__ */ s(
                v,
                {
                  className: k(
                    b.sticky && "sticky bottom-0 z-30 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background",
                    "font-medium"
                  ),
                  children: [
                    n.selectable && /* @__PURE__ */ t(
                      u,
                      {
                        width: S,
                        sticky: { left: 0 },
                        children: b.label && /* @__PURE__ */ t("div", { className: "font-medium text-f1-foreground-secondary", children: b.label })
                      }
                    ),
                    a.map((l, i) => /* @__PURE__ */ t(
                      u,
                      {
                        firstCell: i === 0,
                        width: l.width,
                        sticky: R(i),
                        className: k(
                          $ && (i !== a.length - 1 || f) && "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                        ),
                        children: i === 0 && !n.selectable && b.label ? /* @__PURE__ */ t("div", { className: "font-medium text-f1-foreground-secondary", children: b.label }) : /* @__PURE__ */ t(
                          "div",
                          {
                            className: k(
                              l.align === "right" ? "justify-end" : "",
                              "flex"
                            ),
                            children: (() => {
                              const r = Te(
                                l.summaryPlaceholder
                              );
                              if (l.summary && n.summaries && n.summaries[l.summary]?.type === "sum") {
                                const m = b.data[l.summary];
                                return Pe(m) ? /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: r }) : /* @__PURE__ */ s("div", { className: "flex gap-1", children: [
                                  /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: g.collections.summaries.types.sum }),
                                  `${m}`
                                ] });
                              }
                              return /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: r });
                            })()
                          }
                        )
                      },
                      `summary-${String(l.label)}`
                    )),
                    f && ($ ? /* @__PURE__ */ t(
                      u,
                      {
                        sticky: { right: 0 },
                        children: ""
                      },
                      "summary-actions"
                    ) : /* @__PURE__ */ s(E, { children: [
                      /* @__PURE__ */ t("th", { className: "hidden md:table-cell" }),
                      /* @__PURE__ */ t(
                        u,
                        {
                          width: 68,
                          sticky: {
                            right: 0
                          },
                          className: "table-cell md:hidden",
                          children: ""
                        },
                        "summary-actions"
                      )
                    ] }))
                  ]
                }
              ),
              e.length > 0 && /* @__PURE__ */ t(v, { children: /* @__PURE__ */ t(
                u,
                {
                  colSpan: a.length + (n.selectable ? 1 : 0) + (f ? V : 0),
                  className: "h-[48px] align-middle",
                  children: /* @__PURE__ */ t(
                    "div",
                    {
                      className: "pointer-events-auto flex h-full items-center",
                      onClick: (l) => l.stopPropagation(),
                      onMouseDownCapture: (l) => l.stopPropagation(),
                      children: e.length === 1 ? /* @__PURE__ */ t(
                        he,
                        {
                          variant: "outline",
                          icon: e[0].icon ?? Be,
                          label: e[0].label,
                          onClick: e[0].onClick,
                          loading: e[0].loading,
                          disabled: e[0].disabled,
                          size: "sm"
                        }
                      ) : e.some(
                        (l) => l.description !== void 0
                      ) ? /* @__PURE__ */ t(
                        fe,
                        {
                          mode: "dropdown",
                          variant: "outline",
                          size: "sm",
                          trigger: K?.addRowActionsLabel,
                          disabled: e.every((l) => l.disabled),
                          loading: e.some((l) => l.loading),
                          items: e.map((l, i) => ({
                            value: i.toString(),
                            label: l.label,
                            icon: l.icon,
                            description: l.description
                          })),
                          onClick: (l) => {
                            e[Number(l)]?.onClick?.();
                          }
                        }
                      ) : /* @__PURE__ */ t(
                        fe,
                        {
                          variant: "outline",
                          size: "sm",
                          disabled: e.every((l) => l.disabled),
                          loading: e.some((l) => l.loading),
                          items: e.map((l, i) => ({
                            value: i.toString(),
                            label: l.label,
                            icon: l.icon
                          })),
                          onClick: (l) => {
                            e[Number(l)]?.onClick?.();
                          }
                        }
                      )
                    }
                  )
                }
              ) })
            ] });
          })()
        ] })
      }
    ),
    /* @__PURE__ */ t(
      ot,
      {
        paginationInfo: c,
        setPage: Se,
        className: "pb-4"
      }
    )
  ] }) });
};
export {
  Kt as TableCollection
};
