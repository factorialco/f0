import { formatDistance as o } from "./zh-HK/_lib/formatDistance.js";
import { formatLong as t } from "./zh-HK/_lib/formatLong.js";
import { formatRelative as a } from "./zh-HK/_lib/formatRelative.js";
import { localize as r } from "./zh-HK/_lib/localize.js";
import { match as m } from "./zh-HK/_lib/match.js";
const s = {
  code: "zh-HK",
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
  s as zhHK
};
