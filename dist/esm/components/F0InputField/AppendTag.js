import { cn as e } from "../../lib/utils.js";
import { OneEllipsis as t } from "../../lib/OneEllipsis/PlainEllipsis.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/F0InputField/AppendTag.tsx
var r = ({ text: r }) => /* @__PURE__ */ n("div", {
	className: e("flex h-[24px] max-w-20 items-center gap-2 rounded-sm border border-solid border-f1-border px-2 py-0.5 font-medium text-f1-foreground-secondary"),
	children: /* @__PURE__ */ n(t, {
		tag: "span",
		children: r
	})
});
//#endregion
export { r as AppendTag };
