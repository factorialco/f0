import type { Meta, StoryObj } from "@storybook/react-vite"

import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { StandardLayout } from "./index"

const meta = {
  title: "Layout/StandardLayout",
  component: StandardLayout,
  tags: ["autodocs", "no-sidebar"],
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
  args: {
    variant: "narrow",
  },
}
