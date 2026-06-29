import type { Meta, StoryObj } from "@storybook/react-vite"

import { useMemo, useState } from "react"

import { EyeVisible } from "@/icons/app"
import Briefcase from "@/icons/app/Briefcase"
import Calendar from "@/icons/app/Calendar"
import Check from "@/icons/app/Check"
import Clock from "@/icons/app/Clock"
import Comment from "@/icons/app/Comment"
import Cross from "@/icons/app/Cross"
import FileSigned from "@/icons/app/FileSigned"
import Laptop from "@/icons/app/Laptop"
import Marker from "@/icons/app/Marker"
import Plane from "@/icons/app/Plane"
import Question from "@/icons/app/Question"
import ThumbsUp from "@/icons/app/ThumbsUp"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { fakePeople } from "@/mocks/people"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import { F0TimelineRow } from "../"
import { timelineRowStatuses } from "../types"

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
              firstName: fakePeople.noor.firstName,
              lastName: fakePeople.noor.lastName,
            },
            {
              type: "person",
              badge: { type: "positive", icon: Check },
              firstName: fakePeople.hana.firstName,
              lastName: fakePeople.hana.lastName,
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
              firstName: fakePeople.noor.firstName,
              lastName: fakePeople.noor.lastName,
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: fakePeople.hana.firstName,
              lastName: fakePeople.hana.lastName,
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: fakePeople.caleb.firstName,
              lastName: fakePeople.caleb.lastName,
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: fakePeople.yuki.firstName,
              lastName: fakePeople.yuki.lastName,
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
                  firstName: fakePeople.noor.firstName,
                  lastName: fakePeople.noor.lastName,
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
                  firstName: fakePeople.hana.firstName,
                  lastName: fakePeople.hana.lastName,
                },
                {
                  type: "person",
                  firstName: fakePeople.caleb.firstName,
                  lastName: fakePeople.caleb.lastName,
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
                  firstName: fakePeople.noor.firstName,
                  lastName: fakePeople.noor.lastName,
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: fakePeople.hana.firstName,
                  lastName: fakePeople.hana.lastName,
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: fakePeople.caleb.firstName,
                  lastName: fakePeople.caleb.lastName,
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
              firstName: fakePeople.sofia.firstName,
              lastName: fakePeople.sofia.lastName,
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: fakePeople.hana.firstName,
              lastName: fakePeople.hana.lastName,
              badge: { type: "positive", icon: Check },
            },
            {
              type: "person",
              firstName: fakePeople.caleb.firstName,
              lastName: fakePeople.caleb.lastName,
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
    <div className="w-full">
      <F0TimelineRow
        status="completed"
        icon={Marker}
        title="Submit payment"
        description="Completed on 20/2025"
        metadata={[
          {
            label: "Done by",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  firstName: fakePeople.sofia.firstName,
                  lastName: fakePeople.sofia.lastName,
                },
                {
                  type: "person",
                  firstName: fakePeople.hana.firstName,
                  lastName: fakePeople.hana.lastName,
                },
                {
                  type: "person",
                  firstName: fakePeople.caleb.firstName,
                  lastName: fakePeople.caleb.lastName,
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
        ]}
      />
      <F0TimelineRow
        status="completed"
        icon={Marker}
        title="Complete form"
        description="Completed on 20/2025"
        metadata={[
          {
            label: "Done by",
            hideLabel: true,
            value: {
              type: "list",
              variant: "person",
              avatars: [
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: fakePeople.hana.firstName,
                  lastName: fakePeople.hana.lastName,
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: fakePeople.caleb.firstName,
                  lastName: fakePeople.caleb.lastName,
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
                label: "Assignees",
                hideLabel: true,
                value: {
                  type: "list",
                  variant: "person",
                  avatars: [
                    {
                      type: "person",
                      firstName: fakePeople.sofia.firstName,
                      lastName: fakePeople.sofia.lastName,
                    },
                    {
                      type: "person",
                      firstName: fakePeople.hana.firstName,
                      lastName: fakePeople.hana.lastName,
                    },
                    {
                      type: "person",
                      firstName: fakePeople.caleb.firstName,
                      lastName: fakePeople.caleb.lastName,
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
                      firstName: fakePeople.sofia.firstName,
                      lastName: fakePeople.sofia.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.hana.firstName,
                      lastName: fakePeople.hana.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.caleb.firstName,
                      lastName: fakePeople.caleb.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.yuki.firstName,
                      lastName: fakePeople.yuki.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.ravi.firstName,
                      lastName: fakePeople.ravi.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.noor.firstName,
                      lastName: fakePeople.noor.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.greta.firstName,
                      lastName: fakePeople.greta.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.iris.firstName,
                      lastName: fakePeople.iris.lastName,
                      badge: { type: "positive", icon: Check },
                    },
                    {
                      type: "person",
                      firstName: fakePeople.aaron.firstName,
                      badge: { type: "positive", icon: Check },
                      lastName: fakePeople.aaron.lastName,
                    },
                    {
                      type: "person",
                      firstName: fakePeople.nadia.firstName,
                      lastName: fakePeople.nadia.lastName,
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
                      firstName: fakePeople.noor.firstName,
                      lastName: fakePeople.noor.lastName,
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
                      firstName: fakePeople.hana.firstName,
                      lastName: fakePeople.hana.lastName,
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
                      firstName: fakePeople.caleb.firstName,
                      lastName: fakePeople.caleb.lastName,
                    },
                    {
                      type: "person",
                      badge: { type: "positive", icon: Check },
                      firstName: fakePeople.yuki.firstName,
                      lastName: fakePeople.yuki.lastName,
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
                  firstName: fakePeople.noor.firstName,
                  lastName: fakePeople.noor.lastName,
                },
                {
                  type: "person",
                  badge: { type: "positive", icon: Check },
                  firstName: fakePeople.hana.firstName,
                  lastName: fakePeople.hana.lastName,
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

const NestedtaskInProgressDemo = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="w-full max-w-[720px]">
      <F0TimelineRow
        status="in-progress"
        icon={FileSigned}
        title="Sign documents"
        description="Sent on 14/04/2026"
        taskCount={SIGNATURE_ROWS.length}
        completedCount={
          SIGNATURE_ROWS.filter((r) => r.statusVariant === "positive").length
        }
        expanded={expanded}
        onExpandToggle={() => setExpanded((v) => !v)}
        content={<SignatureCollection />}
        isLast
      />
    </div>
  )
}

export const NestedtaskInProgress: Story = {
  args: {
    status: "in-progress",
  },

  render: () => <NestedtaskInProgressDemo />,
}

const NestedtaskCompletedDemo = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="w-full max-w-[720px]">
      <F0TimelineRow
        status="completed"
        icon={FileSigned}
        title="Sign documents"
        description="Completed on 14/04/2026 06:08"
        expanded={expanded}
        onExpandToggle={() => setExpanded((v) => !v)}
        content={<SignatureCollection />}
        isLast
      />
    </div>
  )
}

export const NestedtaskCompleted: Story = {
  render: () => <NestedtaskCompletedDemo />,
}

const NestedtaskTimelineDemo = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="w-full">
      <F0TimelineRow
        status="in-progress"
        icon={Calendar}
        title="Schedule onboarding sessions"
        description="Estimated on 14/04/2026"
        taskCount={2}
        completedCount={0}
        expanded={expanded}
        onExpandToggle={() => setExpanded(!expanded)}
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
                  firstName: fakePeople.linus.firstName,
                  lastName: fakePeople.linus.lastName,
                },
              ],
            },
          },
          {
            label: "",
            actions: [
              {
                label: "View",
                icon: EyeVisible,
                onClick: () => {},
              },
            ],
            value: {
              type: "avatar",
              variant: {
                type: "file",
                file: {
                  name: "Onboarding plan.pdf",
                  type: "application/pdf",
                },
              },
              text: "Onboarding plan",
            },
          },
        ]}
        items={[
          {
            status: "in-progress",
            icon: Clock,
            title: "Welcome call with People team",
            description: "Pending",
          },
          {
            status: "in-progress",
            icon: Clock,
            title: "Intro session with hiring manager",
            description: "Pending",
          },
        ]}
      />
      <F0TimelineRow
        status="not-started"
        icon={ThumbsUp}
        title="Manager approval"
        description="Estimated on 19/04/2026"
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
                  firstName: fakePeople.linus.firstName,
                  lastName: fakePeople.linus.lastName,
                },
              ],
            },
          },
        ]}
        isLast
      />
    </div>
  )
}

