import { useMemo as $ } from "react";
import { resolveChartColorToken as z, paletteColor as D } from "../../utils/colors.js";
import { buildItemTooltip as F, buildLegend as T, DEFAULT_EMPHASIS as M } from "../../utils/options.js";
import { useChartTheme as j } from "../../utils/useChartTheme.js";
import { useContainerSize as k } from "../../utils/useContainerSize.js";
function A(r) {
  return r === "sm" ? { showLegend: !1, showIndicatorNames: !1, nameWidth: 0 } : r === "md" ? { showLegend: !0, showIndicatorNames: !0, nameWidth: 56 } : { showLegend: !0, showIndicatorNames: !0, nameWidth: 96 };
}
function R(r, {
  indicators: s,
  series: l,
  showArea: c = !0,
  showLegend: f = !0,
  showLabels: m = !1,
  valueFormatter: n,
  echartsOptions: d
}, p) {
  const t = j(r), h = k(r);
  return $(() => {
    const y = A(p), g = y.showLegend && f, { showIndicatorNames: w, nameWidth: x } = y, v = s.map((e, a) => {
      const o = e.max ?? Math.max(...l.map((i) => i.data[a] ?? 0));
      return {
        name: e.name,
        max: o > 0 ? o : 100
      };
    }), b = l.map((e, a) => {
      const o = e.color ? z(e.color) : D(a);
      return {
        name: e.name,
        value: e.data,
        itemStyle: { color: o },
        lineStyle: { color: o, width: 2 },
        areaStyle: c ? { color: o, opacity: 0.15 } : void 0,
        symbol: "circle",
        symbolSize: 6,
        label: {
          show: m,
          color: t.colors.foregroundSecondary,
          fontSize: t.textStyle.fontSize,
          fontFamily: t.textStyle.fontFamily,
          formatter: n ? (i) => n(Number(i.value ?? 0)) : void 0
        }
      };
    }), C = l.map((e) => e.name), u = {
      animation: !1,
      color: t.palette,
      textStyle: {
        fontFamily: t.textStyle.fontFamily
      },
      radar: {
        indicator: v,
        shape: "polygon",
        splitNumber: 4,
        axisName: w ? {
          color: t.colors.foregroundSecondary,
          fontSize: t.textStyle.fontSize,
          fontWeight: t.textStyle.fontWeight,
          fontFamily: t.textStyle.fontFamily,
          overflow: "truncate",
          width: x,
          ellipsis: "..."
        } : { show: !1 },
        splitArea: {
          show: !1
        },
        splitLine: {
          lineStyle: {
            color: t.colors.borderSecondary
          }
        },
        axisLine: {
          lineStyle: {
            color: t.colors.borderSecondary
          }
        }
      },
      series: [
        {
          type: "radar",
          data: b,
          emphasis: {
            label: {
              show: m
            },
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: "transparent",
              opacity: 0.85
            }
          }
        }
      ],
      legend: T({
        show: g,
        data: C,
        theme: t
      }),
      tooltip: F({
        theme: t,
        formatter: (e) => {
          const a = e, o = a.value ?? [], i = `<div style="margin-bottom: 4px">${String(a.marker ?? "")} <strong>${String(a.name ?? "")}</strong></div>`, I = s.map((N, L) => {
            const S = o[L] ?? 0, W = n ? n(S) : String(S);
            return `<div>${N.name}: <strong>${W}</strong></div>`;
          }).join("");
          return `${i}${I}`;
        }
      }),
      emphasis: M
    };
    return d ? Object.assign({}, u, d) : u;
  }, [
    s,
    l,
    c,
    f,
    m,
    n,
    d,
    t,
    h,
    p
  ]);
}
export {
  R as useRadarChartOptions
};
