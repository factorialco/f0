import { cn as e } from "../../../../lib/utils.js";
import { tableDisplayClassNames as t } from "../../const.js";
import { formatDateValue as n, isShowingPlaceholder as r } from "../../utils.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/ui/value-display/types/date/date.tsx
var a = (a, o) => {
	let s = n(a), c = r(a, "date");
	return /* @__PURE__ */ i("div", {
		className: e("monospace text-f1-foreground", c && "text-f1-foreground-secondary", o.visualization === "table" && t.text),
		children: s
	});
};
//#endregion
export { a as DateCell };
