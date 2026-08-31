import { describe, expect, it, vi } from "vitest"

import { fireEvent, zeroRender as render, screen } from "@/testing/test-utils"

import { ChatImageTile } from "../ChatImageTile"

const IMAGE = {
  kind: "image" as const,
  url: "https://cdn.example.com/photo.webp",
  name: "photo.webp",
}

const renderTile = (aspectRatio = 4 / 3) =>
  render(
    <ChatImageTile
      image={IMAGE}
      aspectRatio={aspectRatio}
      spanFull={false}
      label="Open image"
      onOpen={vi.fn()}
    />
  )

describe("ChatImageTile", () => {
  // The whole point of the mosaic: the space a photo will take is known before
  // a byte arrives, so the row is never measured twice.
  it("reserves the cell's box before the image loads and keeps it after", () => {
    renderTile(4 / 3)
    const tile = screen.getByTestId("chat-image-attachment")
    expect(tile).toHaveStyle({ aspectRatio: "1.3333333333333333" })

    fireEvent.load(screen.getByAltText(IMAGE.name))
    expect(tile).toHaveStyle({ aspectRatio: "1.3333333333333333" })
  })

  // Nothing pulses. Without a blur source the cell is simply the sender's tint
  // until the photo paints over it — the real file arriving, not a stand-in.
  it("shows no skeleton while decoding", () => {
    renderTile()
    expect(screen.queryByTestId("skeleton")).not.toBeInTheDocument()
    expect(
      screen.queryByTestId("chat-image-placeholder")
    ).not.toBeInTheDocument()
  })

  it("fetches on mount instead of waiting for the browser's lazy heuristic", () => {
    renderTile()
    // Rows are mounted a screenful ahead by the virtualizer; native lazy
    // loading would ignore that and only request the photo once it is basically
    // on screen, which is what always left time for a placeholder.
    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager")
  })

  it("blurs the low-resolution source underneath, and drops it on load", () => {
    render(
      <ChatImageTile
        image={{ ...IMAGE, blurUrl: "https://cdn.example.com/photo.webp?w=40" }}
        aspectRatio={1}
        spanFull={false}
        label="Open image"
        onOpen={vi.fn()}
      />
    )
    const blur = screen.getByTestId("chat-image-blur")
    expect(blur).toHaveClass("absolute", "inset-0", "blur-md", "object-cover")
    expect(blur).toHaveAttribute("aria-hidden", "true")

    fireEvent.load(screen.getByAltText(IMAGE.name))
    expect(screen.queryByTestId("chat-image-blur")).not.toBeInTheDocument()
    expect(screen.getByAltText(IMAGE.name)).toHaveClass("opacity-100")
  })

  it("spans both columns for the 1-up and the 3-up hero", () => {
    render(
      <ChatImageTile
        image={IMAGE}
        aspectRatio={1}
        spanFull
        label="Open image"
        onOpen={vi.fn()}
      />
    )
    expect(screen.getByTestId("chat-image-attachment")).toHaveClass(
      "col-span-2"
    )
  })

  it("opens the lightbox on click", () => {
    const onOpen = vi.fn()
    render(
      <ChatImageTile
        image={IMAGE}
        aspectRatio={1}
        spanFull={false}
        label="Open image"
        onOpen={onOpen}
      />
    )
    fireEvent.click(screen.getByTestId("chat-image-attachment"))
    expect(onOpen).toHaveBeenCalledTimes(1)
  })
})
