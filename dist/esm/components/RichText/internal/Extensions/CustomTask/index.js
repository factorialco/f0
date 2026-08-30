import { cn as e } from "../../../../../lib/utils.js";
import t from "@tiptap/extension-task-item";
//#region src/components/RichText/internal/Extensions/CustomTask/index.tsx
var n = t.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			checked: {
				default: !1,
				keepOnSplit: !1,
				parseHTML: (e) => e.getAttribute("data-checked") === "true",
				renderHTML: (e) => ({ "data-checked": e.checked })
			}
		};
	},
	parseHTML() {
		return [{
			tag: `li[data-type="${this.name}"]`,
			priority: 51
		}];
	},
	renderHTML({ node: t, HTMLAttributes: n }) {
		return [
			"li",
			{
				...n,
				"data-type": this.name,
				"data-checked": t.attrs.checked,
				class: e("f1-task-item", n.class)
			},
			["input", {
				type: "checkbox",
				checked: t.attrs.checked ? "checked" : null,
				disabled: "disabled",
				contenteditable: "false"
			}],
			[
				"div",
				{ class: "f1-task-item-content" },
				0
			]
		];
	},
	addKeyboardShortcuts() {
		return {
			...this.parent?.() || {},
			Enter: () => this.editor.isActive(this.name) ? this.editor.commands.splitListItem(this.name) : !1,
			"Shift-Tab": () => this.editor.isActive(this.name) ? this.editor.commands.liftListItem(this.name) : !1
		};
	}
}), r = n.configure({
	nested: !0,
	HTMLAttributes: { class: "f1-task-item" }
});
//#endregion
export { n as CustomTask, r as CustomTaskExtension };
