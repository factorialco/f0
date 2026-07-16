import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { DashboardItem } from "../components/DashboardItem/DashboardItem"

import type { DashboardItemFiltersConfig } from "../types"

const makeItemFilters = (
  overrides: Partial<DashboardItemFiltersConfig> = {}
): DashboardItemFiltersConfig => ({
  filters: {
    name: { type: "search", label: "Name" },
    country: {
      type: "operator",
      label: "Country",
      options: {
        operators: [
          { value: "equals", label: "Is" },
          { value: "not_set", label: "Has no value", valueMode: "none" },
        ],
        valueType: "string",
      },
    },
  },
  value: {},
  onChange: vi.fn(),
  ...overrides,
})

describe("DashboardItem with itemFilters", () => {
  it("does not render a filter button without itemFilters", () => {
    render(
      <DashboardItem title="Revenue" isLoading={false}>
        <div>Content</div>
      </DashboardItem>
    )

    expect(
      screen.queryByRole("button", { name: "Filters" })
    ).not.toBeInTheDocument()
  })

  it("renders a filter button that opens the filter popover", async () => {
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters()}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))

    await waitFor(() => {
      expect(screen.getByText("Name")).toBeInTheDocument()
      expect(screen.getByText("Country")).toBeInTheDocument()
    })

    const trigger = screen.getByRole("button", { name: "Filters" })
    const controlledId = trigger.getAttribute("aria-controls")
    expect(controlledId).toBeTruthy()
    expect(document.getElementById(controlledId ?? "")).toHaveAttribute(
      "role",
      "dialog"
    )
    expect(screen.getByRole("dialog", { name: "Filters" })).toBeInTheDocument()
  })

  it("applies a drafted filter through onChange", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ onChange })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))
    await user.click(await screen.findByText("Name"))

    const input = await screen.findByRole("textbox")
    await user.type(input, "Bob")
    await user.click(screen.getByRole("button", { name: "Apply selection" }))
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Name" })).toHaveFocus()
    )
    await user.click(screen.getByRole("button", { name: "Apply filters" }))

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith({ name: "Bob" })
    })
  })

  it("discards the draft when the popover is dismissed", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ onChange })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))
    await user.click(await screen.findByText("Name"))

    const input = await screen.findByRole("textbox")
    await user.type(input, "Bob")
    await user.keyboard("{Escape}")

    await user.click(screen.getByRole("button", { name: "Filters" }))
    await user.click(await screen.findByText("Name"))

    expect(await screen.findByRole("textbox")).toHaveValue("")
    expect(onChange).not.toHaveBeenCalled()
  })

  it("keeps the action strip visible when filters are applied", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ value: { name: "Bob" } })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const button = screen.getByRole("button", {
      name: "Active filters: Name",
    })
    // The wrapper strip opts out of the hover-only opacity when a filter is
    // applied, so the control (and its counter) is visible at a glance.
    let strip: HTMLElement | null = button.parentElement
    while (strip && !strip.className.includes("flex-shrink-0")) {
      strip = strip.parentElement
    }
    expect(strip?.className.split(" ")).toContain("sm:opacity-100")
  })

  it("does not treat an incomplete condition as applied", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          value: { country: { operator: "equals", values: [] } },
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const button = screen.getByRole("button", { name: "Filters" })
    let strip: HTMLElement | null = button.parentElement
    while (strip && !strip.className.includes("flex-shrink-0")) {
      strip = strip.parentElement
    }
    expect(strip?.className.split(" ")).toContain("sm:opacity-0")
    expect(button).not.toHaveTextContent("1")
  })

  it("returns safely to the list when the selected definition is removed", async () => {
    const user = userEvent.setup()
    const view = render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters()}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))
    await user.click(screen.getByRole("button", { name: "Country" }))
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Available filters" })
      ).toHaveFocus()
    )

    view.rerender(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          filters: { name: { type: "search", label: "Name" } },
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    expect(await screen.findByRole("button", { name: "Name" })).toBeVisible()
    expect(
      screen.queryByRole("button", { name: "Country" })
    ).not.toBeInTheDocument()
  })

  it("does not expose definitions marked hideSelector", async () => {
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          filters: {
            name: { type: "search", label: "Name", hideSelector: true },
            country: {
              type: "operator",
              label: "Country",
              options: { operators: [{ value: "equals", label: "Is" }] },
            },
          },
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))

    expect(screen.getByRole("button", { name: "Country" })).toBeVisible()
    expect(screen.queryByRole("button", { name: "Name" })).toBeNull()
  })
})
