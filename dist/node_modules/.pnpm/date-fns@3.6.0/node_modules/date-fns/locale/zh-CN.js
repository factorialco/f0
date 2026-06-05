import { formatDistance as o } from "./zh-CN/_lib/formatDistance.js";
import { formatLong as t } from "./zh-CN/_lib/formatLong.js";
import { formatRelative as a } from "./zh-CN/_lib/formatRelative.js";
import { localize as r } from "./zh-CN/_lib/localize.js";
import { match as m } from "./zh-CN/_lib/match.js";
const s = {
  code: "zh-CN",
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
  s as zhCN
};
