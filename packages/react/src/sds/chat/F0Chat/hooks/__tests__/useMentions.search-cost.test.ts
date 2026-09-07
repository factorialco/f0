import { act } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { type F0ChatUser } from "../../types"
import { type MentionCandidate, useMentions } from "../useMentions"

const MEMBERS: F0ChatUser[] = [
  { id: "ana-g", name: "Ana García" },
  { id: "bruno", name: "Bruno Martínez" },
  { id: "hera", name: "Hera Nakamura" },
  { id: "juana", name: "Juana Pérez" },
]

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

type Props = Parameters<typeof useMentions>[0]

const labelsOf = (results: MentionCandidate[]): string[] =>
  results.map((candidate) =>
    candidate.kind === "everyone" ? `@${candidate.label}` : candidate.user.name
  )

describe("useMentions — mention popover cost", () => {
  let cleanup: () => void
  let searchCalls: string[]
  let searchMembers: (query: string) => Promise<F0ChatUser[]>
  let makeProps: (over?: Partial<Props>) => Props

  beforeEach(() => {
    searchCalls = []
    const textarea = document.createElement("textarea")
    document.body.appendChild(textarea)
    cleanup = () => textarea.remove()
    // One identity for the whole test, as a host's useCallback gives.
    searchMembers = (query: string) => {
      searchCalls.push(query)
      const q = query.trim().toLowerCase()
      return Promise.resolve(
        MEMBERS.filter((member) => member.name.toLowerCase().includes(q))
      )
    }
    makeProps = (over: Partial<Props> = {}): Props => ({
      inputValue: "",
      setInputValue: () => {},
      cursorPosition: 0,
      setCursorPosition: () => {},
      requestSelection: () => {},
      textareaRef: { current: textarea },
      enabled: true,
      searchMembers,
      everyoneLabel: "here",
      ...over,
    })
  })

  afterEach(() => cleanup())

  /** Advance past DEBOUNCE_MS and flush the search promise. */
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

  describe("rows are unchanged", () => {
    // Each case pins the exact rows and their order, so a change to how the
    // query selects or orders candidates fails here rather than in review.
    const cases: [name: string, typed: string, expected: string[]][] = [
      ["prefix match", "@Bru", ["Bruno Martínez"]],
      ["mid-word match", "@art", ["Bruno Martínez"]],
      // "Ana" also sits inside "Juana": both rows come back, in host order.
      [
        "mid-word match across two names",
        "@Ana",
        ["Ana García", "Juana Pérez"],
      ],
      ["diacritic in the name", "@Pér", ["Juana Pérez"]],
      ["the @here row wins the top slot", "@he", ["@here", "Hera Nakamura"]],
      [
        "an empty query lists everyone, host order preserved",
        "@",
        [
          "@here",
          "Ana García",
          "Bruno Martínez",
          "Hera Nakamura",
          "Juana Pérez",
        ],
      ],
    ]

    for (const [name, typed, expected] of cases) {
      it(name, async () => {
        const { result, rerender } = mount()
        type(rerender, typed)
        await settle()
        expect(labelsOf(result.current.results)).toEqual(expected)
      })
    }

    it("omits the @here row entirely in a DM", async () => {
      const props = makeProps({ everyoneLabel: undefined })
      const { result, rerender } = renderHook(
        (next: Props) => useMentions(next),
        { initialProps: props }
      )

      rerender({ ...props, inputValue: "@he", cursorPosition: 3 })
      await settle()

      expect(labelsOf(result.current.results)).toEqual(["Hera Nakamura"])
    })
  })

  describe("per-keystroke work", () => {
    it("keeps one row array while the matches behind it are unchanged", async () => {
      const { result, rerender } = mount()

      type(rerender, "@B")
      await settle()
      const settled = result.current.results
      expect(labelsOf(settled)).toEqual(["Bruno Martínez"])

      // Keep typing. The debounce holds the next search back, so these rows are
      // still the ones on screen — they must not be rebuilt to say so.
      type(rerender, "@Br")
      type(rerender, "@Bru")
      type(rerender, "@Brun")

      expect(result.current.results).toBe(settled)
    })

    it("keeps one row array across host re-renders that change nothing", async () => {
      const { result, rerender } = mount()

      type(rerender, "@Bru")
      await settle()
      const settled = result.current.results

      // A group chat re-renders on every transport event (typing, receipts,
      // new messages) while the popover is open.
      for (let i = 0; i < 10; i++) type(rerender, "@Bru")

      expect(result.current.results).toBe(settled)
    })

    it("rebuilds the rows when the @here row actually appears or leaves", async () => {
      const { result, rerender } = mount()

      type(rerender, "@h")
      await settle()
      const withEveryone = result.current.results
      expect(labelsOf(withEveryone)).toEqual(["@here", "Hera Nakamura"])

      // "hz" no longer prefixes "here", so the row has to go.
      type(rerender, "@hz")
      expect(result.current.results).not.toBe(withEveryone)
      expect(labelsOf(result.current.results)).toEqual(["Hera Nakamura"])
    })
  })

  describe("host searches", () => {
    it("collapses a burst of keystrokes into one member search", async () => {
      const { rerender } = mount()

      for (const text of ["@", "@A", "@An", "@Ana"]) type(rerender, text)
      expect(searchCalls).toEqual([])

      await settle()
      expect(searchCalls).toEqual(["Ana"])
    })

    it("still collapses the burst when keystrokes land in separate tasks", async () => {
      const { rerender } = mount()

      for (const text of ["@", "@A", "@An", "@Ana"]) {
        type(rerender, text)
        await act(async () => {
          await vi.advanceTimersByTimeAsync(50)
        })
      }

      expect(searchCalls).toEqual([])
      await settle()
      expect(searchCalls).toEqual(["Ana"])
    })

    it("searches again once typing pauses between keystrokes", async () => {
      const { rerender } = mount()

      type(rerender, "@An")
      await settle()
      type(rerender, "@Ana")
      await settle()

      // The debounce delays a search, it never drops the user's final query.
      expect(searchCalls).toEqual(["An", "Ana"])
    })

    it("does not re-search when a host re-render leaves the trigger unchanged", async () => {
      const { rerender } = mount()

      type(rerender, "@Ana")
      await settle()
      expect(searchCalls).toEqual(["Ana"])

      for (let i = 0; i < 10; i++) type(rerender, "@Ana")
      await settle()

      expect(searchCalls).toEqual(["Ana"])
    })

    it("lets the popover reopen after dismissing a search already in flight", async () => {
      // The search has to be dispatched but unresolved when Escape lands:
      // cancelling the timer cannot help once the host has been called, and it
      // is the empty late result that would otherwise dismiss this `@` for
      // good — leaving the popover shut for every further keystroke on it.
      let resolveSearch: (users: F0ChatUser[]) => void = () => {}
      const props = makeProps({
        searchMembers: (query: string) => {
          searchCalls.push(query)
          return new Promise<F0ChatUser[]>((resolve) => {
            resolveSearch = resolve
          })
        },
      })
      const { result, rerender } = renderHook(
        (next: Props) => useMentions(next),
        { initialProps: props }
      )

      rerender({ ...props, inputValue: "@zzz", cursorPosition: 4 })
      await settle()
      expect(searchCalls).toEqual(["zzz"])

      act(() => {
        result.current.handleKeyDown({
          key: "Escape",
          preventDefault: () => {},
        } as React.KeyboardEvent<HTMLTextAreaElement>)
      })

      // Nobody matches "zzz", and neither does @here.
      await act(async () => {
        resolveSearch([])
        await vi.advanceTimersByTimeAsync(0)
      })

      rerender({ ...props, inputValue: "@zzzq", cursorPosition: 5 })
      await settle()

      expect(result.current.isOpen).toBe(true)
      expect(searchCalls).toEqual(["zzz", "zzzq"])
    })

    it("drops a search still pending when the popover is dismissed", async () => {
      const { result, rerender } = mount()

      type(rerender, "@An")
      act(() => {
        result.current.handleKeyDown({
          key: "Escape",
          preventDefault: () => {},
        } as React.KeyboardEvent<HTMLTextAreaElement>)
      })
      await settle()

      // Nothing can show the rows, so the host must not be asked for them.
      expect(searchCalls).toEqual([])
      expect(result.current.isOpen).toBe(false)
      expect(result.current.results.some((row) => row.kind === "user")).toBe(
        false
      )
      expect(result.current.isLoading).toBe(false)
    })
  })
})
