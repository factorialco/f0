import { useCallback, useEffect, useId, useMemo, useState } from "react"

import { useF0ChatEmit } from "../providers/F0ChatProvider"
import {
  type EmojiEntry,
  findEmojiByShortcode,
  searchEmoji,
} from "../utils/emoji-index"
import { detectMaxEmojiVersion } from "../utils/emoji-support"
import { type EmojiLocaleTerms } from "../utils/emoji-locale"
import { useEmojiLocaleTerms } from "./useEmojiLocaleTerms"

import {
  getTextareaCaretCoordinates,
  type PopoverPosition,
} from "./useMentions"

const MAX_RESULTS = 8

/** The list rows only need these three; the shared index carries more. */
export type EmojiAutocompleteCandidate = Pick<
  EmojiEntry,
  "id" | "name" | "native"
>

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
  /** Focus left the composer: hide the list without dismissing the token. */
  suspend: () => void
  /** Focus came back: show the list again if the token is still live. */
  resume: () => void
}

/**
 * Shortcode results for the composer, capped at {@link MAX_RESULTS}.
 *
 * The ranking used to live here on its own copy of the dataset, which meant the
 * `:` list and the picker's search box could — and did — disagree. Both now go
 * through the one index in `../utils/emoji-index`.
 *
 * Filtered to what this platform can draw: an autocomplete that offers an emoji
 * arriving as a tofu box is worse than one that doesn't offer it.
 */
export const searchEmojiCandidates = (
  rawQuery: string,
  localizedTerms?: EmojiLocaleTerms
): EmojiAutocompleteCandidate[] =>
  searchEmoji(rawQuery, {
    limit: MAX_RESULTS,
    maxVersion: detectMaxEmojiVersion(),
    localizedTerms,
  })

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

  const emoji = findEmojiByShortcode(match[2] ?? "")
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
  const emit = useF0ChatEmit()
  const reactId = useId()
  const listboxId = `chat-emoji-autocomplete-${reactId.replace(/:/g, "")}`
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [dismissedTrigger, setDismissedTrigger] = useState<number | null>(null)
  // Hidden because focus left, NOT because the reader dismissed the token.
  // The two are deliberately separate state: a dismissal outlives every later
  // keystroke on the same `:` — that is what Escape means, and
  // `useEmojiAutocomplete.test.ts` pins it — while a blur must outlive nothing.
  // The caret is still sitting inside the token, so the list has to be back the
  // moment focus is. Folding blur into `close()` meant one stray focus change
  // mid-token killed the list for the rest of that word, however much more the
  // reader typed.
  const [isSuspended, setIsSuspended] = useState(false)

  // The same localized layer the picker uses, so `:` and the picker's search
  // box agree in every language, not just in English.
  const localizedTerms = useEmojiLocaleTerms()

  const trigger = useMemo(
    () => findEmojiTrigger(inputValue, cursorPosition),
    [inputValue, cursorPosition]
  )
  const results = useMemo(
    () => (trigger ? searchEmojiCandidates(trigger.query, localizedTerms) : []),
    [trigger, localizedTerms]
  )
  const isOpen =
    trigger !== null &&
    !isSuspended &&
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

  // The highlighted row survives a blur on purpose: coming back to the composer
  // should land where you left it, not on the first option.
  const suspend = useCallback(() => setIsSuspended(true), [])
  const resume = useCallback(() => setIsSuspended(false), [])

  const selectCandidate = useCallback(
    (candidate: EmojiAutocompleteCandidate) => {
      if (!trigger) return

      const before = inputValue.slice(0, trigger.colonIndex)
      const after = inputValue.slice(cursorPosition)
      const hasExistingSeparator = /^\s/.test(after)
      const nextValue =
        before + candidate.native + (hasExistingSeparator ? "" : " ") + after
      // Step over the separator only when we actually inserted one; otherwise
      // the caret jumps past the space that was already there.
      const nextCursorPosition =
        before.length + candidate.native.length + (hasExistingSeparator ? 0 : 1)

      setInputValue(nextValue)
      setCursorPosition(nextCursorPosition)
      close()
      emit.onEmojiInserted({ emoji: candidate.native, source: "autocomplete" })

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
      emit,
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
    suspend,
    resume,
  }
}
