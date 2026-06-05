import { formatDistance as o } from "./sr/_lib/formatDistance.js";
import { formatLong as t } from "./sr/_lib/formatLong.js";
import { formatRelative as r } from "./sr/_lib/formatRelative.js";
import { localize as a } from "./sr/_lib/localize.js";
import { match as m } from "./sr/_lib/match.js";
const c = {
  code: "sr",
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
  c as default,
  c as sr
};
