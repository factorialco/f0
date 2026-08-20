import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0GraphControls } from "../F0GraphControls"

const meta = {
  component: F0GraphControls,
  title: "Graph/F0GraphControls",
  tags: ["stable", "!autodocs"],
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
} satisfies Meta<typeof F0GraphControls>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
    onFocusUser: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the complete graph navigation toolbar with Find me, Fit to view, Zoom in, and Zoom out controls.",
      },
    },
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)

    await step("Expose the toolbar and its accessible name", async () => {
      await expect(
        canvas.getByRole("toolbar", { name: "Graph navigation" })
      ).toBeInTheDocument()
    })

    await step("Run the first action from the keyboard", async () => {
      const findMe = canvas.getByRole("button", { name: "Find me" })

      await userEvent.tab()
      await expect(findMe).toHaveFocus()
      await userEvent.keyboard("{Enter}")
      await expect(args.onFocusUser).toHaveBeenCalledTimes(1)
    })

    await step("Run the remaining graph navigation actions", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Fit to view" }))
      await expect(args.onFitView).toHaveBeenCalledTimes(1)

      await userEvent.click(canvas.getByRole("button", { name: "Zoom in" }))
      await expect(args.onZoomIn).toHaveBeenCalledTimes(1)

      await userEvent.click(canvas.getByRole("button", { name: "Zoom out" }))
      await expect(args.onZoomOut).toHaveBeenCalledTimes(1)
    })
  },
}

export const WithoutFindMe: Story = {
  tags: ["no-sidebar"],
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.queryByRole("button", { name: "Find me" })
    ).not.toBeInTheDocument()
    await expect(canvas.getAllByRole("button")).toHaveLength(3)
  },
}

export const CustomLabels: Story = {
  tags: ["no-sidebar"],
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
    onFocusUser: fn(),
    labels: {
      findMe: "Center on my node",
      fitView: "Show every node",
      zoomIn: "Increase graph zoom",
      zoomOut: "Decrease graph zoom",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByRole("button", { name: "Center on my node" })
    ).toBeInTheDocument()
    await expect(
      canvas.getByRole("button", { name: "Show every node" })
    ).toBeInTheDocument()
    await expect(
      canvas.getByRole("button", { name: "Increase graph zoom" })
    ).toBeInTheDocument()
    await expect(
      canvas.getByRole("button", { name: "Decrease graph zoom" })
    ).toBeInTheDocument()
  },
}

export const AsyncFindMe: Story = {
  tags: ["no-sidebar"],
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
    onFocusUser: fn(
      () => new Promise<void>((resolve) => window.setTimeout(resolve, 200))
    ),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const findMe = canvas.getByRole("button", { name: "Find me" })

    await userEvent.click(findMe)
    await expect(args.onFocusUser).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(findMe).toBeDisabled())
    await waitFor(() => expect(findMe).toBeEnabled())
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
    onFocusUser: fn(),
  },
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex items-start gap-8 bg-f1-background p-4">
      <F0GraphControls {...args} />
      <F0GraphControls
        onZoomIn={args.onZoomIn}
        onZoomOut={args.onZoomOut}
        onFitView={args.onFitView}
      />
    </div>
  ),
}
