import { formatDistance as o } from "./gd/_lib/formatDistance.js";
import { formatLong as t } from "./gd/_lib/formatLong.js";
import { formatRelative as a } from "./gd/_lib/formatRelative.js";
import { localize as r } from "./gd/_lib/localize.js";
import { match as m } from "./gd/_lib/match.js";
const s = {
  code: "gd",
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
  s as gd
};
