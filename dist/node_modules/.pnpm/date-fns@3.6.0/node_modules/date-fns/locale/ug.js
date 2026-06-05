import { formatDistance as o } from "./ug/_lib/formatDistance.js";
import { formatLong as t } from "./ug/_lib/formatLong.js";
import { formatRelative as a } from "./ug/_lib/formatRelative.js";
import { localize as r } from "./ug/_lib/localize.js";
import { match as m } from "./ug/_lib/match.js";
const s = {
  code: "ug",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as ug
};
