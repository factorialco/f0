import { formatDistance as o } from "./ru/_lib/formatDistance.js";
import { formatLong as t } from "./ru/_lib/formatLong.js";
import { formatRelative as r } from "./ru/_lib/formatRelative.js";
import { localize as a } from "./ru/_lib/localize.js";
import { match as m } from "./ru/_lib/match.js";
const s = {
  code: "ru",
  formatDistance: o,
  formatLong: t,
  formatRelative: r,
  localize: a,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as ru
};
