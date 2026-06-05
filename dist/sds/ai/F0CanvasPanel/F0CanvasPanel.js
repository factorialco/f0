import { jsx as d, jsxs as h, Fragment as b } from "react/jsx-runtime";
import { useState as y, useRef as v, useEffect as w } from "react";
import { useReducedMotion as x } from "../../../lib/a11y.js";
import { cn as a } from "../../../lib/utils.js";
import { AnimatePresence as g } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as t } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
function N({
  content: e,
  onClose: f,
  entities: l
}) {
  const o = x(), [m, c] = y(0), i = v(e);
  w(() => {
    e && i.current && e !== i.current && c((n) => n + 1), i.current = e;
  }, [e]);
  const r = e && l ? l[e.type] : void 0, u = () => {
    if (!e || !r) return null;
    const n = r.renderHeader({
      content: e,
      onClose: f
    }), p = r.renderContent({
      content: e,
      refreshKey: m
    }), s = /* @__PURE__ */ h(b, { children: [
      n,
      /* @__PURE__ */ d(
        "div",
        {
          className: a(
            "relative flex-1",
            r.overflowHidden ? "overflow-hidden" : "overflow-auto"
          ),
          children: p
        }
      )
    ] });
    return r.wrapper ? r.wrapper({ content: e, children: s }) : s;
  };
  return /* @__PURE__ */ d(g, { children: e && /* @__PURE__ */ d(
    t.div,
    {
      className: a(
        // No overflow on the outer wrappers so the inner card's
        // box-shadow can escape rightward onto the chat. Setting any
        // overflow-y here would force overflow-x to `auto` (CSS spec)
        // and clip the shadow.
        "pointer-events-auto flex h-full flex-col",
        "md:py-1 dark:bg-f1-background p-0"
      ),
      initial: { opacity: 0, width: 0 },
      animate: { opacity: 1, width: "100%" },
      exit: { opacity: 0, width: 0 },
      transition: {
        duration: o ? 0 : 0.3,
        ease: [0, 0, 0.1, 1]
      },
      children: /* @__PURE__ */ d("div", { className: "flex h-full flex-col bg-f1-special-page p-0 md:rounded-l-lg md:py-1 md:pl-1 border border-solid border-f1-border-secondary border-r-0", children: /* @__PURE__ */ d(
        t.div,
        {
          className: a(
            // overflow-hidden only on the inner card (where rounded
            // corners clip content); the outer wrappers stay
            // unconstrained so the shadow can paint past the seam.
            "flex h-full w-full flex-col overflow-hidden",
            "bg-f1-background",
            // Directional shadow biased rightward so depth falls onto
            // the adjacent chat surface.
            "md:shadow-md shadow-none",
            "rounded-none border-none md:rounded-md md:border md:border-solid border-f1-border-secondary"
          ),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: {
            delay: o ? 0 : 0.15,
            duration: o ? 0 : 0.2
          },
          children: u()
        }
      ) })
    }
  ) });
}
N.displayName = "F0CanvasPanel";
export {
  N as F0CanvasPanel
};
