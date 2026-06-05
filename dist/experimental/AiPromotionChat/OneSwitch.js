import { jsx as e, jsxs as f } from "react/jsx-runtime";
import { Root as m, Thumb as u } from "../../node_modules/.pnpm/@radix-ui_react-switch@1.2.6_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-switch/dist/index.js";
import { useState as h } from "react";
import { cn as n, focusRing as b } from "../../lib/utils.js";
import { TooltipProvider as g, Tooltip as p, TooltipTrigger as v, TooltipContent as _ } from "../../ui/tooltip.js";
import x from "./OneIcon.js";
import { useAiPromotionChat as k } from "./providers/AiPromotionChatStateProvider.js";
import { motion as w } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as y } from "../../lib/providers/i18n/i18n-provider.js";
const M = ({
  className: i,
  disabled: o
}) => {
  const { enabled: s, setOpen: l, open: r } = k(), t = y(), [d, a] = h(!1);
  return s ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ f(p, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ e(v, { asChild: !0, children: /* @__PURE__ */ e(
      w.div,
      {
        animate: {
          "--gradient-angle": ["0deg", "360deg"]
        },
        transition: {
          default: {
            duration: 8,
            ease: "linear",
            repeat: 1 / 0
          }
        },
        style: {
          "--gradient-angle": "180deg"
        },
        children: /* @__PURE__ */ e(
          m,
          {
            onCheckedChange: (c) => {
              l(c);
            },
            checked: r,
            "aria-label": r ? t.ai.closeChat : t.ai.openChat,
            className: n(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              o && "cursor-not-allowed opacity-50",
              b(),
              i
            ),
            disabled: o,
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            children: /* @__PURE__ */ e(
              u,
              {
                className: n(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                  x,
                  {
                    size: "sm",
                    background: r ? "white" : void 0,
                    hover: d
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !r && /* @__PURE__ */ e(_, { side: "left", className: "font-medium", children: t.ai.welcome })
  ] }) }) }) : null;
};
export {
  M as OneSwitch
};
