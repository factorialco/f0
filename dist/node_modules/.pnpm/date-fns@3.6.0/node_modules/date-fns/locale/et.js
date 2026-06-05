import { formatDistance as t } from "./et/_lib/formatDistance.js";
import { formatLong as o } from "./et/_lib/formatLong.js";
import { formatRelative as a } from "./et/_lib/formatRelative.js";
import { localize as r } from "./et/_lib/localize.js";
import { match as e } from "./et/_lib/match.js";
const s = {
  code: "et",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
export {
  s as default,
  s as et
};
