import { formatDistance as o } from "./zh-TW/_lib/formatDistance.js";
import { formatLong as t } from "./zh-TW/_lib/formatLong.js";
import { formatRelative as a } from "./zh-TW/_lib/formatRelative.js";
import { localize as r } from "./zh-TW/_lib/localize.js";
import { match as m } from "./zh-TW/_lib/match.js";
const s = {
  code: "zh-TW",
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
  s as default,
  s as zhTW
};
