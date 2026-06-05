import { jsx as a, jsxs as p } from "react/jsx-runtime";
import { useEffect as $ } from "react";
import { useGroups as j } from "../../../../../hooks/datasource/useGroups.js";
import { useDebounceBoolean as D } from "../../../../../lib/useDebounceBoolean.js";
import { cn as v } from "../../../../../lib/utils.js";
import { useInfiniteScrollPagination as B } from "../../../hooks/useInfiniteScrollPagination.js";
import { GroupHeader as F } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { ListGroup as b } from "./components/ListGroup.js";
import { ListSkeleton as I } from "./components/ListSkeleton.js";
import { AnimatePresence as H } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as R } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useDataCollectionData as T } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { useSelectable as q } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import { isInfiniteScrollPagination as S } from "../../../../../hooks/datasource/useData.js";
import { PagesPagination as z } from "../../../components/PagesPagination/PagesPagination.js";
const re = ({
  fields: n,
  itemDefinition: d,
  source: t,
  onSelectItems: k,
  onLoadData: L,
  onLoadError: C,
  tmpFullWidth: m
}) => {
  const {
    data: o,
    paginationInfo: i,
    setPage: G,
    isInitialLoading: l,
    isLoadingMore: r,
    loadMore: w
  } = T(t, {
    onError: (e) => {
      C(e);
    }
  });
  $(() => {
    L({
      totalItems: i?.total || o.records.length,
      filters: t.currentFilters,
      search: t.currentSearch,
      isInitialLoading: l,
      data: o.records
    });
  }, [i?.total, o.records]);
  const { isLoading: f } = t, { loadingIndicatorRef: N } = B(
    i,
    f,
    r,
    w
  ), {
    selectedItems: g,
    groupAllSelectedStatus: h,
    handleSelectItemChange: u,
    handleSelectGroupChange: O
  } = q({
    data: o,
    paginationInfo: i,
    source: t,
    onSelectItems: k,
    selectionMode: "multi",
    selectedState: t.defaultSelectedItems
  }), y = t.grouping?.collapsible, P = t.grouping?.defaultOpenGroups, { openGroups: x, setGroupOpen: M } = j(
    o?.type === "grouped" ? o.groups : [],
    P
  );
  if (D({
    value: l,
    delay: 100
  }))
    return /* @__PURE__ */ a(
      I,
      {
        source: t,
        fields: n,
        count: 30,
        isInitialLoading: !0
      }
    );
  t.sortings || n.forEach((e) => {
    e.sorting && console.warn(
      "Sorting is defined on a property but no sortings are provided in the data source"
    );
  });
  const s = l || f && t.dataAdapter.paginationType === "pages";
  return /* @__PURE__ */ p(
    "div",
    {
      className: v(
        "flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2",
        !m && "px-page",
        m && "px-0"
      ),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: v(
              "flex min-h-0 flex-1 flex-col gap-2",
              s && "select-none opacity-50 transition-opacity"
            ),
            "aria-live": s ? "polite" : void 0,
            "aria-busy": s ? "true" : void 0,
            children: /* @__PURE__ */ p("div", { className: "min-h-0 flex-1 overflow-auto pb-3", children: [
              o.type === "grouped" && o.groups.map((e, A) => {
                const E = e.itemCount;
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: "flex flex-col gap-0 pt-2 first:pt-0",
                    children: [
                      /* @__PURE__ */ a(
                        F,
                        {
                          className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
                          selectable: !!t.selectable,
                          select: h[e.key]?.checked ? !0 : h[e.key]?.indeterminate ? "indeterminate" : !1,
                          onSelectChange: (c) => O(e, c),
                          showOpenChange: y,
                          label: e.label,
                          itemCount: E,
                          open: x[e.key],
                          onOpenChange: (c) => M(e.key, c)
                        },
                        `group-header-${e.key}`
                      ),
                      /* @__PURE__ */ a(H, { children: (!y || x[e.key]) && /* @__PURE__ */ a(
                        R.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.1, ease: "easeInOut" },
                          className: "mt-0.5",
                          children: /* @__PURE__ */ a(
                            b,
                            {
                              source: t,
                              items: e.records,
                              selectedItems: g,
                              handleSelectItemChange: u,
                              fields: n,
                              itemDefinition: d,
                              isLoadingMore: r && A === o.groups.length - 1
                            },
                            `list-group-${e.key}`
                          )
                        }
                      ) })
                    ]
                  },
                  `group-header-${e.key}`
                );
              }),
              o?.type === "flat" && /* @__PURE__ */ a(
                b,
                {
                  source: t,
                  items: o.records,
                  selectedItems: g,
                  handleSelectItemChange: u,
                  fields: n,
                  itemDefinition: d,
                  isLoadingMore: r
                }
              ),
              S(i) && r && /* @__PURE__ */ a(I, { source: t, fields: n, count: 5 }),
              S(i) && i.hasMore && /* @__PURE__ */ a(
                "div",
                {
                  ref: N,
                  className: "w-full",
                  "aria-hidden": "true"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ a(z, { paginationInfo: i, setPage: G })
      ]
    }
  );
};
export {
  re as ListCollection
};
