import { jsx as e, jsxs as n, Fragment as F } from "react/jsx-runtime";
import { useMemo as ee, useRef as m } from "react";
import { ButtonInternal as se } from "../../../components/F0Button/internal.js";
import te from "../../../icons/app/ArrowDown.js";
import "../../../icons/app/Menu.js";
import { cn as d } from "../../../lib/utils.js";
import { Skeleton as f } from "../../../ui/skeleton.js";
import { ActiveFormCard as re } from "./components/ActiveFormCard.js";
import { AssistantMessage as oe } from "./components/AssistantMessage.js";
import { FeedbackModal as ae } from "./components/feedback/FeedbackModal.js";
import { FeedbackModalProvider as ne, useFeedbackSubmit as ie } from "./components/feedback/FeedbackProvider.js";
import { TurnFeedback as le } from "./components/feedback/TurnFeedback.js";
import { ScrollShadow as I } from "./components/ScrollShadow.js";
import { Thinking as ce } from "./components/Thinking.js";
import { UserMessage as me } from "./components/UserMessage.js";
import { WelcomeScreen as de } from "./components/WelcomeScreen.js";
import { useMessageScroll as fe } from "./useMessageScroll.js";
import { AnimatePresence as ge } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as he } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0ActionItem as S } from "../F0ActionItem/F0ActionItem.js";
import { useI18n as pe } from "../../../lib/providers/i18n/i18n-provider.js";
const ue = {
  threadId: "",
  onThumbsUp: () => {
  },
  onThumbsDown: () => {
  }
}, ze = (i) => /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ e(be, { ...i }) }), be = ({
  turns: i,
  isLoadingThread: g = !1,
  interrupt: T,
  initialMessage: w,
  onWelcomeClick: R,
  renderToolCall: C,
  onReplyQuote: U,
  onAssistantMessageRendered: $,
  autoScrollUserIntoView: j = !0,
  renderMarkdown: B,
  feedback: D,
  freezeLayout: W = !1,
  noShadows: H = !1,
  children: z,
  AssistantMessage: E,
  UserMessage: G,
  onRegenerate: k,
  onCopy: h
}) => {
  const { modal: p, handleSubmit: _, handleClose: K } = ie(
    D ?? ue
  ), l = pe(), u = E ?? oe, b = G ?? me, v = ee(() => {
    const s = w ?? l.ai.defaultInitialMessage;
    return (Array.isArray(s) ? s : [s]).filter((o) => typeof o == "string" && o.length > 0);
  }, [w, l.ai.defaultInitialMessage]), M = !g && i.length === 0 && v.length > 0, x = m(null), N = m(null), P = m(null), L = m(null), y = m(null), { showScrollBtn: O, turnMinHeight: V, scrollToBottom: q } = fe({
    viewportRef: x,
    contentRef: N,
    endRef: P,
    lastTurnRef: y,
    turnsCount: i.length,
    freezeTurnMinHeight: W
  }), J = (s, a) => {
    const o = a === i.length - 1, A = {
      renderToolCall: C,
      onReplyQuote: U,
      onRendered: $,
      autoScrollIntoView: j,
      renderMarkdown: B
    }, Q = (t, r) => {
      const c = {
        message: t,
        inProgress: s.isInProgress,
        index: r,
        isCurrentMessage: !1,
        AssistantMessage: u,
        UserMessage: b,
        onRegenerate: k,
        onCopy: h,
        rawData: t.rawData || {},
        ...A
      };
      return /* @__PURE__ */ e(
        b,
        {
          ...c
        },
        `${a}-u-${r}`
      );
    }, X = (t, r) => {
      const c = o && r === s.assistantMessages.length - 1, Y = s.userMessages.length + r, Z = {
        message: t,
        inProgress: s.isInProgress,
        index: Y,
        isCurrentMessage: c,
        AssistantMessage: u,
        UserMessage: b,
        onRegenerate: k,
        onCopy: h,
        rawData: t.rawData || {},
        ...A
      };
      return /* @__PURE__ */ e(
        u,
        {
          ...Z,
          isGenerating: s.isInProgress && c,
          isLoading: s.isInProgress && c && !t.content
        },
        `${a}-a-${r}`
      );
    };
    return /* @__PURE__ */ n(
      "div",
      {
        ref: o ? y : void 0,
        className: d(
          "flex flex-col items-start justify-start gap-2 px-1",
          o && "pb-5"
        ),
        style: {
          minHeight: o && V || void 0
        },
        children: [
          s.userMessages.map(
            (t, r) => Q(t, r)
          ),
          s.thinking && s.thinking.titles.length > 0 && /* @__PURE__ */ e(
            ce,
            {
              titles: s.thinking.titles,
              title: l.ai.thoughtsGroupTitle,
              inProgress: s.thinking.inProgress,
              isWriting: s.thinking.isWriting
            }
          ),
          s.assistantMessages.map(
            (t, r) => X(t, r)
          ),
          s.endIndicator === "thinking" && /* @__PURE__ */ e(S, { title: l.ai.thinking, status: "executing" }),
          s.endIndicator === "activity" && /* @__PURE__ */ e(S, { status: "writing" }),
          s.feedback && /* @__PURE__ */ e(
            le,
            {
              content: s.feedback.content,
              targetMessage: s.feedback.targetMessage,
              onCopy: h
            }
          ),
          o && /* @__PURE__ */ e(re, {})
        ]
      },
      `turn-${a}`
    );
  };
  return /* @__PURE__ */ n(F, { children: [
    /* @__PURE__ */ n("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ e(
        "div",
        {
          ref: x,
          className: d(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          ),
          children: /* @__PURE__ */ n(
            "div",
            {
              ref: N,
              className: d("flex h-full flex-col items-center p-4"),
              children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: d(
                      M ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-content"
                    ),
                    children: [
                      g && /* @__PURE__ */ e(Me, {}),
                      M && /* @__PURE__ */ e(
                        de,
                        {
                          messages: v,
                          onClick: R
                        }
                      ),
                      !g && i.map((s, a) => J(s, a)),
                      T
                    ]
                  }
                ),
                /* @__PURE__ */ e("div", { ref: L, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ e("footer", { className: "copilotKitMessagesFooter", ref: P, children: z }),
                /* @__PURE__ */ e(ge, { children: O && /* @__PURE__ */ e(
                  he.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ e("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ e(
                      se,
                      {
                        onClick: () => q(),
                        label: l.ai.scrollToBottom,
                        variant: "neutral",
                        icon: te,
                        hideLabel: !0
                      }
                    ) })
                  }
                ) })
              ]
            }
          )
        }
      ),
      !H && !M && /* @__PURE__ */ n(F, { children: [
        /* @__PURE__ */ e(I, { position: "top" }, "shadow-top"),
        /* @__PURE__ */ e(I, { position: "bottom" }, "shadow-bottom")
      ] })
    ] }),
    p.isOpen && /* @__PURE__ */ e(
      ae,
      {
        onSubmit: _,
        onClose: K,
        reactionType: p.currentReaction,
        message: p.currentMessage
      }
    )
  ] });
}, Me = () => /* @__PURE__ */ e("div", { className: "flex h-full w-full max-w-content flex-col gap-6", children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ e(f, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ e(f, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ e(f, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ e(f, { className: "h-5 w-4/5 rounded-md" })
] }) });
export {
  ze as F0AiMessagesContainer
};
