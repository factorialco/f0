import type { Meta, StoryObj } from "@storybook/react-vite"

import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { StandardLayout } from "../index"

const meta = {
  title: "StandardLayout",
  component: StandardLayout,
  tags: ["autodocs"],
  decorators: [PageDecorator],
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Placeholder key={i}>Content</Placeholder>
        ))}
      </>
    ),
  },
} satisfies Meta<typeof StandardLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Narrow: Story = {
  parameters: {
    docs: {
      description: {
        component: "Limits the max width of the content.",
      },
    },
  },
  args: {
    variant: "narrow",
  },
}
