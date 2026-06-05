import { jsxs as o, jsx as n } from "react/jsx-runtime";
import * as r from "react";
import { motion as i } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const c = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, l = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 }
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1]
  }
}, s = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, m = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, d = r.forwardRef(({ animate: t = "normal", ...a }, e) => /* @__PURE__ */ o(
  "svg",
  {
    ref: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: [
      /* @__PURE__ */ n(
        i.circle,
        {
          cx: "12",
          cy: "12",
          r: "8",
          fill: "currentColor",
          initial: "normal",
          variants: m,
          transition: s,
          animate: t,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ n(
        i.path,
        {
          d: "M16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z",
          fill: "white",
          fillRule: "evenodd",
          clipRule: "evenodd",
          initial: "normal",
          variants: l,
          transition: c,
          animate: t,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
));
d.displayName = "CheckCircleAnimated";
export {
  d as default
};
