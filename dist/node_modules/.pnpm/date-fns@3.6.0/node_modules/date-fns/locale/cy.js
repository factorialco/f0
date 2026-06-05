import { formatDistance as o } from "./cy/_lib/formatDistance.js";
import { formatLong as t } from "./cy/_lib/formatLong.js";
import { formatRelative as a } from "./cy/_lib/formatRelative.js";
import { localize as r } from "./cy/_lib/localize.js";
import { match as m } from "./cy/_lib/match.js";
const s = {
  code: "cy",
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
  s as cy,
  s as default
};
