import type { Meta, StoryObj } from "@storybook/react-vite"

import { ClockInGraph } from "./index"

const meta: Meta<typeof ClockInGraph> = {
  title: "Home/ClockInGraph",
  component: ClockInGraph,
  tags: ["autodocs", "experimental"],
  args: {
    trackedMinutes: 60 * 2 + 21,
    remainingMinutes: 60 * 4 + 39,
    data: [],
  },
}

export default meta
type Story = StoryObj<typeof ClockInGraph>

export const Default: Story = {
  args: {
    trackedMinutes: 0,
  },
}

export const Empty: Story = {
  args: {
    trackedMinutes: 0,
  },
}

export const WithSomeProgress: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
    ],
  },
}

export const WithConsecutiveBreaks: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T13:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
    ],
  },
}

export const WithAlternatingEntries: Story = {
  args: {
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T11:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T11:00:00"),
        to: new Date("2024-03-20T11:30:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T11:30:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T13:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
    ],
  },
}

export const WithAlternatingEntriesAndFinalClockedIn: Story = {
  args: {
    trackedMinutes: 120,
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T11:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T11:00:00"),
        to: new Date("2024-03-20T11:30:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T11:30:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T13:00:00"),
        to: new Date("2024-03-20T13:45:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T13:45:00"),
        to: new Date("2024-03-20T15:30:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const WithoutRemainingMinutes: Story = {
  args: {
    trackedMinutes: 120,
    remainingMinutes: undefined,
    data: [
      {
        from: new Date("2024-03-20T09:00:00"),
        to: new Date("2024-03-20T11:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T11:00:00"),
        to: new Date("2024-03-20T11:30:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T11:30:00"),
        to: new Date("2024-03-20T13:00:00"),
        variant: "clocked-in",
      },
    ],
  },
}

export const WithOvertime: Story = {
  args: {
    trackedMinutes: 8 * 60 + 12,
    remainingMinutes: -17,
    data: [
      {
        from: new Date("2024-03-20T08:02:00"),
        to: new Date("2024-03-20T11:02:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:02:00"),
        to: new Date("2024-03-20T13:02:00"),
        variant: "break",
      },
      {
        from: new Date("2024-03-20T13:02:00"),
        to: new Date("2024-03-20T18:17:00"),
        variant: "clocked-in",
      },
    ],
  },
}
