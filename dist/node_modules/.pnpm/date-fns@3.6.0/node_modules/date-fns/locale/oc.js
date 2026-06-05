import { formatDistance as o } from "./oc/_lib/formatDistance.js";
import { formatLong as t } from "./oc/_lib/formatLong.js";
import { formatRelative as a } from "./oc/_lib/formatRelative.js";
import { localize as r } from "./oc/_lib/localize.js";
import { match as m } from "./oc/_lib/match.js";
const s = {
  code: "oc",
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
  s as default,
  s as oc
};
