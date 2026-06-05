import { formatDistance as o } from "./lv/_lib/formatDistance.js";
import { formatLong as t } from "./lv/_lib/formatLong.js";
import { formatRelative as a } from "./lv/_lib/formatRelative.js";
import { localize as r } from "./lv/_lib/localize.js";
import { match as m } from "./lv/_lib/match.js";
const c = {
  code: "lv",
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
  c as lv
};
