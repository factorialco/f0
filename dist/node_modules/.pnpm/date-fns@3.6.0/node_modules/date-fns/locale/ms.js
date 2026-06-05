import { formatDistance as o } from "./ms/_lib/formatDistance.js";
import { formatLong as t } from "./ms/_lib/formatLong.js";
import { formatRelative as m } from "./ms/_lib/formatRelative.js";
import { localize as a } from "./ms/_lib/localize.js";
import { match as r } from "./ms/_lib/match.js";
const c = {
  code: "ms",
  formatDistance: o,
  formatLong: t,
  formatRelative: m,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  c as default,
  c as ms
};
