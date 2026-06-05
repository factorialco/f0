import { formatDistance as o } from "./en-US/_lib/formatDistance.js";
import { formatRelative as t } from "./en-US/_lib/formatRelative.js";
import { localize as a } from "./en-US/_lib/localize.js";
import { match as r } from "./en-US/_lib/match.js";
import { formatLong as e } from "./en-IN/_lib/formatLong.js";
const s = {
  code: "en-IN",
  formatDistance: o,
  formatLong: e,
  formatRelative: t,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    // Monday is the first day of the week.
    firstWeekContainsDate: 4
    // The week that contains Jan 4th is the first week of the year.
  }
};
export {
  s as default,
  s as enIN
};
