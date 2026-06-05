import { jsx as r } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { experimentalComponent as m } from "../../../../lib/experimental.js";
import { PieChart as n } from "../../../../kits/Charts/PieChart/index.js";
import { withSkeleton as a } from "../../../../lib/skeleton.js";
import { ChartContainer as e } from "../ChartContainer.js";
const f = a(
  i(
    function(t, o) {
      return /* @__PURE__ */ r(
        e,
        {
          ref: o,
          ...t,
          chart: /* @__PURE__ */ r(n, { ...t.chart })
        }
      );
    }
  ),
  e.Skeleton
), W = m(
  "PieChartWidget",
  f
);
export {
  W as PieChartWidget
};
