import { formatDistance as t } from "./pt/_lib/formatDistance.js";
import { formatLong as o } from "./pt/_lib/formatLong.js";
import { formatRelative as a } from "./pt/_lib/formatRelative.js";
import { localize as r } from "./pt/_lib/localize.js";
import { match as m } from "./pt/_lib/match.js";
const c = {
  code: "pt",
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
  c as default,
  c as pt
};
