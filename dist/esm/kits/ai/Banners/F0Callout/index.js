import { withDataTestId as e } from "../../../../lib/data-testid/index.js";
import { withSkeleton as t } from "../../../../lib/skeleton.js";
import { CalloutInternal as n, CalloutSkeleton as r } from "./CalloutInternal.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/kits/ai/Banners/F0Callout/index.tsx
var o = i((e, t) => /* @__PURE__ */ a(n, {
	ref: t,
	...e
})), s = ({ compact: e, variant: t }) => /* @__PURE__ */ a(r, {
	compact: e,
	variant: t
});
o.displayName = "F0Callout";
var c = t(e(o), s);
//#endregion
export { c as F0Callout };
