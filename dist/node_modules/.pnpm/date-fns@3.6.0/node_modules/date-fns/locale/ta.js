import { formatDistance as t } from "./ta/_lib/formatDistance.js";
import { formatLong as o } from "./ta/_lib/formatLong.js";
import { formatRelative as a } from "./ta/_lib/formatRelative.js";
import { localize as r } from "./ta/_lib/localize.js";
import { match as m } from "./ta/_lib/match.js";
const s = {
  code: "ta",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as ta
};
