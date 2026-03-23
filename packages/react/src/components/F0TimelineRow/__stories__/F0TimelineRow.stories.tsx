import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import Check from "@/icons/app/Check"
import Comment from "@/icons/app/Comment"
import Cross from "@/icons/app/Cross"
import Pencil from "@/icons/app/Pencil"
import Settings from "@/icons/app/Settings"
import ThumbsUp from "@/icons/app/ThumbsUp"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TimelineRow } from "../"
import { timelineRowStatuses } from "../types"

const meta = {
  component: F0TimelineRow,
  title: "Components/TimelineRow",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A single row in a timeline, representing a task or step with status, icon, title, description, assignees, and optional right-side content.",
      },
    },
  },
  argTypes: {
    status: {
      control: "select",
      options: timelineRowStatuses,
      table: {
        type: { summary: timelineRowStatuses.join(" | ") },
      },
    },
    isLast: {
      control: "boolean",
    },
  },
  args: {
    status: "completed",
    icon: Pencil,
    title: "Submit payment",
    description: "Completed on 20/2025",
    isLast: false,
  },
} satisfies Meta<typeof F0TimelineRow>

export default meta
type Story = StoryObj<typeof meta>

export const Completed: Story = {}

export const InProgress: Story = {
  args: {
    status: "in-progress",
    title: "Complete form",
    description: "Estimated on 18/07/2025",
  },
}

export const NotStarted: Story = {
  args: {
    status: "not-started",
    title: "Admin approval",
    description: "Estimated on 24/07/2025",
    isLast: true,
  },
}

export const WithAssignees: Story = {
  args: {
    status: "in-progress",
    title: "Complete form",
    description: "Estimated on 24/07/2025",
    assignees: [
      { firstName: "Alex", lastName: "Rashfold" },
      { firstName: "James", lastName: "Hopper" },
      { firstName: "Sarah", lastName: "Connor" },
      { firstName: "John", lastName: "Doe" },
    ],
  },
}

export const WithRightContent: Story = {
  args: {
    status: "completed",
    title: "Submit payment",
    description: "Completed on 20/2025",
    right: (
      <div className="flex items-center gap-2">
        <span className="rounded bg-f1-background-critical px-2 py-0.5 text-xs text-f1-foreground-critical">
          IT team
        </span>
        <span className="rounded bg-f1-background-secondary px-2 py-0.5 text-xs text-f1-foreground-secondary">
          Climate Survey
        </span>
      </div>
    ),
  },
}

export const Timeline: Story = {
  render: () => (
    <div>
      <F0TimelineRow
        status="completed"
        icon={Pencil}
        title="Submit payment"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="completed"
        icon={Pencil}
        title="Complete form"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="in-progress"
        icon={Pencil}
        title="Complete form"
        description="Estimated on 24/07/2025"
        assignees={[
          { firstName: "Alex", lastName: "Rashfold" },
          { firstName: "James", lastName: "Hopper" },
          { firstName: "Sarah", lastName: "Connor" },
        ]}
      />
      <F0TimelineRow
        status="not-started"
        icon={ThumbsUp}
        title="Admin approval"
        description="Estimated on 24/07/2025"
      />
      <F0TimelineRow
        status="not-started"
        icon={Pencil}
        title="Next steps pending"
        description="Estimated on 25/07/2025"
        isLast
      />
    </div>
  ),
}

export const WithActions: Story = {
  args: {
    status: "in-progress",
    icon: Pencil,
    title: "Complete form",
    description: "Estimated on 18/07/2025",
    assignees: [
      { firstName: "Quigley", lastName: "Smitty" },
      { firstName: "James", lastName: "Hopper" },
      { firstName: "Sarah", lastName: "Connor" },
    ],
    right: (
      <div className="flex items-center gap-1 text-sm text-f1-foreground-secondary">
        <span className="inline-flex items-center gap-1 rounded bg-f1-background-critical px-1.5 py-0.5 text-xs text-f1-foreground-critical">
          ★ IT team
        </span>
        <span>·</span>
        <span className="inline-flex items-center gap-1 rounded bg-f1-background-secondary px-1.5 py-0.5 text-xs text-f1-foreground-secondary">
          SY
        </span>
        <span>Vendor assessment form</span>
      </div>
    ),
    primaryAction: {
      label: "Approve",
      icon: Check,
      onClick: () => {},
    },
    secondaryActions: [
      {
        label: "Request changes",
        icon: Comment,
        onClick: () => {},
      },
      {
        label: "Reject",
        icon: Cross,
        onClick: () => {},
      },
    ],
  },
}

