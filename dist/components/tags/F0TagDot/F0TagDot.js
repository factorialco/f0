import { jsx as t } from "react/jsx-runtime";
import { baseColors as m } from "../../../packages/core/dist/index.js";
import { forwardRef as s } from "react";
import { BaseTag as d } from "../internal/BaseTag/index.js";
import { useTextFormatEnforcer as c } from "../../../lib/text.js";
const i = s(
  ({ text: r, info: a, ...o }, l) => {
    c(
      r,
      { disallowEmpty: !0 },
      { componentName: "F0TagDot" }
    );
    const e = "color" in o && o.color ? `hsl(${m[o.color][50]})` : "customColor" in o && o.customColor;
    return e ? /* @__PURE__ */ t(
      d,
      {
        ref: l,
        className: "border-[1px] border-solid border-f1-border-secondary",
        left: /* @__PURE__ */ t(
          "div",
          {
            className: "m-1 aspect-square w-2 rounded-full",
            style: {
              backgroundColor: e
            },
            "aria-hidden": !0
          }
        ),
        text: r,
        info: a
      }
    ) : null;
  }
);
i.displayName = "F0TagDot";
export {
  i as F0TagDot
};
