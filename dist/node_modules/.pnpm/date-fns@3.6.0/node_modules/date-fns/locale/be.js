import { formatDistance as o } from "./be/_lib/formatDistance.js";
import { formatLong as t } from "./be/_lib/formatLong.js";
import { formatRelative as a } from "./be/_lib/formatRelative.js";
import { localize as r } from "./be/_lib/localize.js";
import { match as e } from "./be/_lib/match.js";
const s = {
  code: "be",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as be,
  s as default
};
