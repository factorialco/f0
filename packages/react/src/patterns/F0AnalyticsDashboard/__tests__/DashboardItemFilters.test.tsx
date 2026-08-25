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

const appliedDefinitions = {
  first: { type: "search" as const, label: "First" },
  second: { type: "search" as const, label: "Second" },
  third: { type: "search" as const, label: "Third" },
  fourth: { type: "search" as const, label: "Fourth" },
}

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

  it("keeps the filter signal visible and progressively reveals its chip", async () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ value: { name: "Bob" } })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const trigger = screen.getByRole("button", {
      name: "Active filters: Name",
    })
    expect(trigger).toHaveTextContent("1")

    const chip = await screen.findByText("Name: Bob")
    let responsiveWrapper: HTMLElement | null = chip
    while (
      responsiveWrapper &&
      !responsiveWrapper.className.includes("@md:block")
    ) {
      responsiveWrapper = responsiveWrapper.parentElement
    }
    expect(responsiveWrapper).toBeTruthy()
  })

  it("reveals at most three chips at progressive container widths", async () => {
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          filters: appliedDefinitions,
          value: {
            first: "A",
            second: "B",
            third: "C",
            fourth: "D",
          },
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    const chips = await Promise.all(
      ["First: A", "Second: B", "Third: C"].map((label) =>
        screen.findByText(label)
      )
    )
    expect(screen.queryByText("Fourth: D")).toBeNull()
    expect(
      screen.getByRole("button", {
        name: "Active filters: First, Second, Third, Fourth",
      })
    ).toHaveTextContent("4")

    const classes = chips.map((chip) => {
      let wrapper: HTMLElement | null = chip
      while (wrapper && !wrapper.className.includes("hidden")) {
        wrapper = wrapper.parentElement
      }
      return wrapper?.className
    })
    expect(classes).toEqual([
      expect.stringContaining("@md:block"),
      expect.stringContaining("@2xl:block"),
      expect.stringContaining("@5xl:block"),
    ])
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
    expect(button).not.toHaveTextContent("1")
  })

  it("removes an applied chip immediately", async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({ value: { name: "Bob" }, onChange })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await screen.findByText("Name: Bob")
    await user.click(screen.getByRole("button", { name: /Close/ }))

    expect(onChange).toHaveBeenCalledWith({})
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

    await user.click(
      screen.getByRole("button", { name: "Active filters: Name" })
    )

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

  it("identifies invalid numeric input and keeps the editor open", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <DashboardItem
        title="Revenue"
        isLoading={false}
        itemFilters={makeItemFilters({
          filters: {
            amount: {
              type: "operator",
              label: "Amount",
              options: {
                operators: [{ value: "equals", label: "Equals" }],
                valueType: "number",
              },
            },
          },
          onChange,
        })}
      >
        <div>Content</div>
      </DashboardItem>
    )

    await user.click(screen.getByRole("button", { name: "Filters" }))
    await user.click(screen.getByRole("button", { name: "Amount" }))
    const input = screen.getByRole("textbox", { name: "Value" })
    await user.type(input, "not-a-number")
    await user.click(screen.getByRole("button", { name: "Apply selection" }))

    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(screen.getByText("Enter a valid number")).toBeVisible()
    expect(input).toHaveFocus()
    expect(screen.queryByRole("button", { name: "Apply filters" })).toBeNull()
    expect(onChange).not.toHaveBeenCalled()
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

    await user.click(screen.getByRole("button", { name: "Filters" }))
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
