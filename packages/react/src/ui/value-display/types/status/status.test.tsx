import { render, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Placeholder } from "@/icons/app"

import { StatusCell, StatusCellValue } from "./status"

describe("StatusCell", () => {
  it("should render the status tag with label", () => {
    const args: StatusCellValue = {
      status: "positive",
      label: "Contacted",
    }

    render(StatusCell(args))

    expect(screen.getByText("Contacted")).toBeInTheDocument()
  })

  it("should render the icon inside the tag when provided", () => {
    const args: StatusCellValue = {
      status: "info",
      label: "Live call",
      icon: Placeholder,
    }

    render(StatusCell(args))

    expect(screen.getByText("Live call")).toBeInTheDocument()
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("should show tooltip on hover when tooltip is provided", async () => {
    const args: StatusCellValue = {
      status: "warning",
      label: "Needs follow-up",
      tooltip: "The call ended before all information was collected",
    }

    render(StatusCell(args))

    await userEvent.hover(screen.getByText("Needs follow-up"))

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })
  })

  it("should expose the tooltip text to screen readers", () => {
    const args: StatusCellValue = {
      status: "warning",
      label: "Needs follow-up",
      tooltip: "The call ended before all information was collected",
    }

    render(StatusCell(args))

    const srText = screen.getByText(
      "The call ended before all information was collected"
    )
    expect(srText).toHaveClass("sr-only")
  })

  it("should not show tooltip when tooltip is not provided", () => {
    const args: StatusCellValue = {
      status: "positive",
      label: "Contacted",
    }

    render(StatusCell(args))

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
