import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { useState as d, useEffect as u } from "react";
import { F0Icon as s } from "../../../../components/F0Icon/index.js";
import m from "../../../../icons/app/CheckCircle.js";
import f from "../../../../icons/app/LayersFront.js";
import "../../../../icons/app/Menu.js";
import { cn as e } from "../../../../lib/utils.js";
import { AnimatePresence as v } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as n } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const b = 750, S = ({ text: t, children: l }) => {
  const [o, a] = d(!1);
  u(() => {
    if (o) {
      const r = setTimeout(() => a(!1), b);
      return () => clearTimeout(r);
    }
  }, [o]);
  const p = async () => {
    try {
      await navigator.clipboard.writeText(t), a(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      "aria-label": o ? "Copied!" : `Copy ${t}`,
      className: e(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        o ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: p,
      children: [
        l,
        /* @__PURE__ */ i("div", { className: "relative h-5 w-5", children: /* @__PURE__ */ c(v, { mode: "wait", children: [
          !o && /* @__PURE__ */ i(
            n.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ i(
                s,
                {
                  icon: f,
                  size: "md",
                  "aria-hidden": !0,
                  color: "default",
                  className: e(
                    "opacity-0 transition-opacity duration-300",
                    !o && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "copy-icon"
          ),
          o && /* @__PURE__ */ i(
            n.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.1 },
              className: "absolute inset-0",
              children: /* @__PURE__ */ i(
                s,
                {
                  icon: m,
                  size: "md",
                  "aria-hidden": !0,
                  color: "positive",
                  className: e(
                    "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                    o && "group-hover:opacity-100 group-focus-visible:opacity-100"
                  )
                }
              )
            },
            "check-icon"
          )
        ] }) })
      ]
    }
  );
};
export {
  S as CopyAction
};
