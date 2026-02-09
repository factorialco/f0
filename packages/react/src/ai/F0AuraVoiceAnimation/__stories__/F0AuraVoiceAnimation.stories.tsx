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
    size: {
      control: "select",
      options: ["icon", "sm", "md", "lg", "xl"],
      description:
        "Size of the aura (icon: 24px, sm: 56px, md: 112px, lg: 224px, xl: 448px)",
    },
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
      <div
        style={{
          width: 480,
          height: 480,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          width: 480,
          height: 480,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          width: 480,
          height: 480,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          borderRadius: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
}
