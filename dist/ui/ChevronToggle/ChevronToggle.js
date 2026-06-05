import { jsx as t } from "react/jsx-runtime";
import { F0Icon as d } from "../../components/F0Icon/index.js";
import f from "../../icons/app/ChevronDown.js";
import "../../icons/app/Menu.js";
import { useReducedMotion as l } from "../../lib/a11y.js";
import { cn as p } from "../../lib/utils.js";
import { motion as u } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const y = ({
  open: r,
  className: i,
  onClick: e,
  disabled: n,
  size: m = "xs",
  closedRotation: c = 0,
  openRotation: s = 180
}) => {
  const a = l(), o = r ? s : c;
  return /* @__PURE__ */ t(
    u.div,
    {
      initial: { rotate: o },
      animate: { rotate: o },
      transition: { duration: a ? 0 : 0.2 },
      className: p(
        "flex h-3 w-3 shrink-0 items-center justify-center",
        n && "cursor-not-allowed opacity-50",
        i
      ),
      onClick: e,
      children: /* @__PURE__ */ t(d, { icon: f, size: m, role: "button" })
    }
  );
};
export {
  y as ChevronToggle
};
