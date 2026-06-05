import { formatDistance as o } from "./fr/_lib/formatDistance.js";
import { localize as t } from "./fr/_lib/localize.js";
import { match as r } from "./fr/_lib/match.js";
import { formatLong as a } from "./fr-CH/_lib/formatLong.js";
import { formatRelative as m } from "./fr-CH/_lib/formatRelative.js";
const s = {
  code: "fr-CH",
  formatDistance: o,
  formatLong: a,
  formatRelative: m,
  localize: t,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as frCH
};
