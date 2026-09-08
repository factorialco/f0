import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { useMentions } from "../useMentions"

const MEMBERS: F0ChatUser[] = [
  { id: "ana-g", name: "Ana García" },
  { id: "bruno", name: "Bruno Martínez" },
  { id: "hera", name: "Hera Nakamura" },
]

type Props = Parameters<typeof useMentions>[0]

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

/**
 * The rows on screen answer the last query that came back. A keystroke starts a
 * newer search and resets the highlight to the top of that older list, so for
 * the length of the debounce the first row is somebody the user has already
 * typed past — and Enter, unlike Tab, checked nothing before inserting it.
 */
describe("useMentions — a keyboard pick during the debounce window", () => {
  let textarea: HTMLTextAreaElement
  let textareaRef: { current: HTMLTextAreaElement | null }
  let inserted: string[]

  beforeEach(() => {
    inserted = []
    textarea = document.createElement("textarea")
    document.body.appendChild(textarea)
    textareaRef = { current: textarea }
  })

  afterEach(() => textarea.remove())

  const makeProps = (over: Partial<Props> = {}): Props => ({
    inputValue: "",
    setInputValue: (value: string) => {
      inserted.push(value)
    },
    cursorPosition: 0,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef,
    enabled: true,
    // Prefix matching, so each query has one obvious answer.
    searchMembers: (query: string) =>
      Promise.resolve(
        MEMBERS.filter((member) =>
          member.name.toLowerCase().startsWith(query.toLowerCase())
        )
      ),
    everyoneLabel: "here",
    ...over,
  })

  const settle = async () => {
    await act(async () => {
      await vi.advanceTimersByTimeAsync(500)
    })
  }

  const mount = () =>
    renderHook((props: Props) => useMentions(props), {
      initialProps: makeProps(),
    })

  const type = (rerender: (props: Props) => void, text: string) =>
    rerender(makeProps({ inputValue: text, cursorPosition: text.length }))

  const press = (
    result: { current: ReturnType<typeof useMentions> },
    key: string
  ): boolean => {
    let consumed = false
    act(() => {
      consumed = result.current.handleKeyDown({
        key,
        preventDefault: () => {},
      } as React.KeyboardEvent<HTMLTextAreaElement>)
    })
    return consumed
  }

  it("does not insert a row the query has already moved past", async () => {
    const { result, rerender } = mount()

    type(rerender, "@A")
    await settle()
    expect(result.current.results).toHaveLength(1)

    // "Ana García" is still the highlighted row, and it is not a Bruno.
    type(rerender, "@Br")
    const consumed = press(result, "Enter")

    expect(inserted).toEqual([])
    // Still consumed: the popover is open, so Enter must not send either.
    expect(consumed).toBe(true)
  })

  it("inserts as soon as the rows catch up", async () => {
    const { result, rerender } = mount()

    type(rerender, "@A")
    await settle()
    type(rerender, "@Br")
    press(result, "Enter")
    expect(inserted).toEqual([])

    await settle()
    press(result, "Enter")

    expect(inserted).toEqual(["@Bruno Martínez "])
  })

  it("still inserts a row the query only narrowed", async () => {
    const { result, rerender } = mount()

    type(rerender, "@A")
    await settle()

    // "Ana García" answers "An" as well as it answered "A" — waiting for the
    // search to confirm what the row already says would only add latency.
    type(rerender, "@An")
    press(result, "Enter")

    expect(inserted).toEqual(["@Ana García "])
  })

  it("still inserts the @here row, which reads the live query", async () => {
    const { result, rerender } = mount()

    type(rerender, "@h")
    await settle()
    type(rerender, "@he")
    press(result, "Enter")

    expect(inserted).toEqual(["@here "])
  })

  it("leaves Tab's own check in place", async () => {
    const { result, rerender } = mount()

    type(rerender, "@A")
    await settle()
    type(rerender, "@Br")

    // Tab already refuses a row that does not prefix the query, and falls
    // through so the textarea gets its tab.
    expect(press(result, "Tab")).toBe(false)
    expect(inserted).toEqual([])
  })
})
