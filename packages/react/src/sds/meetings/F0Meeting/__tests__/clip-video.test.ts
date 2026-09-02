import { describe, expect, it, vi } from "vitest"

import { createClipVideoBinding } from "../mocks/canvasVideo"

const video = () => document.createElement("video")

describe("createClipVideoBinding", () => {
  it("shows the first frame while the file is still loading", () => {
    const element = video()
    createClipVideoBinding("https://example.com/a.mp4", 0, {
      poster: "https://example.com/a.jpg",
    })(element)

    expect(element.poster).toBe("https://example.com/a.jpg")
    expect(element.src).toBe("https://example.com/a.mp4")
    expect(element.loop).toBe(true)
    // A tile never carries audio — the room mounts its own <audio> per track.
    expect(element.muted).toBe(true)
  })

  it("hands the element to the fallback when the clip cannot load", () => {
    // The whole reason the fallback exists: clips are hotlinked, so offline dev,
    // a sandboxed CI and a rotted URL all end up here. Degrading to the
    // synthetic tile reads as "camera off"; doing nothing reads as broken.
    const element = video()
    const release = vi.fn()
    const fallback = vi.fn(() => release)

    createClipVideoBinding("https://example.com/dead.mp4", 0, {
      poster: "https://example.com/dead.jpg",
      fallback,
    })(element)

    expect(fallback).not.toHaveBeenCalled()
    element.dispatchEvent(new Event("error"))

    expect(fallback).toHaveBeenCalledTimes(1)
    expect(fallback).toHaveBeenCalledWith(element)
    // The dead source is cleared first, or its poster and error state stay on
    // an element the fallback is now driving.
    expect(element.getAttribute("src")).toBeNull()
    expect(element.getAttribute("poster")).toBeNull()
  })

  it("takes over only once, however many errors the element fires", () => {
    const element = video()
    const fallback = vi.fn(() => vi.fn())
    createClipVideoBinding("https://example.com/dead.mp4", 0, { fallback })(
      element
    )

    element.dispatchEvent(new Event("error"))
    element.dispatchEvent(new Event("error"))
    element.dispatchEvent(new Event("error"))

    expect(fallback).toHaveBeenCalledTimes(1)
  })

  it("releases the fallback it started when the binding is torn down", () => {
    const element = video()
    const release = vi.fn()
    const unbind = createClipVideoBinding("https://example.com/dead.mp4", 0, {
      fallback: () => release,
    })(element)

    element.dispatchEvent(new Event("error"))
    unbind()

    expect(release).toHaveBeenCalledTimes(1)
    expect(element.getAttribute("src")).toBeNull()
  })

  it("does nothing to an element that is not a video", () => {
    const unbind = createClipVideoBinding(
      "https://example.com/a.mp4",
      0
    )(document.createElement("audio"))
    expect(unbind).toBeTypeOf("function")
    expect(() => unbind()).not.toThrow()
  })
})
