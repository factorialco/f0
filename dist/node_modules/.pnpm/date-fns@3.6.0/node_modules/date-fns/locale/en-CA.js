import { formatRelative as o } from "./en-US/_lib/formatRelative.js";
import { localize as t } from "./en-US/_lib/localize.js";
import { match as a } from "./en-US/_lib/match.js";
import { formatDistance as r } from "./en-CA/_lib/formatDistance.js";
import { formatLong as e } from "./en-CA/_lib/formatLong.js";
const s = {
  code: "en-CA",
  formatDistance: r,
  formatLong: e,
  formatRelative: o,
  localize: t,
  match: a,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as enCA
};
