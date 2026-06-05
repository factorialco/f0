import { formatDistance as o } from "./fy/_lib/formatDistance.js";
import { formatLong as t } from "./fy/_lib/formatLong.js";
import { formatRelative as a } from "./fy/_lib/formatRelative.js";
import { localize as r } from "./fy/_lib/localize.js";
import { match as m } from "./fy/_lib/match.js";
const s = {
  code: "fy",
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
  s as default,
  s as fy
};
