import { jsx as n } from "react/jsx-runtime";
import { usePrivacyMode as o } from "../../../lib/privacyMode.js";
import { cn as e } from "../../../lib/utils.js";
import { motion as t } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const m = ({ children: i }) => {
  const { enabled: r } = o();
  return /* @__PURE__ */ n(
    "div",
    {
      className: e(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        r && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      ),
      "aria-hidden": r,
      children: /* @__PURE__ */ n(
        t.div,
        {
          className: "h-full w-full",
          animate: {
            opacity: r ? 0 : 1,
            scale: r ? 0.95 : 1
          },
          transition: { duration: 0.15 },
          children: i
        }
      )
    }
  );
};
export {
  m as PrivateBox
};
