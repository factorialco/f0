import { formatDistance as o } from "./en-US/_lib/formatDistance.js";
import { formatLong as t } from "./en-US/_lib/formatLong.js";
import { formatRelative as a } from "./en-US/_lib/formatRelative.js";
import { localize as r } from "./en-US/_lib/localize.js";
import { match as e } from "./en-US/_lib/match.js";
const s = {
  code: "en-US",
  formatDistance: o,
  formatLong: t,
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
  s as enUS
};
