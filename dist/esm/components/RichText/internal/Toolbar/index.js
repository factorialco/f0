import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/AlignTextCenter.js";
import n from "../../../../icons/app/AlignTextJustify.js";
import r from "../../../../icons/app/AlignTextLeft.js";
import i from "../../../../icons/app/AlignTextRight.js";
import a from "../../../../icons/app/Bold.js";
import o from "../../../../icons/app/CheckDouble.js";
import s from "../../../../icons/app/ChevronDown.js";
import c from "../../../../icons/app/Code.js";
import l from "../../../../icons/app/Ellipsis.js";
import u from "../../../../icons/app/Heading1.js";
import d from "../../../../icons/app/Heading2.js";
import f from "../../../../icons/app/Heading3.js";
import p from "../../../../icons/app/Italic.js";
import m from "../../../../icons/app/List.js";
import h from "../../../../icons/app/Minus.js";
import g from "../../../../icons/app/OlList.js";
import _ from "../../../../icons/app/Pencil.js";
import v from "../../../../icons/app/Quote.js";
import y from "../../../../icons/app/Strikethrough.js";
import b from "../../../../icons/app/Underline.js";
import { useI18n as x } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0ButtonToggle as S } from "../../../F0ButtonToggle/F0ButtonToggle.js";
import { Picker as C } from "../../../../sds/social/Reactions/Picker/index2.js";
import { LinkPopup as w } from "./LinkPopup/index.js";
import { ToolbarDivider as T } from "./ToolbarDivider/index.js";
import { ToolbarDropdown as E } from "./ToolbarDropdown/index.js";
import { Fragment as D, memo as O, useMemo as k } from "react";
import { jsx as A, jsxs as j } from "react/jsx-runtime";
import { compact as M } from "lodash";
import { useEditorState as N } from "@tiptap/react";
//#region src/components/RichText/internal/Toolbar/index.tsx
var P = (e, t) => e.map((n, r) => /* @__PURE__ */ j(D, { children: [n, r < e.length - 1 && t] }, `intersperse-${r}`)), F = (e) => [
	{
		key: "bold",
		icon: a,
		label: e.richTextEditor.bold,
		active: (e) => e.isActive("bold"),
		onClick: (e) => e.chain().focus().toggleBold().run(),
		tooltip: {
			label: `**${e.richTextEditor.bold}**`,
			shortcut: ["cmd", "b"]
		}
	},
	{
		key: "italic",
		icon: p,
		label: e.richTextEditor.italic,
		active: (e) => e.isActive("italic"),
		onClick: (e) => e.chain().focus().toggleItalic().run(),
		tooltip: {
			label: `*${e.richTextEditor.italic}*`,
			shortcut: ["cmd", "i"]
		}
	},
	{
		key: "underline",
		icon: b,
		label: e.richTextEditor.underline,
		active: (e) => e.isActive("underline"),
		onClick: (e) => e.chain().focus().toggleUnderline().run(),
		tooltip: {
			label: `_${e.richTextEditor.underline}_`,
			shortcut: ["cmd", "u"]
		}
	},
	{
		key: "strike",
		icon: y,
		label: e.richTextEditor.strike,
		active: (e) => e.isActive("strike"),
		onClick: (e) => e.chain().focus().toggleStrike().run(),
		tooltip: {
			label: `~${e.richTextEditor.strike}~`,
			shortcut: [
				"cmd",
				"shift",
				"s"
			]
		}
	}
], I = (e) => [
	{
		key: "heading1",
		icon: u,
		label: e.richTextEditor.heading1,
		active: (e) => e.isActive("heading", { level: 1 }),
		onClick: (e) => e.chain().focus().toggleHeading({ level: 1 }).run(),
		tooltip: {
			label: `# ${e.richTextEditor.heading1}`,
			shortcut: ["cmd", "1"]
		}
	},
	{
		key: "heading2",
		icon: d,
		label: e.richTextEditor.heading2,
		active: (e) => e.isActive("heading", { level: 2 }),
		onClick: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(),
		tooltip: {
			label: `## ${e.richTextEditor.heading2}`,
			shortcut: ["cmd", "2"]
		}
	},
	{
		key: "heading3",
		icon: f,
		label: e.richTextEditor.heading3,
		active: (e) => e.isActive("heading", { level: 3 }),
		onClick: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
		tooltip: {
			label: `### ${e.richTextEditor.heading3}`,
			shortcut: ["cmd", "3"]
		}
	}
], L = (e, t) => [
	{
		key: "bulletList",
		icon: m,
		label: e.richTextEditor.bulletList,
		active: (e) => e.isActive("bulletList"),
		onClick: (e) => e.chain().focus().toggleBulletList().run(),
		tooltip: {
			label: `- ${e.richTextEditor.bulletList}`,
			shortcut: [
				"cmd",
				"alt",
				"8"
			]
		}
	},
	{
		key: "orderedList",
		icon: g,
		label: e.richTextEditor.orderedList,
		active: (e) => e.isActive("orderedList"),
		onClick: (e) => e.chain().focus().toggleOrderedList().run(),
		tooltip: {
			label: `1. ${e.richTextEditor.orderedList}`,
			shortcut: [
				"cmd",
				"alt",
				"7"
			]
		}
	},
	...t ? [] : [{
		key: "taskList",
		icon: o,
		label: e.richTextEditor.taskList,
		active: (e) => e.isActive("taskList"),
		onClick: (e) => e.chain().focus().toggleTaskList().run(),
		tooltip: {
			label: `[ ] ${e.richTextEditor.taskList}`,
			shortcut: [
				"cmd",
				"alt",
				"t"
			]
		}
	}, {
		key: "highlight",
		icon: _,
		label: e.richTextEditor.highlight,
		active: (e) => e.isActive("highlight"),
		onClick: (e) => e.chain().focus().toggleHighlight().run(),
		tooltip: {
			label: `==${e.richTextEditor.highlight}==`,
			shortcut: [
				"cmd",
				"alt",
				"h"
			]
		}
	}]
], R = [
	{
		value: "left",
		label: "Left",
		icon: r
	},
	{
		value: "center",
		label: "Center",
		icon: t
	},
	{
		value: "right",
		label: "Right",
		icon: i
	},
	{
		value: "justify",
		label: "Justify",
		icon: n
	}
], z = O(function({ editor: a, isFullscreen: o = !1, disableButtons: u, animationComplete: d = !0, darkMode: f = !1, showEmojiPicker: p = !0, plainHtmlMode: m = !1 }) {
	let g = x(), _ = k(() => F(g), [g]), y = k(() => I(g), [g]), b = k(() => L(g, m), [g, m]), D = N({
		editor: a,
		selector: ({ editor: e }) => ({
			buttons: Object.fromEntries([
				..._,
				...y,
				...b
			].map((t) => [t.key, t.active(e)])),
			textAlign: R.find(({ value: t }) => e.isActive({ textAlign: t }))?.value ?? "left",
			codeBlock: e.isActive("codeBlock"),
			horizontalRule: e.isActive("horizontalRule"),
			blockquote: e.isActive("blockquote"),
			details: e.isActive("details")
		})
	}), O = (e) => /* @__PURE__ */ A("div", {
		className: "flex flex-row items-center gap-0.5",
		children: e.map((e) => /* @__PURE__ */ A(S, {
			label: e.label,
			icon: e.icon,
			selected: D.buttons[e.key],
			disabled: u,
			onSelectedChange: () => e.onClick(a)
		}, e.key))
	}), z = O(_), B = O(y), V = R.find(({ value: e }) => e === D.textAlign) ?? R[0], H = /* @__PURE__ */ j("div", {
		className: "flex flex-row items-center gap-0.5",
		children: [
			/* @__PURE__ */ A(E, {
				darkMode: f,
				items: [
					{
						label: g.richTextEditor.left,
						icon: r,
						onClick: () => a.chain().focus().setTextAlign("left").run(),
						isActive: D.textAlign === "left"
					},
					{
						label: g.richTextEditor.center,
						icon: t,
						onClick: () => a.chain().focus().setTextAlign("center").run(),
						isActive: D.textAlign === "center"
					},
					{
						label: g.richTextEditor.right,
						icon: i,
						onClick: () => a.chain().focus().setTextAlign("right").run(),
						isActive: D.textAlign === "right"
					},
					{
						label: g.richTextEditor.justify,
						icon: n,
						onClick: () => a.chain().focus().setTextAlign("justify").run(),
						isActive: D.textAlign === "justify"
					}
				],
				disabled: u,
				activator: {
					label: V.label,
					icon: V.icon
				}
			}),
			/* @__PURE__ */ A(T, { hidden: !o }),
			O(b),
			/* @__PURE__ */ A(E, {
				darkMode: f,
				items: [
					{
						icon: c,
						label: g.richTextEditor.codeBlock,
						onClick: () => a.chain().focus().toggleCodeBlock().run(),
						isActive: D.codeBlock
					},
					{
						icon: h,
						label: g.richTextEditor.divider,
						onClick: () => a.chain().focus().setHorizontalRule().run(),
						isActive: D.horizontalRule
					},
					{
						icon: v,
						label: g.richTextEditor.quote,
						onClick: () => a.chain().focus().toggleBlockquote().run(),
						isActive: D.blockquote
					},
					{
						icon: s,
						label: g.richTextEditor.details,
						onClick: () => a.chain().focus().setDetails().run(),
						isActive: D.details
					}
				],
				disabled: u,
				activator: {
					label: g.richTextEditor.moreOptions,
					icon: l
				}
			})
		]
	}), U = M([
		[/* @__PURE__ */ A(w, {
			editor: a,
			disabled: u
		}, "link-popup")],
		p && !u && /* @__PURE__ */ A(C, {
			variant: "ghost",
			onSelect: (e) => {
				a.chain().focus().insertContent(e).run();
			}
		}),
		z,
		B,
		H
	]);
	return /* @__PURE__ */ A("div", {
		className: e("flex flex-row items-start gap-2 overflow-hidden"),
		children: /* @__PURE__ */ A("div", {
			className: e("flex grow flex-row items-center", d ? "scrollbar-macos overflow-x-auto overflow-y-hidden" : "overflow-hidden"),
			children: P(U, /* @__PURE__ */ A(T, {}))
		})
	});
});
//#endregion
export { z as Toolbar, T as ToolbarDivider };
