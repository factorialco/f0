import { cn as e } from "../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/ui/skeleton.tsx
function n({ className: n, ...r }) {
	return /* @__PURE__ */ t("div", {
		"data-testid": "skeleton",
		className: e("animate-pulse rounded-xs bg-f1-background-secondary", n),
		...r
	});
}
//#endregion
export { n as Skeleton };
