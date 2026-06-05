import { formatDistance as o } from "./en-US/_lib/formatDistance.js";
import { formatRelative as t } from "./en-US/_lib/formatRelative.js";
import { localize as a } from "./en-US/_lib/localize.js";
import { match as r } from "./en-US/_lib/match.js";
import { formatLong as e } from "./en-GB/_lib/formatLong.js";
const s = {
  code: "en-GB",
  formatDistance: o,
  formatLong: e,
  formatRelative: t,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as enGB
};
