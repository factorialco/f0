import { afterEach, describe, expect, it, vi } from "vitest"
import { copyToClipboard } from "../clipboard"

type ClipboardStub = { writeText?: (text: string) => Promise<void> }

const setClipboard = (clipboard: ClipboardStub | undefined) => {
  Object.defineProperty(navigator, "clipboard", {
    value: clipboard,
    configurable: true,
    writable: true,
  })
}

const setExecCommand = (impl: ((command: string) => boolean) | undefined) => {
  Object.defineProperty(document, "execCommand", {
    value: impl,
    configurable: true,
    writable: true,
  })
}

describe("copyToClipboard", () => {
  afterEach(() => {
    setClipboard(undefined)
    setExecCommand(undefined)
    vi.restoreAllMocks()
  })

  it("writes through the async clipboard and reports success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    setClipboard({ writeText })

    await expect(copyToClipboard("hello")).resolves.toBe(true)
    expect(writeText).toHaveBeenCalledWith("hello")
  })

  it("falls back to execCommand when the async clipboard rejects", async () => {
    setClipboard({ writeText: vi.fn().mockRejectedValue(new Error("denied")) })
    const execCommand = vi.fn().mockReturnValue(true)
    setExecCommand(execCommand)

    await expect(copyToClipboard("hello")).resolves.toBe(true)
    expect(execCommand).toHaveBeenCalledWith("copy")
  })

  it("falls back to execCommand when there is no async clipboard at all", async () => {
    setClipboard(undefined)
    const execCommand = vi.fn().mockReturnValue(true)
    setExecCommand(execCommand)

    await expect(copyToClipboard("hello")).resolves.toBe(true)
  })

  it("reports failure when neither path works", async () => {
    setClipboard(undefined)
    setExecCommand(undefined)

    await expect(copyToClipboard("hello")).resolves.toBe(false)
  })

  it("leaves no textarea behind and restores focus", async () => {
    setClipboard(undefined)
    setExecCommand(vi.fn().mockReturnValue(true))

    const button = document.createElement("button")
    document.body.appendChild(button)
    button.focus()

    await copyToClipboard("hello")

    expect(document.querySelectorAll("textarea")).toHaveLength(0)
    expect(document.activeElement).toBe(button)

    button.remove()
  })
})
