import { useDeepCompareEffect as f } from "../../../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { useState as v, useMemo as d } from "react";
import { navigationFilterTypes as g } from "../../navigationFilters/index.js";
import { useI18n as C } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useDataSource as F } from "../../../../hooks/datasource/useDataSource.js";
const j = (t, o = []) => {
  const s = C(), {
    navigationFilters: r,
    summaries: u,
    currentNavigationFilters: a
  } = t, m = F(
    {
      ...t,
      dataAdapter: t.dataAdapter
    },
    o
  ), [c, n] = v(() => r ? Object.fromEntries(
    Object.entries(r).map(([p, e]) => {
      const i = g[e.type];
      return [
        p,
        i.valueConverter ? i.valueConverter(e.defaultValue, e, s) : e.defaultValue
      ];
    })
  ) : {});
  f(() => {
    a && n(a);
  }, [a]);
  const l = d(() => u, o);
  return {
    ...m,
    summaries: l,
    navigationFilters: r,
    currentNavigationFilters: c,
    setCurrentNavigationFilters: n
  };
};
export {
  j as useDataCollectionSource
};
