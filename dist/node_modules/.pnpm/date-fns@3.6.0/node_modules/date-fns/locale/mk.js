import { formatDistance as o } from "./mk/_lib/formatDistance.js";
import { formatLong as t } from "./mk/_lib/formatLong.js";
import { formatRelative as m } from "./mk/_lib/formatRelative.js";
import { localize as a } from "./mk/_lib/localize.js";
import { match as r } from "./mk/_lib/match.js";
const s = {
  code: "mk",
  formatDistance: o,
  formatLong: t,
  formatRelative: m,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as mk
};
