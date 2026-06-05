import { formatDistance as o } from "./km/_lib/formatDistance.js";
import { formatLong as t } from "./km/_lib/formatLong.js";
import { formatRelative as m } from "./km/_lib/formatRelative.js";
import { localize as a } from "./km/_lib/localize.js";
import { match as r } from "./km/_lib/match.js";
const s = {
  code: "km",
  formatDistance: o,
  formatLong: t,
  formatRelative: m,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as km
};
