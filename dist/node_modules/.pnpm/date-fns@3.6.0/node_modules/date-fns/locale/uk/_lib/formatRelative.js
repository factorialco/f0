import { isSameWeek as n } from "../../../isSameWeek.js";
import { toDate as o } from "../../../toDate.js";
const r = [
  "неділю",
  "понеділок",
  "вівторок",
  "середу",
  "четвер",
  "п’ятницю",
  "суботу"
];
function u(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + t + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + t + " о' p";
  }
}
function i(e) {
  return "'у " + r[e] + " о' p";
}
function f(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + t + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + t + " о' p";
  }
}
const k = (e, t, c) => {
  const s = o(e), a = s.getDay();
  return n(s, t, c) ? i(a) : u(a);
}, p = (e, t, c) => {
  const s = o(e), a = s.getDay();
  return n(s, t, c) ? i(a) : f(a);
}, m = {
  lastWeek: k,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: p,
  other: "P"
}, W = (e, t, c, s) => {
  const a = m[e];
  return typeof a == "function" ? a(t, c, s) : a;
};
export {
  W as formatRelative
};
