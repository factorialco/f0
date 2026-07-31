import { userEvent } from "@testing-library/user-event"
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

describe("toasts API", () => {
  beforeEach(() => {
    // Reset the module-level store between tests. No provider is mounted at this
    // point (the previous render was unmounted by the global afterEach cleanup).
    toasts.closeAll()
  })

  describe("open", () => {
    it("renders a toast with its title and description", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Profile updated", description: "All good" })
      })

      expect(await screen.findByText("Profile updated")).toBeInTheDocument()
      expect(screen.getByText("All good")).toBeInTheDocument()
    })

    it("returns the provided id, and generates one when omitted", () => {
      renderProvider()

      let customId = ""
      let generatedId = ""
      act(() => {
        customId = toasts.open({ title: "A", id: "my-id" })
        generatedId = toasts.open({ title: "B" })
      })

      expect(customId).toBe("my-id")
      expect(generatedId).toEqual(expect.any(String))
      expect(generatedId.length).toBeGreaterThan(0)
      expect(generatedId).not.toBe("my-id")
    })

    it("replaces a toast opened with the same id instead of duplicating it", async () => {
      renderProvider()

      act(() => {
        toasts.open({ id: "sync", title: "Syncing…" })
      })
      expect(await screen.findByText("Syncing…")).toBeInTheDocument()

      act(() => {
        toasts.open({ id: "sync", title: "Sync complete" })
      })

      expect(await screen.findByText("Sync complete")).toBeInTheDocument()
      expect(screen.queryByText("Syncing…")).not.toBeInTheDocument()
      // Only one toast is rendered (default variant uses role="status").
      expect(screen.getAllByRole("status")).toHaveLength(1)
    })

    it("renders multiple toasts at once", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "First" })
        toasts.open({ title: "Second" })
      })

      expect(await screen.findByText("First")).toBeInTheDocument()
      expect(screen.getByText("Second")).toBeInTheDocument()
    })

    it("marks the error variant as an assertive alert", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Boom", variant: "error" })
      })

      // The toast root (the element wrapping the title) is the live region.
      // Note: the error/warning/success avatar icon also carries role="alert",
      // so assert on the title's container rather than querying the role globally.
      const toast = (await screen.findByText("Boom")).closest("[aria-live]")
      expect(toast).toHaveAttribute("role", "alert")
      expect(toast).toHaveAttribute("aria-live", "assertive")
    })

    it("marks the default variant as a polite status", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Heads up" })
      })

      const toast = (await screen.findByText("Heads up")).closest("[aria-live]")
      expect(toast).toHaveAttribute("role", "status")
      expect(toast).toHaveAttribute("aria-live", "polite")
    })

    it("warns when no <F0Provider> is mounted", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      // No provider rendered in this test.
      toasts.open({ title: "Orphan" })

      expect(warn).toHaveBeenCalledTimes(1)
      expect(warn.mock.calls[0][0]).toContain("no <F0Provider>")
      warn.mockRestore()
    })
  })

  describe("close", () => {
    it("dismisses a specific toast by id and leaves the others", async () => {
      renderProvider()

      act(() => {
        toasts.open({ id: "a", title: "Toast A" })
        toasts.open({ id: "b", title: "Toast B" })
      })
      expect(await screen.findByText("Toast A")).toBeInTheDocument()

      act(() => {
        toasts.close("a")
      })

      await waitFor(() =>
        expect(screen.queryByText("Toast A")).not.toBeInTheDocument()
      )
      expect(screen.getByText("Toast B")).toBeInTheDocument()
    })

    it("is a no-op for an unknown id", async () => {
      renderProvider()

      act(() => {
        toasts.open({ id: "real", title: "Still here" })
      })
      expect(await screen.findByText("Still here")).toBeInTheDocument()

      act(() => {
        toasts.close("ghost")
      })

      expect(screen.getByText("Still here")).toBeInTheDocument()
    })
  })

  describe("closeAll", () => {
    it("dismisses every open toast", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "One" })
        toasts.open({ title: "Two" })
        toasts.open({ title: "Three" })
      })
      expect(await screen.findByText("One")).toBeInTheDocument()

      act(() => {
        toasts.closeAll()
      })

      await waitFor(() =>
        expect(screen.queryByText("One")).not.toBeInTheDocument()
      )
      expect(screen.queryByText("Two")).not.toBeInTheDocument()
      expect(screen.queryByText("Three")).not.toBeInTheDocument()
    })
  })

  describe("actions", () => {
    it("fires a button action's onClick and dismisses the toast", async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      renderProvider()

      act(() => {
        toasts.open({
          title: "Deleted",
          actions: { type: "button", label: "Undo", onClick },
        })
      })

      await user.click(await screen.findByRole("button", { name: "Undo" }))

      expect(onClick).toHaveBeenCalledTimes(1)
      await waitFor(() =>
        expect(screen.queryByText("Deleted")).not.toBeInTheDocument()
      )
    })

    it("keeps the toast open when the action sets keepOpen", async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      renderProvider()

      act(() => {
        toasts.open({
          title: "Still here",
          actions: {
            type: "button",
            label: "Refresh",
            onClick,
            keepOpen: true,
          },
        })
      })

      await user.click(await screen.findByRole("button", { name: "Refresh" }))

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(screen.getByText("Still here")).toBeInTheDocument()
    })
  })

  describe("auto-dismiss", () => {
    beforeEach(() => {
      vi.useFakeTimers({ shouldAdvanceTime: true })
    })
    afterEach(() => {
      vi.useRealTimers()
    })

    it("auto-dismisses an action-less toast after 5s, not 10s", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Temporary" })
      })
      expect(screen.getByText("Temporary")).toBeInTheDocument()

      // Still there just before 5s (would already be gone if the default were
      // shorter; would linger to 10s under the old default).
      act(() => {
        vi.advanceTimersByTime(4_800)
      })
      expect(screen.getByText("Temporary")).toBeInTheDocument()

      // Gone just after 5s.
      act(() => {
        vi.advanceTimersByTime(400)
      })
      await waitFor(() =>
        expect(screen.queryByText("Temporary")).not.toBeInTheDocument()
      )
    })

    it("gives a toast with an action a 10s window", async () => {
      renderProvider()

      act(() => {
        toasts.open({
          title: "Undo me",
          actions: { type: "button", label: "Undo", onClick: () => {} },
        })
      })
      expect(screen.getByText("Undo me")).toBeInTheDocument()

      // Alive past the 5s action-less default...
      act(() => {
        vi.advanceTimersByTime(5_100)
      })
      expect(screen.getByText("Undo me")).toBeInTheDocument()

      // ...and gone by 10s.
      act(() => {
        vi.advanceTimersByTime(5_000)
      })
      await waitFor(() =>
        expect(screen.queryByText("Undo me")).not.toBeInTheDocument()
      )
    })

    it("restarts the countdown when a toast resolves in place on the same id", async () => {
      renderProvider()

      // Open a toast and let it run down to almost nothing.
      act(() => {
        toasts.open({ id: "sync", variant: "success", title: "Saved" })
      })
      act(() => {
        vi.advanceTimersByTime(4_800)
      })

      // Resolve in place to a SAME-duration variant (both 5s, no action). The
      // replacement must get a fresh 5s, not inherit the ~200ms that was left.
      act(() => {
        toasts.open({ id: "sync", variant: "error", title: "Failed" })
      })
      expect(screen.getByText("Failed")).toBeInTheDocument()

      // Past when the old timer would have fired — it must still be here.
      act(() => {
        vi.advanceTimersByTime(1_000)
      })
      expect(screen.getByText("Failed")).toBeInTheDocument()

      // Dismisses ~5s after IT appeared.
      act(() => {
        vi.advanceTimersByTime(4_300)
      })
      await waitFor(() =>
        expect(screen.queryByText("Failed")).not.toBeInTheDocument()
      )
    })

    it("does not freeze the countdown when a hovered toast resolves in place", async () => {
      renderProvider()

      act(() => {
        toasts.open({ id: "op", variant: "error", title: "Failed to send" })
      })
      // Hover the error toast root → pauses its timer. (The critical avatar also
      // has role="alert", so target the root via the title's closest alert.)
      act(() => {
        const root = screen
          .getByText("Failed to send")
          .closest('[role="alert"]')
        fireEvent.mouseEnter(root as HTMLElement)
      })

      // Resolve in place: error → loading (no timer, so the pause can't clear via
      // the mouse handlers) → success.
      act(() => {
        toasts.open({ id: "op", variant: "loading", title: "Retrying…" })
      })
      act(() => {
        toasts.open({ id: "op", variant: "success", title: "Sent" })
      })
      expect(screen.getByText("Sent")).toBeInTheDocument()

      // The resolved toast must still count down and dismiss — it would be frozen
      // if the pause carried over from the error hover.
      act(() => {
        vi.advanceTimersByTime(5_200)
      })
      await waitFor(() =>
        expect(screen.queryByText("Sent")).not.toBeInTheDocument()
      )
    })

    it("keeps a persistent toast open indefinitely", () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Sticky", persistent: true })
      })
      expect(screen.getByText("Sticky")).toBeInTheDocument()

      act(() => {
        vi.advanceTimersByTime(60_000)
      })

      expect(screen.getByText("Sticky")).toBeInTheDocument()
    })
  })
})
