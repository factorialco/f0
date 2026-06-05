import { formatDistance as o } from "./bn/_lib/formatDistance.js";
import { formatLong as t } from "./bn/_lib/formatLong.js";
import { formatRelative as a } from "./bn/_lib/formatRelative.js";
import { localize as r } from "./bn/_lib/localize.js";
import { match as m } from "./bn/_lib/match.js";
const s = {
  code: "bn",
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
  s as bn,
  s as default
};
