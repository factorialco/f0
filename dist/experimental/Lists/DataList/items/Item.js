import { jsx as n } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { experimentalComponent as a } from "../../../../lib/experimental.js";
import { ItemContainer as p } from "../ItemContainer.js";
import { getInternalAction as f } from "../utils.js";
const o = i(
  ({ text: t, icon: m, action: r }, e) => /* @__PURE__ */ n(
    p,
    {
      ref: e,
      text: t,
      leftIcon: m,
      action: f(r, t)
    }
  )
);
o.displayName = "DataList.Item";
const x = a("DataList.Item", o);
export {
  x as Item
};
