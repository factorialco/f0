import { jsx as a } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { withDataTestId as c } from "../../lib/data-testid/index.js";
import { ButtonInternal as i } from "./internal.js";
const u = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style"
], t = m((o, r) => {
  const e = u.reduce((n, s) => {
    const { [s]: l, ...p } = n;
    return p;
  }, o);
  return /* @__PURE__ */ a(i, { ...e, ref: r });
});
t.displayName = "F0Button";
const T = c(t);
export {
  T as F0Button
};
