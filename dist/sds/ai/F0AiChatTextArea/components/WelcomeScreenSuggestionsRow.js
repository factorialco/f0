import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { useState as p } from "react";
import { ButtonInternal as m } from "../../../../components/F0Button/internal.js";
import { F0Icon as u } from "../../../../components/F0Icon/index.js";
import h from "../../../../icons/app/ArrowUp.js";
import "../../../../icons/app/Menu.js";
import { cn as d, focusRing as b } from "../../../../lib/utils.js";
import { Popover as g, PopoverAnchor as x, PopoverTrigger as v, PopoverContent as y } from "../../../../ui/popover.js";
const w = 5;
function k(n, i = w) {
  return n.length <= i ? n : [...n].sort(() => 0.5 - Math.random()).slice(0, i);
}
const S = ({
  suggestions: n,
  onItemClick: i,
  onItemHover: o
}) => {
  const [a, s] = p(null), l = a !== null ? n[a] : null;
  return n.length === 0 ? null : /* @__PURE__ */ c(
    g,
    {
      open: l !== null,
      onOpenChange: (e) => {
        e || (s(null), o?.(null));
      },
      children: [
        /* @__PURE__ */ r(x, { asChild: !0, children: /* @__PURE__ */ r("div", { className: "flex w-full flex-wrap items-center gap-2", children: n.map((e, t) => /* @__PURE__ */ r(v, { asChild: !0, children: /* @__PURE__ */ r(
          m,
          {
            variant: "outline",
            label: e.label,
            icon: e.icon,
            pressed: a === t,
            onClick: () => {
              s((f) => f === t ? null : t), o?.(null);
            }
          }
        ) }, `${e.label}-${t}`)) }) }),
        l && /* @__PURE__ */ c(
          y,
          {
            side: "top",
            align: "start",
            sideOffset: 8,
            onOpenAutoFocus: (e) => e.preventDefault(),
            className: d(
              "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
              "w-[var(--radix-popover-trigger-width)]"
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary", children: [
                /* @__PURE__ */ r(u, { icon: l.icon, size: "sm" }),
                /* @__PURE__ */ r("span", { children: l.label })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex flex-col", children: k(l.items).map((e, t) => /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    i(e, l), s(null), o?.(null);
                  },
                  onMouseEnter: () => o?.(e),
                  onMouseLeave: () => o?.(null),
                  onFocus: () => o?.(e),
                  onBlur: () => o?.(null),
                  className: d(
                    "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
                    b()
                  ),
                  children: [
                    /* @__PURE__ */ r("span", { className: "min-w-0 flex-1 truncate", children: e.title }),
                    /* @__PURE__ */ r(
                      "span",
                      {
                        "aria-hidden": !0,
                        className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                        children: /* @__PURE__ */ r(u, { icon: h, size: "sm" })
                      }
                    )
                  ]
                },
                t
              )) })
            ]
          }
        )
      ]
    }
  );
};
export {
  S as WelcomeScreenSuggestionsRow
};
