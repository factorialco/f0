import { jsx as t } from "react/jsx-runtime";
import { cva as n } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { withDataTestId as o } from "../../lib/data-testid/index.js";
import { experimentalComponent as s } from "../../lib/experimental.js";
import { F0Icon as a } from "../../components/F0Icon/index.js";
const d = n({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    type: {
      neutral: "bg-transparent text-f1-icon",
      highlight: "text-f1-special-highlight",
      positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
      critical: "bg-f1-icon-critical text-f1-foreground-inverse",
      warning: "bg-f1-background-warning-bold text-f1-foreground-inverse"
    },
    size: {
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    type: "neutral",
    size: "md"
  }
}), m = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md"
}, g = ({ type: r, size: e = "md", icon: i }) => /* @__PURE__ */ t("div", { className: d({ type: r, size: e }), children: /* @__PURE__ */ t(a, { icon: i, size: m[e] }) }), x = o(s("Badge", g));
export {
  x as Badge
};
