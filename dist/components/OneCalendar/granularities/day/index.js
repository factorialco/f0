import { jsx as v } from "react/jsx-runtime";
import { formatToPlaceholder as w, formatDateRange as N, toDateRangeString as R, formatDateToString as $, isBeforeOrEqual as O, isAfterOrEqual as T, toGranularityDateRange as F, formatDate as a } from "../../utils.js";
import { rangeSeparator as l } from "../consts.js";
import { DayView as G } from "./DayView.js";
import { endOfDay as g } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfDay.js";
import { startOfMonth as b } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js";
import { addMonths as V } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js";
import { addDays as M } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.js";
import { startOfDay as S } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.js";
import { parse as p } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.js";
import { isSameDay as A } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameDay.js";
import { isSameMonth as W } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js";
import { isSameYear as _ } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
const s = "dd/MM/yyyy";
function n(t) {
  return F(t, S, g);
}
const D = (t, o) => ({
  from: S(M(t.from, o)),
  to: g(M(t.to, o))
}), k = (t) => {
  const o = n(t);
  return o ? !o.to || A(o.from, o.to) ? a(o.from, "dd MMM yyyy") : W(o.from, o.to) ? `${a(o.from, "dd")} ${l} ${a(o.to, "dd MMM yyyy")}` : _(o.from, o.to) ? `${a(o.from, "dd MMM")} ${l} ${a(o.to, "dd MMM yyyy")}` : `${a(o.from, "dd MMM yyyy")} ${l} ${a(o.to, "dd MMM yyyy")}` : "";
}, Q = {
  calendarView: "day",
  add: D,
  getPrevNext: (t, o) => {
    const r = n(t);
    if (!r)
      return {
        prev: !1,
        next: !1
      };
    const { from: e, to: m } = r, { from: y, to: i } = D({ from: e, to: m }, -1), { from: c, to: f } = D({ from: e, to: m }, 1), u = o.min && S(o.min), d = o.max && g(o.max);
    return {
      prev: T(y, u) ? { from: y, to: i } : !1,
      next: O(f, d) ? { from: c, to: f } : !1
    };
  },
  toRange: (t) => n(t),
  toRangeString: (t) => N(t, s),
  toString: (t, o, r = "default") => {
    const e = {
      default: $(t, s),
      long: k(t)
    };
    return e[r] ?? e.default;
  },
  toStringMaxWidth: () => 160,
  placeholder: () => w(s),
  fromString: (t) => {
    const o = R(t);
    if (!o)
      return null;
    const { from: r, to: e } = o, m = (y) => {
      const i = y.trim(), c = /* @__PURE__ */ new Date(), f = p(i, "d MMM yyyy", c);
      if (!isNaN(f.getTime()))
        return f;
      const u = p(i, s, c);
      if (!isNaN(u.getTime()))
        return u;
      const [d, h, x] = i.split(/[/.-]/);
      return !d || !h || !x ? /* @__PURE__ */ new Date(NaN) : new Date(Number(x), Number(h) - 1, Number(d));
    };
    return n({
      from: m(r),
      to: e ? m(e) : void 0
    });
  },
  navigate: (t, o) => M(t, o),
  navigateUIView: (t, o) => V(t, o),
  getViewDateFromDate: (t) => b(t),
  label: (t, o, r = "en-US") => new Intl.DateTimeFormat(r, {
    month: "long",
    year: "numeric"
  }).format(t),
  render: (t) => {
    const o = n(t.minDate), r = n(t.maxDate);
    return /* @__PURE__ */ v(
      G,
      {
        mode: t.mode,
        selected: t.selected,
        onSelect: t.onSelect,
        month: t.month,
        onMonthChange: t.onMonthChange,
        motionDirection: t.motionDirection,
        minDate: o ? o.from : void 0,
        maxDate: r ? r.to : void 0,
        compact: t.compact,
        weekStartsOn: t.weekStartsOn
      }
    );
  }
};
export {
  s as DAY_FORMAT,
  Q as dayGranularity,
  n as toDayGranularityDateRange
};
