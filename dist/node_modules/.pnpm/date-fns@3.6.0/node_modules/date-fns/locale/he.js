import { formatDistance as o } from "./he/_lib/formatDistance.js";
import { formatLong as t } from "./he/_lib/formatLong.js";
import { formatRelative as a } from "./he/_lib/formatRelative.js";
import { localize as r } from "./he/_lib/localize.js";
import { match as e } from "./he/_lib/match.js";
const s = {
  code: "he",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as he
};
