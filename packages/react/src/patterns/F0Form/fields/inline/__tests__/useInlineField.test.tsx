import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useInlineField } from "../useInlineField"

/**
 * The focus restore waits a frame. Awaited outside `act` on purpose: an async
 * `act` here leaves React's act queue open and the next `renderHook` in the
 * file never flushes its effects, so `result.current` reads back as null.
 */
function flushFrame() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
}

describe("useInlineField", () => {
  it("starts reading and enters editing on activate", () => {
    const { result } = renderHook(() =>
      useInlineField({ readValue: () => "a", restoreValue: vi.fn() })
    )

    expect(result.current.editing).toBe(false)
    act(() => result.current.activate?.())
    expect(result.current.editing).toBe(true)
  })

  it.each(["blur", "commit", "popupClose"] as const)(
    "leaves editing on %s and keeps the draft",
    (reason) => {
      const restoreValue = vi.fn()
      const { result } = renderHook(() =>
        useInlineField({ readValue: () => "a", restoreValue })
      )

      act(() => result.current.activate?.())
      act(() => result.current.dismiss(reason))

      expect(result.current.editing).toBe(false)
      expect(restoreValue).not.toHaveBeenCalled()
    }
  )

  it("puts the value back to its activation snapshot on escape", () => {
    const restoreValue = vi.fn()
    let current = "before"
    const { result } = renderHook(() =>
      useInlineField({ readValue: () => current, restoreValue })
    )

    act(() => result.current.activate?.())
    current = "after"
    act(() => result.current.dismiss("escape"))

    expect(restoreValue).toHaveBeenCalledWith("before")
    expect(result.current.editing).toBe(false)
  })

  it("stays editing when the field has a validation error", () => {
    const restoreValue = vi.fn()
    const { result, rerender } = renderHook(
      ({ hasError }: { hasError: boolean }) =>
        useInlineField({ hasError, readValue: () => "a", restoreValue }),
      { initialProps: { hasError: false } }
    )

    act(() => result.current.activate?.())
    rerender({ hasError: true })
    act(() => result.current.dismiss("blur"))

    expect(result.current.editing).toBe(true)
    expect(restoreValue).not.toHaveBeenCalled()

    rerender({ hasError: false })
    act(() => result.current.dismiss("blur"))
    expect(result.current.editing).toBe(false)
  })

  it("restores focus to the activator one frame after the edit ends", async () => {
    const { result } = renderHook(() =>
      useInlineField({ readValue: () => "a", restoreValue: vi.fn() })
    )

    const activator = document.createElement("div")
    activator.tabIndex = 0
    document.body.appendChild(activator)
    // @ts-expect-error -- the hook owns the ref; the row is what fills it.
    result.current.activatorRef.current = activator

    act(() => result.current.activate?.())
    act(() => result.current.dismiss("commit"))

    expect(document.activeElement).not.toBe(activator)
    await flushFrame()
    expect(document.activeElement).toBe(activator)

    activator.remove()
  })

  it("tolerates a null activator ref", async () => {
    const { result } = renderHook(() =>
      useInlineField({ readValue: () => "a", restoreValue: vi.fn() })
    )

    act(() => result.current.activate?.())
    act(() => result.current.dismiss("commit"))
    await flushFrame()
    expect(result.current.editing).toBe(false)
  })

  it("offers no activate and never edits when the field is not editable", () => {
    const { result } = renderHook(() =>
      useInlineField({
        editable: false,
        readValue: () => "a",
        restoreValue: vi.fn(),
      })
    )

    expect(result.current.activate).toBeUndefined()
    expect(result.current.editing).toBe(false)
  })

  it("drops out of editing when the field stops being editable", () => {
    const { result, rerender } = renderHook(
      ({ editable }: { editable: boolean }) =>
        useInlineField({
          editable,
          readValue: () => "a",
          restoreValue: vi.fn(),
        }),
      { initialProps: { editable: true } }
    )

    act(() => result.current.activate?.())
    expect(result.current.editing).toBe(true)

    rerender({ editable: false })
    expect(result.current.editing).toBe(false)
  })
})
