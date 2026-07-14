import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0PdfViewer, pdfScales } from ".."

const SAMPLE_URL = "/f0-pdf-viewer-sample.pdf"

const meta = {
  component: F0PdfViewer,
  tags: ["experimental", "!autodocs"],
  title: "F0PdfViewer",
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, height: "680px" } },
  },
  argTypes: {
    initialScale: {
      control: "select",
      options: [...pdfScales],
      table: { type: { summary: pdfScales.join(" | ") } },
    },
  },
} satisfies Meta<typeof F0PdfViewer>

export default meta
type Story = StoryObj<typeof F0PdfViewer>

export const Default: Story = {
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url={SAMPLE_URL}
        filename="sample.pdf"
        withCredentials={false}
      />
    </div>
  ),
}

export const PageFit: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url={SAMPLE_URL}
        filename="sample.pdf"
        initialScale="page-fit"
        withCredentials={false}
      />
    </div>
  ),
}

export const Rotatable: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url={SAMPLE_URL}
        filename="sample.pdf"
        rotatable
        withCredentials={false}
      />
    </div>
  ),
}

export const Skeleton: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer.Skeleton />
    </div>
  ),
}

export const Snapshot: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="h-[420px] w-[680px]">
        <F0PdfViewer
          url={SAMPLE_URL}
          filename="sample.pdf"
          withCredentials={false}
        />
      </div>
      <div className="h-[420px] w-[680px]">
        <F0PdfViewer.Skeleton />
      </div>
    </div>
  ),
}
