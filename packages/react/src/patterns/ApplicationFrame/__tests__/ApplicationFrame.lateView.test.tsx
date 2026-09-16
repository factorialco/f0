import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { beforeEach, describe, expect, it } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { ApplicationFrame } from ".."
import { useSidePanel } from "../SidePanel/SidePanelProvider"

/**
 * A view becomes available AFTER the first render.
 *
 * This is the ordinary case, not an exotic one: `available` is meant to be fed
 * from a permission or a feature flag, and those arrive from a fetch. The frame
 * mounts with nothing available, and a moment later the answer comes back.
 *
 * The panel has to follow. It used to read the content edge once into
 * `useState`, so the late view's `side` never reached it and hosted content
 * docked opposite the conversation list for the rest of the session.
 */

const CONVERSATION = { id: "conv-1", content: <div>Barcelona office</div> }

const Probe = () => {
  const { present } = useSidePanel()
  return (
    <button type="button" onClick={() => present(CONVERSATION)}>
      open conversation
    </button>
  )
}

const LateFrame = () => {
  const [allowed, setAllowed] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setAllowed(true)}>
        grant permission
      </button>
      <ApplicationFrame
        sidebar={<nav>sidebar</nav>}
        sidePanel={{
          views: [{ id: "communications", available: allowed, side: "left" }],
        }}
      >
        <Probe />
      </ApplicationFrame>
    </>
  )
}

describe("a view that becomes available after the first render", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("docks hosted content on the side that view declared", async () => {
    const user = userEvent.setup()
    render(<LateFrame />)

    // Nothing is available yet, so there is no panel at all.
    expect(
      document.querySelectorAll("[data-side-panel-container]")
    ).toHaveLength(0)

    await user.click(screen.getByRole("button", { name: "grant permission" }))
    await user.click(screen.getByRole("button", { name: "open conversation" }))

    const conversation = await screen.findByText("Barcelona office")
    expect(
      conversation.closest("[data-side-panel-side='left']")
    ).toBeInTheDocument()
  })
})
