import "../../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js";
import { useMemo as I } from "react";
import { resolveChartColorToken as M, paletteColor as j } from "../../utils/colors.js";
import { buildBaseChartOptions as E } from "../../utils/options.js";
import { useChartTheme as O } from "../../utils/useChartTheme.js";
import { useContainerSize as X } from "../../utils/useContainerSize.js";
import L from "../../../../node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js";
function k(t) {
  return typeof t == "number" ? t : t.value;
}
function N(t) {
  return typeof t == "number" ? void 0 : t.target;
}
function B(t) {
  if (!(typeof t == "number" || t.color === void 0))
    return M(t.color);
}
function q(t, r) {
  return t.color ? M(t.color) : j(r);
}
function J(t) {
  return t.data.some(
    (r) => typeof r != "number" && r.target !== void 0
  );
}
function K(t, r, a, y, u, S, w) {
  const l = q(t, r), s = J(t), g = u ? s ? `stacked-${r}` : "stacked" : s ? `stack-${r}` : void 0, b = t.data.some(
    (n) => B(n) !== void 0
  ) ? t.data.map((n) => {
    const i = B(n);
    return i === void 0 ? k(n) : {
      value: k(n),
      itemStyle: { color: i }
    };
  }) : t.data.map(k), c = a ? [4, 4, 0, 0] : [0, 4, 4, 0], $ = u && !S ? 0 : c, m = {
    name: t.name,
    type: "bar",
    data: b,
    stack: g,
    itemStyle: {
      color: l,
      borderRadius: $
    },
    label: {
      show: y,
      position: a ? "top" : "right",
      color: w,
      fontWeight: "bold",
      overflow: "truncate",
      ellipsis: "..."
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowColor: "transparent"
      }
    }
  };
  if (!s)
    return [m];
  const h = t.data.map((n) => {
    const i = k(n), f = N(n);
    if (f === void 0 || f <= i)
      return 0;
    const p = B(n);
    return p !== void 0 ? {
      value: f - i,
      itemStyle: {
        color: new L(
          ...a ? [0, 0, 0, 1] : [1, 0, 0, 0],
          [
            { offset: 0, color: `${p}33` },
            { offset: 1, color: `${p}00` }
          ]
        ),
        borderRadius: c
      }
    } : f - i;
  }), A = {
    name: `${t.name} (target)`,
    type: "bar",
    data: h,
    stack: g,
    // Hide from legend and tooltip
    legendHoverLink: !1,
    tooltip: {
      show: !1
    },
    itemStyle: {
      color: new L(
        ...a ? [0, 0, 0, 1] : [1, 0, 0, 0],
        [
          // offset 0 = far end from the solid bar → more opaque (darker)
          { offset: 0, color: `${l}33` },
          // offset 1 = near the solid bar → transparent
          { offset: 1, color: `${l}00` }
        ]
      ),
      // Only round the far end (away from the solid bar)
      borderRadius: c
    },
    label: {
      show: !1
    },
    emphasis: {
      disabled: !0
    }
  };
  return [m, A];
}
function Q(t) {
  return {
    showLegend: t !== "sm",
    showCategoryAxis: t === "lg",
    showValueAxis: t !== "sm"
  };
}
function rt(t, {
  categories: r,
  series: a,
  orientation: y = "vertical",
  stacked: u = !1,
  showLegend: S = !0,
  showGrid: w = !0,
  showLabels: l = !1,
  valueFormatter: s,
  categoryFormatter: g,
  echartsOptions: C
}, b) {
  const c = O(t), { width: $, height: m } = X(t);
  return I(() => {
    const h = y === "vertical", A = Q(b), n = A.showLegend && S, { showCategoryAxis: i, showValueAxis: f } = A, p = a.flatMap(
      (e, o) => K(
        e,
        o,
        h,
        l,
        u,
        o === a.length - 1,
        c.colors.foregroundSecondary
      )
    ), W = a.map((e) => e.name), T = /* @__PURE__ */ new Map();
    for (const e of a) {
      const o = e.data.map((v) => N(v));
      o.some((v) => v !== void 0) && T.set(e.name, o);
    }
    const H = T.size > 0 ? (e) => {
      if (!Array.isArray(e)) return "";
      const o = e.filter(
        (d) => !String(d.seriesName ?? "").endsWith(" (target)")
      );
      if (o.length === 0) return "";
      const v = `<div style="margin-bottom: 4px; font-weight: 500">${String(o[0].axisValueLabel ?? o[0].name ?? "")}</div>`, P = o.map(
        (d) => {
          const R = Number(d.value), V = s ? s(R) : String(R), x = T.get(String(d.seriesName ?? ""))?.[d.dataIndex ?? 0], G = x !== void 0 ? ` <span style="opacity: 0.6">/ ${s ? s(x) : String(x)}</span>` : "";
          return `<div>${String(d.marker ?? "")} ${String(d.seriesName ?? "")} <strong>${V}</strong>${G}</div>`;
        }
      ).join("");
      return `${v}${P}`;
    } : void 0, D = E({
      categories: r,
      theme: c,
      series: p,
      legendData: W,
      isVertical: h,
      showGrid: w,
      showLegend: n,
      // For vertical bars the category axis is the X axis, for horizontal
      // bars it's the Y axis. `buildAxes` already handles that mapping.
      showCategoryAxis: i,
      showValueAxis: f,
      valueFormatter: s,
      categoryFormatter: g,
      tooltipFilterSeries: (e) => e.endsWith(" (target)"),
      tooltipFormatter: H,
      echartsOptions: C,
      containerWidth: $,
      containerHeight: m
    });
    if (!h && l && C?.grid?.right === void 0) {
      const o = D.grid;
      o && (o.right = 60);
    }
    return D;
  }, [
    r,
    a,
    y,
    u,
    S,
    w,
    l,
    s,
    g,
    C,
    c,
    $,
    m,
    b
  ]);
}
export {
  rt as useBarChartOptions
};
