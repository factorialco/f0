import { formatDistance as o } from "./lb/_lib/formatDistance.js";
import { formatLong as t } from "./lb/_lib/formatLong.js";
import { formatRelative as a } from "./lb/_lib/formatRelative.js";
import { localize as r } from "./lb/_lib/localize.js";
import { match as m } from "./lb/_lib/match.js";
const c = {
  code: "lb",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  c as default,
  c as lb
};
