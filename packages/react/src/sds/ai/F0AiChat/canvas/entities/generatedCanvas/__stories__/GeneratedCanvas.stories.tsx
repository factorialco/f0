import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, waitFor, within } from "storybook/test"

import { GeneratedCanvasContent } from "../GeneratedCanvasContent"
import {
  brokenRendererContent,
  orgGalaxyContent,
  productOrgContent,
} from "./generatedCanvasDemo"

const meta = {
  title: "AI/F0AiChat/Canvas/Generated Canvas",
  component: GeneratedCanvasContent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs", "internal"],
  args: {
    content: orgGalaxyContent,
    refreshKey: 0,
  },
} satisfies Meta<typeof GeneratedCanvasContent>

export default meta
type Story = StoryObj<typeof meta>

export const OrgGalaxy: Story = {
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(
        canvasElement.querySelector('[data-generated-canvas-status="ready"]')
      ).toBeTruthy()
    })
  },
  render: (args) => (
    <div className="flex h-screen flex-col bg-f1-background p-4">
      <div className="mb-3 max-w-3xl">
        <div className="text-2xl font-semibold text-f1-foreground">
          Generated Org Galaxy runtime spike
        </div>
        <div className="mt-1 text-sm text-f1-foreground-secondary">
          Mock org data is passed to a renderer source string and executed in a
          sandboxed iframe. Hover and click stars to exercise the host bridge.
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-solid border-f1-border-secondary shadow-xl">
        <GeneratedCanvasContent {...args} />
      </div>
    </div>
  ),
}

export const ProductOrgWithAvatarAnchors: Story = {
  args: {
    content: productOrgContent,
    refreshKey: 2,
  },
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(
        canvasElement.querySelector('[data-generated-canvas-status="ready"]')
      ).toBeTruthy()
    })
    await waitFor(() => {
      expect(
        canvasElement.querySelectorAll("[data-generated-canvas-anchor]").length
      ).toBeGreaterThan(0)
    })
  },
  render: (args) => (
    <div className="flex h-screen flex-col bg-f1-background p-4">
      <div className="mb-3 max-w-3xl">
        <div className="text-2xl font-semibold text-f1-foreground">
          Product org board with F0 avatar anchors
        </div>
        <div className="mt-1 text-sm text-f1-foreground-secondary">
          A generated renderer lays out the spreadsheet-inspired board and emits
          anchor coordinates; the host renders current-system avatars on top.
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-solid border-f1-border-secondary shadow-xl">
        <GeneratedCanvasContent {...args} />
      </div>
    </div>
  ),
}

export const RuntimeError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(async () => {
      await expect(canvas.getByText("Renderer crashed")).toBeVisible()
    })
  },
  args: {
    content: brokenRendererContent,
    refreshKey: 1,
  },
  render: (args) => (
    <div className="flex h-screen flex-col bg-f1-background p-4">
      <div className="mb-3 max-w-3xl">
        <div className="text-2xl font-semibold text-f1-foreground">
          Generated renderer failure state
        </div>
        <div className="mt-1 text-sm text-f1-foreground-secondary">
          This story intentionally throws inside generated source to verify that
          the sandbox reports a useful error instead of breaking Storybook.
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-solid border-f1-border-secondary shadow-xl">
        <GeneratedCanvasContent {...args} />
      </div>
    </div>
  ),
}
