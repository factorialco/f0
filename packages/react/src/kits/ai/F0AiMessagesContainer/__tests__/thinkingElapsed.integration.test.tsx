import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  CLOCKS_ONLY,
  screen,
  zeroRender as render,
} from "@/testing/test-utils"

import { F0AiMessagesContainer } from "../F0AiMessagesContainer"
import { type RenderableTurn } from "../types"

const START = new Date("2026-01-01T10:00:00Z").getTime()

/**
 * Advance the clock so it lands in the MIDDLE of `seconds`, never on its edge.
 *
 * The rendered integer is `Math.floor(elapsed / 1000)`, which changes exactly
 * on the tick. Stopping there makes the assertion depend on whether the
 * interval callback happened to run first — deterministic on an idle machine,
 * a coin flip under a loaded test suite.
 */
const advanceTo = (seconds: number) => {
  const target = seconds * 1000 + 500
  act(() => {
    vi.advanceTimersByTime(target - (Date.now() - START))
  })
}

const userTurn = (extra: Partial<RenderableTurn>): RenderableTurn[] => [
  {
    userMessages: [{ id: "u1", role: "user", content: "hey" }],
    assistantMessages: [],
    isInProgress: true,
    ...extra,
  },
]

/** No steps yet — the standalone "Thinking…" item. */
const PHASE_THINKING = userTurn({ endIndicator: "thinking" })

/** Steps have arrived; the last one is executing. */
const PHASE_STEPS = userTurn({
  thinking: { titles: ["Reading the pipeline"], inProgress: true },
})

/** A second step took over as the active one. */
const PHASE_STEPS_2 = userTurn({
  thinking: {
    titles: ["Reading the pipeline", "Comparing departments"],
    inProgress: true,
  },
})

describe("elapsed counter across a turn", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: CLOCKS_ONLY })
    vi.setSystemTime(START)
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it("keeps counting as the active item moves down the turn", () => {
    // The requirement. The indicator is three different components over the
    // life of one turn; a timer owned by any of them restarts on every
    // hand-off, which is what this asserts against.
    const { rerender } = render(
      <F0AiMessagesContainer turns={PHASE_THINKING} />
    )

    advanceTo(3)
    expect(screen.getByText("3s")).toBeInTheDocument()

    // "Thinking…" gives way to the reasoning list.
    rerender(<F0AiMessagesContainer turns={PHASE_STEPS} />)
    advanceTo(6)
    expect(screen.getByText("6s")).toBeInTheDocument()

    // …and the active step gives way to the next one.
    rerender(<F0AiMessagesContainer turns={PHASE_STEPS_2} />)
    advanceTo(9)
    expect(screen.getByText("9s")).toBeInTheDocument()
    expect(screen.getAllByText(/^\d+s$/)).toHaveLength(1)
  })

  it("drops the counter when the turn finishes", () => {
    const { rerender } = render(<F0AiMessagesContainer turns={PHASE_STEPS} />)
    advanceTo(5)
    expect(screen.getByText("5s")).toBeInTheDocument()

    rerender(
      <F0AiMessagesContainer
        turns={userTurn({
          thinking: { titles: ["Reading the pipeline"], inProgress: false },
          assistantMessages: [
            { id: "a1", role: "assistant", content: "Done." },
          ],
          isInProgress: false,
        })}
      />
    )
    advanceTo(7)
    expect(screen.queryByText(/^\d+s$/)).not.toBeInTheDocument()
  })

  it("restarts from zero on the next turn", () => {
    const { rerender } = render(<F0AiMessagesContainer turns={PHASE_STEPS} />)
    advanceTo(7)
    expect(screen.getByText("7s")).toBeInTheDocument()

    // Turn closes…
    rerender(
      <F0AiMessagesContainer
        turns={userTurn({
          thinking: { titles: ["Reading the pipeline"], inProgress: false },
          isInProgress: false,
        })}
      />
    )
    advanceTo(27)

    // …and a fresh one opens. The previous total must not carry over.
    // The new clock seals at 27.5s absolute, so 29.5 puts it 2.5s in — mid
    // second on the clock that is actually being read.
    rerender(<F0AiMessagesContainer turns={PHASE_THINKING} />)
    advanceTo(29.5)
    expect(screen.getByText("2s")).toBeInTheDocument()
  })

  it("honours a host-supplied start time", () => {
    render(
      <F0AiMessagesContainer
        turns={userTurn({
          thinking: {
            titles: ["Reading the pipeline"],
            inProgress: true,
            startedAt: START - 30_000,
          },
        })}
      />
    )
    advanceTo(1)
    expect(screen.getByText("31s")).toBeInTheDocument()
  })
})
