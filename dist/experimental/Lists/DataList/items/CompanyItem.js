import { jsx as t } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import { F0AvatarCompany as a } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { experimentalComponent as i } from "../../../../lib/experimental.js";
import { ItemContainer as f } from "../ItemContainer.js";
import { getInternalAction as s } from "../utils.js";
const m = p(
  ({ avatarUrl: r, name: o, action: e }, n) => /* @__PURE__ */ t(
    f,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ t(a, { name: o, size: "xs", src: r }),
      text: o,
      action: s(e, o)
    }
  )
);
m.displayName = "CompanyItem";
const d = i("CompanyItem", m);
export {
  d as CompanyItem
};
