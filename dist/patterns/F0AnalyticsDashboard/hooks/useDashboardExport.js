import { useState as f, useCallback as d } from "react";
import { chartDataToTabular as m } from "../utils/chartDataToTabular.js";
import { downloadMultiSheetExcel as x } from "../utils/downloadHelpers.js";
import { extractColumns as w } from "../utils/extractColumns.js";
async function y(o, s) {
  if (o.length === 0) return null;
  const e = [];
  let a = !1;
  for (const u of o)
    try {
      const r = await u.fetchData(s), i = {
        Metric: u.title,
        Value: r.value
      };
      r.previousValue !== void 0 && (i["Previous Value"] = r.previousValue, a = !0), e.push(i);
    } catch (r) {
      console.warn(
        `[useDashboardExport] Failed to export metric "${u.title}":`,
        r
      );
    }
  return e.length === 0 ? null : { name: "Metrics", columns: a ? ["Metric", "Value", "Previous Value"] : ["Metric", "Value"], rows: e };
}
async function b(o, s) {
  const e = [], a = o.filter(
    (t) => t.type === "metric"
  ), n = await y(a, s);
  n && e.push(n);
  const r = o.filter((t) => t.type !== "metric").map(
    async (t) => {
      if (t.type === "chart")
        try {
          const c = await t.fetchData(s), l = m(t.chart, c);
          return {
            name: t.title,
            columns: l.columns,
            rows: l.rows
          };
        } catch (c) {
          return console.warn(
            `[useDashboardExport] Failed to export chart "${t.title}":`,
            c
          ), null;
        }
      if (t.type === "collection")
        try {
          const l = await t.createSource(s).dataAdapter.fetchData({
            filters: {},
            sortings: [],
            pagination: { currentPage: 1, perPage: 1e5 }
          }), h = "records" in l ? l.records : l;
          if (h.length === 0) return null;
          const p = w(h);
          return { name: t.title, columns: p, rows: h };
        } catch (c) {
          return console.warn(
            `[useDashboardExport] Failed to export collection "${t.title}":`,
            c
          ), null;
        }
      return null;
    }
  ), i = await Promise.all(r);
  for (const t of i)
    t && e.push(t);
  return e;
}
function v({
  items: o,
  filters: s,
  filename: e = "dashboard"
}) {
  const [a, n] = f(!1);
  return { exportAsExcel: d(async () => {
    n(!0);
    try {
      const r = await b(o, s);
      r.length > 0 && x(r, e);
    } finally {
      n(!1);
    }
  }, [o, s, e]), isExporting: a };
}
export {
  v as useDashboardExport
};
