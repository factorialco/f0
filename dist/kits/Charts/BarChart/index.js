import { jsx as e, jsxs as x } from "react/jsx-runtime";
import { ChartContainer as B, ChartTooltip as N, ChartTooltipContent as O, ChartLegend as T, ChartLegendContent as w } from "../../../ui/chart.js";
import { getCategoricalColor as n, getColor as z } from "../utils/colors.js";
import { measureTextWidth as D, chartTooltipProps as S, cartesianGridProps as G, yAxisProps as K, xAxisProps as M } from "../utils/elements.js";
import { fixedForwardRef as W } from "../utils/forwardRef.js";
import { prepareData as I } from "../utils/muncher.js";
import { BarChart as R } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/BarChart.js";
import { CartesianGrid as X } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js";
import { YAxis as Y } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js";
import { XAxis as _ } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/XAxis.js";
import { Bar as q } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Bar.js";
import { LabelList as A } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/LabelList.js";
const E = ({
  dataConfig: i,
  data: m,
  xAxis: f,
  yAxis: a = { hide: !0 },
  label: d = !1,
  type: l = "simple",
  hideTooltip: C = !1,
  hideGrid: k = !1,
  aspect: $,
  legend: F,
  showValueUnderLabel: p = !1,
  highlightLastBar: h = !1,
  onClick: u
}, L) => {
  const s = Object.keys(i), v = I(m).map((t, r, o) => h && s.length === 1 && !i[s[0]]?.color ? {
    ...t,
    fill: r === o.length - 1 ? n(r) : n(r, 0.5)
  } : t), P = Math.max(
    ...v.flatMap(
      (t) => s.map(
        (r) => D(
          a?.tickFormatter ? a.tickFormatter(`${t[r]}`) : `${t[r]}`
        )
      )
    )
  );
  return /* @__PURE__ */ e(B, { config: i, ref: L, aspect: $, children: /* @__PURE__ */ x(
    R,
    {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: a && !a.hide ? 0 : 12,
        right: 12,
        top: d ? 24 : 0,
        bottom: p ? 24 : 12
      },
      stackOffset: l === "stacked-by-sign" ? "sign" : void 0,
      onClick: (t) => {
        if (!u || !t.activeLabel || !t.activePayload)
          return;
        const r = {
          label: t.activeLabel,
          values: {}
        };
        for (const o of t.activePayload)
          r.values[o.name] = o.value;
        u(r);
      },
      children: [
        !C && /* @__PURE__ */ e(
          N,
          {
            ...S(),
            content: /* @__PURE__ */ e(O, { yAxisFormatter: a.tickFormatter })
          }
        ),
        !k && /* @__PURE__ */ e(X, { ...G() }),
        /* @__PURE__ */ e(
          Y,
          {
            ...K(a),
            tick: !0,
            width: a.width ?? P + 20,
            hide: a.hide
          }
        ),
        /* @__PURE__ */ e(
          _,
          {
            ...M(f),
            hide: f?.hide,
            tick: p ? (t) => {
              const { x: r, y: o, payload: b } = t, g = m.find((y) => y.label === b.value)?.values || "", c = Object.keys(g).length === 1 ? Object.values(g)?.[0] : void 0, j = c !== void 0 && a.tickFormatter ? a.tickFormatter(`${c}`) : c.toLocaleString();
              return /* @__PURE__ */ x("g", { transform: `translate(${r},${o})`, children: [
                /* @__PURE__ */ e(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: b.value
                  }
                ),
                !!c && /* @__PURE__ */ e(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: j
                  }
                )
              ] });
            } : void 0
          }
        ),
        s.map((t, r) => /* @__PURE__ */ e(
          q,
          {
            isAnimationActive: !1,
            dataKey: t,
            stackId: l === "stacked" || l === "stacked-by-sign" ? "stack" : void 0,
            fill: h ? ((o) => o.fill) : i[t].color ? z(i[t].color) : n(r),
            radius: l === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: d && /* @__PURE__ */ e(
              A,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${t}`
            )
          },
          `bar-${t}`
        )),
        F && /* @__PURE__ */ e(
          T,
          {
            content: /* @__PURE__ */ e(w, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, lt = W(E);
export {
  lt as BarChart
};
