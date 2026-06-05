import { jsx as D } from "react/jsx-runtime";
import { WeekStartDay as i } from "../../types.js";
import { formatToPlaceholder as O, toDateRangeString as $, formatDateRange as x, isBeforeOrEqual as v, isAfterOrEqual as I, toGranularityDateRange as R } from "../../utils.js";
import { rangeSeparator as g } from "../consts.js";
import { WeekView as F } from "./WeekView.js";
import { isSameISOWeek as G } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameISOWeek.js";
import { isSameWeek as T } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameWeek.js";
import { addMonths as E } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js";
import { addDays as h } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.js";
import { startOfMonth as N } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js";
import { parse as V } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.js";
import { formatDate as a } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
import { isSameMonth as b } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js";
import { isSameYear as W } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
import { startOfISOWeek as q } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfISOWeek.js";
import { startOfWeek as A } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.js";
import { endOfISOWeek as C } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfISOWeek.js";
import { endOfWeek as U } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfWeek.js";
const y = "'W'I yyyy", S = (o, t) => t === i.Monday ? q(o) : A(o, { weekStartsOn: t }), p = (o, t) => t === i.Monday ? C(o) : U(o, { weekStartsOn: t }), w = (o, t, r) => r === i.Monday ? G(o, t) : T(o, t, { weekStartsOn: r });
function f(o, t = i.Monday) {
  return R(
    o,
    (r) => S(r, t),
    (r) => p(r, t)
  );
}
const k = (o, t, r = i.Monday) => ({
  from: S(h(o.from, t * 7), r),
  to: p(h(o.to, t * 7), r)
}), Y = (o, t = i.Monday) => {
  const r = f(o, t);
  return r ? !r.to || w(r.from, r.to, t) ? a(r.from, y) : W(r.from, r.to) ? `${a(r.from, "'W'I")} ${g} ${a(r.to, y)}` : `${a(r.from, y)} ${g} ${a(r.to, y)}` : "";
}, _ = (o, t, r = i.Monday) => {
  const e = f(o, r);
  if (!e)
    return "";
  const n = (u, c = "singular") => (t[c] || "").replace("{{date}}", u);
  if (!e.to || w(e.from, e.to, r))
    return n(a(e.from, "d MMM yyyy"));
  const m = S(e.to, r);
  return b(e.from, e.to) ? `${n(a(e.from, "d"), "plural")} ${g} ${n(a(m, "d MMM yyyy"))}` : W(e.from, e.to) ? `${n(a(e.from, "d MMM"), "plural")} ${g} ${n(a(m, "d MMM yyyy"))}` : `${n(a(e.from, "d MMM yyyy"), "plural")} ${g} ${n(a(m, "d MMM yyyy"))}`;
}, j = (o = i.Monday) => ({
  weekStartsOn: o,
  calendarView: "week",
  add: function(t, r) {
    return k(t, r, this.weekStartsOn);
  },
  getPrevNext: function(t, r) {
    const e = f(t, this.weekStartsOn);
    if (!e)
      return { prev: !1, next: !1 };
    const { from: n, to: s } = e, { from: m, to: u } = k(
      { from: n, to: s },
      -1,
      this.weekStartsOn
    ), { from: c, to: l } = k(
      { from: n, to: s },
      1,
      this.weekStartsOn
    ), d = r.min && S(r.min, this.weekStartsOn ?? i.Monday), M = r.max && p(r.max, this.weekStartsOn ?? i.Monday);
    return {
      prev: I(m, d) ? { from: m, to: u } : !1,
      next: v(l, M) ? { from: c, to: l } : !1
    };
  },
  toRangeString: function(t) {
    return x(t, "'W'I yyyy");
  },
  toRange: function(t) {
    return f(t, this.weekStartsOn);
  },
  toString: function(t, r, e = "default") {
    const n = {
      default: Y(t, this.weekStartsOn),
      long: _(
        t,
        {
          singular: r.date.granularities.week.longSingular,
          plural: r.date.granularities.week.longPlural
        },
        this.weekStartsOn
      )
    };
    return n[e] ?? n.default;
  },
  toStringMaxWidth: function() {
    return 240;
  },
  placeholder: () => O(y),
  fromString: function(t) {
    const r = $(t);
    if (!r)
      return null;
    const { from: e, to: n } = r, s = (m) => {
      const u = m.trim(), [c, l] = u.split(/\s+/), d = isNaN(Number(l)) ? (/* @__PURE__ */ new Date()).getFullYear() : +l, M = Number(c.replace(/[wW\s]/g, ""));
      return V(`${M}`, "I", new Date(d, 0, 1));
    };
    return f(
      {
        from: s(e),
        to: n ? s(n) : void 0
      },
      this.weekStartsOn
    );
  },
  getViewDateFromDate: function(t) {
    return N(t);
  },
  navigate: function(t, r) {
    return h(t, r * 7);
  },
  navigateUIView: function(t, r) {
    return E(t, r);
  },
  label: function(t, r, e = "en-US") {
    return new Intl.DateTimeFormat(e, {
      month: "long",
      year: "numeric"
    }).format(t);
  },
  render: function(t) {
    const r = t.weekStartsOn !== void 0 ? t.weekStartsOn : this.weekStartsOn, e = f(
      t.minDate,
      r
    ), n = f(
      t.maxDate,
      r
    );
    return /* @__PURE__ */ D(
      F,
      {
        selected: t.selected,
        onSelect: t.onSelect,
        month: t.month,
        onMonthChange: t.onMonthChange,
        motionDirection: t.motionDirection,
        minDate: e ? e.from : void 0,
        maxDate: n ? n.to : void 0,
        compact: t.compact,
        weekStartsOn: r
      }
    );
  }
}), ft = j(i.Monday);
export {
  j as createWeekGranularity,
  p as getEndOfWeek,
  w as getIsSameWeek,
  S as getStartOfWeek,
  f as toWeekGranularityDateRange,
  ft as weekGranularity
};
