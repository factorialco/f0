import { formatDistance as o } from "./se/_lib/formatDistance.js";
import { formatLong as t } from "./se/_lib/formatLong.js";
import { formatRelative as a } from "./se/_lib/formatRelative.js";
import { localize as r } from "./se/_lib/localize.js";
import { match as e } from "./se/_lib/match.js";
const c = {
  code: "se",
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
  c as se
};
