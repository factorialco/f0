import { granularityDefinitions as a } from "../../components/OneCalendar/granularities/index.js";
import { subYears as r } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subYears.js";
import { subMonths as e } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.js";
import { subDays as t } from "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subDays.js";
const u = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => a.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => a.day.toRange(t(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => a.day.toRange({
      from: t(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => a.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => a.week.toRange(t(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => a.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => a.month.toRange(e(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => a.month.toRange(e(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => a.month.toRange(e(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => a.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => a.quarter.toRange(e(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => a.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => a.halfyear.toRange(e(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => a.year.toRange(r(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => a.year.toRange(r(/* @__PURE__ */ new Date(), 3))
  }
};
export {
  u as predefinedPresets
};
