import { formatDistance as t } from "./te/_lib/formatDistance.js";
import { formatLong as o } from "./te/_lib/formatLong.js";
import { formatRelative as a } from "./te/_lib/formatRelative.js";
import { localize as r } from "./te/_lib/localize.js";
import { match as e } from "./te/_lib/match.js";
const s = {
  code: "te",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as te
};
