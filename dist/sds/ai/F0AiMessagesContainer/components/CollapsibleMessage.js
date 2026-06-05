import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useState as x } from "react";
import { F0Icon as r } from "../../../../components/F0Icon/index.js";
import g from "../../../../icons/app/ChevronRight.js";
import { useReducedMotion as b } from "../../../../lib/a11y.js";
import { Collapsible as C, CollapsibleTrigger as v, CollapsibleContent as N } from "../../../../ui/collapsible.js";
import { cn as w } from "../../../../lib/utils.js";
import { motion as y } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const U = ({
  icon: l,
  title: c,
  children: d,
  open: s,
  defaultOpen: m = !1,
  onOpenChange: f,
  lockOpen: t = !1
}) => {
  const [p, u] = x(m), h = b(), n = s !== void 0, o = n ? s : p;
  return /* @__PURE__ */ i(
    C,
    {
      className: "mb-1 w-full",
      open: o,
      onOpenChange: (a) => {
        t || (n || u(a), f?.(a));
      },
      children: [
        /* @__PURE__ */ i(
          v,
          {
            disabled: t,
            className: w(
              "gap-1",
              t ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
            ),
            children: [
              /* @__PURE__ */ e("span", { className: "flex items-center justify-start h-6 w-6", children: /* @__PURE__ */ e(r, { icon: l, className: "block" }) }),
              /* @__PURE__ */ e("div", { className: "min-h-6 flex items-center", children: /* @__PURE__ */ e("span", { children: c }) }),
              !t && /* @__PURE__ */ e(r, { icon: g })
            ]
          }
        ),
        /* @__PURE__ */ e(N, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ e(
          y.div,
          {
            initial: !1,
            animate: {
              height: o ? "auto" : 0,
              opacity: o ? 1 : 0,
              visibility: o ? "visible" : "hidden"
            },
            transition: {
              duration: h ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: d
          }
        ) })
      ]
    }
  );
};
export {
  U as CollapsibleMessage
};
