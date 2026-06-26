import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { type AvatarVariant } from "@/components/avatars/F0Avatar"

import { type F0ChatUser } from "../types"

/** Sentinel id for the "everyone" (`@here`) option — never a real user id. */
export const MENTION_EVERYONE_ID = "@everyone"

/** A tracked mention in the composer text. */
export type MentionEntry = {
  /** A user id, or {@link MENTION_EVERYONE_ID} for `@here`. */
  id: string
  /** Display name as inserted in the text (e.g. "Ana García" or "here"). */
  name: string
  /** Display data carried through to the sent message so the chip can show the
   * member's profile hover card (set when picking a member; absent for @here). */
  avatar?: AvatarVariant
  subtitle?: string
  profileHref?: string
}

/** A row in the mention popover: a group member, or the "everyone" option. */
export type MentionCandidate =
  | { kind: "everyone"; label: string }
  | { kind: "user"; user: F0ChatUser }

/** Resolved mention payload for {@link F0ChatSendInput}. */
export type MentionPayload = {
  mentions: MentionEntry[]
  mentionedEveryone: boolean
}

export type UseMentionsOptions = {
  /** Current composer value. */
  inputValue: string
  /** Setter for the composer value. */
  setInputValue: (value: string) => void
  /** Cursor position (selectionStart) in the textarea. */
  cursorPosition: number
  /** Ref to the textarea element for reading selection + caret position. */
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  /**
   * Whether mentions are active. False in DMs (and whenever `searchMembers` is
   * absent) → the hook is inert and the popover never opens.
   */
  enabled: boolean
  /** Search the conversation's members for the popover. */
  searchMembers?: (query: string) => Promise<F0ChatUser[]>
  /**
   * Localized label for the "everyone" option (e.g. "here" / "aquí"). When set,
   * an `@here` entry is pinned at the top of the popover; omit to disable it.
   */
  everyoneLabel?: string
}

export type PopoverPosition = { left: number; bottom: number } | null

export type UseMentionsReturn = {
  isOpen: boolean
  query: string
  /** Popover rows: the "everyone" option (when it matches) then member matches. */
  results: MentionCandidate[]
  isLoading: boolean
  selectedIndex: number
  /** Tracked mentions in the current text (drives overlay highlighting). */
  mentions: MentionEntry[]
  popoverPosition: PopoverPosition
  /** Ghost-text completion for the selected row, or null. */
  inlineCompletion: string | null
  /** Handle a keydown — returns true when consumed. */
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean
  /** Insert the given candidate at the active `@` trigger. */
  selectCandidate: (candidate: MentionCandidate) => void
  /** Resolve the mentions/everyone payload to attach when sending. */
  getMentions: () => MentionPayload
  /** Close the popover. */
  close: () => void
}

/**
 * Finds the active `@` trigger near the cursor — start index of `@` and the
 * query — or null. Skips `@`s that belong to already-completed mentions so a
 * finished "@Name " doesn't keep re-opening the popover. Cloned verbatim from
 * the AI chat composer.
 */
