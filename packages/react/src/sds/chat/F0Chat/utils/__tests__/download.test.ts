import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { triggerDownload } from "../download"

interface ClickedAnchor {
  download: string
  href: string
  target: string
}

const clicks: ClickedAnchor[] = []

const fileResponse = (contentLength: string | null) =>
  new Response(new Blob(["payload"]), {
    status: 200,
    headers: contentLength === null ? {} : { "content-length": contentLength },
  })

beforeEach(() => {
  vi.useFakeTimers()
  clicks.length = 0
  vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
    function (this: HTMLAnchorElement) {
      clicks.push({
        download: this.download,
        href: this.href,
        target: this.target,
      })
    }
  )
  vi.stubGlobal("fetch", vi.fn())
  vi.stubGlobal(
    "URL",
    class MockURL extends window.URL {
      static readonly createObjectURL = vi.fn(() => "blob:download")
      static readonly revokeObjectURL = vi.fn()
    }
  )
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe("triggerDownload", () => {
  it("attaches the anchor while clicking and removes it afterwards", async () => {
    let attachedAtClick = false
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function (this: HTMLAnchorElement) {
        attachedAtClick = document.body.contains(this)
      }
    )

    await triggerDownload("/documents/7", "payslip.pdf")

    expect(attachedAtClick).toBe(true)
    expect(document.querySelectorAll("a")).toHaveLength(0)
  })

  it("downloads a same-origin URL directly without fetching it", async () => {
    await triggerDownload("/documents/7", "payslip.pdf")

    expect(fetch).not.toHaveBeenCalled()
    expect(clicks).toEqual([
      {
        download: "payslip.pdf",
        href: `${window.location.origin}/documents/7`,
        target: "",
      },
    ])
  })

  it.each([
    ["blob:existing-download", "blob:existing-download"],
    [
      "data:image/png;base64,iVBORw0KGgo=",
      "data:image/png;base64,iVBORw0KGgo=",
    ],
  ])("downloads a self-contained %s URL directly", async (url, expected) => {
    await triggerDownload(url, "image.png")

    expect(fetch).not.toHaveBeenCalled()
    expect(clicks[0]?.href).toBe(expected)
    expect(clicks[0]?.target).toBe("")
  })

  it.each(["https://[", "javascript:alert(document.cookie)"])(
    "refuses an invalid or unsupported URL: %s",
    async (url) => {
      await triggerDownload(url, "image.png")

      expect(fetch).not.toHaveBeenCalled()
      expect(clicks).toHaveLength(0)
    }
  )

  it("fetches a cross-origin URL into a blob instead of navigating", async () => {
    vi.mocked(fetch).mockResolvedValue(fileResponse(null))

    await triggerDownload(
      "https://dublin.stream-io-cdn.com/image.png?signature=abc",
      "image.png"
    )

    expect(fetch).toHaveBeenCalledWith(
      "https://dublin.stream-io-cdn.com/image.png?signature=abc",
      expect.objectContaining({ credentials: "omit" })
    )
    expect(clicks).toEqual([
      { download: "image.png", href: "blob:download", target: "" },
    ])
    vi.runOnlyPendingTimers()
  })

  it("stops buffering a chunked response above the memory limit", async () => {
    const reader = {
      cancel: vi.fn(),
      read: vi.fn().mockResolvedValueOnce({
        done: false,
        value: { byteLength: 50 * 1024 * 1024 + 1 },
      }),
      releaseLock: vi.fn(),
    }
    vi.mocked(fetch).mockResolvedValue({
      body: { getReader: () => reader },
      headers: new Headers(),
      ok: true,
    } as unknown as Response)

    await triggerDownload("https://cdn.factorial.test/export.zip", "export.zip")

    expect(reader.cancel).toHaveBeenCalled()
    expect(reader.releaseLock).toHaveBeenCalled()
    expect(clicks[0]?.href).toBe("https://cdn.factorial.test/export.zip")
    expect(clicks[0]?.target).toBe("_blank")
  })

  it("does not buffer a response with a declared oversized length", async () => {
    vi.mocked(fetch).mockResolvedValue(fileResponse(String(60 * 1024 * 1024)))

    await triggerDownload("https://cdn.factorial.test/export.zip", "export.zip")

    expect(URL.createObjectURL).not.toHaveBeenCalled()
    expect(clicks[0]?.href).toBe("https://cdn.factorial.test/export.zip")
    expect(clicks[0]?.target).toBe("_blank")
  })

  it("allows a response whose declared length is exactly the memory limit", async () => {
    vi.mocked(fetch).mockResolvedValue(fileResponse(String(50 * 1024 * 1024)))

    await triggerDownload("https://cdn.factorial.test/export.zip", "export.zip")

    expect(clicks[0]?.href).toBe("blob:download")
    vi.runOnlyPendingTimers()
  })

  it("applies the actual-byte limit even when the declared length is small", async () => {
    const reader = {
      cancel: vi.fn(),
      read: vi
        .fn()
        .mockResolvedValueOnce({ done: false, value: new Uint8Array([1]) })
        .mockResolvedValueOnce({
          done: false,
          value: { byteLength: 50 * 1024 * 1024 },
        }),
      releaseLock: vi.fn(),
    }
    vi.mocked(fetch).mockResolvedValue({
      body: { getReader: () => reader },
      headers: new Headers({ "content-length": "1" }),
      ok: true,
    } as unknown as Response)

    await triggerDownload("https://cdn.factorial.test/export.zip", "export.zip")

    expect(reader.cancel).toHaveBeenCalledOnce()
    expect(clicks[0]?.target).toBe("_blank")
  })

  it("downloads an empty body with its declared content type", async () => {
    vi.mocked(fetch).mockResolvedValue({
      body: null,
      headers: new Headers({ "content-type": "text/csv" }),
      ok: true,
    } as Response)

    await triggerDownload("https://cdn.factorial.test/empty.csv", "empty.csv")

    const blob = vi.mocked(URL.createObjectURL).mock.calls[0]?.[0]
    expect(blob).toBeInstanceOf(Blob)
    expect(blob).toMatchObject({ size: 0, type: "text/csv" })
    vi.runOnlyPendingTimers()
  })

  it("falls back once when a cross-origin fetch fails", async () => {
    vi.mocked(fetch).mockRejectedValue(new TypeError("Failed to fetch"))

    await triggerDownload("https://cdn.factorial.test/image.png", "image.png")

    expect(clicks).toEqual([
      {
        download: "image.png",
        href: "https://cdn.factorial.test/image.png",
        target: "_blank",
      },
    ])
  })

  it("preserves the SPA when the server refuses the download", async () => {
    vi.mocked(fetch).mockResolvedValue(
      new Response("forbidden", { status: 403 })
    )

    await triggerDownload("https://cdn.factorial.test/image.png", "image.png")

    expect(clicks).toEqual([
      {
        download: "image.png",
        href: "https://cdn.factorial.test/image.png",
        target: "_blank",
      },
    ])
  })

  it("preserves the SPA when reading the response fails", async () => {
    const body = new ReadableStream({
      start(controller) {
        controller.error(new Error("connection reset"))
      },
    })
    vi.mocked(fetch).mockResolvedValue(new Response(body, { status: 200 }))

    await triggerDownload("https://cdn.factorial.test/image.png", "image.png")

    expect(clicks).toEqual([
      {
        download: "image.png",
        href: "https://cdn.factorial.test/image.png",
        target: "_blank",
      },
    ])
  })

  it("revokes a downloaded blob URL after the browser handles the click", async () => {
    vi.mocked(fetch).mockResolvedValue(fileResponse("7"))

    await triggerDownload("https://cdn.factorial.test/image.png", "image.png")

    expect(URL.revokeObjectURL).not.toHaveBeenCalled()
    vi.runOnlyPendingTimers()
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:download")
  })
})
