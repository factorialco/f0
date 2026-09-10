import { useState, type ReactNode } from "react"
import { beforeEach, describe, expect, it } from "vitest"
import { LinkProvider } from "@/lib/linkHandler"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"
import {
  AiChatStateProvider,
  useAiChat,
} from "../providers/AiChatStateProvider"

/** Reports the mode, and offers the two ways it changes by hand. */
const Controls = (): ReactNode => {
  const { visualizationMode, setVisualizationMode, open } = useAiChat()
  return (
    <div>
      <span data-testid="mode">{visualizationMode}</span>
      <span data-testid="open">{String(open)}</span>
      <button type="button" onClick={() => setVisualizationMode("fullscreen")}>
        go-fullscreen
      </button>
    </div>
  )
}

/** A host with a router: the path changes, as it does in the product. */
const Host = ({ initialPath = "/home" }: { initialPath?: string }) => {
  const [path, setPath] = useState(initialPath)
  // A real re-render with the path UNCHANGED. It has to be its own state:
  // `setPath(path)` would hand React the same value and React would bail out
  // of the render entirely, so the test would pass without ever exercising
  // the effect it is about.
  const [, bumpRender] = useState(0)
  return (
    <LinkProvider currentPath={path}>
      <AiChatStateProvider enabled chatMessages={<div>CHAT</div>}>
        <button type="button" onClick={() => setPath("/time-off")}>
          navigate
        </button>
        <button type="button" onClick={() => bumpRender((n) => n + 1)}>
          re-render
        </button>
        <Controls />
      </AiChatStateProvider>
    </LinkProvider>
  )
}

const mode = () => screen.getByTestId("mode").textContent

describe("navigating out of a fullscreen panel", () => {
  beforeEach(() => {
    // The mode is persisted; a leftover "fullscreen" would decide the test.
    localStorage.clear()
  })

  it("docks the panel when the route changes", async () => {
    // A fullscreen panel covers the page it is meant to sit beside, so every
    // link in it lands somewhere the reader cannot see.
    render(<Host />)

    await userEvent.click(screen.getByText("go-fullscreen"))
    expect(mode()).toBe("fullscreen")

    await userEvent.click(screen.getByText("navigate"))

    expect(mode()).toBe("sidepanel")
    // Docked, NOT closed: nothing the reader had open is taken away.
    expect(screen.getByTestId("open").textContent).toBe("true")
  })

  it("leaves a docked panel alone", async () => {
    render(<Host />)
    expect(mode()).toBe("sidepanel")

    await userEvent.click(screen.getByText("navigate"))

    expect(mode()).toBe("sidepanel")
  })

  it("stays fullscreen when the path has not actually changed", async () => {
    render(<Host />)
    await userEvent.click(screen.getByText("go-fullscreen"))

    await userEvent.click(screen.getByText("re-render"))

    expect(mode()).toBe("fullscreen")
  })

  it("stays fullscreen on arrival, which is not navigation", async () => {
    // Landing on a route with the panel already fullscreen — a reload, a deep
    // link — must not undo what the reader last chose.
    //
    // Both keys: a closed panel is reset to "sidepanel" on mount by design
    // (see the `!open` effect), so restoring only the mode would prove nothing.
    localStorage.setItem("ONE-ai-chat-open", JSON.stringify(true))
    localStorage.setItem(
      "ONE-ai-chat-visualization-mode",
      JSON.stringify("fullscreen")
    )

    render(<Host initialPath="/time-off" />)

    expect(mode()).toBe("fullscreen")
  })

  it("does nothing at all without a router", async () => {
    // A standalone chat has no routes to follow, and `currentPath` is
    // undefined — the effect must not read that as a navigation.
    render(
      <AiChatStateProvider enabled chatMessages={<div>CHAT</div>}>
        <Controls />
      </AiChatStateProvider>
    )

    await userEvent.click(screen.getByText("go-fullscreen"))

    expect(mode()).toBe("fullscreen")
  })
})
