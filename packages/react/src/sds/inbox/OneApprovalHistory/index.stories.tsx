import type { Meta, StoryObj } from "@storybook/react-vite"

import type { Status } from "./ApprovalStep"

import { OneApprovalHistory } from "."

const meta = {
  title: "Inbox/ApprovalHistory",
  component: OneApprovalHistory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[475px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OneApprovalHistory>

export default meta
type Story = StoryObj<typeof meta>

const mockApprovers = [
  {
    firstName: "John",
    lastName: "Doe",
    avatar: "https://i.pravatar.cc/450?img=1",
    status: "approved" as Status,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    avatar: "https://i.pravatar.cc/450?img=2",
    status: "approved" as Status,
  },
  {
    firstName: "Mike",
    lastName: "Johnson",
    avatar: "https://i.pravatar.cc/450?img=3",
    status: "rejected" as Status,
  },
  {
    firstName: "Sarah",
    lastName: "Williams",
    avatar: "https://i.pravatar.cc/450?img=4",
    status: "waiting" as Status,
  },
  {
    firstName: "David",
    lastName: "Brown",
    avatar: "https://i.pravatar.cc/450?img=5",
    status: "waiting" as Status,
  },
  {
    firstName: "Emma",
    lastName: "Davis",
    avatar: "https://i.pravatar.cc/450?img=6",
    status: "waiting" as Status,
  },
  {
    firstName: "James",
    lastName: "Miller",
    avatar: "https://i.pravatar.cc/450?img=7",
    status: "waiting" as Status,
  },
  {
    firstName: "Olivia",
    lastName: "Wilson",
    avatar: "https://i.pravatar.cc/450?img=8",
    status: "waiting" as Status,
  },
  {
    firstName: "William",
    lastName: "Moore",
    avatar: "https://i.pravatar.cc/450?img=9",
    status: "waiting" as Status,
  },
  {
    firstName: "Sophia",
    lastName: "Taylor",
    avatar: "https://i.pravatar.cc/450?img=10",
    status: "waiting" as Status,
  },
  {
    firstName: "Lucas",
    lastName: "Anderson",
    avatar: "https://i.pravatar.cc/450?img=11",
    status: "waiting" as Status,
  },
  {
    firstName: "Ava",
    lastName: "Thomas",
    avatar: "https://i.pravatar.cc/450?img=12",
    status: "waiting" as Status,
  },
  {
    firstName: "Henry",
    lastName: "Jackson",
    avatar: "https://i.pravatar.cc/450?img=13",
    status: "waiting" as Status,
  },
  {
    firstName: "Isabella",
    lastName: "White",
    avatar: "https://i.pravatar.cc/450?img=14",
    status: "waiting" as Status,
  },
]

export const SingleApproval: Story = {
  args: {
    steps: [
      {
        title: "Manager Approval",
        approvalsRequired: 1,
        status: "pending",
        approvers: mockApprovers,
      },
    ],
  },
}

export const MultipleApprovals: Story = {
  args: {
    steps: [
      {
        title: "Manager Approval",
        approvalsRequired: 2,
        status: "approved",
        approvers: mockApprovers,
      },
      {
        title: "HR Approval",
        approvalsRequired: 1,
        status: "pending",
        approvers: mockApprovers,
      },
    ],
  },
}

export const RejectedApproval: Story = {
  args: {
    steps: [
      {
        title: "Manager Approval",
        approvalsRequired: 1,
        status: "rejected",
        approvers: mockApprovers,
      },
    ],
  },
}

export const WaitingApproval: Story = {
  args: {
    steps: [
      {
        title: "Manager Approval",
        approvalsRequired: 2,
        status: "waiting",
        approvers: mockApprovers,
      },
    ],
  },
}
