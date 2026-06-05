import { differenceInDays as c } from "../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/differenceInDays.js";
import { isToday as u } from "../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isToday.js";
import { isYesterday as i } from "../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isYesterday.js";
import { formatDate as a } from "../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
import { formatDistanceToNowStrict as m } from "../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/formatDistanceToNowStrict.js";
function h(t) {
  return a(t, "p");
}
function d(t) {
  return a(t, "HH:mm");
}
function M(t) {
  return a(t, "LLL");
}
function T(t) {
  return t.getDate();
}
function f(t, o = !0) {
  return m(t, { addSuffix: o });
}
function b(t, { yesterdayRelative: o = !0 } = {}) {
  return u(t) ? f(t) : i(t) ? o ? f(t) : a(t, "p") : a(t, "PPPp");
}
const H = (t, o) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return t.forEach((e) => {
    const n = e[o], s = Math.abs(c(n, /* @__PURE__ */ new Date()));
    u(n) ? r.today.push(e) : i(n) ? r.yesterday.push(e) : s <= 7 ? r.lastWeek.push(e) : s <= 30 ? r.lastMonth.push(e) : r[n.getFullYear()] = [...r[n.getFullYear()] || [], e];
  }), r;
};
export {
  H as categorizeItemsByDate,
  h as formatTime,
  d as formatTime24Hours,
  M as getAbbreviateMonth,
  f as getAgo,
  T as getDayOfMonth,
  b as getDisplayDateBasedOnDuration
};
