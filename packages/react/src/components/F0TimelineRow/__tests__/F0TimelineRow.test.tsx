import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import Check from "@/icons/app/Check"
import Comment from "@/icons/app/Comment"
import Cross from "@/icons/app/Cross"
import Settings from "@/icons/app/Settings"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0TimelineRow } from "../F0TimelineRow"

describe("F0TimelineRow", () => {
  const defaultProps = {
    status: "completed" as const,
    icon: Check,
    title: "Submit payment",
  }

  it("renders the title", () => {
    render(<F0TimelineRow {...defaultProps} />)
    expect(screen.getByText("Submit payment")).toBeInTheDocument()
  })

  it("renders completed title with strikethrough", () => {
    render(<F0TimelineRow {...defaultProps} status="completed" />)
    const title = screen.getByText("Submit payment")
    expect(title.className).toContain("line-through")
  })

  it("does not render strikethrough for non-completed status", () => {
    render(<F0TimelineRow {...defaultProps} status="in-progress" />)
    const title = screen.getByText("Submit payment")
    expect(title.className).not.toContain("line-through")
  })

  it("renders the description when provided", () => {
    render(
      <F0TimelineRow {...defaultProps} description="Completed on 20/2025" />
    )
    expect(screen.getByText("Completed on 20/2025")).toBeInTheDocument()
  })

  it("renders description inline with title for completed status", () => {
    render(
      <F0TimelineRow {...defaultProps} description="Completed on 20/2025" />
    )
    const title = screen.getByText("Submit payment")
    const desc = screen.getByText("Completed on 20/2025")
    // Both should be in the same parent row div
    expect(title.parentElement).toBe(desc.parentElement)
  })

  it("renders description inline with title for in-progress status", () => {
    render(
      <F0TimelineRow
        {...defaultProps}
        status="in-progress"
        description="Estimated on 18/07/2025"
      />
    )
    const title = screen.getByText("Submit payment")
    const desc = screen.getByText("Estimated on 18/07/2025")
    // Description should be in the same parent as title
    expect(title.parentElement).toBe(desc.parentElement)
  })

  it("does not render a description when not provided", () => {
    render(<F0TimelineRow {...defaultProps} />)
    expect(screen.queryByText("Completed on 20/2025")).not.toBeInTheDocument()
  })

  it("renders right content when provided", () => {
    render(
      <F0TimelineRow
        {...defaultProps}
        status="in-progress"
        right={<span>IT team</span>}
      />
    )
    expect(screen.getByText("IT team")).toBeInTheDocument()
  })

  it("renders files when provided", () => {
    const files = [
      new File(["test"], "report.pdf", { type: "application/pdf" }),
    ]
    render(<F0TimelineRow {...defaultProps} files={files} />)
    expect(screen.getByText("report.pdf")).toBeInTheDocument()
  })

  it("renders with completed status indicator", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} status="completed" />
    )
    expect(
      container.querySelector("[data-testid='timeline-status-completed']")
    ).toBeInTheDocument()
  })

  it("renders with in-progress status indicator", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} status="in-progress" />
    )
    expect(
      container.querySelector("[data-testid='timeline-status-in-progress']")
    ).toBeInTheDocument()
  })

  it("renders with not-started status indicator", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} status="not-started" />
    )
    expect(
      container.querySelector("[data-testid='timeline-status-not-started']")
    ).toBeInTheDocument()
  })

  it("renders connector for completed rows", () => {
    const { container } = render(<F0TimelineRow {...defaultProps} />)
    expect(
      container.querySelector("[data-testid='timeline-connector']")
    ).toBeInTheDocument()
  })

  it("hides the connector line when isLast is true", () => {
    const { container } = render(<F0TimelineRow {...defaultProps} isLast />)
    expect(
      container.querySelector("[data-testid='timeline-connector']")
    ).not.toBeInTheDocument()
  })

  it("renders assignees as avatar list", () => {
    const assignees = [
      { firstName: "Alex", lastName: "Rashfold" },
      { firstName: "James", lastName: "Hopper" },
    ]
    const { container } = render(
      <F0TimelineRow {...defaultProps} assignees={assignees} />
    )
    expect(
      container.querySelector("[data-testid='overflow-visible-container']")
    ).toBeInTheDocument()
  })

  it("does not render assignees when array is empty", () => {
    render(<F0TimelineRow {...defaultProps} assignees={[]} />)
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  describe("multitask", () => {
    it("renders task count in title", () => {
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={3}
          expanded={false}
          onExpandToggle={() => {}}
          items={[]}
        />
      )
      expect(screen.getByText("3 Tasks")).toBeInTheDocument()
    })

    it("calls onExpandToggle when clicking the multitask title", async () => {
      const user = userEvent.setup()
      const onToggle = vi.fn()
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={3}
          expanded={false}
          onExpandToggle={onToggle}
          items={[]}
        />
      )
      await user.click(screen.getByText("3 Tasks"))
      expect(onToggle).toHaveBeenCalledOnce()
    })

    it("shows items when expanded", () => {
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={3}
          expanded
          onExpandToggle={() => {}}
          items={[
            {
              status: "in-progress",
              icon: Settings,
              title: "Child task content",
            },
          ]}
        />
      )
      expect(screen.getByText("Child task content")).toBeInTheDocument()
    })

    it("hides items when collapsed", () => {
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={3}
          expanded={false}
          onExpandToggle={() => {}}
          items={[
            {
              status: "in-progress",
              icon: Settings,
              title: "Child task content",
            },
          ]}
        />
      )
      expect(screen.queryByText("Child task content")).not.toBeInTheDocument()
    })
  })

  describe("actions", () => {
    const primaryAction = {
      label: "Approve",
      icon: Check,
      onClick: vi.fn(),
    }

    const secondaryActions = [
      {
        label: "Request changes",
        icon: Comment,
        onClick: vi.fn(),
      },
      {
        label: "Reject",
        icon: Cross,
        onClick: vi.fn(),
      },
    ]

    it("renders action buttons", () => {
      render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
        />
      )
      expect(screen.getByText("Request changes")).toBeInTheDocument()
      expect(screen.getByText("Reject")).toBeInTheDocument()
      expect(screen.getByText("Approve")).toBeInTheDocument()
    })

    it("renders a divider between secondary and primary actions", () => {
      const { container } = render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
        />
      )
      expect(
        container.querySelector(".bg-f1-background-secondary-hover.h-4.w-px")
      ).toBeInTheDocument()
    })

    it("does not render actions when not provided", () => {
      render(<F0TimelineRow {...defaultProps} />)
      expect(screen.queryByText("Approve")).not.toBeInTheDocument()
    })
  })
})
