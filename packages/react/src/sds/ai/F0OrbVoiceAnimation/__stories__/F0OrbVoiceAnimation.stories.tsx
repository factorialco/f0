import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0OrbVoiceAnimation } from "@/sds/ai/F0OrbVoiceAnimation"

const meta = {
  title: "AI/F0OrbVoiceAnimation",
  component: F0OrbVoiceAnimation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: [
        "idle",
        "listening",
        "thinking",
        "speaking",
        "connecting",
        "initializing",
        "pre-connect-buffering",
        "failed",
        "disconnected",
      ],
      description: "Agent state that drives animation intensity",
    },
    colors: {
      control: "object",
      description: "Orb palette: colorA, colorB, colorC, colorD",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 120 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0OrbVoiceAnimation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    state: "connecting",
  },
}

export const Idle: Story = {
  args: {
    state: "idle",
  },
}

export const Listening: Story = {
  args: {
    state: "listening",
  },
}

export const Thinking: Story = {
  args: {
    state: "thinking",
  },
}

export const Speaking: Story = {
  args: {
    state: "speaking",
  },
}

export const Initializing: Story = {
  args: {
    state: "initializing",
  },
}

export const PreConnectBuffering: Story = {
  args: {
    state: "pre-connect-buffering",
  },
}

export const Failed: Story = {
  args: {
    state: "failed",
  },
}

export const Disconnected: Story = {
  args: {
    state: "disconnected",
  },
}

export const CustomPalette: Story = {
  args: {
    state: "speaking",
    colors: {
      colorA: "#E51943",
      colorB: "#E55619",
      colorC: "#A1ADE5",
      colorD: "#E51943",
    },
  },
}
