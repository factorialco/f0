import { formatToPlaceholder as D, isBeforeOrEqual as h, isAfterOrEqual as v } from "../../utils.js";
import { rangeSeparator as G } from "../consts.js";
import { dayGranularity as l, toDayGranularityDateRange as O, DAY_FORMAT as T } from "../day/index.js";
import { differenceInDays as A } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInDays.js";
import { startOfDay as s } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.js";
import { endOfDay as y } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfDay.js";
import { addDays as d } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.js";
const t = (e, r) => ({
  from: s(d(e.from, r)),
  to: y(d(e.to, r))
}), c = D(T), W = {
  ...l,
  calendarMode: "range",
  placeholder: () => `${c} ${G} ${c}`,
  add: t,
  getPrevNext: (e, r) => {
    const n = O(e);
    if (!n)
      return {
        prev: !1,
        next: !1
      };
    const { from: a, to: o } = n, m = A(o, a) + 1, { from: f, to: p } = t({ from: a, to: o }, -m), { from: u, to: i } = t({ from: a, to: o }, m), x = r.min && s(r.min), g = r.max && y(r.max);
    return {
      prev: v(f, x) ? { from: f, to: p } : !1,
      next: h(i, g) ? { from: u, to: i } : !1
    };
  },
  calendarView: "day",
  render: (e) => l.render({ ...e, mode: "range" })
};
export {
  W as rangeGranularity
};
