import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { FocusScope as be } from "../../../node_modules/.pnpm/@radix-ui_react-focus-scope@1.1.7_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3_fxxdd3snaqcmuaxaxg4jpt5v6a/node_modules/@radix-ui/react-focus-scope/dist/index.js";
import { useEditor as ge, EditorContent as xe } from "../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { forwardRef as Ee, useContext as ve, useId as we, useRef as S, useState as n, useEffect as k, useImperativeHandle as ye } from "react";
import Ne from "react-dom";
import { EditorBubbleMenu as Ie } from "../CoreEditor/BubbleMenu/index.js";
import { Toolbar as Ce } from "../CoreEditor/Toolbar/index.js";
import { DataTestIdWrapper as G } from "../../../lib/data-testid/index.js";
import { useI18n as Te } from "../../../lib/providers/i18n/i18n-provider.js";
import { withSkeleton as Fe } from "../../../lib/skeleton.js";
import { cn as x } from "../../../lib/utils.js";
import '../index.css';/* empty css           */
import { Skeleton as u } from "../../../ui/skeleton.js";
import { AcceptChanges as Se } from "./Enhance/AcceptChanges/index.js";
import { LoadingEnhanceOverlay as ke, LoadingEnhanceInline as Ae } from "./Enhance/LoadingEnhance/index.js";
import { Error as Oe } from "./Error/index.js";
import { FileList as Re } from "./FileList/index.js";
import { Footer as He } from "./Footer/index.js";
import { Head as Be } from "./Head/index.js";
import { handleEnhanceWithAIFunction as Le } from "./utils/enhance.js";
import { ExtensionsConfiguration as je } from "./utils/extensions.js";
import { setupContainerObservers as ze, handleEditorUpdate as We, setEditorContent as De, getHeight as Ue, getHeightThreshold as _e } from "./utils/helpers.js";
import { F0DialogContext as Pe } from "../../../patterns/F0Dialog/components/F0DialogProvider.js";
import { AnimatePresence as J } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as K } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const qe = Ee(function({
  mentionsConfig: h,
  enhanceConfig: m,
  filesConfig: d,
  secondaryAction: p,
  primaryAction: M,
  maxCharacters: O,
  initialEditorState: R,
  onChange: Q,
  placeholder: V,
  title: X,
  height: w = "auto",
  plainHtmlMode: E = !1,
  fullScreenMode: Y = !0,
  onFullscreenChange: H,
  disabled: c = !1,
  error: B = !1,
  loading: Z = !1,
  onBlur: $,
  dataTestId: L
}, ee) {
  const j = Te(), te = ve(Pe), z = we(), W = S(null), oe = S(null), D = S(null), [re, ne] = n(!1), [se, ie] = n(!0), [l, le] = n(!1), [U, y] = n(!1), [o, ae] = n(!1), [b, N] = n(!1), [s, I] = n(null), [C, v] = n(!1), [ce, T] = n(null), [de, _] = n(R?.files || []), [fe, me] = n(
    h?.users || []
  ), [ue, he] = n({
    html: R?.content || "",
    json: null
  });
  k(() => (o ? (document.body.style.overflow = "hidden", v(!0)) : (document.body.style.overflow = "", v(!1)), () => {
    document.body.style.overflow = "";
  }), [o]), k(() => {
    const r = o ? window.innerHeight : _e(w);
    return ze({
      containerRef: D,
      onHeightChange: ne,
      onScrollChange: ie,
      heightThreshold: r
    });
  }, [w, o]);
  const pe = () => {
    ae((r) => {
      const i = !r;
      return H && H(i), i;
    });
  }, g = !!(b || l || s || c), t = ge({
    extensions: je({
      mentionsConfig: h,
      mentionSuggestions: fe,
      setMentionSuggestions: me,
      placeholder: V,
      maxCharacters: O,
      plainHtmlMode: E
    }),
    content: ue.html,
    editable: !c,
    onUpdate: ({ editor: r }) => {
      We({ editor: r, onChange: Q, setEditorState: he });
    },
    onBlur: () => {
      $?.();
    }
  });
  k(() => {
    (s || c) && t ? t.setEditable(!1) : t && !s && !c && t.setEditable(!0);
  }, [s, c, t]), ye(ee, () => ({
    clear: () => t?.commands.clearContent(),
    clearFiles: () => {
      _([]), d && d.onFiles([]);
    },
    focus: () => t?.commands.focus(),
    setError: (r) => {
      I(r), r ? t?.setEditable(!1) : t?.setEditable(!0);
    },
    setContent: (r) => {
      t && De({ editor: t, content: r });
    }
  }));
  const F = async (r, i) => {
    m && t && await Le({
      editor: t,
      enhanceText: m.onEnhanceText,
      setIsLoadingEnhance: le,
      onLoadingStart: ({ range: f, isFullDocument: q }) => {
        t.setEditable(!1), y(q), q || t.commands.setEnhanceHighlight(f.from, f.to);
      },
      onSuccess: (f) => {
        y(!1), t.commands.setEnhanceHighlight(
          f.from,
          f.to
        ), N(!0);
      },
      onError: (f) => {
        y(!1), N(!1), t.commands.clearEnhanceHighlight(), I(f || j.richTextEditor.ai.defaultError);
      },
      selectedIntent: r,
      customIntent: i
    });
  };
  if (!t) return null;
  const P = /* @__PURE__ */ e(be, { trapped: !1, children: /* @__PURE__ */ a(
    "div",
    {
      ref: oe,
      id: z,
      "aria-busy": Z,
      className: x(
        "rich-text-editor-container pointer-events-auto flex flex-col",
        c ? "bg-f1-background-tertiary" : "bg-f1-background",
        o ? "fixed inset-0 z-50" : [
          "relative w-full rounded-xl border border-solid",
          s || B ? "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical bg-f1-background-critical bg-opacity-10" : "border-f1-border"
        ]
      ),
      children: [
        o && /* @__PURE__ */ e("div", { className: "pointer-events-none fixed inset-0 z-40" }),
        /* @__PURE__ */ e(
          Be,
          {
            fullScreenMode: Y,
            isFullscreen: o,
            handleToggleFullscreen: pe,
            disableAllButtons: g,
            title: X
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: "relative z-50 w-full flex-grow overflow-hidden",
            onClick: (r) => {
              const i = r.target;
              !i.closest("button") && !i.closest('[role="button"]') && !i.closest("input") && !i.closest("textarea") && !i.closest("[data-radix-popper-content-wrapper]") && (r?.preventDefault(), t?.commands.focus());
            },
            children: [
              /* @__PURE__ */ a(
                "div",
                {
                  ref: D,
                  className: x(
                    "scrollbar-macos relative flex w-full items-start justify-center overflow-y-auto pb-1 pt-3",
                    o ? "h-full px-10 pb-24" : x(Ue(w), "pl-3 pr-10"),
                    l && U && "min-h-16"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "div",
                      {
                        className: x(
                          "w-full overflow-hidden",
                          o && "max-w-[824px]"
                        ),
                        children: /* @__PURE__ */ e(xe, { editor: t })
                      }
                    ),
                    l && U && /* @__PURE__ */ e(ke, { isFullscreen: o })
                  ]
                }
              ),
              /* @__PURE__ */ e(J, { children: o && C && !l && !b && !s && /* @__PURE__ */ e(
                K.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 20 },
                  transition: { duration: 0.2, ease: "easeOut" },
                  className: "absolute bottom-10 left-0 right-0 z-[9998] flex w-full items-center justify-center",
                  style: { pointerEvents: "none" },
                  children: /* @__PURE__ */ e(
                    "div",
                    {
                      className: "absolute -bottom-4 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md",
                      style: { pointerEvents: "auto" },
                      children: /* @__PURE__ */ e(
                        Ce,
                        {
                          editor: t,
                          isFullscreen: o,
                          disableButtons: g,
                          onClose: () => {
                            v(!1), queueMicrotask(() => t.commands.focus());
                          },
                          plainHtmlMode: E
                        }
                      )
                    }
                  )
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: x(
              "relative z-40 rounded-b-lg px-3",
              !c && !s && !B && "bg-f1-background",
              re && !se && "shadow-editor-tools"
            ),
            children: [
              /* @__PURE__ */ e(J, { children: (l || b || s) && /* @__PURE__ */ a(
                K.div,
                {
                  initial: { height: 0, opacity: 0, y: -20 },
                  animate: { height: "auto", opacity: 1, y: 0 },
                  exit: { height: 0, opacity: 0, y: -20 },
                  transition: { duration: 0.3 },
                  className: "flex w-full items-center justify-center pt-2",
                  children: [
                    l && /* @__PURE__ */ e(
                      Ae,
                      {
                        label: j.richTextEditor.ai.loadingEnhanceLabel
                      }
                    ),
                    b && !l && /* @__PURE__ */ e(
                      Se,
                      {
                        setLastIntent: T,
                        setIsAcceptChangesOpen: N,
                        editor: t,
                        handleEnhanceWithAI: F,
                        lastIntent: ce
                      }
                    ),
                    s && !l && /* @__PURE__ */ e(Oe, { error: s, setError: I, editor: t })
                  ]
                },
                "accordion"
              ) }),
              /* @__PURE__ */ e(
                Re,
                {
                  files: de,
                  disabled: g,
                  filesConfig: d,
                  setFiles: _,
                  fileInputRef: W
                }
              ),
              /* @__PURE__ */ e(
                He,
                {
                  editor: t,
                  maxCharacters: O,
                  secondaryAction: p,
                  primaryAction: M,
                  fileInputRef: W,
                  canUseFiles: !!d,
                  isLoadingEnhance: l,
                  disableButtons: g,
                  disabled: c,
                  enhanceConfig: m,
                  isFullscreen: o,
                  onEnhanceWithAI: F,
                  setLastIntent: T,
                  setIsToolbarOpen: v,
                  isToolbarOpen: C,
                  plainHtmlMode: E
                }
              ),
              /* @__PURE__ */ e(
                Ie,
                {
                  editorId: z,
                  editor: t,
                  disableButtons: g,
                  isToolbarOpen: C,
                  isFullscreen: o,
                  plainHtmlMode: E,
                  enhanceConfig: m,
                  onEnhanceWithAI: F,
                  isLoadingEnhance: l,
                  setLastIntent: T,
                  isAcceptChangesOpen: b,
                  hasError: !!s
                }
              )
            ]
          }
        )
      ]
    }
  ) });
  return o && !te.open ? Ne.createPortal(
    /* @__PURE__ */ e(G, { dataTestId: L, children: P }),
    document.body
  ) : /* @__PURE__ */ e(G, { dataTestId: L, children: P });
}), Ge = ({ rows: A = 2 }) => {
  const h = ["75%", "100%", "60%", "85%", "70%"], m = Array.from(
    { length: A },
    (d, p) => h[p % h.length]
  );
  return /* @__PURE__ */ a("div", { className: "relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background", children: [
    /* @__PURE__ */ e("div", { className: "relative w-full flex-grow overflow-hidden", children: /* @__PURE__ */ e("div", { className: "h-auto w-full pl-3 pr-4 pt-3", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: m.map((d, p) => /* @__PURE__ */ e(u, { className: "h-4", style: { width: d } }, p)) }) }) }),
    /* @__PURE__ */ e("div", { className: "px-3 py-3", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(u, { className: "h-8 w-8 rounded-md" }),
        /* @__PURE__ */ e(u, { className: "h-8 w-8 rounded-md" }),
        /* @__PURE__ */ e(u, { className: "h-8 w-8 rounded-md" })
      ] }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(u, { className: "h-8 w-24 rounded-md" }),
        /* @__PURE__ */ e(u, { className: "h-8 w-32 rounded-md" })
      ] })
    ] }) })
  ] });
}, bt = Fe(
  qe,
  Ge
);
export {
  bt as RichTextEditor
};
