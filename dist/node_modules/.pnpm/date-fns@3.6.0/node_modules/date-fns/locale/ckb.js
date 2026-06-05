import { formatDistance as o } from "./ckb/_lib/formatDistance.js";
import { formatLong as t } from "./ckb/_lib/formatLong.js";
import { formatRelative as r } from "./ckb/_lib/formatRelative.js";
import { localize as m } from "./ckb/_lib/localize.js";
import { match as a } from "./ckb/_lib/match.js";
const p = {
  code: "ckb",
  formatDistance: o,
  formatLong: t,
  formatRelative: r,
  localize: m,
  match: a,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  p as ckb,
  p as default
};
