import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ChatLocationAttachment } from "../components/ChatLocationAttachment"
import { type F0ChatLocationAttachment } from "../types"
import { summariseAttachments } from "../utils/reply-preview"

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

  it("embeds a keyless OpenStreetMap preview centered on the point", () => {
    render(<ChatLocationAttachment location={LOCATION} />)
    const iframe = screen.getByTitle("Factorial HQ")
    expect(iframe.getAttribute("src")).toContain(
      "openstreetmap.org/export/embed.html"
    )
    expect(iframe.getAttribute("src")).toContain(
      encodeURIComponent("41.3894,2.1607")
    )
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

  it("shows the place name, falling back to the generic label", () => {
    render(<ChatLocationAttachment location={LOCATION} />)
    expect(screen.getByText("Factorial HQ")).toBeInTheDocument()

    render(
      <ChatLocationAttachment location={{ ...LOCATION, name: undefined }} />
    )
    expect(screen.getByText("Location")).toBeInTheDocument()
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
