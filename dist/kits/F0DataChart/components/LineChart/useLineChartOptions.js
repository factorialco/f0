import "../../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js";
import { useMemo as V } from "react";
import { resolveChartColorToken as T, paletteColor as B } from "../../utils/colors.js";
import { buildBaseChartOptions as M } from "../../utils/options.js";
import { useChartTheme as O } from "../../utils/useChartTheme.js";
import { useContainerSize as W } from "../../utils/useContainerSize.js";
import $ from "../../../../node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js";
function k(e) {
  return typeof e == "number" ? e : e.value;
}
function D(e, o) {
  return e.color ? T(e.color) : B(o);
}
function E(e) {
  switch (e) {
    case "smooth":
      return { smooth: !0, step: !1 };
    case "step":
      return { smooth: !1, step: "end" };
    default:
      return { smooth: !1, step: !1 };
  }
}
function G(e) {
  return {
    color: new $(0, 0, 0, 1, [
      { offset: 0, color: `${e}59` },
      { offset: 1, color: `${e}00` }
    ])
  };
}
function H(e, o, t, r, s, a, l) {
  const n = D(e, o), i = e.lineType ?? t, u = e.showArea ?? r, { smooth: c, step: f } = E(i);
  return {
    name: e.name,
    type: "line",
    data: e.data.map(k),
    smooth: c,
    step: f,
    itemStyle: {
      color: n
    },
    lineStyle: {
      width: 2,
      type: e.dashed ? "dashed" : "solid"
    },
    areaStyle: u ? G(n) : void 0,
    showSymbol: s,
    symbol: "circle",
    symbolSize: 6,
    label: {
      show: a,
      position: "top",
      color: l,
      fontWeight: "bold"
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: "transparent"
      }
    }
  };
}
function X(e) {
  return {
    showLegend: e !== "sm",
    showCategoryAxis: e === "lg",
    showValueAxis: e !== "sm"
  };
}
function Q(e, {
  categories: o,
  series: t,
  lineType: r = "linear",
  showArea: s = !0,
  showDots: a = !1,
  showLegend: l = !0,
  showGrid: n = !0,
  showLabels: i = !1,
  valueFormatter: u,
  categoryFormatter: c,
  echartsOptions: f
}, p) {
  const m = O(e), { width: d, height: y } = W(e);
  return V(() => {
    const w = t.length > 1, g = w ? !1 : s, S = X(p), C = S.showLegend && l, { showCategoryAxis: b, showValueAxis: v } = S, A = t.map(
      (h, L) => H(
        // When forced off, also strip the per-series override so it doesn't
        // accidentally re-enable area on a single series in `buildSeriesEntry`.
        w ? { ...h, showArea: !1 } : h,
        L,
        r,
        g,
        a,
        i,
        m.colors.foregroundSecondary
      )
    ), x = t.map((h) => h.name);
    return M({
      categories: o,
      theme: m,
      series: A,
      legendData: x,
      isVertical: !0,
      showGrid: n,
      showLegend: C,
      showCategoryAxis: b,
      showValueAxis: v,
      valueFormatter: u,
      categoryFormatter: c,
      echartsOptions: f,
      containerWidth: d,
      containerHeight: y,
      boundaryGap: !1
    });
  }, [
    o,
    t,
    r,
    s,
    a,
    l,
    n,
    i,
    u,
    c,
    f,
    m,
    d,
    y,
    p
  ]);
}
export {
  Q as useLineChartOptions
};
