import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useRef, useState } from "react"

import { F0AiChatProvider, useAiChat } from ".."
import { ChatTextarea } from "../components/ChatTextarea"

// Wrapper component to manage state
const ChatTextareaWrapper = ({ placeholders }: { placeholders?: string[] }) => {
  const [messages, setMessages] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  const { setPlaceholders } = useAiChat()

  useEffect(() => {
    if (placeholders) {
      setPlaceholders(placeholders)
    }
  }, [placeholders, setPlaceholders])

  const handleSend = async (message: string) => {
    setMessages((prev) => [...prev, `User: ${message}`])
    setIsProcessing(true)

    abortControllerRef.current = new AbortController()

    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, 2000)

        abortControllerRef.current?.signal.addEventListener(
          "abort",
          () => {
            clearTimeout(timeout)
            reject(new Error("Request aborted"))
          },
          { once: true }
        )
      })

      setMessages((prev) => [
        ...prev,
        `AI: This is a mock response after 2 seconds of thinking. I've processed your message: "${message}"`,
      ])
    } catch (error) {
      if (error instanceof Error && error.message === "Request aborted") {
        setMessages((prev) => [...prev, `AI: Request was cancelled by user.`])
      } else {
        setMessages((prev) => [
          ...prev,
          `AI: An error occurred while processing your message.`,
        ])
      }
    } finally {
      setIsProcessing(false)
      abortControllerRef.current = null
    }

    return {
      id: `message-${Date.now()}`,
      role: "assistant" as const,
      content: `This is a mock response after 2 seconds of thinking. I've processed your message: "${message}"`,
    }
  }

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    setIsProcessing(false)
  }

  return (
    <div className="w-96 space-y-4">
      <div className="bg-gray-50 h-64 overflow-y-auto rounded-lg border p-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No messages yet. Type something below to start the conversation.
          </p>
        ) : (
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{msg}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <ChatTextarea
        inProgress={isProcessing}
        onSend={handleSend}
        onStop={handleStop}
      />
    </div>
  )
}

const meta = {
  title: "AI/F0AiChat/ChatTextarea",
  component: ChatTextareaWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "no-sidebar"],
  decorators: [
    (Story) => (
      <F0AiChatProvider>
        <Story />
      </F0AiChatProvider>
    ),
  ],
} satisfies Meta<typeof ChatTextareaWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ChatTextareaWrapper />,
}

const PLACEHOLDERS = [
  "Ask about location, directions, or travel details…",
  "Inquire about pricing, features, or product availability…",
  "Request clarification on tasks, deadlines, or requirements…",
  "Ask for opinions, recommendations, or comparisons…",
  "Provide details about issues, errors, or unexpected behavior…",
]

export const WithPlaceholders: Story = {
  render: () => <ChatTextareaWrapper placeholders={PLACEHOLDERS} />,
}

export const WithOnePlaceholder: Story = {
  render: () => <ChatTextareaWrapper placeholders={[PLACEHOLDERS[0]]} />,
}
