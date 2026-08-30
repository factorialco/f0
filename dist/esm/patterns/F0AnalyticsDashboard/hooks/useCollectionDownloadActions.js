import e from "../../../icons/app/Table.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { extractDisplayValue as n } from "../../OneDataCollection/utils/csvExport.js";
import { downloadAsCsv as r, downloadAsExcel as i } from "../utils/downloadHelpers.js";
import { useCallback as a, useMemo as o, useState as s } from "react";
//#region src/patterns/F0AnalyticsDashboard/hooks/useCollectionDownloadActions.ts
var c = 1e4, l = 100;
async function u(e) {
	return e instanceof Promise ? await e : e;
}
async function d(e) {
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
	}, i = t.exportFetchData ?? t.fetchData;
	if (!t.paginationType) return ((await u(i(r))).records ?? []).slice(0, c);
	if (t.paginationType === "pages") {
		let e = [], t = 1;
		for (; e.length < c;) {
			let n = await u(i({
				...r,
				pagination: {
					currentPage: t,
					perPage: l
				}
			}));
			if (!n.records || n.records.length === 0 || (e.push(...n.records), "pagesCount" in n && t >= n.pagesCount)) break;
			t++;
		}
		return e.slice(0, c);
	}
	let a = [], o = null;
	for (; a.length < c;) {
		let e = await u(i({
			...r,
			pagination: {
				cursor: o,
				perPage: l
			}
		}));
		if (!e.records || e.records.length === 0 || (a.push(...e.records), "hasMore" in e && !e.hasMore)) break;
		if ("cursor" in e) o = e.cursor ?? null;
		else break;
	}
	return a.slice(0, c);
}
function f(e, t) {
	let n = new Set(t?.hidden ?? []), r = e.filter((e) => !n.has(e.id)), i = t?.order;
	if (!i || i.length === 0) return r;
	let a = new Map(r.map((e) => [e.id, e])), o = [];
	for (let e of i) {
		let t = a.get(e);
		t && (o.push(t), a.delete(e));
	}
	for (let e of r) a.has(e.id) && o.push(e);
	return o;
}
function p({ source: c, title: l, columns: u, tableSettings: p }) {
	let { t: m } = t(), [h, g] = s(!1), _ = a(async (e) => {
		if (!(!c || h)) {
			g(!0);
			try {
				let t = await d(c), a = f(u, p);
				if (a.length === 0 || t.length === 0) return;
				let o = a.map((e) => e.label), s = a.map((e) => e.id), m = t.map((e) => {
					let t = {};
					for (let r of a) t[r.id] = r.render ? n(r.render(e)) : e[r.id];
					return t;
				});
				e === "excel" ? i(o, m, l, s) : r(o, m, l, s);
			} finally {
				g(!1);
			}
		}
	}, [
		c,
		u,
		p,
		l,
		h
	]), v = a(() => _("excel"), [_]), y = a(() => _("csv"), [_]);
	return o(() => c ? [{
		label: m("ai.dataDownload.download", { format: "Excel" }),
		icon: e,
		onClick: v
	}, {
		label: m("ai.dataDownload.download", { format: "CSV" }),
		icon: e,
		onClick: y
	}] : [], [
		c,
		m,
		v,
		y
	]);
}
//#endregion
export { p as useCollectionDownloadActions };
