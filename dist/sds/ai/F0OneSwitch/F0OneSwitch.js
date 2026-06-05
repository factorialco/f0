import { jsx as e, jsxs as w } from "react/jsx-runtime";
import { Root as C, Thumb as y } from "../../../node_modules/.pnpm/@radix-ui_react-switch@1.2.6_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-switch/dist/index.js";
import { useState as s, useEffect as l } from "react";
import { cn as c, focusRing as I } from "../../../lib/utils.js";
import { TooltipProvider as N, Tooltip as z, TooltipTrigger as D, TooltipContent as E } from "../../../ui/tooltip.js";
import { useAiChatToggle as F } from "../F0AiChat/providers/useAiChatToggle.js";
import { motion as H } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0OneIcon as j } from "../F0OneIcon/F0OneIcon.js";
import { useI18n as A } from "../../../lib/providers/i18n/i18n-provider.js";
const J = ({
  className: m,
  disabled: o,
  onVisible: d,
  tooltip: n,
  autoOpen: r = !1,
  onToggle: u
}) => {
  const { enabled: b, setOpen: g, open: t } = F(), a = A(), [p, f] = s(!1), [v, _] = s(!1), [x, h] = s(r), T = o && n?.whenDisabled ? n?.whenDisabled : n?.whenEnabled ?? a.ai.welcome, k = r ? x : v;
  return l(() => {
    r && h(!0);
  }, [r]), l(() => {
    if (!r) return;
    const i = setTimeout(() => h(!1), 3e3);
    return () => clearTimeout(i);
  }, [r]), l(() => {
    d?.();
  }, [d]), b ? /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(N, { children: /* @__PURE__ */ w(
    z,
    {
      delayDuration: 850,
      disableHoverableContent: !0,
      open: !t && k,
      onOpenChange: r ? () => {
      } : _,
      children: [
        /* @__PURE__ */ e(D, { asChild: !0, children: /* @__PURE__ */ e(
          H.div,
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
            children: /* @__PURE__ */ e(
              C,
              {
                onCheckedChange: (i) => {
                  g(i), u?.();
                },
                checked: t,
                "aria-label": t ? a.ai.closeChat : a.ai.openChat,
                className: c(
                  "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary transition-all hover:bg-f1-background-hover",
                  "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
                  "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
                  "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
                  o && "cursor-not-allowed opacity-50",
                  I(),
                  m
                ),
                disabled: o,
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                children: /* @__PURE__ */ e(
                  y,
                  {
                    className: c(
                      "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                    ),
                    style: {
                      transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                    },
                    children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
                      j,
                      {
                        size: "sm",
                        background: t ? "white" : void 0,
                        hover: p
                      }
                    ) })
                  }
                )
              }
            )
          }
        ) }),
        !t && /* @__PURE__ */ e(
          E,
          {
            side: "left",
            className: c("font-medium", r && "z-[100]"),
            children: T
          }
        )
      ]
    }
  ) }) }) : null;
};
export {
  J as F0OneSwitch
};
