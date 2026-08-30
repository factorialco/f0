import { cn as e } from "../lib/utils.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/separator.tsx
var r = t(function({ bare: t = !1, ...r }, i) {
	return /* @__PURE__ */ n("div", {
		ref: i,
		role: "separator",
		className: e("-mx-4 h-[1px]", t ? void 0 : "my-4"),
		style: { backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)" },
		...r
	});
});
//#endregion
export { r as Separator };
