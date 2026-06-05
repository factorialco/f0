import { formatDistance as o } from "./fi/_lib/formatDistance.js";
import { formatLong as t } from "./fi/_lib/formatLong.js";
import { formatRelative as a } from "./fi/_lib/formatRelative.js";
import { localize as r } from "./fi/_lib/localize.js";
import { match as m } from "./fi/_lib/match.js";
const s = {
  code: "fi",
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
  s as fi
};
