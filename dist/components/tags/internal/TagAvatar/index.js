import { jsx as e } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { F0Avatar as t } from "../../../avatars/F0Avatar/index.js";
import { useTextFormatEnforcer as s } from "../../../../lib/text.js";
import { BaseTag as d } from "../BaseTag/index.js";
const f = m(
  ({ avatar: r, text: o, deactivated: a }, p) => (s(
    o,
    { disallowEmpty: !0 },
    { componentName: "F0TagAvatar" }
  ), /* @__PURE__ */ e(
    d,
    {
      ref: p,
      deactivated: a,
      className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      left: /* @__PURE__ */ e(t, { avatar: r, size: "xs" }),
      text: o,
      shape: r.type === "person" ? "rounded" : "square"
    }
  ))
);
f.displayName = "AvatarTag";
export {
  f as F0TagAvatar
};
