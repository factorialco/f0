import { jsx as i } from "react/jsx-runtime";
import { forwardRef as y, useState as C, useEffect as b } from "react";
import { F0Icon as w } from "../../components/F0Icon/index.js";
import x from "../../icons/app/Check.js";
import I from "../../icons/app/LayersFront.js";
import "../../icons/app/Menu.js";
import { Action as T } from "../Action/Action.js";
import { AnimatePresence as g } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as h } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as L } from "../../lib/providers/i18n/i18n-provider.js";
const k = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 }
}, v = { duration: 0.15, ease: "easeOut" }, A = y(
  ({
    valueToCopy: r,
    onCopy: l,
    copyTooltipLabel: c,
    copiedTooltipLabel: s,
    variant: p = "neutral",
    size: e = "sm",
    ...m
  }, d) => {
    const [o, a] = C(!1), f = L(), u = c ?? f.actions.copy, n = o ? s ?? "Copied" : u;
    return b(() => {
      let t = null;
      return o && (t = setTimeout(() => a(!1), 1e3)), () => {
        t && clearTimeout(t);
      };
    }, [o]), /* @__PURE__ */ i(
      T,
      {
        ref: d,
        variant: p,
        size: e,
        onClick: (t) => {
          t.stopPropagation(), window.navigator.clipboard.writeText(r), a(!0), l?.(t);
        },
        "aria-live": "polite",
        "aria-label": n,
        title: n,
        ...m,
        compact: !0,
        children: /* @__PURE__ */ i(g, { mode: "wait", initial: !1, children: /* @__PURE__ */ i(
          h.span,
          {
            variants: k,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: v,
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "middle"
            },
            children: /* @__PURE__ */ i(
              w,
              {
                size: e === "sm" ? "sm" : "md",
                icon: o ? x : I
              }
            )
          },
          o ? "check" : "copy"
        ) })
      }
    );
  }
);
A.displayName = "ButtonCopy";
export {
  A as ButtonCopy
};
