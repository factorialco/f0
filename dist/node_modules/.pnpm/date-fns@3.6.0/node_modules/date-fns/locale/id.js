import { formatDistance as o } from "./id/_lib/formatDistance.js";
import { formatLong as t } from "./id/_lib/formatLong.js";
import { formatRelative as a } from "./id/_lib/formatRelative.js";
import { localize as r } from "./id/_lib/localize.js";
import { match as m } from "./id/_lib/match.js";
const s = {
  code: "id",
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
  s as default,
  s as id
};
