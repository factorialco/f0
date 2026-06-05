import { formatDistance as o } from "./nl/_lib/formatDistance.js";
import { formatLong as t } from "./nl/_lib/formatLong.js";
import { formatRelative as a } from "./nl/_lib/formatRelative.js";
import { localize as r } from "./nl/_lib/localize.js";
import { match as m } from "./nl/_lib/match.js";
const c = {
  code: "nl",
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
  c as nl
};
