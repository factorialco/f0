import { formatDistance as o } from "./uz-Cyrl/_lib/formatDistance.js";
import { formatLong as t } from "./uz-Cyrl/_lib/formatLong.js";
import { formatRelative as r } from "./uz-Cyrl/_lib/formatRelative.js";
import { localize as a } from "./uz-Cyrl/_lib/localize.js";
import { match as m } from "./uz-Cyrl/_lib/match.js";
const c = {
  code: "uz-Cyrl",
  formatDistance: o,
  formatLong: t,
  formatRelative: r,
  localize: a,
  match: m,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
export {
  c as default,
  c as uzCyrl
};
