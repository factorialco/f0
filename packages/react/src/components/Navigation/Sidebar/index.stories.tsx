import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { SidebarFooter } from "./Footer"
import * as SidebarFooterStories from "./Footer/index.stories"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"

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
        <div className="h-[500px] w-[240px] bg-f1-background-tertiary">
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
