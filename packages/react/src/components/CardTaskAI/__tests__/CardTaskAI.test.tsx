import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { CardTaskAI } from "../CardTaskAI"
import type { CardTaskAIProps } from "../types"

describe("CardTaskAI", () => {
  const defaultProps: CardTaskAIProps = {
    icon: <span data-testid="icon">📄</span>,
    title: "Test Task",
    tasks: [{ id: "1", label: "Task 1" }],
  }

  it("renders title", () => {
    render(<CardTaskAI {...defaultProps} />)
    expect(screen.getByText("Test Task")).toBeInTheDocument()
  })

  it("renders icon", () => {
    render(<CardTaskAI {...defaultProps} />)
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("renders tasks", () => {
    render(
      <CardTaskAI
        {...defaultProps}
        tasks={[
          { id: "1", label: "Task 1" },
          { id: "2", label: "Task 2" },
        ]}
      />
    )
    expect(screen.getByText("Task 1")).toBeInTheDocument()
    expect(screen.getByText("Task 2")).toBeInTheDocument()
  })

  it("renders description when provided", () => {
    render(<CardTaskAI {...defaultProps} description="Test description" />)
    expect(screen.getByText("Test description")).toBeInTheDocument()
  })

  it("renders badge when provided", () => {
    render(
      <CardTaskAI
        {...defaultProps}
        badge={{ label: "New", variant: "primary" }}
      />
    )
    expect(screen.getByText("New")).toBeInTheDocument()
  })

  it("calls onClick handler when card is clicked", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    const { container } = render(
      <CardTaskAI {...defaultProps} onClick={handleClick} />
    )

    const card = container.querySelector('[data-testid="card-task-ai"]')
    await user.click(card!)
    expect(handleClick).toHaveBeenCalled()
  })

  it("renders different task statuses", () => {
    const { container } = render(
      <CardTaskAI
        {...defaultProps}
        tasks={[
          { id: "1", label: "Completed", status: "completed" },
          { id: "2", label: "In Progress", status: "in-progress" },
          { id: "3", label: "Error", status: "error" },
          { id: "4", label: "Pending", status: "pending" },
        ]}
      />
    )

    expect(screen.getByText("Completed")).toBeInTheDocument()
    expect(screen.getByText("In Progress")).toBeInTheDocument()
    expect(screen.getByText("Error")).toBeInTheDocument()
    expect(screen.getByText("Pending")).toBeInTheDocument()

    // Check that status indicators are rendered
    const statusIndicators = container.querySelectorAll(
      "[class*='rounded-full'], [class*='text-green'], [class*='text-red'], [class*='text-blue']"
    )
    expect(statusIndicators.length).toBeGreaterThan(0)
  })

  it("renders badge with avatar", () => {
    render(
      <CardTaskAI
        {...defaultProps}
        badge={{
          label: "New",
          avatar: <span data-testid="badge-avatar">👤</span>,
        }}
      />
    )
    expect(screen.getByTestId("badge-avatar")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <CardTaskAI {...defaultProps} className="custom-class" />
    )
    const card = container.querySelector("[data-testid='card-task-ai']")
    expect(card).toHaveClass("custom-class")
  })

  it("applies custom data-testid", () => {
    const { container } = render(
      <CardTaskAI {...defaultProps} data-testid="custom-card" />
    )
    expect(screen.getByTestId("custom-card")).toBeInTheDocument()
  })
})
