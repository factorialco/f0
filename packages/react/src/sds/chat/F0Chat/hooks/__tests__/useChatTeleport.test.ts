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
  TELEPORT_FADE_MS,
  TELEPORT_GLIDE_MIN_FRAMES,
  TELEPORT_SETTLE_FRAMES,
  TELEPORT_STABLE_FRAMES,
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

/** Every row in the harness list is this tall, so positions are arithmetic. */
const ROW_PX = 50
const VIEWPORT_PX = 600
/** Approach span of eleven 50px rows: ten rows back from the target, inclusive. */
const APPROACH_PX = 11 * ROW_PX

type Harness = {
  scrollToIndex: Mock
  scrollBy: Mock
  arrive: Mock
  active: { current: boolean }
  /** Local index per message id; mutate to simulate a page landing. */
  indices: Map<string, number>
  from: { value: number | null }
  scrollTop: { value: number }
  rows: { value: number }
  /** What `rowSpan` reports: the real arithmetic span, or a forced value. */
  span: { value: number | null | "measured" }
  /** How far short of the requested position a scroll lands, per behavior —
   * a stand-in for Virtuoso positioning from estimates. */
  shortfall: { auto: number; smooth: number }
  bottom: () => number
}

const setup = ({
  reducedMotion = false,
  from = 0,
  epoch = "c1:0",
}: { reducedMotion?: boolean; from?: number | null; epoch?: string } = {}) => {
  const scrollToIndex = vi.fn()
  const scrollBy = vi.fn()
  const arrive = vi.fn()
  const harness: Harness = {
    scrollToIndex,
    scrollBy,
    arrive,
    active: { current: false },
    indices: new Map<string, number>([
      ["far", 9_000],
      ["old", 100],
      ["near", (from ?? 0) + 5],
    ]),
    from: { value: from },
    scrollTop: { value: (from ?? 0) * ROW_PX },
    rows: { value: 10_000 },
    span: { value: "measured" },
    shortfall: { auto: 0, smooth: 0 },
    bottom: () => harness.rows.value * ROW_PX - VIEWPORT_PX,
  }
  const clamp = (top: number) =>
    Math.min(Math.max(0, top), Math.max(0, harness.bottom()))

  // The stand-in scroller: a scroll lands where the geometry says, minus the
  // configured shortfall, and instantly — motion is the browser's business.
  scrollToIndex.mockImplementation(
    ({
      index,
      align,
      behavior,
    }: {
      index: number | "LAST"
      align: "center" | "end"
      behavior: "auto" | "smooth"
    }) => {
      const row = index === "LAST" ? harness.rows.value - 1 : index
      const top =
        align === "end"
          ? (row + 1) * ROW_PX - VIEWPORT_PX
          : row * ROW_PX - VIEWPORT_PX / 2
      harness.scrollTop.value = clamp(top - harness.shortfall[behavior])
    }
  )
  scrollBy.mockImplementation(({ top }: { top: number }) => {
    harness.scrollTop.value = clamp(harness.scrollTop.value + top)
  })

  const virtuosoRef = {
    current: { scrollToIndex, scrollBy } as unknown as VirtuosoHandle,
  }
  const view = renderHook(
    (props: { epoch: string }) =>
      useChatTeleport({
        virtuosoRef,
        reducedMotion,
        resolveIndex: (id) => harness.indices.get(id) ?? null,
        measure: () => ({
          index: harness.from.value,
          scrollTop: harness.scrollTop.value,
          scrollHeight: harness.rows.value * ROW_PX,
          clientHeight: VIEWPORT_PX,
        }),
        rowSpan: (start, end) =>
          harness.span.value === "measured"
            ? (end - start + 1) * ROW_PX
            : harness.span.value,
        rowCount: () => harness.rows.value,
        epoch: props.epoch,
        activeRef: harness.active,
        onArriveBottom: arrive,
      }),
    { initialProps: { epoch } }
  )
  return { ...view, harness }
}

