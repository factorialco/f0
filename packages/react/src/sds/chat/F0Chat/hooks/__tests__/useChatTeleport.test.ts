import { type VirtuosoHandle } from "react-virtuoso"
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  type Mock,
  vi,
} from "vitest"
import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"
import {
  TELEPORT_APPROACH_MS,
  TELEPORT_FADE_MS,
  useChatTeleport,
} from "../useChatTeleport"

let frameCallbacks: FrameRequestCallback[]

const runFrames = (count: number) => {
  for (let index = 0; index < count; index += 1) {
    const pending = frameCallbacks
    frameCallbacks = []
    act(() => {
      pending.forEach((callback) => callback(0))
    })
  }
}

beforeEach(() => {
  vi.useFakeTimers()
  frameCallbacks = []
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frameCallbacks.push(callback)
    return frameCallbacks.length
  })
  vi.stubGlobal("cancelAnimationFrame", () => {})
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

type Harness = {
  scrollToIndex: Mock
  /** Local index per message id; mutate to simulate a page landing. */
  indices: Map<string, number>
  scrollTop: { value: number }
  rows: { value: number }
}

const setup = ({
  reducedMotion = false,
  from = 0,
  epoch = "c1:0",
}: { reducedMotion?: boolean; from?: number; epoch?: string } = {}) => {
  const scrollToIndex = vi.fn()
  const harness: Harness = {
    scrollToIndex,
    indices: new Map<string, number>([
      ["far", 9_000],
      ["near", from + 5],
    ]),
    scrollTop: { value: 0 },
    rows: { value: 10_000 },
  }
  const virtuosoRef = {
    current: { scrollToIndex } as unknown as VirtuosoHandle,
  }
  const view = renderHook(
    (props: { epoch: string }) =>
      useChatTeleport({
        virtuosoRef,
        reducedMotion,
        resolveIndex: (id) => harness.indices.get(id) ?? null,
        measureFrom: () => ({
          index: from,
          scrollTop: harness.scrollTop.value,
        }),
        rowCount: () => harness.rows.value,
        epoch: props.epoch,
      }),
    { initialProps: { epoch } }
  )
  return { ...view, harness }
}

/** Fade-out, hidden reposition, settle, approach, reveal. */
const runTeleport = () => {
  act(() => {
    vi.advanceTimersByTime(TELEPORT_FADE_MS)
  })
  // Two frames with an unchanged scrollTop is "settled".
  runFrames(2)
  act(() => {
    vi.advanceTimersByTime(TELEPORT_APPROACH_MS)
  })
}

describe("useChatTeleport · near jumps", () => {
  it("scrolls smoothly without hiding anything", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("near", 5))

    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 5,
      align: "center",
      behavior: "smooth",
    })
  })

  it("drops the animation under reduced motion", () => {
    const { result, harness } = setup({ reducedMotion: true })
    act(() => result.current.jumpTo("near", 5))

    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 5,
      align: "center",
      behavior: "auto",
    })
  })
})

