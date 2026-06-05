import { formatDistance as o } from "./de/_lib/formatDistance.js";
import { formatLong as t } from "./de/_lib/formatLong.js";
import { formatRelative as a } from "./de/_lib/formatRelative.js";
import { match as r } from "./de/_lib/match.js";
import { localize as e } from "./de-AT/_lib/localize.js";
const s = {
  code: "de-AT",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: e,
  match: r,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as deAT,
  s as default
};
