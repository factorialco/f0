import { userEvent } from "@testing-library/user-event"
import { useEffect, useState } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { CoachmarkProvider } from "../CoachmarkProvider"
import { defineStepByStepCoachmarkGuidance } from "../guidance"
import { coachmarks } from "../imperative"

const walkthrough = () =>
  defineStepByStepCoachmarkGuidance({
    id: "tour",
    steps: [
      { element: "composer", title: "Ask for it" },
      { element: "feed", title: "What needs you" },
    ],
  })

/** A page whose two blocks are marked with the walkthrough's own anchors. */
const renderPage = (
  guidance: ReturnType<typeof walkthrough>,
  extra?: React.ReactNode
) =>
  render(
    <CoachmarkProvider>
      <div {...guidance.anchor("composer")}>composer</div>
      <div {...guidance.anchor("feed")}>feed</div>
      {extra}
    </CoachmarkProvider>
  )

const next = async () =>
  await userEvent.click(screen.getByRole("button", { name: "Next" }))

describe("defineStepByStepCoachmarkGuidance", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  it("marks an element with the attribute its own selector finds", () => {
    const guidance = walkthrough()
    renderPage(guidance)

    expect(
      document.querySelectorAll(guidance.selector("composer"))
    ).toHaveLength(1)
    expect(document.querySelector(guidance.selector("feed"))).toHaveTextContent(
      "feed"
    )
  })

  it("walks the anchored elements in order and completes on the last step", async () => {
    const onComplete = vi.fn()
    const guidance = defineStepByStepCoachmarkGuidance({
      steps: [
        { element: "composer", title: "Ask for it" },
        { element: "feed", title: "What needs you" },
      ],
      onComplete,
    })
    renderPage(guidance)

    act(() => {
      guidance.start()
    })

    const dialog = await screen.findByRole("dialog")
    expect(dialog).toHaveAccessibleName("Ask for it")
    expect(screen.getByText("1/2")).toBeInTheDocument()

    await next()
    await waitFor(() =>
      expect(screen.getByRole("dialog")).toHaveAccessibleName("What needs you")
    )

    await userEvent.click(screen.getByRole("button", { name: "Got it" }))
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
    expect(onComplete).toHaveBeenCalledOnce()
  })

  it("takes a step that names a target of its own", async () => {
    const guidance = defineStepByStepCoachmarkGuidance({
      steps: [
        { element: "composer", title: "Ask for it" },
        { targetElement: "#add", title: "Add a widget" },
      ],
    })
    renderPage(guidance, <button id="add">Add</button>)

    act(() => {
      guidance.start()
    })
    await screen.findByRole("dialog")
    await next()

    await waitFor(() =>
      expect(screen.getByRole("dialog")).toHaveAccessibleName("Add a widget")
    )
  })

  it("shows ONE walkthrough however many times it is started", async () => {
    const guidance = walkthrough()
    renderPage(guidance)

    act(() => {
      guidance.start()
      guidance.start()
    })

    await screen.findByRole("dialog")
    expect(screen.getAllByRole("dialog")).toHaveLength(1)

    // And the second start did not queue a copy waiting behind the first.
    await next()
    await userEvent.click(await screen.findByRole("button", { name: "Got it" }))
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
  })

  it("stops without reporting a dismissal — nobody dismissed it", async () => {
    const onDismiss = vi.fn()
    const guidance = defineStepByStepCoachmarkGuidance({
      steps: [{ element: "composer", title: "Ask for it" }],
      onDismiss,
    })
    renderPage(guidance)

    act(() => {
      guidance.start()
    })
    await screen.findByRole("dialog")

    act(() => {
      guidance.stop()
    })

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
    expect(onDismiss).not.toHaveBeenCalled()
  })

  it("spotlights and shields by default, and lets a page opt out", async () => {
    const guidance = walkthrough()
    const { unmount } = renderPage(guidance)

    act(() => {
      guidance.start()
    })
    await screen.findByRole("dialog")
    expect(document.querySelector("[data-f0-coachmark-blocker]")).not.toBeNull()

    unmount()
    coachmarks.closeAll()

    const bare = defineStepByStepCoachmarkGuidance({
      steps: [{ element: "composer", title: "Ask for it" }],
      overlay: false,
    })
    renderPage(bare)
    act(() => {
      bare.start()
    })
    await screen.findByRole("dialog")
    expect(document.querySelector("[data-f0-coachmark-blocker]")).toBeNull()
  })
})

