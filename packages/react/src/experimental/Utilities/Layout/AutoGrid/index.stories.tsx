import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "../../../../lib/storybook-utils/placeholder"
import { AutoGrid } from "./index"

const meta = {
  title: "Patterns/Layout/AutoGrid",
  component: AutoGrid,
  tags: ["autodocs", "experimental"],
  args: {
    tileSize: "md",
    gap: "4",
    children: (
      <>
        {Array.from({ length: 48 }).map((_, i) => (
          <Placeholder key={i}>{i + 1}</Placeholder>
        ))}
      </>
    ),
  },
} satisfies Meta<typeof AutoGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Small: Story = {
  args: {
    tileSize: "sm",
  },
}

export const Medium: Story = {
  args: {
    tileSize: "md",
  },
}

export const Large: Story = {
  args: {
    tileSize: "lg",
  },
}
