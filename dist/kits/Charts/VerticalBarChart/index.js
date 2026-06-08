import { jsx as e, jsxs as C, Fragment as T } from "react/jsx-runtime";
import { l as A } from "../../../_virtual/lodash.js";
import { BarChart as L, CartesianGrid as j, XAxis as D, YAxis as K, Bar as N, LabelList as z } from "recharts";
import { ChartContainer as E, ChartTooltip as M, ChartTooltipContent as V } from "../../../ui/chart.js";
import { prepareData as W } from "../utils/bar.js";
import { getColor as w, getCategoricalColor as F } from "../utils/colors.js";
import { measureTextWidth as b, xAxisProps as G, yAxisProps as O, chartTooltipProps as S, cartesianGridProps as v } from "../utils/elements.js";
import { fixedForwardRef as X } from "../utils/forwardRef.js";
const Y = (i) => {
  const s = A.cloneDeep(i);
  let o = "", t = 0;
  return s.forEach((a) => {
    delete a.x, Object.entries(a).forEach(
      ([n, c]) => {
        t < c && (t = c, o = n);
      }
    );
  }), o;
}, _ = ({
  dataConfig: i,
  data: s,
  xAxis: o = { hide: !0 },
  yAxis: t,
  label: a = !1,
  aspect: n,
  hideTooltip: c = !1,
  hideGrid: p = !1,
  showRatio: m = !1,
  valueFormatter: d
}, x) => {
  const f = Object.keys(i), l = W(s), u = Math.max(
    ...l.map((r) => b(`${r.x}`))
  ), g = f.reduce(
    (r, h) => (r[h] = s.reduce(
      (B, P) => B + P.values[h],
      0
    ), r),
    {}
  ), y = {
    ...G(o),
    type: "number",
    dataKey: Y(l)
  }, $ = {
    ...O(t),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ e(E, { config: i, ref: x, aspect: n, children: /* @__PURE__ */ C(
    L,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: t && !t.hide ? 8 : 12,
        right: a || m ? 100 : 0
      },
      children: [
        !c && /* @__PURE__ */ e(
          M,
          {
            ...S(!0),
            content: /* @__PURE__ */ e(V, { yAxisFormatter: t?.tickFormatter })
          }
        ),
        !p && /* @__PURE__ */ e(
          j,
          {
            ...v(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ e(D, { ...y, hide: o?.hide }),
        /* @__PURE__ */ e(
          K,
          {
            ...$,
            hide: t?.hide,
            width: t?.width ?? u + 20
          }
        ),
        f.map((r, h) => /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(
          N,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: r,
            fill: i[r].color ? w(i[r].color) : F(h),
            radius: 4,
            maxBarSize: 24,
            children: (a || m) && /* @__PURE__ */ e(
              z,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12,
                formatter: d,
                content: m ? /* @__PURE__ */ e(
                  q,
                  {
                    valueFormatter: d,
                    total: g[r],
                    showLabel: a
                  }
                ) : void 0
              },
              `label-{${r}}`
            )
          },
          `bar-${r}`
        ) }))
      ]
    }
  ) });
}, tt = X(_), q = ({
  viewBox: i,
  offset: s = 0,
  value: o,
  valueFormatter: t,
  total: a,
  showLabel: n
}) => {
  const { x: c = 0, y: p = 0, width: m = 0, height: d = 0 } = i, x = c + m + s, f = p + d / 2, l = t ? t(o) : o, u = b(`${l}`), g = a > 0 ? Math.round(Number(o) / a * 100) : 0;
  return /* @__PURE__ */ C("g", { transform: `translate(${x},${f + 4})`, children: [
    n && /* @__PURE__ */ e(
      "text",
      {
        x: 0,
        textAnchor: "start",
        className: "fill-f1-foreground-secondary text-sm font-medium",
        children: l
      }
    ),
    /* @__PURE__ */ C(
      "text",
      {
        x: n ? u + 8 : 0,
        textAnchor: "start",
        className: "fill-f1-foreground text-sm font-medium",
        children: [
          g,
          "%"
        ]
      }
    )
  ] });
};
export {
  tt as VerticalBarChart
};
