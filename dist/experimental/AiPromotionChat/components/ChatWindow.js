import { jsx as i } from "react/jsx-runtime";
import { useAutoClear as n } from "../hooks/useAutoClear.js";
import { useAiPromotionChat as d } from "../providers/AiPromotionChatStateProvider.js";
import { AnimatePresence as s } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as a } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const u = ({ children: t }) => {
  const {
    open: o,
    shouldPlayEntranceAnimation: e,
    setShouldPlayEntranceAnimation: r,
    autoClearMinutes: l
  } = d();
  return n({
    reset: () => {
    },
    isOpen: o,
    autoClearMinutes: l
  }), /* @__PURE__ */ i(s, { children: o && /* @__PURE__ */ i(
    a.div,
    {
      "aria-hidden": !o,
      className: "relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden ",
      initial: e ? { opacity: 0, width: 0 } : !1,
      animate: { opacity: 1, width: 360 },
      exit: { opacity: 0, width: 0 },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        e && r(!1);
      },
      children: /* @__PURE__ */ i("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ i(
        a.div,
        {
          className: "relative flex h-full w-full flex-col overflow-x-hidden ",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {
            duration: e ? 0.3 : 0.05,
            ease: "easeOut",
            delay: e ? 0.2 : 0
          },
          children: t
        }
      ) })
    },
    "chat-window"
  ) });
};
export {
  u as SidebarWindow
};
