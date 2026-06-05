import { formatDistance as o } from "./el/_lib/formatDistance.js";
import { formatLong as t } from "./el/_lib/formatLong.js";
import { formatRelative as a } from "./el/_lib/formatRelative.js";
import { localize as r } from "./el/_lib/localize.js";
import { match as e } from "./el/_lib/match.js";
const c = {
  code: "el",
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
  c as default,
  c as el
};
