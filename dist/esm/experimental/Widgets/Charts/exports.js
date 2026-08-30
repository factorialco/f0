import { Component as e } from "../../../lib/component/component.js";
import { AreaChartWidget as t } from "./AreaChartWidget/index.js";
import { BarChartWidget as n } from "./BarChartWidget/index.js";
import { LineChartWidget as r } from "./LineChartWidget/index.js";
import { PieChartWidget as i } from "./PieChartWidget/index.js";
import { SummariesWidget as a } from "./SummariesWidget/index.js";
import { VerticalBarChartWidget as o } from "./VerticalBarChartWidget/index.js";
//#region src/experimental/Widgets/Charts/exports.tsx
var s = e({
	name: "AreaChartWidget",
	type: "info"
}, t), c = e({
	name: "BarChartWidget",
	type: "info"
}, n), l = e({
	name: "LineChartWidget",
	type: "info"
}, r), u = e({
	name: "PieChartWidget",
	type: "info"
}, i), d = e({
	name: "VerticalBarChartWidget",
	type: "info"
}, o), f = e({
	name: "SummariesWidget",
	type: "info"
}, a);
//#endregion
export { s as AreaChartWidget, c as BarChartWidget, l as LineChartWidget, u as PieChartWidget, f as SummariesWidget, d as VerticalBarChartWidget };
