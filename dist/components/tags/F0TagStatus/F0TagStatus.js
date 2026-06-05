import { jsx as i } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import { BaseTag as f } from "../internal/BaseTag/index.js";
import { useTextFormatEnforcer as c } from "../../../lib/text.js";
import { cn as n } from "../../../lib/utils.js";
const g = e(
  ({ text: o, additionalAccessibleText: t, variant: r }, a) => (c(
    o,
    { disallowEmpty: !0 },
    { componentName: "F0TagStatus" }
  ), /* @__PURE__ */ i(
    f,
    {
      ref: a,
      className: n(
        {
          neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
          info: "bg-f1-background-info text-f1-foreground-info",
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[r]
      ),
      left: /* @__PURE__ */ i(
        "div",
        {
          className: n(
            "m-1 aspect-square w-2 rounded-full",
            {
              neutral: "bg-f1-icon",
              info: "bg-f1-icon-info",
              positive: "bg-f1-icon-positive",
              warning: "bg-f1-icon-warning",
              critical: "bg-f1-icon-critical"
            }[r]
          ),
          "aria-hidden": !0
        }
      ),
      additionalAccessibleText: t,
      text: o
    }
  ))
);
g.displayName = "F0TagStatus";
export {
  g as F0TagStatus
};
