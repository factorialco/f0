import { formatDistance as o } from "./en-US/_lib/formatDistance.js";
import { formatRelative as t } from "./en-US/_lib/formatRelative.js";
import { localize as a } from "./en-US/_lib/localize.js";
import { match as r } from "./en-US/_lib/match.js";
import { formatLong as e } from "./en-NZ/_lib/formatLong.js";
const s = {
  code: "en-NZ",
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
  s as enNZ
};
