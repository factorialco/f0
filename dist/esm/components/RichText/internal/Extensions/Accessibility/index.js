import { Extension as e } from "@tiptap/react";
//#region src/components/RichText/internal/Extensions/Accessibility/index.tsx
var t = (e, t) => {
	let n = e.view.dom;
	n.setAttribute("aria-label", t), n.getAttribute("role") === "textbox" && n.removeAttribute("aria-expanded");
}, n = e.create({
	name: "accessibility",
	addOptions() {
		return { label: "Rich text editor" };
	},
	onCreate() {
		t(this.editor, this.options.label);
	},
	onTransaction() {
		t(this.editor, this.options.label);
	}
}), r = (e) => n.configure({ label: e || "Rich text" });
//#endregion
export { n as Accessibility, r as createAccessibilityExtension };
