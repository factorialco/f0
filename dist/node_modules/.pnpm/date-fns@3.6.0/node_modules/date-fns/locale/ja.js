import { formatDistance as o } from "./ja/_lib/formatDistance.js";
import { formatLong as t } from "./ja/_lib/formatLong.js";
import { formatRelative as a } from "./ja/_lib/formatRelative.js";
import { localize as r } from "./ja/_lib/localize.js";
import { match as m } from "./ja/_lib/match.js";
const s = {
  code: "ja",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as ja
};
