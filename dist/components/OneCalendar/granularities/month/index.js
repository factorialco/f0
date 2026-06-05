import { jsx as M } from "react/jsx-runtime";
import "react";
import "../../../../node_modules/.pnpm/number-flow@0.5.8/node_modules/number-flow/dist/lite-BTIaQdTe.js";
import { N as d } from "../../../../node_modules/.pnpm/@number-flow_react@0.5.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@number-flow/react/dist/NumberFlow-client-48rw3j0J.js";
import { formatToPlaceholder as x, formatDateRange as F, toDateRangeString as v, isBeforeOrEqual as w, isAfterOrEqual as N, toGranularityDateRange as R, formatDateToString as T } from "../../utils.js";
import { rangeSeparator as y } from "../consts.js";
import { MonthView as O } from "./MonthView.js";
import { startOfMonth as l } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js";
import { addYears as Y } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addYears.js";
import { addMonths as h } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.js";
import { endOfMonth as D } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.js";
import { parse as S } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/parse.js";
import { isSameMonth as b } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js";
import { isSameYear as G } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
const p = "MM/yyyy";
function a(t) {
  return R(t, l, D);
}
const g = (t, o) => ({
  from: l(h(t.from, o)),
  to: D(h(t.to, o))
}), $ = (t) => T(t, p), V = (t, o = "en-US") => {
  const r = a(t);
  if (!r)
    return "";
  const e = (n) => new Intl.DateTimeFormat(o, {
    month: "long",
    year: "numeric"
  }).format(n);
  return !r.to || b(r.from, r.to) ? e(r.from) : G(r.from, r.to) ? `${new Intl.DateTimeFormat(o, {
    month: "long"
  }).format(r.from)} ${y} ${e(r.to)}` : `${e(r.from)} ${y} ${e(r.to)}`;
}, J = {
  calendarView: "month",
  add: g,
  getPrevNext: (t, o) => {
    const r = a(t);
    if (!r)
      return { prev: !1, next: !1 };
    const { from: e, to: n } = r, { from: u, to: s } = g({ from: e, to: n }, -1), { from: m, to: i } = g({ from: e, to: n }, 1), f = o.min && l(o.min), c = o.max && D(o.max);
    return {
      prev: N(u, f) ? { from: u, to: s } : !1,
      next: w(i, c) ? { from: m, to: i } : !1
    };
  },
  toRangeString: (t) => F(t, "MM/yyyy"),
  toRange: (t) => a(t),
  toString: (t, o, r = "default", e = "en-US") => {
    const n = {
      default: $(t),
      long: V(t, e)
    };
    return n[r] ?? n.default;
  },
  toStringMaxWidth: () => 140,
  placeholder: () => x(p),
  fromString: (t) => {
    const o = v(t);
    if (!o)
      return null;
    const { from: r, to: e } = o, n = (u) => {
      const s = u.trim(), [m, i] = s.split(/[/.-\s+]/), f = isNaN(Number(i)) ? (/* @__PURE__ */ new Date()).getFullYear() : +i, c = S(m, "MMMM", (/* @__PURE__ */ new Date()).setFullYear(f)).getMonth() + 1 || S(m, "MMM", (/* @__PURE__ */ new Date()).setFullYear(f)).getMonth() + 1 || Number(m);
      return new Date(Number(f), Number(c) - 1, 1);
    };
    return a({
      from: n(r),
      to: e ? n(e) : void 0
    });
  },
  navigate: (t, o) => h(t, o),
  navigateUIView: (t, o) => Y(t, o),
  label: (t) => /* @__PURE__ */ M(
    d,
    {
      format: {
        useGrouping: !1,
        maximumFractionDigits: 0
      },
      spinTiming: {
        duration: 150
      },
      value: t.getFullYear()
    }
  ),
  getViewDateFromDate: (t) => l(t),
  render: (t) => {
    const o = a(t.minDate), r = a(t.maxDate);
    return /* @__PURE__ */ M(
      O,
      {
        mode: t.mode,
        year: t.viewDate.getFullYear(),
        selected: t.selected,
        onSelect: t.onSelect,
        motionDirection: t.motionDirection,
        minDate: o ? o.from : void 0,
        maxDate: r ? r.to : void 0,
        compact: t.compact
      }
    );
  }
};
export {
  J as monthGranularity,
  a as toMonthGranularityDateRange
};
