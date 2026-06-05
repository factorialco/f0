import { formatDistance as t } from "./th/_lib/formatDistance.js";
import { formatLong as o } from "./th/_lib/formatLong.js";
import { formatRelative as a } from "./th/_lib/formatRelative.js";
import { localize as r } from "./th/_lib/localize.js";
import { match as m } from "./th/_lib/match.js";
const s = {
  code: "th",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as th
};
