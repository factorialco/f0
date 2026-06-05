import { jsx as v } from "react/jsx-runtime";
import { formatToPlaceholder as R, formatDateRange as p, toDateRangeString as F, formatDateToString as x, isBeforeOrEqual as S, isAfterOrEqual as Y, toGranularityDateRange as h } from "../../utils.js";
import { rangeSeparator as w } from "../consts.js";
import { YearView as G } from "./YearView.js";
import { addYears as l } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.js";
import { startOfYear as c } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfYear.js";
import { endOfYear as g } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.js";
import { parse as O } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.js";
const f = "yyyy";
function n(t) {
  return h(t, c, g);
}
const u = (t, r) => ({
  from: c(l(t.from, r)),
  to: g(l(t.to, r))
}), _ = {
  calendarView: "year",
  add: u,
  getPrevNext: (t, r) => {
    const e = n(t);
    if (!e)
      return { prev: !1, next: !1 };
    const { from: a, to: o } = e, { from: m, to: i } = u({ from: a, to: o }, -1), { from: s, to: d } = u({ from: a, to: o }, 1), D = r.min && c(r.min), y = r.max && g(r.max);
    return {
      prev: Y(m, D) && Y(i, D) ? { from: m, to: i } : !1,
      next: S(d, y) && S(s, y) ? { from: s, to: d } : !1
    };
  },
  toRange: (t) => n(t),
  toRangeString: (t) => p(t, f),
  toString: (t, r, e = "default") => {
    const a = {
      default: x(t, f),
      long: x(t, f)
      // For years, long format is the same as default
    };
    return a[e] ?? a.default;
  },
  toStringMaxWidth: () => 70,
  placeholder: () => R(f),
  fromString: (t) => {
    const r = F(t);
    if (!r)
      return null;
    const { from: e, to: a } = r, o = (m) => {
      const i = m.trim();
      return O(i, "yyyy", /* @__PURE__ */ new Date());
    };
    return n({
      from: o(e),
      to: a ? o(a) : void 0
    });
  },
  getViewDateFromDate: (t) => c(t),
  navigate: (t, r) => l(t, r),
  navigateUIView: (t, r) => l(t, r * 10),
  label: (t) => {
    const r = t.getFullYear() - t.getFullYear() % 10, e = r + 9;
    return `${r} ${w} ${e}`;
  },
  render: (t) => {
    const r = n(t.minDate), e = n(t.maxDate);
    return /* @__PURE__ */ v(
      G,
      {
        mode: t.mode,
        decade: t.viewDate.getFullYear(),
        selected: t.selected,
        onSelect: t.onSelect,
        motionDirection: t.motionDirection,
        minDate: r ? r.from : void 0,
        maxDate: e ? e.to : void 0
      }
    );
  }
};
export {
  n as toYearGranularityDateRange,
  _ as yearGranularity
};
