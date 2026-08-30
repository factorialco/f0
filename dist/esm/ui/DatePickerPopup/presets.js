import { granularityDefinitions as e } from "../../components/OneCalendar/granularities/index.js";
import { subDays as t, subMonths as n, subYears as r } from "date-fns";
//#region src/ui/DatePickerPopup/presets.ts
var i = {
	today: {
		label: "Today",
		granularity: "day",
		value: () => e.day.toRange(/* @__PURE__ */ new Date())
	},
	yesterday: {
		label: "Yesterday",
		granularity: "day",
		value: () => e.day.toRange(t(/* @__PURE__ */ new Date(), 1))
	},
	last7Days: {
		label: "Last 7 days",
		granularity: "day",
		value: () => e.day.toRange({
			from: t(/* @__PURE__ */ new Date(), 7),
			to: /* @__PURE__ */ new Date()
		})
	},
	thisWeek: {
		label: "This week",
		granularity: "week",
		value: () => e.week.toRange(/* @__PURE__ */ new Date())
	},
	lastWeek: {
		label: "Last week",
		granularity: "week",
		value: () => e.week.toRange(t(/* @__PURE__ */ new Date(), 7))
	},
	thisMonth: {
		label: "This month",
		granularity: "month",
		value: () => e.month.toRange(/* @__PURE__ */ new Date())
	},
	lastMonth: {
		label: "Last month",
		granularity: "month",
		value: () => e.month.toRange(n(/* @__PURE__ */ new Date(), 1))
	},
	last3Months: {
		label: "Last 3 months",
		granularity: "month",
		value: () => e.month.toRange(n(/* @__PURE__ */ new Date(), 3))
	},
	last6Months: {
		label: "Last 6 months",
		granularity: "month",
		value: () => e.month.toRange(n(/* @__PURE__ */ new Date(), 6))
	},
	thisQuarter: {
		label: "This quarter",
		granularity: "quarter",
		value: () => e.quarter.toRange(/* @__PURE__ */ new Date())
	},
	lastQuarter: {
		label: "Last quarter",
		granularity: "quarter",
		value: () => e.quarter.toRange(n(/* @__PURE__ */ new Date(), 3))
	},
	thisHalfYear: {
		label: "This half year",
		granularity: "halfyear",
		value: () => e.halfyear.toRange(/* @__PURE__ */ new Date())
	},
	lastHalfYear: {
		label: "Last half year",
		granularity: "halfyear",
		value: () => e.halfyear.toRange(n(/* @__PURE__ */ new Date(), 6))
	},
	lastYear: {
		label: "Last year",
		granularity: "year",
		value: () => e.year.toRange(r(/* @__PURE__ */ new Date(), 1))
	},
	last3Years: {
		label: "Last 3 years",
		granularity: "year",
		value: () => e.year.toRange(r(/* @__PURE__ */ new Date(), 3))
	}
};
//#endregion
export { i as predefinedPresets };
