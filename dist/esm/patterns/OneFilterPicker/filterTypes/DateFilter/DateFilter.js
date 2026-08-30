"use client";
import { F0Button as e } from "../../../../components/F0Button/F0Button.js";
import { OneCalendarInternal as t } from "../../../../components/OneCalendar/OneCalendar.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/DateFilter/DateFilter.tsx
function a({ value: a, onChange: o, schema: s, isCompactMode: c }) {
	let l = {
		mode: "single",
		view: "day",
		...s.options
	}, u = () => {
		o(void 0);
	};
	return /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r("div", {
		className: "space-y-4 overflow-x-hidden p-3",
		children: /* @__PURE__ */ r(t, {
			defaultSelected: a || l.defaultSelected,
			onSelect: (e) => o(e ?? void 0),
			view: l.view,
			mode: l.mode,
			compact: c,
			showInput: !0
		})
	}), !c && /* @__PURE__ */ r("div", {
		className: "sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]",
		children: /* @__PURE__ */ r(e, {
			variant: "ghost",
			label: "Clear",
			onClick: () => u(),
			disabled: !a,
			size: "sm"
		})
	})] });
}
//#endregion
export { a as DateFilter };
