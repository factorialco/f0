import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { useMentions } from "../useMentions"

const MEMBERS: F0ChatUser[] = [
  { id: "ana-g", name: "Ana García" },
  { id: "bruno", name: "Bruno Martínez" },
]

// rAF runs synchronously so selectCandidate's focus/caret restore resolves.
beforeEach(() => {
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0)
    return 0
  })
})
afterEach(() => vi.unstubAllGlobals())

type Props = Parameters<typeof useMentions>[0]

const makeProps = (over: Partial<Props> = {}): Props => {
  const textarea = document.createElement("textarea")
  document.body.appendChild(textarea)
  return {
    inputValue: "",
    setInputValue: () => {},
    cursorPosition: 0,
    textareaRef: { current: textarea },
    enabled: true,
    searchMembers: (q: string) =>
      Promise.resolve(
        MEMBERS.filter((m) => m.name.toLowerCase().includes(q.toLowerCase()))
      ),
    everyoneLabel: "here",
    ...over,
  }
}

describe("useMentions", () => {
  it("stays inert in DMs (disabled) — typing @ never opens the popover", () => {
    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps({ enabled: false }),
    })
    rerender(makeProps({ enabled: false, inputValue: "@", cursorPosition: 1 }))
    expect(result.current.isOpen).toBe(false)
  })

  it("pins the @here (everyone) option at the top when triggered", () => {
    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps(),
    })
    rerender(makeProps({ inputValue: "@", cursorPosition: 1 }))
    expect(result.current.isOpen).toBe(true)
    expect(result.current.results[0]).toEqual({
      kind: "everyone",
      label: "here",
    })
  })

  it("searches members and drops @here when the query doesn't match it", async () => {
    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: makeProps(),
    })
    rerender(makeProps({ inputValue: "@Ana", cursorPosition: 4 }))
    await waitFor(() =>
      expect(
        result.current.results.filter((r) => r.kind === "user")
      ).toHaveLength(1)
    )
    expect(result.current.results.some((r) => r.kind === "everyone")).toBe(
      false
    )
    expect(result.current.results[0]).toMatchObject({
      kind: "user",
      user: { id: "ana-g" },
    })
  })

  it("reports everyone + selected members in getMentions()", async () => {
    let value = ""
    let cursor = 0
    const setInputValue = (v: string) => {
      value = v
    }
    const props = () =>
      makeProps({ inputValue: value, cursorPosition: cursor, setInputValue })

    const { result, rerender } = renderHook((p: Props) => useMentions(p), {
      initialProps: props(),
    })

    // Trigger, then pick "everyone".
    value = "@"
    cursor = 1
    rerender(props())
    act(() =>
      result.current.selectCandidate({ kind: "everyone", label: "here" })
    )
    expect(value).toBe("@here ")
    cursor = value.length
    rerender(props())

    // Type a second mention and pick a member.
    value = "@here @Ana"
    cursor = value.length
    rerender(props())
    await waitFor(() =>
      expect(result.current.results.some((r) => r.kind === "user")).toBe(true)
    )
    const member = result.current.results.find((r) => r.kind === "user")!
    act(() => result.current.selectCandidate(member))
    expect(value).toBe("@here @Ana García ")
    cursor = value.length
    rerender(props())

    const payload = result.current.getMentions()
    expect(payload.mentionedEveryone).toBe(true)
    expect(payload.mentions).toEqual([{ id: "ana-g", name: "Ana García" }])
  })
})