export const NestedtaskTimeline: Story = {
  render: () => <NestedtaskTimelineDemo />,
}

export const NestedtaskNotStarted: Story = {
  args: {
    status: "not-started",
    icon: Laptop,
    title: "Order laptop",
    description: "Estimated on 14/04/2026",
    taskCount: 0,
    expanded: false,
    onExpandToggle: () => {},
    items: [],
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
              firstName: fakePeople.linus.firstName,
              lastName: fakePeople.linus.lastName,
            },
          ],
        },
      },
    ],
    primaryAction: {
      label: "Request equipment",
      icon: Laptop,
      onClick: () => {},
    },
    isLast: true,
  },
}

function MultitaskWithNestedtaskDemo() {
  const [multitaskExpanded, setMultitaskExpanded] = useState(true)
  const [nestedtaskExpanded, setNestedtaskExpanded] = useState(true)

  return (
    <div className="f1-bg-surface-default max-w-[600px] p-4">
      <F0TimelineRow
        status="in-progress"
        title="tasks"
        taskCount={3}
        completedCount={1}
        expanded={multitaskExpanded}
        onExpandToggle={() => setMultitaskExpanded((v) => !v)}
        items={[
          {
            status: "completed",
            title: "Manager approval",
          },
          {
            status: "in-progress",
            icon: Plane,
            title: "Book travel",
            description: "Kickoff trip to Barcelona HQ",
            taskCount: 2,
            completedCount: 1,
            expanded: nestedtaskExpanded,
            onExpandToggle: () => setNestedtaskExpanded((v) => !v),
            items: [
              {
                status: "completed",
                icon: Check,
                title: "Book flights",
                description: "Confirmed",
              },
              {
                status: "in-progress",
                icon: Clock,
                title: "Reserve hotel",
                description: "Pending approval",
              },
            ],
          },
          {
            status: "not-started",
            icon: Briefcase,
            title: "Final review",
          },
        ]}
        isLast
      />
    </div>
  )
}

