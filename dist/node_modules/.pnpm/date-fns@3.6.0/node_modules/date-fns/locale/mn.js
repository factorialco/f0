import { formatDistance as o } from "./mn/_lib/formatDistance.js";
import { formatLong as t } from "./mn/_lib/formatLong.js";
import { formatRelative as m } from "./mn/_lib/formatRelative.js";
import { localize as a } from "./mn/_lib/localize.js";
import { match as r } from "./mn/_lib/match.js";
const s = {
  code: "mn",
  formatDistance: o,
  formatLong: t,
  formatRelative: m,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as mn
};
