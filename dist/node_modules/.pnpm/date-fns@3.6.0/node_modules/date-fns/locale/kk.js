import { formatDistance as o } from "./kk/_lib/formatDistance.js";
import { formatLong as t } from "./kk/_lib/formatLong.js";
import { formatRelative as a } from "./kk/_lib/formatRelative.js";
import { localize as r } from "./kk/_lib/localize.js";
import { match as m } from "./kk/_lib/match.js";
const s = {
  code: "kk",
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
  s as default,
  s as kk
};
