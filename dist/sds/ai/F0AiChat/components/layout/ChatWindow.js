import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { breakpoints as k } from "../../../../../packages/core/dist/index.js";
import { useRef as E, useCallback as n, useState as I, useMemo as N } from "react";
import { useMediaQuery as _ } from "../../../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { cn as j } from "../../../../../lib/utils.js";
import { useAiChat as G } from "../../providers/AiChatStateProvider.js";
import { MIN_CHAT_WIDTH as L, MAX_CHAT_WIDTH as Q } from "../../utils/constants.js";
import { ResizeHandle as U } from "./ResizeHandle.js";
import { AnimatePresence as V } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as m } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { DropOverlay as X } from "../../../F0AiChatTextArea/components/DropOverlay.js";
import { F0AiPong as $ } from "../../../F0AiPong/F0AiPong.js";
const ie = ({ children: u }) => {
  const {
    open: d,
    visualizationMode: p,
    shouldPlayEntranceAnimation: t,
    setShouldPlayEntranceAnimation: h,
    resizable: g,
    setChatWidth: c,
    resetChatWidth: v,
    fileAttachments: D,
    isClarifying: x,
    fileDragOver: y,
    setFileDragOver: r,
    processDroppedFiles: b,
    activeGame: w,
    closeGame: C
  } = G(), i = p === "canvas", a = E(0), s = D?.onUploadFiles != null && !x, A = n(
    (e) => {
      e.preventDefault(), e.stopPropagation(), a.current++, s && r(!0);
    },
    [s, r]
  ), z = n((e) => {
    e.preventDefault(), e.stopPropagation();
  }, []), M = n(
    (e) => {
      e.preventDefault(), e.stopPropagation(), a.current--, a.current <= 0 && (a.current = 0, r(!1));
    },
    [r]
  ), P = n(
    (e) => {
      e.preventDefault(), e.stopPropagation(), a.current = 0, r(!1);
    },
    [r]
  ), R = p === "fullscreen", [l, O] = I(!1), W = _(`(max-width: ${k.md}px)`, {
    initializeWithValue: !0
  }), F = n(
    (e) => {
      c((S) => {
        const T = S + e;
        return Math.max(L, Math.min(Q, T));
      });
    },
    [c]
  ), H = N(() => l ? { duration: 0 } : t ? { duration: 0.3, ease: [0, 0, 0.1, 1] } : { duration: 0.3, ease: [0, 0, 0.1, 1] }, [l, t]);
  return /* @__PURE__ */ o(V, { children: d && /* @__PURE__ */ f(
    m.div,
    {
      className: "bg-f1-transparent pointer-events-auto relative ml-auto flex h-full dark:bg-f1-background md:py-1 md:pr-1",
      initial: t ? { opacity: 0, width: 0 } : !1,
      animate: {
        opacity: 1,
        width: "100%"
      },
      exit: { opacity: 0, width: 0 },
      transition: H,
      style: { transformOrigin: "right center" },
      onAnimationComplete: () => {
        t && h(!1);
      },
      children: [
        g && !R && !W && /* @__PURE__ */ o(
          U,
          {
            onResize: F,
            onReset: v,
            isResizing: l,
            setIsResizing: O,
            isCanvasMode: i
          }
        ),
        /* @__PURE__ */ f(
          "div",
          {
            "aria-hidden": !d,
            className: j(
              "relative flex h-full w-full flex-col overflow-hidden bg-f1-special-page border border-solid border-f1-border-secondary",
              i && "border-l-transparent",
              // In canvas mode the chat sits flush against the canvas with
              // only the ResizeHandle (1px) between them. Dropping the left
              // border avoids stacking canvas-border + handle + chat-border
              // = 3px of visual separation; the handle is the single seam.
              i ? "xs:rounded-r-xl" : "xs:rounded-xl"
            ),
            onDragEnter: A,
            onDragOver: z,
            onDragLeave: M,
            onDrop: P,
            children: [
              /* @__PURE__ */ o(
                m.div,
                {
                  className: "relative flex h-full w-full flex-col overflow-hidden",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: {
                    duration: t ? 0.3 : 0.05,
                    ease: "easeOut",
                    delay: t ? 0.2 : 0
                  },
                  children: u
                }
              ),
              s && /* @__PURE__ */ o(
                X,
                {
                  visible: y,
                  onFilesDropped: (e) => {
                    a.current = 0, r(!1), b(e);
                  }
                }
              ),
              w === "pong" && /* @__PURE__ */ o($, { onClose: C })
            ]
          }
        )
      ]
    },
    "chat-wrapper"
  ) });
};
export {
  ie as SidebarWindow
};
