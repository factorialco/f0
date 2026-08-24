import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import {
  F0DataChartAccessibleAreaSelectionActions,
  type F0DataChartAccessibleAreaSelectionAction,
} from "@/kits/F0DataChart"

const action = (index: number): F0DataChartAccessibleAreaSelectionAction => ({
  key: `series-0-point-${index}`,
  label: `Headcount — Office ${index + 1}: ${index + 1}`,
  point: {
    seriesName: "Headcount",
    category: `Office ${index + 1}`,
    value: index + 1,
    values: [index + 1],
    series: [{ name: "Headcount", seriesIndex: 0, value: index + 1 }],
    dataIndex: index,
    seriesIndex: 0,
  },
})

const labels = {
  label: "Choose data points",
  submitLabel: "Use selected data points ({{count}})",
  previousLabel: "Previous data points",
  nextLabel: "Next data points",
}

describe("AccessibleAreaSelectionActions", () => {
  it("supports a keyboard-only selection and submission", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(
      <F0DataChartAccessibleAreaSelectionActions
        {...labels}
        actions={[action(0)]}
        resetOn="first"
        onSubmit={onSubmit}
      />
    )

    await user.tab()
    expect(screen.getByRole("button", { name: labels.label })).toHaveFocus()
    await user.keyboard("{Enter}")

    const checkbox = await screen.findByRole("menuitemcheckbox", {
      name: action(0).label,
    })
    expect(checkbox).toHaveFocus()
    await user.keyboard("{Enter}")
    await user.keyboard("{End}{Enter}")

    expect(onSubmit).toHaveBeenCalledWith([action(0).point])
  })

  it("retains selections across pages and supports deselection", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    const actions = Array.from({ length: 101 }, (_, index) => action(index))
    render(
      <F0DataChartAccessibleAreaSelectionActions
        {...labels}
        actions={actions}
        resetOn="first"
        onSubmit={onSubmit}
      />
    )

    await user.click(screen.getByRole("button", { name: labels.label }))
    const first = await screen.findByRole("menuitemcheckbox", {
      name: action(0).label,
    })
    await user.click(first)
    await user.click(screen.getByRole("menuitem", { name: labels.nextLabel }))
    await user.click(
      await screen.findByRole("menuitemcheckbox", {
        name: action(100).label,
      })
    )
    await user.click(
      screen.getByRole("menuitem", { name: labels.previousLabel })
    )
    await user.click(
      await screen.findByRole("menuitemcheckbox", {
        name: action(0).label,
      })
    )
    await user.click(
      screen.getByRole("menuitem", {
        name: "Use selected data points (1)",
      })
    )

    expect(onSubmit).toHaveBeenCalledWith([action(100).point])
  })

  it("closes and clears the menu when its data contract changes", async () => {
    const user = userEvent.setup()
    const view = render(
      <F0DataChartAccessibleAreaSelectionActions
        {...labels}
        actions={[action(0)]}
        resetOn="first"
        onSubmit={vi.fn()}
      />
    )

    await user.click(screen.getByRole("button", { name: labels.label }))
    await user.click(
      await screen.findByRole("menuitemcheckbox", {
        name: action(0).label,
      })
    )
    view.rerender(
      <F0DataChartAccessibleAreaSelectionActions
        {...labels}
        actions={[action(0)]}
        resetOn="second"
        onSubmit={vi.fn()}
      />
    )

    expect(screen.queryByRole("menuitemcheckbox")).not.toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: labels.label }))
    expect(
      await screen.findByRole("menuitemcheckbox", { name: action(0).label })
    ).toHaveAttribute("aria-checked", "false")
    expect(
      screen.getByRole("menuitem", {
        name: "Use selected data points (0)",
      })
    ).toHaveAttribute("aria-disabled", "true")
  })
})
