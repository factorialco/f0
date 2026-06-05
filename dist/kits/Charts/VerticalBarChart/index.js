import { jsx as e, jsxs as C, Fragment as T } from "react/jsx-runtime";
import { l as A } from "../../../_virtual/lodash.js";
import { ChartContainer as L, ChartTooltip as j, ChartTooltipContent as D } from "../../../ui/chart.js";
import { prepareData as K } from "../utils/bar.js";
import { getColor as N, getCategoricalColor as z } from "../utils/colors.js";
import { measureTextWidth as b, xAxisProps as E, yAxisProps as M, chartTooltipProps as V, cartesianGridProps as W } from "../utils/elements.js";
import { fixedForwardRef as w } from "../utils/forwardRef.js";
import { BarChart as F } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/BarChart.js";
import { CartesianGrid as G } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js";
import { XAxis as O } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/XAxis.js";
import { YAxis as S } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js";
import { Bar as v } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Bar.js";
import { LabelList as X } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/LabelList.js";
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
  valueFormatter: f
}, x) => {
  const d = Object.keys(i), l = K(s), u = Math.max(
    ...l.map((r) => b(`${r.x}`))
  ), g = d.reduce(
    (r, h) => (r[h] = s.reduce(
      (B, P) => B + P.values[h],
      0
    ), r),
    {}
  ), y = {
    ...E(o),
    type: "number",
    dataKey: Y(l)
  }, $ = {
    ...M(t),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ e(L, { config: i, ref: x, aspect: n, children: /* @__PURE__ */ C(
    F,
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
          j,
          {
            ...V(!0),
            content: /* @__PURE__ */ e(D, { yAxisFormatter: t?.tickFormatter })
          }
        ),
        !p && /* @__PURE__ */ e(
          G,
          {
            ...W(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ e(O, { ...y, hide: o?.hide }),
        /* @__PURE__ */ e(
          S,
          {
            ...$,
            hide: t?.hide,
            width: t?.width ?? u + 20
          }
        ),
        d.map((r, h) => /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(
          v,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: r,
            fill: i[r].color ? N(i[r].color) : z(h),
            radius: 4,
            maxBarSize: 24,
            children: (a || m) && /* @__PURE__ */ e(
              X,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12,
                formatter: f,
                content: m ? /* @__PURE__ */ e(
                  q,
                  {
                    valueFormatter: f,
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
}, it = w(_), q = ({
  viewBox: i,
  offset: s = 0,
  value: o,
  valueFormatter: t,
  total: a,
  showLabel: n
}) => {
  const { x: c = 0, y: p = 0, width: m = 0, height: f = 0 } = i, x = c + m + s, d = p + f / 2, l = t ? t(o) : o, u = b(`${l}`), g = a > 0 ? Math.round(Number(o) / a * 100) : 0;
  return /* @__PURE__ */ C("g", { transform: `translate(${x},${d + 4})`, children: [
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
  it as VerticalBarChart
};