const fade = () => {
  act(() => {
    vi.advanceTimersByTime(TELEPORT_FADE_MS)
  })
}
/** Frames for one hidden phase to read as settled: the position must hold
 * for `TELEPORT_STABLE_FRAMES` consecutive reads. */
const settleFrames = () => runFrames(TELEPORT_STABLE_FRAMES)
/** Frames for the visible glide to be checked for arrival. */
const glideFrames = () => runFrames(TELEPORT_GLIDE_MIN_FRAMES)

/** Fade-out, hidden landing, hidden step back, reveal + glide, arrival. */
const runTeleport = () => {
  fade()
  settleFrames()
  settleFrames()
  glideFrames()
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

    glideFrames()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollBy).not.toHaveBeenCalled()
    expect(harness.active.current).toBe(false)
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
  it("hides, lands on the target, steps back, then reveals as it glides", () => {
    const { result, harness } = setup()

    act(() => result.current.jumpTo("far", 9_000))
    // Faded out, and nothing has moved yet — the landing must not be seen.
    expect(result.current.hidden).toBe(true)
    expect(harness.active.current).toBe(true)
    expect(harness.scrollToIndex).not.toHaveBeenCalled()

    fade()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 9_000,
      align: "center",
      behavior: "auto",
    })
    expect(result.current.hidden).toBe(true)

    // Landed and still: step back by the measured span of the approach rows,
    // against the direction of travel, so the glide runs forward.
    settleFrames()
    expect(harness.scrollBy).toHaveBeenCalledTimes(1)
    expect(harness.scrollBy).toHaveBeenCalledWith({ top: -APPROACH_PX })
    expect(result.current.hidden).toBe(true)

    // Revealed exactly as the glide is issued, so all of it is seen.
    settleFrames()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: 9_000,
      align: "center",
      behavior: "smooth",
    })
    expect(result.current.hidden).toBe(false)
    expect(harness.active.current).toBe(true)

    glideFrames()
    expect(harness.active.current).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
    expect(harness.arrive).not.toHaveBeenCalled()
  })

  it("steps back downwards when travelling towards older messages", () => {
    const { result, harness } = setup({ from: 9_500 })
    act(() => result.current.jumpTo("old", 100))
    fade()
    settleFrames()

    expect(harness.scrollBy).toHaveBeenCalledWith({ top: APPROACH_PX })

    settleFrames()
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: 100,
      align: "center",
      behavior: "smooth",
    })
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
    glideFrames()
    expect(harness.scrollBy).not.toHaveBeenCalled()
  })

  // Virtuoso corrects the landing after each batch of measurements. Stepping
  // back from a position that is still moving would measure the glide against
  // the wrong place.
  it("waits for the landed rows to stop moving before stepping back", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)

    // Heights still settling: scrollTop moves on every frame.
    for (let frame = 0; frame < 5; frame += 1) {
      harness.scrollTop.value += 40
      runFrames(1)
    }
    expect(harness.scrollBy).not.toHaveBeenCalled()

    // Now it holds still.
    settleFrames()
    expect(harness.scrollBy).toHaveBeenCalledTimes(1)
  })

  it("does not count one still frame between two corrections as settled", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()

    runFrames(TELEPORT_STABLE_FRAMES - 1)
    harness.scrollTop.value += 40
    runFrames(TELEPORT_STABLE_FRAMES - 1)
    expect(harness.scrollBy).not.toHaveBeenCalled()

    runFrames(1)
    expect(harness.scrollBy).toHaveBeenCalledTimes(1)
  })

  it("gives up waiting rather than stalling on a list that never settles", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()

    for (let frame = 0; frame < TELEPORT_SETTLE_FRAMES; frame += 1) {
      harness.scrollTop.value += 40
      runFrames(1)
    }
    expect(harness.scrollBy).toHaveBeenCalledTimes(1)

    for (let frame = 0; frame < TELEPORT_SETTLE_FRAMES; frame += 1) {
      harness.scrollTop.value += 40
      runFrames(1)
    }
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
    expect(result.current.hidden).toBe(false)
  })

  // A page landing mid-jump shifts every local index. Re-resolving from the id
  // is what keeps the approach on the right message.
  it("re-resolves the target after a page shifts the indices", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()

    harness.indices.set("far", 9_100)
    settleFrames()
    settleFrames()

    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: 9_100,
      align: "center",
      behavior: "smooth",
    })
  })

  it("lands on the live index when a page shifts it during the fade", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))

    harness.indices.set("far", 9_100)
    fade()

    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 9_100,
      align: "center",
      behavior: "auto",
    })
  })

  it("uses one continuous scroll when the destination becomes near during the fade", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    harness.from.value = 8_995

    fade()

    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 9_000,
      align: "center",
      behavior: "smooth",
    })
    expect(result.current.hidden).toBe(false)
    glideFrames()
    expect(harness.scrollBy).not.toHaveBeenCalled()
  })

  it("jumps directly when measurements disappear during the fade", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    harness.from.value = null

    fade()

    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 9_000,
      align: "center",
      behavior: "auto",
    })
    expect(result.current.hidden).toBe(false)
  })

  it("reveals without moving when the target disappears during the fade", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    harness.indices.delete("far")

    fade()

    expect(result.current.hidden).toBe(false)
    expect(harness.active.current).toBe(false)
    expect(harness.scrollToIndex).not.toHaveBeenCalled()
  })

  it("reveals the transcript when the target leaves the window while landing", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()

    harness.indices.delete("far")
    settleFrames()

    expect(result.current.hidden).toBe(false)
    // Only the hidden landing ran; nothing was stepped back or approached.
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollBy).not.toHaveBeenCalled()
  })

  it("falls back to three quarters of a viewport when the approach rows are unmeasured", () => {
    const { result, harness } = setup()
    harness.span.value = null
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    settleFrames()

    expect(harness.scrollBy).toHaveBeenCalledWith({ top: -VIEWPORT_PX * 0.75 })
  })

  it("never glides more than one viewport, however tall the approach rows", () => {
    const { result, harness } = setup()
    harness.span.value = 5_000
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    settleFrames()

    expect(harness.scrollBy).toHaveBeenCalledWith({ top: -VIEWPORT_PX })
  })

  it("reveals in place when there is nothing worth gliding", () => {
    const { result, harness } = setup()
    harness.span.value = 10
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    settleFrames()

    expect(harness.scrollBy).not.toHaveBeenCalled()
    expect(result.current.hidden).toBe(false)
    glideFrames()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.active.current).toBe(false)
  })
})

