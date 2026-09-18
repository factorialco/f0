import { createRef } from "react"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { FileList } from ".."

/**
 * The attachment strip reveals itself by animating height from 0 to its
 * intrinsic size. That animation is the right shape for an intrinsic reveal
 * and stays, but the element has to clip itself while it runs: the row keeps
 * its full height throughout, so without clipping the file chips are painted
 * outside the box that is still growing, over whatever sits below.
 */
describe("FileList reveal containment", () => {
  const renderList = () =>
    render(
      <FileList
        filesConfig={{ maxFiles: 5, maxFileSize: 1_000_000 }}
        files={[new File(["x"], "report.pdf", { type: "application/pdf" })]}
        disabled={false}
        setFiles={vi.fn()}
        fileInputRef={createRef<HTMLInputElement>()}
      />
    )

  it("clips the revealing container while its height animates", () => {
    renderList()

    // The element that animates, not an ancestor: the strip sits inside a
    // panel that already clips, so asking for the nearest clipped ancestor
    // would pass with or without the fix.
    const chip = screen.getByText("report.pdf")
    const row = chip.closest(".overflow-x-auto")
    const reveal = row?.parentElement

    expect(reveal).toHaveClass("overflow-hidden")
  })
})
