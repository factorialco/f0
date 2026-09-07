import { Editor, ReactRenderer } from "@tiptap/react"
import { createRoot, Root } from "react-dom/client"
import { MentionList } from "./MentionList"
import { MentionPopover } from "./MentionPopover"
import { MentionedUser, MentionListRef } from "./types"

export const MENTION_SUGGESTION_DEBOUNCE_MS = 150

export function createSuggestionConfig(
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  onMentionQueryStringChanged?: (
    query: string
  ) => Promise<MentionedUser[]> | undefined,
  users?: MentionedUser[]
) {
  type SuggestionRenderProps = {
    items: MentionedUser[]
    clientRect?: (() => DOMRect | null) | null
    editor: Editor
    range: { from: number; to: number }
  }

  // Lowercase once at config creation instead of per user per keystroke
  const searchableUsers = users?.map((user) => ({
    user,
    search: user.label.toLowerCase(),
  }))

  const searchUsers = onMentionQueryStringChanged
    ? async (query: string): Promise<MentionedUser[]> => {
        try {
          return (await onMentionQueryStringChanged(query)) || []
        } catch {
          return []
        }
      }
    : searchableUsers
      ? (query: string): MentionedUser[] => {
          const normalizedQuery = query.toLowerCase().trim()
          return normalizedQuery
            ? searchableUsers
                .filter(({ search }) => search.includes(normalizedQuery))
                .map(({ user }) => user)
            : searchableUsers.map(({ user }) => user)
        }
      : undefined

  let generation = 0
  let sessionStarted = false
  let cachedQuery: string | null = null
  let cachedItems: MentionedUser[] = []
  let debounceTimer: ReturnType<typeof setTimeout> | null = null
  let queued: {
    query: string
    promise: Promise<MentionedUser[]>
    resolve: (items: MentionedUser[]) => void
  } | null = null

  const run = (query: string): Promise<MentionedUser[]> => {
    const mine = ++generation
    return Promise.resolve(searchUsers?.(query) ?? mentionSuggestions).then(
      (items) => {
        // tiptap hands `items` no cancellation signal and discards no late
        // result, so a superseded pass must drop its own answer here.
        if (mine !== generation) {
          return cachedItems
        }
        cachedQuery = query
        cachedItems = items
        setMentionSuggestions(items)
        return items
      }
    )
  }

  const abandonQueued = () => {
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer)
      debounceTimer = null
    }
    const pending = queued
    queued = null
    pending?.resolve(cachedItems)
  }

  const requestItems = (query: string): Promise<MentionedUser[]> => {
    if (query === cachedQuery) {
      abandonQueued()
      generation++
      return Promise.resolve(cachedItems)
    }

    // tiptap awaits `items` before it calls `onStart`, so delaying the first
    // answer of a session would delay the popover itself.
    const immediate = query === "" || !sessionStarted
    sessionStarted = true

    if (immediate) {
      abandonQueued()
      return run(query)
    }

    if (queued) {
      queued.query = query
    } else {
      let resolve: (items: MentionedUser[]) => void = () => {}
      const promise = new Promise<MentionedUser[]>((settle) => {
        resolve = settle
      })
      queued = { query, promise, resolve }
    }

    if (debounceTimer !== null) {
      clearTimeout(debounceTimer)
    }
    debounceTimer = setTimeout(() => {
      debounceTimer = null
      const pending = queued
      queued = null
      if (pending) {
        void run(pending.query).then(pending.resolve)
      }
    }, MENTION_SUGGESTION_DEBOUNCE_MS)

    return queued.promise
  }

  const resetSuggestionState = () => {
    abandonQueued()
    generation++
    sessionStarted = false
    cachedQuery = null
    cachedItems = []
  }

  return {
    char: "@",
    minLength: 0,
    items: ({ query }: { query: string }): Promise<MentionedUser[]> =>
      searchUsers ? requestItems(query) : Promise.resolve(mentionSuggestions),
    render: () => {
      let component: ReactRenderer | null = null
      let popoverRoot: Root | null = null
      let container: HTMLDivElement | null = null
      let latestProps: SuggestionRenderProps | null = null

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

      const safeGetRect = (props: SuggestionRenderProps): DOMRect => {
        if (props.clientRect) {
          const rect = props.clientRect()
          if (rect && rect.width && rect.height) {
            return rect
          }
        }
        return getAtSymbolRect()
      }

      return {
        onStart: (props: SuggestionRenderProps) => {
          latestProps = props

          const commandFn = (item: MentionedUser) => {
            if (!latestProps) {
              return
            }

            const { editor, range } = latestProps

            editor
              .chain()
              .focus()
              .insertContentAt(range, [
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

            const selection =
              editor.view.dom.ownerDocument.defaultView?.getSelection()
            selection?.collapseToEnd()
          }

          component = new ReactRenderer(MentionList, {
            props: { items: props.items, command: commandFn },
            editor: props.editor,
          })
          const anchorRect = safeGetRect(props)

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
        onUpdate: (props: SuggestionRenderProps) => {
          latestProps = props

          if (!component || !container || !popoverRoot) {
            return
          }
          component.updateProps({ items: props.items })
          const anchorRect = safeGetRect(props)
          popoverRoot.render(
            <MentionPopover
              content={component.element as HTMLElement}
              anchorRect={anchorRect}
              editor={props.editor}
            />
          )
        },
        onKeyDown: (props: { event: KeyboardEvent }) => {
          if (!component) {
            return false
          }
          if (
            props.event.key === "ArrowUp" ||
            props.event.key === "ArrowDown"
          ) {
            return (component.ref as MentionListRef)?.onKeyDown(props) || false
          }
          if (props.event.key === "Escape") {
            latestProps = null
            if (popoverRoot && container) {
              popoverRoot.unmount()
              container.remove()
            }
            return true
          }
          return (component.ref as MentionListRef)?.onKeyDown(props) || false
        },
        onExit() {
          latestProps = null
          resetSuggestionState()
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
