import { F0TagAlert as e } from "../../../../components/tags/F0TagAlert/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/ui/value-display/types/alertTag/alertTag.tsx
var n = (n) => /* @__PURE__ */ t("div", {
	"data-cell-type": "alert-tag",
	children: /* @__PURE__ */ t(e, {
		level: n.level,
		text: n.label
	})
});
//#endregion
export { n as AlertTagCell };
