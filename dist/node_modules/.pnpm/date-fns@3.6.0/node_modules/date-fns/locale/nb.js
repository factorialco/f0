import { formatDistance as o } from "./nb/_lib/formatDistance.js";
import { formatLong as t } from "./nb/_lib/formatLong.js";
import { formatRelative as a } from "./nb/_lib/formatRelative.js";
import { localize as r } from "./nb/_lib/localize.js";
import { match as m } from "./nb/_lib/match.js";
const s = {
  code: "nb",
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
  s as nb
};
