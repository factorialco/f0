import m from "../../../../../icons/app/CheckDouble.js";
import n from "../../../../../icons/app/ChevronDown.js";
import s from "../../../../../icons/app/Code.js";
import l from "../../../../../icons/app/Heading1.js";
import d from "../../../../../icons/app/Heading2.js";
import f from "../../../../../icons/app/Heading3.js";
import a from "../../../../../icons/app/Image.js";
import u from "../../../../../icons/app/List.js";
import "../../../../../icons/app/Menu.js";
import h from "../../../../../icons/app/Minus.js";
import p from "../../../../../icons/app/OlList.js";
import T from "../../../../../icons/app/Quote.js";
import x from "../../../../../icons/app/Video.js";
import { DEFAULT_ACCEPTED_TYPES as g, insertImageFromFile as E } from "../Image/index.js";
import { parseVideoUrl as w } from "../VideoEmbed/index.js";
const V = ({
  aiBlockConfig: i,
  translations: c,
  imageUploadConfig: r
}) => F({
  aiBlockConfig: i,
  translations: c,
  imageUploadConfig: r
}).flatMap((t) => t.commands), F = ({
  aiBlockConfig: i,
  translations: c,
  imageUploadConfig: r
}) => [
  // Only include AI Block group if config is provided
  ...i?.buttons && i.buttons.length > 0 ? [
    {
      title: i.title,
      commands: [
        ...i.buttons.map((e) => ({
          title: e.label,
          command: (t) => {
            t.chain().focus().executeAIAction(e.type, i).run();
          },
          icon: e.icon
        }))
      ]
    }
  ] : [],
  {
    title: c.richTextEditor.groups.textStyles,
    commands: [
      {
        title: c.richTextEditor.heading1,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleHeading({ level: 1 }).run();
        },
        icon: l
      },
      {
        title: c.richTextEditor.heading2,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleHeading({ level: 2 }).run();
        },
        icon: d
      },
      {
        title: c.richTextEditor.heading3,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleHeading({ level: 3 }).run();
        },
        icon: f
      }
    ]
  },
  {
    title: c.richTextEditor.groups.lists,
    commands: [
      {
        title: c.richTextEditor.bulletList,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleBulletList().run();
        },
        icon: u
      },
      {
        title: c.richTextEditor.orderedList,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleOrderedList().run();
        },
        icon: p
      },
      {
        title: c.richTextEditor.taskList,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleTaskList().run();
        },
        icon: m
      }
    ]
  },
  {
    title: c.richTextEditor.groups.blocks,
    commands: [
      ...r ? [
        {
          title: "Image",
          command: (e) => {
            const t = document.createElement("input");
            t.type = "file", t.accept = g.join(","), t.onchange = () => {
              const o = t.files?.[0];
              o && E(e, o, r);
            }, t.click();
          },
          icon: a
        }
      ] : [],
      {
        title: c.richTextEditor.video,
        command: (e) => {
          const t = window.prompt(
            c.richTextEditor.videoUrlPrompt
          );
          t && (w(t) ? e.commands.setVideoEmbed({ src: t }) : window.alert(c.richTextEditor.videoUrlInvalid));
        },
        icon: x
      },
      {
        title: c.richTextEditor.details,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).setDetails().run();
        },
        icon: n
      },
      {
        title: c.richTextEditor.codeBlock,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleCodeBlock().run();
        },
        icon: s
      },
      {
        title: c.richTextEditor.quote,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).toggleBlockquote().run();
        },
        icon: T
      },
      {
        title: c.richTextEditor.divider,
        command: (e) => {
          const { from: t, to: o } = e.state.selection;
          e.chain().focus().setTextSelection({ from: t, to: o }).setHorizontalRule().run();
        },
        icon: h
      }
    ]
  }
];
export {
  V as availableCommands,
  F as getGroupedCommands
};
