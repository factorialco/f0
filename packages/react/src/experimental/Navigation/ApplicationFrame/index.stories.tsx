import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import { Lightbulb } from "@/icons/app"
import ExternalLink from "@/icons/app/ExternalLink"
import PalmTree from "@/icons/app/PalmTree"

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
      enabled: true,
      greeting: "Hello, John",
      welcomeScreenSuggestions: [
        {
          icon: Lightbulb,
          message: "Share feedback",
          prompt:
            "Share feedback and help shape One with your feedback in the next message (optional)",
        },
        {
          icon: PalmTree,
          message: "Create a new task",
          prompt:
            "Create a new task and help shape One with your feedback in the next message (optional)",
        },
        {
          icon: Lightbulb,
          message: "Create a new project",
          prompt:
            "Create a new project and help shape One with your feedback in the next message (optional)",
        },
      ],
    },
    aiPromotion: {
      enabled: false,
      greeting: "Hey Hellen,",
      title: "Meet One, your AI agent",
      description:
        "One simplifies your daily tasks so you can focus on what really matters. Join the waitlist (open until November 30, 2025) to:",
      benefits: [
        {
          noBoldText: "Get access at",
          boldText: "no additional cost",
        },
        {
          noBoldText: "Explore key features",
          boldText: "early",
        },
        {
          noBoldText: "Share feedback and",
          boldText: "help shape One",
        },
      ],
      actions: [
        {
          label: "Join the waitlist",
          onClick: () => {},
          buttonType: "gradient",
          isLoading: false,
        },
        {
          label: "Learn more",
          onClick: () => {},
          buttonType: "internal",
          buttonVariant: "ghost",
          isLoading: false,
          icon: ExternalLink,
        },
      ],
    },
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
