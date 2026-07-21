import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0FileItem } from "../index"

const file = new File(["test"], "invoice-F001.pdf", { type: "application/pdf" })

describe("F0FileItem", () => {
  it("renders the file name", () => {
    render(<F0FileItem file={file} />)

    expect(screen.getByText("invoice-F001.pdf")).toBeInTheDocument()
  })

  it("renders the subtitle under the file name when provided", () => {
    render(<F0FileItem file={file} subtitle="09 June, 2026" />)

    expect(screen.getByText("09 June, 2026")).toBeInTheDocument()
  })

  it("does not render a subtitle node when the subtitle is omitted", () => {
    render(<F0FileItem file={file} />)

    expect(screen.queryByText("09 June, 2026")).not.toBeInTheDocument()
  })

  it("doubles the padding on both axes when a subtitle is present (md)", () => {
    const { container: withoutSubtitle } = render(<F0FileItem file={file} />)
    expect(withoutSubtitle.firstChild).toHaveClass("py-0.5", "pl-0.5", "pr-1.5")

    const { container: withSubtitle } = render(
      <F0FileItem file={file} subtitle="09 June, 2026" />
    )
    expect(withSubtitle.firstChild).toHaveClass("py-1", "pl-1", "pr-3")
    expect(withSubtitle.firstChild).not.toHaveClass("py-0.5")
  })

  it("doubles the padding on both axes when a subtitle is present (lg)", () => {
    const { container: withoutSubtitle } = render(
      <F0FileItem file={file} size="lg" />
    )
    expect(withoutSubtitle.firstChild).toHaveClass("p-1")

    const { container: withSubtitle } = render(
      <F0FileItem file={file} size="lg" subtitle="09 June, 2026" />
    )
    expect(withSubtitle.firstChild).toHaveClass("p-2")
    expect(withSubtitle.firstChild).not.toHaveClass("p-1")
  })
})
