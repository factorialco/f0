import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { Cross } from "@/icons/app"
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

/** kind="sheet": Excel-style grid (letter columns, numbered rows) with one
 * tab per sheet. PDF-only props (scale, rotation, print…) are ignored. */
export const SpreadsheetKind: Story = {
  name: "Kind: sheet (xlsx/csv)",
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url="/f0-document-sample.xlsx"
        kind="sheet"
        filename="raw-data.xlsx"
      />
    </div>
  ),
}

/** kind="docx": Word documents rendered with page layout via docx-preview. */
export const WordKind: Story = {
  name: "Kind: docx (Word)",
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url="/f0-document-sample.docx"
        kind="docx"
        filename="offer-letter.docx"
      />
    </div>
  ),
}

/** kind="text": `.md` renders as a document; txt/log/json as monospaced source. */
export const MarkdownKind: Story = {
  name: "Kind: text (markdown)",
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url="/f0-document-sample.md"
        kind="text"
        filename="RELEASE-NOTES.md"
        mimeType="text/markdown"
      />
    </div>
  ),
}

/** kind="text" with plain text: monospaced source, no markdown rendering. */
export const PlainTextKind: Story = {
  name: "Kind: text (plain)",
  tags: ["!dev"],
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url="/f0-document-sample.txt"
        kind="text"
        filename="worker.log"
        mimeType="text/plain"
      />
    </div>
  ),
}

/** Host actions land at the right end of the toolbar in EVERY kind — the
 * typical case is a Close button when the viewer fills an overlay (this is
 * exactly how the chat mounts it). */
export const WithCustomActions: Story = {
  name: "Custom toolbar actions",
  render: () => (
    <div className="h-full w-full">
      <F0PdfViewer
        url="/f0-document-sample.xlsx"
        kind="sheet"
        filename="raw-data.xlsx"
        actions={[{ icon: Cross, label: "Close", onClick: fn() }]}
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
