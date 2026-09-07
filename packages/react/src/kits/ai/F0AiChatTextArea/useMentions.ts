import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import type { PersonProfile } from "../F0AiChat/types"
import { escapeXml } from "./highlight-utils"
import { anchorEnd, eraseSpans, reanchor } from "./mention-anchors"

/**
 * A tracked mention in the textarea text.
 */
export type MentionEntry = {
  /** Employee ID */
  id: string
  /** Display name as inserted in the text (e.g. "Ana Garcia") */
  name: string
}

/**
 * A tracked mention plus where its `@name` sits in the textarea text.
 *
 * The anchor is what makes a mention a token rather than a substring: it is
 * maintained across edits instead of being re-derived from the text, so a
 * mention survives whatever follows it (a comma, the end of the message), and
 * an edit landing inside it removes the whole thing instead of dropping the id
 * and leaving a broken name behind.
 */
export type AnchoredMention = MentionEntry & {
  /** Index of the `@` in the textarea text. */
  start: number
}

export type UseMentionsOptions = {
  /** Current textarea value (controlled) */
  inputValue: string
  /** Setter for the textarea value. Writes are assumed to land: the anchors are
   * re-indexed against the value the hook just asked for, so a parent that
   * rejects or rewrites one would leave them indexed against a string that
   * never reached the textarea. */
  setInputValue: (value: string) => void
  /** Cursor position (selectionStart) in the textarea */
  cursorPosition: number
  /** Setter for the cursor position — used when removing a mention moves it */
  setCursorPosition: (position: number) => void
  /** Search function for person mentions (@mention autocomplete) */
  searchPersons?: (query: string) => Promise<PersonProfile[]>
  /** Ref to the textarea element for reading selection */
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
}

export type UseMentionsReturn = {
  /** Whether the mention popover should be open */
  isOpen: boolean
  /** Current search query (text after the @) */
  query: string
  /** Search results to display */
  results: PersonProfile[]
  /** Whether a search is in progress */
  isLoading: boolean
  /** Currently highlighted index in the results list */
  selectedIndex: number
  /** Active mentions, anchored in the current text */
  mentions: AnchoredMention[]
  /** Pixel position for the popover, relative to the textarea's offset parent */
  popoverPosition: PopoverPosition
  /**
   * The remaining portion of the selected person's name that hasn't been
   * typed yet. Shown as ghost text after the cursor. `null` when there is
   * no matching completion to suggest (e.g. popover closed, empty results,
   * or the query doesn't prefix-match the selected result).
   */
  inlineCompletion: string | null
  /** Handle keyboard events — returns true if consumed */
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean
  /** Select a person from the results list */
  selectPerson: (person: PersonProfile) => void
  /** The current text with each anchored mention as an <entity-ref> tag */
  transformMentions: () => string
  /** Close the popover */
  close: () => void
}

/**
 * Finds the active @ trigger near the cursor.
 * Returns the start index of @ and the query string, or null if no active trigger.
 *
 * An `@` that starts an anchored mention never re-opens the popover: that token
 * is already resolved.
 */
function findAtTrigger(
  text: string,
  cursorPos: number,
  anchored: AnchoredMention[]
): { atIndex: number; query: string } | null {
  // Search backwards from cursor for @
  const textBeforeCursor = text.slice(0, cursorPos)

  // Find the last @ before the cursor
  const atIndex = textBeforeCursor.lastIndexOf("@")
  if (atIndex === -1) {
    return null
  }

  // The @ must be at start of text or preceded by whitespace/newline
  if (atIndex > 0) {
    const charBefore = text[atIndex - 1]
    if (charBefore !== " " && charBefore !== "\n" && charBefore !== "\t") {
      return null
    }
  }

  // Extract query: everything between @ and cursor
  const query = text.slice(atIndex + 1, cursorPos)

  // Query must not contain newlines (mention search is single-line)
  if (query.includes("\n")) {
    return null
  }

  if (anchored.some((mention) => mention.start === atIndex)) {
    return null
  }

  return { atIndex, query }
}

/**
 * Copied text-styling properties from a textarea to a mirror div so that
 * character wrapping and sizing match exactly.
 */
