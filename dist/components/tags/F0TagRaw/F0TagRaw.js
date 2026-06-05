import { jsx as e } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { F0Icon as i } from "../../F0Icon/index.js";
import { useTextFormatEnforcer as f } from "../../../lib/text.js";
import { BaseTag as l } from "../internal/BaseTag/index.js";
const p = d(
  ({ text: r, additionalAccessibleText: a, icon: o, onlyIcon: m, info: t }, s) => (f(
    r,
    { disallowEmpty: !0 },
    { componentName: "F0TagRaw" }
  ), /* @__PURE__ */ e(
    l,
    {
      ref: s,
      className: "border-[1px] border-solid border-f1-border-secondary",
      left: o ? /* @__PURE__ */ e(
        i,
        {
          icon: o,
          size: "sm",
          className: "text-f1-icon",
          "aria-hidden": !0
        }
      ) : null,
      hideLabel: m,
      text: r,
      additionalAccessibleText: a,
      info: t
    }
  ))
);
p.displayName = "F0TagRaw";
export {
  p as F0TagRaw
};
