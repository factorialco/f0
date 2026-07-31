import data from "@emoji-mart/data/sets/15/twitter.json"
import { useCallback, useEffect, useId, useMemo, useState } from "react"

import {
  getTextareaCaretCoordinates,
  type PopoverPosition,
} from "./useMentions"

const MAX_RESULTS = 8
const DEFAULT_EMOJI_IDS = [
  "+1",
  "heart",
  "joy",
  "tada",
  "smile",
  "fire",
  "eyes",
  "white_check_mark",
] as const

type EmojiMartEmoji = {
  id: string
  name: string
  keywords?: string[]
  emoticons?: string[]
  skins: { native: string }[]
}

export type EmojiAutocompleteCandidate = {
  id: string
  name: string
  native: string
}

type IndexedEmoji = EmojiAutocompleteCandidate & {
  aliases: string[]
  keywords: string[]
  normalizedName: string
  normalizedShortcodes: string[]
  normalizedKeywords: string[]
  order: number
}

type EmojiTrigger = {
  colonIndex: number
  query: string
}

export type UseEmojiAutocompleteOptions = {
  inputValue: string
  setInputValue: (value: string) => void
  cursorPosition: number
  setCursorPosition: (position: number) => void
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
}

export type UseEmojiAutocompleteReturn = {
  isOpen: boolean
  query: string
  results: EmojiAutocompleteCandidate[]
  selectedIndex: number
  popoverPosition: PopoverPosition
  listboxId: string
  activeDescendantId: string | undefined
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => boolean
  selectCandidate: (candidate: EmojiAutocompleteCandidate) => void
  setSelectedIndex: (index: number) => void
  close: () => void
}

const normalize = (value: string): string =>
  value.toLowerCase().replace(/[_-]+/g, " ").trim()

const aliasesByEmoji = new Map<string, string[]>()
for (const [alias, emojiId] of Object.entries(
  data.aliases as Record<string, string>
)) {
  const aliases = aliasesByEmoji.get(emojiId) ?? []
  aliases.push(alias)
  aliasesByEmoji.set(emojiId, aliases)
}

const EMOJI_INDEX: IndexedEmoji[] = (
  Object.values(data.emojis) as EmojiMartEmoji[]
).flatMap((emoji, order) => {
  const native = emoji.skins[0]?.native
  if (!native) return []
  const aliases = aliasesByEmoji.get(emoji.id) ?? []
  const keywords = emoji.keywords ?? []
  return [
    {
      id: emoji.id,
      name: emoji.name,
      native,
      aliases,
      keywords,
      normalizedName: normalize(emoji.name),
      normalizedShortcodes: [emoji.id, ...aliases].map(normalize),
      normalizedKeywords: keywords.map(normalize),
      order,
    },
  ]
})

const EMOJI_BY_ID = new Map(EMOJI_INDEX.map((emoji) => [emoji.id, emoji]))
const EMOJI_BY_SHORTCODE = new Map<string, IndexedEmoji>()
for (const emoji of EMOJI_INDEX) {
  EMOJI_BY_SHORTCODE.set(emoji.id.toLowerCase(), emoji)
  for (const alias of emoji.aliases) {
    EMOJI_BY_SHORTCODE.set(alias.toLowerCase(), emoji)
  }
}

const defaultResults = DEFAULT_EMOJI_IDS.flatMap((id) => {
  const emoji = EMOJI_BY_ID.get(id)
  return emoji ? [emoji] : []
})

const scoreCandidate = (emoji: IndexedEmoji, query: string): number | null => {
  if (emoji.normalizedShortcodes.some((term) => term === query)) return 0
  if (emoji.normalizedShortcodes.some((term) => term.startsWith(query)))
    return 10
  if (emoji.normalizedKeywords.some((term) => term === query)) return 20
  if (emoji.normalizedKeywords.some((term) => term.startsWith(query))) return 30
  if (emoji.normalizedName.startsWith(query)) return 40
  if (
    emoji.normalizedShortcodes.some((term) => term.includes(query)) ||
    emoji.normalizedKeywords.some((term) => term.includes(query)) ||
    emoji.normalizedName.includes(query)
  ) {
    return 50
  }
  return null
}

export const searchEmojiCandidates = (
  rawQuery: string
): EmojiAutocompleteCandidate[] => {
  const query = normalize(rawQuery)
  if (!query) return defaultResults.slice(0, MAX_RESULTS)

  return EMOJI_INDEX.flatMap((emoji) => {
    const score = scoreCandidate(emoji, query)
    return score === null ? [] : [{ emoji, score }]
  })
    .sort(
      (a, b) =>
        a.score - b.score ||
        a.emoji.id.length - b.emoji.id.length ||
        a.emoji.order - b.emoji.order
    )
    .slice(0, MAX_RESULTS)
    .map(({ emoji }) => emoji)
}

export const findEmojiTrigger = (
  text: string,
  cursorPosition: number
): EmojiTrigger | null => {
  const textBeforeCursor = text.slice(0, cursorPosition)
  const colonIndex = textBeforeCursor.lastIndexOf(":")
  if (colonIndex === -1) return null

  if (colonIndex > 0 && !/\s/.test(text[colonIndex - 1] ?? "")) return null

  const query = textBeforeCursor.slice(colonIndex + 1)
  if (!/^[a-zA-Z0-9_+-]*$/.test(query)) return null

  return { colonIndex, query }
}

