import { jsx as l, jsxs as o } from "react/jsx-runtime";
import { PieChart as f, Pie as h, Cell as p, Label as g } from "recharts";
import { ChartContainer as b, ChartTooltip as y, ChartTooltipContent as C, ChartLegend as x, ChartLegendContent as A } from "../../../ui/chart.js";
import { getColor as P, getCategoricalColor as $ } from "../utils/colors.js";
import { fixedForwardRef as K } from "../utils/forwardRef.js";
const L = ({ data: s, dataConfig: r, overview: n, aspect: d, tickFormatter: a }, u) => {
  const i = s.map((e, t) => ({
    ...e,
    fill: r[e.label]?.color ? P(r[e.label].color) : $(t)
  })), c = s.map((e) => e.value).reduce((e, t) => e + t);
  return c === 0 && i.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ l(
    b,
    {
      config: r,
      ref: u,
      aspect: d,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ o(f, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        c !== 0 && /* @__PURE__ */ l(
          y,
          {
            isAnimationActive: !1,
            content: /* @__PURE__ */ l(C, { yAxisFormatter: a })
          }
        ),
        /* @__PURE__ */ o(
          h,
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
              i.map((e, t) => {
                const m = a ? a(String(e.value)) : e.value;
                return /* @__PURE__ */ l(
                  p,
                  {
                    fill: e.fill,
                    "aria-label": `${e.label}: ${m} (${(e.value / c * 100).toFixed(0)}%)`
                  },
                  `cell-${t}`
                );
              }),
              /* @__PURE__ */ l(
                g,
                {
                  content: ({ viewBox: e }) => {
                    if (e && "cx" in e && "cy" in e)
                      return /* @__PURE__ */ o(
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
                                children: n?.number ? a ? a(String(n.number)) : n.number : null
                              }
                            ),
                            /* @__PURE__ */ l(
                              "tspan",
                              {
                                x: e.cx,
                                y: (e.cy || 0) - 16,
                                className: "fill-f1-foreground-secondary",
                                children: n?.label
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
          x,
          {
            content: /* @__PURE__ */ l(A, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, _ = K(L);
export {
  _ as PieChart,
  L as _PieChart
};
