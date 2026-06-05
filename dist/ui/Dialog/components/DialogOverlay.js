import { jsx as r } from "react/jsx-runtime";
import { Overlay as a } from "../../../node_modules/.pnpm/@radix-ui_react-dialog@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.js";
import { forwardRef as d } from "react";
import { cn as i } from "../../../lib/utils.js";
const m = d(({ className: t, ...e }, o) => /* @__PURE__ */ r(
  a,
  {
    ref: o,
    className: i(
      "fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
m.displayName = a.displayName;
export {
  m as DialogOverlay
};
