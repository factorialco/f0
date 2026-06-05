import { isSameWeek as n } from "../../../isSameWeek.js";
import { toDate as o } from "../../../toDate.js";
const r = [
  "нядзелю",
  "панядзелак",
  "аўторак",
  "сераду",
  "чацвер",
  "пятніцу",
  "суботу"
];
function u(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у мінулую " + t + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у мінулы " + t + " а' p";
  }
}
function i(e) {
  return "'у " + r[e] + " а' p";
}
function f(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступную " + t + " а' p";
    case 1:
    case 2:
    case 4:
      return "'у наступны " + t + " а' p";
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
  yesterday: "'учора а' p",
  today: "'сёння а' p",
  tomorrow: "'заўтра а' p",
  nextWeek: p,
  other: "P"
}, W = (e, t, c, s) => {
  const a = m[e];
  return typeof a == "function" ? a(t, c, s) : a;
};
export {
  W as formatRelative
};
