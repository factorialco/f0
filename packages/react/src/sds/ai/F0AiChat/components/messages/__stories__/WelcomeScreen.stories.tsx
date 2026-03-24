import type { Meta, StoryObj } from "@storybook/react-vite"

import { CopilotKit } from "@copilotkit/react-core"

import { BarGraph, Calendar, Lightbulb, Money } from "@/icons/app"

import { F0AiChatProvider } from "../../.."
import { WelcomeScreen } from "../WelcomeScreen"

const meta = {
  title: "AI/F0AiChat/Messages/WelcomeScreen",
  component: WelcomeScreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <F0AiChatProvider>
        <CopilotKit runtimeUrl="http://localhost:0/copilotkit">
          <div className="w-96 bg-f1-background p-4">
            <Story />
          </div>
        </CopilotKit>
      </F0AiChatProvider>
    ),
  ],
} satisfies Meta<typeof WelcomeScreen>

export default meta
type Story = StoryObj<typeof meta>

export const WithGreeting: Story = {
  args: {
    greeting: "Hello! How can I help you today?",
    suggestions: [
      {
        icon: BarGraph,
        message: "Show me headcount by department",
      },
      {
        icon: Money,
        message: "What is the average salary?",
      },
      {
        icon: Calendar,
        message: "Who is on leave this week?",
      },
      {
        icon: Lightbulb,
        message: "Find employees in Engineering",
      },
    ],
  },
}

export const WithoutGreeting: Story = {
  args: {
    suggestions: [
      {
        icon: BarGraph,
        message: "Show me headcount by department",
      },
      {
        icon: Money,
        message: "What is the average salary?",
      },
    ],
  },
}

export const NoSuggestions: Story = {
  args: {
    greeting: "Hello! Ask me anything about your team.",
    suggestions: [],
  },
}
