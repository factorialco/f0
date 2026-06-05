import { formatDistance as o } from "./hy/_lib/formatDistance.js";
import { formatLong as t } from "./hy/_lib/formatLong.js";
import { formatRelative as a } from "./hy/_lib/formatRelative.js";
import { localize as r } from "./hy/_lib/localize.js";
import { match as m } from "./hy/_lib/match.js";
const s = {
  code: "hy",
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
  s as hy
};
