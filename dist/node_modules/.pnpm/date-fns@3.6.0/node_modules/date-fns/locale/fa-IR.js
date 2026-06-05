import { formatDistance as o } from "./fa-IR/_lib/formatDistance.js";
import { formatLong as t } from "./fa-IR/_lib/formatLong.js";
import { formatRelative as a } from "./fa-IR/_lib/formatRelative.js";
import { localize as r } from "./fa-IR/_lib/localize.js";
import { match as m } from "./fa-IR/_lib/match.js";
const s = {
  code: "fa-IR",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as faIR
};
