import { jsx as e } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { F0AvatarPerson as f } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { experimentalComponent as a } from "../../../../lib/experimental.js";
import { ItemContainer as c } from "../ItemContainer.js";
import { getInternalAction as I } from "../utils.js";
const m = p(
  ({ action: n, avatarUrl: i, firstName: o, lastName: r }, s) => {
    const t = `${o} ${r}`;
    return /* @__PURE__ */ e(
      c,
      {
        ref: s,
        leftIcon: () => /* @__PURE__ */ e(
          f,
          {
            size: "xs",
            src: i,
            firstName: o,
            lastName: r
          }
        ),
        text: t,
        action: I(n, t)
      }
    );
  }
);
m.displayName = "PersonItem";
const C = a("PersonItem", m);
export {
  C as PersonItem
};
