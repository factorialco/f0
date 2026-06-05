import { useMemo as E } from "react";
import { paletteColor as N, lerpColor as U } from "../../utils/colors.js";
import { buildCategoryAxis as v, buildItemTooltip as G } from "../../utils/options.js";
import { useChartTheme as J } from "../../utils/useChartTheme.js";
import { useContainerSize as K } from "../../utils/useContainerSize.js";
function Q(o) {
  return {
    showXAxis: o !== "sm",
    showYAxis: o === "lg"
  };
}
const V = 6;
function Z(o, e) {
  return [0.08, 0.28, 0.5, 0.75, 1].map(
    (n) => U(e, o, n)
  );
}
function nt(o, {
  xCategories: e,
  yCategories: n,
  data: c,
  min: d,
  max: m,
  showLabels: f = !1,
  showVisualMap: u = !1,
  valueFormatter: l,
  echartsOptions: h
}, x) {
  const t = J(o), { width: g, height: p } = K(o);
  return E(() => {
    const i = c.map((s) => s[2]), L = i.length > 0 ? Math.min(...i) : 0, W = i.length > 0 ? Math.max(...i) : 100, z = d ?? L, C = m ?? W, I = t.palette[0] ?? N(0), R = t.colors.borderSecondary, X = Z(I, R), { colors: r } = t, { showXAxis: b, showYAxis: S } = Q(x), y = Math.max(0, g - (S ? 32 : 8)), w = Math.max(0, p - (b ? 28 : 8)), $ = e.length > 0 ? y / e.length : 0, H = n.length > 0 ? w / n.length : 0, T = Math.max(0, Math.min($, H)), k = Math.max(
      2,
      Math.min(V, Math.floor(T / 2))
    ), B = v({
      data: e,
      theme: t,
      axisLength: y || void 0,
      show: b,
      smartLayout: !0,
      edgeAligned: !1
    }), D = v({
      data: n,
      theme: t,
      axisLength: w || void 0,
      show: S,
      smartLayout: !0,
      edgeAligned: !1
    }), A = {
      animation: !1,
      textStyle: {
        fontFamily: t.textStyle.fontFamily
      },
      xAxis: {
        ...B,
        // Heatmap axes never show a baseline — only the labels
        axisLine: { show: !1 }
      },
      yAxis: {
        ...D,
        axisLine: { show: !1 },
        // First yCategory at the bottom, last at the top — matches Figma
        // (rows numbered 01..09 from bottom to top).
        inverse: !1
      },
      visualMap: {
        min: z,
        max: C,
        calculable: !1,
        show: u,
        orient: "horizontal",
        bottom: 10,
        left: "center",
        inRange: {
          color: X
        },
        textStyle: {
          color: r.foregroundTertiary,
          fontSize: t.textStyle.fontSize
        }
      },
      grid: {
        left: 4,
        right: 4,
        top: 8,
        bottom: 4,
        containLabel: !0
      },
      series: [
        {
          type: "heatmap",
          data: c,
          label: {
            show: f,
            color: r.foreground,
            fontSize: t.textStyle.fontSize,
            fontWeight: t.textStyle.fontWeight,
            formatter: l ? (s) => {
              const a = Number(
                s.value?.[2] ?? 0
              );
              return l(a);
            } : void 0
          },
          itemStyle: {
            borderRadius: k,
            borderWidth: 4,
            borderColor: r.background
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: "transparent",
              borderColor: r.foreground,
              borderWidth: 1,
              opacity: 1
            }
          }
        }
      ],
      tooltip: G({
        theme: t,
        formatter: (s) => {
          const a = s, [O, Y, M] = a.value ?? [0, 0, 0], _ = e[O] ?? "", j = n[Y] ?? "", q = l ? l(M) : String(M);
          return `<div style="margin-bottom: 4px; font-weight: 500">${j} · ${_}</div><div>${String(a.marker ?? "")} <strong>${q}</strong></div>`;
        }
      })
    };
    return h ? Object.assign({}, A, h) : A;
  }, [
    e,
    n,
    c,
    d,
    m,
    f,
    u,
    l,
    h,
    t,
    g,
    p,
    x
  ]);
}
export {
  nt as useHeatmapChartOptions
};
