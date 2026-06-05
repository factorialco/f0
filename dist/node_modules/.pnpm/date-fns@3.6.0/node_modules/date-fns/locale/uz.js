import { formatDistance as o } from "./uz/_lib/formatDistance.js";
import { formatLong as t } from "./uz/_lib/formatLong.js";
import { formatRelative as a } from "./uz/_lib/formatRelative.js";
import { localize as r } from "./uz/_lib/localize.js";
import { match as m } from "./uz/_lib/match.js";
const s = {
  code: "uz",
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
  s as uz
};
