import { F0Button } from "@/components/F0Button"
import { Lightbulb, ThumbsUp } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect } from "react"
import { AiChat, AiChatProvider } from "./index"
import { useAiChat } from "./providers/AiChatStateProvider"

const AiChatWrapper = ({ children }: { children: React.ReactElement }) => {
  const { open, setOpen, setWelcomeScreenSuggestions } = useAiChat()

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
    ])
  }, [setWelcomeScreenSuggestions])

  useEffect(() => {
    setOpen(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <F0Button
        label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(!open)}
      />
      {children}
    </>
  )
}

const meta = {
  title: "Experimental/AiChat",
  component: AiChat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="h-full w-full bg-[hsl(0,0,98)]">
          <AiChatProvider
            enabled
            runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
            agent="one-workflow"
            credentials="include"
            showDevConsole={false}
          >
            <AiChatWrapper>
              <Story />
            </AiChatWrapper>
          </AiChatProvider>
        </div>
      )
    },
  ],
} satisfies Meta<typeof AiChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
