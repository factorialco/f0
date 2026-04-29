import { describe, expect, it, vi, beforeEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { DashboardCanvasContent } from "../../../../types"

vi.mock("../DashboardContext", () => ({
  useDashboardCanvas: () => ({
    isDirty: false,
    exportAsExcel: undefined,
    registerExport: vi.fn(),
  }),
}))

import { DashboardHeader } from "../DashboardHeader"

const baseContent: DashboardCanvasContent = {
  type: "dashboard",
  title: "My Dashboard",
  config: { title: "My Dashboard", items: [], fetchSpecs: {} },
  apiConfig: { baseUrl: "/copilotkit", headers: {} },
}

// BaseHeader renders both mobile and desktop variants of each action; in
// jsdom CSS media queries don't prune either, so every button appears twice.
// The mobile action area has no otherActions dropdown path, though, so the
// close and dropdown buttons show up twice via the stacked/horizontal layouts.
const clickFirstByName = async (name: string) => {
  const user = userEvent.setup()
  const [button] = screen.getAllByRole("button", { name })
  await user.click(button)
}

describe("DashboardHeader", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the title", () => {
    render(<DashboardHeader content={baseContent} onClose={vi.fn()} />)

    // Title shows once per BaseHeader instance (no mobile/desktop duplicate
    // for the title span itself).
    expect(screen.getByText("My Dashboard")).toBeInTheDocument()
  })

  it("renders the description from content.config.description", () => {
    const description = "Headcount by department for the last 12 months."
    render(
      <DashboardHeader
        content={{
          ...baseContent,
          config: { ...baseContent.config, description },
        }}
        onClose={vi.fn()}
      />
    )

    // BaseHeader's Description component renders the text twice (one visible,
    // one hidden measurement copy for the "show more" affordance).
    expect(screen.getAllByText(description).length).toBeGreaterThan(0)
  })

  it("omits the description when config.description is undefined", () => {
    render(<DashboardHeader content={baseContent} onClose={vi.fn()} />)

    expect(
      screen.queryByText("Headcount by department for the last 12 months.")
    ).not.toBeInTheDocument()
  })

  it("renders a close button that calls onClose", async () => {
    const onClose = vi.fn()

    render(<DashboardHeader content={baseContent} onClose={onClose} />)

    await clickFirstByName("Close dashboard")
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("shows the Draft status tag when the dashboard has no savedDashboardId", () => {
    render(<DashboardHeader content={baseContent} onClose={vi.fn()} />)

    expect(screen.getAllByText("Draft").length).toBeGreaterThan(0)
    expect(screen.queryByText("Saved")).not.toBeInTheDocument()
    expect(screen.queryByText("Unsaved")).not.toBeInTheDocument()
  })

  it("shows the Saved status tag when the dashboard has a savedDashboardId and no pending iteration", () => {
    render(
      <DashboardHeader
        content={{
          ...baseContent,
          savedDashboardId: "dash_123",
          savedDashboardCategory: "analytics",
        }}
        onClose={vi.fn()}
      />
    )

    expect(screen.getAllByText("Saved").length).toBeGreaterThan(0)
    expect(screen.queryByText("Draft")).not.toBeInTheDocument()
    expect(screen.queryByText("Unsaved")).not.toBeInTheDocument()
  })

  it("shows the Unsaved status tag when the dashboard has a savedDashboardId and savedDashboardUnsaved is true", () => {
    render(
      <DashboardHeader
        content={{
          ...baseContent,
          savedDashboardId: "dash_123",
          savedDashboardCategory: "analytics",
          savedDashboardUnsaved: true,
        }}
        onClose={vi.fn()}
      />
    )

    expect(screen.getAllByText("Unsaved").length).toBeGreaterThan(0)
    expect(screen.queryByText("Saved")).not.toBeInTheDocument()
    expect(screen.queryByText("Draft")).not.toBeInTheDocument()
  })

  it("does not show a save button", () => {
    render(<DashboardHeader content={baseContent} onClose={vi.fn()} />)

    expect(
      screen.queryByRole("button", { name: "Save" })
    ).not.toBeInTheDocument()
  })
})
