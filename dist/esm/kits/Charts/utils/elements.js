//#region src/kits/Charts/utils/elements.tsx
function e(e, t = "12px Inter, sans-serif") {
	let n = document.createElement("canvas").getContext("2d");
	return n ? (n.font = t, n.measureText(e).width) : 0;
}
var t = (e) => ({
	dataKey: "x",
	domain: e?.domain,
	tickLine: !1,
	axisLine: !1,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), n = (e) => ({
	tickLine: !1,
	axisLine: !1,
	domain: e?.domain,
	tickMargin: 8,
	ticks: e?.ticks,
	tickCount: e?.tickCount,
	tickFormatter: e?.tickFormatter
}), r = () => ({
	vertical: !1,
	strokeDasharray: "4"
}), i = (e = !1) => ({
	cursor: !0,
	offset: e ? 0 : 20,
	position: {
		y: e ? void 0 : 0,
		x: e ? 120 : void 0
	},
	animationDuration: 100,
	isAnimationActive: !0
});
//#endregion
export { r as cartesianGridProps, i as chartTooltipProps, e as measureTextWidth, t as xAxisProps, n as yAxisProps };
