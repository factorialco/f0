import { formatDistance as o } from "./pl/_lib/formatDistance.js";
import { formatLong as t } from "./pl/_lib/formatLong.js";
import { formatRelative as a } from "./pl/_lib/formatRelative.js";
import { localize as r } from "./pl/_lib/localize.js";
import { match as m } from "./pl/_lib/match.js";
const p = {
  code: "pl",
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
  p as default,
  p as pl
};
