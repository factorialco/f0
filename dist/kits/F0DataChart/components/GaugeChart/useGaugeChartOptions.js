import { useMemo as F } from "react";
import { resolveChartColorToken as b, paletteColor as x } from "../../utils/colors.js";
import { buildItemTooltip as z } from "../../utils/options.js";
import { useChartTheme as W } from "../../utils/useChartTheme.js";
function N(i) {
  return i === "sm" ? {
    showName: !1,
    detailFontSize: 18,
    titleFontSize: 11,
    ringWidth: 8
  } : i === "md" ? {
    showName: !0,
    detailFontSize: 24,
    titleFontSize: 12,
    ringWidth: 12
  } : {
    showName: !0,
    detailFontSize: 32,
    titleFontSize: 12,
    ringWidth: 18
  };
}
function j(i, {
  value: m,
  min: d = 0,
  max: h = 100,
  name: n,
  color: r,
  showValue: s = !0,
  valueFormatter: e,
  echartsOptions: l
}, S) {
  const t = W(i);
  return F(() => {
    const p = r ? b(r) : x(0), { colors: u } = t, o = N(S), y = o.showName && !!n, w = {
      type: "gauge",
      min: d,
      max: h,
      data: [{ value: m, name: n ?? "" }],
      progress: {
        show: !0,
        width: o.ringWidth,
        roundCap: !0,
        itemStyle: {
          color: p
        }
      },
      pointer: {
        show: !1
      },
      axisLine: {
        roundCap: !0,
        lineStyle: {
          width: o.ringWidth,
          color: [[1, t.colors.borderSecondary]]
        }
      },
      axisTick: {
        show: !1
      },
      splitLine: {
        show: !1
      },
      axisLabel: {
        show: !1
      },
      title: {
        show: y,
        offsetCenter: [0, s ? "25%" : "0%"],
        color: u.foregroundSecondary,
        fontSize: o.titleFontSize,
        fontWeight: t.textStyle.fontWeight,
        fontFamily: t.textStyle.fontFamily
      },
      detail: {
        show: s,
        offsetCenter: [0, "0%"],
        color: u.foreground,
        fontSize: o.detailFontSize,
        fontWeight: 700,
        fontFamily: t.textStyle.fontFamily,
        formatter: e ? (a) => e(a) : void 0
      }
    }, g = {
      animation: !1,
      textStyle: {
        fontFamily: t.textStyle.fontFamily
      },
      series: [w],
      tooltip: z({
        theme: t,
        formatter: (a) => {
          const f = a, c = Number(f.value ?? 0), C = e ? e(c) : String(c);
          return `${f.name ? `<strong>${String(f.name)}</strong><br/>` : ""}${C}`;
        }
      })
    };
    return l ? Object.assign({}, g, l) : g;
  }, [
    m,
    d,
    h,
    n,
    r,
    s,
    e,
    l,
    t,
    S
  ]);
}
export {
  j as useGaugeChartOptions
};
