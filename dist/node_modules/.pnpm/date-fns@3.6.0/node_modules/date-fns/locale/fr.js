import { formatDistance as o } from "./fr/_lib/formatDistance.js";
import { formatLong as t } from "./fr/_lib/formatLong.js";
import { formatRelative as r } from "./fr/_lib/formatRelative.js";
import { localize as a } from "./fr/_lib/localize.js";
import { match as m } from "./fr/_lib/match.js";
const s = {
  code: "fr",
  formatDistance: o,
  formatLong: t,
  formatRelative: r,
  localize: a,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as fr
};
