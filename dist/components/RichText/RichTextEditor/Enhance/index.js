import { jsxs as v, jsx as n } from "react/jsx-runtime";
import { Root as y, Trigger as C, Portal as g, Content as x } from "../../../../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
import { useRef as O, useState as P } from "react";
import { ButtonInternal as b } from "../../../F0Button/internal.js";
import E from "../../../../icons/app/Ai.js";
import "../../../../icons/app/Menu.js";
import { useI18n as R } from "../../../../lib/providers/i18n/i18n-provider.js";
import { AIEnhanceMenu as I } from "./EnhanceMenu/index.js";
import { AnimatePresence as A } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as B } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const q = ({
  editor: s,
  onEnhanceWithAI: l,
  isLoadingEnhance: c,
  enhanceConfig: m,
  disableButtons: d,
  hideLabel: f,
  position: p = "bottom",
  setLastIntent: h
}) => {
  const a = R(), r = O(null), [i, t] = P(!1), u = (e) => {
    e.preventDefault(), r.current ? t((o) => !o) : t(!1);
  };
  return /* @__PURE__ */ v(
    y,
    {
      open: i,
      modal: !1,
      onOpenChange: (e) => {
        t(e), e || s.view.dom.classList.remove("maintain-selection");
      },
      children: [
        /* @__PURE__ */ n(C, { asChild: !0, children: /* @__PURE__ */ n(
          b,
          {
            pressed: i,
            variant: "ai",
            ref: r,
            icon: E,
            label: a.richTextEditor.ai.enhanceButtonLabel,
            onClick: (e) => {
              u(e);
            },
            disabled: d || c,
            hideLabel: f
          }
        ) }),
        /* @__PURE__ */ n(g, { container: document.body, children: /* @__PURE__ */ n(
          x,
          {
            side: p,
            align: "start",
            sideOffset: 10,
            alignOffset: 0,
            collisionPadding: 10,
            style: { zIndex: 9999 },
            children: /* @__PURE__ */ n(A, { children: i && /* @__PURE__ */ n(
              B.div,
              {
                initial: { opacity: 0, scale: 0.95, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.95, y: 10 },
                transition: { duration: 0.2 },
                children: /* @__PURE__ */ n(
                  I,
                  {
                    onSelect: ({ selectedIntent: e, customIntent: o }) => {
                      l(e, o), h({
                        selectedIntent: e || void 0,
                        customIntent: o || void 0
                      }), t(!1);
                    },
                    onClose: () => {
                      t(!1);
                    },
                    enhancementOptions: m?.enhancementOptions || [],
                    inputPlaceholder: a.richTextEditor.ai.customPromptPlaceholder
                  }
                )
              }
            ) })
          }
        ) })
      ]
    }
  );
};
export {
  q as EnhanceActivator
};
