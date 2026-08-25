import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { DashboardItem } from "../components/DashboardItem/DashboardItem"

import type { DashboardItemFiltersConfig } from "../types"

vi.mock("@/patterns/OneFilterPicker/components/FilterChipButton", () => ({
  FilterChipButton: () => <span data-testid="filter-chip-sentinel" />,
}))

const makeItemFilters = (
  overrides: Partial<DashboardItemFiltersConfig> = {}
): DashboardItemFiltersConfig => ({
  filters: {
    name: { type: "search", label: "Name" },
    country: {
      type: "in",
      label: "Country",
      options: {
        options: [
          { value: "ES", label: "Spain" },
          { value: "FR", label: "France" },
        ],
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

  it("uses the standard selectable-value control for widget filters", async () => {
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
    await user.click(await screen.findByRole("button", { name: "Country" }))
    await user.click(await screen.findByRole("checkbox", { name: "Spain" }))
    await user.click(screen.getByRole("button", { name: "Apply selection" }))
    await user.click(screen.getByRole("button", { name: "Apply filters" }))

    await waitFor(() =>
      expect(onChange).toHaveBeenCalledWith({ country: ["ES"] })
    )
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

  it("shows only the applied count in the hover action group", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ value: { name: "Bob" } })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const trigger = screen.getByRole("button", { name: "Filters" })
    expect(trigger).toHaveTextContent("1")
    expect(trigger).toHaveAccessibleDescription("Active filters: Name (1)")
    expect(screen.queryByText("Name: Bob")).toBeNull()
    expect(screen.queryByTestId("filter-chip-sentinel")).toBeNull()
    expect(trigger.parentElement).toHaveClass(
      "sm:[@media(hover:hover)]:opacity-0",
      "focus-within:sm:opacity-100",
      "group-hover/dashitem:sm:opacity-100"
    )
  })

  it("counts every applied filter without rendering selected values", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          value: {
            name: "Bob",
            country: ["ES"],
          },
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const trigger = screen.getByRole("button", { name: "Filters" })
    expect(trigger).toHaveTextContent("2")
    expect(trigger).toHaveAccessibleDescription(
      "Active filters: Name, Country (2)"
    )
    expect(screen.queryByText("Name: Bob")).toBeNull()
    expect(screen.queryByText("Country: Spain")).toBeNull()
    expect(screen.queryByTestId("filter-chip-sentinel")).toBeNull()
  })

  it("keeps the hover action group visible while the picker is open", async () => {
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

    const trigger = screen.getByRole("button", { name: "Filters" })
    const actionGroup = trigger.parentElement

    await user.click(trigger)
    expect(actionGroup).toHaveClass("delay-0", "!opacity-100")

    await user.keyboard("{Escape}")
    await waitFor(() => expect(actionGroup).not.toHaveClass("delay-0"))
  })

  it("does not treat an incomplete condition as applied", () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          value: { country: [] },
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const button = screen.getByRole("button", { name: "Filters" })
    expect(button).not.toHaveTextContent("1")
  })

  it("clears an applied filter through the picker", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          value: { country: ["ES"] },
          onChange,
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))
    await user.click(screen.getByRole("button", { name: "Country" }))
    const spain = await screen.findByRole("checkbox", { name: "Spain" })
    expect(spain).toBeChecked()
    await user.click(spain)
    await user.click(screen.getByRole("button", { name: "Apply selection" }))
    await user.click(screen.getByRole("button", { name: "Apply filters" }))

    await waitFor(() => expect(onChange).toHaveBeenCalledWith({}))
  })

  it("announces active draft rows without changing their accessible name", async () => {
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ value: { name: "Bob" } })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const trigger = screen.getByRole("button", { name: "Filters" })
    expect(trigger).toHaveAccessibleDescription("Active filters: Name (1)")
    await user.click(trigger)

    expect(
      screen.getByRole("button", { name: "Name" })
    ).toHaveAccessibleDescription("Active filters: Name")
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
    expect(screen.getByRole("button", { name: "Name" })).toHaveFocus()
  })

  it("keeps item filters available in the widget error state", async () => {
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        error={new Error("Unavailable")}
        itemFilters={makeItemFilters()}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const trigger = screen.getByRole("button", { name: "Filters" })
    const actionGroup = trigger.parentElement
    const errorCard = actionGroup?.parentElement?.parentElement

    expect(errorCard).toHaveClass("group/dashitem")
    expect(actionGroup).toHaveClass(
      "sm:[@media(hover:hover)]:opacity-0",
      "focus-within:sm:opacity-100",
      "group-hover/dashitem:sm:opacity-100"
    )

    await user.tab()
    expect(trigger).toHaveFocus()
    await user.click(trigger)
    expect(await screen.findByRole("button", { name: "Name" })).toBeVisible()
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
              type: "in",
              label: "Country",
              options: {
                options: [{ value: "ES", label: "Spain" }],
              },
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
