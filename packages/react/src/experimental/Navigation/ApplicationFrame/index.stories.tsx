import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps } from "react"
import { expect, within } from "storybook/test"
import { Page } from "../Page"
import * as PageStories from "../Page/index.stories"
import * as SidebarStories from "../Sidebar/index.stories"
import { Sidebar } from "../Sidebar/Sidebar"
import { ApplicationFrame } from "./index"

const meta: Meta<typeof ApplicationFrame> = {
  title: "ApplicationFrame",
  component: ApplicationFrame,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    ai: {
      runtimeUrl: "https://mastra.local.factorial.dev/copilotkit",
      agent: "one-workflow",
      credentials: "include",
      showDevConsole: false,
      enabled: false,
      greeting: "Hello, John",
    },
    aiPromotion: true,
    sidebar: <Sidebar {...SidebarStories.default.args} />,
    children: <Page {...PageStories.Default.args} />,
  } satisfies ComponentProps<typeof ApplicationFrame>,
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

const DefaultStoryComponent = (
  args: ComponentProps<typeof ApplicationFrame>
) => {
  return (
    <ApplicationFrame
      ai={args.ai}
      aiPromotion={args.aiPromotion}
      sidebar={<Sidebar {...SidebarStories.default.args} />}
    >
      <Page {...PageStories.Default.args} />
    </ApplicationFrame>
  )
}

export const Default: Story = {
  render: (args) => <DefaultStoryComponent {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole("link", { name: /inbox/i })
    await expect(link.dataset.test).toBe("foo")
  },
}
