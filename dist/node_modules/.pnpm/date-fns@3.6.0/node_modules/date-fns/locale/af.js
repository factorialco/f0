import { formatDistance as o } from "./af/_lib/formatDistance.js";
import { formatLong as t } from "./af/_lib/formatLong.js";
import { formatRelative as a } from "./af/_lib/formatRelative.js";
import { localize as r } from "./af/_lib/localize.js";
import { match as m } from "./af/_lib/match.js";
const s = {
  code: "af",
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
  s as af,
  s as default
};
