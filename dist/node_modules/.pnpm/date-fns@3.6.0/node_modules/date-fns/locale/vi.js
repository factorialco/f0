import { formatDistance as o } from "./vi/_lib/formatDistance.js";
import { formatLong as t } from "./vi/_lib/formatLong.js";
import { formatRelative as a } from "./vi/_lib/formatRelative.js";
import { localize as r } from "./vi/_lib/localize.js";
import { match as m } from "./vi/_lib/match.js";
const s = {
  code: "vi",
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
  s as vi
};
