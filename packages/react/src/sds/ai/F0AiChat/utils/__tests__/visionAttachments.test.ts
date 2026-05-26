import { describe, expect, it } from "vitest"

import { extractVisionAttachments } from "../visionAttachments"

describe("extractVisionAttachments", () => {
  it("returns the text trimmed and empty binaryParts when no block is present", () => {
    const input = "  hello world  "
    const result = extractVisionAttachments(input)
    expect(result.text).toBe("hello world")
    expect(result.binaryParts).toEqual([])
  })

  it("parses a single attachment line and strips the block", () => {
    const input = `que hay aqui

<vision_attachments>
The following image files are attached to this message and visible to you. Examine them visually to extract any relevant information (amounts, dates, merchants, line items, etc.):
- Captura de pantalla 2026-05-17 a las 23.34.20.png (image/png) — URL: https://api.example.com/blobs/abc
</vision_attachments>`

    const result = extractVisionAttachments(input)

    expect(result.text).toBe("que hay aqui")
    expect(result.binaryParts).toEqual([
      {
        type: "binary",
        filename: "Captura de pantalla 2026-05-17 a las 23.34.20.png",
        mimeType: "image/png",
        url: "https://api.example.com/blobs/abc",
      },
    ])
  })

  it("parses multiple attachment lines from a single block in order", () => {
    const input = `look at these
<vision_attachments>
The following image files are attached to this message and visible to you:
- first.png (image/png) — URL: https://api.example.com/first
- second.jpg (image/jpeg) — URL: https://api.example.com/second
- third.webp (image/webp) — URL: https://api.example.com/third
</vision_attachments>`

    const result = extractVisionAttachments(input)

    expect(result.text).toBe("look at these")
    expect(result.binaryParts.map((p) => p.filename)).toEqual([
      "first.png",
      "second.jpg",
      "third.webp",
    ])
    expect(result.binaryParts.map((p) => p.mimeType)).toEqual([
      "image/png",
      "image/jpeg",
      "image/webp",
    ])
  })

  it("concatenates attachments from multiple blocks", () => {
    const input = `prefix
<vision_attachments>
- a.png (image/png) — URL: https://api.example.com/a
</vision_attachments>
middle text
<vision_attachments>
- b.png (image/png) — URL: https://api.example.com/b
</vision_attachments>
suffix`

    const result = extractVisionAttachments(input)

    expect(result.binaryParts.map((p) => p.filename)).toEqual([
      "a.png",
      "b.png",
    ])
    expect(result.text).toContain("prefix")
    expect(result.text).toContain("middle text")
    expect(result.text).toContain("suffix")
    expect(result.text).not.toContain("<vision_attachments>")
  })

  it("ignores malformed lines inside the block", () => {
    const input = `<vision_attachments>
- valid.png (image/png) — URL: https://api.example.com/valid
not a list item line
- missing-url.png (image/png)
</vision_attachments>`

    const result = extractVisionAttachments(input)

    expect(result.binaryParts).toEqual([
      {
        type: "binary",
        filename: "valid.png",
        mimeType: "image/png",
        url: "https://api.example.com/valid",
      },
    ])
  })
})
