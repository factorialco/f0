import { jsx as n } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { withDataTestId as i } from "../../../../lib/data-testid/index.js";
import { withSkeleton as a } from "../../../../lib/skeleton.js";
import { AiBannerSkeleton as m, AiBannerInternal as f } from "./AiBannerInternal.js";
const e = o(
  (r, t) => /* @__PURE__ */ n(f, { ref: t, ...r })
), p = ({ compact: r }) => /* @__PURE__ */ n(m, { compact: r });
e.displayName = "F0AiBanner";
const c = a(
  i(e),
  p
);
export {
  c as F0AiBanner
};
