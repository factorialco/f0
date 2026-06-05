import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { Root as h, Trigger as g, Portal as u, Content as b } from "../../../../../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
import { useState as y } from "react";
import { F0Icon as x } from "../../../../F0Icon/index.js";
import { cn as l } from "../../../../../lib/utils.js";
import { Action as C } from "../../../../../ui/Action/Action.js";
import { actionVariants as v } from "../../../../../ui/Action/variants.js";
import { AnimatePresence as k } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as w } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0ButtonToggle as N } from "../../../../F0ButtonToggle/F0ButtonToggle.js";
const R = ({
  items: s,
  disabled: n = !1,
  activator: t,
  darkMode: c = !1,
  position: d = "top"
}) => {
  const [r, i] = y(!1), m = () => {
    n || i(!r);
  };
  return /* @__PURE__ */ a(h, { open: r, modal: !1, onOpenChange: i, children: [
    /* @__PURE__ */ e(g, { asChild: !0, children: /* @__PURE__ */ e(
      N,
      {
        label: t.label,
        icon: t.icon,
        selected: r,
        disabled: n,
        onSelectedChange: m
      }
    ) }),
    /* @__PURE__ */ e(u, { container: document.body, children: /* @__PURE__ */ e(
      b,
      {
        side: d,
        align: "end",
        sideOffset: 10,
        collisionPadding: 10,
        alignOffset: 0,
        style: { zIndex: 9999 },
        children: /* @__PURE__ */ e(k, { children: r && /* @__PURE__ */ e(
          w.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 5 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 5 },
            transition: { duration: 0.15 },
            className: l(
              "flex w-fit flex-col gap-0.5 overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background p-0.5 drop-shadow-sm",
              c && "dark"
            ),
            children: s.map((o, f) => /* @__PURE__ */ e(
              C,
              {
                variant: "ghost",
                size: "md",
                onClick: (p) => {
                  p.preventDefault(), n || o.onClick();
                },
                disabled: n,
                "aria-label": o.label,
                className: l(
                  v({
                    variant: o.isActive ? "selected" : "ghost"
                  }),
                  "justify-start"
                ),
                children: /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ e(x, { icon: o.icon, size: "md" }),
                  /* @__PURE__ */ e("span", { className: "text-sm", children: o.label })
                ] })
              },
              `${o.label}-${f}`
            ))
          }
        ) })
      }
    ) })
  ] });
};
export {
  R as ToolbarDropdown
};
