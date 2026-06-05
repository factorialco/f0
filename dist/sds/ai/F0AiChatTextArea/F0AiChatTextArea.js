import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { useState as p, useRef as w, useCallback as T, useEffect as H, useMemo as je } from "react";
import { F0AvatarAlert as Le } from "../../../components/avatars/F0AvatarAlert/index.js";
import { useReducedMotion as Ue } from "../../../lib/a11y.js";
import { Link as $e } from "../../../lib/linkHandler.js";
import { cn as m } from "../../../lib/utils.js";
import { useAiChat as qe } from "../F0AiChat/providers/AiChatStateProvider.js";
import { ActionBar as ze } from "./components/ActionBar.js";
import { AttachedFilesList as Ke } from "./components/AttachedFilesList.js";
import { CreditWarningWrapper as _e } from "./components/CreditWarningWrapper.js";
import { MentionPopover as Be } from "./components/MentionPopover.js";
import { PendingQuoteChip as Ve } from "./components/PendingQuoteChip.js";
import { TextareaField as We } from "./components/TextareaField.js";
import { WelcomeScreenSuggestionsRow as Qe } from "./components/WelcomeScreenSuggestionsRow.js";
import { buildHighlightSegments as Ge } from "./highlight-utils.js";
import { useAudioRecorder as Je } from "./useAudioRecorder.js";
import { useFileAttachments as Xe } from "./useFileAttachments.js";
import { useMentions as Ye } from "./useMentions.js";
import { motion as d } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { AnimatePresence as S } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { useI18n as Ze } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as ae } from "../../../lib/OneEllipsis/OneEllipsis.js";
const et = /[\\`*_{}[\]()#+\-.!|~>]/g, tt = (k) => k.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((h, u) => u % 2 === 1 ? h : h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(et, "\\$&")).join(""), Ct = ({
  onSubmit: k,
  onStop: h,
  inProgress: u,
  onBeforeSubmit: j,
  placeholders: se,
  creditWarning: le,
  clarifyingUI: L,
  pendingContext: ce = null,
  onPendingContextChange: ue,
  pendingQuote: C = null,
  onPendingQuoteChange: U,
  fileAttachments: fe,
  onTranscribe: $,
  searchPersons: de,
  onProcessFilesRef: g,
  disclaimer: s,
  footer: q,
  isWelcomeScreen: z = !1,
  fullscreen: pe = !1,
  welcomeScreenSuggestions: E,
  onSuggestionClick: A,
  ref: me
}) => {
  const n = Ze(), K = Ue(), [l, x] = p(""), [N, F] = p(0), [_, B] = p(!1), [R, V] = p(!1), [D, he] = p(null), P = w(null), i = w(null), I = w(null), f = L != null, { tracking: W } = qe(), ge = T(
    (e, o) => {
      W?.onWelcomeSuggestionClick?.({
        item: e,
        group: o,
        prompt: e.prompt || e.title
      }), A?.(e, o);
    },
    [W, A]
  ), {
    attachedFiles: v,
    fileInputRef: xe,
    onUploadFiles: ve,
    acceptValue: ye,
    isAtMaxFiles: be,
    maxFiles: we,
    processFiles: Q,
    handleFileSelect: Se,
    handleRemoveFile: ke,
    clearFiles: Ce,
    transientError: G,
    showTransientError: M
  } = Xe(fe), r = Ye({
    inputValue: l,
    setInputValue: x,
    cursorPosition: N,
    searchPersons: de,
    textareaRef: i
  }), J = w(""), X = T((e) => {
    const o = J.current, O = o && !/\s$/.test(o) ? " " : "", b = `${o}${O}${e}`;
    x(b), F(b.length);
  }, []), Ee = {
    "permission-denied": n.ai.micPermissionDenied,
    "device-error": n.ai.micError,
    "transcription-failed": n.ai.transcriptionError
  }, c = Je({
    onTranscribe: $,
    onPartial: X,
    onFinal: (e) => {
      X(e), i.current?.focus();
    },
    onError: (e) => M(Ee[e])
  }), Ae = !!$ && c.isSupported, Ne = T(() => {
    J.current = l, c.start();
  }, [l, c]);
  H(() => {
    typeof window < "u" && window.location.hash.length === 0 && i.current?.focus();
  }, []), H(() => {
    if (g)
      return g((e) => {
        Q(e);
      }), () => {
        g(null);
      };
  }, [g, Q]);
  const Y = c.status === "recording", Fe = Y ? n.ai.listening : n.ai.inputPlaceholder, Re = v.filter((e) => e.status === "uploaded"), y = v.some((e) => e.status === "uploading"), Z = v.some((e) => e.status === "error"), ee = l.trim().length > 0;
  H(() => {
    if (!(!R || y)) {
      if (V(!1), Z) {
        M(n.ai.fileUploadBlockedSubmit);
        return;
      }
      P.current?.requestSubmit();
    }
  }, [
    R,
    y,
    Z,
    M,
    n.ai.fileUploadBlockedSubmit
  ]);
  const De = async (e) => {
    if (e.preventDefault(), !f) {
      if (r.close(), u)
        h?.();
      else if (ee && !_) {
        if (y) {
          V(!0), i.current?.focus();
          return;
        }
        if (j) {
          B(!0);
          try {
            if (await j() === !1) {
              i.current?.focus();
              return;
            }
          } finally {
            B(!1);
          }
        }
        const o = r.transformMentions(l.trim()), O = tt(o), b = Re.flatMap(
          (oe) => oe.uploadedFile ? [oe.uploadedFile] : []
        ), ne = ce, ie = C;
        ne && ue?.(null), ie && U?.(null), await k({
          text: O,
          files: b,
          context: ne,
          quote: ie
        }), x(""), Ce();
      }
      i.current?.focus();
    }
  }, Pe = (e) => {
    f || r.handleKeyDown(e) || e.key === "Enter" && !e.shiftKey && (e.preventDefault(), u || P.current?.requestSubmit());
  }, Ie = () => {
    F(i.current?.selectionStart ?? 0);
  }, Me = () => {
    I.current && i.current && (I.current.scrollTop = i.current.scrollTop);
  }, te = D ? D.prompt ?? D.title : null, re = Y ? [n.ai.listening] : te ? [te] : se ?? [], Oe = re.length > 1, Te = je(() => Ge(l, r.mentions, {
    cursorPosition: N,
    inlineCompletion: r.inlineCompletion
  }), [l, r.mentions, N, r.inlineCompletion]), He = r.mentions.length > 0 || r.inlineCompletion !== null;
  return /* @__PURE__ */ a("div", { ref: me, className: "flex flex-col items-center gap-2 px-4 pb-3 pt-2", children: [
    /* @__PURE__ */ a("div", { className: "flex w-full max-w-content flex-col gap-2", children: [
      z && E && E.length > 0 && A && /* @__PURE__ */ t(
        Qe,
        {
          suggestions: E,
          onItemClick: ge,
          onItemHover: he
        }
      ),
      /* @__PURE__ */ t(_e, { creditWarning: le, children: /* @__PURE__ */ a(
        d.form,
        {
          "aria-busy": u,
          ref: P,
          className: m(
            "relative isolate z-20",
            "flex flex-col items-stretch md:gap-3 gap-2",
            "rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-background-tertiary",
            "transition-all hover:cursor-text",
            "p-0",
            "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
            "before:rounded-[inherit] before:bg-f1-background before:content-['']",
            "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
            "after:rounded-md after:blur-[6px] after:content-['']",
            "after:scale-90 after:opacity-0",
            "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
            "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
            "after:transition-all after:delay-200 after:duration-300",
            "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
            f && "after:scale-100 after:opacity-100 border-f1-background-tertiary"
          ),
          animate: {
            "--gradient-angle": ["0deg", "360deg"]
          },
          transition: {
            duration: 6,
            ease: "linear",
            repeat: 1 / 0
          },
          style: {
            "--gradient-angle": "180deg"
          },
          onClick: () => {
            f || i.current?.focus();
          },
          onSubmit: De,
          children: [
            /* @__PURE__ */ t(
              Be,
              {
                isOpen: r.isOpen,
                results: r.results,
                isLoading: r.isLoading,
                selectedIndex: r.selectedIndex,
                position: r.popoverPosition,
                onSelect: r.selectPerson
              }
            ),
            /* @__PURE__ */ t(S, { initial: !1, children: f ? /* @__PURE__ */ t("div", { children: L }, "clarifying") : /* @__PURE__ */ a(
              d.div,
              {
                className: "overflow-hidden",
                initial: { height: "auto", opacity: 1 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: {
                  duration: K ? 0 : 0.3,
                  ease: "easeOut"
                },
                children: [
                  C && /* @__PURE__ */ t(
                    Ve,
                    {
                      quote: C,
                      onRemove: () => U?.(null)
                    }
                  ),
                  /* @__PURE__ */ t(S, { initial: !1, children: G && /* @__PURE__ */ t(
                    d.div,
                    {
                      role: "alert",
                      "aria-live": "polite",
                      className: "p-1",
                      initial: { opacity: 0, y: -4 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -4 },
                      transition: {
                        duration: K ? 0 : 0.2,
                        ease: "easeOut"
                      },
                      children: /* @__PURE__ */ a(
                        "div",
                        {
                          className: m(
                            "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                            "bg-f1-background-critical text-f1-foreground"
                          ),
                          children: [
                            /* @__PURE__ */ t("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ t(Le, { type: "critical", size: "sm" }) }),
                            /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground-critical", children: G })
                          ]
                        }
                      )
                    },
                    "transient-error"
                  ) }),
                  /* @__PURE__ */ t(
                    Ke,
                    {
                      attachedFiles: v,
                      isUploading: y,
                      onRemove: ke,
                      removeLabel: n.ai.removeFile
                    }
                  ),
                  /* @__PURE__ */ t(
                    We,
                    {
                      textareaRef: i,
                      highlightRef: I,
                      inputValue: l,
                      onInputChange: (e, o) => {
                        x(e), F(o);
                      },
                      onKeyDown: Pe,
                      onCursorUpdate: Ie,
                      onScroll: Me,
                      highlightSegments: Te,
                      hasOverlay: He,
                      multiplePlaceholders: Oe,
                      placeholders: re,
                      resolvedDefaultPlaceholder: Fe,
                      inProgress: u
                    }
                  ),
                  /* @__PURE__ */ t(
                    ze,
                    {
                      onUploadFiles: ve,
                      isAtMaxFiles: be,
                      maxFiles: we,
                      acceptValue: ye,
                      fileInputRef: xe,
                      handleFileSelect: Se,
                      inProgress: u,
                      hasDataToSend: ee,
                      isPreSending: _ || R,
                      canRecord: Ae,
                      recordingStatus: c.status,
                      recordingStream: c.stream,
                      onStartRecording: Ne,
                      onStopRecording: c.stop,
                      onCancelRecording: c.cancel
                    }
                  )
                ]
              },
              "input"
            ) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ t(S, { mode: "wait", initial: !1, children: f ? /* @__PURE__ */ a(
      d.div,
      {
        className: "flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15, ease: "easeOut" },
        children: [
          /* @__PURE__ */ a("span", { children: [
            /* @__PURE__ */ t("kbd", { className: "font-sans", children: "↑↓" }),
            " ",
            n.ai.clarifyingQuestion.navHint.navigate
          ] }),
          /* @__PURE__ */ a("span", { children: [
            /* @__PURE__ */ t("kbd", { className: "font-sans", children: "Enter" }),
            " ",
            n.ai.clarifyingQuestion.navHint.select
          ] }),
          /* @__PURE__ */ a("span", { children: [
            /* @__PURE__ */ t("kbd", { className: "font-sans", children: "Esc" }),
            " ",
            n.ai.clarifyingQuestion.navHint.cancel
          ] })
        ]
      },
      "clarifying-nav-hint"
    ) : s?.text && /* @__PURE__ */ a(
      d.div,
      {
        className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15, ease: "easeOut" },
        children: [
          s.onClick ? /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              onClick: s.onClick,
              className: m(
                "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                "transition-transform duration-700 ease-out",
                "hover:scale-[1.02] focus-visible:scale-[1.02]",
                "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
              ),
              children: /* @__PURE__ */ t(
                ae,
                {
                  className: m(
                    "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                    "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                    "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                  ),
                  children: s.text
                }
              )
            }
          ) : /* @__PURE__ */ t(ae, { className: "text-sm font-medium text-f1-foreground-tertiary", children: s.text }),
          s.link && s.linkText && /* @__PURE__ */ t(
            $e,
            {
              href: s.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
              children: s.linkText
            }
          )
        ]
      },
      "chat-disclaimer"
    ) }),
    /* @__PURE__ */ t(S, { children: q && z && /* @__PURE__ */ t(
      d.div,
      {
        className: m(
          "w-full py-4 mx-auto max-w-content",
          pe && "flex justify-center"
        ),
        initial: { opacity: 0, height: 0, overflow: "hidden" },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0, overflow: "hidden" },
        transition: { duration: 0.3, ease: "easeInOut" },
        children: q
      },
      "chat-footer"
    ) })
  ] });
};
export {
  Ct as F0AiChatTextArea
};
