import { useState as f, useCallback as E, useEffect as L } from "react";
import { useDataSource as v } from "../../../../hooks/datasource/useDataSource.js";
import { useData as N } from "../../../../hooks/datasource/useData.js";
const l = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
function m(o) {
  return JSON.stringify(o);
}
function K(o, t, n) {
  const s = `${o}:${String(t)}`;
  b.set(s, n);
}
function k(o, t) {
  const n = `${o}:${String(t)}`;
  return b.get(n);
}
function x(o, t, n) {
  O.set(`${o}:${String(t)}`, n);
}
function z(o, t) {
  return O.get(`${o}:${String(t)}`);
}
async function A(o, t, n = !1) {
  if (n && l.has(o))
    return l.get(o);
  const i = await (typeof t == "function" ? t : () => t)();
  return l.set(o, i), i;
}
function D({
  schema: o,
  search: t
}) {
  const n = m(o), [s, i] = f([]), [S, p] = f(!1), [M, a] = f(null), g = "options" in o.options ? o.options.options : void 0, e = "source" in o.options ? o.options.source : void 0, $ = v(
    e ? {
      ...e,
      search: {
        enabled: !0,
        sync: !0
      }
    } : {
      dataAdapter: {
        fetchData: async () => ({
          records: []
        })
      }
    },
    [e]
  ), { data: y, isInitialLoading: h, loadMore: w, isLoadingMore: C, paginationInfo: u } = N({ ...$, currentSearch: t }, {}, [e]), d = E(
    async (r = !1) => {
      if (g) {
        r && l.delete(n);
        try {
          p(!0), a(null);
          const c = await A(
            n,
            g,
            o.options.cache
          );
          i(c);
        } catch (c) {
          a(
            c instanceof Error ? c : new Error("Failed to load options")
          );
        } finally {
          p(!1);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking the schema values
    [JSON.stringify(o), n]
  );
  return L(() => {
    if ("source" in o.options && o.options.mapOptions)
      try {
        p(!1), a(null);
        const r = y.records.map(o.options.mapOptions);
        i(r);
      } catch (r) {
        a(
          r instanceof Error ? r : new Error("Failed to map options from source")
        );
      }
  }, [y.records, o.options]), L(() => {
    e || d();
  }, [d, e]), {
    options: s,
    isLoading: e ? h || C : S,
    error: M,
    setOptions: i,
    loadOptions: d,
    loadMore: e ? w : void 0,
    hasMore: e ? u?.type === "infinite-scroll" && "hasMore" in u && u.hasMore : !1
  };
}
export {
  K as cacheLabel,
  x as cacheNestedLabel,
  m as getCacheKey,
  k as getCachedLabel,
  z as getNestedCachedLabel,
  A as loadOptions,
  D as useLoadOptions
};
