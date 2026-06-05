import { useDeepCompareEffect as y } from "../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { useState as n, useEffect as A, useMemo as m } from "react";
import { useDebounceValue as V } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
const w = (e) => e.paginationType ?? "no-pagination", H = (e) => e;
function K({
  defaultFilters: e = {},
  currentFilters: s,
  defaultGrouping: S,
  currentGrouping: o,
  filters: E,
  search: p,
  defaultSortings: F,
  currentSortings: r,
  dataAdapter: L,
  grouping: t,
  ...T
}, D = []) {
  const [O, J] = n(s ?? e ?? {}), N = (i) => {
    if (typeof i == "function")
      J((d) => {
        const z = i(d);
        return JSON.stringify(z) === JSON.stringify(d) ? d : z;
      });
    else {
      if (JSON.stringify(O) === JSON.stringify(i))
        return;
      J(i);
    }
  };
  y(() => {
    s && N(s);
  }, [s]);
  const [j, b] = n(
    r ?? F ?? null
  );
  y(() => {
    r && b(r);
  }, [r]);
  const h = {
    sync: !1,
    ...p
  }, [c, k] = n(), [B, g] = V(c, 200);
  A(() => {
    h.sync || g(c);
  }, [c, h.sync, g]);
  const G = m(() => E, D), [I, M] = n(!1), P = m(() => L, D), f = m(
    () => t?.mandatory ? {
      field: Object.keys(
        t.groupBy
      )[0],
      order: "asc"
    } : void 0,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(t)]
  ), [a, u] = n(o ?? S ?? f);
  return A(() => {
    t?.mandatory && !a?.field && u(
      o ?? S ?? f
    );
  }, [t?.mandatory, a?.field, f]), y(() => {
    u(o);
  }, [o]), {
    ...T,
    // Filters
    filters: G,
    currentFilters: O,
    setCurrentFilters: N,
    // Sortings
    currentSortings: j,
    setCurrentSortings: b,
    // Search
    search: p,
    currentSearch: c,
    setCurrentSearch: k,
    debouncedCurrentSearch: B,
    // Loading
    isLoading: I,
    setIsLoading: M,
    // Data adapter
    dataAdapter: P,
    // Grouping
    setCurrentGrouping: u,
    currentGrouping: a,
    grouping: t
  };
}
export {
  H as createDataSourceDefinition,
  w as getDataSourcePaginationType,
  K as useDataSource
};
