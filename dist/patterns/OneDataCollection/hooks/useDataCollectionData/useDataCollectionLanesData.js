import { jsx as R } from "react/jsx-runtime";
import { useMemo as L, useState as I, useRef as h, useEffect as P, useCallback as E } from "react";
import { useDeepCompareMemoize as C } from "../../../../node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.3.1/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js";
import { useDataCollectionData as b } from "./useDataCollectionData.js";
import { mergeFiltersWithIntersection as H } from "./utils.js";
const w = ({
  source: e,
  lane: t,
  onError: n,
  onHookUpdate: F
}) => {
  const [c, S] = I(!1), o = L(
    () => ({
      ...e,
      isLoading: c,
      setIsLoading: S
    }),
    [e, c]
  ), s = L(
    () => H(e.currentFilters, t.filters),
    [e.currentFilters, t.filters]
  ), i = b(o, {
    filters: s,
    onError: n
  }), {
    data: a,
    search: u,
    setSearch: l,
    isInitialLoading: d,
    isLoading: g,
    isLoadingMore: M,
    error: r,
    paginationInfo: m,
    setPage: f,
    loadMore: p,
    totalItems: k,
    mergedFilters: v,
    summaries: D
  } = i;
  return P(() => {
    F?.(t.id, {
      data: a,
      search: u,
      setSearch: l,
      isInitialLoading: d,
      isLoading: g,
      isLoadingMore: M,
      error: r,
      paginationInfo: m,
      setPage: f,
      loadMore: p,
      totalItems: k,
      mergedFilters: v,
      summaries: D
    });
  }, [
    a,
    u,
    l,
    d,
    g,
    M,
    r,
    m,
    f,
    p,
    k,
    v,
    D,
    F,
    t.id
  ]), null;
};
function U(e, t = {}) {
  const { lanes: n } = e;
  if (!L(() => n && n.length > 0, [n]))
    throw new Error("Lanes has not been configured on data source");
  const [c, S] = I({}), o = h({}), s = h(!1), i = h(!1);
  P(() => (i.current = !0, () => {
    i.current = !1;
  }), []);
  const a = h(t.onError);
  P(() => {
    a.current = t.onError;
  });
  const u = E((r) => {
    a.current?.(r);
  }, []), l = E(
    (r, m) => {
      o.current[r] = m, !s.current && (s.current = !0, queueMicrotask(() => {
        const f = o.current;
        o.current = {}, s.current = !1, i.current && S((p) => ({ ...p, ...f }));
      }));
    },
    []
  ), d = {
    lanes: n,
    currentFilters: e.currentFilters,
    currentNavigationFilters: e.currentNavigationFilters,
    currentSortings: e.currentSortings,
    currentGrouping: e.currentGrouping,
    currentSearch: e.currentSearch,
    grouping: e.grouping,
    summaries: e.summaries,
    dataAdapter: e.dataAdapter,
    itemPreFilter: e.itemPreFilter
  }, g = C(d);
  return {
    lanesProvider: L(
      () => (n || []).map((r) => /* @__PURE__ */ R(
        w,
        {
          lane: r,
          onError: u,
          source: e,
          onHookUpdate: l
        },
        String(r.id)
      )),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [g]
    ),
    lanesHooks: c
  };
}
export {
  U as useDataCollectionLanesData
};
