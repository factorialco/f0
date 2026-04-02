import TaskItem from "@tiptap/extension-task-item"

import { cn } from "@/lib/utils"

const CustomTask = TaskItem.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      checked: {
        default: false,
        keepOnSplit: false,
        parseHTML: (element) => element.getAttribute("data-checked") === "true",
        renderHTML: (attributes) => {
          return {
            "data-checked": attributes.checked,
          }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51,
      },
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "li",
      {
        ...HTMLAttributes,
        "data-type": this.name,
        "data-checked": node.attrs.checked,
        class: cn("f1-task-item", HTMLAttributes.class),
      },
      [
        "input",
        {
          type: "checkbox",
          checked: node.attrs.checked ? "checked" : null,
          disabled: "disabled",
          contenteditable: "false",
        },
      ],
      [
        "div",
        {
          class: "f1-task-item-content",
        },
        0,
      ],
    ]
  },

  addKeyboardShortcuts() {
    const shortcuts = this.parent?.() || {}

    return {
      ...shortcuts,
      Enter: () => {
        if (this.editor.isActive(this.name)) {
          return this.editor.commands.splitListItem(this.name)
        }
        return false
      },
      "Shift-Tab": () => {
        if (this.editor.isActive(this.name)) {
          return this.editor.commands.liftListItem(this.name)
        }
        return false
      },
    }
  },
})

export const CustomTaskExtension = CustomTask.configure({
  nested: true,
  HTMLAttributes: {
    class: "f1-task-item",
  },
})

export { CustomTask }
