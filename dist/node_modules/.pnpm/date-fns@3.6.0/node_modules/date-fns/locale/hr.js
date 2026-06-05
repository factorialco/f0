import { formatDistance as o } from "./hr/_lib/formatDistance.js";
import { formatLong as t } from "./hr/_lib/formatLong.js";
import { formatRelative as r } from "./hr/_lib/formatRelative.js";
import { localize as a } from "./hr/_lib/localize.js";
import { match as m } from "./hr/_lib/match.js";
const s = {
  code: "hr",
  formatDistance: o,
  formatLong: t,
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
  s as hr
};
