import { formatDistance as o } from "./az/_lib/formatDistance.js";
import { formatLong as t } from "./az/_lib/formatLong.js";
import { formatRelative as a } from "./az/_lib/formatRelative.js";
import { localize as r } from "./az/_lib/localize.js";
import { match as m } from "./az/_lib/match.js";
const s = {
  code: "az",
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
  s as az,
  s as default
};
