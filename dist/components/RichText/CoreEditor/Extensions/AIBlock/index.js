import { jsx as s, jsxs as u } from "react/jsx-runtime";
import { Node as C, generateHTML as B } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { ReactNodeViewRenderer as T, NodeViewWrapper as y, NodeViewContent as N } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { useMemo as S, useState as L, useCallback as j, useEffect as m } from "react";
import { F0AiBanner as x } from "../../../../../sds/ai/Banners/F0AiBanner/index.js";
import { Skeleton as d } from "../../../../../ui/skeleton.js";
import { StarterKitExtension as v } from "../StarterKit/index.js";
import { UnderlineExtension as w } from "../Underline/index.js";
import { TextStyleExtension as I } from "../TextStyle/index.js";
import { ColorExtension as H } from "../Color/index.js";
import { TypographyExtension as M } from "../Typography/index.js";
import { TaskListExtension as D } from "../TaskList/index.js";
import { CustomTaskExtension as O } from "../CustomTask/index.js";
import { HighlightExtension as V } from "../Highlight/index.js";
import { TextAlignExtension as J } from "../TextAlign/index.js";
import { LinkExtension as U } from "../Link/index.js";
import { DetailsExtension as F } from "../Details/index.js";
import { DetailsSummaryExtension as R } from "../DetailsSummary/index.js";
import { DetailsContentExtension as K } from "../DetailsContent/index.js";
import { F0Button as W } from "../../../../F0Button/F0Button.js";
const $ = (e) => {
  if (!e?.content) return "";
  try {
    return B(e.content, [
      v,
      w,
      I,
      H,
      M,
      D,
      O,
      V,
      J,
      U,
      F,
      R,
      K
    ]);
  } catch {
    return "";
  }
}, q = (e, t) => S(() => {
  if (t?.selectedTitle || t?.selectedEmoji)
    return {
      title: t.selectedTitle || e.title,
      emoji: t.selectedEmoji
    };
  const n = e.buttons?.find(
    (o) => o.type === t?.selectedAction
  );
  return n ? { title: n.label, emoji: n.emoji } : { title: e.title };
}, [t, e]), z = (e, t) => {
  const [n, o] = L(!1), l = j(
    async (c) => {
      const i = e.buttons?.find(
        (a) => a.type === c
      ), r = {
        selectedAction: c,
        selectedTitle: i?.label || c,
        selectedEmoji: i?.emoji || "🤖",
        isEditable: i?.editable ?? !1
      };
      o(!0), t({ data: { ...r, content: null } });
      try {
        const a = await e.onClick(c);
        t({ data: { ...r, content: a } });
      } catch (a) {
        console.error("AIBlock error:", a), t({ data: { ...r, content: null } });
      } finally {
        o(!1);
      }
    },
    [e, t]
  );
  return { isLoading: n, handleClick: l };
}, G = (e, t, n) => {
  m(() => {
    if (!n?.selectedAction || !e?.buttons) return;
    if (!n?.selectedTitle || !n?.selectedEmoji || n?.isEditable === void 0) {
      const l = e.buttons.find(
        (c) => c.type === n.selectedAction
      );
      l && t({
        data: {
          ...n,
          selectedTitle: l.label,
          selectedEmoji: l.emoji,
          isEditable: l.editable ?? !1
        }
      });
    }
  }, [n, e, t]);
}, P = (e, t, n) => {
  m(() => {
    e?.shouldExecute && e?.selectedAction && t && n && (n({ data: { ...e, shouldExecute: !1 } }), t(e.selectedAction));
  }, [t, n, e]);
}, Q = (e, t, n, o) => {
  m(() => {
    if (!o?.content || !o?.isEditable || !e || !n) return;
    const l = n();
    l !== void 0 && (t(), o.content && e.chain().focus().setTextSelection(l).insertContent(o.content).run());
  }, [o, e, n, t]);
}, X = ({
  config: e,
  isLoading: t,
  onButtonClick: n
}) => /* @__PURE__ */ u("div", { className: "flex flex-col gap-2", children: [
  e.title && /* @__PURE__ */ s("div", { className: "text-f1-foreground-secondary", children: e.title }),
  /* @__PURE__ */ s("div", { className: "relative flex flex-row flex-wrap items-center gap-2", children: e.buttons?.map((o, l) => /* @__PURE__ */ s(
    W,
    {
      onClick: () => n(o.type),
      variant: "outline",
      icon: o.icon,
      label: o.label,
      disabled: t
    },
    l
  )) })
] }), Y = ({ isEditable: e }) => e ? /* @__PURE__ */ u("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ s(d, { className: "h-4 w-1/2 rounded-md" }),
  /* @__PURE__ */ s(d, { className: "h-4 w-full rounded-md" }),
  /* @__PURE__ */ s(d, { className: "h-4 w-3/4 rounded-md" }),
  /* @__PURE__ */ s(d, { className: "h-4 w-1/3 rounded-md" })
] }) : /* @__PURE__ */ s(x.Skeleton, { compact: !0 }), Z = ({
  node: e,
  updateAttributes: t,
  deleteNode: n,
  extension: o,
  editor: l,
  getPos: c
}) => {
  const i = e.attrs.data, r = o.options.currentConfig || e.attrs.config, { title: a } = q(r, i), { isLoading: E, handleClick: f } = z(
    r,
    t
  ), b = !!(i?.selectedAction && !i?.content), p = E || b, h = $(i);
  if (Q(l, n, c, i), G(r, t, i), P(i, f, t), !i || !r || !r.buttons?.length) return null;
  const k = !!i?.content, g = !!(i?.selectedTitle || i?.selectedAction) && k && !i?.isEditable;
  return /* @__PURE__ */ s(y, { contentEditable: !1, children: /* @__PURE__ */ u("div", { className: "mb-3", children: [
    p ? /* @__PURE__ */ s(Y, { isEditable: i?.isEditable }) : g ? /* @__PURE__ */ s(
      x,
      {
        title: a,
        content: h,
        onClose: () => n()
      }
    ) : /* @__PURE__ */ s(
      "div",
      {
        className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
        onClick: (A) => A.stopPropagation(),
        children: /* @__PURE__ */ s(
          X,
          {
            config: r,
            isLoading: p,
            onButtonClick: f
          }
        )
      }
    ),
    /* @__PURE__ */ s(N, { style: { display: "none" } })
  ] }) });
}, _ = C.create({
  name: "aiBlock",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (e) => {
          const t = e.getAttribute("data-ai-block");
          return t ? JSON.parse(t) : null;
        },
        renderHTML: (e) => e.data ? {
          "data-ai-block": JSON.stringify(e.data)
        } : {}
      },
      config: {
        default: null
      },
      isCollapsed: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-ai-block]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e, node: t }) {
    const n = t.attrs.data, o = t.attrs.config;
    return !n || !o ? ["div"] : [
      "div",
      {
        ...e,
        class: "ai-block",
        "data-ai-block": JSON.stringify(n)
      },
      ["div", { class: "ai-block-content" }, `AI Block: ${o.title}`]
    ];
  },
  addNodeView() {
    return T(Z);
  },
  addCommands() {
    return {
      insertAIBlock: (e, t) => ({ commands: n }) => n.insertContent({
        type: this.name,
        attrs: { data: e, config: t }
      }),
      executeAIAction: (e, t) => ({ commands: n }) => {
        const o = t.buttons?.find((l) => l.type === e);
        return o ? n.insertContent([
          {
            type: this.name,
            attrs: {
              data: {
                content: null,
                selectedAction: e,
                selectedTitle: o.label,
                selectedEmoji: o.emoji,
                isEditable: o.editable ?? !1,
                shouldExecute: !0
              },
              config: t
            }
          },
          {
            type: "paragraph"
          }
        ]) : !1;
      }
    };
  }
}), Ce = _;
export {
  _ as AIBlock,
  Ce as AIBlockExtension,
  Z as AIBlockView
};
