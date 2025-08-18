import { Message } from "@copilotkit/runtime-client-gql"
import { Meta, StoryObj } from "@storybook/react-vite"
import { useRef, useState } from "react"
import { ChatTextarea } from "./ChatTextarea"

// Wrapper component to manage state
const ChatTextareaWrapper = () => {
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

    return new Message({ type: "TextMessage" })
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
  title: "Experimental/AiChat/ChatTextarea",
  component: ChatTextareaWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "no-sidebar"],
} satisfies Meta<typeof ChatTextareaWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ChatTextareaWrapper />,
}
