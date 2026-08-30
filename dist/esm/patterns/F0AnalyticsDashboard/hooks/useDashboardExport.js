import { isRenderableChart as e } from "../utils/chartDataAdapter.js";
import { chartDataToTabular as t } from "../utils/chartDataToTabular.js";
import { downloadMultiSheetExcel as n } from "../utils/downloadHelpers.js";
import { extractColumns as r } from "../utils/extractColumns.js";
import { useCallback as i, useRef as a, useState as o } from "react";
//#region src/patterns/F0AnalyticsDashboard/hooks/useDashboardExport.ts
function s(e, t) {
	return e.useDashboardFilters === !1 ? {} : t;
}
async function c(e, t) {
	if (e.length === 0) return null;
	let n = [], r = !1;
	for (let i of e) try {
		let e = await i.fetchData(s(i, t)), a = {
			Metric: i.title,
			Value: e.value
		};
		e.previousValue !== void 0 && (a["Previous Value"] = e.previousValue, r = !0), n.push(a);
	} catch (e) {
		console.warn(`[useDashboardExport] Failed to export metric "${i.title}":`, e);
	}
	return n.length === 0 ? null : {
		name: "Metrics",
		columns: r ? [
			"Metric",
			"Value",
			"Previous Value"
		] : ["Metric", "Value"],
		rows: n
	};
}
async function l(n, i) {
	let a = [], o = await c(n.filter((e) => e.type === "metric"), i);
	o && a.push(o);
	let l = n.filter((e) => e.type !== "metric").map(async (n) => {
		if (n.type === "chart") try {
			let r = await n.fetchData(s(n, i));
			if (!e(n.chart)) return console.warn(`[useDashboardExport] Skipped chart "${n.title}": unsupported chart type`), null;
			let a = t(n.chart, r);
			return {
				name: n.title,
				columns: a.columns,
				rows: a.rows,
				keys: a.keys
			};
		} catch (e) {
			return console.warn(`[useDashboardExport] Failed to export chart "${n.title}":`, e), null;
		}
		if (n.type === "collection") try {
			let e = await n.createSource(s(n, i)).dataAdapter.fetchData({
				filters: {},
				sortings: [],
				pagination: {
					currentPage: 1,
					perPage: 1e5
				}
			}), t = "records" in e ? e.records : e;
			if (t.length === 0) return null;
			let a = r(t);
			return {
				name: n.title,
				columns: a,
				rows: t
			};
		} catch (e) {
			return console.warn(`[useDashboardExport] Failed to export collection "${n.title}":`, e), null;
		}
		return null;
	}), u = await Promise.all(l);
	for (let e of u) e && a.push(e);
	return a;
}
function u({ items: e, filters: t, filename: r = "dashboard" }) {
	let [s, c] = o(!1), u = a(e);
	u.current = e;
	let d = a(t);
	d.current = t;
	let f = a(r);
	return f.current = r, {
		exportAsExcel: i(async () => {
			c(!0);
			try {
				let e = await l(u.current, d.current);
				e.length > 0 && n(e, f.current);
			} finally {
				c(!1);
			}
		}, []),
		isExporting: s
	};
}
//#endregion
export { u as useDashboardExport };
