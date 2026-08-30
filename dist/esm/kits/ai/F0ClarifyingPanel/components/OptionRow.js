import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Checkbox as n } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { RadioIndicator as r } from "./RadioIndicator.js";
import { forwardRef as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/kits/ai/F0ClarifyingPanel/components/OptionRow.tsx
var s = i(({ option: i, isSelected: s, mode: c, isTabStop: l, onToggle: u, onKeyNavigate: d }, f) => c === "single" ? /* @__PURE__ */ o("div", {
	ref: f,
	role: "radio",
	"aria-checked": s,
	tabIndex: l ? 0 : -1,
	className: e("flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary", t()),
	onClick: () => u(i.id),
	onKeyDown: (e) => {
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault(), u(i.id);
			return;
		}
		d?.(e);
	},
	children: [/* @__PURE__ */ a(r, { isSelected: s }), /* @__PURE__ */ a("span", {
		className: "text-base font-medium text-f1-foreground",
		children: i.label
	})]
}) : /* @__PURE__ */ o("div", {
	ref: f,
	className: e("flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"),
	children: [/* @__PURE__ */ a(n, {
		checked: s,
		onCheckedChange: () => u(i.id),
		title: i.label,
		hideLabel: !0
	}), /* @__PURE__ */ a("span", {
		className: "w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground",
		onClick: () => u(i.id),
		children: i.label
	})]
}));
s.displayName = "OptionRow";
//#endregion
export { s as OptionRow };
