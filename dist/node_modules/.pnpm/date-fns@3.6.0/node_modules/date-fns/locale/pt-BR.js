import { formatDistance as t } from "./pt-BR/_lib/formatDistance.js";
import { formatLong as o } from "./pt-BR/_lib/formatLong.js";
import { formatRelative as a } from "./pt-BR/_lib/formatRelative.js";
import { localize as r } from "./pt-BR/_lib/localize.js";
import { match as m } from "./pt-BR/_lib/match.js";
const c = {
  code: "pt-BR",
  formatDistance: t,
  formatLong: o,
  formatRelative: a,
  localize: r,
  match: m,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
export {
  c as default,
  c as ptBR
};
