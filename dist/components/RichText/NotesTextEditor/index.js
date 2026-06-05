import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { DragHandle as V } from "../../../node_modules/.pnpm/@tiptap_extension-drag-handle-react@2.24.0_@tiptap_extension-drag-handle@2.24.0_@tiptap_core@_dmk2vzdexy63dcl5xxjen5glkq/node_modules/@tiptap/extension-drag-handle-react/dist/index.js";
import { useEditor as X, EditorContent as Y } from "../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { forwardRef as Z, useRef as b, useId as _, useState as E, useEffect as ee, useCallback as y, useImperativeHandle as te, useMemo as re } from "react";
import { F0AvatarAlert as se } from "../../avatars/F0AvatarAlert/index.js";
import { ButtonInternal as oe } from "../../F0Button/internal.js";
import { F0Icon as ae } from "../../F0Icon/index.js";
import { EditorBubbleMenu as le } from "../CoreEditor/BubbleMenu/index.js";
import { Toolbar as ne } from "../CoreEditor/Toolbar/index.js";
import de from "../../../icons/app/Handle.js";
import "../../../icons/app/Menu.js";
import ie from "../../../icons/app/Plus.js";
import { DataTestIdWrapper as ce } from "../../../lib/data-testid/index.js";
import { ScrollArea as B } from "../../../ui/scrollarea.js";
import { Skeleton as s } from "../../../ui/skeleton.js";
import { documentHasMissingBlockIds as j } from "../CoreEditor/Extensions/BlockIdExtension/index.js";
import { insertImageFromFile as me } from "../CoreEditor/Extensions/Image/index.js";
import './index.css';/* empty css          */
import { applyPageDocumentPatch as ue, getNotesTextEditorSnapshot as A } from "./applyPageDocumentPatch.js";
import { NotesTextEditorPatchTargetNotFoundError as Ke, NotesTextEditorUnsupportedPatchTypeError as Qe } from "./applyPageDocumentPatch.js";
import { createNotesTextEditorExtensions as fe } from "./extensions.js";
import pe from "./Header/index.js";
import he from "./Title/index.js";
import { useI18n as xe } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as Ne } from "../../F0Button/F0Button.js";
const we = Z(function({
  onChange: c,
  placeholder: f,
  initialEditorState: C,
  readonly: d = !1,
  aiBlockConfig: p,
  imageUploadConfig: m,
  onTitleChange: l,
  primaryAction: T,
  secondaryActions: h,
  otherActions: x,
  metadata: N,
  banner: z,
  showBubbleMenu: F = !1,
  titlePlaceholder: O,
  dataTestId: M
}, U) {
  const n = xe(), D = b(null), I = b(null), S = _(), [L] = E(() => C?.content || ""), [u, W] = E(C?.title || ""), [w, v] = E(null), P = (t) => {
    switch (t) {
      case "file-too-large":
        return n.imageUpload.errors.fileTooLarge;
      case "invalid-type":
        return n.imageUpload.errors.invalidType;
      case "upload-failed":
        return n.imageUpload.errors.uploadFailed;
      default:
        return n.imageUpload.errors.uploadFailed;
    }
  };
  ee(() => {
    l && l(u);
  }, [u, l]);
  const i = b(!1), r = X({
    extensions: fe({
      placeholder: f,
      translations: n,
      aiBlockConfig: p,
      imageUploadConfig: m ? {
        ...m,
        onError: (t) => {
          v(t);
        }
      } : void 0
    }),
    content: L,
    onUpdate: ({ editor: t }) => {
      i.current || c(A(t));
    },
    onCreate: ({ editor: t }) => {
      if (j(t.state.doc)) {
        i.current = !0;
        try {
          t.commands.setContent(t.getJSON());
        } finally {
          i.current = !1;
        }
        j(t.state.doc) || c(A(t));
      }
    },
    editable: !d
  }), J = y((t) => {
    i.current = !0;
    try {
      return t();
    } finally {
      i.current = !1;
    }
  }, []);
  te(U, () => ({
    clear: () => r?.commands.clearContent(),
    focus: () => r?.commands.focus(),
    setContent: (t) => r?.commands.setContent(t),
    applyPageDocumentPatch: (t) => r ? J(() => ue(r, t)) : { json: null, html: null },
    insertAIBlock: () => {
      !r || !p || r.chain().focus().insertContentAt(r.state.doc.content.size, [
        {
          type: "aiBlock",
          attrs: {
            data: { content: null, selectedAction: void 0 },
            config: p,
            isCollapsed: !1
          }
        },
        { type: "paragraph" }
      ]).run();
    },
    insertTranscript: (t, a, g) => {
      r && r.chain().focus().insertContentAt(r.state.doc.content.size, [
        {
          type: "transcript",
          attrs: {
            data: { title: t, users: a, messages: g },
            isOpen: !1
          }
        },
        { type: "paragraph" }
      ]).run();
    },
    pushContent: (t) => {
      r && r.chain().focus().insertContentAt(r.state.doc.content.size, t).run();
    },
    insertImage: (t) => {
      !r || !m || me(r, t, {
        ...m,
        onError: (a) => {
          v(a);
        }
      });
    }
  }));
  const $ = re(
    () => ({
      offset: [0, 5]
    }),
    []
  ), q = y(
    ({ node: t, pos: a }) => {
      I.current = t ? { pos: a, nodeSize: t.nodeSize } : null;
    },
    []
  ), G = y(() => {
    const t = I.current;
    if (!t || !r) return;
    const { pos: a, nodeSize: g } = t, H = r.state.doc.nodeAt(a);
    if (H && H.content.size === 0)
      r.chain().focus().setTextSelection(a + 1).insertContent("/").run();
    else {
      const R = a + g;
      r.chain().focus().insertContentAt(R, { type: "paragraph" }).setTextSelection(R + 1).insertContent("/").run();
    }
  }, [r]), K = T || h && h.length > 0 || N && N.length > 0 || x && x.length > 0 || z, Q = l || u;
  return r ? /* @__PURE__ */ e(ce, { dataTestId: M, children: /* @__PURE__ */ o(
    "div",
    {
      className: "relative flex h-full w-full flex-col",
      ref: D,
      id: S,
      children: [
        K && /* @__PURE__ */ e(
          pe,
          {
            primaryAction: T,
            secondaryActions: h,
            metadata: N,
            otherActions: x,
            banner: z
          }
        ),
        w && /* @__PURE__ */ e("div", { className: "mx-auto flex w-full max-w-[824px] px-14 py-2", children: /* @__PURE__ */ o("div", { className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm", children: [
          /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
            /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(se, { size: "sm", type: "critical" }) }),
            /* @__PURE__ */ e(
              "p",
              {
                className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
                title: P(w),
                children: P(w)
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(
            Ne,
            {
              variant: "outline",
              onClick: () => v(null),
              label: n.imageUpload.errors.dismiss,
              size: "sm"
            }
          ) })
        ] }) }),
        !d && !F && /* @__PURE__ */ e("div", { className: "absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md", children: /* @__PURE__ */ e(
          ne,
          {
            editor: r,
            disableButtons: !1,
            showEmojiPicker: !1,
            plainHtmlMode: !1
          }
        ) }),
        /* @__PURE__ */ o(B, { className: "h-full gap-6", children: [
          Q && /* @__PURE__ */ e(
            he,
            {
              value: u,
              onChange: l ? W : void 0,
              placeholder: O,
              disabled: !l || d
            }
          ),
          /* @__PURE__ */ o(
            "div",
            {
              className: "notes-text-editor h-full",
              onClick: () => r.commands.focus(),
              children: [
                !d && /* @__PURE__ */ e(
                  V,
                  {
                    editor: r,
                    tippyOptions: $,
                    onNodeChange: q,
                    children: /* @__PURE__ */ o("div", { className: "flex flex-row", children: [
                      /* @__PURE__ */ e(
                        oe,
                        {
                          compact: !0,
                          variant: "ghost",
                          size: "sm",
                          className: "text-f1-foreground-tertiary",
                          onClick: G,
                          label: "Add paragraph",
                          hideLabel: !0,
                          icon: ie
                        }
                      ),
                      /* @__PURE__ */ e(
                        "div",
                        {
                          className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
                          draggable: !0,
                          "data-drag-handle": !0,
                          children: /* @__PURE__ */ e(ae, { icon: de, size: "xs" })
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ e(
                  Y,
                  {
                    editor: r,
                    className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
                  }
                )
              ]
            }
          )
        ] }),
        !d && /* @__PURE__ */ e(
          le,
          {
            editorId: S,
            editor: r,
            disableButtons: !1,
            isToolbarOpen: !F,
            isFullscreen: !1,
            plainHtmlMode: !1
          }
        )
      ]
    }
  ) }) : null;
}), Je = ({
  withHeader: k = !1,
  withTitle: c = !0,
  withToolbar: f = !0
}) => /* @__PURE__ */ o(
  "div",
  {
    className: "relative flex h-full w-full flex-col",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      k && /* @__PURE__ */ o("div", { className: "flex items-center justify-between border-b border-f1-border px-6 py-3", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(s, { className: "h-6 w-20 rounded-md" }),
          /* @__PURE__ */ e(s, { className: "h-6 w-24 rounded-md" })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(s, { className: "h-8 w-16 rounded-md" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-12 rounded-md" })
        ] })
      ] }),
      f && /* @__PURE__ */ o("div", { className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md", children: [
        /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" }),
          /* @__PURE__ */ e(s, { className: "h-8 w-8 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ o(B, { className: "h-full gap-6", children: [
        c && /* @__PURE__ */ e("div", { className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5", children: /* @__PURE__ */ e(s, { className: "h-8 w-80 rounded-md" }) }),
        /* @__PURE__ */ e("div", { className: "h-full", children: /* @__PURE__ */ e("div", { className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ e(s, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ e(s, { className: "h-5 w-4/5 rounded-md" }),
          /* @__PURE__ */ e(s, { className: "h-5 w-3/5 rounded-md" }),
          /* @__PURE__ */ e(s, { className: "h-5 w-full rounded-md" }),
          /* @__PURE__ */ e(s, { className: "h-5 w-1/2 rounded-md" })
        ] }) }) })
      ] })
    ]
  }
), $e = we;
export {
  $e as NotesTextEditor,
  Ke as NotesTextEditorPatchTargetNotFoundError,
  Je as NotesTextEditorSkeleton,
  Qe as NotesTextEditorUnsupportedPatchTypeError
};
