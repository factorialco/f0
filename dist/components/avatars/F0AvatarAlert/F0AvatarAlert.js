import { jsx as i } from "react/jsx-runtime";
import { cva as n } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { F0Icon as d } from "../../F0Icon/index.js";
import f from "../../../icons/app/AlertCircle.js";
import c from "../../../icons/app/CheckCircle.js";
import b from "../../../icons/app/InfoCircle.js";
import "../../../icons/app/Menu.js";
import l from "../../../icons/app/Warning.js";
const m = n({
  base: "flex items-center justify-center border border-solid",
  variants: {
    type: {
      critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
      warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
      info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
      positive: "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive"
    },
    size: {
      sm: "h-6 w-6 rounded-sm",
      md: "h-8 w-8 rounded",
      lg: "h-10 w-10 rounded-md"
    }
  },
  defaultVariants: {
    type: "info",
    size: "md"
  }
}), h = ({
  type: r,
  size: o,
  "aria-label": e,
  "aria-labelledby": a
}) => {
  const t = {
    critical: f,
    warning: l,
    info: b,
    positive: c
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: m({ type: r, size: o }),
      "aria-label": e,
      "aria-labelledby": a,
      role: "alert",
      children: /* @__PURE__ */ i(d, { icon: t[r], size: o })
    }
  );
};
export {
  h as F0AvatarAlert
};
