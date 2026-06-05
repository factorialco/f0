import { jsx as m } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { F0AvatarTeam as i } from "../../../../components/avatars/F0AvatarTeam/index.js";
import { experimentalComponent as n } from "../../../../lib/experimental.js";
import { ItemContainer as p } from "../ItemContainer.js";
import { getInternalAction as f } from "../utils.js";
const e = a(
  ({ action: o, name: t }, r) => /* @__PURE__ */ m(
    p,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ m(i, { name: t, size: "xs" }),
      text: t,
      action: f(o, t)
    }
  )
);
e.displayName = "TeamItem";
const d = n("TeamItem", e);
export {
  d as TeamItem
};
