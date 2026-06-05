import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { l as F } from "../../../../_virtual/lodash.js";
import { Fragment as C } from "react";
import { Picker as R } from "../../../../kits/Social/Reactions/Picker/index.js";
import L from "../../../../icons/app/AlignTextCenter.js";
import y from "../../../../icons/app/AlignTextJustify.js";
import j from "../../../../icons/app/AlignTextLeft.js";
import B from "../../../../icons/app/AlignTextRight.js";
import G from "../../../../icons/app/Bold.js";
import H from "../../../../icons/app/CheckDouble.js";
import z from "../../../../icons/app/ChevronDown.js";
import D from "../../../../icons/app/Code.js";
import N from "../../../../icons/app/Cross.js";
import S from "../../../../icons/app/Ellipsis.js";
import q from "../../../../icons/app/Heading1.js";
import I from "../../../../icons/app/Heading2.js";
import O from "../../../../icons/app/Heading3.js";
import P from "../../../../icons/app/Italic.js";
import _ from "../../../../icons/app/List.js";
import "../../../../icons/app/Menu.js";
import U from "../../../../icons/app/Minus.js";
import J from "../../../../icons/app/OlList.js";
import K from "../../../../icons/app/Pencil.js";
import Q from "../../../../icons/app/Quote.js";
import V from "../../../../icons/app/Strikethrough.js";
import W from "../../../../icons/app/Underline.js";
import { cn as d } from "../../../../lib/utils.js";
import { LinkPopup as X } from "./LinkPopup/index.js";
import { ToolbarDivider as m } from "./ToolbarDivider/index.js";
import { ToolbarDropdown as f } from "./ToolbarDropdown/index.js";
import { getTextAlignIcon as Y, getTextAlignLabel as Z } from "./utils.js";
import { useI18n as M } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as ii } from "../../../F0Button/F0Button.js";
import { F0ButtonToggle as ti } from "../../../F0ButtonToggle/F0ButtonToggle.js";
const ei = (e, n) => e.map((r, l) => /* @__PURE__ */ s(C, { children: [
  r,
  l < e.length - 1 && n
] }, `intersperse-${l}`)), Ni = ({
  editor: e,
  isFullscreen: n = !1,
  disableButtons: r,
  onClose: l,
  animationComplete: u = !0,
  darkMode: h = !1,
  showEmojiPicker: g = !0,
  plainHtmlMode: p = !1
}) => {
  const t = M(), v = [
    {
      key: "bold",
      icon: G,
      label: t.richTextEditor.bold,
      active: (i) => i.isActive("bold"),
      onClick: (i) => i.chain().focus().toggleBold().run(),
      tooltip: {
        label: `**${t.richTextEditor.bold}**`,
        shortcut: ["cmd", "b"]
      }
    },
    {
      key: "italic",
      icon: P,
      label: t.richTextEditor.italic,
      active: (i) => i.isActive("italic"),
      onClick: (i) => i.chain().focus().toggleItalic().run(),
      tooltip: {
        label: `*${t.richTextEditor.italic}*`,
        shortcut: ["cmd", "i"]
      }
    },
    {
      key: "underline",
      icon: W,
      label: t.richTextEditor.underline,
      active: (i) => i.isActive("underline"),
      onClick: (i) => i.chain().focus().toggleUnderline().run(),
      tooltip: {
        label: `_${t.richTextEditor.underline}_`,
        shortcut: ["cmd", "u"]
      }
    },
    {
      key: "strike",
      icon: V,
      label: t.richTextEditor.strike,
      active: (i) => i.isActive("strike"),
      onClick: (i) => i.chain().focus().toggleStrike().run(),
      tooltip: {
        label: `~${t.richTextEditor.strike}~`,
        shortcut: ["cmd", "shift", "s"]
      }
    }
  ], x = [
    {
      key: "heading1",
      icon: q,
      label: t.richTextEditor.heading1,
      active: (i) => i.isActive("heading", { level: 1 }),
      onClick: (i) => i.chain().focus().toggleHeading({ level: 1 }).run(),
      tooltip: {
        label: `# ${t.richTextEditor.heading1}`,
        shortcut: ["cmd", "1"]
      }
    },
    {
      key: "heading2",
      icon: I,
      label: t.richTextEditor.heading2,
      active: (i) => i.isActive("heading", { level: 2 }),
      onClick: (i) => i.chain().focus().toggleHeading({ level: 2 }).run(),
      tooltip: {
        label: `## ${t.richTextEditor.heading2}`,
        shortcut: ["cmd", "2"]
      }
    },
    {
      key: "heading3",
      icon: O,
      label: t.richTextEditor.heading3,
      active: (i) => i.isActive("heading", { level: 3 }),
      onClick: (i) => i.chain().focus().toggleHeading({ level: 3 }).run(),
      tooltip: {
        label: `### ${t.richTextEditor.heading3}`,
        shortcut: ["cmd", "3"]
      }
    }
  ], b = [
    {
      key: "bulletList",
      icon: _,
      label: t.richTextEditor.bulletList,
      active: (i) => i.isActive("bulletList"),
      onClick: (i) => i.chain().focus().toggleBulletList().run(),
      tooltip: {
        label: `- ${t.richTextEditor.bulletList}`,
        shortcut: ["cmd", "alt", "8"]
      }
    },
    {
      key: "orderedList",
      icon: J,
      label: t.richTextEditor.orderedList,
      active: (i) => i.isActive("orderedList"),
      onClick: (i) => i.chain().focus().toggleOrderedList().run(),
      tooltip: {
        label: `1. ${t.richTextEditor.orderedList}`,
        shortcut: ["cmd", "alt", "7"]
      }
    },
    ...p ? [] : [
      {
        key: "taskList",
        icon: H,
        label: t.richTextEditor.taskList,
        active: (i) => i.isActive("taskList"),
        onClick: (i) => i.chain().focus().toggleTaskList().run(),
        tooltip: {
          label: `[ ] ${t.richTextEditor.taskList}`,
          shortcut: ["cmd", "alt", "t"]
        }
      },
      {
        key: "highlight",
        icon: K,
        label: t.richTextEditor.highlight,
        active: (i) => i.isActive("highlight"),
        onClick: (i) => i.chain().focus().toggleHighlight().run(),
        tooltip: {
          label: `==${t.richTextEditor.highlight}==`,
          shortcut: ["cmd", "alt", "h"]
        }
      }
    ]
  ], a = (i) => /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-0.5", children: i.map((c) => /* @__PURE__ */ o(
    ti,
    {
      label: c.label,
      icon: c.icon,
      selected: c.active(e),
      disabled: r,
      onSelectedChange: () => c.onClick(e)
    },
    c.key
  )) }), k = a(v), A = a(x), T = /* @__PURE__ */ s("div", { className: "flex flex-row items-center gap-0.5", children: [
    /* @__PURE__ */ o(
      f,
      {
        darkMode: h,
        items: [
          {
            label: t.richTextEditor.left,
            icon: j,
            onClick: () => e.chain().focus().setTextAlign("left").run(),
            isActive: e.isActive({ textAlign: "left" }) || !e.isActive({ textAlign: "justify" }) && !e.isActive({ textAlign: "center" }) && !e.isActive({ textAlign: "right" })
          },
          {
            label: t.richTextEditor.center,
            icon: L,
            onClick: () => e.chain().focus().setTextAlign("center").run(),
            isActive: e.isActive({ textAlign: "center" })
          },
          {
            label: t.richTextEditor.right,
            icon: B,
            onClick: () => e.chain().focus().setTextAlign("right").run(),
            isActive: e.isActive({ textAlign: "right" })
          },
          {
            label: t.richTextEditor.justify,
            icon: y,
            onClick: () => e.chain().focus().setTextAlign("justify").run(),
            isActive: e.isActive({ textAlign: "justify" })
          }
        ],
        disabled: r,
        activator: {
          label: Z(e),
          icon: Y(e)
        }
      }
    ),
    /* @__PURE__ */ o(m, { hidden: !n }),
    a(b),
    /* @__PURE__ */ o(
      f,
      {
        darkMode: h,
        items: [
          {
            icon: D,
            label: t.richTextEditor.codeBlock,
            onClick: () => e.chain().focus().toggleCodeBlock().run(),
            isActive: e.isActive("codeBlock")
          },
          {
            icon: U,
            label: t.richTextEditor.divider,
            onClick: () => e.chain().focus().setHorizontalRule().run(),
            isActive: e.isActive("horizontalRule")
          },
          {
            icon: Q,
            label: t.richTextEditor.quote,
            onClick: () => e.chain().focus().toggleBlockquote().run(),
            isActive: e.isActive("blockquote")
          },
          {
            icon: z,
            label: t.richTextEditor.details,
            onClick: () => e.chain().focus().setDetails().run(),
            isActive: e.isActive("details")
          }
        ],
        disabled: r,
        activator: {
          label: t.richTextEditor.moreOptions,
          icon: S
        }
      }
    )
  ] }), E = [
    /* @__PURE__ */ o(X, { editor: e, disabled: r }, "link-popup")
  ], $ = /* @__PURE__ */ o(
    R,
    {
      variant: "ghost",
      onSelect: (i) => {
        e.chain().focus().insertContent(i).run();
      }
    }
  ), w = F.compact([
    E,
    g && !r && $,
    k,
    A,
    T
  ]);
  return /* @__PURE__ */ s("div", { className: d("flex flex-row items-start gap-2 overflow-hidden"), children: [
    l && /* @__PURE__ */ o(
      ii,
      {
        onClick: (i) => {
          i.preventDefault(), l();
        },
        variant: "neutral",
        size: "md",
        disabled: r,
        hideLabel: !0,
        label: t.actions.close,
        icon: N
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: d(
          "flex grow flex-row items-center",
          u ? "scrollbar-macos overflow-x-auto overflow-y-hidden" : "overflow-hidden"
        ),
        children: ei(w, /* @__PURE__ */ o(m, {}))
      }
    )
  ] });
};
export {
  X as LinkPopup,
  Ni as Toolbar,
  m as ToolbarDivider,
  f as ToolbarDropdown
};
