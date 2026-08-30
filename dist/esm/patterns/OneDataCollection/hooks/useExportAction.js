import e from "../../../icons/app/Download.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { useDataCollectionSettings as n } from "../Settings/SettingsProvider.js";
import { downloadAsCSV as r } from "../utils/csvExport.js";
import { useCallback as i, useState as a } from "react";
//#region src/patterns/OneDataCollection/hooks/useExportAction.ts
var o = 1e4, s = 100;
async function c(e) {
	if (e && typeof e.then == "function") return e;
	if (e && typeof e.subscribe == "function") {
		let t = e;
		return new Promise((e, n) => {
			let r = t.subscribe({
				next(t) {
					t.loading || (r?.unsubscribe(), t.error ? n(t.error) : t.data == null ? n(/* @__PURE__ */ Error("Observable resolved with no data")) : e(t.data));
				},
				error(e) {
					n(e instanceof Error ? e : Error(String(e)));
				},
				complete() {
					n(/* @__PURE__ */ Error("Observable completed without emitting data"));
				}
			});
		});
	}
	return e;
}
async function l(e) {
	let { dataAdapter: t } = e, n = [...e.currentSortings ? [{
		field: e.currentSortings.field,
		order: e.currentSortings.order
	}] : [], ...e.currentGrouping ? [{
		field: e.currentGrouping.field,
		order: e.currentGrouping.order ?? "asc"
	}] : []], r = {
		filters: e.currentFilters,
		sortings: n,
		search: e.currentSearch,
		navigationFilters: e.currentNavigationFilters
	};
	if (!t.paginationType) return ((await c((t.exportFetchData ?? t.fetchData)(r))).records ?? []).slice(0, o);
	let i = t.exportFetchData ?? t.fetchData;
	if (t.paginationType === "pages") {
		let e = [], t = 1;
		for (; e.length < o;) {
			let n = await c(i({
				...r,
				pagination: {
					currentPage: t,
					perPage: s
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "pagesCount" in n && t >= n.pagesCount)) break;
			t++;
		}
		return e.slice(0, o);
	}
	if (t.paginationType === "infinite-scroll") {
		let e = [], t = null;
		for (; e.length < o;) {
			let n = await c(i({
				...r,
				pagination: {
					cursor: t,
					perPage: s
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "hasMore" in n && !n.hasMore)) break;
			if ("cursor" in n) t = n.cursor ?? null;
			else break;
		}
		return e.slice(0, o);
	}
	return ((await c(i({
		...r,
		pagination: {}
	}))).records ?? []).slice(0, o);
}
function u({ source: o, currentVisualization: s, filename: c, enabled: u = !0 }) {
	let [d, f] = a(!1), p = t(), { settings: m } = n(), h = i(async () => {
		if (u) {
			f(!0);
			try {
				let e = await l(o), t = s?.type ?? "table", n = m.visualization[t], i = n?.hidden ? new Set(n.hidden) : void 0, a = n?.order;
				await r(e, s, {
					filename: c || "data_collection_export",
					hiddenColumnIds: i,
					columnOrder: a
				});
			} catch (e) {
				console.error("Export failed:", e);
			} finally {
				f(!1);
			}
		}
	}, [
		u,
		o,
		s,
		c,
		m
	]);
	return {
		label: p.collections?.export?.label ?? "Export to CSV",
		icon: e,
		onClick: h,
		loading: d,
		disabled: !u || d || o.isLoading,
		description: p.collections?.export?.description ?? "Download all data as a CSV file"
	};
}
//#endregion
export { u as useExportAction };
