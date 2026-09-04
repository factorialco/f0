import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { CoachmarkProvider } from "../CoachmarkProvider"
import { coachmarks } from "../imperative"

/** An app with two elements a coachmark can point at. */
const renderApp = () =>
  render(
    <CoachmarkProvider>
      <button id="filters">Filters</button>
      <button id="views">Views</button>
      <button id="outside">Outside</button>
    </CoachmarkProvider>
  )

const open = (
  options: Parameters<typeof coachmarks.open>[0]
): string | undefined => {
  let id: string | undefined
  act(() => {
    id = coachmarks.open(options)
  })
  return id
}

describe("coachmarks API", () => {
  beforeEach(() => {
    // Reset the module-level store between tests. No provider is mounted at this
    // point (the previous render was unmounted by the global afterEach cleanup).
    coachmarks.closeAll()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("open", () => {
    it("shows a coachmark anchored to a selector", async () => {
      renderApp()

      open({
        targetElement: "#filters",
        title: "Filters got smarter",
        description: "Stack filters on jobs and candidates.",
      })

      const dialog = await screen.findByRole("dialog")
      expect(dialog).toHaveAccessibleName("Filters got smarter")
      expect(dialog).toHaveAccessibleDescription(
        "Stack filters on jobs and candidates."
      )
    })

    it("takes any CSS selector — an id, a class, an attribute", async () => {
      render(
        <CoachmarkProvider>
          <button className="js-filters">Filters</button>
          <button data-add-widget="right">Add widget</button>
        </CoachmarkProvider>
      )

      open({ targetElement: ".js-filters", title: "By class" })
      await waitFor(() =>
        expect(screen.getByRole("dialog")).toHaveAccessibleName("By class")
      )

      coachmarks.closeAll()
      open({
        targetElement: '[data-add-widget="right"]',
        title: "By attribute",
      })
      await waitFor(() =>
        expect(screen.getByRole("dialog")).toHaveAccessibleName("By attribute")
      )
    })

    it("accepts an element instead of a selector", async () => {
      renderApp()

      open({
        targetElement: screen.getByRole("button", { name: "Filters" }),
        title: "Filters got smarter",
      })

      expect(await screen.findByRole("dialog")).toBeInTheDocument()
    })

    it("returns the provided id, and generates one when omitted", () => {
      renderApp()

      const custom = open({ targetElement: "#filters", title: "A", id: "mine" })
      const generated = open({ targetElement: "#views", title: "B" })

      expect(custom).toBe("mine")
      expect(generated).toEqual(expect.any(String))
      expect(generated).not.toBe("mine")
    })

    it("replaces a coachmark opened with the same id instead of queueing it twice", async () => {
      renderApp()

      open({ targetElement: "#filters", title: "First", id: "same" })
      expect(await screen.findByText("First")).toBeInTheDocument()

      open({ targetElement: "#filters", title: "Second", id: "same" })

      expect(await screen.findByText("Second")).toBeInTheDocument()
      expect(screen.queryByText("First")).not.toBeInTheDocument()

      // One replacement, not two queued: closing it leaves nothing behind.
      await userEvent.click(screen.getByRole("button", { name: "Close" }))
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    it("warns when no provider is mounted", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      coachmarks.open({ targetElement: "#filters", title: "Nowhere to render" })

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("no <F0Provider> is mounted")
      )
    })
  })

  describe("target resolution", () => {
    it("waits for a target that mounts later, then shows the coachmark", async () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      const App = () => {
        const [mounted, setMounted] = useState(false)
        return (
          <CoachmarkProvider>
            <button onClick={() => setMounted(true)}>Mount target</button>
            {mounted && <button id="late">Late</button>}
          </CoachmarkProvider>
        )
      }
      render(<App />)

      open({ targetElement: "#late", title: "Waits for its target" })

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('no element matches the selector "#late"')
      )

      await userEvent.click(
        screen.getByRole("button", { name: "Mount target" })
      )

      expect(await screen.findByRole("dialog")).toBeInTheDocument()
    })

    it("hides the coachmark when its target goes away, and shows it again when it returns", async () => {
      const App = () => {
        const [mounted, setMounted] = useState(true)
        return (
          <CoachmarkProvider>
            <button onClick={() => setMounted((value) => !value)}>
              Toggle target
            </button>
            {mounted && <button id="toggling">Toggling</button>}
          </CoachmarkProvider>
        )
      }
      render(<App />)

      open({ targetElement: "#toggling", title: "Anchored" })
      expect(await screen.findByRole("dialog")).toBeInTheDocument()

      const toggle = screen.getByRole("button", { name: "Toggle target" })

      await userEvent.click(toggle)
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )

      await userEvent.click(toggle)
      expect(await screen.findByRole("dialog")).toBeInTheDocument()
    })

    it("anchors to the first match and warns when a selector is ambiguous", async () => {
      render(
        <CoachmarkProvider>
          <button className="ambiguous">One</button>
          <button className="ambiguous">Two</button>
        </CoachmarkProvider>
      )
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

      open({ targetElement: ".ambiguous", title: "Ambiguous" })

      expect(await screen.findByRole("dialog")).toBeInTheDocument()
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("matched 2 elements")
      )
    })
  })

  describe("dismissal", () => {
    it("closes itself when the close button is pressed, with no onDismiss passed", async () => {
      renderApp()
      open({ targetElement: "#filters", title: "Filters got smarter" })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Close" }))

      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    it("reports the dismissal to onDismiss, and still closes", async () => {
      const onDismiss = vi.fn()
      renderApp()
      open({
        targetElement: "#filters",
        title: "Filters got smarter",
        onDismiss,
      })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Close" }))

      expect(onDismiss).toHaveBeenCalledTimes(1)
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    it("closes on Escape", async () => {
      const onDismiss = vi.fn()
      renderApp()
      open({
        targetElement: "#filters",
        title: "Filters got smarter",
        onDismiss,
      })
      await screen.findByRole("dialog")

      await userEvent.keyboard("{Escape}")

      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
      expect(onDismiss).toHaveBeenCalledTimes(1)
    })

    it("does not close when clicking outside", async () => {
      const onDismiss = vi.fn()
      renderApp()
      open({
        targetElement: "#filters",
        title: "Filters got smarter",
        onDismiss,
      })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Outside" }))

      expect(onDismiss).not.toHaveBeenCalled()
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    })

    it("moves focus to the panel on open and restores it on dismissal", async () => {
      renderApp()
      const anchor = screen.getByRole("button", { name: "Filters" })
      anchor.focus()

      open({ targetElement: "#filters", title: "Filters got smarter" })

      const dialog = await screen.findByRole("dialog")
      await waitFor(() => expect(dialog).toHaveFocus())

      await userEvent.click(screen.getByRole("button", { name: "Close" }))

      await waitFor(() => expect(anchor).toHaveFocus())
    })
  })

  describe("action", () => {
    it("labels the action Got it and closes on it, reporting to onComplete", async () => {
      const onClick = vi.fn()
      const onComplete = vi.fn()
      const onDismiss = vi.fn()
      renderApp()

      open({
        targetElement: "#filters",
        title: "Filters got smarter",
        action: { onClick },
        onComplete,
        onDismiss,
      })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Got it" }))

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onComplete).toHaveBeenCalledTimes(1)
      expect(onDismiss).not.toHaveBeenCalled()
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    it("uses a custom action label when one is given", async () => {
      renderApp()

      open({
        targetElement: "#filters",
        title: "Filters got smarter",
        action: { label: "Learn more" },
      })

      expect(
        await screen.findByRole("button", { name: "Learn more" })
      ).toBeInTheDocument()
    })

    it("shows no step indicator for a single coachmark", async () => {
      renderApp()

      open({ targetElement: "#filters", title: "Filters got smarter" })
      const dialog = await screen.findByRole("dialog")

      expect(dialog).not.toHaveTextContent("1/1")
    })
  })

  describe("steps", () => {
    it("advances through the sequence and closes on the last step", async () => {
      const onComplete = vi.fn()
      const first = vi.fn()
      renderApp()

      open({
        steps: [
          {
            targetElement: "#filters",
            title: "Start with a filter",
            action: { onClick: first },
          },
          { targetElement: "#views", title: "Then save it as a view" },
        ],
        onComplete,
      })

      const dialog = await screen.findByRole("dialog")
      expect(dialog).toHaveTextContent("1/2")
      expect(dialog).toHaveAccessibleName("Start with a filter")

      // Not the last step, so the action moves on rather than ending.
      await userEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(first).toHaveBeenCalledTimes(1)
      await waitFor(() =>
        expect(screen.getByRole("dialog")).toHaveAccessibleName(
          "Then save it as a view"
        )
      )
      expect(screen.getByRole("dialog")).toHaveTextContent("2/2")
      expect(onComplete).not.toHaveBeenCalled()

      // Focus comes back to the panel rather than staying on the action, so the
      // new copy is announced and a second Enter cannot fire it unread.
      await waitFor(() => expect(screen.getByRole("dialog")).toHaveFocus())

      await userEvent.click(screen.getByRole("button", { name: "Got it" }))

      expect(onComplete).toHaveBeenCalledTimes(1)
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    it("abandons the whole sequence when a step is dismissed", async () => {
      const onDismiss = vi.fn()
      const onComplete = vi.fn()
      renderApp()

      open({
        targetElement: "#filters",
        steps: [{ title: "One" }, { title: "Two" }],
        onDismiss,
        onComplete,
      })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Close" }))

      expect(onDismiss).toHaveBeenCalledTimes(1)
      expect(onComplete).not.toHaveBeenCalled()
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    it("waits mid-sequence when the next step's target is missing", async () => {
      vi.spyOn(console, "warn").mockImplementation(() => {})
      renderApp()

      open({
        steps: [
          { targetElement: "#filters", title: "One" },
          { targetElement: "#not-there", title: "Two" },
        ],
      })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Next" }))

      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })
  })

  describe("queue", () => {
    it("shows one coachmark at a time, in the order they were opened", async () => {
      renderApp()

      open({ targetElement: "#filters", title: "First in" })
      open({ targetElement: "#views", title: "Second in" })

      expect(await screen.findByText("First in")).toBeInTheDocument()
      expect(screen.queryByText("Second in")).not.toBeInTheDocument()
      expect(screen.getAllByRole("dialog")).toHaveLength(1)

      await userEvent.click(screen.getByRole("button", { name: "Close" }))

      expect(await screen.findByText("Second in")).toBeInTheDocument()
      expect(screen.getAllByRole("dialog")).toHaveLength(1)
    })

    it("restarts at the first step of the coachmark that takes over", async () => {
      renderApp()

      open({
        targetElement: "#filters",
        steps: [{ title: "A1" }, { title: "A2" }],
      })
      open({
        targetElement: "#views",
        steps: [{ title: "B1" }, { title: "B2" }],
      })

      await screen.findByText("A1")
      await userEvent.click(screen.getByRole("button", { name: "Next" }))
      await screen.findByText("A2")
      await userEvent.click(screen.getByRole("button", { name: "Got it" }))

      expect(await screen.findByText("B1")).toBeInTheDocument()
      expect(screen.getByRole("dialog")).toHaveTextContent("1/2")
    })
  })

  describe("close and closeAll", () => {
    it("closes the one on screen and promotes the next", async () => {
      renderApp()

      const first = open({ targetElement: "#filters", title: "First in" })
      open({ targetElement: "#views", title: "Second in" })
      await screen.findByText("First in")

      act(() => coachmarks.close(first!))

      expect(await screen.findByText("Second in")).toBeInTheDocument()
    })

    it("closes a queued coachmark that never reached the screen", async () => {
      renderApp()

      open({ targetElement: "#filters", title: "First in" })
      const second = open({ targetElement: "#views", title: "Second in" })
      await screen.findByText("First in")

      act(() => coachmarks.close(second!))
      await userEvent.click(screen.getByRole("button", { name: "Close" }))

      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
      expect(screen.queryByText("Second in")).not.toBeInTheDocument()
    })

    it("clears the queue, screen included", async () => {
      renderApp()

      open({ targetElement: "#filters", title: "First in" })
      open({ targetElement: "#views", title: "Second in" })
      await screen.findByText("First in")

      act(() => coachmarks.closeAll())

      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })
  })

  // The store is global: without the election in place, both providers would
  // render the head and the user would see the same panel twice.
  it("renders a single panel when two providers are mounted", async () => {
    render(
      <>
        <CoachmarkProvider>
          <button id="filters">Filters</button>
        </CoachmarkProvider>
        <CoachmarkProvider>
          <div />
        </CoachmarkProvider>
      </>
    )

    open({ targetElement: "#filters", title: "Only once" })

    await screen.findByRole("dialog")
    expect(screen.getAllByRole("dialog")).toHaveLength(1)
  })
})
