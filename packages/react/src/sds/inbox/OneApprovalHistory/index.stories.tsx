import type { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

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
    firstName: fakePeople.noor.firstName,
    lastName: fakePeople.noor.lastName,
    avatar: "https://i.pravatar.cc/450?img=1",
    status: "approved" as Status,
  },
  {
    firstName: fakePeople.hana.firstName,
    lastName: fakePeople.hana.lastName,
    avatar: "https://i.pravatar.cc/450?img=2",
    status: "approved" as Status,
  },
  {
    firstName: fakePeople.caleb.firstName,
    lastName: fakePeople.caleb.lastName,
    avatar: "https://i.pravatar.cc/450?img=3",
    status: "rejected" as Status,
  },
  {
    firstName: fakePeople.yuki.firstName,
    lastName: fakePeople.yuki.lastName,
    avatar: "https://i.pravatar.cc/450?img=4",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.sofia.firstName,
    lastName: fakePeople.sofia.lastName,
    avatar: "https://i.pravatar.cc/450?img=5",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.ravi.firstName,
    lastName: fakePeople.ravi.lastName,
    avatar: "https://i.pravatar.cc/450?img=6",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.greta.firstName,
    lastName: fakePeople.greta.lastName,
    avatar: "https://i.pravatar.cc/450?img=7",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.iris.firstName,
    lastName: fakePeople.iris.lastName,
    avatar: "https://i.pravatar.cc/450?img=8",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.aaron.firstName,
    lastName: fakePeople.aaron.lastName,
    avatar: "https://i.pravatar.cc/450?img=9",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.nadia.firstName,
    lastName: fakePeople.nadia.lastName,
    avatar: "https://i.pravatar.cc/450?img=10",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.linus.firstName,
    lastName: fakePeople.linus.lastName,
    avatar: "https://i.pravatar.cc/450?img=11",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.camila.firstName,
    lastName: fakePeople.camila.lastName,
    avatar: "https://i.pravatar.cc/450?img=12",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.theo.firstName,
    lastName: fakePeople.theo.lastName,
    avatar: "https://i.pravatar.cc/450?img=13",
    status: "waiting" as Status,
  },
  {
    firstName: fakePeople.eva.firstName,
    lastName: fakePeople.eva.lastName,
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
