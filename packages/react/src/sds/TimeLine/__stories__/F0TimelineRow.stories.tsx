import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import Check from "@/icons/app/Check"
import Comment from "@/icons/app/Comment"
import Cross from "@/icons/app/Cross"
import Marker from "@/icons/app/Marker"
import ThumbsUp from "@/icons/app/ThumbsUp"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TimelineRow } from "../"
import { timelineRowStatuses } from "../types"
import { EyeVisible } from "@/icons/app"

const meta = {
  component: F0TimelineRow,
  title: "TimelineRow",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A single row in a timeline, representing a task or step with status, icon, title, description, metadata, and actions.",
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
    icon: Marker,
    title: "Submit payment",
    description: "Completed on 20/2025",
    isLast: false,
  },
} satisfies Meta<typeof F0TimelineRow>

export default meta
type Story = StoryObj<typeof meta>

export const Completed: Story = {
  args: {
    metadata: [
      {
        label: "",
        actions: [
          {
            label: "Download",
            icon: EyeVisible,
            onClick: () => {},
          },
        ],
        value: {
          type: "avatar",
          variant: {
            type: "file",
            file: {
              name: "document.pdf",
              type: "application/pdf",
            },
          },
          text: "Document",
        },
      },
      {
        label: "",
        hideLabel: true,
        value: {
          type: "list",
          variant: "person",
          avatars: [
            {
              type: "person",
              badge: { type: "positive", icon: Check },
              firstName: "Alex",
              lastName: "Rashfold",
            },
            {
              type: "person",
              badge: { type: "positive", icon: Check },
              firstName: "James",
              lastName: "Hopper",
            },
          ],
        },
      },
    ],
  },
}

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
    metadata: [
      {
        label: "",
        hideLabel: true,
        value: {
          type: "list",
          variant: "person",
          avatars: [
            {
              type: "person",
              firstName: "Alex",
              lastName: "Rashfold",
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: "James",
              lastName: "Hopper",
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: "Sarah",
              lastName: "Connor",
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: "John",
              lastName: "Doe",
              badge: { type: "positive", icon: Check },
            },
          ],
        },
      },
    ],
  },
}

export const WithMetadata: Story = {
  args: {
    status: "completed",
    title: "Submit payment",
    description: "Completed on 20/2025",
    metadata: [
      {
        label: "",
        actions: [
          {
            label: "Download",
            icon: EyeVisible,
            onClick: () => {},
          },
        ],
        value: {
          type: "avatar",
          variant: {
            type: "file",
            file: {
              name: "document.pdf",
              type: "application/pdf",
            },
          },
          text: "Climate Survey.pdf",
        },
      },
      {
        label: "Team",
        value: {
          type: "status",
          label: "IT team",
          variant: "critical",
        },
      },
    ],
  },
}

