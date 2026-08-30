import { ToggleGroup as e, ToggleGroupItem as t } from "../../../../deprecated/ToggleGroup/ToggleGroup.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Widgets/Content/Weekdays/index.tsx
var i = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
], a = n(function({ daysOfTheWeek: n = i, activatedDays: a = [] }, o) {
	let s = a.map((e) => `${e}-${n[e]}`);
	return /* @__PURE__ */ r(e, {
		type: "multiple",
		value: s,
		disabled: !0,
		className: "flex justify-start",
		ref: o,
		children: n.map((e, n) => /* @__PURE__ */ r(t, {
			"aria-label": e,
			value: `${n}-${e}`,
			className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
			children: e[0]
		}, n))
	});
});
//#endregion
export { a as Weekdays };