describe("useChatTeleport · far jumps", () => {
  it("hides, repositions short of the target, approaches it, reveals", () => {
    const { result, harness } = setup()

    act(() => result.current.jumpTo("far", 9_000))
    // Faded out, and nothing has moved yet — the reposition must not be seen.
    expect(result.current.hidden).toBe(true)
    expect(harness.scrollToIndex).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 8_990,
      align: "center",
      behavior: "auto",
    })
    expect(result.current.hidden).toBe(true)

    runFrames(2)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: 9_000,
      align: "center",
      behavior: "smooth",
    })
    // Still hidden: the reveal waits for the approach, not for the reposition.
    expect(result.current.hidden).toBe(true)

    act(() => {
      vi.advanceTimersByTime(TELEPORT_APPROACH_MS)
    })
    expect(result.current.hidden).toBe(false)
  })

  it("never teleports under reduced motion", () => {
    const { result, harness } = setup({ reducedMotion: true })
    act(() => result.current.jumpTo("far", 9_000))

    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 9_000,
      align: "center",
      behavior: "auto",
    })
  })

  // The whole reason the approach waits: rows measured mid-animation move the
  // target out from under it, which is what makes a far smooth scroll overshoot.
  it("waits for the staged region to stop moving before approaching", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)

    // Heights still settling: scrollTop moves on every frame.
    for (let frame = 0; frame < 5; frame += 1) {
      harness.scrollTop.value += 40
      runFrames(1)
    }
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)

    // Now it holds still.
    runFrames(2)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
  })

  it("gives up waiting rather than stalling on a list that never settles", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })

    for (let frame = 0; frame < 40; frame += 1) {
      harness.scrollTop.value += 40
      runFrames(1)
    }
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
    act(() => {
      vi.advanceTimersByTime(TELEPORT_APPROACH_MS)
    })
    expect(result.current.hidden).toBe(false)
  })

  // A page landing mid-jump shifts every local index. Re-resolving from the id
  // is what keeps the approach on the right message.
  it("re-resolves the target after a page shifts the indices", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })

    harness.indices.set("far", 9_100)
    runFrames(2)

    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: 9_100,
      align: "center",
      behavior: "smooth",
    })
  })

  it("reveals the transcript when the target leaves the window entirely", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })

    harness.indices.delete("far")
    runFrames(1)

    expect(result.current.hidden).toBe(false)
    // Only the hidden reposition ran; nothing was approached.
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
  })
})

describe("useChatTeleport · cancellation", () => {
  it("abandons a jump in flight when the reader starts another", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })
    harness.scrollToIndex.mockClear()

    act(() => result.current.jumpTo("near", 5))

    // The near jump owns the scroll now, and the abandoned approach must not
    // fire on top of it.
    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 5,
      align: "center",
      behavior: "smooth",
    })

    runFrames(3)
    act(() => {
      vi.advanceTimersByTime(TELEPORT_APPROACH_MS)
    })
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
  })

  it("does not reveal early when a second far jump replaces the first", () => {
    const { result } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })

    act(() => result.current.jumpTo("far", 9_000))
    expect(result.current.hidden).toBe(true)

    runTeleport()
    expect(result.current.hidden).toBe(false)
  })

  it("reveals the transcript on an explicit cancel", () => {
    const { result } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    expect(result.current.hidden).toBe(true)

    act(() => result.current.cancel())
    expect(result.current.hidden).toBe(false)
  })

  // A window swap renumbers every row, so a jump measured against the old one
  // can only land somewhere wrong — and leaving it running would also strand
  // the transcript invisible behind a remount.
  it("abandons a jump when the window is replaced", () => {
    const { result, harness, rerender } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })
    harness.scrollToIndex.mockClear()

    act(() => rerender({ epoch: "c1:1" }))

    expect(result.current.hidden).toBe(false)
    runFrames(3)
    act(() => {
      vi.advanceTimersByTime(TELEPORT_APPROACH_MS)
    })
    expect(harness.scrollToIndex).not.toHaveBeenCalled()
  })
})

describe("useChatTeleport · the fade contract", () => {
  // The hidden reposition must not start before the CSS fade has finished, or
  // the reader sees the jump it is there to hide. The transition is
  // `duration-100` on the Virtuoso element in ChatMessagesContainer.
  it("waits at least as long as the fade-out transition", () => {
    expect(TELEPORT_FADE_MS).toBeGreaterThanOrEqual(100)
  })

  // The adjacent pair. Asserting only that nothing has moved "yet" passes for a
  // zero delay too, because a pending timer has not fired either way.
  it("does not reposition one tick before the fade is done", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))

    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS - 1)
    })
    expect(harness.scrollToIndex).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
  })

  it("does not reveal one tick before the approach is done", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    act(() => {
      vi.advanceTimersByTime(TELEPORT_FADE_MS)
    })
    runFrames(2)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)

    act(() => {
      vi.advanceTimersByTime(TELEPORT_APPROACH_MS - 1)
    })
    expect(result.current.hidden).toBe(true)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current.hidden).toBe(false)
  })
})
