import { jsx as t, jsxs as n, Fragment as h } from "react/jsx-runtime";
import { nanoid as x } from "../../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.browser.js";
import { AreaChart as g, CartesianGrid as T, XAxis as G, YAxis as M, Area as U, Text as j } from "recharts";
import { ChartContainer as S, ChartTooltip as W, ChartTooltipContent as D, ChartLegend as P, ChartLegendContent as X } from "../../../ui/chart.js";
import { usePrivacyMode as K } from "../../../lib/privacyMode.js";
import { getColor as f, getCategoricalColor as k } from "../utils/colors.js";
import { measureTextWidth as N, cartesianGridProps as V, chartTooltipProps as Y } from "../utils/elements.js";
import { fixedForwardRef as E } from "../utils/forwardRef.js";
import { prepareData as I } from "../utils/muncher.js";
const R = ({
  index: p,
  visibleTicksCount: e,
  payload: s,
  tickFormatter: r,
  ...l
}) => {
  const a = p === 0, d = p === e - 1;
  return /* @__PURE__ */ t(j, { ...l, textAnchor: a ? "start" : d ? "end" : "middle", children: r?.(s.value, s.index) ?? s.value });
}, _ = ({
  data: p,
  dataConfig: e,
  xAxis: s,
  yAxis: r,
  canBeBlurred: l,
  blurArea: a,
  lineType: d = "monotoneX",
  aspect: w,
  marginTop: $ = 0
}, v) => {
  const { enabled: C } = K(), m = Object.keys(e), c = x(12), y = I(p), F = Math.max(
    ...y.flatMap(
      (o) => m.map(
        (i) => N(
          r?.tickFormatter ? r.tickFormatter(`${o[i]}`) : `${o[i]}`
        )
      )
    )
  ), O = r?.width ?? F + 20, u = !r?.hide, L = !s?.hide, b = !l || !C;
  return /* @__PURE__ */ t(S, { config: e, ref: v, aspect: w, children: /* @__PURE__ */ n(
    g,
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
          m.map((o, i) => /* @__PURE__ */ n(
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
                    stopColor: e[o].color ? f(e[o].color) : k(i),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ t(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: e[o].color ? f(e[o].color) : k(i),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            i
          ))
        ] }),
        /* @__PURE__ */ t(
          T,
          {
            ...V(),
            mask: `url(#${c}-transparent-edges)`
          }
        ),
        L && /* @__PURE__ */ t(
          G,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: s?.tickFormatter,
            ticks: s?.ticks,
            domain: s?.domain,
            interval: 0,
            tick: R
          }
        ),
        u && /* @__PURE__ */ t(
          M,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: r?.tickCount,
            tickFormatter: l && C ? () => "**" : r?.tickFormatter,
            ticks: r?.ticks,
            domain: r?.domain,
            width: O
          }
        ),
        b && /* @__PURE__ */ t(
          W,
          {
            ...Y(),
            content: /* @__PURE__ */ t(
              D,
              {
                indicator: "dot",
                yAxisFormatter: r?.tickFormatter
              }
            )
          }
        ),
        m.map((o, i) => /* @__PURE__ */ t(
          U,
          {
            isAnimationActive: !1,
            dataKey: o,
            type: d,
            mask: `url(#${c}-transparent-edges)`,
            fill: `url(#fill${o}-${c})`,
            fillOpacity: e[o].dashed ? 0 : 0.4,
            stroke: e[o].color ? f(e[o].color) : k(i),
            strokeWidth: 1.5,
            strokeDasharray: e[o].dashed ? "4 4" : void 0
          },
          o
        )),
        Object.keys(e).length > 1 && /* @__PURE__ */ t(
          P,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ t(X, {})
          }
        )
      ]
    }
  ) });
}, ot = E(_);
export {
  ot as AreaChart,
  _ as BaseAreaChart
};
