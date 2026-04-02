import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "../../../../lib/storybook-utils/placeholder"
import { Stack } from "./index"

const meta = {
  title: "Patterns/Layout/Stack",
  component: Stack,
  tags: ["autodocs", "experimental"],
  render: (args) => (
    <Stack {...args}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Placeholder key={i}>{i + 1}</Placeholder>
      ))}
    </Stack>
  ),
  args: {
    gap: "4",
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
