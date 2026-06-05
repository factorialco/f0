import { formatDistance as t } from "./tr/_lib/formatDistance.js";
import { formatLong as o } from "./tr/_lib/formatLong.js";
import { formatRelative as r } from "./tr/_lib/formatRelative.js";
import { localize as a } from "./tr/_lib/localize.js";
import { match as m } from "./tr/_lib/match.js";
const s = {
  code: "tr",
  formatDistance: t,
  formatLong: o,
  formatRelative: r,
  localize: a,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as tr
};
