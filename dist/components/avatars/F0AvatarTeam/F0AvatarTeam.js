import { jsx as m } from "react/jsx-runtime";
import { BaseAvatar as b } from "../internal/BaseAvatar/BaseAvatar.js";
const i = ({
  name: a,
  src: r,
  size: e,
  "aria-label": l,
  "aria-labelledby": o,
  badge: t
}) => /* @__PURE__ */ m(
  b,
  {
    type: "base",
    name: a,
    src: r,
    size: e,
    color: "random",
    "aria-label": l,
    "aria-labelledby": o,
    badge: t
  }
);
i.displayName = "TeamAvatar";
export {
  i as F0AvatarTeam
};
