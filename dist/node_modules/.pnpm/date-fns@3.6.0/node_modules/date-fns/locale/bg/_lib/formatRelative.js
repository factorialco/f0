import { isSameWeek as a } from "../../../isSameWeek.js";
import { toDate as c } from "../../../toDate.js";
const o = [
  "неделя",
  "понеделник",
  "вторник",
  "сряда",
  "четвъртък",
  "петък",
  "събота"
];
function u(e) {
  const t = o[e];
  switch (e) {
    case 0:
    case 3:
    case 6:
      return "'миналата " + t + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'миналия " + t + " в' p";
  }
}
function i(e) {
  const t = o[e];
  return e === 2 ? "'във " + t + " в' p" : "'в " + t + " в' p";
}
function f(e) {
  const t = o[e];
  switch (e) {
    case 0:
    case 3:
    case 6:
      return "'следващата " + t + " в' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следващия " + t + " в' p";
  }
}
const k = (e, t, r) => {
  const n = c(e), s = n.getDay();
  return a(n, t, r) ? i(s) : u(s);
}, p = (e, t, r) => {
  const n = c(e), s = n.getDay();
  return a(n, t, r) ? i(s) : f(s);
}, m = {
  lastWeek: k,
  yesterday: "'вчера в' p",
  today: "'днес в' p",
  tomorrow: "'утре в' p",
  nextWeek: p,
  other: "P"
}, W = (e, t, r, n) => {
  const s = m[e];
  return typeof s == "function" ? s(t, r, n) : s;
};
export {
  W as formatRelative
};
