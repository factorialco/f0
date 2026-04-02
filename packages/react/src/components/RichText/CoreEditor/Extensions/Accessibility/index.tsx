import { Editor, Extension } from "@tiptap/react"

const applyA11yAttrs = (editor: Editor, label: string) => {
  const dom = editor.view.dom
  dom.setAttribute("aria-label", label)
  if (dom.getAttribute("role") === "textbox") {
    dom.removeAttribute("aria-expanded")
  }
}

const Accessibility = Extension.create({
  name: "accessibility",

  addOptions() {
    return {
      label: "Rich text editor",
    }
  },

  onCreate() {
    applyA11yAttrs(this.editor, this.options.label)
  },

  onTransaction() {
    applyA11yAttrs(this.editor, this.options.label)
  },
})

export const createAccessibilityExtension = (label: string) =>
  Accessibility.configure({ label: label || "Rich text" })

export { Accessibility }
