import { formatDistance as o } from "./eo/_lib/formatDistance.js";
import { formatLong as t } from "./eo/_lib/formatLong.js";
import { formatRelative as a } from "./eo/_lib/formatRelative.js";
import { localize as r } from "./eo/_lib/localize.js";
import { match as e } from "./eo/_lib/match.js";
const s = {
  code: "eo",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as eo
};
