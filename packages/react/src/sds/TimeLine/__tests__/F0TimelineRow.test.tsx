import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import Check from "@/icons/app/Check"
import Clock from "@/icons/app/Clock"
import Comment from "@/icons/app/Comment"
import Cross from "@/icons/app/Cross"
import FileSigned from "@/icons/app/FileSigned"
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

  it("renders metadata items", () => {
    render(
      <F0TimelineRow
        {...defaultProps}
        status="in-progress"
        metadata={[
          {
            label: "Team",
            value: { type: "text", content: "IT team" },
          },
        ]}
      />
    )
    expect(screen.getByText("IT team")).toBeInTheDocument()
  })

  it("renders metadata with avatar list", () => {
    const { container } = render(
      <F0TimelineRow
        {...defaultProps}
        metadata={[
          {
            label: "Assignees",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                { type: "person", firstName: "Alex", lastName: "Rashfold" },
                { type: "person", firstName: "James", lastName: "Hopper" },
              ],
            },
          },
        ]}
      />
    )
    expect(
      container.querySelector("[data-testid='overflow-visible-container']")
    ).toBeInTheDocument()
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

  it("renders metadata avatar list for completed rows inline", () => {
    const { container } = render(
      <F0TimelineRow
        {...defaultProps}
        metadata={[
          {
            label: "Assignees",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                { type: "person", firstName: "Alex", lastName: "Rashfold" },
                { type: "person", firstName: "James", lastName: "Hopper" },
              ],
            },
          },
        ]}
      />
    )
    expect(
      container.querySelector("[data-testid='overflow-visible-container']")
    ).toBeInTheDocument()
  })

  it("does not render metadata when not provided", () => {
    render(<F0TimelineRow {...defaultProps} />)
    expect(screen.queryByText("IT team")).not.toBeInTheDocument()
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

  describe("nestedtask", () => {
    const nestedtaskProps = {
      status: "in-progress" as const,
      icon: FileSigned,
      title: "Sign document",
      description: "Estimated on 14/04/2026",
      taskCount: 2,
      completedCount: 0,
      expanded: false,
      onExpandToggle: vi.fn(),
      items: [
        {
          status: "in-progress" as const,
          icon: Clock,
          title: "Hellen (hellen@factorial.co)",
          description: "Pending",
        },
        {
          status: "in-progress" as const,
          icon: Clock,
          title: "Danilo (danilo@gmail.com)",
          description: "Pending",
        },
      ],
    }

    it("renders the title and description", () => {
      render(<F0TimelineRow {...nestedtaskProps} />)
      expect(screen.getByText("Sign document")).toBeInTheDocument()
      expect(screen.getByText("Estimated on 14/04/2026")).toBeInTheDocument()
    })

    it("renders the progress pill", () => {
      render(<F0TimelineRow {...nestedtaskProps} />)
      expect(screen.getByText("0/2")).toBeInTheDocument()
    })

    it("renders completed progress pill with positive variant", () => {
      render(
        <F0TimelineRow
          {...nestedtaskProps}
          status="completed"
          completedCount={2}
        />
      )
      expect(screen.getByText("2/2")).toBeInTheDocument()
    })

    it("calls onExpandToggle when clicking the header", async () => {
      const user = userEvent.setup()
      const onToggle = vi.fn()
      render(<F0TimelineRow {...nestedtaskProps} onExpandToggle={onToggle} />)
      await user.click(screen.getByText("Sign document"))
      expect(onToggle).toHaveBeenCalledOnce()
    })

    it("shows items when expanded", () => {
      render(<F0TimelineRow {...nestedtaskProps} expanded />)
      expect(
        screen.getByText("Hellen (hellen@factorial.co)")
      ).toBeInTheDocument()
      expect(screen.getByText("Danilo (danilo@gmail.com)")).toBeInTheDocument()
    })

    it("hides items when collapsed", () => {
      render(<F0TimelineRow {...nestedtaskProps} expanded={false} />)
      expect(
        screen.queryByText("Hellen (hellen@factorial.co)")
      ).not.toBeInTheDocument()
    })

    it("renders metadata when provided", () => {
      render(
        <F0TimelineRow
          {...nestedtaskProps}
          metadata={[
            {
              label: "Team",
              value: { type: "text", content: "Operations" },
            },
          ]}
        />
      )
      expect(screen.getByText("Operations")).toBeInTheDocument()
    })

    it("renders strikethrough title when completed", () => {
      render(<F0TimelineRow {...nestedtaskProps} status="completed" />)
      const title = screen.getByText("Sign document")
      expect(title.className).toContain("line-through")
    })

    it("does not render strikethrough title when in-progress", () => {
      render(<F0TimelineRow {...nestedtaskProps} />)
      const title = screen.getByText("Sign document")
      expect(title.className).not.toContain("line-through")
    })
  })

  describe("multitask with nestedtask items", () => {
    const nestedtaskItem = {
      status: "in-progress" as const,
      icon: FileSigned,
      title: "Sign document",
      description: "Laptop agreement",
      taskCount: 2,
      completedCount: 1,
      expanded: true,
      onExpandToggle: vi.fn(),
      items: [
        {
          status: "in-progress" as const,
          icon: Clock,
          title: "Hellen (hellen@factorial.co)",
          description: "Pending",
        },
        {
          status: "completed" as const,
          icon: Check,
          title: "Danilo (danilo@gmail.com)",
          description: "Signed",
        },
      ],
    }

    it("renders nestedtask header inside multitask", () => {
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={2}
          completedCount={0}
          expanded={true}
          onExpandToggle={() => {}}
          items={[nestedtaskItem]}
        />
      )
      expect(screen.getByText("Sign document")).toBeInTheDocument()
      expect(screen.getByText("1/2")).toBeInTheDocument()
    })

    it("renders nestedtask nested items when expanded inside multitask", () => {
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={2}
          completedCount={0}
          expanded={true}
          onExpandToggle={() => {}}
          items={[nestedtaskItem]}
        />
      )
      expect(
        screen.getByText("Hellen (hellen@factorial.co)")
      ).toBeInTheDocument()
      expect(screen.getByText("Danilo (danilo@gmail.com)")).toBeInTheDocument()
    })

    it("calls nestedtask onExpandToggle when clicking its header", async () => {
      const user = userEvent.setup()
      const onNestedToggle = vi.fn()
      render(
        <F0TimelineRow
          status="in-progress"
          title="Tasks"
          taskCount={2}
          completedCount={0}
          expanded={true}
          onExpandToggle={() => {}}
          items={[{ ...nestedtaskItem, onExpandToggle: onNestedToggle }]}
        />
      )
      await user.click(screen.getByText("Sign document"))
      expect(onNestedToggle).toHaveBeenCalledOnce()
    })
  })
})
