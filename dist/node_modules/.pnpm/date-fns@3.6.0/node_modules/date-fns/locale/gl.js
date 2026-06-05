import { formatDistance as o } from "./gl/_lib/formatDistance.js";
import { formatLong as t } from "./gl/_lib/formatLong.js";
import { formatRelative as a } from "./gl/_lib/formatRelative.js";
import { localize as r } from "./gl/_lib/localize.js";
import { match as m } from "./gl/_lib/match.js";
const c = {
  code: "gl",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  c as default,
  c as gl
};
