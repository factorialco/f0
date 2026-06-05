import { jsx as i } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { withDataTestId as g } from "../../lib/data-testid/index.js";
import { F0ButtonToggleInternal as u } from "./internal/F0ButtonToggle.internal.js";
const a = ["withBorder"], t = m(
  (o, r) => {
    const e = a.reduce((n, s) => {
      const { [s]: c, ...p } = n;
      return p;
    }, o);
    return /* @__PURE__ */ i(u, { ...e, ref: r });
  }
);
t.displayName = "F0ButtonToggle";
const T = g(t);
export {
  T as F0ButtonToggle
};
