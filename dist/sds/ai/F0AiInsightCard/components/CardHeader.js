import { jsxs as m, Fragment as s, jsx as o } from "react/jsx-runtime";
import { useReducedMotion as c } from "../../../../lib/a11y.js";
import { cn as p } from "../../../../lib/utils.js";
import { AIButton as d } from "../../AIButton/AIButton.js";
import { descriptionVariants as l } from "../variants.js";
import { AnimatePresence as u } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as f } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as h } from "../../../../lib/providers/i18n/i18n-provider.js";
const M = ({
  description: t,
  isRevealed: r,
  onAskOne: i
}) => {
  const e = h(), a = c();
  return /* @__PURE__ */ m(s, { children: [
    t && /* @__PURE__ */ o("span", { className: p(l(), "truncate"), children: t }),
    /* @__PURE__ */ o(u, { children: i && r && /* @__PURE__ */ o(
      f.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: a ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ o(
          d,
          {
            size: "md",
            label: e.ai.ask,
            onClick: (n) => {
              n.stopPropagation(), i();
            }
          }
        )
      }
    ) })
  ] });
};
export {
  M as CardHeader
};
