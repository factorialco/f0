import { formatDistance as o } from "./nl-BE/_lib/formatDistance.js";
import { formatLong as t } from "./nl-BE/_lib/formatLong.js";
import { formatRelative as a } from "./nl-BE/_lib/formatRelative.js";
import { localize as r } from "./nl-BE/_lib/localize.js";
import { match as m } from "./nl-BE/_lib/match.js";
const c = {
  code: "nl-BE",
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
  c as nlBE
};
