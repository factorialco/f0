import { act } from "react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import {
  zeroRender as render,
  resetTestViewport,
  screen,
  setTestViewport,
} from "@/testing/test-utils"

import { ApplicationFrame } from ".."
import { useSidebar } from "../FrameProvider"

const SIDEBAR_KEY = "one_sidebar_locked"

const Probe = () => {
  const { sidebarState, toggleSidebar } = useSidebar()
  const { setOpen } = useAiChat()
  return (
    <div>
      <span>state:{sidebarState}</span>
      <button type="button" onClick={() => toggleSidebar()}>
        toggle
      </button>
      <button type="button" onClick={() => setOpen(true)}>
        open-chat
      </button>
    </div>
  )
}

const clickToggle = async () => {
  await act(async () => {
    screen.getByText("toggle").click()
  })
}

const renderFrame = (chatSide: "left" | "right" = "right") =>
  render(
    <ApplicationFrame
      ai={{ enabled: true, side: chatSide, chatMessages: <div>AI CHAT</div> }}
      sidebar={<div>SIDEBAR BODY</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

const state = () => screen.getByText(/^state:/).textContent

/** The skip link, wherever it lives in the tree. */
const skipLink = (): HTMLElement => {
  const link = document.querySelector<HTMLElement>('a[href="#content"]')
  if (!link) throw new Error("skip link not found")
  return link
}

/** Walks up looking for an `inert` ancestor — what actually kills focusability. */
const isInInertRegion = (element: HTMLElement): boolean => {
  let node: HTMLElement | null = element
  while (node) {
    if (node.hasAttribute("inert")) return true
    node = node.parentElement
  }
  return false
}

describe("ApplicationFrame sidebar", () => {
  beforeEach(() => {
    localStorage.clear()
  })
  afterEach(() => {
    resetTestViewport()
  })

  describe("skip link", () => {
    it("stays reachable when the sidebar is hidden", () => {
      // WCAG 2.4.1: bypassing blocks is exactly what a keyboard user needs when
      // the navigation is collapsed. Putting the link inside the region that
      // goes `inert` removes the only escape hatch for the people who use it.
      localStorage.setItem(SIDEBAR_KEY, "")
      setTestViewport(1600)
      renderFrame()

      expect(state()).toBe("state:hidden")
      expect(isInInertRegion(skipLink())).toBe(false)
    })

    it("stays reachable on a small screen", () => {
      setTestViewport(700)
      renderFrame()

      expect(state()).toBe("state:hidden")
      expect(isInInertRegion(skipLink())).toBe(false)
    })
  })

  describe("the persisted preference", () => {
    it("is not touched by opening the drawer on a small screen", async () => {
      // The drawer and the desktop preference are different things. Someone
      // opening the menu on a narrow window has not asked for their desktop
      // layout to change.
      setTestViewport(700)
      renderFrame()
      const before = localStorage.getItem(SIDEBAR_KEY)

      await clickToggle()

      expect(localStorage.getItem(SIDEBAR_KEY)).toBe(before)
    })

    it("survives a round trip through a narrow window", async () => {
      setTestViewport(1600)
      renderFrame()
      expect(state()).toBe("state:locked")

      // Narrow, use the drawer, come back.
      await act(async () => setTestViewport(700))
      await clickToggle()
      await act(async () => setTestViewport(1600))

      expect(state()).toBe("state:locked")
    })
  })

  describe("the drawer", () => {
    it("closes on Escape", async () => {
      setTestViewport(700)
      renderFrame()
      await clickToggle()
      expect(state()).toBe("state:unlocked")

      await act(async () => {
        document.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
        )
      })

      expect(state()).toBe("state:hidden")
    })

    it("ignores Escape when it is not a drawer", async () => {
      // A docked sidebar is part of the page, not a thing you dismiss.
      setTestViewport(1600)
      renderFrame()
      expect(state()).toBe("state:locked")

      await act(async () => {
        document.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
        )
      })

      expect(state()).toBe("state:locked")
    })

    it("puts no scrim behind a desktop hover reveal", () => {
      // The scrim used to mount and animate for every reveal, then hide itself
      // with a class. Only a real drawer should dim the page.
      setTestViewport(1600)
      renderFrame()
      expect(
        document.querySelector(".fixed.inset-0.bg-f1-background-inverse")
      ).toBeNull()
    })
  })

  describe("yielding to the chat panel", () => {
    it("yields when the chat is restored open, not just when it is clicked", async () => {
      // Two effects used to race over one setter, so a reload with the chat
      // persisted open left the navigation planted next to it.
      localStorage.setItem("ONE-ai-chat-open", JSON.stringify(true))
      setTestViewport(1400)

      await act(async () => {
        renderFrame("right")
      })

      expect(state()).toBe("state:hidden")
    })

    it("reaches the same state whether the chat was clicked or restored", async () => {
      setTestViewport(1400)
      renderFrame("right")
      await act(async () => {
        screen.getByText("open-chat").click()
      })
      const afterClicking = state()

      expect(afterClicking).toBe("state:hidden")
    })

    it("does not push the navigation over the chat on a small screen", async () => {
      // The auto-close hook's stated job is to get the sidebar OUT of the way
      // when the chat opens. On a small screen it did the opposite.
      setTestViewport(700)
      renderFrame("right")
      expect(state()).toBe("state:hidden")

      await act(async () => {
        screen.getByText("open-chat").click()
      })

      expect(state()).toBe("state:hidden")
    })
  })
})
