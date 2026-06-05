import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { F0Icon as u } from "../../../../../../../components/F0Icon/index.js";
import { cn as t, focusRing as f } from "../../../../../../../lib/utils.js";
import { TooltipProvider as m, Tooltip as h, TooltipTrigger as p, TooltipContent as b } from "../../../../../../../ui/tooltip.js";
import { ErrorTooltip as _ } from "./ErrorTooltip.js";
const w = {
  text: "cursor-text",
  pointer: "cursor-pointer",
  default: "cursor-default",
  "not-allowed": "cursor-not-allowed"
};
function C({
  readonly: i = !1,
  showRightBorder: n = !0,
  cursor: l = "text",
  isActive: a = !1,
  borderOnHover: d = !0,
  error: o,
  hint: e,
  children: c
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: t(
        "flex w-full h-full min-w-0 min-h-12 border-solid",
        "border-0 border-r-[1px] border-f1-border-secondary",
        !n && "border-r-0",
        w[l],
        o ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]" : a ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : d ? "shadow-none [&:not(:focus-within)]:hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))] focus-within:relative focus-within:z-[1] focus-within:border-r-0 focus-within:bg-f1-background focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : "shadow-none",
        i && "bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ s(_, { message: o, children: [
        e && !o && /* @__PURE__ */ r(m, { delayDuration: 100, children: /* @__PURE__ */ s(h, { children: [
          /* @__PURE__ */ r(p, { asChild: !0, children: /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              "aria-label": e.message,
              className: t(
                "pointer-events-auto flex shrink-0 cursor-pointer items-center rounded px-1",
                f()
              ),
              children: /* @__PURE__ */ r(u, { icon: e.icon, size: "md", color: e.iconColor })
            }
          ) }),
          /* @__PURE__ */ r(
            b,
            {
              side: "top",
              className: "border-black/10 max-w-64 cursor-default text-f1-foreground shadow-md",
              children: /* @__PURE__ */ r("span", { className: "text-sm font-medium text-f1-foreground", children: e.message })
            }
          )
        ] }) }),
        /* @__PURE__ */ r("div", { className: "min-w-0 flex-1", children: c })
      ] })
    }
  );
}
export {
  C as BaseCell
};
