import { formatDistance as t } from "./be-tarask/_lib/formatDistance.js";
import { formatLong as o } from "./be-tarask/_lib/formatLong.js";
import { formatRelative as a } from "./be-tarask/_lib/formatRelative.js";
import { localize as r } from "./be-tarask/_lib/localize.js";
import { match as e } from "./be-tarask/_lib/match.js";
const c = {
  code: "be-tarask",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: e,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  c as beTarask,
  c as default
};
