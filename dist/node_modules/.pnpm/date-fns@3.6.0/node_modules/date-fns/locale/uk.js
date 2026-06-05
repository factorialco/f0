import { formatDistance as o } from "./uk/_lib/formatDistance.js";
import { formatLong as t } from "./uk/_lib/formatLong.js";
import { formatRelative as a } from "./uk/_lib/formatRelative.js";
import { localize as r } from "./uk/_lib/localize.js";
import { match as m } from "./uk/_lib/match.js";
const s = {
  code: "uk",
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
  s as uk
};