export const MultitaskWithNestedtask: Story = {
  render: () => <MultitaskWithNestedtaskDemo />,
}

type SignatureRow = {
  id: string
  fileName: string
  fileType: "pdf"
  fileUrl: string
  assignees: Array<{
    name: string
    email: string
    signed?: boolean
  }>
  statusLabel: string
  statusVariant: "positive" | "warning" | "critical"
}

const james = { name: fakePeople.hana.fullName, email: fakePeople.hana.email }
const hellen = {
  name: fakePeople.camila.fullName,
  email: fakePeople.camila.email,
}
const danilo = { name: fakePeople.theo.fullName, email: fakePeople.theo.email }

const SIGNATURE_ROWS: SignatureRow[] = [
  {
    id: "row-1",
    fileName: "Employment contract.pdf",
    fileType: "pdf",
    fileUrl: "https://example.com/employment-contract.pdf",
    assignees: [james, hellen, danilo],
    statusLabel: "3 pending",
    statusVariant: "warning",
  },
  {
    id: "row-2",
    fileName: "Confidentiality agreement.pdf",
    fileType: "pdf",
    fileUrl: "https://example.com/confidentiality-agreement.pdf",
    assignees: [{ ...james, signed: true }],
    statusLabel: "Signed",
    statusVariant: "positive",
  },
  {
    id: "row-3",
    fileName: "Offer letter.pdf",
    fileType: "pdf",
    fileUrl: "https://example.com/offer-letter.pdf",
    assignees: [{ ...james, signed: true }, danilo],
    statusLabel: "1 pending",
    statusVariant: "warning",
  },
]

const SignatureCollection = () => {
  const dataAdapter = useMemo(
    () => ({
      fetchData: async () => ({ records: SIGNATURE_ROWS }),
    }),
    []
  )

  const source = useDataCollectionSource<SignatureRow>(
    {
      dataAdapter,
      itemUrl: (item) => item.fileUrl,
      itemActions: (item) => [
        {
          label: "View document",
          icon: EyeVisible,
          onClick: () => window.open(item.fileUrl, "_blank"),
        },
        {
          label: "Cancel request",
          icon: Cross,
          critical: true,
          enabled: item.statusVariant !== "positive",
          onClick: () => alert(`Cancel ${item.id}`),
        },
      ],
    },
    []
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (item) => ({
              title: item.fileName,
              avatar: {
                type: "file",
                file: {
                  name: item.fileName,
                  type: item.fileType,
                  url: item.fileUrl,
                },
              },
            }),
            fields: [
              {
                label: "Assignees",
                render: (item) => ({
                  type: "avatarList",
                  value: {
                    max: 2,
                    tooltipScroll: "none",
                    avatarList: item.assignees.map((a) => ({
                      type: "person" as const,
                      firstName: a.name.split(" ")[0] ?? a.name,
                      lastName: a.name.split(" ").slice(1).join(" "),
                      badge: a.signed
                        ? { icon: Check, type: "positive" as const }
                        : { icon: Question, type: "warning" as const },
                      tooltipDescription: a.email,
                    })),
                  },
                }),
              },
              {
                label: "Status",
                render: (item) => ({
                  type: "status",
                  value: {
                    status: item.statusVariant,
                    label: item.statusLabel,
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

const NestedtaskWithDataCollectionContentDemo = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="w-full max-w-[720px]">
      <F0TimelineRow
        status="in-progress"
        icon={FileSigned}
        title="Sign documents"
        description="Sent on 14/04/2026"
        expanded={expanded}
        onExpandToggle={() => setExpanded((v) => !v)}
        content={<SignatureCollection />}
        isLast
      />
    </div>
  )
}

/**
 * The `content` slot accepts any React node, so a full `OneDataCollection`
 * instance can be rendered as the nested body of a timeline row — replacing
 * the need for bespoke "log card" components.
 */
export const NestedtaskWithDataCollectionContent: Story = {
  render: () => <NestedtaskWithDataCollectionContentDemo />,
}
