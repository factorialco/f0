import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useState as m } from "react";
import { F0Icon as a } from "../../../../components/F0Icon/index.js";
import c from "../../../../icons/app/ChevronRight.js";
import { useReducedMotion as d } from "../../../../lib/a11y.js";
import { Collapsible as p, CollapsibleTrigger as f, CollapsibleContent as u } from "../../../../ui/collapsible.js";
import { motion as h } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const M = ({
  icon: s,
  title: r,
  children: i
}) => {
  const [o, n] = m(!1), l = d();
  return /* @__PURE__ */ t(
    p,
    {
      className: "mb-1 w-full",
      open: o,
      onOpenChange: n,
      children: [
        /* @__PURE__ */ t(f, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ e("span", { className: "mr-2 *:block", children: /* @__PURE__ */ e(a, { icon: s, className: "block" }) }),
          /* @__PURE__ */ e("span", { className: "mr-[2px]", children: r }),
          /* @__PURE__ */ e(
            a,
            {
              icon: c,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ e(u, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ e(
          h.div,
          {
            initial: !1,
            animate: {
              height: o ? "auto" : 0,
              opacity: o ? 1 : 0,
              visibility: o ? "visible" : "hidden"
            },
            transition: {
              duration: l ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: i
          }
        ) })
      ]
    }
  );
};
export {
  M as CollapsibleMessage
};
