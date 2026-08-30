import e from "../../../icons/app/Image.js";
import t from "../../../icons/app/Table.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { detectDataShape as r } from "../utils/chartDataAdapter.js";
import { chartDataToTabular as i } from "../utils/chartDataToTabular.js";
import { downloadAsCsv as a, downloadAsExcel as o, downloadAsImage as s } from "../utils/downloadHelpers.js";
import { useCallback as c, useMemo as l } from "react";
import * as u from "echarts";
//#region src/patterns/F0AnalyticsDashboard/hooks/useChartDownloadActions.ts
function d(e) {
	let t = e.current?.querySelector(":scope > div");
	return t ? u.getInstanceByDom(t) ?? null : null;
}
function f({ chartContainerRef: u, chartConfig: f, data: p, title: m }) {
	let { t: h } = n(), g = c((e) => {
		let t = d(u);
		if (!t) return;
		let n = e === "jpg" ? "jpeg" : "png", r = t.getDataURL({
			type: n,
			pixelRatio: 2,
			...e === "jpg" ? { backgroundColor: "#fff" } : {}
		});
		s(r, m, e);
	}, [u, m]), _ = l(() => {
		if (!p) return f;
		let e = r(p, f.type);
		return e === f.type ? f : {
			...f,
			type: e
		};
	}, [f, p]), v = c(() => {
		if (!p) return;
		let e = i(_, p);
		o(e.columns, e.rows, m, e.keys);
	}, [
		_,
		p,
		m
	]), y = c(() => {
		if (!p) return;
		let e = i(_, p);
		a(e.columns, e.rows, m, e.keys);
	}, [
		_,
		p,
		m
	]);
	return l(() => p ? [
		{
			label: h("ai.dataDownload.download", { format: "PNG" }),
			icon: e,
			onClick: () => g("png")
		},
		{
			label: h("ai.dataDownload.download", { format: "JPG" }),
			icon: e,
			onClick: () => g("jpg")
		},
		{ type: "separator" },
		{
			label: h("ai.dataDownload.download", { format: "Excel" }),
			icon: t,
			onClick: v
		},
		{
			label: h("ai.dataDownload.download", { format: "CSV" }),
			icon: t,
			onClick: y
		}
	] : [], [
		p,
		h,
		g,
		v,
		y
	]);
}
//#endregion
export { f as useChartDownloadActions };
