import { jsx as i } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { F0Icon as e } from "../../F0Icon/index.js";
import c from "../../../icons/app/AlertCircle.js";
import m from "../../../icons/app/CheckCircle.js";
import p from "../../../icons/app/InfoCircle.js";
import "../../../icons/app/Menu.js";
import g from "../../../icons/app/Warning.js";
import { useTextFormatEnforcer as s } from "../../../lib/text.js";
import { cn as d } from "../../../lib/utils.js";
import { BaseTag as l } from "../internal/BaseTag/index.js";
const u = {
  info: p,
  warning: g,
  critical: c,
  positive: m
}, w = f(
  ({ text: r, level: o, info: t }, n) => {
    s(
      r,
      { disallowEmpty: !0, disallowEmojis: !0 },
      { componentName: "F0TagAlert" }
    );
    const a = {
      info: "info",
      warning: "warning",
      critical: "critical",
      positive: "positive"
    }[o];
    return /* @__PURE__ */ i(
      l,
      {
        ref: n,
        className: d(
          "pl-0.5",
          {
            info: "bg-f1-background-info text-f1-foreground-info",
            warning: "bg-f1-background-warning text-f1-foreground-warning",
            critical: "bg-f1-background-critical text-f1-foreground-critical",
            positive: "bg-f1-background-positive text-f1-foreground-positive"
          }[o]
        ),
        left: /* @__PURE__ */ i(
          e,
          {
            icon: u[o],
            size: "md",
            "aria-hidden": !0,
            color: a
          }
        ),
        text: r,
        info: t
      }
    );
  }
);
w.displayName = "F0TagAlert";
export {
  w as F0TagAlert
};