const MIRROR_PROPERTIES = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize",
  "whiteSpace",
  "wordWrap",
  "wordBreak",
] as const

/**
 * Measure the pixel position of a character at `index` inside `textarea`.
 * Returns `{ left, top }` relative to the textarea's top-left corner,
 * accounting for scroll offset.
 */
function getCaretCoordinates(
  textarea: HTMLTextAreaElement,
  index: number
): { left: number; top: number } {
  const div = document.createElement("div")
  const style = div.style
  const computed = window.getComputedStyle(textarea)

  style.whiteSpace = "pre-wrap"
  style.wordWrap = "break-word"
  style.position = "absolute"
  style.visibility = "hidden"
  style.overflow = "hidden"

  for (const prop of MIRROR_PROPERTIES) {
    style.setProperty(prop, computed.getPropertyValue(prop))
  }

  div.textContent = textarea.value.substring(0, index)

  const span = document.createElement("span")
  // Use a zero-width space so the span has a measurable position
  span.textContent = textarea.value.substring(index) || "\u200b"
  div.appendChild(span)

  document.body.appendChild(div)

  const left = span.offsetLeft
  const top = span.offsetTop - textarea.scrollTop

  document.body.removeChild(div)

  return { left, top }
}

export type PopoverPosition = { left: number; bottom: number } | null

const DEBOUNCE_MS = 250

