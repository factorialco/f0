import { cn as e } from "../../../../lib/utils.js";
import { OneEllipsis as t } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { tableDisplayClassNames as n } from "../../const.js";
import { isShowingPlaceholder as r, resolveValue as i } from "../../utils.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/longText/longText.tsx
var o = (e) => typeof e == "object" && e && "lines" in e ? e.lines : void 0, s = (e) => (typeof e == "object" && !!e && "full" in e && e.full) ?? !1, c = (c, l) => {
	let u = i(c, "text")?.toString() || "", d = r(c, "text"), f = s(c), p = o(c) || 3;
	return /* @__PURE__ */ a(t, {
		className: e("whitespace-pre-wrap break-words text-f1-foreground", d && "text-f1-foreground-secondary", l.visualization === "table" && n.multiline),
		lines: p,
		disabled: f,
		children: u
	});
};
//#endregion
export { c as LongTextCell };
