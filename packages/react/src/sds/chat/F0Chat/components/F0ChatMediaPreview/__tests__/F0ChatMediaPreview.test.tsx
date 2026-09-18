import { describe, expect, it, vi } from "vitest"
import { fireEvent, screen, zeroRender as render } from "@/testing/test-utils"
import { F0ChatMediaPreview } from "../F0ChatMediaPreview"

describe("F0ChatMediaPreview", () => {
  it("navigates images, downloads the selected original and closes", () => {
    const onIndexChange = vi.fn()
    const onDownload = vi.fn()
    const onClose = vi.fn()
    const images = [
      {
        url: "https://example.com/one.png",
        name: "one.png",
        mimeType: "image/png",
      },
      {
        url: "https://example.com/two.png",
        name: "two.png",
        mimeType: "image/png",
      },
    ]
    const { rerender } = render(
      <F0ChatMediaPreview
        images={images}
        index={0}
        onIndexChange={onIndexChange}
        onDownload={onDownload}
        onClose={onClose}
      />
    )
    expect(screen.getByRole("dialog", { name: "one.png" })).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: "Next image" }))
    expect(onIndexChange).toHaveBeenCalledWith(1)

    rerender(
      <F0ChatMediaPreview
        images={images}
        index={1}
        onIndexChange={onIndexChange}
        onDownload={onDownload}
        onClose={onClose}
      />
    )
    fireEvent.click(screen.getByRole("button", { name: "Download" }))
    expect(onDownload).toHaveBeenCalledWith(images[1])
    fireEvent.click(screen.getAllByRole("button", { name: "Close" })[0]!)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it("opens a PDF document preview", () => {
    render(
      <F0ChatMediaPreview
        document={{
          url: "https://example.com/report.pdf",
          name: "report.pdf",
          mimeType: "application/pdf",
          kind: "pdf",
        }}
        onClose={vi.fn()}
      />
    )
    expect(
      screen.getByRole("dialog", { name: "report.pdf" })
    ).toBeInTheDocument()
  })
})
