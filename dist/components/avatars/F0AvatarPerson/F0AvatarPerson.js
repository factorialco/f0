import { jsx as n } from "react/jsx-runtime";
import "../../../icons/app/Menu.js";
import d from "../../../icons/app/PersonNegative.js";
import { BaseAvatar as p } from "../internal/BaseAvatar/BaseAvatar.js";
const s = ({
  firstName: r,
  lastName: a,
  src: o,
  size: e,
  "aria-label": l,
  "aria-labelledby": i,
  badge: t,
  deactivated: m
}) => /* @__PURE__ */ n(
  p,
  {
    type: "rounded",
    name: [r, a],
    src: o,
    size: e,
    color: "random",
    "aria-label": l,
    "aria-labelledby": i,
    badge: t,
    icon: m ? { icon: d, color: "secondary" } : void 0
  }
);
s.displayName = "PersonAvatar";
export {
  s as F0AvatarPerson
};
