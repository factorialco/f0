import { useState as m, useCallback as w } from "react";
import E from "../../../icons/app/Download.js";
import "../../../icons/app/Menu.js";
import { useDataCollectionSettings as S } from "../Settings/SettingsProvider.js";
import { downloadAsCSV as x } from "../utils/csvExport.js";
import { useI18n as y } from "../../../lib/providers/i18n/i18n-provider.js";
const p = 1e4, g = 100;
async function d(r) {
  if (r && typeof r.then == "function")
    return r;
  if (r && typeof r.subscribe == "function") {
    const t = r;
    return new Promise((c, n) => {
      const a = t.subscribe({
        next(o) {
          o.loading || (a?.unsubscribe(), o.error ? n(o.error) : o.data != null ? c(o.data) : n(new Error("Observable resolved with no data")));
        },
        error(o) {
          n(o instanceof Error ? o : new Error(String(o)));
        },
        complete() {
          n(new Error("Observable completed without emitting data"));
        }
      });
    });
  }
  return r;
}
async function v(r) {
  const { dataAdapter: t } = r, c = [
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
  ], n = {
    filters: r.currentFilters,
    sortings: c,
    search: r.currentSearch,
    navigationFilters: r.currentNavigationFilters
  };
  if (!t.paginationType) {
    const i = t.exportFetchData ?? t.fetchData;
    return ((await d(i(n))).records ?? []).slice(0, p);
  }
  const a = t.exportFetchData ?? t.fetchData;
  if (t.paginationType === "pages") {
    const i = [];
    let s = 1;
    for (; i.length < p; ) {
      const e = await d(
        a({
          ...n,
          pagination: { currentPage: s, perPage: g }
        })
      );
      if (!e.records || e.records.length === 0 || (i.push(...e.records), "pagesCount" in e && s >= e.pagesCount)) break;
      s++;
    }
    return i.slice(0, p);
  }
  if (t.paginationType === "infinite-scroll") {
    const i = [];
    let s = null;
    for (; i.length < p; ) {
      const e = await d(
        a({
          ...n,
          pagination: { cursor: s, perPage: g }
        })
      );
      if (!e.records || e.records.length === 0 || (i.push(...e.records), "hasMore" in e && !e.hasMore)) break;
      if ("cursor" in e)
        s = e.cursor ?? null;
      else
        break;
    }
    return i.slice(0, p);
  }
  return ((await d(
    a({
      ...n,
      pagination: {}
    })
  )).records ?? []).slice(0, p);
}
function D({
  source: r,
  currentVisualization: t,
  filename: c,
  enabled: n = !0
}) {
  const [a, o] = m(!1), f = y(), { settings: i } = S(), s = w(async () => {
    if (n) {
      o(!0);
      try {
        const l = await v(r), e = t?.type ?? "table", u = i.visualization[e], h = u?.hidden ? new Set(u.hidden) : void 0, b = u?.order;
        await x(l, t, {
          filename: c || "data_collection_export",
          hiddenColumnIds: h,
          columnOrder: b
        });
      } catch (l) {
        console.error("Export failed:", l);
      } finally {
        o(!1);
      }
    }
  }, [n, r, t, c, i]);
  return {
    label: f.collections?.export?.label ?? "Export to CSV",
    icon: E,
    onClick: s,
    loading: a,
    disabled: !n || a || r.isLoading,
    description: f.collections?.export?.description ?? "Download all data as a CSV file"
  };
}
export {
  D as useExportAction
};
