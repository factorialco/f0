import { jsxs as o, jsx as n, Fragment as I } from "react/jsx-runtime";
import { useState as g, useRef as M, useEffect as j } from "react";
import { cn as D } from "../../../../lib/utils.js";
import { Toolbar as F } from "../../CoreEditor/Toolbar/index.js";
import "../../../../icons/app/Menu.js";
import q from "../../../../icons/app/Paperclip.js";
import S from "../../../../icons/app/TextSize.js";
import { EnhanceActivator as $ } from "../Enhance/index.js";
import { ActionsMenu as B } from "./ActionsMenu/index.js";
import { motion as x } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0Button as w } from "../../../F0Button/F0Button.js";
const T = ({
  editor: c,
  maxCharacters: m,
  secondaryAction: C,
  primaryAction: b,
  fileInputRef: d,
  canUseFiles: k,
  onEnhanceWithAI: y,
  isLoadingEnhance: A,
  enhanceConfig: f,
  isFullscreen: r,
  setLastIntent: L,
  disableButtons: i,
  disabled: N = !1,
  setIsToolbarOpen: s,
  isToolbarOpen: e,
  plainHtmlMode: z
}) => {
  const [E, u] = g(!1), a = M(null), [R, h] = g(0);
  j(() => {
    a.current && h(a.current.offsetWidth);
    const t = () => {
      a.current && h(a.current.offsetWidth);
    };
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []);
  const l = R < 500, W = (t) => {
    t.preventDefault(), d?.current ? d.current.click() : document.getElementById(
      "rich-text-editor-upload-button"
    )?.click();
  }, p = () => /* @__PURE__ */ n(
    w,
    {
      onClick: (t) => {
        t?.preventDefault(), s(!0);
      },
      variant: "outline",
      size: "md",
      label: "Toolbar",
      disabled: i,
      hideLabel: !0,
      icon: S
    }
  ), v = () => /* @__PURE__ */ o(I, { children: [
    k && /* @__PURE__ */ n(
      w,
      {
        icon: q,
        onClick: W,
        hideLabel: !0,
        label: "Add Attachment",
        variant: "outline",
        disabled: i
      }
    ),
    f && /* @__PURE__ */ n(
      $,
      {
        editor: c,
        onEnhanceWithAI: y,
        isLoadingEnhance: A,
        enhanceConfig: f,
        disableButtons: i,
        hideLabel: l,
        setLastIntent: L,
        position: "top"
      }
    ),
    m && !l && /* @__PURE__ */ o("p", { className: "text-sm font-normal text-f1-foreground-secondary", children: [
      c.storage.characterCount.characters(),
      "/",
      m
    ] })
  ] });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      className: "flex min-h-[56px] max-w-full items-center gap-2 py-3",
      children: [
        /* @__PURE__ */ o("div", { className: "relative flex flex-grow items-center gap-2", children: [
          !r && /* @__PURE__ */ n(
            x.div,
            {
              initial: { width: 0 },
              animate: { width: e ? "100%" : 0 },
              transition: {
                duration: 0.3,
                delay: e ? 0.15 : 0,
                ease: "easeInOut"
              },
              onAnimationComplete: () => u(e),
              className: D(
                "absolute left-0 top-0 z-10 h-full overflow-hidden",
                N ? "bg-f1-background-tertiary" : "bg-f1-background"
              ),
              "aria-label": "Rich text editor toolbar",
              children: /* @__PURE__ */ n(
                F,
                {
                  editor: c,
                  isFullscreen: r,
                  disableButtons: i,
                  onClose: () => {
                    s(!1), u(!1), queueMicrotask(() => c.commands.focus());
                  },
                  animationComplete: E,
                  plainHtmlMode: z
                }
              )
            }
          ),
          !r && /* @__PURE__ */ o(
            x.div,
            {
              className: "flex items-center gap-2 overflow-hidden",
              initial: { opacity: 1 },
              animate: {
                opacity: e ? 0 : 1
              },
              transition: {
                duration: e ? 0.15 : 0.25,
                delay: e ? 0 : 0.2,
                ease: "easeInOut"
              },
              children: [
                p(),
                v()
              ]
            }
          ),
          r && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            !e && p(),
            v()
          ] })
        ] }),
        /* @__PURE__ */ n(
          B,
          {
            primaryAction: b,
            secondaryAction: C,
            useLittleMode: l,
            disableButtons: i,
            isFullscreen: r
          }
        )
      ]
    }
  );
};
export {
  T as Footer
};
