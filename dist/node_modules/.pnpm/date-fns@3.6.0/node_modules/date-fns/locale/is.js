import { formatDistance as o } from "./is/_lib/formatDistance.js";
import { formatLong as t } from "./is/_lib/formatLong.js";
import { formatRelative as a } from "./is/_lib/formatRelative.js";
import { localize as r } from "./is/_lib/localize.js";
import { match as m } from "./is/_lib/match.js";
const c = {
  code: "is",
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
  c as default,
  c as is
};
