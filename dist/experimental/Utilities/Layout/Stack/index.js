import { jsx as f } from "react/jsx-runtime";
import { cva as s } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as c } from "react";
import { cn as i } from "../../../../lib/utils.js";
import { FlexBox as n } from "../_FlexBox.js";
import { gaps as p } from "../shared.js";
const e = s({
  base: "flex-col",
  variants: {
    gap: {
      ...p
    }
  },
  defaultVariants: {}
}), S = c(function({ className: r, gap: o, children: t, ...a }, m) {
  return /* @__PURE__ */ f(
    n,
    {
      className: i(e({ gap: o }), r),
      ref: m,
      ...a,
      children: t
    }
  );
});
export {
  S as Stack
};
