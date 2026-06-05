import { jsx as t } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import { experimentalComponent as i } from "../../../../lib/experimental.js";
import { BarChart as n } from "../../../../kits/Charts/BarChart/index.js";
import { withSkeleton as m } from "../../../../lib/skeleton.js";
import { ChartContainer as o } from "../ChartContainer.js";
const h = e(function(r, a) {
  return /* @__PURE__ */ t(
    o,
    {
      ref: a,
      ...r,
      chart: /* @__PURE__ */ t(n, { yAxis: { hide: !0 }, ...r.chart })
    }
  );
}), l = i(
  "BarChartWidget",
  m(h, o.Skeleton)
);
export {
  l as BarChartWidget
};
