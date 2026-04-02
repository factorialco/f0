import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { DashboardItem } from "../components/DashboardItem/DashboardItem"

describe("DashboardItem", () => {
  it("renders title and children", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false}>
        <div>Chart content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Revenue")).toBeInTheDocument()
    expect(screen.getByText("Chart content")).toBeInTheDocument()
  })

  it("renders description when provided", () => {
    render(
      <DashboardItem
        title="Revenue"
        description="Monthly revenue"
        isLoading={false}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Monthly revenue")).toBeInTheDocument()
  })

  it("shows skeleton instead of children when loading", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={true}
        skeleton={<div>Loading skeleton</div>}
      >
        <div>Real content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Loading skeleton")).toBeInTheDocument()
    expect(screen.queryByText("Real content")).not.toBeInTheDocument()
  })

  it("renders error state with retry button", () => {
    const onRetry = vi.fn()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        error={new Error("Failed to load")}
        onRetry={onRetry}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByText("Error loading data")).toBeInTheDocument()
    expect(screen.getByText("Failed to load")).toBeInTheDocument()
  })

  it("renders actions dropdown when actions are provided", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        actions={[{ label: "Delete", onClick: vi.fn() }]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByLabelText("Other actions")).toBeInTheDocument()
  })

  it("does not render actions dropdown when no actions", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.queryByLabelText("Other actions")).not.toBeInTheDocument()
  })
})
