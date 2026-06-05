import { formatDistance as o } from "./da/_lib/formatDistance.js";
import { formatLong as t } from "./da/_lib/formatLong.js";
import { formatRelative as a } from "./da/_lib/formatRelative.js";
import { localize as r } from "./da/_lib/localize.js";
import { match as m } from "./da/_lib/match.js";
const s = {
  code: "da",
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
  s as da,
  s as default
};
