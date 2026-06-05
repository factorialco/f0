import { formatDistance as o } from "./sk/_lib/formatDistance.js";
import { formatLong as t } from "./sk/_lib/formatLong.js";
import { formatRelative as a } from "./sk/_lib/formatRelative.js";
import { localize as r } from "./sk/_lib/localize.js";
import { match as m } from "./sk/_lib/match.js";
const c = {
  code: "sk",
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
  c as default,
  c as sk
};
