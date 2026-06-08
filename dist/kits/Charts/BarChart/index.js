import { jsx as r, jsxs as x } from "react/jsx-runtime";
import { BarChart as B, CartesianGrid as N, YAxis as O, XAxis as T, Bar as w, LabelList as z } from "recharts";
import { ChartContainer as D, ChartTooltip as S, ChartTooltipContent as G, ChartLegend as K, ChartLegendContent as M } from "../../../ui/chart.js";
import { getCategoricalColor as n, getColor as W } from "../utils/colors.js";
import { measureTextWidth as I, chartTooltipProps as R, cartesianGridProps as X, yAxisProps as Y, xAxisProps as _ } from "../utils/elements.js";
import { fixedForwardRef as q } from "../utils/forwardRef.js";
import { prepareData as A } from "../utils/muncher.js";
const E = ({
  dataConfig: i,
  data: m,
  xAxis: d,
  yAxis: a = { hide: !0 },
  label: f = !1,
  type: l = "simple",
  hideTooltip: C = !1,
  hideGrid: k = !1,
  aspect: $,
  legend: F,
  showValueUnderLabel: h = !1,
  highlightLastBar: p = !1,
  onClick: u
}, L) => {
  const s = Object.keys(i), v = A(m).map((t, e, o) => p && s.length === 1 && !i[s[0]]?.color ? {
    ...t,
    fill: e === o.length - 1 ? n(e) : n(e, 0.5)
  } : t), P = Math.max(
    ...v.flatMap(
      (t) => s.map(
        (e) => I(
          a?.tickFormatter ? a.tickFormatter(`${t[e]}`) : `${t[e]}`
        )
      )
    )
  );
  return /* @__PURE__ */ r(D, { config: i, ref: L, aspect: $, children: /* @__PURE__ */ x(
    B,
    {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: a && !a.hide ? 0 : 12,
        right: 12,
        top: f ? 24 : 0,
        bottom: h ? 24 : 12
      },
      stackOffset: l === "stacked-by-sign" ? "sign" : void 0,
      onClick: (t) => {
        if (!u || !t.activeLabel || !t.activePayload)
          return;
        const e = {
          label: t.activeLabel,
          values: {}
        };
        for (const o of t.activePayload)
          e.values[o.name] = o.value;
        u(e);
      },
      children: [
        !C && /* @__PURE__ */ r(
          S,
          {
            ...R(),
            content: /* @__PURE__ */ r(G, { yAxisFormatter: a.tickFormatter })
          }
        ),
        !k && /* @__PURE__ */ r(N, { ...X() }),
        /* @__PURE__ */ r(
          O,
          {
            ...Y(a),
            tick: !0,
            width: a.width ?? P + 20,
            hide: a.hide
          }
        ),
        /* @__PURE__ */ r(
          T,
          {
            ..._(d),
            hide: d?.hide,
            tick: h ? (t) => {
              const { x: e, y: o, payload: b } = t, g = m.find((y) => y.label === b.value)?.values || "", c = Object.keys(g).length === 1 ? Object.values(g)?.[0] : void 0, j = c !== void 0 && a.tickFormatter ? a.tickFormatter(`${c}`) : c.toLocaleString();
              return /* @__PURE__ */ x("g", { transform: `translate(${e},${o})`, children: [
                /* @__PURE__ */ r(
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
                !!c && /* @__PURE__ */ r(
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
        s.map((t, e) => /* @__PURE__ */ r(
          w,
          {
            isAnimationActive: !1,
            dataKey: t,
            stackId: l === "stacked" || l === "stacked-by-sign" ? "stack" : void 0,
            fill: p ? ((o) => o.fill) : i[t].color ? W(i[t].color) : n(e),
            radius: l === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: f && /* @__PURE__ */ r(
              z,
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
        F && /* @__PURE__ */ r(
          K,
          {
            content: /* @__PURE__ */ r(M, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, et = q(E);
export {
  et as BarChart
};
