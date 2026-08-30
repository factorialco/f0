import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { withSkeleton as t } from "../../lib/skeleton.js";
import { CardInternal as n, CardSkeleton as r, cardImageAspectRatios as i, cardImageFits as a, cardImageSizes as o } from "./CardInternal.js";
import { cardAlertVariants as s } from "./types.js";
import { forwardRef as c } from "react";
import { jsx as l } from "react/jsx-runtime";
//#region src/components/F0Card/F0Card.tsx
var u = ["forceVerticalMetadata", "disableOverlayLink"], d = c((e, t) => {
	let r = u.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ l(n, {
		ref: t,
		...r
	});
}), f = ({ compact: e = !1 }) => /* @__PURE__ */ l(r, { compact: e });
d.displayName = "F0Card";
var p = e(t(d, f));
//#endregion
export { p as F0Card, s as cardAlertVariants, i as cardImageAspectRatios, a as cardImageFits, o as cardImageSizes };
