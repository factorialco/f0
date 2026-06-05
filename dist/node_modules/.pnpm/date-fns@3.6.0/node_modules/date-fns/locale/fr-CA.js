import { formatDistance as o } from "./fr/_lib/formatDistance.js";
import { formatRelative as t } from "./fr/_lib/formatRelative.js";
import { localize as r } from "./fr/_lib/localize.js";
import { match as a } from "./fr/_lib/match.js";
import { formatLong as m } from "./fr-CA/_lib/formatLong.js";
const s = {
  code: "fr-CA",
  formatDistance: o,
  formatLong: m,
  formatRelative: t,
  localize: r,
  match: a,
  // Unique for fr-CA
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as frCA
};
