import { jsx as i } from "react/jsx-runtime";
import { useRef as m } from "react";
import { resolveChartSize as a } from "../../utils/responsive.js";
import { useContainerSize as f } from "../../utils/useContainerSize.js";
import { useEChartsInstance as c } from "../../utils/useEChartsInstance.js";
import { useLegendInteraction as p } from "../../utils/useLegendInteraction.js";
import { useRadarChartOptions as u } from "./useRadarChartOptions.js";
const w = (o) => {
  const r = m(null), { width: t } = f(r), e = a(t), s = u(r, o, e), n = c(r, s);
  return p(n), /* @__PURE__ */ i("div", { ref: r, className: "h-full w-full" });
};
export {
  w as RadarChart
};
