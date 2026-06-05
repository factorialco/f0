import { jsx as l } from "react/jsx-runtime";
import { Root as a, Indicator as s } from "../node_modules/.pnpm/@radix-ui_react-progress@1.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-progress/dist/index.js";
import * as f from "react";
import { cn as m } from "../lib/utils.js";
const n = f.forwardRef(({ className: e, value: o, ...r }, t) => /* @__PURE__ */ l(
  a,
  {
    ref: t,
    value: o,
    className: m(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...r,
    children: /* @__PURE__ */ l(
      s,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: r.color,
          transform: `translateX(-${100 - (o || 0)}%)`
        }
      }
    )
  }
));
n.displayName = a.displayName;
export {
  n as Progress
};
