import { render, screen, waitFor, within } from "@testing-library/react"
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

  it("should render a structured tooltip with title, body and bullets", async () => {
    const args: StatusCellValue = {
      status: "critical",
      label: "3",
      tooltip: {
        title: "3 alerts",
        description: "This row needs a look before it can be submitted.",
        items: [
          { title: "Not eligible", description: "Hired after the cut-off." },
          "Missing effective date",
        ],
      },
    }

    render(StatusCell(args))

    await userEvent.hover(screen.getByText("3"))

    const tooltip = await waitFor(() => screen.getByRole("tooltip"))
    expect(tooltip).toHaveTextContent("3 alerts")
    expect(tooltip).toHaveTextContent(
      "This row needs a look before it can be submitted."
    )
    expect(tooltip).toHaveTextContent("Not eligible Hired after the cut-off.")
    expect(within(tooltip).getAllByRole("listitem")).toHaveLength(2)
  })

  it("should flatten a structured tooltip for screen readers", () => {
    const args: StatusCellValue = {
      status: "critical",
      label: "3",
      tooltip: {
        title: "3 alerts",
        description: "Needs a look.",
        items: [{ title: "Not eligible", description: "Hired late." }],
      },
    }

    render(StatusCell(args))

    const srText = screen.getByText(
      "3 alerts. Needs a look. Not eligible Hired late."
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
