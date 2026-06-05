import { jsx as o, jsxs as C } from "react/jsx-runtime";
import { ChartContainer as L, ChartTooltip as k, ChartTooltipContent as u } from "../../../ui/chart.js";
import { getColor as F, getCategoricalColor as x } from "../utils/colors.js";
import { measureTextWidth as P, cartesianGridProps as T, xAxisProps as b, yAxisProps as j, chartTooltipProps as w } from "../utils/elements.js";
import { fixedForwardRef as D } from "../utils/forwardRef.js";
import { prepareData as W } from "../utils/muncher.js";
import { LineChart as $ } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/chart/LineChart.js";
import { CartesianGrid as g } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/CartesianGrid.js";
import { XAxis as v } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/XAxis.js";
import { YAxis as G } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/YAxis.js";
import { Line as M } from "../../../node_modules/.pnpm/recharts@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recharts/es6/cartesian/Line.js";
const K = ({
  data: s,
  dataConfig: e,
  xAxis: i,
  yAxis: r = { hide: !0 },
  lineType: h = "natural",
  aspect: c,
  hideTooltip: n = !1,
  hideGrid: d = !1
}, f) => {
  const m = Object.keys(e), p = W(s), l = Math.max(
    ...p.flatMap(
      (t) => m.map(
        (a) => P(
          r?.tickFormatter ? r.tickFormatter(`${t[a]}`) : `${t[a]}`
        )
      )
    )
  );
  return /* @__PURE__ */ o(L, { config: e, ref: f, aspect: c, children: /* @__PURE__ */ C(
    $,
    {
      accessibilityLayer: !0,
      data: p,
      margin: { left: r && !r.hide ? 0 : 12, right: 12 },
      children: [
        !d && /* @__PURE__ */ o(g, { ...T() }),
        !i?.hide && /* @__PURE__ */ o(v, { ...b(i) }),
        !r?.hide && /* @__PURE__ */ o(
          G,
          {
            ...j(r),
            width: r.width ?? l + 20
          }
        ),
        !n && /* @__PURE__ */ o(
          k,
          {
            ...w(),
            content: /* @__PURE__ */ o(u, { yAxisFormatter: r?.tickFormatter })
          }
        ),
        m.map((t, a) => /* @__PURE__ */ o(
          M,
          {
            dataKey: t,
            isAnimationActive: !1,
            type: h,
            stroke: e[t].color ? F(e[t].color) : x(a),
            strokeWidth: 1.5,
            strokeDasharray: e[t].dashed ? "4 4" : void 0,
            dot: !1
          },
          t
        ))
      ]
    }
  ) });
}, I = D(K);
export {
  I as LineChart,
  K as _LineChart
};
