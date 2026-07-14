import { describe, expect, it } from "vitest"

import { type F0ChatAttachment } from "../../types"
import { replyThumbnailUrl, summariseAttachments } from "../reply-preview"

const image = (over: Partial<F0ChatAttachment> = {}): F0ChatAttachment => ({
  kind: "image",
  url: "https://img/a.png",
  name: "a.png",
  ...over,
})

const file = (over: Partial<F0ChatAttachment> = {}): F0ChatAttachment => ({
  kind: "file",
  url: "https://file/a.pdf",
  name: "a.pdf",
  ...over,
})

describe("summariseAttachments", () => {
  it("returns null without attachments", () => {
    expect(summariseAttachments(undefined)).toBeNull()
    expect(summariseAttachments([])).toBeNull()
  })

  it("counts photos", () => {
    expect(summariseAttachments([image()])).toEqual({ kind: "photo", count: 1 })
    expect(summariseAttachments([image(), image()])).toEqual({
      kind: "photo",
      count: 2,
    })
  })

  it("names a lone file but only counts several", () => {
    expect(summariseAttachments([file({ name: "report.pdf" })])).toEqual({
      kind: "file",
      count: 1,
      name: "report.pdf",
    })
    expect(summariseAttachments([file(), file()])).toEqual({
      kind: "file",
      count: 2,
      name: undefined,
    })
  })

  it("flags a mix of images and files with the total count", () => {
    expect(summariseAttachments([image(), file(), file()])).toEqual({
      kind: "mixed",
      count: 3,
    })
  })
})

describe("replyThumbnailUrl", () => {
  it("prefers an image's thumbnail, falls back to its url", () => {
    expect(
      replyThumbnailUrl([image({ thumbnailUrl: "https://t/x.png" })])
    ).toBe("https://t/x.png")
    expect(replyThumbnailUrl([image({ url: "https://img/y.png" })])).toBe(
      "https://img/y.png"
    )
  })

  it("is undefined when there's no image", () => {
    expect(replyThumbnailUrl([file()])).toBeUndefined()
    expect(replyThumbnailUrl(undefined)).toBeUndefined()
  })
})
