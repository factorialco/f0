import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import type { EntityResolvers, PersonProfile } from "../../types"
import { escapeXml } from "./utils"

/**
 * A tracked mention in the textarea text.
 */
export type MentionEntry = {
  /** Employee ID */
  id: string
  /** Display name as inserted in the text (e.g. "Ana Garcia") */
  name: string
}

export type UseMentionsOptions = {
  /** Current textarea value (controlled) */
  inputValue: string
  /** Setter for the textarea value */
  setInputValue: (value: string) => void
  /** Cursor position (selectionStart) in the textarea */
  cursorPosition: number
  /** Entity resolvers from context — must include searchPersons */
  entityResolvers?: EntityResolvers
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
  /** Active mentions in the current text */
  mentions: MentionEntry[]
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
  /** Transform text, replacing @Name mentions with <entity-ref> tags */
  transformMentions: (text: string) => string
  /** Close the popover */
  close: () => void
}

/**
 * Finds the active @ trigger near the cursor.
 * Returns the start index of @ and the query string, or null if no active trigger.
 *
 * Skips @ signs that belong to already-completed mentions (tracked in `mentions`).
 */
function findAtTrigger(
  text: string,
  cursorPos: number,
  mentions: MentionEntry[]
): { atIndex: number; query: string } | null {
  // Search backwards from cursor for @
  const textBeforeCursor = text.slice(0, cursorPos)

  // Find the last @ before the cursor
  const atIndex = textBeforeCursor.lastIndexOf("@")
  if (atIndex === -1) return null

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
  if (query.includes("\n")) return null

  // Skip if the text after @ matches an already-completed mention AND the
  // cursor is past the mention with a word-boundary separator after it.
  // This means "@Name " (with trailing space) is skipped, but "@Name" with
  // cursor right at the end is NOT skipped — allowing the user to backspace
  // into a mention and re-trigger search.
  for (const mention of mentions) {
    const afterAt = text.slice(atIndex + 1)
    const mentionEnd = atIndex + 1 + mention.name.length
    if (afterAt.startsWith(mention.name) && cursorPos >= mentionEnd) {
      // Only skip if there is a separator after the mention name
      const charAfterMention = text[mentionEnd]
      if (
        charAfterMention === " " ||
        charAfterMention === "\n" ||
        charAfterMention === "\t"
      ) {
        return null
      }
    }
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
  entityResolvers,
  textareaRef,
}: UseMentionsOptions): UseMentionsReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<PersonProfile[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mentions, setMentions] = useState<MentionEntry[]>([])

  // Track the position of the @ that triggered the current search
  const atIndexRef = useRef<number>(-1)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const searchIdRef = useRef(0)
  // Track @ positions dismissed due to empty results, so we don't
  // reopen the popover while the user keeps typing at the same trigger.
  const dismissedAtIndexRef = useRef<number>(-1)

  const searchPersons = entityResolvers?.searchPersons

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
      if (atIndex === -1) return

      const name = `${person.firstName} ${person.lastName}`.trim()
      const id = String(person.id)

      // Replace @query with @Name + trailing space
      const before = inputValue.slice(0, atIndex)
      const afterCursor = inputValue.slice(cursorPosition)
      const insertedText = `@${name} `
      const newValue = before + insertedText + afterCursor
      const newCursorPos = before.length + insertedText.length

      setInputValue(newValue)

      // Track this mention
      setMentions((prev) => {
        // Avoid duplicate mention for same person in same position
        const filtered = prev.filter((m) => !(m.id === id && m.name === name))
        return [...filtered, { id, name }]
      })

      close()

      // Restore cursor position after React re-render
      requestAnimationFrame(() => {
        const textarea = textareaRef.current
        if (textarea) {
          textarea.focus()
          textarea.setSelectionRange(newCursorPos, newCursorPos)
        }
      })
    },
    [inputValue, cursorPosition, setInputValue, textareaRef, close]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>): boolean => {
      if (!isOpen) return false

      // Escape always closes the popover when open
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return true
      }

      // Arrow keys, Enter, and Tab only work when there are results
      if (results.length === 0) return false

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
   * Transform the input text by replacing @Name patterns (that match
   * tracked mentions) with <entity-ref> tags before sending to the agent.
   */
  const transformMentions = useCallback(
    (text: string): string => {
      if (mentions.length === 0) return text

      let result = text

      // Sort mentions by name length descending to avoid partial replacements
      const sorted = [...mentions].sort((a, b) => b.name.length - a.name.length)

      for (const mention of sorted) {
        // Replace all occurrences of @Name with entity-ref
        const pattern = `@${mention.name}`
        const replacement = `<entity-ref type="person" id="${escapeXml(mention.id)}">${escapeXml(mention.name)}</entity-ref>`

        // Replace all occurrences
        while (result.includes(pattern)) {
          result = result.replace(pattern, replacement)
        }
      }

      return result
    },
    [mentions]
  )

  // Clean up mentions that no longer exist in the text, or where the user
  // is actively editing them (backspaced into the mention, removing the
  // trailing separator). This re-enables trigger detection for that @.
  useEffect(() => {
    setMentions((prev) =>
      prev.filter((m) => {
        const pattern = `@${m.name}`
        const idx = inputValue.indexOf(pattern)
        if (idx === -1) return false

        // A mention is only "completed" when it has a word-boundary separator
        // right after it. If the separator was deleted, the user is editing
        // the mention and we should remove it to re-enable search.
        const charAfter = inputValue[idx + pattern.length]
        return charAfter === " " || charAfter === "\n" || charAfter === "\t"
      })
    )
  }, [inputValue])

  // Compute popover position: pixel coordinates of the @ character
  // relative to the textarea, then offset so the popover sits above it.
  const popoverPosition: PopoverPosition = useMemo(() => {
    if (!isOpen || atIndexRef.current === -1) return null

    const textarea = textareaRef.current
    if (!textarea) return null

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
    if (!isOpen || results.length === 0) return null
    const person = results[selectedIndex]
    if (!person) return null
    const fullName = `${person.firstName} ${person.lastName}`.trim()
    if (query.length === 0) return fullName
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
