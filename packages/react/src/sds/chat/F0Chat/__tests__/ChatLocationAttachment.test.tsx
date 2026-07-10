import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ChatLocationAttachment } from "../components/ChatLocationAttachment"
import { type F0ChatLocationAttachment } from "../types"
import { summariseAttachments } from "../utils/reply-preview"

// maplibre-gl needs WebGL (absent in jsdom) — stub the Map class; the card's
// own structure (link, pin, footer, attribution) is what these tests cover.
vi.mock("maplibre-gl", () => ({
  default: {
    Map: class {
      remove() {}
    },
  },
}))

const LOCATION: F0ChatLocationAttachment = {
  kind: "location",
  latitude: 41.3894,
  longitude: 2.1607,
  name: "Factorial HQ",
}

describe("ChatLocationAttachment", () => {
  it("opens the point in Google Maps in a new tab", () => {
    render(<ChatLocationAttachment location={LOCATION} />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute(
      "href",
      "https://www.google.com/maps?q=41.3894,2.1607"
    )
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("renders the lazy MapLibre map with the teardrop marker", async () => {
    render(<ChatLocationAttachment location={LOCATION} />)
    // The map module is lazy-loaded — wait for the chunk to resolve.
    expect(await screen.findByTestId("chat-location-map")).toBeInTheDocument()
    expect(screen.getByTestId("chat-location-pin")).toBeInTheDocument()
  })

  it("is a map-only card: the name is the accessible label, not a footer", () => {
    render(<ChatLocationAttachment location={LOCATION} />)
    expect(screen.queryByText("Factorial HQ")).not.toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAccessibleName("Factorial HQ")
  })

  it("falls back to the generic label without a name", () => {
    render(
      <ChatLocationAttachment location={{ ...LOCATION, name: undefined }} />
    )
    expect(screen.getByRole("link")).toHaveAccessibleName("Location")
  })

  it("applies the bubble's chained-corner classes when provided", () => {
    render(
      <ChatLocationAttachment
        location={LOCATION}
        cornerClass="rounded-2xl rounded-tl-sm"
      />
    )
    const link = screen.getByRole("link")
    expect(link.className).toContain("rounded-tl-sm")
    expect(link.className).not.toContain("rounded-xl ")
  })
})

describe("reply preview with a location", () => {
  it("summarises a lone location as its own kind", () => {
    expect(summariseAttachments([LOCATION])).toEqual({ kind: "location" })
  })

  it("counts locations into mixed summaries", () => {
    expect(
      summariseAttachments([
        LOCATION,
        { kind: "file", url: "https://x/f.pdf", name: "f.pdf" },
      ])
    ).toEqual({ kind: "mixed", count: 2 })
  })
})
