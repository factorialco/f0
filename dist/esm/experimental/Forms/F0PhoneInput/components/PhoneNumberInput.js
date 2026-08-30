import { cn as e } from "../../../../lib/utils.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Forms/F0PhoneInput/components/PhoneNumberInput.tsx
var r = t(({ className: t, ...r }, i) => /* @__PURE__ */ n("input", {
	ref: i,
	dir: "ltr",
	...r,
	className: e("h-full w-full min-w-0 flex-1 border-none bg-transparent pl-1 pr-3 text-f1-foreground outline-none", "placeholder:text-f1-foreground-secondary", "disabled:cursor-not-allowed", t)
}));
r.displayName = "PhoneNumberInput";
//#endregion
export { r as PhoneNumberInput };
