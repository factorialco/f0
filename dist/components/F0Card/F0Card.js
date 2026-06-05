import { jsx as t } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { withDataTestId as n } from "../../lib/data-testid/index.js";
import { withSkeleton as c } from "../../lib/skeleton.js";
import { CardInternal as p, CardSkeleton as f } from "./CardInternal.js";
import { cardImageAspectRatios as h, cardImageFits as v, cardImageSizes as y } from "./CardInternal.js";
const l = ["forceVerticalMetadata", "disableOverlayLink"], e = m((r, a) => {
  const o = l.reduce((s, i) => {
    const { [i]: u, ...d } = s;
    return d;
  }, r);
  return /* @__PURE__ */ t(p, { ref: a, ...o });
}), C = ({ compact: r = !1 }) => /* @__PURE__ */ t(f, { compact: r });
e.displayName = "F0Card";
const w = n(c(e, C));
export {
  w as F0Card,
  h as cardImageAspectRatios,
  v as cardImageFits,
  y as cardImageSizes
};
