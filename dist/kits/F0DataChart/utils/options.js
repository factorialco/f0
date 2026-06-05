function v(t, o) {
  if (!o || t <= 1 || o / t >= 60) return;
  const i = Math.max(1, Math.floor(o / 60));
  return Math.max(0, Math.ceil(t / i) - 1);
}
function A(t, o, r) {
  if (!o || o <= 0 || t <= 1) return;
  const i = (d) => {
    if (d <= 1) return Math.floor(o);
    if (r) {
      const e = o / (d - 1);
      return Math.floor(e * 0.65);
    }
    return Math.floor(o / d) - 8;
  }, n = i(t);
  if (n >= 24)
    return {
      interval: 0,
      labelWidth: Math.max(n, 24)
    };
  const a = Math.max(2, Math.floor(o / 32)), l = Math.max(0, Math.ceil(t / a) - 1), s = Math.max(1, Math.ceil(t / (l + 1))), c = i(s);
  return {
    interval: l,
    labelWidth: Math.max(24, c)
  };
}
function _({
  data: t,
  theme: o,
  formatter: r,
  axisLength: i,
  boundaryGap: n,
  maxLabelWidth: u,
  show: a = !0,
  smartLayout: l = !1,
  edgeAligned: s = !1
}) {
  const c = l && a ? A(t.length, i, s) : void 0, d = c?.interval ?? v(t.length, i), e = c?.labelWidth ?? u;
  return {
    type: "category",
    data: t,
    ...n !== void 0 ? { boundaryGap: n } : {},
    axisLine: {
      show: a,
      lineStyle: {
        color: o.colors.borderSecondary
      }
    },
    axisTick: {
      show: !1
    },
    axisLabel: {
      show: a,
      fontSize: o.textStyle.fontSize,
      fontWeight: o.textStyle.fontWeight,
      color: o.colors.foregroundTertiary,
      hideOverlap: !0,
      // Edge-aligned charts must always render the first and last labels —
      // skipping either of them would expose an unlabelled chart edge.
      ...s ? { showMinLabel: !0, showMaxLabel: !0 } : {},
      // Anchor first/last labels to the axis edges so they cannot overflow
      // the chart container. Centered interior labels keep their default
      // alignment.
      ...s ? { alignMinLabel: "left", alignMaxLabel: "right" } : {},
      ...d !== void 0 ? { interval: d } : {},
      ...r ? {
        formatter: (f) => r(String(f))
      } : {},
      ...e !== void 0 ? {
        width: e,
        overflow: "truncate",
        ellipsis: "..."
      } : {}
    },
    ...a && e !== void 0 ? { triggerEvent: !0 } : {}
  };
}
function M({
  theme: t,
  showGrid: o,
  formatter: r,
  maxLabelWidth: i,
  show: n = !0
}) {
  return {
    type: "value",
    axisLine: {
      show: !1
    },
    axisTick: {
      show: !1
    },
    axisLabel: {
      show: n,
      fontSize: t.textStyle.fontSize,
      fontWeight: t.textStyle.fontWeight,
      color: t.colors.foregroundTertiary,
      hideOverlap: !0,
      ...r ? {
        formatter: (u) => r(Number(u))
      } : {},
      ...i !== void 0 ? {
        width: i,
        overflow: "truncate",
        ellipsis: "..."
      } : {}
    },
    ...n && i !== void 0 ? { triggerEvent: !0 } : {},
    splitLine: {
      show: o,
      lineStyle: {
        type: "solid",
        color: t.colors.borderSecondary
      }
    }
  };
}
function T({
  show: t,
  data: o,
  theme: r
}) {
  if (t)
    return {
      type: "scroll",
      show: !0,
      data: o,
      bottom: 0,
      left: "center",
      icon: "circle",
      itemWidth: 10,
      itemHeight: 10,
      selectedMode: !0,
      textStyle: {
        fontWeight: r.textStyle.fontWeight,
        color: r.colors.foregroundSecondary
      },
      pageIconColor: r.colors.foregroundSecondary,
      pageIconInactiveColor: r.colors.borderSecondary,
      pageTextStyle: {
        color: r.colors.foregroundTertiary
      }
    };
}
function E({ showLegend: t }) {
  return {
    left: 4,
    right: 4,
    top: 8,
    // Legend height (~20px) + 12px breathing room between chart and legend
    bottom: t ? 32 : 4,
    containLabel: !0
  };
}
const I = {
  label: {
    show: !1
  },
  itemStyle: {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowColor: "transparent"
  }
};
function W({
  theme: t,
  filterSeries: o,
  valueFormatter: r,
  customFormatter: i
}) {
  const { tooltip: n, axisPointer: u, colors: a } = t;
  return {
    trigger: "axis",
    confine: !0,
    padding: n.padding,
    borderWidth: n.borderWidth,
    transitionDuration: n.transitionDuration,
    textStyle: {
      color: a.foreground,
      fontSize: 14
    },
    // Smart position: flip tooltip to the other side of the cursor at the
    // chart midpoint so it never clips outside the container
    position(l, s, c, d, e) {
      const f = e.contentSize[0];
      return [l[0] < e.viewSize[0] / 2 ? l[0] + 10 : l[0] - f - 10, "20%"];
    },
    axisPointer: {
      type: "line",
      lineStyle: {
        color: u.color,
        type: u.type
      }
    },
    extraCssText: [
      `box-shadow: ${n.boxShadow}`,
      `border-radius: ${n.borderRadius}px`,
      `border: 1px solid ${a.borderSecondary}`,
      "backdrop-filter: blur(30px)",
      "-webkit-backdrop-filter: blur(30px)",
      `background: ${n.background}`
    ].join("; "),
    formatter: i ?? ((l) => {
      if (!Array.isArray(l)) return "";
      const s = o ? l.filter(
        (e) => !o(String(e.seriesName ?? ""))
      ) : l;
      if (s.length === 0) return "";
      const c = `<div style="margin-bottom: 4px; font-weight: 500">${String(s[0].axisValueLabel ?? s[0].name ?? "")}</div>`, d = s.map(
        (e) => {
          const f = r ? r(Number(e.value)) : String(e.value);
          return `<div>${String(e.marker ?? "")} ${String(e.seriesName ?? "")} <strong>${f}</strong></div>`;
        }
      ).join("");
      return `${c}${d}`;
    })
  };
}
function w({
  theme: t,
  formatter: o
}) {
  const { tooltip: r, colors: i } = t;
  return {
    trigger: "item",
    padding: r.padding,
    borderWidth: r.borderWidth,
    transitionDuration: r.transitionDuration,
    textStyle: {
      color: i.foreground,
      fontSize: t.textStyle.fontSize
    },
    extraCssText: [
      `box-shadow: ${r.boxShadow}`,
      `border-radius: ${r.borderRadius}px`,
      `border: 1px solid ${i.borderSecondary}`,
      "backdrop-filter: blur(30px)",
      "-webkit-backdrop-filter: blur(30px)",
      `background: ${r.background}`
    ].join("; "),
    formatter: o
  };
}
function m({
  isVertical: t,
  categories: o,
  theme: r,
  showGrid: i,
  valueFormatter: n,
  categoryFormatter: u,
  containerWidth: a,
  containerHeight: l,
  boundaryGap: s,
  showCategoryAxis: c = !0,
  showValueAxis: d = !0,
  categoryMaxLabelWidth: e
}) {
  const f = Math.min(80, (a ?? 600) * 0.2), b = a ? Math.max(0, a - 56) : void 0, x = _({
    data: o,
    theme: r,
    formatter: u,
    axisLength: t ? b : l,
    boundaryGap: s,
    show: c,
    // Vertical charts get the smart layout (truncate-then-skip). Horizontal
    // charts (category on Y axis) keep their fixed cap.
    smartLayout: t,
    edgeAligned: t && s === !1,
    ...e !== void 0 ? { maxLabelWidth: e } : t ? {} : { maxLabelWidth: f }
  }), S = M({
    theme: r,
    showGrid: i,
    formatter: n,
    show: d,
    ...t ? { maxLabelWidth: f } : {}
  });
  return {
    xAxis: t ? { ...x } : { ...S },
    yAxis: t ? { ...S } : { ...x }
  };
}
function D({
  categories: t,
  theme: o,
  series: r,
  legendData: i,
  isVertical: n,
  showGrid: u,
  showLegend: a,
  valueFormatter: l,
  categoryFormatter: s,
  tooltipFilterSeries: c,
  tooltipFormatter: d,
  echartsOptions: e,
  containerWidth: f,
  containerHeight: g,
  boundaryGap: b,
  showCategoryAxis: x = !0,
  showValueAxis: S = !0,
  categoryMaxLabelWidth: y
}) {
  const { xAxis: h, yAxis: L } = m({
    isVertical: n,
    categories: t,
    theme: o,
    showGrid: u,
    valueFormatter: l,
    categoryFormatter: s,
    containerWidth: f,
    containerHeight: g,
    boundaryGap: b,
    showCategoryAxis: x,
    showValueAxis: S,
    categoryMaxLabelWidth: y
  }), p = {
    animation: !1,
    color: o.palette,
    textStyle: {
      fontFamily: o.textStyle.fontFamily
    },
    xAxis: h,
    yAxis: L,
    series: r,
    labelLayout: { hideOverlap: !0 },
    legend: T({
      show: a,
      data: i,
      theme: o
    }),
    grid: E({ showLegend: a }),
    tooltip: W({
      theme: o,
      filterSeries: c,
      valueFormatter: l,
      customFormatter: d
    }),
    emphasis: I
  };
  return e ? Object.assign({}, p, e) : p;
}
export {
  I as DEFAULT_EMPHASIS,
  m as buildAxes,
  D as buildBaseChartOptions,
  _ as buildCategoryAxis,
  E as buildGrid,
  w as buildItemTooltip,
  T as buildLegend,
  W as buildTooltip,
  M as buildValueAxis,
  A as computeCategoryAxisLayout,
  v as computeLabelInterval
};
