import { formatDistance as o } from "./kn/_lib/formatDistance.js";
import { formatLong as t } from "./kn/_lib/formatLong.js";
import { formatRelative as a } from "./kn/_lib/formatRelative.js";
import { localize as r } from "./kn/_lib/localize.js";
import { match as m } from "./kn/_lib/match.js";
const s = {
  code: "kn",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as kn
};
