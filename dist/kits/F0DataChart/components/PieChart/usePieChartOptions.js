import { useMemo as T } from "react";
import { resolveChartColorToken as W, resolveDataPointColor as k } from "../../utils/colors.js";
import { buildItemTooltip as F, buildLegend as M, DEFAULT_EMPHASIS as A } from "../../utils/options.js";
import { useChartTheme as E } from "../../utils/useChartTheme.js";
import { useContainerSize as I } from "../../utils/useContainerSize.js";
function N(r) {
  return {
    showLegend: r !== "sm",
    showOutsideLabels: r === "lg"
  };
}
function U(r, {
  series: l,
  innerRadius: m = 0,
  showLegend: u = !0,
  showLabels: f = !0,
  showPercentage: p = !1,
  valueFormatter: a,
  echartsOptions: d
}, s) {
  const e = E(r), { width: y } = I(r);
  return T(() => {
    const h = l.data ?? [], w = l.color ? W(l.color) : void 0, g = N(s), S = g.showLegend && u, n = g.showOutsideLabels && f, $ = h.map((t, o) => ({
      value: t.value,
      name: t.name,
      itemStyle: {
        color: k(t.color, w, o),
        borderWidth: 2,
        borderColor: e.colors.background
      }
    })), L = h.map((t) => t.name), x = () => n ? {
      show: !0,
      position: "outside",
      alignTo: "edge",
      edgeDistance: 8,
      color: e.colors.foreground,
      fontSize: e.textStyle.fontSize,
      fontWeight: e.textStyle.fontWeight,
      fontFamily: e.textStyle.fontFamily,
      overflow: "truncate",
      formatter(t) {
        const o = String(t.name ?? ""), i = Number(t.value ?? 0), c = a ? a(i) : String(i);
        return p ? `${o}: ${c} (${(t.percent ?? 0).toFixed(1)}%)` : `${o}: ${c}`;
      }
    } : { show: !1 }, C = s === "sm" ? ["50%", "50%"] : n ? ["50%", "45%"] : ["50%", S ? "45%" : "50%"], v = s === "sm" ? 85 : n ? 50 : 75, D = Math.min(m, v - 10), O = {
      name: l.name,
      type: "pie",
      radius: [`${D}%`, `${v}%`],
      center: C,
      data: $,
      avoidLabelOverlap: !0,
      label: x(),
      labelLine: {
        show: n,
        length: 8,
        length2: 8,
        lineStyle: {
          color: e.colors.borderSecondary
        }
      },
      labelLayout: n ? { hideOverlap: !0 } : void 0,
      emphasis: {
        label: {
          show: n
        },
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "transparent",
          opacity: 0.85
        }
      }
    }, b = {
      animation: !1,
      color: e.palette,
      textStyle: {
        fontFamily: e.textStyle.fontFamily
      },
      series: [O],
      legend: M({
        show: S,
        data: L,
        theme: e
      }),
      tooltip: F({
        theme: e,
        formatter: (t) => {
          const o = t, i = Number(o.value ?? 0), c = a ? a(i) : String(i), P = (o.percent ?? 0).toFixed(1);
          return `<div>${String(o.marker ?? "")} <strong>${String(o.name ?? "")}</strong></div><div style="margin-top: 2px">${c} (${P}%)</div>`;
        }
      }),
      emphasis: A
    };
    return d ? Object.assign({}, b, d) : b;
  }, [
    l,
    m,
    u,
    f,
    p,
    a,
    d,
    e,
    y,
    s
  ]);
}
export {
  U as usePieChartOptions
};
