import { useState as o } from "react";
import { useData as m } from "../../../../hooks/datasource/useData.js";
function u(a, { filters: e, onError: i } = {}) {
  const [n, r] = o(void 0);
  return {
    ...m(
      a,
      {
        filters: e,
        onError: i,
        fetchParamsProvider: (t) => ({
          ...t,
          navigationFilters: a.currentNavigationFilters
        }),
        onResponse: (t) => {
          const s = "summaries" in t ? t.summaries : void 0;
          r(s);
        }
      },
      [JSON.stringify(a.currentNavigationFilters)]
    ),
    summaries: n
  };
}
function f(a, e = {}) {
  return {
    ...u(a, e)
  };
}
export {
  f as useDataCollectionData
};
