import { formatDistance as o } from "./ar-MA/_lib/formatDistance.js";
import { formatLong as t } from "./ar-MA/_lib/formatLong.js";
import { formatRelative as a } from "./ar-MA/_lib/formatRelative.js";
import { localize as r } from "./ar-MA/_lib/localize.js";
import { match as m } from "./ar-MA/_lib/match.js";
const s = {
  code: "ar-MA",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    // Monday is 1
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as arMA,
  s as default
};
