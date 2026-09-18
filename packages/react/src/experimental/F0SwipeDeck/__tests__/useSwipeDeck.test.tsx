import { describe, expect, it, vi } from "vitest"
import { act, renderHook } from "@/testing/test-utils"
import { useSwipeDeck } from "../hooks/useSwipeDeck"
import type { SwipeDecision, UseSwipeDeckOptions } from "../types"

type Candidate = { id: string }

const candidates: Candidate[] = [{ id: "a" }, { id: "b" }, { id: "c" }]

const setup = (options: Partial<UseSwipeDeckOptions<Candidate>> = {}) =>
  renderHook(
    (props: Partial<UseSwipeDeckOptions<Candidate>> = options) =>
      useSwipeDeck<Candidate>({
        items: candidates,
        getItemId: (item) => item.id,
        ...options,
        ...props,
      }),
    { initialProps: options }
  )

describe("useSwipeDeck", () => {
  it("starts on the first item", () => {
    const { result } = setup()

    expect(result.current.current).toBe(candidates[0])
    expect(result.current.index).toBe(0)
    expect(result.current.total).toBe(3)
    expect(result.current.canUndo).toBe(false)
  })

  it("advances to the next item and reports the decision", () => {
    const onDecide = vi.fn()
    const { result } = setup({ onDecide })

    act(() => result.current.swipeRight())

    expect(onDecide).toHaveBeenCalledTimes(1)
    expect(onDecide.mock.calls[0]?.[0]).toEqual({
      item: candidates[0],
      direction: "right",
    } satisfies SwipeDecision<Candidate>)
    expect(result.current.current).toBe(candidates[1])
    expect(result.current.remaining).toBe(2)
    expect(result.current.lastAction).toEqual({
      type: "decide",
      direction: "right",
    })
  })

  it("decides an item once, however fast the decisions arrive", () => {
    const onDecide = vi.fn()
    const { result } = setup({ onDecide })

    act(() => {
      result.current.swipeRight()
      result.current.swipeRight()
    })

    expect(onDecide).toHaveBeenCalledTimes(1)
    expect(result.current.index).toBe(1)
  })

  it("puts the item back on top when the latest decision is rolled back", () => {
    const rollbacks: (() => void)[] = []
    const { result } = setup({
      onDecide: (_, rollback) => rollbacks.push(rollback),
    })

    act(() => result.current.swipeLeft())
    expect(result.current.current).toBe(candidates[1])

    act(() => rollbacks[0]?.())

    expect(result.current.current).toBe(candidates[0])
    expect(result.current.canUndo).toBe(false)
    expect(result.current.lastAction).toEqual({ type: "rollback" })
  })

  it("re-queues the item at the end when the user has already moved on", () => {
    const rollbacks: (() => void)[] = []
    const { result } = setup({
      onDecide: (_, rollback) => rollbacks.push(rollback),
    })

    act(() => result.current.swipeRight())
    act(() => result.current.swipeRight())
    act(() => rollbacks[0]?.())

    expect(result.current.current).toBe(candidates[2])
    expect(result.current.remaining).toBe(2)
    expect(result.current.total).toBe(4)

    act(() => result.current.swipeRight())

    expect(result.current.current).toBe(candidates[0])
  })

  it("lets a re-queued item be decided again", () => {
    const decided: Candidate[] = []
    const rollbacks: (() => void)[] = []
    const { result } = setup({
      onDecide: ({ item }, rollback) => {
        decided.push(item)
        rollbacks.push(rollback)
      },
    })

    act(() => result.current.swipeRight())
    act(() => result.current.swipeRight())
    act(() => rollbacks[0]?.())
    act(() => result.current.swipeRight())
    act(() => result.current.swipeLeft())

    expect(decided).toEqual([
      candidates[0],
      candidates[1],
      candidates[2],
      candidates[0],
    ])
    expect(result.current.current).toBeUndefined()
  })

  it("undoes the last decision and hands the item back", () => {
    const onUndo = vi.fn()
    const { result } = setup({ onUndo })

    act(() => result.current.swipeRight())
    expect(result.current.canUndo).toBe(true)

    act(() => result.current.undo())

    expect(onUndo).toHaveBeenCalledWith(candidates[0])
    expect(result.current.current).toBe(candidates[0])
    expect(result.current.canUndo).toBe(false)
    expect(result.current.lastAction).toEqual({ type: "undo" })
  })

  it("keeps only `undoDepth` decisions", () => {
    const { result } = setup({ undoDepth: 1 })

    act(() => result.current.swipeRight())
    act(() => result.current.swipeLeft())
    act(() => result.current.undo())

    expect(result.current.current).toBe(candidates[1])
    expect(result.current.canUndo).toBe(false)
  })

  it("asks for more items once the remaining ones reach the threshold", () => {
    const onNeedMore = vi.fn()
    const { result } = setup({ onNeedMore, needMoreThreshold: 2 })

    expect(onNeedMore).not.toHaveBeenCalled()

    act(() => result.current.swipeRight())
    expect(onNeedMore).toHaveBeenCalledTimes(1)

    act(() => result.current.swipeRight())
    expect(onNeedMore).toHaveBeenCalledTimes(1)
  })

  it("does not ask for more items before the first page has loaded", () => {
    const onNeedMore = vi.fn()
    setup({ items: [], onNeedMore })

    expect(onNeedMore).not.toHaveBeenCalled()
  })

  it("asks again once appended items have been reviewed", () => {
    const onNeedMore = vi.fn()
    const { result, rerender } = setup({
      items: candidates.slice(0, 1),
      onNeedMore,
      needMoreThreshold: 1,
    })

    act(() => result.current.swipeRight())
    expect(onNeedMore).toHaveBeenCalledTimes(1)

    rerender({ items: candidates, onNeedMore, needMoreThreshold: 1 })
    expect(result.current.current).toBe(candidates[1])

    act(() => result.current.swipeRight())
    expect(onNeedMore).toHaveBeenCalledTimes(2)
  })

  it("does nothing once every item has been decided", () => {
    const onDecide = vi.fn()
    const { result } = setup({ items: [candidates[0]!], onDecide })

    act(() => result.current.swipeRight())
    act(() => result.current.swipeRight())

    expect(onDecide).toHaveBeenCalledTimes(1)
    expect(result.current.current).toBeUndefined()
    expect(result.current.remaining).toBe(0)
  })
})
