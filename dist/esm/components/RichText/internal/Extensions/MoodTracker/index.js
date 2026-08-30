import { F0Icon as e } from "../../../../F0Icon/index.js";
import t from "../../../../../icons/app/ChevronDown.js";
import n from "../../../../../icons/app/ChevronUp.js";
import r from "../../../../../icons/app/Delete.js";
import { useI18n as i } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as a } from "../../../../F0Button/F0Button.js";
import { Dropdown as o } from "../../../../../experimental/Navigation/Dropdown/index.js";
import { pulseIcon as s, pulseIconColor as c } from "../../../../../lib/mood.js";
import { useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { NodeViewContent as f, NodeViewWrapper as p, ReactNodeViewRenderer as m } from "@tiptap/react";
import { Node as h } from "@tiptap/core";
//#region src/components/RichText/internal/Extensions/MoodTracker/index.tsx
var g = ({ node: m, deleteNode: h, updateAttributes: g }) => {
	let _ = i(), [v, y] = l(m.attrs.isOpen ?? !1), b = m.attrs.data;
	if (!b) return null;
	let x = () => {
		let e = !v;
		y(e), g({ isOpen: e });
	}, S = [{
		label: _.actions.delete,
		icon: r,
		critical: !0,
		onClick: () => h()
	}];
	return /* @__PURE__ */ d(p, {
		contentEditable: !1,
		children: [/* @__PURE__ */ d("div", {
			className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ d("div", {
				className: "flex flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ u("div", {
					className: "flex flex-row items-center gap-2",
					children: /* @__PURE__ */ d("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ d("div", {
							className: "flex flex-row items-center gap-3",
							children: [/* @__PURE__ */ u("p", {
								className: "text-f1-text-primary text-lg font-semibold",
								children: b.title
							}), /* @__PURE__ */ u("div", {
								className: "flex flex-row items-center",
								children: b.days.map((t, n) => /* @__PURE__ */ u("div", {
									className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
									children: /* @__PURE__ */ u(e, {
										icon: s[t.mood],
										size: "lg",
										color: c[t.mood]
									})
								}, n))
							})]
						}), /* @__PURE__ */ u("p", { children: /* @__PURE__ */ u("span", {
							className: "text-f1-text-primary text-md font-normal",
							children: b.averageMoodComment
						}) })]
					})
				}), /* @__PURE__ */ d("div", {
					className: "flex flex-row items-center gap-1",
					children: [/* @__PURE__ */ u(a, {
						onClick: x,
						variant: "outline",
						hideLabel: !0,
						label: v ? _.actions.collapse : _.actions.expand,
						icon: v ? n : t,
						size: "sm"
					}), /* @__PURE__ */ u(o, {
						items: S,
						size: "sm"
					})]
				})]
			}), v && /* @__PURE__ */ u("div", {
				className: "text-f1-text-primary flex flex-col gap-2",
				children: b.days.map((t, n) => /* @__PURE__ */ d("div", {
					className: "flex flex-row items-center gap-2",
					children: [/* @__PURE__ */ u("div", {
						className: "flex items-center justify-center rounded-full",
						children: /* @__PURE__ */ u(e, {
							icon: s[t.mood],
							size: "lg",
							color: c[t.mood]
						})
					}), /* @__PURE__ */ d("p", {
						className: "text-f1-text-primary text-md font-normal",
						children: [
							/* @__PURE__ */ d("span", {
								className: "font-semibold",
								children: [t.day, ":"]
							}),
							" ",
							t.comment || "-"
						]
					})]
				}, n))
			})]
		}), /* @__PURE__ */ u(f, { style: { display: "none" } })]
	});
}, _ = h.create({
	name: "moodTracker",
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
					let t = e.getAttribute("data-mood-tracker");
					return t ? JSON.parse(t) : null;
				},
				renderHTML: (e) => e.data ? { "data-mood-tracker": JSON.stringify(e.data) } : {}
			},
			config: { default: null },
			isOpen: { default: !1 }
		};
	},
	parseHTML() {
		return [{ tag: "div[data-mood-tracker]" }];
	},
	renderHTML({ HTMLAttributes: e, node: t }) {
		let n = t.attrs.data;
		return n ? [
			"div",
			{
				...e,
				class: "mood-tracker-block",
				"data-mood-tracker": JSON.stringify(n)
			},
			[
				"div",
				{ class: "mood-tracker-content" },
				`Mood Tracker: ${n.title}`
			]
		] : ["div"];
	},
	addNodeView() {
		return m(g);
	},
	addCommands() {
		return { insertMoodTracker: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: { data: e }
		}) };
	}
}), v = _;
//#endregion
export { _ as MoodTracker, v as MoodTrackerExtension, g as MoodTrackerView };
