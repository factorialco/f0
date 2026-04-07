import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { TabItem, Tabs } from "./index"

const tabItems: TabItem[] = [
  { label: "Overview", href: "/", index: true },
  { label: "Courses", href: "/courses" },
  { label: "Categories", href: "/categories" },
  { label: "Catalog", href: "/catalog" },
  { label: "Requests", href: "/requests", "data-test": "foo" },
]

const secondaryTabItems = [
  { label: "All", href: "/courses", index: true },
  { label: "Courses", href: "/courses/new" },
  { label: "Activity", href: "/courses/activity" },
]

const primaryTabItemsWithVariants: TabItem[] = [
  { label: "Overview", href: "/", index: true },
  { label: "Courses", href: "/courses", variant: "upsell" },
  { label: "Categories", href: "/categories" },
  { label: "Catalog", href: "/catalog", variant: "upsell" },
  { label: "Requests", href: "/requests", "data-test": "foo" },
]

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs", "experimental"],
  argTypes: {
    secondary: {
      control: "boolean",
    },
    embedded: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    tabs: tabItems,
    secondary: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole("link", { name: /Requests/i })
    await expect(link.dataset.test).toBe("foo")
  },
}

export const PrimaryWithVariants: Story = {
  args: {
    tabs: primaryTabItemsWithVariants,
    secondary: false,
  },
}

export const Piled: Story = {
  args: {
    tabs: [],
  },
  parameters: {
    currentPath: "/courses",
  },
  render: () => (
    <div>
      <Tabs tabs={tabItems} />
      <Tabs secondary tabs={secondaryTabItems} />
    </div>
  ),
}

export const Secondary: Story = {
  args: {
    tabs: tabItems,
    secondary: true,
  },
}

export const Skeleton: Story = {
  args: {
    tabs: [],
  },
  render: ({ secondary }) => <Tabs.Skeleton secondary={secondary} />,
}

export const SingleTab: Story = {
  args: {
    tabs: [],
  },
  render: () => (
    <div>
      <Tabs tabs={[{ label: "Overview", href: "/" }]} secondary={false} />
      <Tabs tabs={[{ label: "Overview", href: "/" }]} secondary={true} />
    </div>
  ),
}

export const Embedded: Story = {
  args: {
    tabs: tabItems,
    embedded: true,
  },
}

const tabItemsWithIds: TabItem[] = [
  { label: "Overview", id: "overview", index: true },
  { label: "Courses", id: "courses" },
  { label: "Categories", id: "categories" },
  { label: "Catalog", id: "catalog" },
  { label: "Requests", id: "requests", "data-test": "foo" },
]

const tabItemsWithIdsAndVariants: TabItem[] = [
  { label: "Overview", id: "overview", index: true },
  { label: "Courses", id: "courses" },
  { label: "Categories", id: "categories" },
  { label: "Catalog", id: "catalog", variant: "upsell" },
  { label: "Requests", id: "requests", "data-test": "foo" },
]

export const WithIds: Story = {
  args: {
    tabs: tabItemsWithIds,
    activeTabId: "overview",
  },
}

export const WithIdsAndVariants: Story = {
  args: {
    tabs: tabItemsWithIdsAndVariants,
    activeTabId: "overview",
    secondary: true,
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Primary.args,
    dataTestId: "tabs-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("tabs-test-id")).toBeInTheDocument()
  },
}
