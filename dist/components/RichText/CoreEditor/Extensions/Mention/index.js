import { Mention as a } from "../../../../../node_modules/.pnpm/@tiptap_extension-mention@2.11.7_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_@ti_yrkqaoe5x5nvaruhybao73upze/node_modules/@tiptap/extension-mention/dist/index.js";
import { mentionFocusableClasses as o } from "../../../../../lib/recipes/mention.js";
import { cn as i } from "../../../../../lib/utils.js";
import { createSuggestionConfig as u } from "./suggestion.js";
const l = "mention", c = a.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: { default: null },
      label: { default: null },
      href: { default: "#" }
    };
  }
}), b = (n, s, t) => t?.users?.length ? [
  c.configure({
    HTMLAttributes: {
      class: l
    },
    renderHTML({ options: r, node: e }) {
      return [
        "a",
        {
          onclick: "if(this.closest('.ProseMirror')?.getAttribute('contenteditable') === 'true') { event.preventDefault(); }",
          href: e.attrs.href || "#",
          class: i(r.HTMLAttributes.class, o),
          "data-id": e.attrs.id,
          "data-type": "mention",
          rel: "noopener noreferrer",
          target: "_blank"
        },
        `${r.suggestion.char ?? "@"}${e.attrs.label}`
      ];
    },
    suggestion: u(
      n,
      s,
      t.onMentionQueryStringChanged,
      t.users
    )
  })
] : [];
export {
  b as createMentionExtensions
};