function findAtTrigger(
  text: string,
  cursorPos: number,
  mentions: MentionEntry[]
): { atIndex: number; query: string } | null {
  const textBeforeCursor = text.slice(0, cursorPos)
  const atIndex = textBeforeCursor.lastIndexOf("@")
  if (atIndex === -1) return null

  if (atIndex > 0) {
    const charBefore = text[atIndex - 1]
    if (charBefore !== " " && charBefore !== "\n" && charBefore !== "\t") {
      return null
    }
  }

  const query = text.slice(atIndex + 1, cursorPos)
  if (query.includes("\n")) return null

  for (const mention of mentions) {
    const afterAt = text.slice(atIndex + 1)
    const mentionEnd = atIndex + 1 + mention.name.length
    if (afterAt.startsWith(mention.name) && cursorPos >= mentionEnd) {
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

/** Pixel position of the character at `index`, relative to the textarea. */
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
  // Zero-width space so the span has a measurable position even at text end.
  span.textContent = textarea.value.substring(index) || "​"
  div.appendChild(span)

  document.body.appendChild(div)

  const left = span.offsetLeft
  const top = span.offsetTop - textarea.scrollTop

  document.body.removeChild(div)

  return { left, top }
}

const DEBOUNCE_MS = 250

const candidateLabel = (c: MentionCandidate): string =>
  c.kind === "everyone" ? c.label : c.user.name

/**
 * `@`-mention support for the communications composer — same UX as the AI chat
 * (debounced inline search, ghost-text completion, keyboard nav, caret-anchored
 * popover), but driven by the conversation's members and with an "everyone"
 * (`@here`) option pinned on top. Inert unless `enabled` (groups only).
 */
export function useMentions({
  inputValue,
  setInputValue,
  cursorPosition,
  textareaRef,
  enabled,
  searchMembers,
  everyoneLabel,
}: UseMentionsOptions): UseMentionsReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [memberResults, setMemberResults] = useState<F0ChatUser[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mentions, setMentions] = useState<MentionEntry[]>([])

  const atIndexRef = useRef<number>(-1)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const searchIdRef = useRef(0)
  const dismissedAtIndexRef = useRef<number>(-1)

  const matchesEveryone = useCallback(
    (q: string): boolean =>
      !!everyoneLabel &&
      (q.length === 0 ||
        everyoneLabel.toLowerCase().startsWith(q.toLowerCase())),
    [everyoneLabel]
  )

  // The "everyone" row (when it matches) followed by member matches.
  const results = useMemo<MentionCandidate[]>(() => {
    const out: MentionCandidate[] = []
    if (everyoneLabel && matchesEveryone(query)) {
      out.push({ kind: "everyone", label: everyoneLabel })
    }
    for (const user of memberResults) out.push({ kind: "user", user })
    return out
  }, [everyoneLabel, matchesEveryone, query, memberResults])

  // Detect the `@` trigger on every input/cursor change and search.
  useEffect(() => {
    if (!enabled || !searchMembers) {
      setIsOpen(false)
      return
    }

    const trigger = findAtTrigger(inputValue, cursorPosition, mentions)

    if (!trigger) {
      setIsOpen(false)
      setQuery("")
      setMemberResults([])
      setSelectedIndex(0)
      atIndexRef.current = -1
      dismissedAtIndexRef.current = -1
      return
    }

    if (trigger.atIndex === dismissedAtIndexRef.current) return

    atIndexRef.current = trigger.atIndex
    setQuery(trigger.query)
    setIsOpen(true)
    setSelectedIndex(0)
    setIsLoading(true)

    if (debounceRef.current) clearTimeout(debounceRef.current)
    const currentSearchId = ++searchIdRef.current

    debounceRef.current = setTimeout(() => {
      searchMembers(trigger.query)
        .then((data) => {
          if (currentSearchId !== searchIdRef.current) return
          setMemberResults(data)
          setSelectedIndex(0)
          // Dismiss only when nothing matches at all (no members AND the
          // "everyone" option doesn't match the typed query).
          if (
            data.length === 0 &&
            !matchesEveryone(trigger.query) &&
            trigger.query.length > 0
          ) {
            dismissedAtIndexRef.current = trigger.atIndex
            setIsOpen(false)
          }
        })
        .catch(() => {
          if (currentSearchId === searchIdRef.current) setMemberResults([])
        })
        .finally(() => {
          if (currentSearchId === searchIdRef.current) setIsLoading(false)
        })
    }, DEBOUNCE_MS)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [
    inputValue,
    cursorPosition,
    enabled,
    searchMembers,
    mentions,
    matchesEveryone,
  ])

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery("")
    setMemberResults([])
    setSelectedIndex(0)
    atIndexRef.current = -1
  }, [])

  const selectCandidate = useCallback(
    (candidate: MentionCandidate) => {
      const atIndex = atIndexRef.current
      if (atIndex === -1) return

      const name =
        candidate.kind === "everyone" ? candidate.label : candidate.user.name
      const id =
        candidate.kind === "everyone" ? MENTION_EVERYONE_ID : candidate.user.id

      const before = inputValue.slice(0, atIndex)
      const afterCursor = inputValue.slice(cursorPosition)
      const insertedText = `@${name} `
      const newValue = before + insertedText + afterCursor
      const newCursorPos = before.length + insertedText.length

      setInputValue(newValue)

      const entry: MentionEntry =
        candidate.kind === "everyone"
          ? { id, name }
          : {
              id,
              name,
              avatar: candidate.user.avatar,
              subtitle: candidate.user.subtitle,
              profileHref: candidate.user.profileHref,
            }
      setMentions((prev) => {
        const filtered = prev.filter((m) => !(m.id === id && m.name === name))
        return [...filtered, entry]
      })

      close()

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

      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return true
      }

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
          const candidate = results[selectedIndex]
          if (candidate) {
            const label = candidateLabel(candidate)
            if (
              query.length === 0 ||
              label.toLowerCase().startsWith(query.toLowerCase())
            ) {
              e.preventDefault()
              selectCandidate(candidate)
              return true
            }
          }
          return false
        }
        case "Enter":
          e.preventDefault()
          if (results[selectedIndex]) selectCandidate(results[selectedIndex])
          return true
        default:
          return false
      }
    },
    [isOpen, results, selectedIndex, query, selectCandidate, close]
  )

  const getMentions = useCallback((): MentionPayload => {
    const mentionedEveryone = mentions.some((m) => m.id === MENTION_EVERYONE_ID)
    const users = mentions.filter((m) => m.id !== MENTION_EVERYONE_ID)
    return { mentions: users, mentionedEveryone }
  }, [mentions])

  // Drop mentions the user has edited away (deleted, or backspaced into,
  // removing the trailing separator) so the trigger can fire again.
  useEffect(() => {
    setMentions((prev) =>
      prev.filter((m) => {
        const pattern = `@${m.name}`
        const idx = inputValue.indexOf(pattern)
        if (idx === -1) return false
        const charAfter = inputValue[idx + pattern.length]
        return charAfter === " " || charAfter === "\n" || charAfter === "\t"
      })
    )
  }, [inputValue])

  const popoverPosition: PopoverPosition = useMemo(() => {
    if (!isOpen || atIndexRef.current === -1) return null
    const textarea = textareaRef.current
    if (!textarea) return null

    const coords = getCaretCoordinates(textarea, atIndexRef.current)
    const left = textarea.offsetLeft + coords.left
    const formHeight = textarea.offsetParent
      ? (textarea.offsetParent as HTMLElement).offsetHeight
      : 0
    const bottom = formHeight - (textarea.offsetTop + coords.top)

    return { left, bottom }
  }, [isOpen, inputValue, cursorPosition, textareaRef])

  const inlineCompletion = useMemo<string | null>(() => {
    if (!isOpen || results.length === 0) return null
    const candidate = results[selectedIndex]
    if (!candidate) return null
    const label = candidateLabel(candidate)
    if (query.length === 0) return label
    if (label.toLowerCase().startsWith(query.toLowerCase())) {
      return label.slice(query.length)
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
    selectCandidate,
    getMentions,
    close,
  }
}
