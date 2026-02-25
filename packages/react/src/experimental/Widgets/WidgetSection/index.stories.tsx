import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { WidgetSection } from "./index"

const meta: Meta = {
  title: "Widgets/WidgetSection",
  component: WidgetSection,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Worked / Planned hours",
    children: <Placeholder>Put your content in there</Placeholder>,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "widget-section-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByTestId("widget-section-test-id")
    ).toBeInTheDocument()
  },
}
