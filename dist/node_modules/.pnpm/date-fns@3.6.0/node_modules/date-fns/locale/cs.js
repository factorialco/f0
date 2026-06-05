import { formatDistance as o } from "./cs/_lib/formatDistance.js";
import { formatLong as t } from "./cs/_lib/formatLong.js";
import { formatRelative as a } from "./cs/_lib/formatRelative.js";
import { localize as r } from "./cs/_lib/localize.js";
import { match as m } from "./cs/_lib/match.js";
const n = {
  code: "cs",
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
  n as cs,
  n as default
};
