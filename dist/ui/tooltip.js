import { jsx as o } from "react/jsx-runtime";
import { Provider as i, Root as s, Trigger as n, Portal as l, Content as t } from "../node_modules/.pnpm/@radix-ui_react-tooltip@1.2.8_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-tooltip/dist/index.js";
import * as m from "react";
import { cn as f } from "../lib/utils.js";
const u = i, T = s, h = n, p = m.forwardRef(({ className: e, sideOffset: r = 4, ...d }, a) => /* @__PURE__ */ o(l, { children: /* @__PURE__ */ o(
  t,
  {
    ref: a,
    sideOffset: r,
    className: f(
      "z-50 overflow-hidden rounded bg-f1-background border border-solid border-f1-border-secondary dark px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "break-words",
      e
    ),
    ...d
  }
) }));
p.displayName = t.displayName;
export {
  T as Tooltip,
  p as TooltipContent,
  u as TooltipProvider,
  h as TooltipTrigger
};
