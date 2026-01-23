import type { Message } from "@copilotkit/shared"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

import { ThinkingIndicator } from "./ThinkingIndicator"

// ============================================================================
// Helpers
// ============================================================================

/**
 * Create a mock thinking message for testing
 */
const createThinkingMessage = (message: string, detail?: string): Message => ({
  id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  role: "assistant",
  content: "",
  toolCalls: [
    {
      id: `call-${Date.now()}`,
      type: "function",
      function: {
        name: "orchestratorThinking",
        arguments: JSON.stringify({ message, detail }),
      },
    },
  ],
})

// ============================================================================
// Story Configuration
// ============================================================================

const meta = {
  title: "Experimental/AiChat/ThinkingIndicator",
  component: ThinkingIndicator,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-white w-80 rounded-lg p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ThinkingIndicator>

export default meta
type Story = StoryObj<typeof meta>

// ============================================================================
// Stories
// ============================================================================

/** Default state with a simple task message */
export const Default: Story = {
  args: {
    inProgress: true,
    messages: [createThinkingMessage("Processing your request")],
  },
}

/** Shows main task with a single subtask */
export const WithSubtask: Story = {
  args: {
    inProgress: true,
    messages: [
      createThinkingMessage(
        "Searching employee database",
        "Querying active employees..."
      ),
    ],
  },
}

/** Initial state before any task info is received */
export const NoTask: Story = {
  name: "Working (No Task Yet)",
  args: {
    inProgress: true,
    messages: [],
  },
}

/**
 * Demonstrates subtasks accumulating over time (up to 3).
 * Watch as new subtasks appear and old ones fade out.
 */
export const TaskProgression: Story = {
  name: "Task Progression (Animated)",
  args: {
    inProgress: true,
    messages: [],
  },
  render: () => {
    const subtasks = [
      "Querying employee database...",
      "Fetching time-off records...",
      "Calculating remaining days...",
      "Checking policy constraints...",
      "Validating request dates...",
      "Preparing summary...",
    ]

    const [currentSubtaskIndex, setCurrentSubtaskIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSubtaskIndex((prev) => (prev + 1) % subtasks.length)
      }, 1500)
      return () => clearInterval(interval)
    }, [])

    return (
      <ThinkingIndicator
        inProgress={true}
        messages={[
          createThinkingMessage(
            "Processing your request",
            subtasks[currentSubtaskIndex]
          ),
        ]}
      />
    )
  },
}

/** Tests rapid task changes to verify animation smoothness */
export const RapidTaskChanges: Story = {
  name: "Rapid Task Changes",
  args: {
    inProgress: true,
    messages: [],
  },
  render: () => {
    const tasks = [
      "Step 1: Initializing",
      "Step 2: Processing",
      "Step 3: Validating",
      "Step 4: Finalizing",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tasks.length)
      }, 800)
      return () => clearInterval(interval)
    }, [])

    return (
      <ThinkingIndicator
        inProgress={true}
        messages={[createThinkingMessage(tasks[currentIndex])]}
      />
    )
  },
}

/** Tests text truncation with very long content */
export const LongText: Story = {
  name: "Long Task Text",
  args: {
    inProgress: true,
    messages: [
      createThinkingMessage(
        "Processing employee compensation data for Q4 2024 performance reviews",
        "Calculating bonus eligibility based on individual KPIs and team performance metrics across all departments..."
      ),
    ],
  },
}
