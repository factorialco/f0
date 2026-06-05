import { formatDistance as o } from "./eu/_lib/formatDistance.js";
import { formatLong as t } from "./eu/_lib/formatLong.js";
import { formatRelative as a } from "./eu/_lib/formatRelative.js";
import { localize as r } from "./eu/_lib/localize.js";
import { match as e } from "./eu/_lib/match.js";
const s = {
  code: "eu",
  formatDistance: o,
  formatLong: t,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  s as default,
  s as eu
};
