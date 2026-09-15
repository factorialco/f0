import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, userEvent, within } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0ChatMediaPreview } from "./F0ChatMediaPreview"

const images = [
  { url: "/docs/headers/do.png", name: "do.png", mimeType: "image/png" },
  { url: "/docs/headers/dont.png", name: "dont.png", mimeType: "image/png" },
]

const ImageDemo = () => {
  const [open, setOpen] = useState(true)
  const [index, setIndex] = useState(0)
  return open ? (
    <F0ChatMediaPreview
      images={images}
      index={index}
      onIndexChange={setIndex}
      onClose={() => setOpen(false)}
    />
  ) : (
    <button type="button" onClick={() => setOpen(true)}>
      Open image preview
    </button>
  )
}

const DocumentDemo = () => {
  const [open, setOpen] = useState(true)
  return open ? (
    <F0ChatMediaPreview
      document={{
        url: "/f0-pdf-viewer-sample.pdf",
        name: "sample.pdf",
        mimeType: "application/pdf",
        kind: "pdf",
      }}
      onClose={() => setOpen(false)}
    />
  ) : (
    <button type="button" onClick={() => setOpen(true)}>
      Open PDF preview
    </button>
  )
}

const meta = {
  title: "F0Chat/F0ChatMediaPreview",
  component: F0ChatMediaPreview,
  tags: ["autodocs", "experimental"],
  parameters: { layout: "fullscreen", a11y: { test: "error" } },
} satisfies Meta<typeof F0ChatMediaPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {
    images,
    index: 0,
    onIndexChange: () => undefined,
    onClose: () => undefined,
  },
  render: () => <ImageDemo />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body)
    const dialog = await body.findByRole("dialog")
    await userEvent.click(
      within(dialog).getByRole("button", { name: "Next image" })
    )
    await expect(within(dialog).getByText("2 / 2")).toBeVisible()
    await userEvent.click(
      within(dialog).getByRole("button", { name: "Previous image" })
    )
    await expect(within(dialog).getByText("1 / 2")).toBeVisible()
  },
}
export const Document: Story = {
  args: {
    document: {
      url: "/f0-pdf-viewer-sample.pdf",
      name: "sample.pdf",
      mimeType: "application/pdf",
      kind: "pdf",
    },
    onClose: () => undefined,
  },
  render: () => <DocumentDemo />,
}
export const Snapshot: Story = {
  args: {
    images,
    index: 0,
    onIndexChange: () => undefined,
    onClose: () => undefined,
  },
  render: () => <ImageDemo />,
  parameters: withSnapshot({}),
}
