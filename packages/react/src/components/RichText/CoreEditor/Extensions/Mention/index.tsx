import Mention from "@tiptap/extension-mention"

import { mentionFocusableClasses } from "@/lib/recipes"
import { cn } from "@/lib/utils"
import { createSuggestionConfig } from "./suggestion"
import { MentionedUser, MentionsConfig } from "./types"

// Legacy class kept for backward compatibility with already-stored content
// and for any external CSS still targeting `a.mention`. New content emitted
// by the editor carries both the legacy class and the shared recipe classes.
const LEGACY_MENTION_CLASS = "mention"

const CustomMention = Mention.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: { default: null },
      label: { default: null },
      href: { default: "#" },
    }
  },
})

export const createMentionExtensions = (
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  mentionsConfig?: MentionsConfig
) => {
  if (!mentionsConfig?.users?.length) {
    return []
  }

  return [
    CustomMention.configure({
      HTMLAttributes: {
        class: LEGACY_MENTION_CLASS,
      },
      renderHTML({ options, node }) {
        return [
          "a",
          {
            onclick:
              "if(this.closest('.ProseMirror')?.getAttribute('contenteditable') === 'true') { event.preventDefault(); }",
            href: node.attrs.href || "#",
            class: cn(options.HTMLAttributes.class, mentionFocusableClasses),
            "data-id": node.attrs.id,
            "data-type": "mention",
            rel: "noopener noreferrer",
            target: "_blank",
          },
          `${options.suggestion.char ?? "@"}${node.attrs.label}`,
        ]
      },
      suggestion: createSuggestionConfig(
        mentionSuggestions,
        setMentionSuggestions,
        mentionsConfig.onMentionQueryStringChanged,
        mentionsConfig.users
      ),
    }),
  ]
}

// Export components for external use if needed
export { MentionItem } from "./MentionItem"
export { MentionList } from "./MentionList"
export { MentionPopover } from "./MentionPopover"
export * from "./types"
