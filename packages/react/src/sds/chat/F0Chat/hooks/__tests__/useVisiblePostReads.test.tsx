import { act, renderHook } from "@testing-library/react"
import { createRef, type MutableRefObject } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { type F0ChatPost } from "../../types"
import { type ChatRow } from "../../utils/grouping"
import { POST_READ_DWELL_MS, useVisiblePostReads } from "../useVisiblePostReads"

const post = (id: string): F0ChatPost => ({
  type: "post",
  id,
  createdAt: "2026-06-21T10:00:00",
  title: id,
  commentCount: 0,
})

const rows: ChatRow[] = [
  { type: "separator", key: "sep", at: "2026-06-21T10:00:00", forId: "p1" },
  { type: "post", key: "p1", post: post("p1") },
  { type: "post", key: "p2", post: post("p2") },
  { type: "post", key: "p3", post: post("p3") },
]

const readyRef = (value: boolean): MutableRefObject<boolean> => {
  const ref = createRef<boolean>() as MutableRefObject<boolean>
  ref.current = value
  return ref
}

const setup = (
  overrides: Partial<Parameters<typeof useVisiblePostReads>[0]> = {}
) => {
  const markRead = vi.fn()
  const hook = renderHook(() =>
    useVisiblePostReads({
      enabled: true,
      rows,
      readyRef: readyRef(true),
      markRead,
      ...overrides,
    })
  )
  return { markRead, report: hook.result.current }
}

describe("useVisiblePostReads", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it("marks a post read once it has dwelled past the fold", () => {
    const { markRead, report } = setup()

    act(() => report(2))
    // Not yet: a glance is not a read.
    expect(markRead).not.toHaveBeenCalled()

    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))
    expect(markRead).toHaveBeenCalledWith("p2")
  })

  it("does not mark anything read before the dwell elapses", () => {
    const { markRead, report } = setup()

    act(() => report(2))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS - 1))

    expect(markRead).not.toHaveBeenCalled()
  })

  it("advances the pointer post by post, never backwards", () => {
    const { markRead, report } = setup()

    act(() => report(3))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))
    expect(markRead).toHaveBeenCalledWith("p3")

    // Scrolling back up must not un-read or re-report anything.
    act(() => report(1))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))
    expect(markRead).toHaveBeenCalledOnce()
  })

  it("does not restart the timer as the reader keeps scrolling", () => {
    // Otherwise a continuous scroll postpones the read forever.
    const { markRead, report } = setup()

    act(() => report(1))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS / 2))
    act(() => report(2))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS / 2))

    expect(markRead).toHaveBeenCalledWith("p2")
  })

  it("reads up to the last row that IS an item", () => {
    // Row 0 is a separator: it has no id to read up to, so the pointer walks
    // back rather than reporting nothing.
    const { markRead, report } = setup()

    act(() => report(0))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))

    expect(markRead).not.toHaveBeenCalled()
  })

  it("marks nothing while the transcript is not ready", () => {
    const { markRead, report } = setup({ readyRef: readyRef(false) })

    act(() => report(2))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))

    expect(markRead).not.toHaveBeenCalled()
  })

  it("marks nothing on a channel that is not a feed", () => {
    const { markRead, report } = setup({ enabled: false })

    act(() => report(2))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))

    expect(markRead).not.toHaveBeenCalled()
  })

  it("marks nothing while the tab is hidden", () => {
    // Opening a panel in the background is not reading.
    const hidden = vi.spyOn(document, "hidden", "get").mockReturnValue(true)
    const { markRead, report } = setup()

    act(() => report(2))
    act(() => void vi.advanceTimersByTime(POST_READ_DWELL_MS))

    expect(markRead).not.toHaveBeenCalled()
    hidden.mockRestore()
  })
})
