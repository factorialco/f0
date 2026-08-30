import { cn as e } from "../../../../lib/utils.js";
import { gaps as t } from "../shared.js";
import { FlexBox as n } from "../_FlexBox.js";
import r from "react";
import { cva as i } from "cva";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Utilities/Layout/Split/index.tsx
var o = i({
	base: "flex-row",
	variants: {
		gap: { ...t },
		wrap: { true: "flex-wrap" }
	},
	defaultVariants: { wrap: !0 }
}), s = r.forwardRef(function({ className: t, gap: r, wrap: i, ...s }, c) {
	return /* @__PURE__ */ a(n, {
		className: e(o({
			gap: r,
			wrap: i
		}), t),
		ref: c,
		...s
	});
});
//#endregion
export { s as Split };