export const replaceClosedEmojiShortcode = (
  text: string,
  cursorPosition: number
): { value: string; cursorPosition: number } | null => {
  const textBeforeCursor = text.slice(0, cursorPosition)
  const match = textBeforeCursor.match(/(^|\s):([a-zA-Z0-9_+-]+):$/)
  if (!match) return null

  const emoji = EMOJI_BY_SHORTCODE.get(match[2]?.toLowerCase() ?? "")
  if (!emoji) return null

  const boundaryLength = match[1]?.length ?? 0
  const shortcodeStart = cursorPosition - match[0].length + boundaryLength
  const value =
    text.slice(0, shortcodeStart) + emoji.native + text.slice(cursorPosition)

  return {
    value,
    cursorPosition: shortcodeStart + emoji.native.length,
  }
}

export const getEmojiAutocompleteOptionId = (
  listboxId: string,
  id: string
): string => {
  const encodedId = Array.from(id, (character) =>
    character.codePointAt(0)!.toString(16)
  ).join("-")
  return `${listboxId}-option-${encodedId}`
}

export function useEmojiAutocomplete({
  inputValue,
  setInputValue,
  cursorPosition,
  setCursorPosition,
  textareaRef,
}: UseEmojiAutocompleteOptions): UseEmojiAutocompleteReturn {
  const reactId = useId()
  const listboxId = `chat-emoji-autocomplete-${reactId.replace(/:/g, "")}`
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [dismissedTrigger, setDismissedTrigger] = useState<number | null>(null)

  const trigger = useMemo(
    () => findEmojiTrigger(inputValue, cursorPosition),
    [inputValue, cursorPosition]
  )
  const results = useMemo(
    () => (trigger ? searchEmojiCandidates(trigger.query) : []),
    [trigger]
  )
  const isOpen =
    trigger !== null &&
    trigger.colonIndex !== dismissedTrigger &&
    results.length > 0
  const effectiveSelectedIndex = results[selectedIndex] ? selectedIndex : 0

  useEffect(() => {
    setSelectedIndex(0)
    if (!trigger) setDismissedTrigger(null)
  }, [trigger?.colonIndex, trigger?.query])

  const close = useCallback(() => {
    setDismissedTrigger(trigger?.colonIndex ?? null)
    setSelectedIndex(0)
  }, [trigger?.colonIndex])

  const selectCandidate = useCallback(
    (candidate: EmojiAutocompleteCandidate) => {
      if (!trigger) return

      const before = inputValue.slice(0, trigger.colonIndex)
      const after = inputValue.slice(cursorPosition)
      const hasExistingSeparator = /^\s/.test(after)
      const nextValue =
        before + candidate.native + (hasExistingSeparator ? "" : " ") + after
      const nextCursorPosition = before.length + candidate.native.length + 1

      setInputValue(nextValue)
      setCursorPosition(nextCursorPosition)
      close()

      requestAnimationFrame(() => {
        const textarea = textareaRef.current
        if (!textarea) return
        textarea.focus()
        textarea.setSelectionRange(nextCursorPosition, nextCursorPosition)
      })
    },
    [
      trigger,
      inputValue,
      cursorPosition,
      setInputValue,
      setCursorPosition,
      close,
      textareaRef,
    ]
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>): boolean => {
      if (!isOpen) return false
      if (event.nativeEvent?.isComposing) return false

      if (event.key === "Escape") {
        event.preventDefault()
        close()
        requestAnimationFrame(() => textareaRef.current?.focus())
        return true
      }

      if (results.length === 0) return false

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault()
          setSelectedIndex((index) => (index + 1) % results.length)
          return true
        case "ArrowUp":
          event.preventDefault()
          setSelectedIndex(
            (index) => (index + results.length - 1) % results.length
          )
          return true
        case "Enter":
        case "Tab": {
          if (event.key === "Tab" && event.shiftKey) return false
          const candidate = results[effectiveSelectedIndex] ?? results[0]
          if (!candidate) return false
          event.preventDefault()
          selectCandidate(candidate)
          return true
        }
        default:
          return false
      }
    },
    [
      isOpen,
      results,
      effectiveSelectedIndex,
      selectCandidate,
      close,
      textareaRef,
    ]
  )

  const popoverPosition: PopoverPosition = useMemo(() => {
    if (!isOpen || !trigger) return null
    const textarea = textareaRef.current
    if (!textarea) return null

    const coordinates = getTextareaCaretCoordinates(
      textarea,
      trigger.colonIndex
    )
    const left = textarea.offsetLeft + coordinates.left
    const formHeight = textarea.offsetParent
      ? (textarea.offsetParent as HTMLElement).offsetHeight
      : 0
    const bottom = formHeight - (textarea.offsetTop + coordinates.top)

    return { left, bottom }
  }, [isOpen, trigger, inputValue, cursorPosition, textareaRef])

  const selectedCandidate = results[effectiveSelectedIndex] ?? results[0]

  return {
    isOpen,
    query: trigger?.query ?? "",
    results,
    selectedIndex: effectiveSelectedIndex,
    popoverPosition,
    listboxId,
    activeDescendantId:
      isOpen && selectedCandidate
        ? getEmojiAutocompleteOptionId(listboxId, selectedCandidate.id)
        : undefined,
    handleKeyDown,
    selectCandidate,
    setSelectedIndex,
    close,
  }
}
