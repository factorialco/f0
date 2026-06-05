import { jsx as r } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { experimentalComponent as n } from "../../../../lib/experimental.js";
import { LineChart as m } from "../../../../kits/Charts/LineChart/index.js";
import { withSkeleton as a } from "../../../../lib/skeleton.js";
import { ChartContainer as e } from "../ChartContainer.js";
const h = a(
  o(
    function(t, i) {
      return /* @__PURE__ */ r(
        e,
        {
          ref: i,
          ...t,
          chart: /* @__PURE__ */ r(m, { yAxis: { hide: !0 }, ...t.chart })
        }
      );
    }
  ),
  e.Skeleton
), x = n(
  "LineChartWidget",
  h
);
export {
  x as LineChartWidget
};
