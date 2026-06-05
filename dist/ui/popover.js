import { jsx as t } from "react/jsx-runtime";
import { Root as s, Trigger as m, Anchor as l, Portal as f, Content as a } from "../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
import * as p from "react";
import { cn as c } from "../lib/utils.js";
const x = s, b = m, C = l, g = p.forwardRef(
  ({ className: e, align: r = "center", sideOffset: n = 4, container: i, ...o }, d) => /* @__PURE__ */ t(f, { container: i, children: /* @__PURE__ */ t(
    a,
    {
      asChild: o.asChild,
      ref: d,
      align: r,
      sideOffset: n,
      className: c(
        "z-50 w-72 rounded-xs border bg-f1-background p-4 text-f1-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[var(--radix-popover-content-transform-origin)]",
        "max-h-[var(--radix-popover-content-available-height)]",
        "overflow-auto",
        e
      ),
      ...o
    }
  ) })
);
g.displayName = a.displayName;
export {
  x as Popover,
  C as PopoverAnchor,
  g as PopoverContent,
  b as PopoverTrigger
};
