import { type KeyboardEvent } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  waitFor,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

import {
  findEmojiTrigger,
  getEmojiAutocompleteOptionId,
  replaceClosedEmojiShortcode,
  searchEmojiCandidates,
  useEmojiAutocomplete,
} from "../useEmojiAutocomplete"

beforeEach(() => {
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0)
    return 0
  })
})

afterEach(() => {
  vi.unstubAllGlobals()
  document.body.replaceChildren()
})

type Props = Parameters<typeof useEmojiAutocomplete>[0]

const makeProps = (overrides: Partial<Props> = {}): Props => {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)
  return {
    inputValue: "",
    setInputValue: () => {},
    cursorPosition: 0,
    setCursorPosition: () => {},
    textareaRef: { current: textarea },
    ...overrides,
  }
}

const keyboardEvent = (
  key: string,
  overrides: Record<string, unknown> = {}
): KeyboardEvent<HTMLTextAreaElement> =>
  ({
    key,
    preventDefault: vi.fn(),
    ...overrides,
  }) as unknown as KeyboardEvent<HTMLTextAreaElement>

describe("emoji autocomplete search", () => {
  it("only finds colon triggers at the start of a token", () => {
    expect(findEmojiTrigger(":", 1)).toEqual({
      colonIndex: 0,
      query: "",
    })
    expect(findEmojiTrigger("Say :smil", 9)).toEqual({
      colonIndex: 4,
      query: "smil",
    })
    expect(findEmojiTrigger("hello:", 6)).toBeNull()
    expect(findEmojiTrigger("Meet at 12:30", 13)).toBeNull()
    expect(findEmojiTrigger("https://factorialhr.com", 8)).toBeNull()
  })

  it("ranks shortcode and alias matches before broader keywords", () => {
    expect(searchEmojiCandidates("smile")[0]).toMatchObject({
      id: "smile",
      native: "😄",
    })
    expect(searchEmojiCandidates("smil")[0]?.id).toBe("smile")
    expect(searchEmojiCandidates("thumbsup")[0]).toMatchObject({
      id: "+1",
      native: "👍",
    })
    expect(searchEmojiCandidates("definitely-not-an-emoji")).toEqual([])
  })

  it("replaces complete Slack-style shortcodes and aliases", () => {
    expect(replaceClosedEmojiShortcode(":smile:", 7)).toEqual({
      value: "😄",
      cursorPosition: 2,
    })
    expect(replaceClosedEmojiShortcode("Great :thumbsup: work", 16)).toEqual({
      value: "Great 👍 work",
      cursorPosition: 8,
    })
    expect(replaceClosedEmojiShortcode("https://example.com", 8)).toBeNull()
    expect(replaceClosedEmojiShortcode(":unknown:", 9)).toBeNull()
  })

  it("generates collision-free option IDs for signed shortcodes", () => {
    const listboxId = "emoji-results"

    expect(getEmojiAutocompleteOptionId(listboxId, "+1")).not.toBe(
      getEmojiAutocompleteOptionId(listboxId, "-1")
    )
  })
})

describe("useEmojiAutocomplete", () => {
  it("opens on colon and exposes the active option to the textarea", () => {
    const { result } = renderHook(() =>
      useEmojiAutocomplete(
        makeProps({
          inputValue: ":",
          cursorPosition: 1,
        })
      )
    )

    expect(result.current.isOpen).toBe(true)
    expect(result.current.results).toHaveLength(8)
    expect(result.current.activeDescendantId).toBe(
      getEmojiAutocompleteOptionId(
        result.current.listboxId,
        result.current.results[0]?.id ?? ""
      )
    )
  })

  it("replaces the active query and preserves surrounding text", () => {
    const setInputValue = vi.fn()
    const setCursorPosition = vi.fn()
    const textarea = document.createElement("textarea")
    textarea.value = "Hello :smil world"
    document.body.appendChild(textarea)
    const { result } = renderHook(() =>
      useEmojiAutocomplete({
        inputValue: "Hello :smil world",
        setInputValue,
        cursorPosition: 11,
        setCursorPosition,
        textareaRef: { current: textarea },
      })
    )

    const enter = keyboardEvent("Enter")
    act(() => expect(result.current.handleKeyDown(enter)).toBe(true))

    expect(enter.preventDefault).toHaveBeenCalledOnce()
    expect(setInputValue).toHaveBeenCalledWith("Hello 😄 world")
    expect(setCursorPosition).toHaveBeenCalledWith(9)
    expect(textarea).toHaveFocus()
    expect(textarea.selectionStart).toBe(9)
  })

  it("navigates with arrows and selects with Tab", async () => {
    const setInputValue = vi.fn()
    const setCursorPosition = vi.fn()
    const textarea = document.createElement("textarea")
    textarea.value = ":sm"
    document.body.appendChild(textarea)
    const { result } = renderHook(() =>
      useEmojiAutocomplete({
        inputValue: ":sm",
        setInputValue,
        cursorPosition: 3,
        setCursorPosition,
        textareaRef: { current: textarea },
      })
    )

    const firstId = result.current.results[0]?.id
    act(() => result.current.handleKeyDown(keyboardEvent("ArrowDown")))
    await waitFor(() => expect(result.current.selectedIndex).toBe(1))
    const second = result.current.results[1]
    expect(second?.id).not.toBe(firstId)

    act(() => result.current.handleKeyDown(keyboardEvent("Tab")))
    expect(setInputValue).toHaveBeenCalledWith(`${second?.native} `)
    expect(setCursorPosition).toHaveBeenCalledWith(3)
    expect(textarea).toHaveFocus()
    expect(textarea.selectionStart).toBe(3)
  })

  it("dismisses the current trigger with Escape", () => {
    const props = makeProps({
      inputValue: ":fire",
      cursorPosition: 5,
    })
    const { result, rerender } = renderHook(
      (nextProps: Props) => useEmojiAutocomplete(nextProps),
      { initialProps: props }
    )

    const escape = keyboardEvent("Escape")
    act(() => expect(result.current.handleKeyDown(escape)).toBe(true))

    expect(escape.preventDefault).toHaveBeenCalledOnce()
    expect(result.current.isOpen).toBe(false)
    expect(result.current.activeDescendantId).toBeUndefined()
    expect(props.textareaRef.current).toHaveFocus()

    rerender({ ...props, inputValue: ":firex", cursorPosition: 6 })
    expect(result.current.isOpen).toBe(false)

    rerender({ ...props, inputValue: ":fire :joy", cursorPosition: 10 })
    expect(result.current.isOpen).toBe(true)
  })

  it("preserves backward focus navigation and IME composition", () => {
    const setInputValue = vi.fn()
    const { result } = renderHook(() =>
      useEmojiAutocomplete(
        makeProps({
          inputValue: ":smile",
          cursorPosition: 6,
          setInputValue,
        })
      )
    )
    const shiftTab = keyboardEvent("Tab", { shiftKey: true })
    const composingEnter = keyboardEvent("Enter", {
      nativeEvent: { isComposing: true },
    })

    expect(result.current.handleKeyDown(shiftTab)).toBe(false)
    expect(result.current.handleKeyDown(composingEnter)).toBe(false)
    expect(shiftTab.preventDefault).not.toHaveBeenCalled()
    expect(composingEnter.preventDefault).not.toHaveBeenCalled()
    expect(setInputValue).not.toHaveBeenCalled()
  })
})
