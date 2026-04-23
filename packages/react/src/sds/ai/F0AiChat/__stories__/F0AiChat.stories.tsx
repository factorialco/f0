import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect } from "react"

import { Lightbulb, ThumbsDown, ThumbsUp } from "@/icons/app"

import { F0AiChat, F0AiChatProvider, useAiChat } from ".."

const AiChatWrapper = ({ children }: { children: React.ReactElement }) => {
  const { setOpen, setWelcomeScreenSuggestions } = useAiChat()

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
        prompt:
          "Share feedback and help shape One with your feedback in the next message (optional)",
      },
      {
        icon: ThumbsDown,
        message: "Very long message to test the layout of the suggestions list",
        prompt:
          "Very long message to test the layout of the suggestions list and help shape One with your feedback in the next message (optional)",
      },
    ])
  }, [setWelcomeScreenSuggestions])

  useEffect(() => {
    setOpen(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="flex h-[700px] flex-1">{children}</div>
}

const meta = {
  title: "AI/F0AiChat",
  component: F0AiChat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="h-full w-full flex-1 [&>div>div]:h-full [&>div>div]:w-full">
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
            tracking={{
              onVisibility: () => {
                console.log("ai chat visibility")
              },
              onClose: () => {
                console.log("ai chat close")
              },
              onWelcomeSuggestionClick: (suggestion) => {
                console.log("ai chat welcome suggestion click", suggestion)
              },
              onNewChat: () => {
                console.log("ai chat new chat")
              },
              onMessage: (message) => {
                console.log("ai chat message", message)
              },
            }}
          >
            <AiChatWrapper>
              <Story />
            </AiChatWrapper>
          </F0AiChatProvider>
        </div>
      )
    },
  ],
} satisfies Meta<typeof F0AiChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/**
 * Demo of the reply-to-selection flow: select text inside any message (user or
 * assistant) to trigger a floating "Reply" button. Clicking it quotes the
 * fragment as a chip above the textarea; sending injects it as a markdown
 * blockquote in the resulting user message.
 */
const ReplyToSelectionPrefill = () => {
  const { appendMessages } = useAiChat()

  useEffect(() => {
    appendMessages(
      [
        {
          role: "user",
          content:
            "Can you explain how our PTO policy works for new hires during their first three months?",
        },
        {
          role: "assistant",
          content: [
            "Sure! Here's the high-level breakdown of the PTO policy for new hires:",
            "",
            "1. **Accrual** starts on day one at a rate of 1.25 days per month.",
            "2. **During the first 90 days**, accrued PTO can be viewed but not taken except for emergencies.",
            "3. **After 90 days**, the full accrued balance becomes available and can be requested through the standard Time Off flow.",
            "4. Carry-over rules and bank holidays depend on the local calendar; check the country settings for exact figures.",
            "",
            "Let me know if you want me to pull up the policy document for a specific country.",
          ].join("\n"),
        },
      ],
      { persist: false }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export const WithReplyToSelection: Story = {
  render: () => <ReplyToSelectionPrefill />,
}

export const WithFooter: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="h-full w-full flex-1 [&>div>div]:h-full [&>div>div]:w-full">
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
            footer={
              <div className="flex gap-2">
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
            <AiChatWrapper>
              <Story />
            </AiChatWrapper>
          </F0AiChatProvider>
        </div>
      )
    },
  ],
}
