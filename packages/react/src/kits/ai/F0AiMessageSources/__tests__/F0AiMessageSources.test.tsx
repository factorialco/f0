import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0AiMessageSources } from "../F0AiMessageSources"

describe("F0AiMessageSources", () => {
  it("renders the default 'Resources' title", () => {
    render(
      <F0AiMessageSources
        sources={[{ title: "Docs", link: "https://example.com" }]}
      />
    )

    expect(screen.getByText("Resources")).toBeInTheDocument()
  })

  it("renders a custom title when provided", () => {
    render(
      <F0AiMessageSources
        title="References"
        sources={[{ title: "Docs", link: "https://example.com" }]}
      />
    )

    expect(screen.getByText("References")).toBeInTheDocument()
  })

  it("renders link sources as anchor elements", () => {
    render(
      <F0AiMessageSources
        sources={[
          {
            title: "Factorial",
            link: "https://example.com",
            targetBlank: true,
          },
        ]}
      />
    )

    const link = screen.getByRole("link", { name: "Factorial" })
    expect(link).toHaveAttribute("href", "https://example.com")
    expect(link).toHaveAttribute("target", "_blank")
  })

  it("renders link-less sources as plain rows (no anchor)", () => {
    render(<F0AiMessageSources sources={[{ title: "Internal note" }]} />)

    expect(screen.queryByRole("link")).toBeNull()
    expect(screen.getByText("Internal note")).toBeInTheDocument()
  })

  it("returns null when sources is empty", () => {
    const { container } = render(<F0AiMessageSources sources={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})
