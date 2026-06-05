import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { Spinner as t } from "../../../../../ui/Spinner/index.js";
import { cn as n } from "../../../../../lib/utils.js";
import { AnimatePresence as a } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as i } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const f = ({ label: r }) => /* @__PURE__ */ o("div", { className: "dark flex items-center gap-3 rounded-md border border-solid border-f1-border bg-f1-background px-4 py-1.5 drop-shadow-sm", children: [
  /* @__PURE__ */ e(t, { size: "small" }),
  /* @__PURE__ */ e("p", { className: "font-medium text-f1-foreground", children: r })
] }), p = ({
  isFullscreen: r = !1
}) => /* @__PURE__ */ e(a, { children: /* @__PURE__ */ e(
  i.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
    className: n(
      "absolute inset-0 z-50 flex items-center justify-center rounded-lg px-3 pb-2 pt-3",
      !r && "max-h-60"
    ),
    children: /* @__PURE__ */ e(
      i.div,
      {
        className: n(
          "flex h-full w-full flex-row items-center justify-center gap-3 rounded-md",
          r && "max-w-[824px]"
        ),
        style: {
          background: "linear-gradient(90deg, #E5561980, #A1ADE580, #E5194380, #E5561980)",
          backgroundSize: "300% 100%"
        },
        animate: {
          backgroundPosition: ["0% 50%", "100% 50%"]
        },
        transition: {
          duration: 3,
          ease: "linear",
          repeat: 1 / 0
        }
      }
    )
  },
  "full-doc-loading"
) });
export {
  f as LoadingEnhanceInline,
  p as LoadingEnhanceOverlay
};
