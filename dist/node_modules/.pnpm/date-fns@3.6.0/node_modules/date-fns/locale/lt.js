import { formatDistance as t } from "./lt/_lib/formatDistance.js";
import { formatLong as o } from "./lt/_lib/formatLong.js";
import { formatRelative as a } from "./lt/_lib/formatRelative.js";
import { localize as r } from "./lt/_lib/localize.js";
import { match as m } from "./lt/_lib/match.js";
const c = {
  code: "lt",
  formatDistance: t,
  formatLong: o,
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
  c as lt
};