/**
 * A step can name something that is not on the page: a control this user has no
 * permission for, a widget they removed, a block behind a flag. None of that is
 * a mistake to report — it is a walkthrough with less to say, and the reader
 * should never be able to tell there was ever another step.
 */
describe("steps whose element is not there", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  it("leaves the missing step out, and counts only the ones it kept", async () => {
    const guidance = defineStepByStepCoachmarkGuidance({
      // Nothing waits on an element that is genuinely absent in a test.
      lookForTargetsMs: 0,
      steps: [
        { element: "composer", title: "Ask for it" },
        { targetElement: "#nowhere", title: "Never mounted" },
        { element: "feed", title: "What needs you" },
      ],
    })
    renderPage(guidance)

    act(() => {
      guidance.start()
    })

    const dialog = await screen.findByRole("dialog")
    expect(dialog).toHaveAccessibleName("Ask for it")
    // 1/2, not 1/3: the count describes the walkthrough the reader is getting.
    expect(screen.getByText("1/2")).toBeInTheDocument()

    await next()

    // Straight to the third step's copy — the second one never existed.
    await waitFor(() =>
      expect(screen.getByRole("dialog")).toHaveAccessibleName("What needs you")
    )
    expect(screen.getByText("2/2")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Got it" })).toBeInTheDocument()
  })

  it("does not open at all when none of them are there", async () => {
    const onDismiss = vi.fn()
    const guidance = defineStepByStepCoachmarkGuidance({
      lookForTargetsMs: 0,
      steps: [
        { targetElement: "#nowhere", title: "Never mounted" },
        { targetElement: "#also-nowhere", title: "Nor this one" },
      ],
      onDismiss,
    })
    renderPage(guidance)

    act(() => {
      guidance.start()
    })

    // Nothing on screen, and nothing reported: there was no walkthrough to
    // dismiss, so the page carries on as if none had been asked for.
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
    expect(document.querySelector("[data-f0-coachmark-blocker]")).toBeNull()
    expect(onDismiss).not.toHaveBeenCalled()
  })

  it("waits for an element that is still on its way, then keeps its step", async () => {
    const guidance = walkthrough()

    const LateFeed = () => {
      const [mounted, setMounted] = useState(false)
      useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 120)
        return () => clearTimeout(timer)
      }, [])
      return mounted ? <div {...guidance.anchor("feed")}>feed</div> : null
    }

    render(
      <CoachmarkProvider>
        <div {...guidance.anchor("composer")}>composer</div>
        <LateFeed />
      </CoachmarkProvider>
    )

    act(() => {
      guidance.start()
    })

    // It held off rather than opening a one-step walkthrough about the composer.
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    const dialog = await screen.findByRole("dialog")
    expect(dialog).toHaveAccessibleName("Ask for it")
    expect(screen.getByText("1/2")).toBeInTheDocument()
  })

  it("calls off a walkthrough that is still looking when the page goes", async () => {
    const guidance = defineStepByStepCoachmarkGuidance({
      lookForTargetsMs: 5000,
      steps: [
        { element: "composer", title: "Ask for it" },
        { targetElement: "#nowhere", title: "Never mounted" },
      ],
    })
    const { unmount } = renderPage(guidance)

    act(() => {
      guidance.start()
    })
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    act(() => {
      guidance.stop()
    })
    unmount()

    // The poll is off: nothing opens into the page that replaced this one.
    renderPage(guidance)
    await new Promise((resolve) => setTimeout(resolve, 150))
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })
})
