import { jsx as e, Fragment as L, jsxs as n } from "react/jsx-runtime";
import { Tooltip as $ } from "../../Overlays/Tooltip/index.js";
import { TableHead as A } from "../../../ui/table.js";
import { F0Icon as h } from "../../../components/F0Icon/index.js";
import v from "../../../icons/app/ArrowDown.js";
import E from "../../../icons/app/InfoCircleLine.js";
import "../../../icons/app/Menu.js";
import { cn as t, focusRing as w } from "../../../lib/utils.js";
import { getColWidth as N } from "../utils/colWidth.js";
import { useTable as M } from "../utils/TableContext.js";
import { motion as a } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { AnimatePresence as j } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { OneEllipsis as O } from "../../../lib/OneEllipsis/OneEllipsis.js";
function Z({
  children: s,
  width: c = "auto",
  minWidth: u,
  sortState: o = "none",
  onSortClick: r,
  info: l,
  infoIcon: R = E,
  sticky: i,
  hidden: d = !1,
  align: T = "left",
  className: z,
  colSpan: F
}) {
  const { isScrolled: b, isScrolledRight: g } = M(), f = i?.left !== void 0, m = i?.right !== void 0, x = f || m, W = i?.left ?? 0, k = i?.right ?? 0, y = r || l, H = /* @__PURE__ */ e(L, { children: /* @__PURE__ */ n(
    "div",
    {
      className: t(
        "flex items-center whitespace-nowrap",
        y && "gap-1",
        T === "right" && "flex-row-reverse"
      ),
      children: [
        typeof s == "string" ? /* @__PURE__ */ e(O, { className: t(c !== "auto" && "overflow-hidden"), children: s }) : /* @__PURE__ */ e(
          "div",
          {
            className: t("truncate", c !== "auto" && "overflow-hidden"),
            children: s
          }
        ),
        y && /* @__PURE__ */ n("div", { className: "flex items-center", children: [
          l && /* @__PURE__ */ e("div", { className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary", children: /* @__PURE__ */ e($, { label: l, children: /* @__PURE__ */ e(
            "div",
            {
              className: t(
                "flex h-5 w-5 items-center justify-center rounded-xs",
                w()
              ),
              tabIndex: 0,
              children: /* @__PURE__ */ e(h, { icon: R, size: "sm" })
            }
          ) }) }),
          r && /* @__PURE__ */ e(
            a.button,
            {
              onClick: r,
              className: t(
                "relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100",
                w()
              ),
              "aria-label": "Sort",
              whileTap: { scale: 0.8 },
              transition: { duration: 0.1 },
              children: /* @__PURE__ */ n(j, { children: [
                /* @__PURE__ */ e(
                  a.div,
                  {
                    className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
                    animate: {
                      rotate: o === "desc" ? 0 : 180,
                      x: o === "none" ? -3 : 0,
                      y: o === "none" ? -1 : 0,
                      scale: o === "none" ? 0.9 : 1
                    },
                    transition: {
                      duration: 0.2,
                      ease: [0.175, 0.885, 0.32, 1.275]
                    },
                    children: /* @__PURE__ */ e(h, { icon: v, size: "xs" })
                  },
                  "sort-arrow"
                ),
                o === "none" && /* @__PURE__ */ e(
                  a.div,
                  {
                    className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
                    initial: { opacity: 0, x: 0, y: 0, scale: 0.9 },
                    animate: { opacity: 1, x: 3, y: 1, scale: 0.9 },
                    exit: { opacity: 0, x: 0, y: 0, scale: 0.9 },
                    transition: {
                      duration: 0.2,
                      ease: [0.175, 0.885, 0.32, 1.275]
                    },
                    children: /* @__PURE__ */ e(h, { icon: v, size: "xs" })
                  },
                  "sort-arrow-secondary"
                )
              ] })
            }
          )
        ] })
      ]
    }
  ) }), p = N(c), I = u !== void 0 ? N(u) : p;
  return /* @__PURE__ */ n(
    A,
    {
      className: t(
        "group h-11",
        "bg-f1-background",
        x && (b || g) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']",
        x && "sticky",
        d && "after:hidden",
        z
      ),
      tabIndex: i ? 0 : void 0,
      colSpan: F,
      style: {
        width: p,
        maxWidth: p,
        minWidth: I,
        left: W,
        right: k
      },
      role: d ? "presentation" : void 0,
      "aria-sort": r ? o === "asc" ? "ascending" : o === "desc" ? "descending" : "none" : void 0,
      children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary" }),
        /* @__PURE__ */ e(j, { children: (f && b || m && g) && /* @__PURE__ */ e(
          a.div,
          {
            className: t(
              "absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent",
              f && "-right-4 bg-gradient-to-r",
              m && "-left-4 bg-gradient-to-l"
            ),
            initial: { opacity: 0 },
            animate: { opacity: 0.1 },
            exit: { opacity: 0 }
          },
          "shadow-gradient"
        ) }),
        !d && H
      ]
    }
  );
}
export {
  Z as TableHead
};
