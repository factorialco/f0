import { useMemo as U } from "react";
import { resolveChartColorToken as X, resolveDataPointColor as _ } from "../../utils/colors.js";
import { formatPercent as P } from "../../utils/formatters.js";
import { buildItemTooltip as q, buildLegend as J, DEFAULT_EMPHASIS as K, buildGrid as Q } from "../../utils/options.js";
import { useChartTheme as Y } from "../../utils/useChartTheme.js";
import { useContainerSize as Z } from "../../utils/useContainerSize.js";
function lt(g, {
  series: i,
  sort: l = "descending",
  gap: h = 0,
  orient: m = "horizontal",
  showLegend: s = !1,
  showLabels: u = !0,
  showConversion: b = !1,
  colorScale: y = !0,
  valueFormatter: f,
  echartsOptions: v
}) {
  const n = Y(g), { width: D } = Z(g);
  return U(() => {
    const e = i.data ?? [], I = i.color ? X(i.color) : void 0, S = (l === "ascending" ? [...e].sort((t, a) => t.value - a.value) : l === "descending" ? [...e].sort((t, a) => a.value - t.value) : e)[0]?.value ?? 0, M = n.palette[0] ?? "#0aa69b", w = n.colors.borderSecondary, A = Math.max(...e.map((t) => t.value), 1), E = e.map((t, a) => ({
      value: t.value,
      name: t.name,
      itemStyle: {
        color: _(
          t.color,
          I,
          a,
          y ? { ratio: t.value / A, lightColor: w, baseColor: M } : void 0
        ),
        borderWidth: 0,
        borderRadius: 4
      }
    })), H = e.map((t) => t.name), x = m === "horizontal", O = x ? 0 : u ? 160 : 0, V = 0, W = x && u ? 90 : 0, k = s ? 28 : 0, B = {
      name: i.name,
      type: "funnel",
      sort: l,
      gap: h,
      orient: m,
      data: E,
      left: O,
      right: V,
      top: W,
      bottom: k,
      width: "auto",
      height: "auto",
      minSize: "5%",
      maxSize: "100%",
      funnelAlign: "center",
      label: { show: !1 },
      labelLine: { show: !1 },
      itemStyle: {
        borderWidth: 0,
        borderRadius: 4
      },
      emphasis: {
        label: { show: !1 },
        itemStyle: {
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowColor: "transparent",
          opacity: 0.85
        }
      }
    }, { colors: C } = n, R = () => {
      const t = l === "none" ? e : l === "ascending" ? [...e].sort((r, o) => r.value - o.value) : [...e].sort((r, o) => o.value - r.value), a = /* @__PURE__ */ new Map();
      return t.forEach((r, o) => {
        a.set(r.name, o);
      }), (r) => {
        const o = r, d = Number(o.value ?? 0), j = f ? f(d) : String(d), z = String(o.name ?? ""), F = a.get(z);
        let p = "";
        if (b && S > 0 && F !== void 0) {
          const G = P(d, S);
          p = `<div style="margin-top: 4px; color: ${C.foregroundTertiary}; font-size: 11px">Overall: ${G}</div>`;
          const T = F - 1;
          if (T >= 0) {
            const c = t[T];
            if (c && c.value > 0) {
              const N = P(d, c.value);
              p += `<div style="color: ${C.foregroundTertiary}; font-size: 11px">From ${c.name}: ${N}</div>`;
            }
          }
        }
        return `<div>${String(o.marker ?? "")} <strong>${z}</strong></div><div style="margin-top: 2px">${j}</div>${p}`;
      };
    }, $ = {
      animation: !1,
      color: n.palette,
      textStyle: {
        fontFamily: n.textStyle.fontFamily
      },
      series: [B],
      legend: J({
        show: s,
        data: H,
        theme: n
      }),
      grid: Q({ showLegend: s }),
      tooltip: q({
        theme: n,
        formatter: R()
      }),
      emphasis: K
    };
    return v ? Object.assign({}, $, v) : $;
  }, [
    i,
    l,
    h,
    m,
    s,
    u,
    b,
    y,
    f,
    v,
    n,
    D
  ]);
}
export {
  lt as useFunnelChartOptions
};
