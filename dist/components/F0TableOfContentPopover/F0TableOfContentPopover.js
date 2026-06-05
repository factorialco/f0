import { jsxs as D, jsx as r } from "react/jsx-runtime";
import { cva as R } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { useState as k, useRef as i, useCallback as w } from "react";
import { cn as d, focusRing as E } from "../../lib/utils.js";
import { HoverCard as S, HoverCardTrigger as F, HoverCardContent as H } from "../../ui/hover-card.js";
import { F0TableOfContent as L } from "../../experimental/Navigation/F0TableOfContent/index.js";
import { CollapsedBars as N } from "./components/CollapsedBars.js";
import { useDeferredClose as T } from "./useDeferredClose.js";
const V = 300, j = 0, q = R({
  base: "w-auto overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 shadow-lg",
  variants: {
    size: {
      sm: "max-h-[240px]",
      md: "max-h-[400px]",
      lg: "max-h-[600px]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function G({
  title: o,
  items: n,
  className: m,
  activeItem: a,
  collapsible: u = !1,
  sortable: p,
  onReorder: h,
  showChildrenCounter: C = !1,
  barsAlign: s = "left",
  size: b = "md",
  variant: g = "light",
  portalContainer: x
}) {
  const [l, c] = k(!1), t = i(!1), f = i(null), { deferClose: v } = T(f, () => c(!1)), O = (e) => {
    !e && v() || (e && !l && (t.current = !0), c(e));
  }, y = w((e) => {
    f.current = e, !(!e || !t.current) && (t.current = !1, requestAnimationFrame(() => {
      e.querySelector("[data-active]")?.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }, []);
  return /* @__PURE__ */ D(
    S,
    {
      open: l,
      onOpenChange: O,
      openDelay: j,
      closeDelay: V,
      children: [
        /* @__PURE__ */ r(F, { asChild: !0, children: /* @__PURE__ */ r(
          "button",
          {
            className: d(
              E(),
              "flex cursor-pointer items-center rounded-md px-1.5 py-1",
              m
            ),
            "aria-label": o ?? "Menu",
            children: /* @__PURE__ */ r(
              N,
              {
                items: n,
                activeItem: a,
                align: s,
                variant: g
              }
            )
          }
        ) }),
        /* @__PURE__ */ r(
          H,
          {
            ref: y,
            side: s === "left" ? "right" : "left",
            align: "center",
            sideOffset: -28,
            container: x,
            className: d(
              q({ size: b }),
              !o && "pt-2",
              "scrollbar-macos"
            ),
            children: /* @__PURE__ */ r(
              L,
              {
                title: o,
                items: n,
                activeItem: a,
                collapsible: u,
                sortable: p,
                onReorder: h,
                hideChildrenCounter: !C,
                scrollable: !1
              }
            )
          }
        )
      ]
    }
  );
}
export {
  G as F0TableOfContentPopover
};