export const Timeline: Story = {
  render: () => (
    <div>
      <F0TimelineRow
        status="completed"
        icon={Marker}
        title="Submit payment"
        description="Completed on 20/2025"
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "Alex",
                  lastName: "Rashfold",
                },
              ],
            },
          },
        ]}
      />
      <F0TimelineRow
        status="completed"
        icon={Marker}
        title="Complete form"
        description="Completed on 20/2025"
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "James",
                  lastName: "Hopper",
                },
                {
                  type: "person",
                  firstName: "Sarah",
                  lastName: "Connor",
                  badge: { type: "positive", icon: Check },
                },
              ],
            },
          },
        ]}
      />
      <F0TimelineRow
        status="in-progress"
        icon={Marker}
        title="Complete form"
        description="Estimated on 24/07/2025"
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "Alex",
                  lastName: "Rashfold",
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "James",
                  lastName: "Hopper",
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "Sarah",
                  lastName: "Connor",
                },
              ],
            },
          },
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
        icon={Marker}
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
    icon: Marker,
    title: "Complete form",
    description: "Estimated on 18/07/2025",
    metadata: [
      {
        label: "",
        hideLabel: true,
        value: {
          type: "list",
          variant: "person",
          avatars: [
            {
              type: "person",
              firstName: "Quigley",
              lastName: "Smitty",
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: "James",
              lastName: "Hopper",
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: "Sarah",
              lastName: "Connor",
              badge: { type: "positive", icon: Check },
            },
          ],
        },
      },
      {
        label: "Team",
        value: {
          type: "status",
          label: "IT team",
          variant: "critical",
        },
      },
      {
        label: "Form",
        value: { type: "text", content: "Vendor assessment form" },
      },
    ],
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
        icon={Marker}
        title="Submit payment"
        description="Completed on 20/2025"
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  firstName: "Alex",
                  badge: { type: "positive", icon: Check },
                  lastName: "Rashfold",
                },
              ],
            },
          },
        ]}
      />
      <F0TimelineRow
        status="completed"
        icon={Marker}
        title="Complete form"
        description="Completed on 20/2025"
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "James",
                  lastName: "Hopper",
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "Sarah",
                  lastName: "Connor",
                },
              ],
            },
          },
        ]}
      />
      <F0TimelineRow
        status="completed"
        icon={Marker}
        title="Submit payment"
        description="Completed on 20/2025"
      />
      <F0TimelineRow
        status="in-progress"
        title="Tasks"
        taskCount={3}
        completedCount={2}
        expanded={expanded}
        onExpandToggle={() => setExpanded(!expanded)}
        items={[
          {
            status: "in-progress",
            icon: Marker,
            title: "Complete form",
            description: "Estimated on 18/07/2025",
            metadata: [
              {
                label: "",
                hideLabel: true,
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [
                    {
                      type: "person",
                      firstName: "Quigley",
                      lastName: "Smitty",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "James",
                      lastName: "Hopper",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Sarah",
                      lastName: "Connor",
                      badge: { type: "positive", icon: Check },
                    },
                  ],
                },
              },
              {
                label: "Team",
                value: {
                  type: "status",
                  label: "IT team",
                  variant: "critical",
                },
              },
              {
                label: "Form",
                value: {
                  type: "text",
                  content: "Vendor assessment form",
                },
              },
            ],
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
          {
            status: "not-started",
            icon: ThumbsUp,
            title: "Manager approval",
            description: "Estimated on 24/07/2025",
          },
          {
            status: "not-started",
            icon: Marker,
            title: "Next steps pending",
            description:
              "The next steps depend on the outcome of previous ones.",
          },
        ]}
      />
      <F0TimelineRow
        status="not-started"
        icon={Marker}
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
        icon={Marker}
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
        title="Tasks"
        taskCount={6}
        completedCount={2}
        expanded={expanded}
        onExpandToggle={() => setExpanded(!expanded)}
        isLast
        items={[
          {
            status: "in-progress",
            icon: Marker,
            title: "General task",
            description: "Estimated on 03/23/2026",
            metadata: [
              {
                label: "",
                hideLabel: true,
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [
                    {
                      type: "person",
                      firstName: "Quigley",
                      lastName: "Smitty",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "James",
                      lastName: "Hopper",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Sarah",
                      lastName: "Connor",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "John",
                      lastName: "Doe",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Jane",
                      lastName: "Smith",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Alex",
                      lastName: "Rashfold",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Emily",
                      lastName: "Chen",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Mike",
                      lastName: "Ross",
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: "Rachel",
                      badge: { type: "positive", icon: Check },
                      lastName: "Green",
                    },
                    {
                      type: "person",
                      firstName: "Monica",
                      lastName: "Geller",
                      badge: { type: "positive", icon: Check },
                    },
                  ],
                },
              },
            ],
            primaryAction: {
              label: "Mark as done",
              icon: Check,
              onClick: () => {},
            },
          },
          {
            status: "in-progress",
            icon: ThumbsUp,
            title: "Manual review",
            description: "Estimated on 03/23/2026",
            metadata: [
              {
                label: "",
                hideLabel: true,
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [
                    {
                      type: "person",
                      badge: { type: "positive", icon: Check },
                      firstName: "Alex",
                      lastName: "Rashfold",
                    },
                  ],
                },
              },
            ],
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
          {
            status: "not-started",
            icon: Marker,
            title: "Upload document",
            description: "Estimated on 03/23/2026",
            metadata: [
              {
                label: "",
                hideLabel: true,
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [
                    {
                      type: "person",
                      badge: { type: "positive", icon: Check },
                      firstName: "James",
                      lastName: "Hopper",
                    },
                  ],
                },
              },
            ],
          },
          {
            status: "not-started",
            icon: ThumbsUp,
            title: "Manager approval",
            description: "Estimated on 03/25/2026",
          },
          {
            status: "not-started",
            icon: Marker,
            title: "Sign contract",
            description: "Estimated on 03/26/2026",
            metadata: [
              {
                label: "",
                hideLabel: true,
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [
                    {
                      type: "person",
                      badge: { type: "positive", icon: Check },
                      firstName: "Sarah",
                      lastName: "Connor",
                    },
                    {
                      type: "person",
                      badge: { type: "positive", icon: Check },
                      firstName: "John",
                      lastName: "Doe",
                    },
                  ],
                },
              },
            ],
          },
          {
            status: "not-started",
            icon: Marker,
            title: "Final review",
            description:
              "The next steps depend on the outcome of previous ones.",
          },
        ]}
      />
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
        icon={Marker}
        title="Complete form"
        description="Estimated on 24/07/2025"
        metadata={[
          {
            label: "",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "Alex",
                  lastName: "Rashfold",
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: "James",
                  lastName: "Hopper",
                },
              ],
            },
          },
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
        icon={Marker}
        title="Next steps"
        isLast
      />
    </div>
  ),
}
