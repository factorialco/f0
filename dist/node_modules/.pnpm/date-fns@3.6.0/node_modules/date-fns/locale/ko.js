import { formatDistance as o } from "./ko/_lib/formatDistance.js";
import { formatLong as t } from "./ko/_lib/formatLong.js";
import { formatRelative as a } from "./ko/_lib/formatRelative.js";
import { localize as r } from "./ko/_lib/localize.js";
import { match as m } from "./ko/_lib/match.js";
const s = {
  code: "ko",
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
  s as ko
};
