import { WeekStartDay as e } from "../../types.js";
import { endOfISOWeek as t, endOfWeek as n, isSameISOWeek as r, isSameWeek as i, startOfISOWeek as a, startOfWeek as o } from "date-fns";
//#region src/components/OneCalendar/granularities/week/weekUtils.ts
var s = (t, n) => n === e.Monday ? a(t) : o(t, { weekStartsOn: n }), c = (r, i) => i === e.Monday ? t(r) : n(r, { weekStartsOn: i }), l = (t, n, a) => a === e.Monday ? r(t, n) : i(t, n, { weekStartsOn: a });
//#endregion
export { c as getEndOfWeek, l as getIsSameWeek, s as getStartOfWeek };
