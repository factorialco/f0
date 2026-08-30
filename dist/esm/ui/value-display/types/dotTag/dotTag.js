import { F0TagDot as e } from "../../../../components/tags/F0TagDot/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/ui/value-display/types/dotTag/dotTag.tsx
var n = (n) => /* @__PURE__ */ t("div", {
	"data-cell-type": "dot-tag",
	children: /* @__PURE__ */ t(e, {
		text: n.label,
		color: n.color
	})
});
//#endregion
export { n as DotTagCell };
