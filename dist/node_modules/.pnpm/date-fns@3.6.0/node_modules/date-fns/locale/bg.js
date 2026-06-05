import { formatDistance as o } from "./bg/_lib/formatDistance.js";
import { formatLong as t } from "./bg/_lib/formatLong.js";
import { formatRelative as a } from "./bg/_lib/formatRelative.js";
import { localize as r } from "./bg/_lib/localize.js";
import { match as m } from "./bg/_lib/match.js";
const s = {
  code: "bg",
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
  s as bg,
  s as default
};
