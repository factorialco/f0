import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { ButtonInternal as P } from "../../../../components/F0Button/internal.js";
import { F0Icon as b } from "../../../../components/F0Icon/index.js";
import { OneEllipsis as z } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { Counter as A } from "../../../../ui/Counter/index.js";
import F from "../../../../icons/app/ChevronDown.js";
import O from "../../../../icons/app/Handle.js";
import "../../../../icons/app/Menu.js";
import { cn as l, focusRing as R } from "../../../../lib/utils.js";
import { ItemDropDown as E } from "./ItemDropDown.js";
import { AnimatePresence as m } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as i } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as L } from "../../../../lib/providers/i18n/i18n-provider.js";
function Y({
  item: r,
  counter: d,
  isActive: f,
  sortable: p,
  collapsible: w = !1,
  isExpanded: N = !1,
  onToggleExpanded: k = () => {
  },
  children: j,
  open: n,
  setOpen: C,
  isHovered: u,
  setIsHovered: x
}) {
  const I = L(), { label: D, onClick: h, icon: t, disabled: o, otherActions: a } = r, s = a && a.length > 0 && (u || n), y = d && !s, g = p && (u || n);
  return /* @__PURE__ */ v("div", { className: "flex w-full min-w-0 items-center", children: [
    w && /* @__PURE__ */ e(
      P,
      {
        compact: !0,
        size: "sm",
        variant: "ghost",
        onClick: (c) => {
          c.stopPropagation(), k?.(r.id);
        },
        label: I.actions.toggle,
        hideLabel: !0,
        className: l(
          "text-f1-icon transition-all",
          !N && "-rotate-90"
        ),
        icon: F
      }
    ),
    /* @__PURE__ */ v(
      "div",
      {
        className: l(
          R("focus:border-f1-border-focus"),
          "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded border border-solid border-transparent px-1.5 text-sm transition-colors",
          f && "bg-f1-background-hover",
          h && !o && "cursor-pointer hover:bg-f1-background-hover",
          o && "cursor-not-allowed opacity-30"
        ),
        "data-active": f || void 0,
        onClick: o ? void 0 : () => h?.(r.id),
        onMouseEnter: () => x(!0),
        onMouseLeave: () => x(!1),
        children: [
          (p || t) && /* @__PURE__ */ e("div", { className: "absolute left-1.5 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ e(m, { mode: "wait", children: g ? /* @__PURE__ */ e(
            i.div,
            {
              initial: { opacity: 0, scale: 0.8, x: 0 },
              animate: { opacity: 1, scale: 1, x: 0 },
              exit: { opacity: 0, scale: 0.8, x: 0 },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              className: "flex flex-shrink-0 items-center justify-center",
              children: /* @__PURE__ */ e(
                "div",
                {
                  className: "flex flex-shrink-0 cursor-grab items-center justify-center text-f1-icon active:cursor-grabbing",
                  "aria-label": "Drag to reorder",
                  children: /* @__PURE__ */ e(b, { icon: O, size: "xs" })
                }
              )
            },
            "handle"
          ) : t && /* @__PURE__ */ e(
            i.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              className: "flex flex-shrink-0 items-center justify-center p-0.5 text-f1-icon",
              children: /* @__PURE__ */ e(b, { icon: t, size: "md" })
            },
            "icon"
          ) }) }),
          /* @__PURE__ */ e(
            z,
            {
              lines: 1,
              className: l(
                "flex-grow text-[14px] font-medium text-f1-foreground transition-all",
                g || t ? "pl-7" : "pl-0.5"
              ),
              children: D
            }
          ),
          /* @__PURE__ */ e(m, { children: (y || s) && /* @__PURE__ */ e(
            i.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              onClick: (c) => c.stopPropagation(),
              className: "relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center",
              children: /* @__PURE__ */ e(m, { mode: "wait", children: y ? /* @__PURE__ */ e(
                i.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.8 },
                  transition: {
                    duration: 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  className: "flex items-center justify-center",
                  children: /* @__PURE__ */ e(A, { value: d })
                },
                "counter"
              ) : s && /* @__PURE__ */ e(
                i.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.8 },
                  transition: {
                    duration: 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  className: "flex items-center justify-center",
                  children: a && /* @__PURE__ */ e(
                    E,
                    {
                      otherActions: a,
                      open: n,
                      setOpen: C,
                      disabled: o
                    }
                  )
                },
                "dropdown"
              ) })
            },
            "actions-container"
          ) })
        ]
      }
    ),
    j
  ] });
}
export {
  Y as PrimitiveItem
};
