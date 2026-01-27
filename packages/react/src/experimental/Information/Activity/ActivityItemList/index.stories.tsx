import type { Meta, StoryObj } from "@storybook/react-vite"

import { addSeconds, subDays } from "date-fns"
import MockDate from "mockdate"

import {
  Folder as FolderIcon,
  Money as MoneyIcon,
  PalmTree as PalmTreeIcon,
} from "@/icons/app"

import { ActivityItemList } from "./index"

const mockDate = new Date(2024, 3, 1)
const meta: Meta<typeof ActivityItemList> = {
  decorators: [
    (Story) => (
      <div className="w-[440px]">
        <Story />
      </div>
    ),
  ],
  async beforeEach() {
    MockDate.set(mockDate)

    // 👇 Reset the Date after each story
    return () => {
      MockDate.reset()
    }
  },

  component: ActivityItemList,
  title: "Information/Activity/ActivityItemList",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental", "internal"],
}

export default meta

type Story = StoryObj<typeof ActivityItemList>

const ITEMS = new Array(10).fill(null).map((_, index) => ({
  id: index.toString(),
  title: `Activity Item ${index + 1}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".replace(
      /[\s]/g,
      ""
    ),
  category: (() => {
    const categories = ["Time off", "Documents", "Payroll"]
    return categories[index % categories.length]
  })(),
  icon: (() => {
    const icons = [PalmTreeIcon, FolderIcon, MoneyIcon]
    return icons[index % icons.length]
  })(),
  createdAt: (() => {
    const today = addSeconds(mockDate, 10)

    const groups = [
      today, // today
      subDays(today, 1), // yesterday
      subDays(today, 5), // last week
      subDays(today, 20), // last month
      subDays(today, 50), // last year
      subDays(today, 2 * 365), // previous years
    ]

    return groups[index % groups.length]
  })(),
  isUnread: index === 0,
  onClick: () => {},
}))

export const Default: Story = {
  args: {
    items: ITEMS,
  },
}

export const LoadingMoreItems: Story = {
  args: {
    items: ITEMS,
    loadingMoreItems: true,
  },
}

export const Skeleton: Story = {
  args: {},
  render: () => <ActivityItemList.Skeleton />,
}
