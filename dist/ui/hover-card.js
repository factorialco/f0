import { jsx as t } from "react/jsx-runtime";
import { Root as s, Trigger as m, Portal as f, Content as o } from "../node_modules/.pnpm/@radix-ui_react-hover-card@1.1.15_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3_es63gjp76jk2gw72s42acw52ru/node_modules/@radix-ui/react-hover-card/dist/index.js";
import * as l from "react";
import { cn as p } from "../lib/utils.js";
const v = s, b = m, c = l.forwardRef(
  ({ className: e, align: a = "center", sideOffset: r = 4, container: d, ...n }, i) => /* @__PURE__ */ t(f, { container: d, children: /* @__PURE__ */ t(
    o,
    {
      ref: i,
      align: a,
      sideOffset: r,
      className: p(
        "z-50 w-[200px] rounded bg-f1-background-inverse font-medium text-f1-foreground-inverse outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  ) })
);
c.displayName = o.displayName;
export {
  v as HoverCard,
  c as HoverCardContent,
  b as HoverCardTrigger
};
