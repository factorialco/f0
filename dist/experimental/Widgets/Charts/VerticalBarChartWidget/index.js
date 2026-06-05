import { jsx as t } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { experimentalComponent as o } from "../../../../lib/experimental.js";
import { VerticalBarChart as m } from "../../../../kits/Charts/VerticalBarChart/index.js";
import { withSkeleton as n } from "../../../../lib/skeleton.js";
import { ChartContainer as e } from "../ChartContainer.js";
const c = n(
  i(
    function(r, a) {
      return /* @__PURE__ */ t(
        e,
        {
          ref: a,
          ...r,
          chart: /* @__PURE__ */ t(m, { xAxis: { hide: !0 }, ...r.chart })
        }
      );
    }
  ),
  e.Skeleton
), B = o(
  "VerticalBarChartWidget",
  c
);
export {
  B as VerticalBarChartWidget
};
