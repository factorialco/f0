import { jsxs as o, jsx as t } from "react/jsx-runtime";
import * as e from "react";
import { motion as i } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, s = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 }
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1]
  }
}, l = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, m = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, d = e.forwardRef(({ animate: n = "normal", ...r }, a) => /* @__PURE__ */ o(
  "svg",
  {
    ref: a,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "1.3",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...r,
    children: [
      /* @__PURE__ */ t(
        i.circle,
        {
          cx: "12",
          cy: "12",
          r: "8",
          initial: "normal",
          variants: m,
          transition: l,
          animate: n,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        i.path,
        {
          d: "M9.00003 12L11.4 14.4L15 9.6",
          initial: "normal",
          variants: s,
          transition: c,
          animate: n,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
));
d.displayName = "CheckCircleLineAnimated";
export {
  d as default
};
