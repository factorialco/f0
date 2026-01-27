import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { OneDateNavigator } from "../OneDateNavigator"

describe("OneDateNavigator", () => {
  it("renders without crashing", () => {
    const onSelect = vi.fn()
    render(<OneDateNavigator onSelect={onSelect} />)

    // Should render the trigger button
    const trigger = screen.getByRole("button", { name: "Select Date" })
    expect(trigger).toBeDefined()

    // Should render the trigger button
    const todayTrigger = screen.getByRole("button", { name: "Today" })
    expect(todayTrigger).toBeDefined()

    // Should render next button
    const nextButton = screen.getByRole("button", { name: "Next" })
    expect(nextButton).toBeDefined()

    // Should render previous button
    const previousButton = screen.getByRole("button", { name: "Previous" })
    expect(previousButton).toBeDefined()
  })

  it("renders with default value", async () => {
    const onSelect = vi.fn()
    const defaultValue = {
      value: {
        from: new Date(2023, 0, 1),
        to: new Date(2023, 0, 31),
      },
      granularity: "month" as const,
    }

    render(<OneDateNavigator onSelect={onSelect} defaultValue={defaultValue} />)

    const trigger = await screen.getByRole("button", { name: "Jan 2023" })
    expect(trigger).toBeDefined()
  })

  it("handles disabled state", () => {
    const onSelect = vi.fn()

    render(<OneDateNavigator onSelect={onSelect} disabled />)

    const trigger = screen.getByRole("button", { name: "Select Date" })
    expect(trigger.getAttribute("disabled")).toBeDefined()
  })

  it("renders with navigation hidden", () => {
    const onSelect = vi.fn()

    render(<OneDateNavigator onSelect={onSelect} hideNavigation />)

    const trigger = screen.getByRole("button", { name: "Today" })
    expect(trigger).toBeDefined()

    // Should not render next button
    const nextButton = screen.queryByRole("button", { name: "Next" })
    expect(nextButton).toBeNull()

    // Should not render previous button
    const previousButton = screen.queryByRole("button", { name: "Previous" })
    expect(previousButton).toBeNull()
  })

  it("renders with go to current hidden", () => {
    const onSelect = vi.fn()

    render(<OneDateNavigator onSelect={onSelect} hideGoToCurrent />)

    // Should not render today button
    const todayButton = screen.queryByRole("button", { name: "Today" })
    expect(todayButton).toBeNull()

    // Should render next button
    const nextButton = screen.queryByRole("button", { name: "Next" })
    expect(nextButton).toBeDefined()

    // Should render previous button
    const previousButton = screen.queryByRole("button", { name: "Previous" })
    expect(previousButton).toBeDefined()
  })
})
