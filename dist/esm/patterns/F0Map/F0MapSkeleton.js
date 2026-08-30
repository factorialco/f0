import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Map/F0MapSkeleton.tsx
var r = ({ dataTestId: r, className: i }) => /* @__PURE__ */ n(e, {
	dataTestId: r,
	children: /* @__PURE__ */ n("div", {
		"aria-busy": "true",
		"aria-live": "polite",
		className: t("h-full w-full animate-pulse bg-f1-background-secondary", i)
	})
});
//#endregion
export { r as F0MapSkeleton };
