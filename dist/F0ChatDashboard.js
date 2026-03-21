import { jsx as $ } from "react/jsx-runtime";
import { useRef as w, useCallback as v, useState as j, useEffect as R, useMemo as D } from "react";
import { F as P } from "./F0AnalyticsDashboard-Doa70ufI.js";
function _(t, e, n) {
  const r = w(null), y = w(), i = w(t);
  i.current = t;
  const l = w(e);
  l.current = e;
  const b = w(n);
  b.current = n;
  const u = v(
    (h, f) => {
      const S = `${b.current}:${JSON.stringify(f)}`;
      if (r.current?.key === S)
        return r.current.promise.then(
          (d) => d.results[h] ?? { error: "No result for item" }
        );
      r.current?.controller.abort();
      const o = new AbortController(), s = i.current, c = l.current, g = {};
      for (const [d, m] of Object.entries(f))
        Array.isArray(m) && m.length > 0 && (g[d] = m.map(String));
      const a = {
        fetchSpecs: s.fetchSpecs,
        items: s.items,
        filters: s.filters,
        filterValues: Object.keys(g).length > 0 ? g : void 0
      }, F = fetch(`${c.baseUrl}/dashboard/compute`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...c.headers
        },
        body: JSON.stringify(a),
        signal: o.signal
      }).then(async (d) => {
        if (!d.ok) {
          const k = await d.text().catch(() => "");
          throw new Error(`Dashboard compute failed: ${d.status} ${k}`);
        }
        const m = await d.json();
        return y.current = m, m;
      });
      return r.current = { key: S, promise: F, controller: o }, F.then(
        (d) => d.results[h] ?? { error: "No result for item" }
      );
    },
    []
  ), p = v(
    () => y.current?.filterOptions,
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
        return (n) => {
          try {
            return n.toLocaleString(void 0, {
              style: "currency",
              currency: e,
              maximumFractionDigits: 0
            });
          } catch {
            return `${n}`;
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
  );
  switch (t.type) {
    case "bar": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
    case "line": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
    case "funnel": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
    case "radar": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
    case "pie": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
    case "gauge": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
    case "heatmap": {
      const { valueFormat: n, ...r } = t;
      return { ...r, ...e ? { valueFormatter: e } : {} };
    }
  }
}
const x = 20;
function C({
  config: t,
  apiConfig: e,
  refreshKey: n = 0,
  editMode: r,
  onLayoutChange: y
}) {
  const { fetchItem: i, getFilterOptions: l } = _(
    t,
    e,
    n
  ), [b, u] = j(), p = w(!1);
  R(() => {
    p.current = !1;
  }, [n]), R(() => {
    if (p.current) return;
    const o = setInterval(() => {
      const s = l();
      s && (u(s), p.current = !0, clearInterval(o));
    }, 100);
    return () => clearInterval(o);
  }, [l, n]);
  const h = D(() => {
    const o = t.filters;
    if (!o || Object.keys(o).length === 0 || !b) return;
    const s = {};
    for (const [c, g] of Object.entries(o)) {
      const a = b[c] ?? [];
      a.length !== 0 && (s[c] = {
        type: "in",
        label: g.label,
        options: {
          options: a.map((F) => ({ value: F, label: F }))
        }
      });
    }
    if (Object.keys(s).length !== 0)
      return s;
  }, [t.filters, b]), f = v(
    (o) => (s) => {
      const c = {};
      for (const [g, a] of Object.entries(s))
        Array.isArray(a) && a.length > 0 && (c[g] = a);
      return i(o, c).then((g) => {
        const a = l();
        return a && !p.current && (u(a), p.current = !0), g;
      });
    },
    [i, l]
  ), S = D(
    () => t.items.map((o) => {
      switch (o.type) {
        case "chart":
          return E(o, f(o.id));
        case "metric":
          return L(o, f(o.id));
        case "collection":
          return M(o, f(o.id));
      }
    }),
    [t.items, f]
  );
  return /* @__PURE__ */ $(
    P,
    {
      filters: h,
      items: S,
      editMode: r,
      onLayoutChange: y
    },
    n
  );
}
C.displayName = "F0ChatDashboard";
function E(t, e) {
  return {
    id: t.id,
    title: t.title,
    description: O(t.description, t.sourceDescription),
    colSpan: t.colSpan,
    rowSpan: t.rowSpan,
    x: t.x,
    y: t.y,
    type: "chart",
    chart: I(t.chart),
    fetchData: (n) => e(n).then((r) => r.chart ?? { categories: [], series: [] })
  };
}
function O(t, e) {
  return e ? t ? `${t}
${e}` : e : t;
}
function L(t, e) {
  return {
    id: t.id,
    title: t.title,
    description: O(t.description, t.sourceDescription),
    colSpan: t.colSpan,
    rowSpan: t.rowSpan,
    x: t.x,
    y: t.y,
    type: "metric",
    format: t.format,
    decimals: t.decimals,
    fetchData: (n) => e(n).then((r) => r.metric ?? { value: 0 })
  };
}
function M(t, e) {
  return {
    id: t.id,
    title: t.title,
    description: O(t.description, t.sourceDescription),
    colSpan: t.colSpan ?? 12,
    rowSpan: t.rowSpan,
    x: t.x,
    y: t.y,
    type: "collection",
    createSource: (n) => {
      let r = null;
      const y = e(n).then((i) => (r = i.collection?.rows ?? [], r));
      return {
        dataAdapter: {
          paginationType: "pages",
          perPage: x,
          fetchData: async ({
            pagination: i,
            search: l
          }) => {
            let u = r ?? await y;
            if (l) {
              const o = l.toLowerCase();
              u = u.filter(
                (s) => Object.values(s).some(
                  (c) => c != null && String(c).toLowerCase().includes(o)
                )
              );
            }
            const p = i?.currentPage ?? 1, h = i?.perPage ?? x, f = (p - 1) * h;
            return {
              type: "pages",
              records: u.slice(f, f + h),
              total: u.length,
              currentPage: p,
              perPage: h,
              pagesCount: Math.ceil(u.length / h)
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
          columns: t.columns.map((n) => ({
            label: n.label,
            id: n.id,
            ...n.width ? { width: n.width } : {},
            render: (r) => {
              const y = r[n.id];
              return y == null ? "-" : String(y);
            }
          }))
        }
      }
    ]
  };
}
export {
  C as F0ChatDashboard
};
