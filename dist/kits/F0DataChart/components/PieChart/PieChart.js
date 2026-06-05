import { jsx as n } from "react/jsx-runtime";
import { useRef as m } from "react";
import { resolveChartSize as f } from "../../utils/responsive.js";
import { useContainerSize as a } from "../../utils/useContainerSize.js";
import { useEChartsInstance as c } from "../../utils/useEChartsInstance.js";
import { useLegendInteraction as p } from "../../utils/useLegendInteraction.js";
import { usePieChartOptions as u } from "./usePieChartOptions.js";
const x = (t) => {
  const o = m(null), { width: r } = a(o), e = f(r), s = u(o, t, e), i = c(o, s);
  return p(i), /* @__PURE__ */ n("div", { ref: o, className: "h-full w-full" });
};
export {
  x as PieChart
};
