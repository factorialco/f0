import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"
import { expect, within } from "storybook/test"

import { Comment, Home, Marketplace, Shield } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import {
  exampleActions,
  exampleEmptyState,
  exampleGroups,
} from "./Chats/index.stories"
import { SidebarChatList } from "./Chats/SidebarChatList"
import {
  SidebarChatProvider,
  useSidebarChats,
} from "./Chats/SidebarChatProvider"
import { SidebarFooter } from "./Footer"
import * as SidebarFooterStories from "./Footer/index.stories"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SidebarPanelHeader } from "./PanelHeader"
import { SidebarRail } from "./Rail"
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
        <div className="relative h-[500px] w-[240px] rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary">
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
            className="relative isolate h-[500px] w-[240px] bg-f1-background-tertiary"
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
          />
        </>
      }
      body={
        tab === "messages" ? (
          <SidebarChatList
            actions={exampleActions}
            emptyState={exampleEmptyState}
          />
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
      <div className="relative h-[560px] w-[240px] rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary">
        <Story />
      </div>
    ),
  ],
}

/**
 * The same content behind a permanent module rail. The company is the logo
 * alone, the account moved to the foot of the rail, and the panel is titled
 * after the active module instead of after the company.
 *
 * The full behaviour — what collapsing does, how it reflows, what happens to
 * the page header's menu button — only shows inside the frame:
 * see `App shell/ApplicationFrame → RailNavigation`.
 */
const RailSidebarInner = () => {
  const [company, setCompany] = useState("1")
  const [tab, setTab] = useState("home")
  const { unreadChatsCount } = useSidebarChats()

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    {
      id: "messages",
      label: "Comms",
      icon: Comment,
      badge: unreadChatsCount || undefined,
    },
  ]

  return (
    <Sidebar
      rail={
        <SidebarRail
          company={{
            ...SidebarHeaderStories.Default.args,
            selected: company,
            onChange: setCompany,
          }}
          tabs={tabs}
          activeTab={tab}
          onTabChange={setTab}
          actions={[
            {
              id: "marketplace",
              label: "Marketplace",
              icon: Marketplace,
              onClick: () => {},
            },
            {
              id: "security",
              label: "Security",
              icon: Shield,
              onClick: () => {},
            },
          ]}
          user={{
            user: SidebarFooterStories.Default.args.user,
            options: SidebarFooterStories.Default.args.options,
          }}
        />
      }
      header={
        <>
          <SidebarPanelHeader
            title={tabs.find((t) => t.id === tab)?.label ?? ""}
          />
          {tab === "home" && <SearchBar {...SearchBarStories.Default.args} />}
        </>
      }
      body={
        tab === "messages" ? (
          <SidebarChatList
            actions={exampleActions}
            emptyState={exampleEmptyState}
          />
        ) : (
          <Menu {...SidebarMenuStories.Default.args} />
        )
      }
    />
  )
}

export const WithRail: Story = {
  render: () => (
    <SidebarChatProvider initialGroups={exampleGroups}>
      <RailSidebarInner />
    </SidebarChatProvider>
  ),
  decorators: [
    (Story) => (
      <div className="relative h-[560px] w-[296px] rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary">
        <Story />
      </div>
    ),
  ],
}
