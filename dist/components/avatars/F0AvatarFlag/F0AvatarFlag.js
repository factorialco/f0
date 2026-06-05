import { jsx as o } from "react/jsx-runtime";
import { getFlag as m } from "../../../flags/flagsMap.js";
import { BaseAvatar as s } from "../internal/BaseAvatar/BaseAvatar.js";
import { useI18n as p } from "../../../lib/providers/i18n/i18n-provider.js";
const b = ({
  flag: a,
  size: e,
  "aria-label": t,
  "aria-labelledby": i,
  badge: l
}) => {
  const r = m(a), n = p().countries[a] ?? a;
  return /* @__PURE__ */ o(
    s,
    {
      type: "base",
      name: n,
      flag: r ? /* @__PURE__ */ o(r, {}) : void 0,
      size: e,
      color: "viridian",
      "aria-label": t,
      "aria-labelledby": i,
      badge: l
    }
  );
};
b.displayName = "FlagAvatar";
export {
  b as F0AvatarFlag
};
