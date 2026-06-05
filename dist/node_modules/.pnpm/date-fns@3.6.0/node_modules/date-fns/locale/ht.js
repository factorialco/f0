import { formatDistance as t } from "./ht/_lib/formatDistance.js";
import { formatLong as o } from "./ht/_lib/formatLong.js";
import { formatRelative as a } from "./ht/_lib/formatRelative.js";
import { localize as r } from "./ht/_lib/localize.js";
import { match as m } from "./ht/_lib/match.js";
const s = {
  code: "ht",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as ht
};
