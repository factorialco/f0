import { formatDistance as o } from "./ar/_lib/formatDistance.js";
import { formatLong as t } from "./ar/_lib/formatLong.js";
import { formatRelative as a } from "./ar/_lib/formatRelative.js";
import { localize as r } from "./ar/_lib/localize.js";
import { match as m } from "./ar/_lib/match.js";
const s = {
  code: "ar",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
};
export {
  s as ar,
  s as default
};
