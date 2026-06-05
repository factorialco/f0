import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { memo as t } from "react";
import { motion as n } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0OneIcon as o } from "../../../ai/F0OneIcon/F0OneIcon.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
const s = n.create(o), l = () => {
  const r = i();
  return /* @__PURE__ */ a("div", { className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md", children: [
    /* @__PURE__ */ e(
      s,
      {
        size: "xs",
        animate: {
          rotate: [0, 360],
          scale: [1, 0.8, 1],
          filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
        },
        transition: {
          rotate: {
            duration: 1,
            ease: "linear",
            repeat: 1 / 0,
            repeatDelay: 1
            // Adds a 0.5s delay between each repetition
          },
          scale: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
            repeatDelay: 1
          },
          filter: {
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
            repeat: 1 / 0,
            repeatDelay: 1
          }
        }
      }
    ),
    /* @__PURE__ */ e("span", { className: "font-medium", children: r.t("surveyFormBuilder.labels.applyingChanges") })
  ] });
}, c = t(l);
export {
  c as default
};
