import { cn as e } from "../../../../lib/utils.js";
import { OneEllipsis as t } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { tableDisplayClassNames as n } from "../../const.js";
import { isShowingPlaceholder as r, resolveValue as i } from "../../utils.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/text/text.tsx
var o = (o, s) => {
	let c = i(o, "text"), l = r(o, "text"), u = c?.toString() ?? "";
	return /* @__PURE__ */ a(t, {
		lines: 1,
		tag: "span",
		className: e("text-f1-foreground", l && "text-f1-foreground-secondary", s.visualization === "table" && n.text),
		children: u
	});
};
//#endregion
export { o as TextCell };
