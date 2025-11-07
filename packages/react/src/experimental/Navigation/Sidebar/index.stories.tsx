import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps, useState } from "react"
import { SidebarFooter } from "./Footer"
import * as SidebarFooterStories from "./Footer/index.stories"
import { SidebarHeader } from "./Header"
import * as SidebarHeaderStories from "./Header/index.stories"
import { Menu } from "./Menu"
import * as SidebarMenuStories from "./Menu/index.stories"
import { SearchBar } from "./Searchbar"
import * as SearchBarStories from "./Searchbar/index.stories"
import { Sidebar } from "./Sidebar"

const Header = ({ defaultSelected }: { defaultSelected: string }) => {
  const [selected, setSelected] = useState(defaultSelected)
  return (
    <>
      <SidebarHeader
        {...SidebarHeaderStories.Default.args}
        selected={selected}
        onChange={setSelected}
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
      { ...Default.args, header: <Header defaultSelected="3" /> },
      { ...Default.args, header: <Header defaultSelected="4" /> },
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
