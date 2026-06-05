import { jsx as e } from "react/jsx-runtime";
import { cva as f } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import i from "react";
import { cn as m } from "../../../../lib/utils.js";
import { FlexBox as s } from "../_FlexBox.js";
import { gaps as l } from "../shared.js";
const n = f({
  base: "flex-row",
  variants: {
    gap: {
      ...l
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), R = i.forwardRef(function({ className: r, gap: t, wrap: a, ...o }, p) {
  return /* @__PURE__ */ e(
    s,
    {
      className: m(n({ gap: t, wrap: a }), r),
      ref: p,
      ...o
    }
  );
});
export {
  R as Split
};
