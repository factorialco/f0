import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type F0ChatUser } from "../../types"
import { useMentions } from "../useMentions"

const ANA: F0ChatUser = { id: "ana-g", name: "Ana García" }

type Props = Parameters<typeof useMentions>[0]

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

describe("useMentions — search lifecycle", () => {
  let textarea: HTMLTextAreaElement
  let textareaRef: { current: HTMLTextAreaElement | null }
  let searchCalls: string[]

  beforeEach(() => {
    searchCalls = []
    textarea = document.createElement("textarea")
    document.body.appendChild(textarea)
    textareaRef = { current: textarea }
  })

  afterEach(() => textarea.remove())

  const makeProps = (over: Partial<Props> = {}): Props => ({
    inputValue: "",
    setInputValue: () => {},
    cursorPosition: 0,
    setCursorPosition: () => {},
    requestSelection: () => {},
    textareaRef,
    enabled: true,
    searchMembers: (query: string) => {
      searchCalls.push(query)
      return Promise.resolve([ANA])
    },
    everyoneLabel: "here",
    ...over,
  })

  /** Advance past DEBOUNCE_MS and flush the search promise. */
  const settle = async () => {
    await act(async () => {
      await vi.advanceTimersByTimeAsync(500)
    })
  }

  const userRows = (results: { kind: string }[]) =>
    results.filter((row) => row.kind === "user")

  describe("a dispatched search is retired with its trigger", () => {
    /**
     * A search the host has already been asked for cannot be cancelled, so the
     * only thing that stops its answer landing is retiring the id it was
     * dispatched under. The trigger effect returned early on three paths
     * without doing that — and a late answer then refilled rows nothing was
     * showing, or marked the `@` dismissed for good.
     */
    const dispatchedSearch = (over: Partial<Props> = {}) => {
      let resolveSearch: (users: F0ChatUser[]) => void = () => {}
      const props = (extra: Partial<Props> = {}) =>
        makeProps({
          searchMembers: (query: string) => {
            searchCalls.push(query)
            return new Promise<F0ChatUser[]>((resolve) => {
              resolveSearch = resolve
            })
          },
          ...over,
          ...extra,
        })
      const harness = renderHook((next: Props) => useMentions(next), {
        initialProps: props(),
      })
      return {
        ...harness,
        props,
        resolve: (users: F0ChatUser[]) => resolveSearch(users),
      }
    }

    it("cannot refill the rows once the `@` is gone", async () => {
      const { result, rerender, props, resolve } = dispatchedSearch()

      rerender(props({ inputValue: "@An", cursorPosition: 3 }))
      await settle()
      expect(searchCalls).toEqual(["An"])

      // The user deletes the `@`: there is no trigger left to answer.
      rerender(props({ inputValue: "An", cursorPosition: 2 }))
      await act(async () => {
        resolve([ANA])
        await vi.advanceTimersByTimeAsync(0)
      })

      expect(userRows(result.current.results)).toEqual([])
      expect(result.current.isLoading).toBe(false)
    })

    it("cannot refill the rows once mentions are switched off", async () => {
      const { result, rerender, props, resolve } = dispatchedSearch()

      rerender(props({ inputValue: "@An", cursorPosition: 3 }))
      await settle()

      rerender(props({ inputValue: "@An", cursorPosition: 3, enabled: false }))
      await act(async () => {
        resolve([ANA])
        await vi.advanceTimersByTimeAsync(0)
      })

      expect(userRows(result.current.results)).toEqual([])
      expect(result.current.isLoading).toBe(false)
    })

    it("cannot dismiss an `@` the caret has already left", async () => {
      const { result, rerender, props, resolve } = dispatchedSearch()

      rerender(props({ inputValue: "@zzz", cursorPosition: 4 }))
      await settle()
      expect(searchCalls).toEqual(["zzz"])

      // The whole token goes before the answer arrives.
      rerender(props({ inputValue: "", cursorPosition: 0 }))
      await act(async () => {
        resolve([])
        await vi.advanceTimersByTimeAsync(0)
      })

      // Nobody matched "zzz", but that says nothing about the next `@` typed
      // in the same place.
      rerender(props({ inputValue: "@a", cursorPosition: 2 }))
      await settle()

      expect(result.current.isOpen).toBe(true)
      expect(searchCalls).toEqual(["zzz", "a"])
    })
  })

  describe("the host's searchMembers identity", () => {
    /**
     * The debounce bounds work per keystroke; the effect re-runs per render.
     * A host building `searchMembers` inline hands the effect a new dependency
     * on every render, and a busy group chat re-renders on other people's
     * activity — so the window is re-armed by events the user did not cause.
     */
    const mountWithFreshCallback = () => {
      const props = (over: Partial<Props> = {}): Props => ({
        ...makeProps(over),
        // A new closure every render, as an inline arrow in the host gives.
        searchMembers: (query: string) => {
          searchCalls.push(query)
          return Promise.resolve([ANA])
        },
      })
      const harness = renderHook((next: Props) => useMentions(next), {
        initialProps: props(),
      })
      return { ...harness, props }
    }

    it("does not re-search when only that identity changed", async () => {
      const { rerender, props } = mountWithFreshCallback()

      rerender(props({ inputValue: "@Ana", cursorPosition: 4 }))
      await settle()
      expect(searchCalls).toEqual(["Ana"])

      for (let i = 0; i < 10; i++) {
        rerender(props({ inputValue: "@Ana", cursorPosition: 4 }))
        await settle()
      }

      expect(searchCalls).toEqual(["Ana"])
    })

    it("does not push the debounce back on every re-render", async () => {
      const { rerender, props } = mountWithFreshCallback()

      rerender(props({ inputValue: "@Ana", cursorPosition: 4 }))

      // Ten re-renders, each well inside the 250 ms window's remainder. The
      // search must fire from the keystroke, not from the last render.
      for (let i = 0; i < 10; i++) {
        await act(async () => {
          await vi.advanceTimersByTimeAsync(100)
        })
        rerender(props({ inputValue: "@Ana", cursorPosition: 4 }))
      }

      expect(searchCalls).toEqual(["Ana"])
    })
  })
})