const MultitaskTimelineDemo = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="w-[600px]">
      <F0TimelineRow
        status="completed"
        icon={Pencil}
        title="Submit payment"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="completed"
        icon={Pencil}
        title="Complete form"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="completed"
        icon={Pencil}
        title="Submit payment"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="in-progress"
        icon={Settings}
        title="Tasks"
        taskCount={3}
        expanded={expanded}
        onExpandToggle={() => setExpanded(!expanded)}
      >
        <F0TimelineRow
          hideStatus
          status="in-progress"
          icon={Pencil}
          title="Complete form"
          description="Estimated on 18/07/2025"
          assignees={[
            { firstName: "Quigley", lastName: "Smitty" },
            { firstName: "James", lastName: "Hopper" },
            { firstName: "Sarah", lastName: "Connor" },
          ]}
          right={
            <div className="flex items-center gap-1 text-sm text-f1-foreground-secondary">
              <span className="inline-flex items-center gap-1 rounded bg-f1-background-critical px-1.5 py-0.5 text-xs text-f1-foreground-critical">
                ★ IT team
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 rounded bg-f1-background-secondary px-1.5 py-0.5 text-xs text-f1-foreground-secondary">
                SY
              </span>
              <span>Vendor assessment form</span>
            </div>
          }
          primaryAction={{
            label: "Approve",
            icon: Check,
            onClick: () => {},
          }}
          secondaryActions={[
            {
              label: "Request changes",
              icon: Comment,
              onClick: () => {},
            },
            {
              label: "Reject",
              icon: Cross,
              onClick: () => {},
            },
          ]}
        />
        <F0TimelineRow
          hideStatus
          status="not-started"
          icon={ThumbsUp}
          title="Manager approval"
          description="Estimated on 24/07/2025"
        />
        <F0TimelineRow
          hideStatus
          status="not-started"
          icon={Pencil}
          title="Next steps pending"
          description="The next steps depend on the outcome of previous ones."
          isLast
        />
      </F0TimelineRow>
      <F0TimelineRow
        status="not-started"
        icon={Pencil}
        title="Complete form"
        description="Estimated on 18/07/2025"
      />
      <F0TimelineRow
        status="not-started"
        icon={ThumbsUp}
        title="Admin approval"
        description="Estimated on 24/07/2025"
      />
      <F0TimelineRow
        status="not-started"
        icon={Pencil}
        title="Next steps pending"
        description="The next steps depend on the outcome of previous ones."
        isLast
      />
    </div>
  )
}

export const MultitaskTimeline: Story = {
  render: () => <MultitaskTimelineDemo />,
}

const MultitaskDemo = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="w-[500px]">
      <F0TimelineRow
        status="in-progress"
        icon={Settings}
        title="Tasks"
        taskCount={3}
        expanded={expanded}
        onExpandToggle={() => setExpanded(!expanded)}
        isLast
      >
        <F0TimelineRow
          hideStatus
          status="in-progress"
          icon={Pencil}
          title="Complete form"
          description="Estimated on 24/07/2025"
          assignees={[
            { firstName: "Quigley", lastName: "Smitty" },
            { firstName: "James", lastName: "Hopper" },
            { firstName: "Sarah", lastName: "Connor" },
            { firstName: "John", lastName: "Doe" },
            { firstName: "Jane", lastName: "Smith" },
            { firstName: "Alex", lastName: "Rashfold" },
            { firstName: "Emily", lastName: "Chen" },
          ]}
        />
        <F0TimelineRow
          hideStatus
          status="in-progress"
          icon={Pencil}
          title="Complete form"
          description="Estimated on 24/07/2025"
          assignees={[{ firstName: "Alex", lastName: "Rashfold" }]}
        />
        <F0TimelineRow
          hideStatus
          status="not-started"
          icon={Pencil}
          title="Lunch"
          description="Estimated on 24/07/2025"
          assignees={[{ firstName: "James", lastName: "Hopper" }]}
          isLast
          primaryAction={{
            label: "Approve",
            icon: Check,
            onClick: () => {},
          }}
          secondaryActions={[
            {
              label: "Request changes",
              icon: Comment,
              onClick: () => {},
            },
            {
              label: "Reject",
              icon: Cross,
              onClick: () => {},
            },
          ]}
        />
      </F0TimelineRow>
    </div>
  )
}

export const Multitask: Story = {
  render: () => <MultitaskDemo />,
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="w-[600px]">
      <F0TimelineRow
        status="completed"
        icon={Check}
        title="Submit payment"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="in-progress"
        icon={Pencil}
        title="Complete form"
        description="Estimated on 24/07/2025"
        assignees={[
          { firstName: "Alex", lastName: "Rashfold" },
          { firstName: "James", lastName: "Hopper" },
        ]}
      />
      <F0TimelineRow
        status="not-started"
        icon={ThumbsUp}
        title="Admin approval"
        description="Estimated on 24/07/2025"
      />
      <F0TimelineRow
        status="not-started"
        icon={Pencil}
        title="Next steps"
        isLast
      />
    </div>
  ),
}
