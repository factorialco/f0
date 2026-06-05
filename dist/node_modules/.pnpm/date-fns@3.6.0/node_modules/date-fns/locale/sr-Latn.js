import { formatDistance as t } from "./sr-Latn/_lib/formatDistance.js";
import { formatLong as o } from "./sr-Latn/_lib/formatLong.js";
import { formatRelative as a } from "./sr-Latn/_lib/formatRelative.js";
import { localize as r } from "./sr-Latn/_lib/localize.js";
import { match as m } from "./sr-Latn/_lib/match.js";
const c = {
  code: "sr-Latn",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  c as default,
  c as srLatn
};
