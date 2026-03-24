import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"
import Check from "@/icons/app/Check"
import Comment from "@/icons/app/Comment"
import Cross from "@/icons/app/Cross"
import Settings from "@/icons/app/Settings"

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

  it("renders with completed status indicator", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} status="completed" />
    )
    const circle = container.querySelector("circle[fill='#10B881']")
    expect(circle).toBeInTheDocument()
  })

  it("renders with in-progress status indicator", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} status="in-progress" />
    )
    const svg = container.querySelector("svg[color='#FF9153']")
    expect(svg).toBeInTheDocument()
  })

  it("renders with not-started status indicator", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} status="not-started" />
    )
    const circle = container.querySelector("circle[stroke='#868E96']")
    expect(circle).toBeInTheDocument()
  })

  it("renders connector for completed rows", () => {
    const { container } = render(<F0TimelineRow {...defaultProps} />)
    const connector = container.querySelector(".mt-1.flex-1")
    expect(connector).toBeInTheDocument()
  })

  it("hides the connector line when isLast is true", () => {
    const { container } = render(<F0TimelineRow {...defaultProps} isLast />)
    const connector = container.querySelector(".mt-1.flex-1")
    expect(connector).not.toBeInTheDocument()
  })

  it("renders assignees with names when 3 or fewer", () => {
    const assignees = [
      { firstName: "Alex", lastName: "Rashfold" },
      { firstName: "James", lastName: "Hopper" },
    ]
    render(<F0TimelineRow {...defaultProps} assignees={assignees} />)
    expect(screen.getByText("Alex Rashfold")).toBeInTheDocument()
    expect(screen.getByText("James Hopper")).toBeInTheDocument()
  })

  it("does not render assignees when array is empty", () => {
    const { container } = render(
      <F0TimelineRow {...defaultProps} assignees={[]} />
    )
    // No avatar list should be rendered
    expect(container.querySelectorAll("[class*='avatar']")).toHaveLength(0)
  })

  describe("multitask", () => {
    it("renders task count in title", () => {
      render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          icon={Settings}
          title="Tasks"
          taskCount={3}
        />
      )
      expect(screen.getByText("3 Tasks")).toBeInTheDocument()
    })

    it("renders as a button when taskCount is provided", () => {
      render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          icon={Settings}
          title="Tasks"
          taskCount={3}
          onExpandToggle={() => {}}
        />
      )
      expect(
        screen.getByRole("button", { name: /3 Tasks/i })
      ).toBeInTheDocument()
    })

    it("calls onExpandToggle when clicking the multitask title", () => {
      const onToggle = vi.fn()
      render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          icon={Settings}
          title="Tasks"
          taskCount={3}
          onExpandToggle={onToggle}
        />
      )
      screen.getByRole("button", { name: /3 Tasks/i }).click()
      expect(onToggle).toHaveBeenCalledOnce()
    })

    it("shows children when expanded", () => {
      render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          icon={Settings}
          title="Tasks"
          taskCount={3}
          expanded
        >
          <span>Child task content</span>
        </F0TimelineRow>
      )
      expect(screen.getByText("Child task content")).toBeInTheDocument()
    })

    it("hides children when collapsed", () => {
      render(
        <F0TimelineRow
          {...defaultProps}
          status="in-progress"
          icon={Settings}
          title="Tasks"
          taskCount={3}
          expanded={false}
        >
          <span>Child task content</span>
        </F0TimelineRow>
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
        container.querySelector(".bg-f1-border-secondary.h-6.w-px")
      ).toBeInTheDocument()
    })

    it("does not render actions when not provided", () => {
      render(<F0TimelineRow {...defaultProps} />)
      expect(screen.queryByText("Approve")).not.toBeInTheDocument()
    })
  })
})
