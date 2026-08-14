import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ClampText } from "../ClampText"

describe("ClampText", () => {
  it("renders a single-line truncating span with a hover title", () => {
    render(<ClampText className="text-sm">Quarterly report.pdf</ClampText>)

    const text = screen.getByText("Quarterly report.pdf")
    expect(text.tagName).toBe("SPAN")
    expect(text).toHaveAttribute("title", "Quarterly report.pdf")
    expect(text).toHaveClass(
      "block",
      "overflow-hidden",
      "text-ellipsis",
      "whitespace-nowrap",
      "text-sm"
    )
  })

  it("clamps multi-line text with line-clamp instead of nowrap", () => {
    render(<ClampText lines={2}>A longer description text</ClampText>)

    const text = screen.getByText("A longer description text")
    expect(text).toHaveClass("line-clamp-1", "whitespace-normal")
    expect(text).toHaveStyle({ WebkitLineClamp: 2 })
    expect(text).not.toHaveClass("whitespace-nowrap")
  })
})
