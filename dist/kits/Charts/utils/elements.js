function s(t, e = "12px Inter, sans-serif") {
  const i = document.createElement("canvas").getContext("2d");
  return i ? (i.font = e, i.measureText(t).width) : 0;
}
const r = (t) => ({
  dataKey: "x",
  domain: t?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: t?.ticks,
  tickCount: t?.tickCount,
  tickFormatter: t?.tickFormatter
}), n = (t) => ({
  tickLine: !1,
  axisLine: !1,
  domain: t?.domain,
  tickMargin: 8,
  ticks: t?.ticks,
  tickCount: t?.tickCount,
  tickFormatter: t?.tickFormatter
}), o = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), c = (t = !1) => ({
  cursor: !0,
  offset: t ? 0 : 20,
  position: { y: t ? void 0 : 0, x: t ? 120 : void 0 },
  animationDuration: 100,
  isAnimationActive: !0
});
export {
  o as cartesianGridProps,
  c as chartTooltipProps,
  s as measureTextWidth,
  r as xAxisProps,
  n as yAxisProps
};
