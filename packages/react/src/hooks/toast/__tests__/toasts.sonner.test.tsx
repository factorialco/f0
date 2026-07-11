import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  fireEvent,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { toasts } from "../imperative"
import { ToastProvider } from "../ToastProvider"

const renderProvider = () =>
  render(
    <ToastProvider>
      <div data-testid="app" />
    </ToastProvider>
  )

/**
 * Pins the sonner behaviors the f0 toast engine relies on, so a future sonner
 * upgrade that changes them fails loudly here instead of in the app.
 */
describe("toasts sonner engine", () => {
  beforeEach(() => {
    toasts.closeAll()
  })

  it("renders every toast at the toaster's full width, not sized to content", async () => {
    renderProvider()

    act(() => {
      toasts.open({ title: "Hi" })
      toasts.open({ title: "A much longer toast title with more content" })
    })
    expect(await screen.findByText("Hi")).toBeInTheDocument()

    // Custom (jsx) toasts are unstyled in sonner, so without the explicit
    // width they shrink to their content and the stack looks ragged.
    const items = document.querySelectorAll<HTMLElement>("[data-sonner-toast]")
    expect(items.length).toBe(2)
    for (const item of items) {
      expect(item.style.width).toBe("100%")
    }
  })

  it("re-opens a toast with the same id after it was closed", async () => {
    renderProvider()

    act(() => {
      toasts.open({ id: "job", title: "Job started" })
    })
    expect(await screen.findByText("Job started")).toBeInTheDocument()

    act(() => {
      toasts.close("job")
    })
    await waitFor(() =>
      expect(screen.queryByText("Job started")).not.toBeInTheDocument()
    )

    // Sonner tracks dismissed ids; re-creating with the same id must clear
    // that flag and render again.
    act(() => {
      toasts.open({ id: "job", title: "Job finished" })
    })
    expect(await screen.findByText("Job finished")).toBeInTheDocument()
  })

  describe("timers", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true })
    })
    afterEach(() => {
      vi.useRealTimers()
    })

    it("honors an explicit duration", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Short-lived", duration: 1000 })
      })
      expect(await screen.findByText("Short-lived")).toBeInTheDocument()

      act(() => {
        vi.advanceTimersByTime(1_100)
      })

      await waitFor(() =>
        expect(screen.queryByText("Short-lived")).not.toBeInTheDocument()
      )
    })

    it("pauses every toast's countdown while the stack is hovered", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Paused on hover" })
      })
      expect(await screen.findByText("Paused on hover")).toBeInTheDocument()

      // Hover the sonner list (not the toast itself): the pause must come from
      // the stack-level wrapper via ToastTimerPauseContext.
      const toaster = document.querySelector(
        "[data-sonner-toaster]"
      ) as HTMLElement
      fireEvent.mouseOver(toaster)

      // Well past the 10s default lifetime — still open while hovered.
      act(() => {
        vi.advanceTimersByTime(15_000)
      })
      expect(screen.getByText("Paused on hover")).toBeInTheDocument()

      // Leave the stack: the countdown resumes and the toast auto-dismisses.
      fireEvent.mouseOut(toaster)
      act(() => {
        vi.advanceTimersByTime(10_100)
      })
      await waitFor(() =>
        expect(screen.queryByText("Paused on hover")).not.toBeInTheDocument()
      )
    })
  })
})