describe("useChatTeleport · jump to bottom", () => {
  it("jumps directly, then re-arms, when the transcript is not measured yet", () => {
    const { result, harness } = setup({ from: null })

    act(() => result.current.jumpToBottom())

    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    expect(harness.arrive).not.toHaveBeenCalled()
    glideFrames()
    expect(harness.arrive).toHaveBeenCalledTimes(1)
  })

  it("smoothly scrolls a nearby tail without hiding, then re-arms", () => {
    const { result, harness } = setup({ from: 9_995 })

    act(() => result.current.jumpToBottom())

    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "smooth",
    })
    glideFrames()
    expect(harness.arrive).toHaveBeenCalledTimes(1)
    expect(harness.active.current).toBe(false)
  })

  it("lands on the tail, steps back by the approach rows, then glides home", () => {
    const { result, harness } = setup()

    act(() => result.current.jumpToBottom())
    expect(result.current.hidden).toBe(true)
    expect(harness.scrollToIndex).not.toHaveBeenCalled()

    fade()
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    expect(harness.scrollTop.value).toBe(harness.bottom())

    settleFrames()
    expect(harness.scrollBy).toHaveBeenCalledWith({ top: -APPROACH_PX })
    expect(harness.scrollTop.value).toBe(harness.bottom() - APPROACH_PX)
    expect(result.current.hidden).toBe(true)

    settleFrames()
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: "LAST",
      align: "end",
      behavior: "smooth",
    })
    expect(result.current.hidden).toBe(false)
    expect(harness.arrive).not.toHaveBeenCalled()

    glideFrames()
    expect(harness.scrollTop.value).toBe(harness.bottom())
    expect(harness.arrive).toHaveBeenCalledTimes(1)
    expect(harness.active.current).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
  })

  // Virtuoso positions the landing from estimates for rows it has not mounted
  // yet, and corrects once they measure. Stepping back from the estimate would
  // build the glide on the wrong bottom.
  it("waits for the landing to reach the real bottom before stepping back", () => {
    const { result, harness } = setup()
    harness.shortfall.auto = 200
    act(() => result.current.jumpToBottom())
    fade()
    expect(harness.scrollTop.value).toBe(harness.bottom() - 200)

    // Still, but not at the bottom: keep waiting.
    runFrames(TELEPORT_STABLE_FRAMES + 2)
    expect(harness.scrollBy).not.toHaveBeenCalled()

    // Virtuoso's own correction lands.
    harness.scrollTop.value = harness.bottom()
    settleFrames()
    expect(harness.scrollBy).toHaveBeenCalledWith({ top: -APPROACH_PX })
  })

  it("steps back anyway once the landing has had its frames", () => {
    const { result, harness } = setup()
    harness.shortfall.auto = 200
    act(() => result.current.jumpToBottom())
    fade()

    runFrames(TELEPORT_SETTLE_FRAMES)
    expect(harness.scrollBy).toHaveBeenCalledTimes(1)
  })

  // The tail is live: a message can arrive during the glide, and rows the glide
  // was measured against can still grow. Virtuoso's own re-targeting is not
  // guaranteed to cover it, and a reader left a few pixels short sees neither
  // the last message nor the typing bubble.
  it("re-approaches once when the glide stops short, then snaps to the bottom", () => {
    const { result, harness } = setup()
    harness.shortfall.smooth = 40
    act(() => result.current.jumpToBottom())
    fade()
    settleFrames()
    settleFrames()
    expect(harness.scrollTop.value).toBe(harness.bottom() - 40)

    glideFrames()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(3)
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: "LAST",
      align: "end",
      behavior: "smooth",
    })
    expect(harness.arrive).not.toHaveBeenCalled()

    glideFrames()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(4)
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    expect(harness.scrollTop.value).toBe(harness.bottom())
    expect(harness.arrive).toHaveBeenCalledTimes(1)
    expect(harness.active.current).toBe(false)
  })

  it("snaps straight to the bottom when the tail moved more than a viewport during the glide", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpToBottom())
    fade()
    settleFrames()
    settleFrames()

    // A burst of arrivals lands while the glide is in flight.
    harness.rows.value += 100
    glideFrames()

    expect(harness.scrollToIndex).toHaveBeenCalledTimes(3)
    expect(harness.scrollToIndex).toHaveBeenLastCalledWith({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    expect(harness.scrollTop.value).toBe(harness.bottom())
    expect(harness.arrive).toHaveBeenCalledTimes(1)
  })

  it("does not re-arm until the motion has ended", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpToBottom())
    fade()
    settleFrames()
    settleFrames()

    for (let frame = 0; frame < TELEPORT_GLIDE_MIN_FRAMES + 3; frame += 1) {
      harness.scrollTop.value -= 1
      runFrames(1)
    }
    expect(harness.arrive).not.toHaveBeenCalled()
  })

  it("jumps straight to the tail under reduced motion, then re-arms", () => {
    const { result, harness } = setup({ reducedMotion: true })

    act(() => result.current.jumpToBottom())

    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    glideFrames()
    expect(harness.scrollBy).not.toHaveBeenCalled()
    expect(harness.arrive).toHaveBeenCalledTimes(1)
  })

  it("wins over an older message teleport already in flight", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    harness.scrollToIndex.mockClear()
    harness.scrollBy.mockClear()

    act(() => result.current.jumpToBottom())
    fade()
    settleFrames()
    settleFrames()

    expect(harness.scrollToIndex).toHaveBeenNthCalledWith(1, {
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    expect(harness.scrollBy).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenNthCalledWith(2, {
      index: "LAST",
      align: "end",
      behavior: "smooth",
    })
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
  })

  it("does not issue a stale bottom scroll after a message jump takes over", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpToBottom())
    fade()
    harness.scrollToIndex.mockClear()

    act(() => result.current.jumpTo("near", 5))
    runFrames(TELEPORT_SETTLE_FRAMES)

    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollToIndex).toHaveBeenCalledWith({
      index: 5,
      align: "center",
      behavior: "smooth",
    })
    expect(harness.arrive).not.toHaveBeenCalled()
  })
})

