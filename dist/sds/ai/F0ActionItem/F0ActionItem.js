import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { F0Icon as m } from "../../../components/F0Icon/index.js";
import h from "../../../icons/animated/CheckCircleLine.js";
import p from "../../../icons/app/DottedCircle.js";
import { useReducedMotion as u } from "../../../lib/a11y.js";
import { cn as x } from "../../../lib/utils.js";
import { ChatSpinner as g } from "./components/ChatSpinner.js";
import './styles.css';/* empty css           */
import { AnimatePresence as y } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as a } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const d = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}, F = ({ title: n, status: t, inGroup: r }) => {
  const o = {
    duration: u() ? 0 : 0.18,
    ease: [0.33, 1, 0.68, 1]
  }, l = t === "inProgress", i = t === "executing", f = t === "completed", s = t === "writing";
  return /* @__PURE__ */ c("div", { className: "flex w-full items-start gap-1 text-f1-foreground-secondary", children: [
    /* @__PURE__ */ e("div", { className: "flex h-5 w-6 shrink-0 items-center justify-start", children: /* @__PURE__ */ c(y, { mode: "wait", children: [
      l && /* @__PURE__ */ e(
        a.div,
        {
          className: "flex h-5 w-5 shrink-0 items-center justify-center",
          ...d,
          transition: o,
          children: /* @__PURE__ */ e(
            m,
            {
              state: "animate",
              size: r ? "md" : "lg",
              icon: p
            }
          )
        },
        "inProgress"
      ),
      (i || s) && /* @__PURE__ */ e("div", { className: "flex h-5 w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ e(g, { variant: i ? "default" : "continuous" }) }),
      f && /* @__PURE__ */ e(
        a.div,
        {
          ...d,
          className: "flex h-5 w-5 shrink-0 items-center justify-center",
          transition: o,
          children: /* @__PURE__ */ e(
            m,
            {
              color: "secondary",
              state: "animate",
              size: r ? "md" : "lg",
              icon: h
            }
          )
        },
        "completed"
      )
    ] }) }),
    n && /* @__PURE__ */ e(
      "p",
      {
        className: x(
          "text-pretty leading-5",
          (i || s) && "shine-text"
        ),
        children: n
      }
    )
  ] });
};
export {
  F as F0ActionItem
};
