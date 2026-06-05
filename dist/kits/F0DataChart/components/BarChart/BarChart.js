import { jsx as a } from "react/jsx-runtime";
import { useRef as n } from "react";
import { resolveChartSize as f } from "../../utils/responsive.js";
import { useAxisLabelTooltip as u } from "../../utils/useAxisLabelTooltip.js";
import { useChartTheme as c } from "../../utils/useChartTheme.js";
import { useContainerSize as p } from "../../utils/useContainerSize.js";
import { useEChartsInstance as h } from "../../utils/useEChartsInstance.js";
import { useLegendInteraction as l } from "../../utils/useLegendInteraction.js";
import { useBarChartOptions as C } from "./useBarChartOptions.js";
const S = (t) => {
  const r = n(null), { width: e } = p(r), s = f(e), i = C(r, t, s), o = h(r, i), m = c(r);
  return u(o, r, m), l(o), /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: "h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
    }
  );
};
export {
  S as BarChart
};
