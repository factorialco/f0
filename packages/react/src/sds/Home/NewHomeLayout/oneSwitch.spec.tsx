import { beforeEach, describe, expect, test, vi } from "vitest"

import { Calendar } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { NewHomeLayout } from "./index"

// The real switch draws NOTHING unless the AI chat context is enabled, so it is
// stubbed to a marker here and only this layout's own show/hide decision — and
// where it puts it — is under test.
vi.mock("@/kits/ai/F0OneSwitch", () => ({
  F0OneSwitch: () => <div data-testid="one-switch" />,
}))

/** The width the layout reports for itself — wide enough for both columns. */
const LAYOUT_WIDTH = 1400

const RAIL: HomeWidgetItem[] = [
  {
    id: "events",
    icon: Calendar,
    header: { title: "events" },
    slots: [
      {
        visualization: "indicators",
        params: { items: [{ label: "requests", content: "1" }] },
      },
    ],
  },
]

const renderLayout = (props = {}) =>
  zeroRender(
    <NewHomeLayout rightWidgets={RAIL} {...props}>
      <p>greeting</p>
    </NewHomeLayout>
  )

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => LAYOUT_WIDTH,
  })
  // jsdom has no ResizeObserver, and the layout measures itself with one.
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        callback()
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  )
})

describe("NewHomeLayout one switch", () => {
  test("renders the One switch by default", () => {
    renderLayout()

    expect(screen.getByTestId("one-switch")).toBeInTheDocument()
  })

  test("puts it after the rail's collapse button, in the same row", () => {
    renderLayout()

    const collapse = screen.getByLabelText("Collapse widgets panel")
    const oneSwitch = screen.getByTestId("one-switch")

    expect(collapse.parentElement).toBe(oneSwitch.parentElement)
    expect(
      collapse.compareDocumentPosition(oneSwitch) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  test("hides it when hideOneSwitch is set", () => {
    renderLayout({ hideOneSwitch: true })

    expect(screen.queryByTestId("one-switch")).toBeNull()
    // The collapse toggle is independent and stays.
    expect(screen.getByLabelText("Collapse widgets panel")).toBeInTheDocument()
  })
})
