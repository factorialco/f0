import { Extension as s } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
const i = (t, o) => {
  const e = t.view.dom;
  e.setAttribute("aria-label", o), e.getAttribute("role") === "textbox" && e.removeAttribute("aria-expanded");
}, r = s.create({
  name: "accessibility",
  addOptions() {
    return {
      label: "Rich text editor"
    };
  },
  onCreate() {
    i(this.editor, this.options.label);
  },
  onTransaction() {
    i(this.editor, this.options.label);
  }
}), n = (t) => r.configure({ label: t || "Rich text" });
export {
  r as Accessibility,
  n as createAccessibilityExtension
};
