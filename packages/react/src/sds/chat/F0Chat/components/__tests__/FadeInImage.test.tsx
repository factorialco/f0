import { describe, expect, it } from "vitest"

import { fireEvent, zeroRender as render, screen } from "@/testing/test-utils"

import { FadeInImage } from "../FadeInImage"

describe("FadeInImage", () => {
  it("starts transparent and fades opaque once the image loads", () => {
    render(<FadeInImage src="https://cdn.example.com/photo.jpg" alt="photo" />)
    const img = screen.getByRole("img", { name: "photo" })
    // jsdom never decodes, so `complete` stays false — the network-load path.
    expect(img.className).toContain("opacity-0")
    fireEvent.load(img)
    expect(img.className).toContain("opacity-100")
  })

  it("keeps the caller's classes and props", () => {
    render(
      <FadeInImage
        src="https://cdn.example.com/photo.jpg"
        alt="photo"
        className="h-16 w-16 object-cover"
      />
    )
    const img = screen.getByRole("img", { name: "photo" })
    expect(img.className).toContain("h-16")
    expect(img.className).toContain("object-cover")
  })
})
