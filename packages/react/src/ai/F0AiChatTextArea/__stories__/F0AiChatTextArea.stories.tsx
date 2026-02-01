import { Meta, StoryObj } from "@storybook/react-vite"
import { useRef, useState } from "react"

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const PLACEHOLDERS = [
  "Ask about location, directions, or travel details…",
  "Inquire about pricing, features, or product availability…",
  "Request clarification on tasks, deadlines, or requirements…",
  "Ask for opinions, recommendations, or comparisons…",
  "Provide details about issues, errors, or unexpected behavior…",
]

// Wrapper component to manage state
const ChatTextareaWrapper = ({
  placeholders,
  defaultPlaceholder,
}: {
  placeholders?: string[]
  defaultPlaceholder?: string
}) => {
  const [messages, setMessages] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

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

      <F0AiChatTextArea
        inProgress={isProcessing}
        onSend={handleSend}
        onStop={handleStop}
        placeholders={placeholders}
        defaultPlaceholder={defaultPlaceholder}
      />
    </div>
  )
}

const meta = {
  title: "AI/F0AiChatTextArea",
  component: F0AiChatTextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof F0AiChatTextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ChatTextareaWrapper />,
}

export const WithMultiplePlaceholders: Story = {
  render: () => <ChatTextareaWrapper placeholders={PLACEHOLDERS} />,
}

export const WithSinglePlaceholder: Story = {
  render: () => <ChatTextareaWrapper placeholders={[PLACEHOLDERS[0]]} />,
}

export const WithCustomDefaultPlaceholder: Story = {
  render: () => (
    <ChatTextareaWrapper defaultPlaceholder="Type your question here..." />
  ),
}

export const WithSubmitLabel: Story = {
  render: () => {
    const [isProcessing, setIsProcessing] = useState(false)

    return (
      <div className="w-96">
        <F0AiChatTextArea
          inProgress={isProcessing}
          onSend={() => {
            setIsProcessing(true)
            setTimeout(() => setIsProcessing(false), 2000)
          }}
          onStop={() => setIsProcessing(false)}
          submitLabel="Send"
        />
      </div>
    )
  },
}

export const InProgress: Story = {
  render: () => (
    <div className="w-96">
      <F0AiChatTextArea
        inProgress={true}
        onSend={() => {}}
        onStop={() => alert("Stopped!")}
      />
    </div>
  ),
}
