import { jsx as e, jsxs as v } from "react/jsx-runtime";
import { breakpoints as k } from "../../packages/core/dist/index.js";
import { Fragment as O, useRef as R, useState as V, useEffect as x, useMemo as $ } from "react";
import { useMediaQuery as P } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { AiPromotionChatProvider as B, AiPromotionChat as H } from "../../experimental/AiPromotionChat/index.js";
import { useAiPromotionChat as L } from "../../experimental/AiPromotionChat/providers/AiPromotionChatStateProvider.js";
import { useReducedMotion as U } from "../../lib/a11y.js";
import { experimentalComponent as G } from "../../lib/experimental.js";
import { cn as l, focusRing as Q } from "../../lib/utils.js";
import { useAiChat as q } from "../../sds/ai/F0AiChat/providers/AiChatStateProvider.js";
import { DEFAULT_CHAT_WIDTH as J } from "../../sds/ai/F0AiChat/utils/constants.js";
import { FrameProvider as X, useSidebar as W } from "./FrameProvider.js";
import { F0AiChatProvider as Y, F0AiChat as Z } from "../../sds/ai/F0AiChat/F0AiChat.js";
import { MotionConfig as ee } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/MotionConfig/index.js";
import { LayoutGroup as te } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/LayoutGroup/index.js";
import { AnimatePresence as ie } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as u } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0CanvasPanel as ne } from "../../sds/ai/F0CanvasPanel/F0CanvasPanel.js";
import { useI18n as oe } from "../../lib/providers/i18n/i18n-provider.js";
const re = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function ae({
  children: t,
  sidebar: i,
  banner: r,
  ai: n,
  aiPromotion: o
}) {
  return /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(
    se,
    {
      ai: n,
      aiPromotion: o,
      sidebar: i,
      banner: r,
      children: t
    }
  ) });
}
function se({
  children: t,
  sidebar: i,
  banner: r,
  ai: n,
  aiPromotion: o
}) {
  const a = n?.enabled ? Y : o?.enabled ? B : O, b = n?.enabled ? n : o?.enabled ? o : void 0;
  return /* @__PURE__ */ e(a, { ...b, children: /* @__PURE__ */ e(
    ue,
    {
      ai: n,
      aiPromotion: o,
      sidebar: i,
      banner: r,
      children: t
    }
  ) });
}
const Re = G(
  "ApplicationFrame",
  ae
), le = ({ contentId: t }) => {
  const i = oe();
  return /* @__PURE__ */ e(
    "a",
    {
      href: `#${t}`,
      className: Q(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: i.actions.skipToContent
    }
  );
};
function ce(t, i, r) {
  return !i && t ? r === "hidden" : i && !t ? r !== "hidden" : !1;
}
function de(t, i) {
  const { sidebarState: r, toggleSidebar: n } = W(), o = R(t);
  x(() => {
    i && ce(
      t,
      o.current,
      r
    ) && n({ isInvokedByUser: !1 }), o.current = t;
  }, [t, i, r, n]);
}
function ue({
  ai: t,
  aiPromotion: i,
  children: r,
  sidebar: n,
  banner: o
}) {
  const { sidebarState: a, toggleSidebar: b, isSmallScreen: E, setForceFloat: m } = W(), f = U(), {
    open: c,
    visualizationMode: F,
    canvasContent: y,
    canvasEntities: I,
    closeCanvas: M,
    chatWidth: _,
    resizable: j
  } = q(), s = F === "fullscreen", w = F === "canvas", { open: C } = L(), g = j ? _ : J, p = R(s), N = s && !p.current, A = !s && p.current, [
    S,
    z
  ] = V(!1);
  x(() => {
    !s && p.current && z(!0), p.current = s;
  }, [s]);
  const h = s || S || A, D = $(() => N ? { duration: 0.15, ease: "easeOut" } : A ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [N, A]), K = P(
    `(max-width: ${k.xl}px)`,
    { initializeWithValue: !0 }
  ), d = P(`(max-width: ${k.md}px)`, {
    initializeWithValue: !0
  });
  return x(() => {
    m(c);
  }, [c, m]), x(() => {
    m(C);
  }, [C, m]), de(c, K), /* @__PURE__ */ e(
    ee,
    {
      reducedMotion: f ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: f ? 0 : 0.2
      },
      children: /* @__PURE__ */ v("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ e("div", { className: "col-[1/-1]", children: o }),
        /* @__PURE__ */ e(te, { id: "ai-chat-group", children: /* @__PURE__ */ v("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ e(ie, { children: a === "unlocked" && /* @__PURE__ */ e(
            u.nav,
            {
              className: l(
                "fixed inset-0 z-20 bg-f1-background-inverse",
                !E && "hidden"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: f ? 0 : 0.2 },
              onClick: () => b()
            }
          ) }),
          /* @__PURE__ */ v(
            "div",
            {
              className: l(
                a !== "locked" ? "z-30" : "z-0",
                !f && "transition-all",
                a === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (T) => {
                a === "hidden" ? T?.setAttribute("inert", "") : T?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ e(le, { contentId: "content" }),
                n
              ]
            }
          ),
          /* @__PURE__ */ v(
            u.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: c && !d ? g : 0
              },
              transition: { paddingRight: re },
              children: [
                /* @__PURE__ */ e(
                  u.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: l(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      h ? "overflow-hidden" : "overflow-auto",
                      !c && !C && "xs:pr-1",
                      a === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: a,
                    children: /* @__PURE__ */ e(
                      u.div,
                      {
                        className: l(
                          "flex max-w-full flex-1",
                          h ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                t?.enabled && w && y && /* @__PURE__ */ e(
                  "div",
                  {
                    className: l(
                      // z-[21] sits above the chat wrapper (z-20 in canvas
                      // mode) so the canvas card's right-side shadow paints
                      // over the chat surface instead of being clipped by it.
                      "pointer-events-none flex justify-end",
                      d ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[21]"
                    ),
                    style: d ? void 0 : { right: g },
                    children: /* @__PURE__ */ e(
                      ne,
                      {
                        content: y,
                        onClose: M,
                        entities: I
                      }
                    )
                  }
                ),
                t?.enabled && /* @__PURE__ */ e(
                  u.div,
                  {
                    className: l(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      d ? "fixed inset-0 z-[30]" : l(
                        "absolute right-0 top-0 bottom-0",
                        // In canvas mode the chat wrapper must sit above
                        // the CanvasPanel (z-[15]) so the ResizeHandle's
                        // hit-area (which extends a few pixels over the
                        // canvas side of the seam) can receive hover
                        // events — otherwise the canvas captures them
                        // and the handle never lights up.
                        h || w ? "z-20" : "z-0",
                        a === "hidden" && h ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: d || s ? "100%" : g
                    },
                    transition: D,
                    onAnimationComplete: () => {
                      S && z(!1);
                    },
                    children: /* @__PURE__ */ e(Z, {})
                  }
                )
              ]
            }
          ),
          i?.enabled && /* @__PURE__ */ e(H, {})
        ] }) })
      ] })
    }
  );
}
export {
  Re as ApplicationFrame
};
