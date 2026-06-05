import { jsx as t, jsxs as n, Fragment as h } from "react/jsx-runtime";
import { nanoid as x } from "../../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.browser.js";
import { ChartContainer as g, ChartTooltip as T, ChartTooltipContent as G, ChartLegend as M, ChartLegendContent as U } from "../../../ui/chart.js";
import { usePrivacyMode as j } from "../../../lib/privacyMode.js";
import { getColor as f, getCategoricalColor as k } from "../utils/colors.js";
import { measureTextWidth as S, cartesianGridProps as W, chartTooltipProps as D } from "../utils/elements.js";
import { fixedForwardRef as P } from "../utils/forwardRef.js";
import { prepareData as X } from "../utils/muncher.js";
import { AreaChart as K } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/AreaChart.js";
import { CartesianGrid as N } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js";
import { XAxis as V } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/XAxis.js";
import { YAxis as Y } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js";
import { Area as E } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Area.js";
import { Text as I } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Text.js";
const R = ({
  index: p,
  visibleTicksCount: r,
  payload: i,
  tickFormatter: e,
  ...l
}) => {
  const a = p === 0, m = p === r - 1;
  return /* @__PURE__ */ t(I, { ...l, textAnchor: a ? "start" : m ? "end" : "middle", children: e?.(i.value, i.index) ?? i.value });
}, _ = ({
  data: p,
  dataConfig: r,
  xAxis: i,
  yAxis: e,
  canBeBlurred: l,
  blurArea: a,
  lineType: m = "monotoneX",
  aspect: w,
  marginTop: $ = 0
}, v) => {
  const { enabled: C } = j(), d = Object.keys(r), c = x(12), y = X(p), F = Math.max(
    ...y.flatMap(
      (o) => d.map(
        (s) => S(
          e?.tickFormatter ? e.tickFormatter(`${o[s]}`) : `${o[s]}`
        )
      )
    )
  ), O = e?.width ?? F + 20, u = !e?.hide, L = !i?.hide, b = !l || !C;
  return /* @__PURE__ */ t(g, { config: r, ref: v, aspect: w, children: /* @__PURE__ */ n(
    K,
    {
      accessibilityLayer: !0,
      data: y,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: $
      },
      children: [
        /* @__PURE__ */ n("defs", { children: [
          /* @__PURE__ */ n(
            "linearGradient",
            {
              id: `${c}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${u ? O : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (a === "l" || a === "lr") && /* @__PURE__ */ n(h, { children: [
                  /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ t("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ t("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (a === "r" || a === "lr") && /* @__PURE__ */ n(h, { children: [
                  /* @__PURE__ */ t("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ t("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !a && /* @__PURE__ */ n(h, { children: [
                  /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            "mask",
            {
              id: `${c}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ t(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${c}-fadeGradient)`
                }
              )
            }
          ),
          d.map((o, s) => /* @__PURE__ */ n(
            "linearGradient",
            {
              id: `fill${String(o)}-${c}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ t(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: r[o].color ? f(r[o].color) : k(s),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ t(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: r[o].color ? f(r[o].color) : k(s),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            s
          ))
        ] }),
        /* @__PURE__ */ t(
          N,
          {
            ...W(),
            mask: `url(#${c}-transparent-edges)`
          }
        ),
        L && /* @__PURE__ */ t(
          V,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: i?.tickFormatter,
            ticks: i?.ticks,
            domain: i?.domain,
            interval: 0,
            tick: R
          }
        ),
        u && /* @__PURE__ */ t(
          Y,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: e?.tickCount,
            tickFormatter: l && C ? () => "**" : e?.tickFormatter,
            ticks: e?.ticks,
            domain: e?.domain,
            width: O
          }
        ),
        b && /* @__PURE__ */ t(
          T,
          {
            ...D(),
            content: /* @__PURE__ */ t(
              G,
              {
                indicator: "dot",
                yAxisFormatter: e?.tickFormatter
              }
            )
          }
        ),
        d.map((o, s) => /* @__PURE__ */ t(
          E,
          {
            isAnimationActive: !1,
            dataKey: o,
            type: m,
            mask: `url(#${c}-transparent-edges)`,
            fill: `url(#fill${o}-${c})`,
            fillOpacity: r[o].dashed ? 0 : 0.4,
            stroke: r[o].color ? f(r[o].color) : k(s),
            strokeWidth: 1.5,
            strokeDasharray: r[o].dashed ? "4 4" : void 0
          },
          o
        )),
        Object.keys(r).length > 1 && /* @__PURE__ */ t(
          M,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ t(U, {})
          }
        )
      ]
    }
  ) });
}, at = P(_);
export {
  at as AreaChart,
  _ as BaseAreaChart
};
