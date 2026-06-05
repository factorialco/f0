import { formatDistance as o } from "./ka/_lib/formatDistance.js";
import { formatLong as t } from "./ka/_lib/formatLong.js";
import { formatRelative as a } from "./ka/_lib/formatRelative.js";
import { localize as r } from "./ka/_lib/localize.js";
import { match as m } from "./ka/_lib/match.js";
const s = {
  code: "ka",
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
  s as ka
};
