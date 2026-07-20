import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
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

    it("auto-dismisses a non-persistent toast after its duration", async () => {
      renderProvider()

      act(() => {
        toasts.open({ title: "Temporary" })
      })
      expect(screen.getByText("Temporary")).toBeInTheDocument()

      // Default lifetime is 10s; advance past it.
      act(() => {
        vi.advanceTimersByTime(10_100)
      })

      await waitFor(() =>
        expect(screen.queryByText("Temporary")).not.toBeInTheDocument()
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
