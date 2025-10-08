import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { type AIMessage } from "@copilotkit/shared"
import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { expect, within } from "storybook/test"
import { AiChat, AiChatProvider } from "../index"
import { useAiChat } from "../providers/AiChatStateProvider"

const meta: Meta<typeof AiChat> = {
  title: "Experimental/AiChat/Showcase",
  component: AiChat,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "AI Chat component with CopilotKit integration. Shows both the toggle button state and the chat window interface.",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="bg-f1-background-page h-screen w-full">
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof AiChat>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default AI Chat component showing the toggle button (closed state).
 * Click the chat button to open the chat window.
 */
export const Default: Story = {
  render: () => {
    const ClearButtonDemo = () => {
      const { clear } = useAiChat()

      console.log("clear2", clear)

      const handleClear = () => {
        console.log("handleClear")
        console.log("clear===>>>", clear)
        clear()
      }

      return <button onClick={handleClear}>Clear</button>
    }

    return (
      <AiChatProvider
        enabled
        runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
        agent="one-workflow"
        credentials="include"
        showDevConsole={false}
      >
        <div className="p-8">
          <ClearButtonDemo />
          <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
            AI Chat Integration
          </div>
          <div className="text-f1-foreground-secondary">
            The AI chat button appears in the bottom right. Click it to start a
            conversation.
          </div>
          <AiChat />
        </div>
      </AiChatProvider>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Look for the chat button
    const chatButton = canvas.getByRole("button", { name: /open ai chat/i })
    await expect(chatButton).toBeInTheDocument()
    await expect(canvas.getByText("AI Chat Integration")).toBeInTheDocument()
  },
}

/**
 * AI Chat with custom greeting message.
 * Demonstrates how to customize the initial greeting.
 */
export const WithCustomGreeting: Story = {
  render: () => (
    <AiChatProvider
      enabled
      greeting="👋 Hello! I'm here to help you with any questions about your workflow."
      runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
      agent="one-workflow"
      credentials="include"
      showDevConsole={false}
    >
      <div className="p-8">
        <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
          Custom Greeting Example
        </div>
        <div className="text-f1-foreground-secondary">
          This example shows a custom greeting message when the chat opens.
        </div>
        <AiChat />
      </div>
    </AiChatProvider>
  ),
}

/**
 * AI Chat with initial message.
 * Shows how to pre-populate the chat with an initial message.
 */
export const WithInitialMessage: Story = {
  render: () => (
    <AiChatProvider
      enabled
      initialMessage="How can I help you manage your tasks today?"
      runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
      agent="one-workflow"
      credentials="include"
      showDevConsole={false}
    >
      <div className="p-8">
        <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
          Pre-populated Chat
        </div>
        <div className="text-f1-foreground-secondary">
          The chat starts with an initial message to guide the conversation.
        </div>
        <AiChat />
      </div>
    </AiChatProvider>
  ),
}

/**
 * AI Chat with multiple initial messages.
 * Demonstrates how to start with a conversation history.
 */
export const WithMultipleInitialMessages: Story = {
  render: () => (
    <AiChatProvider
      enabled
      initialMessage={[
        "Welcome to your AI assistant!",
        "I can help you with various tasks and workflows.",
        "What would you like to work on today?",
      ]}
      runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
      agent="one-workflow"
      credentials="include"
      showDevConsole={false}
    >
      <div className="p-8">
        <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
          Conversation Starter
        </div>
        <div className="text-f1-foreground-secondary">
          Multiple initial messages create a conversation context.
        </div>
        <AiChat />
      </div>
    </AiChatProvider>
  ),
}

/**
 * AI Chat with feedback handlers.
 * Shows how to handle thumbs up/down feedback on messages.
 */
export const WithFeedbackHandlers: Story = {
  render: () => {
    const handleThumbsUp = (message: AIMessage) => {
      console.log("👍 Thumbs up for message:", message)
      alert("Thanks for the positive feedback!")
    }

    const handleThumbsDown = (message: AIMessage) => {
      console.log("👎 Thumbs down for message:", message)
      alert("We appreciate your feedback and will work to improve!")
    }

    return (
      <AiChatProvider
        enabled
        greeting="Rate my responses with thumbs up or down!"
        onThumbsUp={handleThumbsUp}
        onThumbsDown={handleThumbsDown}
        runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
        agent="one-workflow"
        credentials="include"
        showDevConsole={false}
      >
        <div className="p-8">
          <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
            Interactive Feedback
          </div>
          <div className="text-f1-foreground-secondary">
            Try giving feedback on AI responses using thumbs up/down buttons.
          </div>
          <AiChat />
        </div>
      </AiChatProvider>
    )
  },
}

/**
 * Disabled AI Chat.
 * Shows the component when AI chat is disabled.
 */
export const Disabled: Story = {
  render: () => (
    <AiChatProvider
      enabled={false}
      runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
      agent="one-workflow"
      credentials="include"
    >
      <div className="p-8">
        <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
          Disabled State
        </div>
        <div className="text-f1-foreground-secondary">
          When disabled, the AI chat component doesn&apos;t render anything.
        </div>
        <AiChat />
      </div>
    </AiChatProvider>
  ),
}

/**
 * AI Chat in application context.
 * Demonstrates the AI chat integrated within a typical application layout.
 */
export const InApplicationContext: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <AiChatProvider
      enabled
      greeting="I'm here to help you navigate and work more efficiently!"
      runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
      agent="one-workflow"
      credentials="include"
      showDevConsole={false}
    >
      <div className="bg-f1-background-page flex h-screen">
        {/* Mock sidebar */}
        <aside className="w-64 border-r border-f1-border-secondary bg-f1-background-secondary p-4">
          <div className="mb-6">
            <div className="text-f1-foreground-primary text-sm font-medium">
              Navigation
            </div>
          </div>
          <nav className="space-y-2">
            <div className="bg-f1-background-primary text-f1-foreground-primary rounded-md px-3 py-2 text-sm">
              Dashboard
            </div>
            <div className="px-3 py-2 text-sm text-f1-foreground-secondary">
              Projects
            </div>
            <div className="px-3 py-2 text-sm text-f1-foreground-secondary">
              Tasks
            </div>
            <div className="px-3 py-2 text-sm text-f1-foreground-secondary">
              Calendar
            </div>
          </nav>
        </aside>

        {/* Mock main content */}
        <main className="flex-1 p-8">
          <header className="mb-8">
            <h1 className="text-f1-foreground-primary text-2xl font-semibold">
              Dashboard
            </h1>
            <p className="text-f1-foreground-secondary">
              Welcome back! Here&apos;s what&apos;s happening with your
              projects.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-f1-background-primary rounded-lg border border-f1-border-secondary p-6">
              <h3 className="text-f1-foreground-primary mb-2 font-medium">
                Active Projects
              </h3>
              <p className="text-f1-foreground-primary text-2xl font-semibold">
                12
              </p>
            </div>
            <div className="bg-f1-background-primary rounded-lg border border-f1-border-secondary p-6">
              <h3 className="text-f1-foreground-primary mb-2 font-medium">
                Pending Tasks
              </h3>
              <p className="text-f1-foreground-primary text-2xl font-semibold">
                8
              </p>
            </div>
            <div className="bg-f1-background-primary rounded-lg border border-f1-border-secondary p-6">
              <h3 className="text-f1-foreground-primary mb-2 font-medium">
                Completed Today
              </h3>
              <p className="text-f1-foreground-primary text-2xl font-semibold">
                5
              </p>
            </div>
          </div>
        </main>

        {/* AI Chat Integration */}
        <AiChat />
      </div>
    </AiChatProvider>
  ),
}

