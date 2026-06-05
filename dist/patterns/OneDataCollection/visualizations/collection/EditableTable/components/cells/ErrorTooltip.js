import { jsx as o, jsxs as t } from "react/jsx-runtime";
import { useState as f, useCallback as l, useEffect as u } from "react";
import { F0Icon as p } from "../../../../../../../components/F0Icon/index.js";
import s from "../../../../../../../icons/app/AlertCircle.js";
import "../../../../../../../icons/app/Menu.js";
import { TooltipProvider as d, Tooltip as m, TooltipTrigger as h, TooltipContent as C } from "../../../../../../../ui/tooltip.js";
function F({ message: e, children: i }) {
  const [n, r] = f(!1), a = l(() => {
    e && r(!0);
  }, [e]), c = l(() => r(!1), []);
  return u(() => {
    e || r(!1);
  }, [e]), /* @__PURE__ */ o("div", { className: "relative h-full w-full", children: /* @__PURE__ */ o(d, { delayDuration: 100, disableHoverableContent: !0, children: /* @__PURE__ */ t(m, { open: n && !!e, onOpenChange: r, children: [
    /* @__PURE__ */ o(h, { asChild: !0, className: "pointer-events-auto h-full w-full", children: /* @__PURE__ */ o(
      "div",
      {
        className: "flex h-full w-full items-center",
        onFocusCapture: a,
        onBlurCapture: c,
        children: i
      }
    ) }),
    e && /* @__PURE__ */ t(
      C,
      {
        side: "top",
        className: "border-black/10 flex items-center gap-1 bg-[#fff] shadow-md",
        children: [
          /* @__PURE__ */ o(p, { icon: s, color: "critical", size: "sm" }),
          /* @__PURE__ */ o("span", { className: "text-sm font-medium text-f1-foreground-critical", children: e })
        ]
      }
    )
  ] }) }) });
}
export {
  F as ErrorTooltip
};
