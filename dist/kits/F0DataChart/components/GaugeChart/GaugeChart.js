import { jsx as i } from "react/jsx-runtime";
import { useRef as m } from "react";
import { resolveChartSize as n } from "../../utils/responsive.js";
import { useContainerSize as a } from "../../utils/useContainerSize.js";
import { useEChartsInstance as f } from "../../utils/useEChartsInstance.js";
import { useGaugeChartOptions as u } from "./useGaugeChartOptions.js";
const d = (r) => {
  const o = m(null), { width: t } = a(o), e = n(t), s = u(o, r, e);
  return f(o, s), /* @__PURE__ */ i("div", { ref: o, className: "h-full w-full" });
};
export {
  d as GaugeChart
};
