import { jsx as l, jsxs as c } from "react/jsx-runtime";
import { ChartContainer as f, ChartTooltip as p, ChartTooltipContent as h, ChartLegend as g, ChartLegendContent as b } from "../../../ui/chart.js";
import { getColor as y, getCategoricalColor as C } from "../utils/colors.js";
import { fixedForwardRef as x } from "../utils/forwardRef.js";
import { PieChart as A } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/PieChart.js";
import { Pie as P } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/polar/Pie.js";
import { Cell as $ } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Cell.js";
import { Label as K } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/component/Label.js";
const L = ({ data: s, dataConfig: n, overview: t, aspect: m, tickFormatter: a }, d) => {
  const i = s.map((e, r) => ({
    ...e,
    fill: n[e.label]?.color ? y(n[e.label].color) : C(r)
  })), o = s.map((e) => e.value).reduce((e, r) => e + r);
  return o === 0 && i.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ l(
    f,
    {
      config: n,
      ref: d,
      aspect: m,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ c(A, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        o !== 0 && /* @__PURE__ */ l(
          p,
          {
            isAnimationActive: !1,
            content: /* @__PURE__ */ l(h, { yAxisFormatter: a })
          }
        ),
        /* @__PURE__ */ c(
          P,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: i,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: [
              i.map((e, r) => {
                const u = a ? a(String(e.value)) : e.value;
                return /* @__PURE__ */ l(
                  $,
                  {
                    fill: e.fill,
                    "aria-label": `${e.label}: ${u} (${(e.value / o * 100).toFixed(0)}%)`
                  },
                  `cell-${r}`
                );
              }),
              /* @__PURE__ */ l(
                K,
                {
                  content: ({ viewBox: e }) => {
                    if (e && "cx" in e && "cy" in e)
                      return /* @__PURE__ */ c(
                        "text",
                        {
                          x: e.cx,
                          y: e.cy,
                          textAnchor: "middle",
                          dominantBaseline: "middle",
                          children: [
                            /* @__PURE__ */ l(
                              "tspan",
                              {
                                x: e.cx,
                                y: (e.cy || 0) + 8,
                                className: "fill-f1-foreground text-4xl font-semibold",
                                children: t?.number ? a ? a(String(t.number)) : t.number : null
                              }
                            ),
                            /* @__PURE__ */ l(
                              "tspan",
                              {
                                x: e.cx,
                                y: (e.cy || 0) - 16,
                                className: "fill-f1-foreground-secondary",
                                children: t?.label
                              }
                            )
                          ]
                        }
                      );
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ l(
          g,
          {
            content: /* @__PURE__ */ l(b, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, z = x(L);
export {
  z as PieChart,
  L as _PieChart
};