/**
 * Chat opened by default.
 * Shows the chat window open without needing to click the button.
 */
export const ChatOpened: Story = {
  render: () => {
    const ChatWithOpenState = () => {
      const { setOpen } = useAiChat()

      React.useEffect(() => {
        setOpen(true)
      }, [setOpen])

      return <AiChat />
    }

    return (
      <AiChatProvider
        enabled
        greeting="Welcome! I'm ready to help you with anything."
        runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
        agent="one-workflow"
        credentials="include"
        showDevConsole={false}
      >
        <div className="p-8">
          <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
            Chat Window Open
          </div>
          <div className="text-f1-foreground-secondary">
            The chat window starts open to show the interface.
          </div>
          <ChatWithOpenState />
        </div>
      </AiChatProvider>
    )
  },
}

/**
 * Interactive demo showing button to chat transition.
 * Click the button to see the full interaction flow.
 */
export const InteractiveDemo: Story = {
  parameters: withSnapshot({}),
  render: () => {
    const [step, setStep] = React.useState<"button" | "chat">("button")

    const DemoController = () => {
      const { setOpen, open } = useAiChat()

      React.useEffect(() => {
        if (step === "chat") {
          setOpen(true)
        } else {
          setOpen(false)
        }
      }, [setOpen])

      React.useEffect(() => {
        if (open && step === "button") {
          setStep("chat")
        }
      }, [open])

      return (
        <>
          <div className="mb-4 flex gap-2">
            <button
              className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2"
              onClick={() => setStep("button")}
            >
              Show Button
            </button>
            <button
              className="bg-green-500 text-white hover:bg-green-600 rounded px-4 py-2"
              onClick={() => setStep("chat")}
            >
              Show Chat
            </button>
          </div>
          <div className="text-gray-600 mb-4 text-sm">
            Current view: {step === "button" ? "Chat Button" : "Chat Window"}
          </div>
          <AiChat />
        </>
      )
    }

    return (
      <AiChatProvider
        enabled
        greeting="Try switching between button and chat views!"
        runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
        agent="one-workflow"
        credentials="include"
        showDevConsole={false}
      >
        <div className="p-8">
          <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
            Interactive Demo
          </div>
          <div className="mb-6 text-f1-foreground-secondary">
            Use the buttons below to switch between the chat button and chat
            window views.
          </div>
          <DemoController />
        </div>
      </AiChatProvider>
    )
  },
}

/**
 * Development mode with console enabled.
 * Useful for debugging and development.
 */
export const DevelopmentMode: Story = {
  render: () => (
    <AiChatProvider
      enabled
      greeting="Development mode: Check the console for debug information."
      runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
      agent="one-workflow"
      credentials="include"
      showDevConsole={true}
    >
      <div className="p-8">
        <div className="text-f1-foreground-primary mb-4 text-lg font-medium">
          Development Mode
        </div>
        <div className="text-f1-foreground-secondary">
          Shows console output for debugging. Check your browser&apos;s
          developer console.
        </div>
        <AiChat />
      </div>
    </AiChatProvider>
  ),
}
