import { formatDistance as o } from "./gu/_lib/formatDistance.js";
import { formatLong as t } from "./gu/_lib/formatLong.js";
import { formatRelative as a } from "./gu/_lib/formatRelative.js";
import { localize as r } from "./gu/_lib/localize.js";
import { match as m } from "./gu/_lib/match.js";
const s = {
  code: "gu",
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
  s as gu
};
