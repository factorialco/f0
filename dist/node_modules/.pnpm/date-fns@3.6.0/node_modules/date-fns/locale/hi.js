import { formatDistance as o } from "./hi/_lib/formatDistance.js";
import { formatLong as t } from "./hi/_lib/formatLong.js";
import { formatRelative as a } from "./hi/_lib/formatRelative.js";
import { localize as r } from "./hi/_lib/localize.js";
import { match as m } from "./hi/_lib/match.js";
const s = {
  code: "hi",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as hi
};
