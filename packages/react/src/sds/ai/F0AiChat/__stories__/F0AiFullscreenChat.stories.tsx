import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect } from "react"

import { Lightbulb, ThumbsDown, ThumbsUp } from "@/icons/app"

import { F0AiChatProvider, F0AiFullscreenChat, useAiChat } from ".."

const FullscreenChatWrapper = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const { setWelcomeScreenSuggestions } = useAiChat()

  useEffect(() => {
    setWelcomeScreenSuggestions([
      {
        icon: Lightbulb,
        message: "Hello, how can I help you today?",
        prompt: "Hello, how can I help you today?",
      },
      {
        icon: ThumbsUp,
        message: "Share feedback",
        prompt: "Share feedback and help shape One with your feedback",
      },
      {
        icon: ThumbsDown,
        message: "Very long message to test the layout of the suggestions list",
        prompt: "Very long message to test the layout of the suggestions list",
      },
    ])
  }, [setWelcomeScreenSuggestions])

  return <>{children}</>
}

const meta = {
  title: "AI/F0AiFullscreenChat",
  component: F0AiFullscreenChat,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <F0AiChatProvider
          enabled
          runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
          agent="one-workflow"
          credentials="include"
          showDevConsole={false}
          greeting="Hello, John"
          disclaimer={{
            text: "One works within your permissions.",
            link: "/permissions",
            linkText: "See more",
          }}
        >
          <FullscreenChatWrapper>
            <Story />
          </FullscreenChatWrapper>
        </F0AiChatProvider>
      )
    },
  ],
} satisfies Meta<typeof F0AiFullscreenChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithToolHints: Story = {
  decorators: [
    (Story) => {
      return (
        <F0AiChatProvider
          enabled
          runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
          agent="one-workflow"
          credentials="include"
          showDevConsole={false}
          greeting="Hello, John"
          toolHints={[
            {
              id: "tables",
              label: "Tables",
              prompt: "The user wants you to generate tables",
            },
            {
              id: "analysis",
              label: "Data analysis",
              prompt: "The user wants data analysis",
            },
          ]}
        >
          <FullscreenChatWrapper>
            <Story />
          </FullscreenChatWrapper>
        </F0AiChatProvider>
      )
    },
  ],
}

export const WithFooter: Story = {
  decorators: [
    (Story) => {
      return (
        <F0AiChatProvider
          enabled
          runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
          agent="one-workflow"
          credentials="include"
          showDevConsole={false}
          greeting="Hello, John"
          footer={
            <div className="flex gap-2 px-4 py-2">
              <button
                type="button"
                className="rounded-md border border-f1-border bg-f1-background px-3 py-1.5 text-sm"
              >
                Footer button 1
              </button>
              <button
                type="button"
                className="rounded-md border border-f1-border bg-f1-background px-3 py-1.5 text-sm"
              >
                Footer button 2
              </button>
            </div>
          }
        >
          <FullscreenChatWrapper>
            <Story />
          </FullscreenChatWrapper>
        </F0AiChatProvider>
      )
    },
  ],
}
