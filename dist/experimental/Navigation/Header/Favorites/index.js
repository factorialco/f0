import { jsx as e } from "react/jsx-runtime";
import { useState as c } from "react";
import { F0Icon as l } from "../../../../components/F0Icon/index.js";
import f from "../../../../icons/app/Star.js";
import d from "../../../../icons/app/StarFilled.js";
import { cn as u, focusRing as p } from "../../../../lib/utils.js";
import { AnimatePresence as x } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as v } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const a = v.create(l), n = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, j = ({
  isMarked: t,
  onChange: o,
  label: r
}) => {
  const [i, s] = c(!1), m = () => {
    s(!0), o(!t);
  };
  return /* @__PURE__ */ e(x, { mode: "wait", children: /* @__PURE__ */ e(
    "button",
    {
      className: u(
        "flex h-6 w-6 items-center justify-center rounded",
        p()
      ),
      onClick: m,
      "aria-label": r,
      children: t ? /* @__PURE__ */ e(
        a,
        {
          size: "sm",
          icon: d,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: n,
          initial: i ? "enterFromUnfavorite" : "initial",
          animate: "animate",
          exit: "exit",
          transition: {
            ease: [0.175, 0.885, 0.27, 2]
          },
          "aria-hidden": "true",
          focusable: !1,
          tabIndex: -1
        },
        "favorite"
      ) : /* @__PURE__ */ e(
        a,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: f,
          className: "outline-none",
          variants: n,
          initial: i ? "enterFromFavorite" : "initial",
          "aria-hidden": "true",
          focusable: !1,
          tabIndex: -1,
          animate: "animate",
          exit: "exit",
          transition: {
            ease: [0, 0, 0.58, 1]
          }
        },
        "not-favorite"
      )
    }
  ) });
};
export {
  j as FavoriteButton
};
