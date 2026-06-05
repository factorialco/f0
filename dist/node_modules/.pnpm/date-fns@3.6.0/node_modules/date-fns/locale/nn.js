import { formatDistance as o } from "./nn/_lib/formatDistance.js";
import { formatLong as t } from "./nn/_lib/formatLong.js";
import { formatRelative as a } from "./nn/_lib/formatRelative.js";
import { localize as r } from "./nn/_lib/localize.js";
import { match as m } from "./nn/_lib/match.js";
const s = {
  code: "nn",
  formatDistance: o,
  formatLong: t,
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
  s as nn
};
