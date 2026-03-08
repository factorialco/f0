import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useRef } from "react"

import { F0AiMask } from "@/sds/ai/F0AiMask/F0AiMask"

type F0AiMaskWrapperProps = {
  width?: number
  height?: number
  mode?: "dark" | "light"
}

function F0AiMaskWrapper({
  width = 800,
  height = 300,
  mode = "light",
}: F0AiMaskWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const motion = new F0AiMask({ width, height, mode })
    container.appendChild(motion.element)
    motion.start()

    return () => {
      motion.dispose()
    }
  }, [width, height, mode])

  return <div ref={containerRef} style={{ width, height }} />
}

const meta = {
  title: "AI/F0AiMask",
  component: F0AiMaskWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number", min: 200, max: 800 },
      description: "Canvas width",
    },
    height: {
      control: { type: "number", min: 150, max: 600 },
      description: "Canvas height",
    },
    mode: {
      control: "radio",
      options: ["dark", "light"],
      description: "Color optimization for light or dark backgrounds",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiMaskWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 400,
    height: 300,
    mode: "light",
  },
}

export const DarkMode: Story = {
  args: {
    width: 400,
    height: 300,
    mode: "dark",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#1a1a1a", padding: 24, borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
}
