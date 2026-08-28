import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { type ChatRow } from "../grouping"
import {
  createMediaWarmer,
  rowImageUrls,
  WARMUP_LOOKAHEAD_ROWS,
  warmupRange,
} from "../media-warmup"

const messageRow = (
  id: string,
  attachments: {
    kind: "image" | "file"
    url: string
    thumbnailUrl?: string
    blurUrl?: string
  }[]
): ChatRow =>
  ({
    type: "message",
    key: id,
    isFirstOfRun: true,
    isLastOfRun: true,
    isLastMessage: false,
    message: {
      id,
      author: { id: "u1", name: "Ada" },
      body: "",
      createdAt: new Date().toISOString(),
      isMine: false,
      attachments: attachments.map((attachment) =>
        attachment.kind === "image"
          ? { ...attachment, kind: "image" as const, name: `${id}.webp` }
          : { ...attachment, kind: "file" as const, name: `${id}.pdf` }
      ),
    },
  }) as ChatRow

describe("warmupRange", () => {
  it("leans into the direction of travel", () => {
    const down = warmupRange(20, 30, "down", 100)
    expect(down.end).toBe(30 + WARMUP_LOOKAHEAD_ROWS)
    expect(down.start).toBe(20 - Math.ceil(WARMUP_LOOKAHEAD_ROWS / 2))

    const up = warmupRange(20, 30, "up", 100)
    expect(up.start).toBe(20 - WARMUP_LOOKAHEAD_ROWS)
    expect(up.end).toBe(30 + Math.ceil(WARMUP_LOOKAHEAD_ROWS / 2))
  })

  it("never runs off either end of the transcript", () => {
    expect(warmupRange(0, 2, "up", 5)).toEqual({ start: 0, end: 4 })
    expect(warmupRange(3, 4, "down", 5).end).toBe(4)
  })
})

describe("rowImageUrls", () => {
  it("takes the blur source first, then the photo", () => {
    const row = messageRow("m1", [
      { kind: "image", url: "photo.webp", blurUrl: "photo.webp?w=40" },
    ])
    expect(rowImageUrls(row)).toEqual(["photo.webp?w=40", "photo.webp"])
  })

  it("prefers a thumbnail over the full asset", () => {
    const row = messageRow("m1", [
      { kind: "image", url: "full.webp", thumbnailUrl: "thumb.webp" },
    ])
    expect(rowImageUrls(row)).toEqual(["thumb.webp"])
  })

  it("ignores non-image attachments and non-message rows", () => {
    expect(
      rowImageUrls(messageRow("m1", [{ kind: "file", url: "a.pdf" }]))
    ).toEqual([])
    expect(rowImageUrls(undefined)).toEqual([])
    expect(
      rowImageUrls({ type: "divider", key: "unread-divider" } as ChatRow)
    ).toEqual([])
  })
})

describe("createMediaWarmer", () => {
  let created: { src: string; decode: () => Promise<void> }[]

  beforeEach(() => {
    created = []
    vi.stubGlobal(
      "Image",
      class {
        set src(value: string) {
          created.push({ src: value, decode: this.decode })
        }
        decode = vi.fn(async () => {})
      }
    )
  })

  afterEach(() => vi.unstubAllGlobals())

  it("decodes each URL once, however many times it is offered", () => {
    const warmer = createMediaWarmer()
    warmer.warm(["a.webp", "b.webp"])
    warmer.warm(["a.webp", "b.webp", "c.webp"])

    expect(created.map((image) => image.src)).toEqual([
      "a.webp",
      "b.webp",
      "c.webp",
    ])
  })

  // The set is the whole point: Virtuoso destroys rows that leave its window,
  // so nothing inside a component can remember that a photo already arrived.
  it("keeps remembering across the rows that own those photos", () => {
    const warmer = createMediaWarmer()
    warmer.warm(["a.webp"])
    warmer.warm(["a.webp"])
    expect(created).toHaveLength(1)
  })

  it("stops warming once disposed", () => {
    const warmer = createMediaWarmer()
    warmer.dispose()
    warmer.warm(["a.webp"])
    expect(created).toHaveLength(0)
  })

  it("survives a decode that rejects", async () => {
    vi.stubGlobal(
      "Image",
      class {
        set src(value: string) {
          created.push({ src: value, decode: this.decode })
        }
        decode = vi.fn(async () => {
          throw new Error("broken")
        })
      }
    )
    const warmer = createMediaWarmer()
    expect(() => warmer.warm(["broken.webp"])).not.toThrow()
    await Promise.resolve()
    // Still marked, so a broken URL isn't retried on every scroll frame.
    warmer.warm(["broken.webp"])
    expect(created).toHaveLength(1)
  })
})
