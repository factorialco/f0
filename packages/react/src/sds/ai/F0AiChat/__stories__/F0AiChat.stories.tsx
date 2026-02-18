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
            onUploadFile={(file) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve({ url: URL.createObjectURL(file) })
                }, 1000)
              })
            }}
            fileValidation={{
              maxFileSize: 10 * 1024 * 1024, // 10MB
              acceptedTypes: ["image/png", "image/jpeg", "application/pdf"],
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
