import { jsx as e, jsxs as o } from "react/jsx-runtime";
import d from "../../../icons/app/ChevronDown.js";
import m from "../../../icons/app/ChevronUp.js";
import "../../../icons/app/Menu.js";
import { useReducedMotion as p } from "../../../lib/a11y.js";
import { cn as r, focusRing as f } from "../../../lib/utils.js";
import { Collapsible as h, CollapsibleTrigger as n, CollapsibleContent as u } from "../../../ui/collapsible.js";
import { AccordionActions as x } from "./AccordionActions.js";
import { AnimatePresence as g } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as b } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as v } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as y } from "../../F0Button/F0Button.js";
const T = ({
  item: t,
  open: i,
  onOpenChange: l
}) => {
  const c = p(), s = v().t(
    i ? "actions.collapseItem" : "actions.expandItem",
    { title: t.title }
  ), a = !!t.actions && t.actions.length > 0;
  return /* @__PURE__ */ e(h, { open: i, onOpenChange: l, asChild: !0, children: /* @__PURE__ */ o("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ o("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e(n, { asChild: !0, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: r(
            "flex flex-1 min-w-0 items-center py-3 pl-4 pr-2 text-left",
            f()
          ),
          children: /* @__PURE__ */ e("span", { className: "flex-1 truncate font-medium text-f1-foreground", children: t.title })
        }
      ) }),
      a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2 px-2 py-3", children: /* @__PURE__ */ e(x, { actions: t.actions }) }),
      /* @__PURE__ */ e("div", { className: r("flex items-center py-3 pl-2 pr-4"), children: /* @__PURE__ */ e(n, { asChild: !0, children: /* @__PURE__ */ e(
        y,
        {
          variant: "outline",
          size: "sm",
          icon: i ? m : d,
          label: s,
          hideLabel: !0
        }
      ) }) })
    ] }),
    /* @__PURE__ */ e(g, { initial: !1, children: i && /* @__PURE__ */ e(
      b.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: c ? 0 : 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ e(u, { forceMount: !0, asChild: !0, children: /* @__PURE__ */ e("div", { className: "px-4 pb-4 text-f1-foreground-secondary", children: t.description }) })
      }
    ) })
  ] }) });
};
export {
  T as AccordionItem
};
