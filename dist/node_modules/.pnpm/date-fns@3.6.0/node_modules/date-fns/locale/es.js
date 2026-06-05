import { formatDistance as o } from "./es/_lib/formatDistance.js";
import { formatLong as t } from "./es/_lib/formatLong.js";
import { formatRelative as a } from "./es/_lib/formatRelative.js";
import { localize as r } from "./es/_lib/localize.js";
import { match as e } from "./es/_lib/match.js";
const c = {
  code: "es",
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
  c as default,
  c as es
};
