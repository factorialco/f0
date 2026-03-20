import { jsx as k } from "react/jsx-runtime";
import { useRef as w, useCallback as O, useState as $, useEffect as R, useMemo as D } from "react";
import { F as j } from "./F0AnalyticsDashboard-CgXej3au.js";
function P(t, e, r) {
  const o = w(null), h = w(), i = w(t);
  i.current = t;
  const l = w(e);
  l.current = e;
  const g = w(r);
  g.current = r;
  const u = O(
    (y, f) => {
      const m = `${g.current}:${JSON.stringify(f)}`;
      if (o.current?.key === m)
        return o.current.promise.then(
          (d) => d.results[y] ?? { error: "No result for item" }
        );
      o.current?.controller.abort();
      const n = new AbortController(), s = i.current, c = l.current, b = {};
      for (const [d, S] of Object.entries(f))
        Array.isArray(S) && S.length > 0 && (b[d] = S.map(String));
      const a = {
        fetchSpecs: s.fetchSpecs,
        items: s.items,
        filters: s.filters,
        filterValues: Object.keys(b).length > 0 ? b : void 0
      }, F = fetch(`${c.baseUrl}/dashboard/compute`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...c.headers
        },
        body: JSON.stringify(a),
        signal: n.signal
      }).then(async (d) => {
        if (!d.ok) {
          const C = await d.text().catch(() => "");
          throw new Error(`Dashboard compute failed: ${d.status} ${C}`);
        }
        const S = await d.json();
        return h.current = S, S;
      });
      return o.current = { key: m, promise: F, controller: n }, F.then(
        (d) => d.results[y] ?? { error: "No result for item" }
      );
    },
    []
  ), p = O(
    () => h.current?.filterOptions,
    []
  );
  return { fetchItem: u, getFilterOptions: p };
}
function A(t) {
  if (t)
    switch (t.type) {
      case "number":
        return (e) => e.toLocaleString();
      case "currency": {
        const e = t.currency ?? "EUR";
        return (r) => {
          try {
            return r.toLocaleString(void 0, {
              style: "currency",
              currency: e,
              maximumFractionDigits: 0
            });
          } catch {
            return `${r}`;
          }
        };
      }
      case "percent":
        return (e) => `${e}%`;
      case "compact":
        return (e) => Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : `${e}`;
      default:
        return;
    }
}
function I(t) {
  const e = A(
    "valueFormat" in t ? t.valueFormat : void 0
  ), { valueFormat: r, ...o } = t;
  return {
    ...o,
    ...e ? { valueFormatter: e } : {}
  };
}
const x = 20;
function E({
  config: t,
  apiConfig: e,
  refreshKey: r = 0,
  editMode: o,
  onLayoutChange: h
}) {
  const { fetchItem: i, getFilterOptions: l } = P(
    t,
    e,
    r
  ), [g, u] = $(), p = w(!1);
  R(() => {
    p.current = !1;
  }, [r]), R(() => {
    if (p.current) return;
    const n = setInterval(() => {
      const s = l();
      s && (u(s), p.current = !0, clearInterval(n));
    }, 100);
    return () => clearInterval(n);
  }, [l, r]);
  const y = D(() => {
    const n = t.filters;
    if (!n || Object.keys(n).length === 0 || !g) return;
    const s = {};
    for (const [c, b] of Object.entries(n)) {
      const a = g[c] ?? [];
      a.length !== 0 && (s[c] = {
        type: "in",
        label: b.label,
        options: {
          options: a.map((F) => ({ value: F, label: F }))
        }
      });
    }
    if (Object.keys(s).length !== 0)
      return s;
  }, [t.filters, g]), f = O(
    (n) => (s) => {
      const c = {};
      for (const [b, a] of Object.entries(s))
        Array.isArray(a) && a.length > 0 && (c[b] = a);
      return i(n, c).then((b) => {
        const a = l();
        return a && !p.current && (u(a), p.current = !0), b;
      });
    },
    [i, l]
  ), m = D(
    () => t.items.map((n) => {
      switch (n.type) {
        case "chart":
          return L(n, f(n.id));
        case "metric":
          return M(n, f(n.id));
        case "collection":
          return N(n, f(n.id));
      }
    }),
    [t.items, f]
  );
  return /* @__PURE__ */ k(
    j,
    {
      filters: y,
      items: m,
      editMode: o,
      onLayoutChange: h
    },
    r
  );
}
E.displayName = "F0ChatDashboard";
function L(t, e) {
  return {
    id: t.id,
    title: t.title,
    description: v(t.description, t.sourceDescription),
    colSpan: t.colSpan,
    rowSpan: t.rowSpan,
    x: t.x,
    y: t.y,
    type: "chart",
    chart: I(t.chart),
    fetchData: (r) => e(r).then((o) => o.chart ?? { categories: [], series: [] })
  };
}
function v(t, e) {
  return e ? t ? `${t}
${e}` : e : t;
}
function M(t, e) {
  return {
    id: t.id,
    title: t.title,
    description: v(t.description, t.sourceDescription),
    colSpan: t.colSpan,
    rowSpan: t.rowSpan,
    x: t.x,
    y: t.y,
    type: "metric",
    format: t.format,
    decimals: t.decimals,
    fetchData: (r) => e(r).then((o) => o.metric ?? { value: 0 })
  };
}
function N(t, e) {
  return {
    id: t.id,
    title: t.title,
    description: v(t.description, t.sourceDescription),
    colSpan: t.colSpan ?? 12,
    rowSpan: t.rowSpan,
    x: t.x,
    y: t.y,
    type: "collection",
    createSource: (r) => {
      let o = null;
      const h = e(r).then((i) => (o = i.collection?.rows ?? [], o));
      return {
        dataAdapter: {
          paginationType: "pages",
          perPage: x,
          fetchData: async ({
            pagination: i,
            search: l
          }) => {
            let u = o ?? await h;
            if (l) {
              const n = l.toLowerCase();
              u = u.filter(
                (s) => Object.values(s).some(
                  (c) => c != null && String(c).toLowerCase().includes(n)
                )
              );
            }
            const p = i?.currentPage ?? 1, y = i?.perPage ?? x, f = (p - 1) * y;
            return {
              type: "pages",
              records: u.slice(f, f + y),
              total: u.length,
              currentPage: p,
              perPage: y,
              pagesCount: Math.ceil(u.length / y)
            };
          }
        },
        search: {
          enabled: !0,
          sync: !0
        }
      };
    },
    visualizations: [
      {
        type: "table",
        options: {
          columns: t.columns.map((r) => ({
            label: r.label,
            id: r.id,
            ...r.width ? { width: r.width } : {},
            render: (o) => {
              const h = o[r.id];
              return h == null ? "-" : String(h);
            }
          }))
        }
      }
    ]
  };
}
export {
  E as F
};
