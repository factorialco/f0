import { formatDistance as o } from "./ja-Hira/_lib/formatDistance.js";
import { formatLong as t } from "./ja-Hira/_lib/formatLong.js";
import { formatRelative as a } from "./ja-Hira/_lib/formatRelative.js";
import { localize as r } from "./ja-Hira/_lib/localize.js";
import { match as m } from "./ja-Hira/_lib/match.js";
const s = {
  code: "ja-Hira",
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
  s as default,
  s as jaHira
};
