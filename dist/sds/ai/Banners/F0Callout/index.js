import { jsx as r } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import { withDataTestId as a } from "../../../../lib/data-testid/index.js";
import { withSkeleton as m } from "../../../../lib/skeleton.js";
import { CalloutSkeleton as n, CalloutInternal as i } from "./CalloutInternal.js";
const l = e(
  (t, o) => /* @__PURE__ */ r(i, { ref: o, ...t })
), u = ({ compact: t, variant: o }) => /* @__PURE__ */ r(n, { compact: t, variant: o });
l.displayName = "F0Callout";
const c = m(
  a(l),
  u
);
export {
  c as F0Callout
};
