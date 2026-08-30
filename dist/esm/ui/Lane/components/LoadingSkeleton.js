import { F0Card as e } from "../../../components/F0Card/F0Card.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/Lane/components/LoadingSkeleton.tsx
var r = t(({ showPlaceholders: t = !0, count: r = 3 }, i) => /* @__PURE__ */ n("div", {
	ref: i,
	className: "space-y-1",
	"aria-hidden": !t,
	children: t && Array.from({ length: r }).map((t, r) => /* @__PURE__ */ n(e.Skeleton, { compact: !0 }, r))
}));
r.displayName = "LoadingSkeleton";
//#endregion
export { r as LoadingSkeleton };
