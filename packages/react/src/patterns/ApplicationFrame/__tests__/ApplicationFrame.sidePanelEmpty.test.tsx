import type { ReactNode } from "react"
import { beforeEach, describe, expect, it } from "vitest"
import { zeroRender as render } from "@/testing/test-utils"
import { ApplicationFrame } from ".."
import {
  SIDE_PANEL_OPEN_KEY,
  SIDE_PANEL_VIEW_ID_KEY,
} from "../SidePanel/storage"

/**
 * The other half of the contract: when nothing can occupy the panel, the panel
 * does not exist. Not "renders empty" — is not in the DOM at all, and reserves
 * no width from the page.
 */

const containers = () =>
  document.querySelectorAll("[data-side-panel-container]")

const renderFrame = (props: Record<string, unknown> = {}) =>
  render(
    <ApplicationFrame sidebar={<nav>sidebar</nav>} {...props}>
      <p>page</p>
    </ApplicationFrame>
  )

describe("ApplicationFrame with nothing to put in the panel", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("renders no panel when neither ai nor sidePanel is configured", () => {
    renderFrame()
    expect(containers()).toHaveLength(0)
  })

  it("renders no panel when the AI chat is disabled", () => {
    renderFrame({ ai: { enabled: false } })
    expect(containers()).toHaveLength(0)
  })

  it("renders no panel when every declared view is unavailable", () => {
    renderFrame({
      sidePanel: { views: [{ id: "communications", available: false }] },
    })
    expect(containers()).toHaveLength(0)
  })

  it("renders a panel as soon as one view is available", () => {
    renderFrame({
      sidePanel: {
        views: [
          { id: "communications", available: false },
          { id: "inspector", available: true },
        ],
      },
    })
    expect(containers().length).toBeGreaterThan(0)
  })

  // A user who left a conversation open, on a build that has since dropped
  // that product, must not come back to an empty column.
  it("ignores a persisted open state when nothing is available", () => {
    localStorage.setItem(SIDE_PANEL_OPEN_KEY, "true")
    localStorage.setItem(SIDE_PANEL_VIEW_ID_KEY, '"gone"')

    renderFrame({
      sidePanel: { views: [{ id: "communications", available: false }] },
    })

    expect(containers()).toHaveLength(0)
  })

  it("reserves no horizontal room from the page", () => {
    renderFrame({ ai: { enabled: false } })

    const main = document.querySelector("main")
    expect(main).toBeInTheDocument()
    const parent = main?.parentElement as HTMLElement
    // The frame animates padding on the element wrapping <main>; with no panel
    // both edges must stay at zero.
    expect(
      parent.style.paddingLeft === "" || parent.style.paddingLeft === "0px"
    ).toBe(true)
    expect(
      parent.style.paddingRight === "" || parent.style.paddingRight === "0px"
    ).toBe(true)
  })
})

/** Type-only guard: `sidePanel` must stay optional. */
export const _optional: ReactNode = (
  <ApplicationFrame sidebar={null}>{null}</ApplicationFrame>
)
