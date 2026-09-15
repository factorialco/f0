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
    ? async (query: string): Promise<MentionedUser[] | null> => {
        try {
          return (await onMentionQueryStringChanged(query)) || []
        } catch {
          return null
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
  let session = 0
  let latestPass: {
    generation: number
    session: number
    promise: Promise<MentionedUser[]>
  } | null = null

  const run = (query: string): Promise<MentionedUser[]> => {
    const mine = ++generation
    const mySession = session
    const pass = Promise.resolve(
      searchUsers?.(query) ?? mentionSuggestions
    ).then((items) => {
      // tiptap hands `items` no cancellation signal and discards no late
      // result: it assigns whatever this resolves with onto its newest props
      // and renders that. A superseded pass must therefore answer with the
      // list that belongs on screen, never with its own.
      if (mine !== generation) {
        // Before the first publish of a session `cachedItems` is still the
        // empty seed, and answering with it opens the popover on "No results
        // found" until the newer pass lands.
        return cachedQuery === null &&
          latestPass &&
          latestPass.session === mySession &&
          latestPass.generation !== mine
          ? latestPass.promise
          : cachedItems
      }
      // A failed search is not an answer: it is neither published nor cached,
      // so the next request for the same query retries instead of reading a
      // remembered failure.
      if (!items) {
        return []
      }
      cachedQuery = query
      cachedItems = items
      setMentionSuggestions(items)
      return items
    })
    latestPass = { generation: mine, session: mySession, promise: pass }
    return pass
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

    // tiptap awaits `items` before it calls `onStart`, so debouncing a session's
    // opening query would delay the popover itself. The exception tiptap can
    // still produce is `moved && changed`, where it awaits `items` before the
    // `onExit` that would have cleared `sessionStarted`.
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

  // `cachedItems` survives on purpose: it is the invariant "what was last handed
  // to setMentionSuggestions", which an abandoned or superseded pass still needs
  // to resolve with. Clearing `cachedQuery` is what forces the next miss.
  const resetSuggestionState = () => {
    abandonQueued()
    generation++
    sessionStarted = false
    cachedQuery = null
    session++
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

      // Clearing the references is what stops a still-suspended tiptap update
      // from rendering into a root that has already been unmounted, which React
      // treats as an error rather than a no-op.
      const dismiss = () => {
        latestProps = null
        resetSuggestionState()
        if (popoverRoot && container) {
          popoverRoot.unmount()
          container.remove()
        }
        component?.destroy()
        component = null
        popoverRoot = null
        container = null
      }

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
        // tiptap awaits `items` for a `moved && changed` transition before the
        // `onExit` that would have cleared `sessionStarted`, but it calls
        // `onBeforeStart` first: this is the only point at which a session that
        // opens on a moved caret can claim its immediate opening answer.
        onBeforeStart: () => {
          sessionStarted = false
        },
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
            dismiss()
            return true
          }
          return (component.ref as MentionListRef)?.onKeyDown(props) || false
        },
        onExit() {
          dismiss()
        },
      }
    },
  }
}
