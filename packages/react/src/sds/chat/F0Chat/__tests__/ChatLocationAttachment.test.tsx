import { beforeAll, describe, expect, it, vi } from "vitest"

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

// The map is the one attachment still gated on visibility — each instance takes
// a live WebGL context and browsers cap how many can exist at once. jsdom's
// shared observer stub never calls back, so give this suite one that does.
beforeAll(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      private readonly callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe(target: Element) {
        this.callback(
          [{ isIntersecting: true, target } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        )
      }
      unobserve() {}
      disconnect() {}
      takeRecords = () => []
    }
  )
})

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

  // The 3:2 box is declared on the wrapper, so the placeholder and the mounted
  // map occupy exactly the same space and the row never re-measures.
  it("renders the lazy MapLibre map with the teardrop marker", async () => {
    render(<ChatLocationAttachment location={LOCATION} />)
    const previewRectangle = screen.getByRole("link").firstElementChild
    expect(previewRectangle).toHaveStyle({ aspectRatio: "1.5" })
    // The map module is lazy-loaded — wait for the chunk to resolve.
    expect(await screen.findByTestId("chat-location-map")).toBeInTheDocument()
    expect(previewRectangle).toHaveStyle({ aspectRatio: "1.5" })
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

  it("applies a sender-aware surface to the card and map placeholder", () => {
    const surfaceClassName = "bg-[color:orange]"
    render(
      <ChatLocationAttachment
        location={LOCATION}
        surfaceClassName={surfaceClassName}
      />
    )

    expect(screen.getByRole("link")).toHaveClass(surfaceClassName)
    expect(screen.getByTestId("chat-location-map")).not.toHaveClass(
      surfaceClassName
    )
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
