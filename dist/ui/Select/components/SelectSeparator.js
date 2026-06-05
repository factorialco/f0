import { jsx as e } from "react/jsx-runtime";
import * as p from "react";
import { cn as t } from "../../../lib/utils.js";
import { Separator as r } from "./radix-ui/select.js";
const s = p.forwardRef(({ className: o, ...a }, m) => /* @__PURE__ */ e(
  r,
  {
    ref: m,
    className: t("-mx-1 my-1 h-px bg-f1-border-secondary", o),
    ...a
  }
));
s.displayName = r.displayName;
export {
  s as SelectSeparator
};
