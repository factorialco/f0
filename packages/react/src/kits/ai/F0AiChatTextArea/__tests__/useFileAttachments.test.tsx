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
    expect(onUploadFiles).toHaveBeenCalledTimes(15)
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
    expect(onUploadFiles).toHaveBeenCalledTimes(10)
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

describe("useFileAttachments processFiles identity", () => {
  it("keeps processFiles stable when attachedFiles grows so consumers don't re-register their handler on every upload", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
    const config: AiChatFileAttachmentConfig = { onUploadFiles }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    const first = result.current.processFiles

    await act(async () => {
      await result.current.processFiles(makeFiles(2))
    })
    expect(result.current.attachedFiles).toHaveLength(2)
    expect(result.current.processFiles).toBe(first)

    await act(async () => {
      await result.current.processFiles(makeFiles(3))
    })
    expect(result.current.attachedFiles).toHaveLength(5)
    expect(result.current.processFiles).toBe(first)
  })
})

describe("useFileAttachments upload contract", () => {
  it("marks the whole batch as error when the uploader returns fewer results than files", async () => {
    // Simulates a consumer whose onUploadFiles silently drops an entry —
    // we'd previously index uploaded[idx] === undefined and end up with a
    // file that has status='error' AND another that quietly looks 'uploaded'
    // but with no uploadedFile, which then got filtered at send time.
    const onUploadFiles = vi.fn(async (files: File[]) =>
      makeUploaded(files).slice(0, files.length - 1)
    )
    const config: AiChatFileAttachmentConfig = { onUploadFiles }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    await act(async () => {
      await result.current.processFiles(makeFiles(3))
    })

    expect(result.current.attachedFiles).toHaveLength(3)
    expect(
      result.current.attachedFiles.every((f) => f.status === "error")
    ).toBe(true)
  })

  it("marks the whole batch as error when the uploader returns more results than files", async () => {
    const onUploadFiles = vi.fn(async (files: File[]) => [
      ...makeUploaded(files),
      {
        id: "extra",
        url: "https://example.com/extra",
        filename: "extra",
        mimetype: "text/plain",
      },
    ])
    const config: AiChatFileAttachmentConfig = { onUploadFiles }

    const { result } = renderHook(() => useFileAttachments(config), {
      wrapper,
    })

    await act(async () => {
      await result.current.processFiles(makeFiles(2))
    })

    expect(
      result.current.attachedFiles.every((f) => f.status === "error")
    ).toBe(true)
  })
})

it("adopts prepared files without uploading and clears only the accepted producer files", async () => {
  const onUploadFiles = vi.fn(async (files: File[]) =>
    files.map((file) => ({
      url: file.name,
      filename: file.name,
      mimetype: file.type,
    }))
  )
  const { result } = renderHook(() => useFileAttachments({ onUploadFiles }))
  const draft = new File(["draft"], "draft.pdf", { type: "application/pdf" })
  const document = new File(["document"], "document.pdf", {
    type: "application/pdf",
  })
  await act(async () => result.current.processFiles([draft]))
  const prepared = {
    url: "prepared-document",
    filename: document.name,
    mimetype: document.type,
  }
  const accept = vi.fn(async () => true)
  await act(async () =>
    result.current.intakeFiles([document], {
      preparedFiles: [prepared],
      onPrepared: accept,
    })
  )
  expect(onUploadFiles).toHaveBeenCalledTimes(1)
  expect(accept).toHaveBeenCalledWith([prepared])
  expect(result.current.attachedFiles.map((item) => item.file.name)).toEqual([
    "draft.pdf",
  ])
})

it("retains producer files and prompt when preparation fails, without discarding successful siblings", async () => {
  const onUploadFiles = vi.fn(async (files: File[]) => {
    if (files[0]?.name === "bad.pdf") {
      throw new Error("offline")
    }
    return files.map((file) => ({
      url: file.name,
      filename: file.name,
      mimetype: file.type,
    }))
  })
  const { result } = renderHook(() => useFileAttachments({ onUploadFiles }))
  const accept = vi.fn()
  await act(async () => {
    await expect(
      result.current.intakeFiles(
        [new File(["a"], "good.pdf"), new File(["b"], "bad.pdf")],
        { text: "Create my expenses", onPrepared: accept }
      )
    ).rejects.toThrow()
  })
  expect(accept).not.toHaveBeenCalled()
  expect(result.current.value).toBe("Create my expenses")
  expect(result.current.attachedFiles.map((item) => item.status)).toEqual([
    "uploaded",
    "error",
  ])
})

it("holds submission ownership while a producer accepts its files", async () => {
  const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
  const { result } = renderHook(() => useFileAttachments({ onUploadFiles }))
  const file = new File(["document"], "document.pdf")
  const preparedFiles = makeUploaded([file])
  let resolve!: (accepted: boolean) => void
  const onPrepared = vi.fn(
    () =>
      new Promise<boolean>((done) => {
        resolve = done
      })
  )
  let pending!: Promise<unknown>
  await act(async () => {
    pending = result.current.intakeFiles([file], { preparedFiles, onPrepared })
  })
  const manual = vi.fn()
  await act(async () => {
    expect(await result.current.submit(manual)).toBe(false)
    await expect(
      result.current.intakeFiles([file], { preparedFiles, onPrepared })
    ).rejects.toThrow()
    result.current.setValue("A later draft")
  })
  expect(manual).not.toHaveBeenCalled()
  expect(onPrepared).toHaveBeenCalledTimes(1)
  await act(async () => {
    resolve(true)
    await pending
  })
  expect(result.current.attachedFiles).toHaveLength(0)
  expect(result.current.value).toBe("A later draft")
})

it("retains expired prepared files for recovery without invoking acceptance", async () => {
  const onUploadFiles = vi.fn(async (files: File[]) => makeUploaded(files))
  const { result } = renderHook(() =>
    useFileAttachments({
      onUploadFiles,
      getFileExpiry: () => Date.now() - 1000,
    })
  )
  const file = new File(["document"], "document.pdf")
  const onPrepared = vi.fn()
  await act(async () => {
    await expect(
      result.current.intakeFiles([file], {
        preparedFiles: makeUploaded([file]),
        onPrepared,
      })
    ).rejects.toThrow()
  })
  expect(onPrepared).not.toHaveBeenCalled()
  expect(onUploadFiles).not.toHaveBeenCalled()
  expect(result.current.attachedFiles[0]).toMatchObject({
    file,
    status: "error",
  })
})
