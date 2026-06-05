import { useState as P, useCallback as h, useMemo as A } from "react";
import "../../../icons/app/Menu.js";
import y from "../../../icons/app/Table.js";
import { extractDisplayValue as S } from "../../OneDataCollection/utils/csvExport.js";
import { downloadAsExcel as D, downloadAsCsv as v } from "../utils/downloadHelpers.js";
import { useI18n as F } from "../../../lib/providers/i18n/i18n-provider.js";
const f = 1e4, E = 100;
async function g(r) {
  return r instanceof Promise ? await r : r;
}
async function R(r) {
  const { dataAdapter: n } = r, l = [
    ...r.currentSortings ? [
      {
        field: r.currentSortings.field,
        order: r.currentSortings.order
      }
    ] : [],
    ...r.currentGrouping ? [
      {
        field: r.currentGrouping.field,
        order: r.currentGrouping.order ?? "asc"
      }
    ] : []
  ], t = {
    filters: r.currentFilters,
    sortings: l,
    search: r.currentSearch,
    navigationFilters: r.currentNavigationFilters
  }, o = n.exportFetchData ?? n.fetchData;
  if (!n.paginationType)
    return ((await g(
      o(t)
    )).records ?? []).slice(0, f);
  if (n.paginationType === "pages") {
    const e = [];
    let i = 1;
    for (; e.length < f; ) {
      const c = await g(
        o({
          ...t,
          pagination: { currentPage: i, perPage: E }
        })
      );
      if (!c.records || c.records.length === 0 || (e.push(...c.records), "pagesCount" in c && i >= c.pagesCount)) break;
      i++;
    }
    return e.slice(0, f);
  }
  const s = [];
  let a = null;
  for (; s.length < f; ) {
    const e = await g(
      o({
        ...t,
        pagination: { cursor: a, perPage: E }
      })
    );
    if (!e.records || e.records.length === 0 || (s.push(...e.records), "hasMore" in e && !e.hasMore)) break;
    if ("cursor" in e)
      a = e.cursor ?? null;
    else
      break;
  }
  return s.slice(0, f);
}
function M(r, n) {
  const l = new Set(n?.hidden ?? []), t = r.filter((e) => !l.has(e.id)), o = n?.order;
  if (!o || o.length === 0) return t;
  const s = new Map(t.map((e) => [e.id, e])), a = [];
  for (const e of o) {
    const i = s.get(e);
    i && (a.push(i), s.delete(e));
  }
  for (const e of t)
    s.has(e.id) && a.push(e);
  return a;
}
function L({
  source: r,
  title: n,
  columns: l,
  tableSettings: t
}) {
  const { t: o } = F(), [s, a] = P(!1), e = h(
    async (k) => {
      if (!(!r || s)) {
        a(!0);
        try {
          const m = await R(r), p = M(l, t);
          if (p.length === 0 || m.length === 0) return;
          const w = p.map((d) => d.label), x = p.map((d) => d.id), b = m.map((d) => {
            const C = {};
            for (const u of p)
              C[u.id] = u.render ? S(u.render(d)) : d[u.id];
            return C;
          });
          k === "excel" ? D(w, b, n, x) : v(w, b, n, x);
        } finally {
          a(!1);
        }
      }
    },
    [r, l, t, n, s]
  ), i = h(() => e("excel"), [e]), c = h(() => e("csv"), [e]);
  return A(() => r ? [
    {
      label: o("ai.dataDownload.download", { format: "Excel" }),
      icon: y,
      onClick: i
    },
    {
      label: o("ai.dataDownload.download", { format: "CSV" }),
      icon: y,
      onClick: c
    }
  ] : [], [r, o, i, c]);
}
export {
  L as useCollectionDownloadActions
};
