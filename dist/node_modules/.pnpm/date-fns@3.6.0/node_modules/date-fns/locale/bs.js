import { formatDistance as o } from "./bs/_lib/formatDistance.js";
import { formatLong as t } from "./bs/_lib/formatLong.js";
import { formatRelative as a } from "./bs/_lib/formatRelative.js";
import { localize as r } from "./bs/_lib/localize.js";
import { match as m } from "./bs/_lib/match.js";
const c = {
  code: "bs",
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
  c as bs,
  c as default
};
