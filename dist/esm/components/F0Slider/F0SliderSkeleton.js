import { Skeleton as e } from "../../ui/skeleton.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/F0Slider/F0SliderSkeleton.tsx
var r = ({ hideLabel: r = !1 }) => /* @__PURE__ */ n("div", {
	className: "flex w-full flex-col gap-2",
	role: "status",
	"aria-label": "Loading slider",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [!r && /* @__PURE__ */ t(e, { className: "h-4 w-24 rounded-md" }), /* @__PURE__ */ t("div", {
		className: "flex items-center py-2",
		children: /* @__PURE__ */ t(e, { className: "h-1.5 w-full rounded-full" })
	})]
});
//#endregion
export { r as F0SliderSkeleton };
