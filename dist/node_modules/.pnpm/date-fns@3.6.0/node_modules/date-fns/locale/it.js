import { formatDistance as t } from "./it/_lib/formatDistance.js";
import { formatLong as o } from "./it/_lib/formatLong.js";
import { formatRelative as a } from "./it/_lib/formatRelative.js";
import { localize as r } from "./it/_lib/localize.js";
import { match as m } from "./it/_lib/match.js";
const s = {
  code: "it",
  formatDistance: t,
  formatLong: o,
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
  s as it
};
