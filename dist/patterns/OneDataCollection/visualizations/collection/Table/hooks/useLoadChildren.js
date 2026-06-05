import { useState as a, useRef as u, useEffect as N, useCallback as R } from "react";
import { promiseToObservable as E } from "../../../../../../lib/promise-to-observable.js";
import { useNestedDataContext as j } from "../providers/NestedProvider.js";
const k = (r) => r ? typeof r == "object" && "type" in r && r.type === "detailed" : !1, T = (r) => r ? Array.isArray(r) ? r : r.records : [], x = (r) => r && k(r) ? r?.type ?? "basic" : "basic", q = ({
  rowId: r,
  item: d,
  source: e,
  onClearFetchedData: p
}) => {
  const {
    fetchedData: f,
    updateFetchedData: b,
    clearFetchedData: h
  } = j(), [s, C] = a(
    T(f?.[r])
  ), [c, F] = a(f?.[r]?.paginationInfo), [I, i] = a(!1), [L, v] = a(
    x(f?.[r])
  ), y = u(e.currentFilters), m = u(e.currentSortings), S = u(e.currentNavigationFilters);
  N(() => {
    const n = y.current !== e.currentFilters, o = m.current !== e.currentSortings, t = S.current !== e.currentNavigationFilters;
    (n || o || t) && (C([]), F(void 0), v("basic"), h(), p(), y.current = e.currentFilters, m.current = e.currentSortings, S.current = e.currentNavigationFilters);
  }, [
    e.currentFilters,
    e.currentSortings,
    e.currentNavigationFilters,
    h,
    p
  ]);
  const l = u(), g = R(
    (n) => {
      const o = T(n), t = [...s, ...o];
      C(t);
      const D = {
        records: t,
        type: n?.type,
        paginationInfo: n?.paginationInfo
      };
      return b(r, D), v(x(n)), F(n?.paginationInfo), o;
    },
    [s, r, b]
  ), A = R(() => {
    if (s.length > 0 && !c?.hasMore) return s;
    l.current?.unsubscribe(), i(!0);
    const n = e.fetchChildren?.({
      item: d,
      filters: e.currentFilters,
      pagination: c,
      sortings: e.currentSortings
    });
    if (!n)
      return i(!1), [];
    if (!("then" in n) && !("subscribe" in n)) {
      const t = g(n);
      return i(!1), t;
    }
    const o = "subscribe" in n ? n : E(n);
    return l.current = o.subscribe({
      next: (t) => {
        t.loading ? i(!0) : t.error ? i(!1) : t.data && (g(t.data), i(!1));
      },
      error: (t) => {
        i(!1), console.error("Error loading children:", t);
      },
      complete: () => {
        l.current = void 0;
      }
    }), [];
  }, [s, d, e, c, g]);
  return N(() => () => {
    l.current?.unsubscribe();
  }, []), {
    children: s,
    loadChildren: A,
    isLoading: I,
    childrenType: L,
    paginationInfo: c
  };
};
export {
  q as useLoadChildren
};
