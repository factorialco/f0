import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { I18nProvider } from "@/lib/providers/i18n"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"

import { type AiChatFileAttachmentConfig } from "../../F0AiChat/types"

import { useFileAttachments } from "../useFileAttachments"

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const makeFiles = (count: number) =>
  Array.from(
    { length: count },
    (_, i) => new File(["x"], `file-${i}.txt`, { type: "text/plain" })
  )

const makeUploaded = (files: File[]) =>
  files.map((f) => ({
    id: f.name,
    url: `https://example.com/${f.name}`,
    filename: f.name,
    mimetype: f.type,
  }))

describe("useFileAttachments maxFiles", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("does not cap uploads when maxFiles is omitted", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
    const config: AiChatFileAttachmentConfig = { onUploadFiles }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    await act(async () => {
      await result.current.processFiles(makeFiles(15))
    })

    expect(result.current.attachedFiles).toHaveLength(15)
    expect(onUploadFiles).toHaveBeenCalledTimes(1)
    expect(result.current.transientError).toBeNull()
    expect(result.current.isAtMaxFiles).toBe(false)
  })

  it("rejects the whole batch and surfaces a transient error when the explicit cap is exceeded", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
    const config: AiChatFileAttachmentConfig = { onUploadFiles, maxFiles: 10 }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    await act(async () => {
      await result.current.processFiles(makeFiles(15))
    })

    expect(result.current.attachedFiles).toHaveLength(0)
    expect(onUploadFiles).not.toHaveBeenCalled()
    expect(result.current.transientError).toBe(
      "You can attach up to 10 files at once"
    )

    // Banner clears itself after the timeout window.
    await act(async () => {
      vi.advanceTimersByTime(4000)
    })
    expect(result.current.transientError).toBeNull()
  })

  it("accepts the batch when the total stays at or below the explicit cap", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
    const config: AiChatFileAttachmentConfig = { onUploadFiles, maxFiles: 10 }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    await act(async () => {
      await result.current.processFiles(makeFiles(10))
    })

    expect(result.current.attachedFiles).toHaveLength(10)
    expect(onUploadFiles).toHaveBeenCalledTimes(1)
    expect(result.current.transientError).toBeNull()
    expect(result.current.isAtMaxFiles).toBe(true)
  })

  it("rejects the batch when adding to existing files would exceed the cap", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
    const config: AiChatFileAttachmentConfig = { onUploadFiles, maxFiles: 5 }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    // Seed with 3 files, leaving room for 2 more.
    await act(async () => {
      await result.current.processFiles(makeFiles(3))
    })
    expect(result.current.attachedFiles).toHaveLength(3)

    // Adding 4 more would land at 7 — over the cap, so reject everything new.
    await act(async () => {
      await result.current.processFiles(makeFiles(4))
    })

    expect(result.current.attachedFiles).toHaveLength(3)
    expect(result.current.transientError).toBe(
      "You can attach up to 5 files at once"
    )
  })
})
