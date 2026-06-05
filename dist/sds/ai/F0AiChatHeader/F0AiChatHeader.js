import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { breakpoints as y } from "../../../packages/core/dist/index.js";
import { useMediaQuery as g } from "../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { ButtonInternal as n } from "../../../components/F0Button/internal.js";
import { F0Icon as F } from "../../../components/F0Icon/index.js";
import k from "../../../icons/app/ChevronDown.js";
import R from "../../../icons/app/Cross.js";
import $ from "../../../icons/app/Maximize.js";
import "../../../icons/app/Menu.js";
import j from "../../../icons/app/Minimize.js";
import P from "../../../icons/app/New.js";
import { cn as p } from "../../../lib/utils.js";
import { Action as B } from "../../../ui/Action/Action.js";
import { CreditsPopover as I } from "./components/CreditsPopover.js";
import { EmployeeCreditsPopover as L } from "./components/EmployeeCreditsPopover.js";
import { motion as d } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as O } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as A } from "../../../lib/OneEllipsis/OneEllipsis.js";
const h = ({
  credits: t,
  employeeCredits: a
}) => a ? /* @__PURE__ */ e(L, { employeeCredits: a }) : t ? /* @__PURE__ */ e(I, { credits: t }) : null, V = ({
  historyEnabled: t = !1,
  title: a,
  currentThreadTitle: u,
  fullscreen: l = !1,
  lockVisualizationMode: o = !1,
  onToggleVisualizationMode: x,
  onClose: w,
  onNewChat: v,
  onOpenHistory: C,
  hasMessages: N = !1,
  credits: s,
  employeeCredits: m
}) => {
  const i = O(), b = g(`(max-width: ${y.md}px)`, {
    initializeWithValue: !0
  }), c = !o && !b && /* @__PURE__ */ e(
    n,
    {
      variant: "ghost",
      hideLabel: !0,
      label: l ? i.ai.collapseChat : i.ai.expandChat,
      icon: l ? j : $,
      onClick: x
    }
  ), f = /* @__PURE__ */ e(
    n,
    {
      variant: "ghost",
      hideLabel: !0,
      label: i.ai.closeChat,
      icon: R,
      onClick: w
    }
  );
  return t ? /* @__PURE__ */ r(
    "header",
    {
      className: p(
        "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center", children: !o && /* @__PURE__ */ e(
          B,
          {
            variant: "ghost",
            size: "md",
            className: "min-w-0 max-w-full [&>div>span>span]:w-full",
            onClick: C,
            children: /* @__PURE__ */ r("div", { className: "flex min-w-0 items-center gap-1", children: [
              /* @__PURE__ */ e(A, { lines: 1, className: "min-w-0 text-left", children: u ?? i.ai.newConversation }),
              /* @__PURE__ */ e(F, { icon: k, color: "default", size: "md" })
            ] })
          }
        ) }),
        /* @__PURE__ */ r(
          d.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2, ease: "easeOut" },
            children: [
              /* @__PURE__ */ e(
                h,
                {
                  credits: s,
                  employeeCredits: m
                }
              ),
              c,
              f
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r("header", { className: p("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("h2", { className: "text-f1-foreground", children: a ?? "" }) }),
    /* @__PURE__ */ r(
      d.div,
      {
        className: "flex items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          N && !o && /* @__PURE__ */ e(
            n,
            {
              variant: "ghost",
              hideLabel: !0,
              label: i.ai.startNewChat,
              icon: P,
              onClick: v
            }
          ),
          /* @__PURE__ */ e(
            h,
            {
              credits: s,
              employeeCredits: m
            }
          ),
          c,
          f
        ]
      }
    )
  ] });
};
export {
  V as F0AiChatHeader
};
