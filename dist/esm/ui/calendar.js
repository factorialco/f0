import { cn as e } from "../lib/utils.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
import { ChevronLeft as n, ChevronRight as r } from "lucide-react";
import { DayPicker as i } from "react-day-picker";
//#region src/ui/calendar.tsx
function a({ className: a, classNames: o, showOutsideDays: s = !0, compact: c = !1, ...l }) {
	return /* @__PURE__ */ t(i, {
		showOutsideDays: s,
		fixedWeeks: l.fixedWeeks,
		className: a,
		disabled: l.disabled,
		classNames: {
			months: "flex flex-col",
			caption: "hidden",
			nav: "space-x-1 flex items-center",
			nav_button_previous: "absolute left-1",
			nav_button_next: "absolute right-1",
			table: "w-full border-collapse",
			head_row: e("flex items-center", l.showWeekNumber ? "justify-start" : "justify-between"),
			head_cell: e("text-f1-foreground-secondary rounded-xs font-medium flex justify-center items-center", l.showWeekNumber && c ? "w-[30px] flex-shrink-0" : "w-full", c ? "h-6 text-sm" : "h-8 text-md"),
			row: e("flex w-full items-center", l.showWeekNumber ? "justify-start" : "justify-between", c ? "mt-1" : "mt-2"),
			cell: e("text-center font-medium p-0 relative text-f1-foreground transition-all duration-100", l.showWeekNumber && c ? "w-[30px] flex-shrink-0" : "w-full", c ? "rounded-sm h-7 text-md" : "rounded-md h-10 text-md", "before:absolute before:inset-0 before:z-0 before:bg-f1-background-selected-bold before:opacity-0 before:transition-all before:duration-100 before:content-[''] hover:before:bg-f1-background-selected-bold-hover before:pointer-events-none", c ? "before:rounded-sm" : "before:rounded-md", "[&:has([aria-selected].day-range-start)]:before:opacity-100 [&:has([aria-selected].day-range-end)]:before:opacity-100", "[&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none [&:has([aria-selected].day-range-start.day-range-end)]:rounded-md [&:has([aria-selected].day-range-middle)]:bg-f1-background-selected", c ? "first:[&:has([aria-selected].day-range-middle)]:rounded-l-sm last:[&:has([aria-selected].day-range-middle)]:rounded-r-sm first:[&:has([aria-selected].day-range-end)]:rounded-r-sm first:[&:has([aria-selected].day-range-end)]:rounded-l-sm last:[&:has([aria-selected].day-range-start)]:rounded-l-sm last:[&:has([aria-selected].day-range-start)]:rounded-r-sm" : "first:[&:has([aria-selected].day-range-middle)]:rounded-l-md last:[&:has([aria-selected].day-range-middle)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-r-md", "[&:has([aria-selected].day-range-start)]:bg-f1-background-selected [&:has([aria-selected].day-range-end)]:bg-f1-background-selected", e("[&>span.rdp-weeknumber]:text-f1-foreground-secondary [&>span.rdp-weeknumber]:flex [&>span.rdp-weeknumber]:items-center [&>span.rdp-weeknumber]:justify-center [&>span.rdp-weeknumber]:h-full [&>span.rdp-weeknumber]:font-normal", c ? "[&>span.rdp-weeknumber]:w-[30px] [&>span.rdp-weeknumber]:flex-shrink-0" : "[&>span.rdp-weeknumber]:w-7 [&>span.rdp-weeknumber]:flex-shrink-0", "[&>span.rdp-weeknumber]:text-md"), l.mode === "single" && "[&:has([aria-selected].day-selected)]:before:opacity-100", l.showWeekNumber && "[&:has([aria-selected].day-range-middle)]:bg-f1-background-selected-bold [&:has([aria-selected].day-range-start)]:bg-f1-background-selected-bold [&:has([aria-selected].day-range-end)]:bg-f1-background-selected-bold hover:before:bg-f1-background-selected-bold"),
			day: e("rounded-[inherit] p-0 text-f1-foreground aria-selected:opacity-100 z-20 relative", c ? l.showWeekNumber ? "h-7 w-[30px] text-sm" : "h-7 w-7 text-sm" : "h-10 w-10 text-md"),
			day_range_start: "day-range-start aria-selected:text-f1-foreground-inverse",
			day_range_end: "day-range-end aria-selected:text-f1-foreground-inverse",
			day_today: e("relative after:absolute after:inset-x-0 after:z-20 after:mx-auto after:rounded-full after:bg-f1-background-selected-bold after:transition-colors after:duration-100 after:content-[''] after:pointer-events-none aria-selected:after:bg-f1-background", c ? "after:bottom-0.5 after:h-0.5 after:w-1" : "after:bottom-1 after:h-0.5 after:w-1.5"),
			day_selected: e("day-selected", l.mode === "single" && "aria-selected:text-f1-foreground-inverse"),
			day_outside: "day-outside text-f1-foreground-secondary font-normal",
			day_disabled: "text-f1-foreground-disabled",
			day_range_middle: e("day-range-middle aria-selected:text-f1-foreground-selected", l.showWeekNumber && "aria-selected:text-f1-foreground-inverse"),
			day_hidden: "invisible",
			...o
		},
		modifiers: {
			...l.modifiers,
			...c && { hideLastWeek: (e) => {
				let t = new Date(e.getFullYear(), e.getMonth() + 1, 1);
				return e.getMonth() === t.getMonth();
			} }
		},
		modifiersClassNames: {
			...l.modifiersClassNames,
			...c && { hideLastWeek: "hidden" }
		},
		components: {
			IconLeft: () => /* @__PURE__ */ t(n, { className: c ? "h-3 w-3" : "h-4 w-4" }),
			IconRight: () => /* @__PURE__ */ t(r, { className: c ? "h-3 w-3" : "h-4 w-4" })
		},
		...l
	});
}
a.displayName = "Calendar";
//#endregion
export { a as Calendar };
