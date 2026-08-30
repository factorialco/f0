import { cn as e } from "../../../../lib/utils.js";
import { gaps as t } from "../shared.js";
import { FlexBox as n } from "../_FlexBox.js";
import { forwardRef as r } from "react";
import { cva as i } from "cva";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Utilities/Layout/Stack/index.tsx
var o = i({
	base: "flex-col",
	variants: { gap: { ...t } },
	defaultVariants: {}
}), s = r(function({ className: t, gap: r, children: i, ...s }, c) {
	return /* @__PURE__ */ a(n, {
		className: e(o({ gap: r }), t),
		ref: c,
		...s,
		children: i
	});
});
//#endregion
export { s as Stack };
