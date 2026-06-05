import { jsx as n } from "react/jsx-runtime";
import { useRef as a } from "react";
import { resolveChartSize as f } from "../../utils/responsive.js";
import { useAxisLabelTooltip as u } from "../../utils/useAxisLabelTooltip.js";
import { useChartTheme as c } from "../../utils/useChartTheme.js";
import { useContainerSize as p } from "../../utils/useContainerSize.js";
import { useEChartsInstance as h } from "../../utils/useEChartsInstance.js";
import { useLegendInteraction as l } from "../../utils/useLegendInteraction.js";
import { useLineChartOptions as C } from "./useLineChartOptions.js";
const T = (r) => {
  const o = a(null), { width: e } = p(o), s = f(e), i = C(o, r, s), t = h(o, i), m = c(o);
  return u(t, o, m), l(t), /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: "h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
    }
  );
};
export {
  T as LineChart
};
