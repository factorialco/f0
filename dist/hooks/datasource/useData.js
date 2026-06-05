import { useRef as D, useState as P, useEffect as b, useMemo as X, useDeferredValue as de, useCallback as L } from "react";
import { getValueByPath as pe } from "../../lib/objectPaths.js";
import { promiseToObservable as he } from "../../lib/promise-to-observable.js";
import { groupBy as Pe } from "./utils.js";
const Z = /* @__PURE__ */ Symbol("groupId");
function me() {
  const [r, f] = P(!0), [V, k] = P([]), [x, m] = P(null);
  return {
    isInitialLoading: r,
    setIsInitialLoading: f,
    data: V,
    setData: k,
    error: x,
    setError: m
  };
}
function ye() {
  const [r, f] = P(
    null
  );
  return { paginationInfo: r, setPaginationInfo: f };
}
const Ie = (r) => r, be = (r, f) => "id" in r ? `${r.id}` : f || JSON.stringify(r);
function Te(r, {
  filters: f,
  onError: V,
  fetchParamsProvider: k = Ie,
  onResponse: x
} = {}, m = []) {
  const {
    dataAdapter: i,
    currentFilters: j,
    currentSortings: F,
    search: T,
    currentSearch: v,
    setCurrentSearch: K,
    isLoading: U,
    setIsLoading: s,
    currentGrouping: c,
    grouping: A,
    idProvider: ee = be,
    itemPreFilter: G,
    currentPage: te,
    onPaginationChange: q
  } = r, d = D(), {
    isInitialLoading: re,
    setIsInitialLoading: B,
    data: N,
    setData: E,
    error: ne,
    setError: O
  } = me(), [oe, ae] = P(0), { paginationInfo: g, setPaginationInfo: C } = ye();
  b(() => {
    G && E((e) => {
      const n = e.length, l = e.filter(G), a = l.length, t = n - a;
      return ae(t), C(
        (o) => o ? {
          ...o,
          total: o.total - t
        } : null
      ), l;
    });
  }, [G, E, C]);
  const _ = D(g);
  b(() => {
    _.current = g;
  }, [g]);
  const [z, R] = P(void 0), [J, S] = P(!1), M = D(!1), H = D(te);
  b(() => {
    q?.(g);
  }, [g, q]);
  const u = X(() => ({ ...j, ...f }), [j, f]), Q = de(v), p = D(void 0);
  b(() => {
    p.current = T?.enabled ? T?.sync ? v : Q || v : void 0;
  }, [v, Q, T?.enabled, T?.sync]);
  const ie = (e, n, l) => {
    {
      const a = new Map(
        e.map((t, o) => [l(t, o), t])
      );
      for (const [t, o] of n.entries()) {
        const $ = l(o, t);
        a.set($, o);
      }
      return Array.from(a.values());
    }
  }, Y = L(
    (e, n, l) => {
      x?.(e);
      let a = [];
      if ("records" in e) {
        a = e.records;
        const t = i.paginationType;
        if (t && ["pages", "infinite-scroll"].includes(t) && t !== "no-pagination") {
          const o = {
            total: e.total,
            perPage: e.perPage
          };
          t === "pages" ? C({
            ...o,
            type: "pages",
            currentPage: "currentPage" in e ? e.currentPage : 1,
            pagesCount: "pagesCount" in e ? e.pagesCount : Math.ceil(e.total / e.perPage)
          }) : t === "infinite-scroll" && C({
            ...o,
            type: "infinite-scroll",
            cursor: "cursor" in e && e.cursor !== void 0 ? e.cursor : n ? String(e.perPage) : "0",
            hasMore: "hasMore" in e ? e.hasMore : N.length + e.records.length < e.total
          }), R(e.total);
        }
      } else
        a = e, R?.(e.length);
      E(
        n ? (t) => ie(t, a, ee) : a
      ), O(null), B(!1), s(!!l), S(!1), M.current = !1;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this callback when data.length changes
    [
      E,
      i,
      C,
      O,
      B,
      s,
      S,
      R,
      M
    ]
  ), se = X(() => {
    const e = N.map((n) => ({
      ...n,
      [Z]: c?.field && pe(n, c.field) || void 0
    }));
    if (c && c.field && A && A.groupBy[c.field]) {
      const n = Pe(e, Z), l = c.field, a = A.groupBy[l];
      return {
        type: "grouped",
        records: e,
        groups: Array.from(n.entries()).map(
          ([t, o]) => ({
            key: t,
            label: a.label(t, u),
            itemCount: a.itemCount?.(
              t,
              u
            ),
            records: o
          })
        )
      };
    }
    return {
      type: "flat",
      records: e,
      groups: [
        {
          key: "all",
          label: "All",
          itemCount: e.length,
          records: e
        }
      ]
    };
  }, [N, c, A, u]), w = L(
    (e) => {
      O({
        message: "Error fetching data",
        cause: e
      }), V?.({
        message: "Error fetching data",
        cause: e
      }), B(!1), s(!1), S(!1), d.current = void 0, M.current = !1;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to re-run this effect when the onError changes
    [O, B, s]
  ), y = L(
    async ({
      filters: e,
      currentPage: n = 1,
      search: l,
      appendMode: a = !1,
      cursor: t = null
    }) => {
      try {
        let o = function() {
          R(void 0);
          const W = "perPage" in i && i.perPage !== void 0 ? i.perPage : 20;
          return i.fetchData({
            ...fe,
            pagination: {
              ...i.paginationType === "pages" ? {
                currentPage: n,
                perPage: W
              } : i.paginationType === "infinite-scroll" ? {
                cursor: t,
                perPage: W
              } : {}
            }
          });
        };
        d.current && (d.current(), d.current = void 0);
        const $ = [
          ...F ? [
            {
              field: F.field,
              order: F.order
            }
          ] : [],
          ...c ? [
            {
              field: c.field,
              order: c.order ?? "asc"
            }
          ] : []
        ], fe = k(
          {
            filters: e,
            search: l,
            sortings: $
          }
        ), I = o();
        if (!("then" in I || "subscribe" in I)) {
          Y(I, a);
          return;
        }
        const ge = ("subscribe" in I ? I : he(I)).subscribe({
          next: (h) => {
            h.data ? Y(h.data, a, h.loading) : h.loading ? s(!0) : h.error && w(h.error);
          },
          error: w,
          complete: () => {
            d.current = void 0;
          }
        });
        d.current = () => ge.unsubscribe();
      } catch (o) {
        w(o);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetchDataAndUpdateParamsProvider must be stable
    [
      w,
      i,
      F,
      c,
      Y,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...m
    ]
  ), ce = L(
    (e) => {
      ve(g) && (s(!0), y({
        filters: u,
        currentPage: e,
        search: p.current
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to oberver ref current
    [
      p.current,
      y,
      u,
      s,
      g,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...m
    ]
  ), le = L(
    () => {
      const e = _.current;
      if (!(!e || U || J)) {
        if (!Ce(e)) {
          console.warn(
            "loadMore is only applicable for infinite-scroll pagination type"
          );
          return;
        }
        if (e.hasMore) {
          const n = e.cursor;
          S(!0), s(!0), M.current = !0, y({
            filters: u,
            appendMode: !0,
            cursor: n,
            search: p.current
          });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to oberver ref current
    [
      y,
      U,
      u,
      _.current,
      p.current,
      J,
      s,
      S,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...m
    ]
  );
  b(
    () => {
      if (!M.current) {
        s(!0);
        const e = H.current;
        H.current = void 0;
        const n = i.paginationType === "infinite-scroll" ? 0 : e ?? 1;
        y({
          filters: u,
          currentPage: n,
          search: p.current,
          cursor: i.paginationType === "infinite-scroll" ? "0" : null
          // Pass "0" as initial cursor
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to oberver ref current
    [
      y,
      u,
      s,
      i.paginationType,
      p.current,
      // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are handled by the caller
      ...m
    ]
  ), b(() => () => {
    d.current?.();
  }, []);
  const ue = z ? z - oe : 0;
  return {
    data: se,
    search: v,
    setSearch: K,
    isInitialLoading: re,
    isLoading: U,
    isLoadingMore: J,
    error: ne,
    paginationInfo: g,
    setPage: ce,
    loadMore: le,
    mergedFilters: u,
    totalItems: ue
  };
}
function ve(r) {
  return r !== null && r.type === "pages";
}
function Ce(r) {
  return r !== null && r.type === "infinite-scroll";
}
export {
  Z as GROUP_ID_SYMBOL,
  Ce as isInfiniteScrollPagination,
  ve as isPageBasedPagination,
  Te as useData
};
