import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { useState as c, useEffect as F } from "react";
import { AIButton as k } from "../../sds/ai/AIButton/AIButton.js";
import { F0Icon as g } from "../F0Icon/index.js";
import { DropdownInternal as I } from "../../experimental/Navigation/Dropdown/internal.js";
import j from "../../icons/ai/One.js";
import L from "../../icons/app/Ellipsis.js";
import M from "../../icons/app/Handle.js";
import "../../icons/app/Menu.js";
import { withSkeleton as O } from "../../lib/skeleton.js";
import { cn as d } from "../../lib/utils.js";
import { Skeleton as r } from "../../ui/skeleton.js";
import { ButtonInternal as S } from "../F0Button/internal.js";
import { F0Text as W } from "../F0Text/F0Text.js";
import { AnimatePresence as z } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as A } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as C } from "../../lib/providers/i18n/i18n-provider.js";
const u = ({
  title: p,
  draggable: l = !1,
  onDragStart: h,
  onDragEnd: a,
  isDragging: m = !1,
  AIButton: t,
  actions: s,
  children: x,
  selected: v = !1
}) => {
  const [n, w] = c(!1), [b, f] = c(!1), N = C(), _ = (i) => {
    w(i);
  }, y = b || n;
  return F(() => {
    if (!m || !a) return;
    const i = () => {
      a();
    };
    return document.addEventListener("mouseup", i), () => {
      document.removeEventListener("mouseup", i);
    };
  }, [m, a]), /* @__PURE__ */ o(
    "div",
    {
      className: d(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200",
        l && n ? "border-f1-border-hover" : l && "hover:border-f1-border-hover",
        v && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]",
        m && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"
      ),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [
        /* @__PURE__ */ o("div", { className: "flex h-12 w-full items-center justify-between gap-3", children: [
          /* @__PURE__ */ o(
            "div",
            {
              className: d(
                "flex min-w-0 flex-1 items-center",
                !l && "pl-4",
                !s && !t && "pr-4"
              ),
              children: [
                l && /* @__PURE__ */ e(
                  "div",
                  {
                    className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
                    onMouseDown: h,
                    "data-gs-handle": "true",
                    children: /* @__PURE__ */ e(g, { icon: M, size: "xs" })
                  }
                ),
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: d(
                      "flex min-w-0 flex-1 items-center",
                      l && "-translate-x-1.5"
                    ),
                    children: /* @__PURE__ */ e(W, { variant: "label", content: p, ellipsis: !0 })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e(z, { children: (t || s) && y && /* @__PURE__ */ o(
            A.div,
            {
              className: d(
                "flex shrink-0 items-center gap-0.5 pr-2",
                !s && "pr-4"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: {
                duration: 0.2,
                ease: [0.33, 1, 0.68, 1]
              },
              children: [
                t && /* @__PURE__ */ e("div", { className: "flex h-6 items-center", children: /* @__PURE__ */ e(
                  k,
                  {
                    size: "sm",
                    label: N.ai.ask,
                    onClick: t,
                    icon: j
                  }
                ) }),
                s && /* @__PURE__ */ e(
                  I,
                  {
                    items: s,
                    open: n,
                    onOpenChange: _,
                    align: "end",
                    children: /* @__PURE__ */ e(
                      S,
                      {
                        icon: L,
                        label: "Actions",
                        variant: "ghost",
                        size: "md",
                        hideLabel: !0,
                        noAutoTooltip: !0,
                        noTitle: !0,
                        pressed: n
                      }
                    )
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4", children: x })
      ]
    }
  );
}, R = () => /* @__PURE__ */ o("div", { className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background", children: [
  /* @__PURE__ */ e("div", { className: "flex h-12 w-full items-center px-4", children: /* @__PURE__ */ e(r, { className: "h-3 w-full max-w-16 rounded-md" }) }),
  /* @__PURE__ */ o("div", { className: "flex flex-1 items-end gap-2 px-4 pb-4", children: [
    /* @__PURE__ */ e(r, { className: "h-1/2 w-full rounded-sm" }),
    /* @__PURE__ */ e(r, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ e(r, { className: "h-1/5 w-full rounded-sm" }),
    /* @__PURE__ */ e(r, { className: "h-1/3 w-full rounded-sm" }),
    /* @__PURE__ */ e(r, { className: "h-full w-full rounded-sm" }),
    /* @__PURE__ */ e(r, { className: "h-3/4 w-full rounded-sm" })
  ] })
] });
u.displayName = "F0Widget";
const ee = O(u, R);
export {
  ee as F0Widget
};