describe("useChatTeleport · cancellation", () => {
  it("abandons a jump in flight when the reader starts another", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()
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

    runFrames(TELEPORT_SETTLE_FRAMES)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)
    expect(harness.scrollBy).not.toHaveBeenCalled()
  })

  it("does not reveal early when a second far jump replaces the first", () => {
    const { result } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()

    act(() => result.current.jumpTo("far", 9_000))
    expect(result.current.hidden).toBe(true)

    fade()
    settleFrames()
    expect(result.current.hidden).toBe(true)
    settleFrames()
    expect(result.current.hidden).toBe(false)
  })

  it("reveals the transcript on an explicit cancel", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    expect(result.current.hidden).toBe(true)
    expect(harness.active.current).toBe(true)

    act(() => result.current.cancel())
    expect(result.current.hidden).toBe(false)
    expect(harness.active.current).toBe(false)
  })

  // The reader taking the wheel mid-glide (the container cancels on it) must
  // leave them where they are: no arrival check, no re-arm, no snap.
  it("does not verify or re-arm a bottom jump that was cancelled mid-glide", () => {
    const { result, harness } = setup()
    harness.shortfall.smooth = 40
    act(() => result.current.jumpToBottom())
    runTeleport()
    // (Fresh jump so the glide is in flight at the moment of the cancel.)
    harness.arrive.mockClear()
    harness.scrollToIndex.mockClear()
    act(() => result.current.jumpToBottom())
    fade()
    settleFrames()
    settleFrames()
    harness.scrollToIndex.mockClear()

    act(() => result.current.cancel())
    runFrames(TELEPORT_SETTLE_FRAMES)

    expect(harness.scrollToIndex).not.toHaveBeenCalled()
    expect(harness.arrive).not.toHaveBeenCalled()
    expect(harness.active.current).toBe(false)
  })

  // A window swap renumbers every row, so a jump measured against the old one
  // can only land somewhere wrong — and leaving it running would also strand
  // the transcript invisible behind a remount.
  it("abandons a jump when the window is replaced", () => {
    const { result, harness, rerender } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    harness.scrollToIndex.mockClear()

    act(() => rerender({ epoch: "c1:1" }))

    expect(result.current.hidden).toBe(false)
    expect(harness.active.current).toBe(false)
    runFrames(TELEPORT_SETTLE_FRAMES)
    expect(harness.scrollToIndex).not.toHaveBeenCalled()
    expect(harness.scrollBy).not.toHaveBeenCalled()
  })
})

describe("useChatTeleport · the fade contract", () => {
  // The hidden landing must not start before the CSS fade has finished, or
  // the reader sees the jump it is there to hide. The transition is
  // `duration-100` on the Virtuoso element in ChatMessagesContainer.
  it("waits at least as long as the fade-out transition", () => {
    expect(TELEPORT_FADE_MS).toBeGreaterThanOrEqual(100)
  })

  // The adjacent pair. Asserting only that nothing has moved "yet" passes for a
  // zero delay too, because a pending timer has not fired either way.
  it("does not land one tick before the fade is done", () => {
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

  it("reveals on the very frame the glide is issued, not one before", () => {
    const { result, harness } = setup()
    act(() => result.current.jumpTo("far", 9_000))
    fade()
    settleFrames()
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)

    runFrames(TELEPORT_STABLE_FRAMES - 1)
    expect(result.current.hidden).toBe(true)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(1)

    runFrames(1)
    expect(result.current.hidden).toBe(false)
    expect(harness.scrollToIndex).toHaveBeenCalledTimes(2)
  })
})
