import { useState as U, useEffect as h } from "react";
import { useDeepCompareEffect as x } from "../../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { parseDataCollectionUrlParams as A, syncDataCollectionUrlParams as E } from "../../../lib/providers/datacollection/dataCollectionUrlParams.js";
const v = ({
  disabled: p,
  storageReady: f,
  filtersDefinition: d,
  filters: c,
  search: l,
  sortings: s,
  visualization: n,
  visualizationKeys: e,
  setFilters: m,
  setSearch: u,
  setSortings: w,
  setVisualization: C
}) => {
  const i = !p, o = e.length > 1, [r, D] = U(!1);
  h(() => {
    if (!i || !f || r) return;
    const t = A(
      typeof window < "u" ? window.location.search : "",
      d
    );
    if ("filters" in t && m(t.filters ?? {}), "search" in t && u(t.search), "sortings" in t && w(t.sortings ?? null), o && t.visualization !== void 0) {
      const a = e.indexOf(t.visualization);
      a >= 0 && C(a);
    }
    D(!0);
  }, [i, f]), x(() => {
    !i || !r || E({
      filters: c,
      search: l,
      sortings: s,
      // Omit the default (first) view; reflect others by their type/key.
      visualization: o && n > 0 ? e[n] : void 0
    });
  }, [
    i,
    r,
    c,
    l,
    s,
    n,
    e,
    o
  ]);
};
export {
  v as useDataCollectionUrlSync
};
