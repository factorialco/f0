import e from "../../../../../icons/app/ChevronDown.js";
import t from "../../../../../icons/app/ChevronUp.js";
import n from "../../../../../icons/app/Delete.js";
import { useI18n as r } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../../../../F0Button/F0Button.js";
import { F0AvatarPerson as a } from "../../../../avatars/F0AvatarPerson/index.js";
import { Dropdown as o } from "../../../../../experimental/Navigation/Dropdown/index.js";
import { useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { format as u } from "date-fns";
import { NodeViewContent as d, NodeViewWrapper as f, ReactNodeViewRenderer as p } from "@tiptap/react";
import { Node as m } from "@tiptap/core";
//#region src/components/RichText/internal/Extensions/Transcript/index.tsx
var h = ({ node: p, deleteNode: m, updateAttributes: h }) => {
	let g = r(), [_, v] = s(p.attrs.isOpen ?? !1), y = p.attrs.data;
	if (!y) return null;
	let b = () => {
		let e = !_;
		v(e), h({ isOpen: e });
	}, x = [{
		label: g.actions.delete,
		icon: n,
		critical: !0,
		onClick: () => m()
	}], S = (e) => y.users.find((t) => t.id === e), C = (e) => {
		try {
			let t = new Date(e);
			return u(t, "HH:mm");
		} catch (t) {
			return console.error(t), e;
		}
	};
	return /* @__PURE__ */ l(f, {
		contentEditable: !1,
		children: [/* @__PURE__ */ l("div", {
			className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ l("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ c("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ l("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ c("div", {
							className: "flex flex-row items-center gap-3",
							children: /* @__PURE__ */ c("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: y.title
							})
						}), /* @__PURE__ */ c("p", {
							className: "text-f1-text-secondary text-sm",
							children: y.messages.length
						})]
					})
				}), /* @__PURE__ */ l("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ c(i, {
						onClick: b,
						variant: "outline",
						hideLabel: !0,
						label: _ ? g.actions.collapse : g.actions.expand,
						icon: _ ? t : e,
						size: "sm"
					}), /* @__PURE__ */ c(o, {
						items: x,
						size: "sm"
					})]
				})]
			}), _ && /* @__PURE__ */ c("div", {
				className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto",
				children: y.messages.map((e, t) => {
					let n = S(e.userId);
					return /* @__PURE__ */ l("div", {
						className: "flex flex-row gap-3",
						children: [n?.imageUrl && /* @__PURE__ */ c(a, {
							size: "xs",
							src: n.imageUrl,
							firstName: n.fullname,
							lastName: ""
						}), /* @__PURE__ */ l("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ l("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ c("span", {
									className: "text-f1-text-primary font-medium",
									children: n?.fullname || "Unknown User"
								}), /* @__PURE__ */ c("span", {
									className: "text-f1-text-tertiary text-xs",
									children: C(e.dateTime)
								})]
							}), /* @__PURE__ */ c("p", {
								className: "text-f1-text-secondary",
								children: e.text
							})]
						})]
					}, t);
				})
			})]
		}), /* @__PURE__ */ c(d, { style: { display: "none" } })]
	});
}, g = m.create({
	name: "transcript",
	group: "block",
	atom: !0,
	selectable: !0,
	draggable: !0,
	addOptions() {
		return { currentConfig: null };
	},
	addAttributes() {
		return {
			data: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("data-transcript");
					return t ? JSON.parse(t) : null;
				},
				renderHTML: (e) => e.data ? { "data-transcript": JSON.stringify(e.data) } : {}
			},
			config: { default: null },
			isOpen: { default: !1 }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-transcript]" }];
	},
	renderHTML({ HTMLAttributes: e, node: t }) {
		let n = t.attrs.data;
		return n ? [
			"div",
			{
				...e,
				class: "transcript-block",
				"data-transcript": JSON.stringify(n)
			},
			[
				"div",
				{ class: "transcript-content" },
				`Transcript: ${n.title}`
			]
		] : ["div"];
	},
	addNodeView() {
		return p(h);
	},
	addCommands() {
		return { insertTranscript: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), _ = g;
//#endregion
export { g as Transcript, _ as TranscriptExtension, h as TranscriptView };
