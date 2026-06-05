import { jsx as m } from "react/jsx-runtime";
import { Root as o } from "../node_modules/.pnpm/@radix-ui_react-label@2.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-label/dist/index.js";
import * as t from "react";
import { cn as i } from "../lib/utils.js";
const s = t.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ m(
  o,
  {
    ref: r,
    className: i(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      e
    ),
    ...a
  }
));
s.displayName = o.displayName;
export {
  s as Label
};
