import { formatDistance as o } from "./sv/_lib/formatDistance.js";
import { formatLong as t } from "./sv/_lib/formatLong.js";
import { formatRelative as a } from "./sv/_lib/formatRelative.js";
import { localize as r } from "./sv/_lib/localize.js";
import { match as m } from "./sv/_lib/match.js";
const c = {
  code: "sv",
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
  c as default,
  c as sv
};
