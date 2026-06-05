import { formatDistance as o } from "./sq/_lib/formatDistance.js";
import { formatLong as t } from "./sq/_lib/formatLong.js";
import { formatRelative as a } from "./sq/_lib/formatRelative.js";
import { localize as r } from "./sq/_lib/localize.js";
import { match as m } from "./sq/_lib/match.js";
const c = {
  code: "sq",
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
  c as default,
  c as sq
};
