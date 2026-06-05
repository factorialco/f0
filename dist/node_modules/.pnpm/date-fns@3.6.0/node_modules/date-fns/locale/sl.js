import { formatDistance as o } from "./sl/_lib/formatDistance.js";
import { formatLong as t } from "./sl/_lib/formatLong.js";
import { formatRelative as a } from "./sl/_lib/formatRelative.js";
import { localize as r } from "./sl/_lib/localize.js";
import { match as m } from "./sl/_lib/match.js";
const n = {
  code: "sl",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  n as default,
  n as sl
};
