import { jsx as d } from "react/jsx-runtime";
import { Root as e } from "../node_modules/.pnpm/@radix-ui_react-toggle@1.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-toggle/dist/index.js";
import { cva as i } from "../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import * as f from "react";
import { cn as r, focusRing as m } from "../lib/utils.js";
const c = i({
  base: r(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    m()
  ),
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), g = f.forwardRef(({ className: o, variant: t, size: a, ...n }, s) => /* @__PURE__ */ d(
  e,
  {
    ref: s,
    className: r(c({ variant: t, size: a, className: o })),
    ...n
  }
));
g.displayName = e.displayName;
export {
  g as Toggle,
  c as toggleVariants
};
