import { cn as e } from "../../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/kits/ai/F0ClarifyingPanel/components/RadioIndicator.tsx
var n = ({ isSelected: n }) => /* @__PURE__ */ t("div", {
	className: e("flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors", n ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"),
	children: n && /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
});
//#endregion
export { n as RadioIndicator };
