import { isSameWeek as n } from "../../../isSameWeek.js";
const r = [
  "недела",
  "понеделник",
  "вторник",
  "среда",
  "четврток",
  "петок",
  "сабота"
];
function u(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 6:
      return "'минатата " + t + " во' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'минатиот " + t + " во' p";
  }
}
function o(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 6:
      return "'ова " + t + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'овој " + t + " вo' p";
  }
}
function i(e) {
  const t = r[e];
  switch (e) {
    case 0:
    case 3:
    case 6:
      return "'следната " + t + " вo' p";
    case 1:
    case 2:
    case 4:
    case 5:
      return "'следниот " + t + " вo' p";
  }
}
const f = {
  lastWeek: (e, t, c) => {
    const s = e.getDay();
    return n(e, t, c) ? o(s) : u(s);
  },
  yesterday: "'вчера во' p",
  today: "'денес во' p",
  tomorrow: "'утре во' p",
  nextWeek: (e, t, c) => {
    const s = e.getDay();
    return n(e, t, c) ? o(s) : i(s);
  },
  other: "P"
}, k = (e, t, c, s) => {
  const a = f[e];
  return typeof a == "function" ? a(t, c, s) : a;
};
export {
  k as formatRelative
};
