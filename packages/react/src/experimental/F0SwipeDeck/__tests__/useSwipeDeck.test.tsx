import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useSwipeDeck } from "../hooks/useSwipeDeck"
import type { SwipeDecision, UseSwipeDeckOptions } from "../types"

type Candidate = { id: string }

const candidates: Candidate[] = [{ id: "a" }, { id: "b" }, { id: "c" }]

const setup = (options: Partial<UseSwipeDeckOptions<Candidate>> = {}) =>
  renderHook(() =>
    useSwipeDeck<Candidate>({
      items: candidates,
      getItemId: (item) => item.id,
      ...options,
    })
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
    expect(result.current.lastDirection).toBe("right")
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

  it("returns the item to the deck when the consumer rolls the decision back", () => {
    const rollbacks: (() => void)[] = []
    const { result } = setup({
      onDecide: (_, rollback) => rollbacks.push(rollback),
    })

    act(() => result.current.swipeLeft())
    expect(result.current.current).toBe(candidates[1])

    act(() => rollbacks[0]?.())

    expect(result.current.current).toBe(candidates[0])
    expect(result.current.canUndo).toBe(false)
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
