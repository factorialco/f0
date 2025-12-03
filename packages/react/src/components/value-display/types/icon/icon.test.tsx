import { Placeholder } from "@/icons/app"
import { render, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { ValueDisplayRendererContext } from "../../renderers"
import { IconCell, IconCellValue } from "./icon"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("IconCell", () => {
  it("should render icon with label", () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Test Label",
    }

    render(IconCell(args, defaultMeta))

    expect(screen.getByText("Test Label")).toBeInTheDocument()
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("should hide label visually when hideLabel is true", () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Hidden Label",
      hideLabel: true,
    }

    render(IconCell(args, defaultMeta))

    const label = screen.getByText("Hidden Label")
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass("sr-only")
  })

  it("should set aria-label on icon when hideLabel is true", () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Accessible Label",
      hideLabel: true,
    }

    render(IconCell(args, defaultMeta))

    const svg = document.querySelector("svg")
    expect(svg).toHaveAttribute("aria-label", "Accessible Label")
  })

  it("should not set aria-label on icon when hideLabel is false", () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Visible Label",
      hideLabel: false,
    }

    render(IconCell(args, defaultMeta))

    const svg = document.querySelector("svg")
    expect(svg).not.toHaveAttribute("aria-label")
  })

  it("should show tooltip on hover when tooltip prop is provided", async () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Icon Label",
      tooltip: "Tooltip content",
    }

    render(IconCell(args, defaultMeta))

    const container = screen.getByText("Icon Label").parentElement
    expect(container).toBeInTheDocument()

    await userEvent.hover(container!)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })
  })

  it("should not show tooltip when tooltip prop is not provided", () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Icon Label",
    }

    render(IconCell(args, defaultMeta))

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("should work with both hideLabel and tooltip", async () => {
    const args: IconCellValue = {
      icon: Placeholder,
      label: "Hidden Label",
      hideLabel: true,
      tooltip: "Helpful tooltip",
    }

    render(IconCell(args, defaultMeta))

    // Label should be hidden but accessible
    const label = screen.getByText("Hidden Label")
    expect(label).toHaveClass("sr-only")

    // Icon should have aria-label
    const svg = document.querySelector("svg")
    expect(svg).toHaveAttribute("aria-label", "Hidden Label")

    // Tooltip should appear on hover
    const container = label.parentElement
    await userEvent.hover(container!)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })
  })
})
