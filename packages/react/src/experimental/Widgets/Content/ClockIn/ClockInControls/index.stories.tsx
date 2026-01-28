import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Home as HomeIcon,
  Office as OfficeIcon,
  Suitcase as SuitcaseIcon,
} from "@/icons/app"

import { ClockInControls } from "./index"

const defaultLabels = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
  selectLocation: "Select location",
  selectProject: "Select project",
  paid: "Paid",
  unpaid: "Unpaid",
}

const meta: Meta<typeof ClockInControls> = {
  title: "Home/ClockInControls",
  component: ClockInControls,
  tags: ["autodocs", "experimental"],
  args: {
    labels: defaultLabels,
    locations: [
      {
        id: "1",
        name: "Home",
        icon: HomeIcon,
      },
      {
        id: "2",
        name: "Business Trip",
        icon: SuitcaseIcon,
      },
      {
        id: "3",
        name: "Office",
        icon: OfficeIcon,
      },
    ],
    locationId: "1",
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof ClockInControls>

export const ClockedOut: Story = {
  args: {
    remainingMinutes: 8 * 60,
    data: [],
  },
}

export const ClockedIn: Story = {
  args: {
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: 4 * 60 + 39,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:23:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const NoGraphNorRemainingTime: Story = {
  args: {
    ...ClockedIn.args,
    canSeeGraph: false,
    canSeeRemainingTime: false,
  },
}

export const OnBreak: Story = {
  args: {
    remainingMinutes: 4 * 60 + 39,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:34:00"),
        variant: "break",
      },
    ],
    breakTypeName: "Lunch break",
  },
}

export const WithOvertime: Story = {
  args: {
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: -17,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:45:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T12:45:00"),
        to: new Date("2024-03-20T18:17:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const OvertimeOnly: Story = {
  args: {
    ...WithOvertime.args,
    trackedMinutes: 6 * 60 + 21,
    remainingMinutes: -9 * 60,
  },
}

export const Collapsed: Story = {
  render: (args) => (
    <div className="max-w-[300px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export const WithNoLocationOrProject: Story = {
  args: {
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: 4 * 60 + 39,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:23:00"),
        variant: "clocked-in",
      },
    ],
    locationId: undefined,
  },
}

export const ClockedOutWithSomeTime: Story = {
  args: {
    trackedMinutes: 2 * 60 + 40,
    remainingMinutes: 320,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-out",
      },
    ],
  },
}

export const WithBreakTypes: Story = {
  args: {
    ...ClockedIn.args,
    breakTypes: [
      {
        id: "1",
        name: "Break name",
        duration: "1h",
        description: "This is a description",
        isPaid: true,
      },
      {
        id: "2",
        name: "Break name with very very very long name here",
        duration: "30 min",
        description: "Semi-fixed",
        isPaid: false,
      },
      {
        id: "3",
        name: "Break name",
        duration: "1h",
        description: "Fixed",
        isPaid: true,
      },
    ],
    onChangeBreakTypeId: () => {},
  },
}

export const WithOneBreakType: Story = {
  args: {
    ...ClockedIn.args,
    breakTypes: [
      {
        id: "1",
        name: "Break name",
        duration: "1h",
        description: "This is a description",
        isPaid: true,
      },
    ],
  },
}

export const WithDisabledSelectors: Story = {
  args: {
    ...ClockedOut.args,
    locationSelectorDisabled: true,
  },
}

export const WithHiddenLocationAndProject: Story = {
  args: {
    ...ClockedOut.args,
    canShowLocation: false,
  },
}
