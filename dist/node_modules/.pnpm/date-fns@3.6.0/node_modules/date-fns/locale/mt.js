import { formatDistance as t } from "./mt/_lib/formatDistance.js";
import { formatLong as o } from "./mt/_lib/formatLong.js";
import { formatRelative as m } from "./mt/_lib/formatRelative.js";
import { localize as a } from "./mt/_lib/localize.js";
import { match as r } from "./mt/_lib/match.js";
const s = {
  code: "mt",
  formatDistance: t,
  formatLong: o,
  formatRelative: m,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as mt
};
