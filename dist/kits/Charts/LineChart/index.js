import { jsx as o, jsxs as C } from "react/jsx-runtime";
import { LineChart as L, CartesianGrid as k, XAxis as u, YAxis as F, Line as x } from "recharts";
import { ChartContainer as P, ChartTooltip as T, ChartTooltipContent as b } from "../../../ui/chart.js";
import { getColor as j, getCategoricalColor as w } from "../utils/colors.js";
import { measureTextWidth as D, cartesianGridProps as W, xAxisProps as $, yAxisProps as g, chartTooltipProps as v } from "../utils/elements.js";
import { fixedForwardRef as G } from "../utils/forwardRef.js";
import { prepareData as M } from "../utils/muncher.js";
const K = ({
  data: h,
  dataConfig: e,
  xAxis: i,
  yAxis: t = { hide: !0 },
  lineType: p = "natural",
  aspect: c,
  hideTooltip: n = !1,
  hideGrid: d = !1
}, l) => {
  const s = Object.keys(e), m = M(h), f = Math.max(
    ...m.flatMap(
      (r) => s.map(
        (a) => D(
          t?.tickFormatter ? t.tickFormatter(`${r[a]}`) : `${r[a]}`
        )
      )
    )
  );
  return /* @__PURE__ */ o(P, { config: e, ref: l, aspect: c, children: /* @__PURE__ */ C(
    L,
    {
      accessibilityLayer: !0,
      data: m,
      margin: { left: t && !t.hide ? 0 : 12, right: 12 },
      children: [
        !d && /* @__PURE__ */ o(k, { ...W() }),
        !i?.hide && /* @__PURE__ */ o(u, { ...$(i) }),
        !t?.hide && /* @__PURE__ */ o(
          F,
          {
            ...g(t),
            width: t.width ?? f + 20
          }
        ),
        !n && /* @__PURE__ */ o(
          T,
          {
            ...v(),
            content: /* @__PURE__ */ o(b, { yAxisFormatter: t?.tickFormatter })
          }
        ),
        s.map((r, a) => /* @__PURE__ */ o(
          x,
          {
            dataKey: r,
            isAnimationActive: !1,
            type: p,
            stroke: e[r].color ? j(e[r].color) : w(a),
            strokeWidth: 1.5,
            strokeDasharray: e[r].dashed ? "4 4" : void 0,
            dot: !1
          },
          r
        ))
      ]
    }
  ) });
}, z = G(K);
export {
  z as LineChart,
  K as _LineChart
};
