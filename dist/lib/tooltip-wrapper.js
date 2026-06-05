import { jsx as e, jsxs as t, Fragment as n } from "react/jsx-runtime";
import { TooltipProvider as i, Tooltip as s, TooltipTrigger as a, TooltipContent as l } from "../ui/tooltip.js";
const d = ({
  tooltip: o,
  children: r
}) => o ? /* @__PURE__ */ e(i, { delayDuration: 100, disableHoverableContent: !0, children: /* @__PURE__ */ t(s, { children: [
  /* @__PURE__ */ e(a, { asChild: !0, className: "pointer-events-auto", children: r }),
  /* @__PURE__ */ e(l, { className: "pointer-events-none max-w-xs", children: /* @__PURE__ */ e("p", { className: "font-semibold", children: o }) })
] }) }) : /* @__PURE__ */ e(n, { children: r });
export {
  d as TooltipWrapper
};
