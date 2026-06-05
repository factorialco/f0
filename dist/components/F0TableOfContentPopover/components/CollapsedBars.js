import { jsx as f } from "react/jsx-runtime";
import { cva as h } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { useMemo as p } from "react";
import { cn as u } from "../../../lib/utils.js";
const o = 16, m = h({
  base: "h-0.5 rounded-full bg-f1-foreground cursor-pointer",
  variants: {
    depth: {
      0: "w-4",
      1: "w-3",
      2: "w-2",
      3: "w-1.5"
    },
    variant: {
      light: "",
      dark: "dark"
    },
    active: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      variant: "light",
      active: !1,
      className: "bg-f1-foreground-tertiary opacity-60"
    },
    {
      variant: "dark",
      active: !1,
      className: "opacity-50"
    }
  ],
  defaultVariants: {
    depth: 3,
    variant: "light",
    active: !0
  }
});
function l(e, n = 0) {
  return e.flatMap((r) => [
    { id: r.id, depth: Math.min(n, 3) },
    ...r.children ? l(r.children, n + 1) : []
  ]);
}
function g(e, n) {
  const r = e.length;
  if (r <= o) return e;
  const s = r / (o - 1), i = new Set(
    Array.from(
      { length: o - 1 },
      (t, a) => Math.min(Math.floor(a * s), r - 1)
    )
  );
  if (i.add(r - 1), n) {
    const t = e.findIndex((a) => a.id === n);
    if (t !== -1 && !i.has(t)) {
      const a = [...i].reduce(
        (d, c) => Math.abs(c - t) < Math.abs(d - t) ? c : d
      );
      i.delete(a), i.add(t);
    }
  }
  return [...i].sort((t, a) => t - a).map((t) => e[t]);
}
function y({
  items: e,
  activeItem: n,
  className: r,
  align: s = "left",
  variant: i = "dark"
}) {
  const t = p(
    () => g(l(e), n),
    [e, n]
  );
  return /* @__PURE__ */ f(
    "div",
    {
      className: u(
        "flex flex-col justify-center gap-2 py-3",
        s === "right" ? "items-end" : "items-start",
        r
      ),
      children: t.map((a) => /* @__PURE__ */ f(
        "div",
        {
          className: m({
            depth: a.depth,
            variant: i,
            active: a.id === n
          })
        },
        a.id
      ))
    }
  );
}
export {
  y as CollapsedBars
};
