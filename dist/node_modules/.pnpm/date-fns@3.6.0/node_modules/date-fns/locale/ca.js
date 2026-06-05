import { formatDistance as o } from "./ca/_lib/formatDistance.js";
import { formatLong as t } from "./ca/_lib/formatLong.js";
import { formatRelative as a } from "./ca/_lib/formatRelative.js";
import { localize as r } from "./ca/_lib/localize.js";
import { match as m } from "./ca/_lib/match.js";
const s = {
  code: "ca",
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
  s as ca,
  s as default
};
