import { jsx as e } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { F0Card as i } from "../../../components/F0Card/F0Card.js";
const n = m(
  ({ showPlaceholders: r = !0, count: o = 3 }, a) => /* @__PURE__ */ e("div", { ref: a, className: "space-y-1", "aria-hidden": !r, children: r && Array.from({ length: o }).map((d, t) => /* @__PURE__ */ e(i.Skeleton, { compact: !0 }, t)) })
);
n.displayName = "LoadingSkeleton";
export {
  n as LoadingSkeleton
};
