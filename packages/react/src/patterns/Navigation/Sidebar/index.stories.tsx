import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"
import { expect, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { Comment, Home } from "@/icons/app"

import { SidebarChatList } from "./Chats/SidebarChatList"
import {
  SidebarChatProvider,
  useSidebarChats,
} from "./Chats/SidebarChatProvider"
import { exampleActions, exampleGroups } from "./Chats/index.stories"
import { SidebarFooter } from "./Footer"
import * as SidebarFooterStories from "./Footer/index.stories"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"
import { SidebarTabs } from "./Tabs"

const Header = ({
  defaultSelected,
  companies,
  loading = false,
}: {
  defaultSelected: string
  companies?: { id: string; name: string; logo?: string }[]
  loading?: boolean
}) => {
  const [selected, setSelected] = useState(defaultSelected)
  return (
    <>
      <SidebarHeader
        {...SidebarHeaderStories.Default.args}
        companies={companies ?? SidebarHeaderStories.Default.args.companies}
        selected={selected}
        onChange={setSelected}
        isLoading={loading}
      />
      <SearchBar {...SearchBarStories.Default.args} />
    </>
  )
}

const meta: Meta<typeof Sidebar> = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs", "experimental", "internal"],
  // TabbedSidebar is a reusable example component, not a story.
  excludeStories: ["TabbedSidebar"],
  parameters: {
    layout: "centered",
  },
  args: {
    header: <Header defaultSelected="1" />,
    body: (
      <>
        <Menu {...SidebarMenuStories.Default.args} />
      </>
    ),
    footer: <SidebarFooter {...SidebarFooterStories.Default.args} />,
  } satisfies ComponentProps<typeof Sidebar>,
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {
    header: <Header defaultSelected="1" />,
    body: (
      <>
        <Menu {...SidebarMenuStories.Default.args} />
      </>
    ),
    footer: <SidebarFooter {...SidebarFooterStories.Default.args} />,
  },
  decorators: [
    (Story) => {
      return (
        <div className="h-[500px] w-[240px] bg-f1-background-tertiary border border-solid border-f1-border-secondary rounded relative">
          <Story />
        </div>
      )
    },
  ],
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),

  render: () => {
    const snapshotVariants = [
      { ...Default.args },
      { ...Default.args, header: <Header defaultSelected="2" /> },
      { ...Default.args, header: <Header defaultSelected="4" /> },
      { ...Default.args, header: <Header defaultSelected="4" loading /> },
      {
        ...Default.args,
        header: (
          <Header
            defaultSelected="4"
            companies={[
              {
                id: "4",
                name: "HSP Projektmanagement und Beratung GmbH",
                logo: "/avatars/company04.jpg",
              },
            ]}
          />
        ),
      },
    ]
    return (
      <div className="relative isolate flex gap-10">
        {snapshotVariants.map((variant, index) => (
          <div
            key={index}
            className="isolate h-[500px] w-[240px] bg-f1-background-tertiary relative"
          >
            <Sidebar {...variant} />
          </div>
        ))}
      </div>
    )
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "sidebar-test-id",
  },
  decorators: Default.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("sidebar-test-id")).toBeInTheDocument()
  },
}

/**
 * Sidebar with tabs: a "Main" tab (the regular navigation) and a "Messages"
 * tab backed by a live chat store. Search moves to an icon button on the
 * right. Without tabs, keep composing the header with `SearchBar` (the
 * `Default` story) and the Sidebar stays exactly the same.
 */
const TabbedSidebarInner = () => {
  const [company, setCompany] = useState("1")
  const [tab, setTab] = useState("home")
  // The Messages tab shows a badge with the number of unread conversations.
  const { unreadChatsCount } = useSidebarChats()

  return (
    <Sidebar
      header={
        <>
          <SidebarHeader
            {...SidebarHeaderStories.Default.args}
            selected={company}
            onChange={setCompany}
          />
          <SidebarTabs
            tabs={[
              { id: "home", label: "Home", icon: Home },
              {
                id: "messages",
                label: "Messages",
                icon: Comment,
                badge: unreadChatsCount || undefined,
              },
            ]}
            activeTab={tab}
            onTabChange={setTab}
            search={{ placeholder: "Search..." }}
          />
        </>
      }
      body={
        tab === "messages" ? (
          <SidebarChatList actions={exampleActions} />
        ) : (
          <Menu {...SidebarMenuStories.Default.args} />
        )
      }
      footer={<SidebarFooter {...SidebarFooterStories.Default.args} />}
    />
  )
}

export const TabbedSidebar = () => (
  <SidebarChatProvider initialGroups={exampleGroups}>
    <TabbedSidebarInner />
  </SidebarChatProvider>
)

export const WithTabs: Story = {
  render: () => <TabbedSidebar />,
  decorators: [
    (Story) => (
      <div className="h-[560px] w-[240px] bg-f1-background-tertiary border border-solid border-f1-border-secondary rounded relative">
        <Story />
      </div>
    ),
  ],
}
