import { jsx as l } from "react/jsx-runtime";
import { cva as _ } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as C } from "react";
import { cn as m } from "../../lib/utils.js";
const d = _({
  base: "inline-block shrink-0",
  variants: {
    size: {
      lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
      md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
      sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
      xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), y = C(function({ size: s, icon: e, state: u = "normal", color: t = "currentColor", ...o }, n) {
  if (!e) return null;
  const a = e, f = e.displayName?.includes("Animated"), k = t.startsWith("#"), c = ((r) => r === "currentColor" ? "text-current" : r === "default" ? "text-f1-icon" : r.startsWith("#") ? "" : `text-f1-icon-${r}`)(t), i = k ? { color: t } : void 0;
  return f ? /* @__PURE__ */ l(
    a,
    {
      ref: n,
      ...o,
      animate: u,
      className: m(d({ size: s }), "select-none", c),
      style: i,
      "data-has-color": t !== "currentColor" ? "true" : void 0
    }
  ) : /* @__PURE__ */ l(
    a,
    {
      ref: n,
      ...o,
      className: m("aspect-square", d({ size: s }), c),
      style: i,
      "data-has-color": t !== "currentColor" ? "true" : void 0
    }
  );
});
export {
  y as F0Icon
};
