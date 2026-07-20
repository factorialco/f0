import { screen, within } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DataCollectionSettingsProvider } from "../../../../../Settings/SettingsProvider"
import type { GraphVisualizationOptions } from "../../types"
import { SettingsRenderer } from "../SettingsRenderer"

vi.stubGlobal(
  "ResizeObserver",
  class {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- only the tag-related options matter for these tests
type Options = GraphVisualizationOptions<any, any, any>

const baseOptions = {
  nodeTagTypes: ["raw", "company", "status"],
  nodeTagTypeLabels: {
    raw: "Location",
    company: "Legal entity",
    status: "Reports",
  },
  defaultVisibleTagTypes: ["raw"],
  pinnedTagTypes: ["status"],
} as unknown as Options

const renderSettings = (options: Options) =>
  render(
    <DataCollectionSettingsProvider>
      <SettingsRenderer {...options} />
    </DataCollectionSettingsProvider>
  )

describe("Graph SettingsRenderer", () => {
  it("renders nothing when there are no tag types", () => {
    const { container } = renderSettings({
      nodeTagTypes: [],
    } as unknown as Options)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders a row per tag type using its label", () => {
    renderSettings(baseOptions)
    expect(screen.getByText("Location")).toBeInTheDocument()
    expect(screen.getByText("Legal entity")).toBeInTheDocument()
    expect(screen.getByText("Reports")).toBeInTheDocument()
  })

  it("shows a non-draggable (locked) row for pinned tags", () => {
    renderSettings(baseOptions)

    // Non-pinned tags expose a grabbable drag handle; the pinned one doesn't —
    // it renders the lock icon instead, matching frozen columns in the table.
    const grabbable = (label: string) => {
      const row = screen.getByText(label).closest("li") as HTMLElement
      return within(row).queryByText(label) && row.querySelector(".cursor-grab")
    }

    expect(grabbable("Location")).not.toBeNull()
    expect(grabbable("Reports")).toBeNull()
  })

  it("disables the visibility switch for pinned tags", () => {
    renderSettings(baseOptions)
    const switches = screen.getAllByRole("switch")
    const disabled = switches.filter((s) => s.hasAttribute("disabled"))
    expect(disabled.length).toBe(1)
  })
})
