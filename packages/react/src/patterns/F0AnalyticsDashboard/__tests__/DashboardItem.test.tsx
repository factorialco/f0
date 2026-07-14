import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

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
        downloadActions={[{ label: "Delete", onClick: vi.fn() }]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByLabelText("Other actions")).toBeInTheDocument()
  })

  it("renders host item actions at the top level instead of under Download", async () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemActions={[
          {
            id: "manage-filters",
            label: "Manage filters",
            onClick: vi.fn(),
          },
        ]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await userEvent.click(screen.getByLabelText("Other actions"))

    expect(screen.getByText("Manage filters")).toBeInTheDocument()
    expect(screen.queryByText("Download")).not.toBeInTheDocument()
  })

  it("closes the menu before invoking a host item action", async () => {
    let triggerFocusedWhenCalled = false
    const onClick = vi.fn(() => {
      expect(screen.queryByText("Manage filters")).not.toBeInTheDocument()
      triggerFocusedWhenCalled =
        document.activeElement === screen.getByLabelText("Other actions")
    })
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemActions={[
          {
            id: "manage-filters",
            label: "Manage filters",
            onClick,
          },
        ]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await userEvent.click(screen.getByLabelText("Other actions"))
    await userEvent.click(screen.getByText("Manage filters"))

    await waitFor(() => expect(onClick).toHaveBeenCalledOnce())
    expect(triggerFocusedWhenCalled).toBe(true)
  })

  it("keeps host item actions available in the error state", async () => {
    const onClick = vi.fn()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        error={new Error("Invalid filter")}
        itemActions={[
          {
            id: "manage-filters",
            label: "Manage filters",
            onClick,
          },
        ]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await userEvent.click(screen.getByLabelText("Other actions"))
    await userEvent.click(screen.getByText("Manage filters"))

    await waitFor(() => expect(onClick).toHaveBeenCalledOnce())
    expect(screen.getByText("Invalid filter")).toBeInTheDocument()
  })

  it("announces an error that replaces a loading state", () => {
    const { rerender } = render(
      <DashboardItem title="Revenue" isLoading skeleton={<div>Loading</div>}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getByRole("alert")).toBeEmptyDOMElement()

    rerender(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        error={new Error("Invalid filter")}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.getAllByRole("alert")[0]).toHaveTextContent(
      "Error loading data: Invalid filter"
    )
  })

  it("keeps item actions separate when downloads are also available", async () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemActions={[
          {
            id: "manage-filters",
            label: "Manage filters",
            onClick: vi.fn(),
          },
        ]}
        downloadActions={[{ label: "Download CSV", onClick: vi.fn() }]}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await userEvent.click(screen.getByLabelText("Other actions"))

    expect(screen.getByText("Manage filters")).toBeInTheDocument()
    expect(screen.getByText("Download")).toBeInTheDocument()
    expect(screen.queryByText("Download CSV")).not.toBeInTheDocument()
  })

  it("does not render actions dropdown when no actions", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.queryByLabelText("Other actions")).not.toBeInTheDocument()
  })

  it("renders the maximize button when onFullscreenChange is provided", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        onFullscreenChange={vi.fn()}
      >
        <div>Content</div>
      </DashboardItem>
    )

    // DashboardGrid uses `onFullscreenChange` as the opt-in for the
    // maximize affordance; when a single-item dashboard locks fullscreen
    // it omits the prop so the button goes away.
    expect(screen.getByLabelText("Expand")).toBeInTheDocument()
  })

  it("hides the maximize button when onFullscreenChange is omitted (single-item lock)", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false} isFullscreen>
        <div>Content</div>
      </DashboardItem>
    )

    expect(screen.queryByLabelText("Expand")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Collapse")).not.toBeInTheDocument()
  })
})
