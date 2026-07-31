import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { F0Alert } from "@/components/F0Alert"
import { F0Card } from "@/components/F0Card"
import { F0Text } from "@/components/F0Text"
import { Add, Delete, Pencil } from "@/icons/app"
import { F0Box } from "@/lib/F0Box"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Page } from "@/patterns/Navigation/Page"
import { SectionHeader } from "@/patterns/SectionHeader"

import { F0ResourcePage } from "./index"

const meta = {
  title: "Resource page",
  component: F0ResourcePage,
  // Manual MDX lives next to this file, so autodocs is opted out of.
  tags: ["experimental", "!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { description: "The resource's name" },
    description: {
      description:
        "One line under the name: the resource's own description, or its single most identifying fact",
    },
    tabs: {
      description:
        "Sub-views of this resource. A section earns a tab when it is a different way of working, not merely long",
    },
    aside: {
      description:
        "Right-hand rail, read top to bottom. The home of widgets. Omit for a single-column page",
    },
    alert: {
      description:
        "Page-wide notice. Rendered above the header so it is seen before anything else",
    },
    onHistoryClick: {
      description:
        "Opens the resource's activity. Renders the history button leftmost in the action row",
    },
  },
} satisfies Meta<typeof F0ResourcePage>

export default meta
type Story = StoryObj<typeof meta>

const MainContent = () => (
  <F0Box display="flex" flexDirection="column" gap="lg">
    <SectionHeader title="Members" description="" />
    <F0Box display="flex" flexDirection="column" gap="sm">
      {["Ada Lovelace", "Grace Hopper", "Alan Turing"].map((name) => (
        <F0Card key={name} compact title={name} description="Engineering" />
      ))}
    </F0Box>
  </F0Box>
)

/** Placeholder for the widget family, which is designed separately. */
const RailContent = () => (
  <F0Box display="flex" flexDirection="column" gap="md">
    <F0Card compact title="14 members" description="2 leads" />
    <F0Card
      compact
      title="92% set up"
      description="Missing: holiday calendar"
    />
    <F0Card compact title="2 work areas" />
  </F0Box>
)

const baseArgs = {
  title: "Payroll",
  description: "14 members",
  avatar: { type: "team" as const, name: "Payroll" },
  primaryAction: { label: "Add members", icon: Add, onClick: fn() },
  otherActions: [
    { label: "Rename", icon: Pencil, onClick: fn() },
    { label: "Delete", icon: Delete, critical: true, onClick: fn() },
  ],
}

export const Default: Story = {
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    aside: <RailContent />,
    children: <MainContent />,
  },
}

export const WithoutRail: Story = {
  args: {
    ...baseArgs,
    children: <MainContent />,
  },
}

export const WithTabs: Story = {
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "people", label: "People" },
      { id: "settings", label: "Settings" },
    ],
    activeTabId: "overview",
    aside: <RailContent />,
    children: <MainContent />,
  },
}

export const WithAlert: Story = {
  args: {
    ...baseArgs,
    alert: (
      <F0Alert
        variant="warning"
        title="Sync paused"
        description="Reconnect your calendar to resume sync."
      />
    ),
    aside: <RailContent />,
    children: <MainContent />,
  },
}

/**
 * A resource with almost nothing filled in. The rail keeps showing what is
 * missing rather than hiding it, because hidden gaps never get filled.
 */
export const Sparse: Story = {
  args: {
    title: "Untitled workplace",
    avatar: { type: "team" as const, name: "Untitled workplace" },
    primaryAction: { label: "Complete setup", icon: Add, onClick: fn() },
    aside: (
      <F0Card
        compact
        title="20% set up"
        description="Missing: address, timezone, holidays"
      />
    ),
    children: <F0Text variant="body" content="No members yet." />,
  },
}

/**
 * How the component is actually mounted: inside the `children` of
 * `Navigation/Page`, which owns the app page header and its breadcrumbs. `Page`
 * stretches each direct child, so this story is what proves the composition
 * holds rather than splitting the height between header, tabs and content.
 */
export const InsidePage: Story = {
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "people", label: "People" },
    ],
    activeTabId: "overview",
    aside: <RailContent />,
    children: <MainContent />,
  },
  render: (args) => (
    <Page
      header={
        <PageHeader
          module={{ id: "employees", name: "Employees", href: "#" }}
          breadcrumbs={[
            { id: "teams", label: "Teams", href: "#" },
            { id: "payroll", label: "Payroll" },
          ]}
        />
      }
    >
      <F0ResourcePage {...args} />
    </Page>
  ),
}

export const HistoryOpensActivity: Story = {
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    aside: <RailContent />,
    children: <MainContent />,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    // BaseHeader renders a mobile and a desktop action cluster, so the button
    // exists twice in the DOM. The desktop one is last and is the visible one
    // at Storybook's default viewport.
    const historyButtons = canvas.getAllByRole("button", { name: "History" })
    await userEvent.click(historyButtons[historyButtons.length - 1])
    expect(args.onHistoryClick).toHaveBeenCalled()
  },
}

export const Snapshot: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: {
    ...baseArgs,
    onHistoryClick: fn(),
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "people", label: "People" },
    ],
    activeTabId: "overview",
    aside: <RailContent />,
    children: <MainContent />,
  },
}
