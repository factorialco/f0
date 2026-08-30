import e from "../../../../../icons/app/CheckDouble.js";
import t from "../../../../../icons/app/ChevronDown.js";
import n from "../../../../../icons/app/Code.js";
import r from "../../../../../icons/app/Heading1.js";
import i from "../../../../../icons/app/Heading2.js";
import a from "../../../../../icons/app/Heading3.js";
import o from "../../../../../icons/app/Image.js";
import s from "../../../../../icons/app/List.js";
import c from "../../../../../icons/app/Minus.js";
import l from "../../../../../icons/app/OlList.js";
import u from "../../../../../icons/app/Quote.js";
import d from "../../../../../icons/app/Video.js";
import { DEFAULT_ACCEPTED_TYPES as f, insertImageFromFile as p } from "../Image/index.js";
import { parseVideoUrl as m } from "../VideoEmbed/index.js";
//#region src/components/RichText/internal/Extensions/SlashCommand/AvailableCommands.tsx
var h = ({ aiBlockConfig: h, translations: g, imageUploadConfig: _ }) => [
	...h?.buttons && h.buttons.length > 0 ? [{
		title: h.title,
		commands: [...h.buttons.map((e) => ({
			title: e.label,
			command: (t) => {
				t.chain().focus().executeAIAction(e.type, h).run();
			},
			icon: e.icon
		}))]
	}] : [],
	{
		title: g.richTextEditor.groups.textStyles,
		commands: [
			{
				title: g.richTextEditor.heading1,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleHeading({ level: 1 }).run();
				},
				icon: r
			},
			{
				title: g.richTextEditor.heading2,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleHeading({ level: 2 }).run();
				},
				icon: i
			},
			{
				title: g.richTextEditor.heading3,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleHeading({ level: 3 }).run();
				},
				icon: a
			}
		]
	},
	{
		title: g.richTextEditor.groups.lists,
		commands: [
			{
				title: g.richTextEditor.bulletList,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleBulletList().run();
				},
				icon: s
			},
			{
				title: g.richTextEditor.orderedList,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleOrderedList().run();
				},
				icon: l
			},
			{
				title: g.richTextEditor.taskList,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleTaskList().run();
				},
				icon: e
			}
		]
	},
	{
		title: g.richTextEditor.groups.blocks,
		commands: [
			..._ ? [{
				title: "Image",
				command: (e) => {
					let t = document.createElement("input");
					t.type = "file", t.accept = f.join(","), t.onchange = () => {
						let n = t.files?.[0];
						n && p(e, n, _);
					}, t.click();
				},
				icon: o
			}] : [],
			{
				title: g.richTextEditor.video,
				command: (e) => {
					let t = window.prompt(g.richTextEditor.videoUrlPrompt);
					t && (m(t) ? e.commands.setVideoEmbed({ src: t }) : window.alert(g.richTextEditor.videoUrlInvalid));
				},
				icon: d
			},
			{
				title: g.richTextEditor.details,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).setDetails().run();
				},
				icon: t
			},
			{
				title: g.richTextEditor.codeBlock,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleCodeBlock().run();
				},
				icon: n
			},
			{
				title: g.richTextEditor.quote,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).toggleBlockquote().run();
				},
				icon: u
			},
			{
				title: g.richTextEditor.divider,
				command: (e) => {
					let { from: t, to: n } = e.state.selection;
					e.chain().focus().setTextSelection({
						from: t,
						to: n
					}).setHorizontalRule().run();
				},
				icon: c
			}
		]
	}
];
//#endregion
export { h as getGroupedCommands };
