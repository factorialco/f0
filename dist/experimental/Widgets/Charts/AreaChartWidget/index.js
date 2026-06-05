import { jsx as e } from "react/jsx-runtime";
import { forwardRef as h } from "react";
import { experimentalComponent as m } from "../../../../lib/experimental.js";
import { AreaChart as C } from "../../../../kits/Charts/AreaChart/index.js";
import { withSkeleton as f } from "../../../../lib/skeleton.js";
import { ChartContainer as o } from "../ChartContainer.js";
const c = f(
  h(function({ canBeBlurred: r, ...t }, a) {
    const i = {
      ...t,
      header: {
        ...t.header,
        canBeBlurred: r
      }
    }, n = {
      ...t.chart,
      yAxis: t.chart.yAxis ? { ...t.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ e(
      o,
      {
        ref: a,
        ...i,
        chart: /* @__PURE__ */ e(C, { ...n, canBeBlurred: r })
      }
    );
  }),
  o.Skeleton
), p = m(
  "AreaChartWidget",
  c
);
export {
  p as AreaChartWidget
};
