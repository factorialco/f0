import { formatDistance as o } from "./hu/_lib/formatDistance.js";
import { formatLong as t } from "./hu/_lib/formatLong.js";
import { formatRelative as a } from "./hu/_lib/formatRelative.js";
import { localize as r } from "./hu/_lib/localize.js";
import { match as m } from "./hu/_lib/match.js";
const s = {
  code: "hu",
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
  s as hu
};