export function useMentions({
  inputValue,
  setInputValue,
  cursorPosition,
  setCursorPosition,
  searchPersons,
  textareaRef,
}: UseMentionsOptions): UseMentionsReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<PersonProfile[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mentions, setMentions] = useState<AnchoredMention[]>([])

  // The reconciler and `selectPerson` read the anchors without depending on
  // them, so state and ref are written together and the ref is the source.
  const mentionsRef = useRef<AnchoredMention[]>(mentions)
  // Re-anchoring runs on every keystroke and usually produces the same anchors
  // in a new array. Keeping the old reference when nothing moved saves a state
  // write per character, and lets callers treat a new identity as real news.
  const commitMentions = useCallback((next: AnchoredMention[]) => {
    const current = mentionsRef.current
    const unchanged =
      current.length === next.length &&
      current.every((mention, i) => {
        const candidate = next[i]
        return (
          candidate !== undefined &&
          candidate.id === mention.id &&
          candidate.name === mention.name &&
          candidate.start === mention.start
        )
      })
    if (unchanged) {
      return
    }
    mentionsRef.current = next
    setMentions(next)
  }, [])

  // The text the anchors are valid for. Every writer to the textarea value goes
  // through the reconciler below, which compares against this.
  const prevValueRef = useRef(inputValue)

  // A caret the hook wants applied once React has written `forText`. Setting a
  // selection before the value is committed aims it at the old string, and the
  // write then drops the caret at the end of the text.
  const pendingSelectionRef = useRef<{
    caret: number
    forText: string
    focus: boolean
  } | null>(null)
  const requestSelection = useCallback(
    (caret: number, forText: string, focus = false) => {
      pendingSelectionRef.current = { caret, forText, focus }
    },
    []
  )
  // Every commit, not only the ones that change the value: picking a person the
  // composer had already spelled out in full writes the same string back, and
  // that request still has to return focus from the clicked popover row. A
  // request waits until its own text is on screen rather than being spent on
  // the first commit that is not it, so a parent that applies the write a
  // render later still gets its caret.
  useLayoutEffect(() => {
    const pending = pendingSelectionRef.current
    const textarea = textareaRef.current
    if (!pending || !textarea || pending.forText !== inputValue) {
      return
    }
    pendingSelectionRef.current = null
    if (pending.focus) {
      textarea.focus()
    }
    textarea.setSelectionRange(pending.caret, pending.caret)
  })

  // Track the position of the @ that triggered the current search
  const atIndexRef = useRef<number>(-1)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const searchIdRef = useRef(0)
  // Track @ positions dismissed due to empty results, so we don't
  // reopen the popover while the user keeps typing at the same trigger.
  const dismissedAtIndexRef = useRef<number>(-1)

  // Detect @ trigger on every input/cursor change
  useEffect(() => {
    if (!searchPersons) {
      setIsOpen(false)
      return
    }

    const trigger = findAtTrigger(inputValue, cursorPosition, mentions)

    if (!trigger) {
      setIsOpen(false)
      setQuery("")
      setResults([])
      setSelectedIndex(0)
      atIndexRef.current = -1
      // Reset dismissed position when trigger disappears (user deleted the @)
      dismissedAtIndexRef.current = -1
      return
    }

    // Skip if this @ trigger was already dismissed due to empty results
    if (trigger.atIndex === dismissedAtIndexRef.current) {
      return
    }

    atIndexRef.current = trigger.atIndex
    setQuery(trigger.query)
    setIsOpen(true)
    setSelectedIndex(0)
    setIsLoading(true)

    // Debounced search
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    const currentSearchId = ++searchIdRef.current

    debounceRef.current = setTimeout(() => {
      searchPersons(trigger.query)
        .then((data) => {
          // Only update if this is still the latest search
          if (currentSearchId === searchIdRef.current) {
            setResults(data)
            setSelectedIndex(0)
            // Dismiss popover if query is non-empty and returned no results
            if (data.length === 0 && trigger.query.length > 0) {
              dismissedAtIndexRef.current = trigger.atIndex
              setIsOpen(false)
            }
          }
        })
        .catch(() => {
          if (currentSearchId === searchIdRef.current) {
            setResults([])
          }
        })
        .finally(() => {
          if (currentSearchId === searchIdRef.current) {
            setIsLoading(false)
          }
        })
    }, DEBOUNCE_MS)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [inputValue, cursorPosition, searchPersons, mentions])

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery("")
    setResults([])
    setSelectedIndex(0)
    atIndexRef.current = -1
  }, [])

  const selectPerson = useCallback(
    (person: PersonProfile) => {
      const atIndex = atIndexRef.current
      if (atIndex === -1) {
        return
      }

      const name = `${person.firstName} ${person.lastName}`.trim()
      const id = String(person.id)

      // Replace @query with @Name + trailing space
      const before = inputValue.slice(0, atIndex)
      const afterCursor = inputValue.slice(cursorPosition)
      const insertedText = `@${name} `
      const newValue = before + insertedText + afterCursor
      const newCursorPos = before.length + insertedText.length

      setInputValue(newValue)

      // The trigger span [atIndex, cursorPosition) becomes the inserted token,
      // so anchors past it slide and any the trigger overlapped are gone.
      const shift = insertedText.length - (cursorPosition - atIndex)
      const anchored = mentionsRef.current
        .filter((m) => anchorEnd(m) <= atIndex || m.start >= cursorPosition)
        .map((m) =>
          m.start >= cursorPosition ? { ...m, start: m.start + shift } : m
        )
      anchored.push({ id, name, start: atIndex })
      anchored.sort((a, b) => a.start - b.start)
      prevValueRef.current = newValue
      commitMentions(anchored)

      close()

      // Focus too: the person may have been clicked, which took focus to the
      // popover row.
      requestSelection(newCursorPos, newValue, true)
    },
    [
      inputValue,
      cursorPosition,
      setInputValue,
      close,
      commitMentions,
      requestSelection,
    ]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>): boolean => {
      if (!isOpen) {
        return false
      }

      // Escape always closes the popover when open
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return true
      }

      // Arrow keys, Enter, and Tab only work when there are results
      if (results.length === 0) {
        return false
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % results.length)
          return true
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex(
            (prev) => (prev + results.length - 1) % results.length
          )
          return true
        case "Tab": {
          // Accept the inline completion (ghost text) by selecting the
          // currently highlighted person, same as pressing Enter.
          const person = results[selectedIndex]
          if (person) {
            const fullName = `${person.firstName} ${person.lastName}`.trim()
            if (
              query.length === 0 ||
              fullName.toLowerCase().startsWith(query.toLowerCase())
            ) {
              e.preventDefault()
              selectPerson(person)
              return true
            }
          }
          return false
        }
        case "Enter":
          e.preventDefault()
          if (results[selectedIndex]) {
            selectPerson(results[selectedIndex])
          }
          return true
        default:
          return false
      }
    },
    [isOpen, results, selectedIndex, query, selectPerson, close]
  )

  /**
   * The current textarea text with each anchored mention replaced by an
   * `<entity-ref>` tag, ready to send to the agent.
   *
   * It takes no text on purpose: the anchors index the raw value, so a caller
   * handing in a trimmed or otherwise derived copy would silently read them at
   * the wrong offsets. An anchor is verified against the text before it is
   * applied — the same test the overlay uses, so the two cannot disagree about
   * which glyphs are a mention.
   */
  const transformMentions = useCallback((): string => {
    const text = inputValue
    if (mentions.length === 0) {
      return text
    }

    const ordered = [...mentions].sort((a, b) => a.start - b.start)

    let result = ""
    let cursor = 0
    for (const mention of ordered) {
      const pattern = `@${mention.name}`
      if (mention.start < cursor || !text.startsWith(pattern, mention.start)) {
        continue
      }
      result += text.slice(cursor, mention.start)
      result += `<entity-ref type="person" id="${escapeXml(mention.id)}">${escapeXml(mention.name)}</entity-ref>`
      cursor = mention.start + pattern.length
    }
    return result + text.slice(cursor)
  }, [inputValue, mentions])

  // Keep the anchors on the text as it changes, and take a mention out whole
  // when an edit lands inside it — a half-typed name is not a mention, and
  // leaving one behind is what silently dropped the id before.
  useEffect(() => {
    const prev = prevValueRef.current
    if (prev === inputValue) {
      return
    }
    prevValueRef.current = inputValue

    const anchored = mentionsRef.current
    if (anchored.length === 0) {
      return
    }

    const { kept, touched } = reanchor(prev, inputValue, anchored)
    if (touched.length === 0) {
      commitMentions(kept)
      return
    }

    const erased = eraseSpans(inputValue, touched, kept, cursorPosition)
    commitMentions(erased.mentions)
    if (erased.text === inputValue) {
      return
    }
    prevValueRef.current = erased.text
    setInputValue(erased.text)
    setCursorPosition(erased.caret)
    // Removing a mention leaves the caret where the mention was, not at the end
    // of the text — the edit happened here, and the rest of a multi-line draft
    // is not where the user was looking.
    requestSelection(erased.caret, erased.text)
  }, [
    inputValue,
    cursorPosition,
    setInputValue,
    setCursorPosition,
    commitMentions,
    requestSelection,
  ])

  // Compute popover position: pixel coordinates of the @ character
  // relative to the textarea, then offset so the popover sits above it.
  const popoverPosition: PopoverPosition = useMemo(() => {
    if (!isOpen || atIndexRef.current === -1) {
      return null
    }

    const textarea = textareaRef.current
    if (!textarea) {
      return null
    }

    const coords = getCaretCoordinates(textarea, atIndexRef.current)

    // `coords.top` is relative to textarea content top (scroll-adjusted).
    // We need the position relative to the form (textarea's offset parent).
    // textarea.offsetTop gives the textarea's top edge within the form.
    const left = textarea.offsetLeft + coords.left
    // bottom = distance from form's bottom to the @ line top
    const formHeight = textarea.offsetParent
      ? (textarea.offsetParent as HTMLElement).offsetHeight
      : 0
    const bottom = formHeight - (textarea.offsetTop + coords.top)

    return { left, bottom }
  }, [isOpen, inputValue, cursorPosition, textareaRef])

  // Inline completion: the remaining characters of the selected person's
  // name that the user hasn't typed yet. Shown as ghost text after the cursor.
  // When query is empty (user just typed @), show the full name of the first result.
  const inlineCompletion = useMemo<string | null>(() => {
    if (!isOpen || results.length === 0) {
      return null
    }
    const person = results[selectedIndex]
    if (!person) {
      return null
    }
    const fullName = `${person.firstName} ${person.lastName}`.trim()
    if (query.length === 0) {
      return fullName
    }
    if (fullName.toLowerCase().startsWith(query.toLowerCase())) {
      return fullName.slice(query.length)
    }
    return null
  }, [isOpen, results, selectedIndex, query])

  return {
    isOpen,
    query,
    results,
    isLoading,
    selectedIndex,
    mentions,
    popoverPosition,
    inlineCompletion,
    handleKeyDown,
    selectPerson,
    transformMentions,
    close,
  }
}
