import { formatDistance as o } from "./ro/_lib/formatDistance.js";
import { formatLong as t } from "./ro/_lib/formatLong.js";
import { formatRelative as r } from "./ro/_lib/formatRelative.js";
import { localize as a } from "./ro/_lib/localize.js";
import { match as m } from "./ro/_lib/match.js";
const s = {
  code: "ro",
  formatDistance: o,
  formatLong: t,
  formatRelative: r,
  localize: a,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as ro
};
