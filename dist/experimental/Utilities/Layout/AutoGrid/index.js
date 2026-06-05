import { jsx as i } from "react/jsx-runtime";
import { cva as t } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import a from "react";
import { cn as o } from "../../../../lib/utils.js";
import { gaps as x } from "../shared.js";
const m = t({
  base: "grid grid-cols-1",
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...x
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), w = a.forwardRef(function({ className: d, gap: s, children: c, tileSize: g, ...l }, r) {
  return /* @__PURE__ */ i("div", { className: o("@container", "grow"), ref: r, ...l, children: /* @__PURE__ */ i(
    "div",
    {
      className: o(m({ gap: s, tileSize: g }), d),
      ref: r,
      ...l,
      children: c
    }
  ) });
});
export {
  w as AutoGrid
};
