import { formatDistance as t } from "./it/_lib/formatDistance.js";
import { formatRelative as o } from "./it/_lib/formatRelative.js";
import { localize as a } from "./it/_lib/localize.js";
import { match as r } from "./it/_lib/match.js";
import { formatLong as m } from "./it-CH/_lib/formatLong.js";
const s = {
  code: "it-CH",
  formatDistance: t,
  formatLong: m,
  formatRelative: o,
  localize: a,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as itCH
};
