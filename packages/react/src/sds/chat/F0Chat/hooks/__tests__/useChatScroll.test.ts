import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type ChatRow } from "../../utils/grouping"
import { useChatScroll } from "../useChatScroll"

// The settle loop schedules rAF; run it synchronously so the initial scroll
// resolves within the mount. scrollTop stays 0 (no layout in jsdom), so the
// stable-for-2-frames check terminates after a couple of recursions.
beforeEach(() => {
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    cb(0)
    return 0
  })
  vi.stubGlobal("cancelAnimationFrame", () => {})
})
afterEach(() => vi.unstubAllGlobals())

const messageRow = (id: string): ChatRow =>
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  ({
    type: "message",
    key: id,
    message: { id },
    isFirstOfRun: true,
    isLastOfRun: true,
    isLastMessage: false,
  }) as unknown as ChatRow

const dividerRow: ChatRow = { type: "divider", key: "unread-divider" }

type Recorded = { index: number; align?: string }

const setup = (opts: {
  rows: ChatRow[]
  messages: { id: string; isMine?: boolean }[]
  unreadDividerId?: string | null
}): Recorded[] => {
  const calls: Recorded[] = []
  const virtualizer = {
    scrollToIndex: (index: number, o?: { align?: string }) =>
      calls.push({ index, align: o?.align }),
    getOffsetForIndex: (i: number) => [i * 40, "start"],
    getVirtualItemForOffset: () => ({ index: 0 }),
  }
  const el = { scrollTop: 0, scrollHeight: 1000, clientHeight: 500 }
  const indexById = new Map(opts.messages.map((m, i) => [m.id, i]))
  renderHook(() =>
    useChatScroll({
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      viewportRef: { current: el } as never,
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      virtualizer: virtualizer as never,
      rows: opts.rows,
      indexById,
      messages: opts.messages,
      hasMoreOlder: false,
      loadingOlder: false,
      onReachTop: () => {},
      unreadDividerId: opts.unreadDividerId ?? null,
    })
  )
  return calls
}

describe("useChatScroll — initial scroll target", () => {
  it("lands at the last message when there are no unread", () => {
    const calls = setup({
      rows: [messageRow("m1"), messageRow("m2"), messageRow("m3")],
      messages: [{ id: "m1" }, { id: "m2" }, { id: "m3" }],
    })
    expect(calls[0]).toEqual({ index: 2, align: "end" })
  })

  it("pins the unread divider to the top when there are unread", () => {
    // [m1, divider, m2, m3] → divider at row index 1.
    const calls = setup({
      rows: [messageRow("m1"), dividerRow, messageRow("m2"), messageRow("m3")],
      messages: [{ id: "m1" }, { id: "m2" }, { id: "m3" }],
      unreadDividerId: "m2",
    })
    expect(calls[0]).toEqual({ index: 1, align: "start" })
  })
})

describe("useChatScroll — conversation switch", () => {
  // The list isn't remounted between conversations, so the initial scroll must
  // re-run when `conversationKey` changes (otherwise later conversations land
  // wherever the diff logic leaves them — often mid-list).
  it("re-runs the initial scroll when the conversation changes", () => {
    const calls: Recorded[] = []
    const virtualizer = {
      scrollToIndex: (index: number, o?: { align?: string }) =>
        calls.push({ index, align: o?.align }),
      getOffsetForIndex: (i: number) => [i * 40, "start"],
      getVirtualItemForOffset: () => ({ index: 0 }),
    }
    const el = { scrollTop: 0, scrollHeight: 1000, clientHeight: 500 }
    const propsFor = (key: string, ids: string[]) => ({
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      viewportRef: { current: el } as never,
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      virtualizer: virtualizer as never,
      rows: ids.map(messageRow),
      indexById: new Map(ids.map((id, i) => [id, i])),
      messages: ids.map((id) => ({ id })),
      hasMoreOlder: false,
      loadingOlder: false,
      onReachTop: () => {},
      unreadDividerId: null,
      conversationKey: key,
    })

    const { rerender } = renderHook((props) => useChatScroll(props), {
      initialProps: propsFor("chan-a", ["a1", "a2"]),
    })
    expect(calls.length).toBeGreaterThan(0) // initial scroll ran for chan-a

    calls.length = 0
    rerender(propsFor("chan-b", ["b1", "b2", "b3"]))
    // chan-b re-runs the initial scroll and lands at its own last message.
    expect(calls.some((c) => c.index === 2 && c.align === "end")).toBe(true)
  })
})

describe("useChatScroll — settled jump", () => {
  it("centers a settled jump to a loaded message", () => {
    const calls: Recorded[] = []
    const virtualizer = {
      scrollToIndex: (index: number, o?: { align?: string }) =>
        calls.push({ index, align: o?.align }),
      getOffsetForIndex: (i: number) => [i * 40, "start"],
      getVirtualItemForOffset: () => ({ index: 0 }),
    }
    const el = { scrollTop: 0, scrollHeight: 1000, clientHeight: 500 }
    const ids = ["m1", "m2", "m3"]
    const { result } = renderHook(() =>
      useChatScroll({
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        viewportRef: { current: el } as never,
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        virtualizer: virtualizer as never,
        rows: ids.map(messageRow),
        indexById: new Map(ids.map((id, i) => [id, i])),
        messages: ids.map((id) => ({ id })),
        hasMoreOlder: false,
        loadingOlder: false,
        onReachTop: () => {},
        unreadDividerId: null,
        conversationKey: "chan-a",
      })
    )

    calls.length = 0 // ignore the initial scroll
    act(() => result.current.scrollToIndexSettled(1, "center"))
    expect(calls.every((c) => c.index === 1 && c.align === "center")).toBe(true)
    expect(calls.length).toBeGreaterThan(0)
  })
})
