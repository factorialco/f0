import { F0TagRaw as e } from "../../../../components/tags/F0TagRaw/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/ui/value-display/types/tag/tag.tsx
var n = {
	default: void 0,
	neutral: "border-none bg-f1-background-secondary text-f1-foreground-secondary"
}, r = (r) => /* @__PURE__ */ t("div", {
	"data-cell-type": "tag",
	children: /* @__PURE__ */ t(e, {
		text: r.label,
		icon: r.icon,
		className: n[r.variant ?? "default"]
	})
});
//#endregion
export { r as TagCell };
