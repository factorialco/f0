import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { Node as g } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { ReactNodeViewRenderer as N, NodeViewWrapper as h, NodeViewContent as w } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { useState as b } from "react";
import { F0AvatarPerson as v } from "../../../../avatars/F0AvatarPerson/index.js";
import { Dropdown as y } from "../../../../../experimental/Navigation/Dropdown/index.js";
import T from "../../../../../icons/app/ChevronDown.js";
import O from "../../../../../icons/app/ChevronUp.js";
import C from "../../../../../icons/app/Delete.js";
import "../../../../../icons/app/Menu.js";
import { useI18n as k } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as H } from "../../../../F0Button/F0Button.js";
import { formatDate as F } from "../../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.js";
const I = ({
  node: r,
  deleteNode: a,
  updateAttributes: i
}) => {
  const d = k(), [o, m] = b(r.attrs.isOpen ?? !1), l = r.attrs.data;
  if (!l) return null;
  const p = () => {
    const e = !o;
    m(e), i({ isOpen: e });
  }, f = [
    {
      label: d.actions.delete,
      icon: C,
      critical: !0,
      onClick: () => a()
    }
  ], u = (e) => l.users.find((n) => n.id === e), x = (e) => {
    try {
      const n = new Date(e);
      return F(n, "HH:mm");
    } catch (n) {
      return console.error(n), e;
    }
  };
  return /* @__PURE__ */ s(h, { contentEditable: !1, children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ s("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ t("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ t("div", { className: "flex flex-row items-center gap-3", children: /* @__PURE__ */ t("p", { className: "text-f1-text-primary text-lg font-semibold", children: l.title }) }),
              /* @__PURE__ */ t("p", { className: "text-f1-text-secondary text-sm", children: l.messages.length })
            ] }) }),
            /* @__PURE__ */ s("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ t(
                H,
                {
                  onClick: p,
                  variant: "outline",
                  hideLabel: !0,
                  label: o ? d.actions.collapse : d.actions.expand,
                  icon: o ? O : T,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ t(y, { items: f, size: "sm" })
            ] })
          ] }),
          o && /* @__PURE__ */ t("div", { className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto", children: l.messages.map((e, n) => {
            const c = u(e.userId);
            return /* @__PURE__ */ s("div", { className: "flex flex-row gap-3", children: [
              c?.imageUrl && /* @__PURE__ */ t(
                v,
                {
                  size: "xs",
                  src: c.imageUrl,
                  firstName: c.fullname,
                  lastName: ""
                }
              ),
              /* @__PURE__ */ s("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ s("div", { className: "flex items-baseline gap-2", children: [
                  /* @__PURE__ */ t("span", { className: "text-f1-text-primary font-medium", children: c?.fullname || "Unknown User" }),
                  /* @__PURE__ */ t("span", { className: "text-f1-text-tertiary text-xs", children: x(e.dateTime) })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-f1-text-secondary", children: e.text })
              ] })
            ] }, n);
          }) })
        ]
      }
    ),
    /* @__PURE__ */ t(w, { style: { display: "none" } })
  ] });
}, L = g.create({
  name: "transcript",
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
        parseHTML: (r) => {
          const a = r.getAttribute("data-transcript");
          return a ? JSON.parse(a) : null;
        },
        renderHTML: (r) => r.data ? {
          "data-transcript": JSON.stringify(r.data)
        } : {}
      },
      config: {
        default: null
      },
      isOpen: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-transcript]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: r, node: a }) {
    const i = a.attrs.data;
    return i ? [
      "div",
      {
        ...r,
        class: "transcript-block",
        "data-transcript": JSON.stringify(i)
      },
      ["div", { class: "transcript-content" }, `Transcript: ${i.title}`]
    ] : ["div"];
  },
  addNodeView() {
    return N(I);
  },
  addCommands() {
    return {
      insertTranscript: (r) => ({ commands: a }) => a.insertContent({
        type: this.name,
        attrs: { data: r }
      })
    };
  }
}), P = L;
export {
  L as Transcript,
  P as TranscriptExtension,
  I as TranscriptView
};
