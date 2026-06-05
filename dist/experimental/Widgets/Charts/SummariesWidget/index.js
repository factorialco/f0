import { jsx as m } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { experimentalComponent as i } from "../../../../lib/experimental.js";
import { withSkeleton as n } from "../../../../lib/skeleton.js";
import { ChartContainer as r } from "../ChartContainer.js";
const a = n(
  o(
    function(t, e) {
      return /* @__PURE__ */ m(r, { ref: e, ...t, chart: null });
    }
  ),
  r.Skeleton
), l = i(
  "SummariesWidget",
  a
);
export {
  l as SummariesWidget
};
