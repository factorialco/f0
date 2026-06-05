import { jsx as n } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { Widget as o } from "../Widget/index.js";
const d = Object.assign(
  m(function({ chart: r, summaries: t, ...e }, i) {
    return /* @__PURE__ */ n(o, { ref: i, ...e, summaries: t, children: r && /* @__PURE__ */ n("div", { className: "min-h-52 min-w-52 grow pt-2", children: r }) });
  }),
  {
    Skeleton: o.Skeleton
  }
);
export {
  d as ChartContainer
};
