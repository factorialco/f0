import { TaskItem as s } from "../../../../../node_modules/.pnpm/@tiptap_extension-task-item@2.11.7_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0/node_modules/@tiptap/extension-task-item/dist/index.js";
import { cn as r } from "../../../../../lib/utils.js";
const a = s.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => t.getAttribute("data-checked") === "true",
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      {
        ...e,
        "data-type": this.name,
        "data-checked": t.attrs.checked,
        class: r("f1-task-item", e.class)
      },
      [
        "input",
        {
          type: "checkbox",
          checked: t.attrs.checked ? "checked" : null,
          disabled: "disabled",
          contenteditable: "false"
        }
      ],
      [
        "div",
        {
          class: "f1-task-item-content"
        },
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
}), n = a.configure({
  nested: !0,
  HTMLAttributes: {
    class: "f1-task-item"
  }
});
export {
  a as CustomTask,
  n as CustomTaskExtension
};
