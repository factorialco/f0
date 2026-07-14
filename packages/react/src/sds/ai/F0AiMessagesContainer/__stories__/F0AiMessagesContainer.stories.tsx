import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AiMessagesContainer } from "../F0AiMessagesContainer"
import { type AIMessage, type Message, type RenderableTurn } from "../types"

const userMessage = (id: string, content: string): Message => ({
  id,
  role: "user",
  content,
})

const assistantMessage = (id: string, content: string): AIMessage => ({
  id,
  role: "assistant",
  content,
})

const noopFeedback = {
  threadId: "thread-storybook",
  onThumbsUp: () => {},
  onThumbsDown: () => {},
}

// ── Reusable turn fixtures ────────────────────────────────────────────────

const completedTurn = (): RenderableTurn => {
  const target = assistantMessage(
    "a1",
    "There are **42 employees** in Engineering across 6 teams. Here's the breakdown:\n\n- Platform: 12\n- Backend: 10\n- Frontend: 8\n- Mobile: 6\n- QA: 4\n- Infra: 2"
  )
  return {
    userMessages: [userMessage("u1", "How many engineers do we have?")],
    assistantMessages: [target],
    isInProgress: false,
    feedback: {
      content: target.content as string,
      targetMessage: target,
    },
  }
}

const turnWithThinking = (): RenderableTurn => {
  const target = assistantMessage(
    "a2",
    "Your headcount grew **+8%** last quarter, mostly driven by Engineering hires (12 new) and Sales (6 new)."
  )
  return {
    userMessages: [userMessage("u2", "Summarise hiring last quarter")],
    thinking: {
      titles: [
        "Looking up headcount snapshots",
        "Comparing Q2 vs Q3 deltas",
        "Grouping by department",
      ],
    },
    assistantMessages: [target],
    isInProgress: false,
    feedback: {
      content: target.content as string,
      targetMessage: target,
    },
  }
}

// Demonstrates the generic per-step content slot: the consumer composes
// whatever it wants (here, simple "source"/"field" pills) under a step title.
// f0 owns only the accordion + step chrome — it knows nothing about pills.
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-solid border-f1-border bg-f1-background-secondary px-2 py-0.5 text-sm text-f1-foreground">
    {children}
  </span>
)

const turnWithRichThinking = (): RenderableTurn => {
  const target = assistantMessage(
    "a2r",
    "Voluntary turnover was **4.2%** over the last 6 months, highest in the EU entity."
  )
  return {
    userMessages: [
      userMessage("u2r", "Voluntary turnover last 6 months by legal entity"),
    ],
    thinking: {
      items: [
        {
          title: "Pulling the latest employee data",
          content: (
            <div className="flex flex-wrap gap-1">
              <Pill>Employee data</Pill>
            </div>
          ),
        },
        {
          title: "Assembling the columns for your turnover breakdown",
          content: (
            <div className="flex flex-wrap gap-1">
              <Pill>Employee name</Pill>
              <Pill>Team</Pill>
              <Pill>Base salary</Pill>
            </div>
          ),
        },
        { title: "Breaking your turnover rate down by legal entity" },
      ],
    },
    assistantMessages: [target],
    isInProgress: false,
    feedback: {
      content: target.content as string,
      targetMessage: target,
    },
  }
}

const turnStreamingThinkingIndicator = (): RenderableTurn => ({
  userMessages: [userMessage("u3", "What does my calendar look like today?")],
  assistantMessages: [],
  isInProgress: true,
  endIndicator: "thinking",
})

const turnStreamingActivityIndicator = (): RenderableTurn => ({
  userMessages: [userMessage("u3b", "Summarise the deck")],
  assistantMessages: [
    assistantMessage("a3b", "Sure, here are the highlights…"),
  ],
  isInProgress: true,
  endIndicator: "activity",
})

const turnStreamingLiveThinking = (): RenderableTurn => ({
  userMessages: [userMessage("u4", "Build me a salary report by department")],
  thinking: {
    titles: [
      "Fetching department list",
      "Aggregating payroll by department",
      "Generating salary report",
    ],
    inProgress: true,
  },
  assistantMessages: [],
  isInProgress: true,
})

const turnStopped = (): RenderableTurn => {
  const target = assistantMessage(
    "a5",
    "Here is the start of the answer*<!--response-stopped-->Response was stopped*"
  )
  return {
    userMessages: [userMessage("u5", "Generate a long report")],
    assistantMessages: [target],
    isInProgress: false,
    // feedback intentionally omitted — the response was stopped
  }
}

const FRAME_WIDTH = 720
const FRAME_HEIGHT = 640

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{ width: FRAME_WIDTH, height: FRAME_HEIGHT }}
    className="flex border border-solid border-f1-border rounded-md overflow-hidden bg-f1-background"
  >
    {children}
  </div>
)

// ── Meta ──────────────────────────────────────────────────────────────────

const meta = {
  title: "AI/F0AiMessagesContainer",
  component: F0AiMessagesContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Frame>
        <Story />
      </Frame>
    ),
  ],
} satisfies Meta<typeof F0AiMessagesContainer>

export default meta
type Story = StoryObj<typeof meta>

// ── Stories ───────────────────────────────────────────────────────────────

export const LoadingThread: Story = {
  args: {
    turns: [],
    isLoadingThread: true,
  },
}

export const EmptyWelcome: Story = {
  args: {
    turns: [],
    initialMessage: "Ask anything about your company",
  },
}

export const Conversation: Story = {
  args: {
    turns: [completedTurn(), turnWithThinking()],
    feedback: noopFeedback,
    onReplyQuote: (text) => console.log("reply quote", text),
  },
}

export const WithRichThinking: Story = {
  args: {
    turns: [turnWithRichThinking()],
    feedback: noopFeedback,
  },
}

export const StreamingThinkingIndicator: Story = {
  args: {
    turns: [completedTurn(), turnStreamingThinkingIndicator()],
  },
}

export const StreamingActivityIndicator: Story = {
  args: {
    turns: [completedTurn(), turnStreamingActivityIndicator()],
  },
}

export const StreamingLiveThinking: Story = {
  args: {
    turns: [turnStreamingLiveThinking()],
  },
}

export const WithStoppedTurn: Story = {
  args: {
    turns: [completedTurn(), turnStopped()],
    feedback: noopFeedback,
  },
}

export const FrozenLayout: Story = {
  args: {
    turns: [completedTurn()],
    freezeLayout: true,
  },
}

export const WithCustomToolCallRender: Story = {
  args: {
    turns: [
      {
        userMessages: [userMessage("u-tool", "Show me a chart")],
        assistantMessages: [
          {
            id: "a-tool",
            role: "assistant",
            content: "Here's the chart you asked for:",
            toolCalls: [
              {
                id: "tc-1",
                type: "function",
                function: { name: "renderChart", arguments: "{}" },
              },
            ],
          } as Message,
        ],
        isInProgress: false,
      },
    ],
    renderToolCall: () => (
      <div className="my-2 rounded border border-dashed border-f1-border p-4 text-center text-sm text-f1-foreground-secondary">
        ▢ Mocked tool-call subcomponent
      </div>
    ),
  },
}

export const Everything: Story = {
  args: {
    turns: [completedTurn(), turnWithThinking(), turnStreamingLiveThinking()],
    feedback: noopFeedback,
    onReplyQuote: (text) => console.log("reply quote", text),
  },
}
