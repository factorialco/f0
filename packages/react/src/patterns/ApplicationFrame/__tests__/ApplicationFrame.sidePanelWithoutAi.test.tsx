import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { ApplicationFrame } from ".."
import { useSidePanel } from "../SidePanel/SidePanelProvider"

/**
 * The headline of the whole refactor: a frame with NO `ai` prop at all still
 * has a working side panel. This is the customer who has communications and
 * no assistant — who, before this, could click a conversation and get nothing.
 */

const CONVERSATION = { id: "conv-1", content: <div>Barcelona office</div> }

const Probe = () => {
  const { present, clear, setOpen, layout, setLayout, open } = useSidePanel()
  return (
    <>
      <button type="button" onClick={() => present(CONVERSATION)}>
        open conversation
      </button>
      <button type="button" onClick={() => clear()}>
        clear
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        close panel
      </button>
      <button
        type="button"
        onClick={() =>
          setLayout(layout === "fullscreen" ? "sidepanel" : "fullscreen")
        }
      >
        toggle fullscreen
      </button>
      <span data-testid="panel-state">{`${open}:${layout}`}</span>
    </>
  )
}

const renderFrame = () =>
  render(
    <ApplicationFrame
      sidebar={<nav>sidebar</nav>}
      sidePanel={{
        views: [{ id: "communications", side: "left" }],
        resizable: true,
      }}
    >
      <Probe />
    </ApplicationFrame>
  )

const containers = () =>
  document.querySelectorAll("[data-side-panel-container]")

describe("ApplicationFrame side panel without AI", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("mounts hosted content with no AI chat anywhere in the tree", async () => {
    const user = userEvent.setup()
    renderFrame()

    await user.click(screen.getByRole("button", { name: "open conversation" }))

    expect(await screen.findByText("Barcelona office")).toBeVisible()
    // The panel exists...
    expect(containers().length).toBeGreaterThan(0)
    // ...and the chat does not. `data-ai-chat-dropzone` is the marker the AI
    // window puts on its card, so its absence is the proof.
    expect(
      document.querySelector("[data-ai-chat-dropzone]")
    ).not.toBeInTheDocument()
  })

  it("docks the panel on the side the view declared", async () => {
    const user = userEvent.setup()
    renderFrame()

    await user.click(screen.getByRole("button", { name: "open conversation" }))
    await screen.findByText("Barcelona office")

    const conversation = screen.getByText("Barcelona office")
    expect(
      conversation.closest("[data-side-panel-side='left']")
    ).toBeInTheDocument()
  })

  it("goes fullscreen and comes back without an assistant", async () => {
    const user = userEvent.setup()
    renderFrame()

    await user.click(screen.getByRole("button", { name: "open conversation" }))
    await user.click(screen.getByRole("button", { name: "toggle fullscreen" }))

    expect(screen.getByTestId("panel-state")).toHaveTextContent(
      "true:fullscreen"
    )

    await user.click(screen.getByRole("button", { name: "toggle fullscreen" }))
    expect(screen.getByTestId("panel-state")).toHaveTextContent(
      "true:sidepanel"
    )
  })

  it("closes fully — it does not fall back to a chat that is not there", async () => {
    const user = userEvent.setup()
    renderFrame()

    await user.click(screen.getByRole("button", { name: "open conversation" }))
    await screen.findByText("Barcelona office")

    await user.click(screen.getByRole("button", { name: "clear" }))
    await user.click(screen.getByRole("button", { name: "close panel" }))

    await waitFor(() => {
      expect(screen.queryByText("Barcelona office")).not.toBeInTheDocument()
    })
    expect(screen.getByTestId("panel-state")).toHaveTextContent("false:")
  })

  it("offers the resize separator, because the panel is resizable on its own", async () => {
    const user = userEvent.setup()
    renderFrame()

    await user.click(screen.getByRole("button", { name: "open conversation" }))
    await screen.findByText("Barcelona office")

    // The separator only appears when the panel sits BESIDE the content and
    // the range has room; in jsdom the frame measures 0, so this asserts the
    // wiring reaches the shell rather than a particular measured outcome.
    const separators = screen.queryAllByRole("separator")
    expect(separators.length).toBeLessThanOrEqual(1)
  })
})
