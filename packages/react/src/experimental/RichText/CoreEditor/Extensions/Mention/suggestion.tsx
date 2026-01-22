import { Editor, ReactRenderer } from "@tiptap/react"
import { createRoot, Root } from "react-dom/client"

import { MentionList } from "./MentionList"
import { MentionPopover } from "./MentionPopover"
import { MentionedUser, MentionListRef, MentionNodeAttrs } from "./types"

export function createSuggestionConfig(
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  onMentionQueryStringChanged?: (
    query: string
  ) => Promise<MentionedUser[]> | undefined,
  users?: MentionedUser[]
) {
  return {
    char: "@",
    minLength: 0,
    items: async ({ query }: { query: string }) => {
      if (onMentionQueryStringChanged) {
        try {
          const suggestions = await onMentionQueryStringChanged(query)
          setMentionSuggestions(suggestions || [])
          return suggestions || []
        } catch {
          return []
        }
      } else if (users) {
        const normalizedQuery = query.toLowerCase().trim()
        let filtered: MentionedUser[]
        if (!normalizedQuery) {
          filtered = users
        } else {
          filtered = users.filter((user) =>
            user.label.toLowerCase().includes(normalizedQuery)
          )
        }
        setMentionSuggestions(filtered)
        return filtered
      }
      return mentionSuggestions
    },
    render: () => {
      let component: ReactRenderer | null = null
      let popoverRoot: Root | null = null
      let container: HTMLDivElement | null = null

      const getAtSymbolRect = (): DOMRect => {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const { startContainer, startOffset } = range
          if (startContainer.nodeType === Node.TEXT_NODE) {
            const textContent = startContainer.textContent || ""
            const index = textContent.lastIndexOf("@", startOffset)
            if (index !== -1) {
              const atRange = document.createRange()
              atRange.setStart(startContainer, index)
              atRange.setEnd(startContainer, index + 1)
              return atRange.getBoundingClientRect()
            }
          }
          return range.getBoundingClientRect()
        }
        return document.body.getBoundingClientRect()
      }

      return {
        onStart: (props: {
          items: MentionedUser[]
          command: (attrs: MentionNodeAttrs) => void
          clientRect?: (() => DOMRect | null) | null
          editor: Editor
          range: { from: number; to: number }
        }) => {
          const commandFn = (item: MentionedUser) => {
            // Get the current selection and document state
            const { state } = props.editor
            const { from, to } = state.selection

            // Find the actual @ symbol position by looking backwards more conservatively
            const doc = state.doc
            const $from = doc.resolve(from)

            // Look backwards character by character to find the @ symbol
            // but stop at word boundaries to avoid deleting too much
            let atPosition = -1
            const currentOffset = $from.parentOffset
            const parentText = $from.parent.textContent || ""

            // Search backwards from current position, but limit to reasonable mention length
            for (
              let i = currentOffset - 1;
              i >= Math.max(0, currentOffset - 100);
              i--
            ) {
              const char = parentText[i]
              if (char === "@") {
                atPosition = from - (currentOffset - i)
                break
              }
              // Stop if we hit whitespace or newline before finding @
              if (char === " " || char === "\n" || char === "\t") {
                break
              }
            }

            if (atPosition !== -1) {
              props.editor
                .chain()
                .focus()
                .deleteRange({ from: atPosition, to: to })
                .run()
            } else {
              // Fallback to the provided range if we can't find the @ symbol
              props.editor.chain().focus().deleteRange(props.range).run()
            }

            // Then insert the mention
            props.editor
              .chain()
              .focus()
              .insertContent([
                {
                  type: "mention",
                  attrs: {
                    id: String(item.id),
                    label: item.label,
                    image_url: item.image_url,
                    href: item.href,
                  },
                },
                {
                  type: "text",
                  text: " ",
                },
              ])
              .run()
          }
          component = new ReactRenderer(MentionList, {
            props: { items: props.items, command: commandFn },
            editor: props.editor,
          })
          const safeGetRect = () => {
            if (props.clientRect) {
              const rect = props.clientRect()
              if (rect && rect.width && rect.height) return rect
            }
            return getAtSymbolRect()
          }
          const anchorRect = safeGetRect()

          container = document.createElement("div")
          document.body.appendChild(container)

          popoverRoot = createRoot(container)
          popoverRoot.render(
            <MentionPopover
              content={component.element as HTMLElement}
              anchorRect={anchorRect}
              editor={props.editor}
            />
          )
          props.editor?.commands.focus()
        },
        onUpdate: (props: {
          items: MentionedUser[]
          clientRect?: (() => DOMRect | null) | null
          editor: Editor
        }) => {
          if (!component || !container || !popoverRoot) return
          component.updateProps({ items: props.items })
          const safeGetRect = () => {
            if (props.clientRect) {
              const rect = props.clientRect()
              if (rect && rect.width && rect.height) return rect
            }
            return getAtSymbolRect()
          }
          const anchorRect = safeGetRect()
          popoverRoot.render(
            <MentionPopover
              content={component.element as HTMLElement}
              anchorRect={anchorRect}
              editor={props.editor}
            />
          )
        },
        onKeyDown: (props: { event: KeyboardEvent }) => {
          if (!component) return false
          if (
            props.event.key === "ArrowUp" ||
            props.event.key === "ArrowDown"
          ) {
            return (component.ref as MentionListRef)?.onKeyDown(props) || false
          }
          if (props.event.key === "Escape") {
            if (popoverRoot && container) {
              popoverRoot.unmount()
              container.remove()
            }
            return true
          }
          return (component.ref as MentionListRef)?.onKeyDown(props) || false
        },
        onExit() {
          if (popoverRoot && container) {
            popoverRoot.unmount()
            container.remove()
          }
          component?.destroy()
        },
      }
    },
  }
}
