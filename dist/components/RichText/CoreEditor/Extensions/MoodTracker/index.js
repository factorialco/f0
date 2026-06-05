import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { Node as g } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { ReactNodeViewRenderer as N, NodeViewWrapper as h, NodeViewContent as b } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { useState as k } from "react";
import { pulseIconColor as c, pulseIcon as m } from "../../../../avatars/F0AvatarPulse/F0AvatarPulse.js";
import { F0Icon as f } from "../../../../F0Icon/index.js";
import { Dropdown as w } from "../../../../../experimental/Navigation/Dropdown/index.js";
import v from "../../../../../icons/app/ChevronDown.js";
import y from "../../../../../icons/app/ChevronUp.js";
import T from "../../../../../icons/app/Delete.js";
import "../../../../../icons/app/Menu.js";
import { useI18n as C } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as M } from "../../../../F0Button/F0Button.js";
const O = ({
  node: t,
  deleteNode: a,
  updateAttributes: n
}) => {
  const s = C(), [i, p] = k(t.attrs.isOpen ?? !1), l = t.attrs.data;
  if (!l) return null;
  const u = () => {
    const r = !i;
    p(r), n({ isOpen: r });
  }, x = [
    {
      label: s.actions.delete,
      icon: T,
      critical: !0,
      onClick: () => a()
    }
  ];
  return /* @__PURE__ */ o(h, { contentEditable: !1, children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
        onClick: (r) => r.stopPropagation(),
        children: [
          /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-3", children: [
                /* @__PURE__ */ e("p", { className: "text-f1-text-primary text-lg font-semibold", children: l.title }),
                /* @__PURE__ */ e("div", { className: "flex flex-row items-center", children: l.days.map((r, d) => /* @__PURE__ */ e(
                  "div",
                  {
                    className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
                    children: /* @__PURE__ */ e(
                      f,
                      {
                        icon: m[r.mood],
                        size: "lg",
                        color: c[r.mood]
                      }
                    )
                  },
                  d
                )) })
              ] }),
              /* @__PURE__ */ e("p", { children: /* @__PURE__ */ e("span", { className: "text-f1-text-primary text-md font-normal", children: l.averageMoodComment }) })
            ] }) }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1", children: [
              /* @__PURE__ */ e(
                M,
                {
                  onClick: u,
                  variant: "outline",
                  hideLabel: !0,
                  label: i ? s.actions.collapse : s.actions.expand,
                  icon: i ? y : v,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ e(w, { items: x, size: "sm" })
            ] })
          ] }),
          i && /* @__PURE__ */ e("div", { className: "text-f1-text-primary flex flex-col gap-2", children: l.days.map((r, d) => /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-2", children: [
            /* @__PURE__ */ e("div", { className: "flex items-center justify-center rounded-full", children: /* @__PURE__ */ e(
              f,
              {
                icon: m[r.mood],
                size: "lg",
                color: c[r.mood]
              }
            ) }),
            /* @__PURE__ */ o("p", { className: "text-f1-text-primary text-md font-normal", children: [
              /* @__PURE__ */ o("span", { className: "font-semibold", children: [
                r.day,
                ":"
              ] }),
              " ",
              r.comment || "-"
            ] })
          ] }, d)) })
        ]
      }
    ),
    /* @__PURE__ */ e(b, { style: { display: "none" } })
  ] });
}, I = g.create({
  name: "moodTracker",
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
        parseHTML: (t) => {
          const a = t.getAttribute("data-mood-tracker");
          return a ? JSON.parse(a) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-mood-tracker": JSON.stringify(t.data)
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
        tag: "div[data-mood-tracker]"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t, node: a }) {
    const n = a.attrs.data;
    return n ? [
      "div",
      {
        ...t,
        class: "mood-tracker-block",
        "data-mood-tracker": JSON.stringify(n)
      },
      ["div", { class: "mood-tracker-content" }, `Mood Tracker: ${n.title}`]
    ] : ["div"];
  },
  addNodeView() {
    return N(O);
  },
  addCommands() {
    return {
      insertMoodTracker: (t) => ({ commands: a }) => a.insertContent({
        type: this.name,
        attrs: { data: t }
      })
    };
  }
}), B = I;
export {
  I as MoodTracker,
  B as MoodTrackerExtension,
  O as MoodTrackerView
};
