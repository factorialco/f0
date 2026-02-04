import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AuraVoiceAnimation } from "@/ai/F0AuraVoiceAnimation"

const meta = {
  title: "AI/F0AuraVoiceAnimation",
  component: F0AuraVoiceAnimation,
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
    color: {
      control: "color",
      description: "Primary color of the aura",
    },
    colorShift: {
      control: { type: "number", min: 0, max: 1, step: 0.05 },
      description: "Color variation across animation layers",
    },
    themeMode: {
      control: "radio",
      options: ["dark", "light"],
      description: "Theme for dark or light backgrounds",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320, height: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AuraVoiceAnimation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

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

export const CustomColor: Story = {
  args: {
    state: "speaking",
    color: "#00D9FF",
    colorShift: 0.2,
  },
}

export const LightTheme: Story = {
  args: {
    state: "speaking",
    themeMode: "light",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 320,
          height: 320,
          backgroundColor: "#fff",
          borderRadius: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const DarkTheme: Story = {
  args: {
    state: "speaking",
    themeMode: "dark",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 320,
          height: 320,
          backgroundColor: "#1a1a1a",
          borderRadius: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
}
