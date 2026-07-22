import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { Spinner } from "./index"

const meta = {
  component: Spinner,
  title: "Spinner",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  ),
}

export const WithDataTestId: Story = {
  render: () => <Spinner size="medium" dataTestId="spinner-test-id" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("spinner-test-id")).toBeInTheDocument()
  },
}

// THROWAWAY: deliberate ratchet violation to prove CI rejects a new skip.
// This must fail both the Unit Tests (unlisted file) and Storybook Tests
// (runtime guard) jobs. Not for merge.
export const RatchetDemoDoNotMerge: Story = {
  render: () => <Spinner size="medium" />,
  parameters: { a11y: { skipCi: true } },
}
