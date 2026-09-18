import { describe, expect, it, vi } from "vitest"
import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"
import { useComposerFiles } from "../useComposerFiles"

const file = (name: string) => new File(["bytes"], name, { type: "image/png" })

describe("useComposerFiles", () => {
  it("does not resurrect a removed file when its upload finishes", async () => {
    let finish!: (value: string[]) => void
    const uploadFiles = vi.fn(
      () =>
        new Promise<string[]>((resolve) => {
          finish = resolve
        })
    )
    const { result } = renderHook(() =>
      useComposerFiles({ uploadFiles, onError: vi.fn() })
    )
    let uploading!: ReturnType<typeof result.current.addFiles>

    act(() => {
      uploading = result.current.addFiles([file("one.png")])
    })
    const id = result.current.files[0]?.id
    expect(id).toBeDefined()
    act(() => result.current.removeFile(id!))
    await act(async () => {
      finish(["remote"])
      await uploading
    })

    expect(result.current.files).toHaveLength(0)
  })

  it("retains failed files and retries only the selected file", async () => {
    const uploadFiles = vi
      .fn()
      .mockRejectedValueOnce(new Error("internal upload detail"))
      .mockResolvedValueOnce(["remote-two"])
      .mockResolvedValueOnce(["remote-one"])
    const { result } = renderHook(() =>
      useComposerFiles<string>({
        uploadFiles,
        uploadErrorMessage: "Upload unavailable",
        onError: vi.fn(),
      })
    )

    await act(async () =>
      result.current.addFiles([file("one.png"), file("two.png")])
    )
    expect(result.current.files.map((item) => item.status)).toEqual([
      "error",
      "ready",
    ])
    expect(result.current.files.map((item) => item.errorMessage)).toEqual([
      "Upload unavailable",
      undefined,
    ])
    const id = result.current.files[0]!.id
    await act(async () => result.current.retryFile(id))

    expect(uploadFiles).toHaveBeenNthCalledWith(
      3,
      [result.current.files[0]!.file],
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    )
    expect(result.current.files.map((item) => item.status)).toEqual([
      "ready",
      "ready",
    ])
  })

  it("clears only the accepted snapshot and keeps newly attached files", async () => {
    const uploadFiles = vi.fn(async (files: File[]) =>
      files.map((item) => item.name)
    )
    const { result } = renderHook(() =>
      useComposerFiles({ uploadFiles, onError: vi.fn() })
    )
    await act(async () => result.current.addFiles([file("first.png")]))
    const sentId = result.current.files[0]!.id
    await act(async () => result.current.addFiles([file("later.png")]))

    act(() => result.current.clearFiles([sentId]))
    expect(result.current.files.map((item) => item.file.name)).toEqual([
      "later.png",
    ])
  })

  it("parks uploads in their original conversation", async () => {
    let finish!: (value: string[]) => void
    const uploadFiles = vi.fn(
      () =>
        new Promise<string[]>((resolve) => {
          finish = resolve
        })
    )
    const onError = vi.fn()
    const { result, rerender } = renderHook(
      ({ scopeKey }) => useComposerFiles({ scopeKey, uploadFiles, onError }),
      { initialProps: { scopeKey: "first" } }
    )
    let uploading!: ReturnType<typeof result.current.addFiles>
    act(() => {
      uploading = result.current.addFiles([file("first.png")])
    })
    rerender({ scopeKey: "second" })
    expect(result.current.files).toHaveLength(0)

    await act(async () => {
      finish(["remote-first"])
      await uploading
    })
    expect(result.current.files).toHaveLength(0)
    rerender({ scopeKey: "first" })
    expect(result.current.files[0]).toMatchObject({
      status: "ready",
      value: "remote-first",
    })
  })
})

it("bounds concurrent preparations and cancels removed queued files", async () => {
  const finishes: (() => void)[] = []
  const uploadFiles = vi.fn(
    (files: File[]) =>
      new Promise<string[]>((resolve) =>
        finishes.push(() => resolve([files[0].name]))
      )
  )
  const { result } = renderHook(() =>
    useComposerFiles({ uploadFiles, onError: vi.fn() })
  )
  let first!: ReturnType<typeof result.current.addFiles>
  let second!: ReturnType<typeof result.current.addFiles>
  act(() => {
    first = result.current.addFiles([file("one.png"), file("two.png")])
    second = result.current.addFiles([file("cancel.png")])
  })
  expect(uploadFiles).toHaveBeenCalledTimes(2)
  act(() => result.current.removeFile(result.current.files[2].id))
  await act(async () => {
    finishes.forEach((finish) => finish())
    await Promise.all([first, second])
  })
  expect(uploadFiles).toHaveBeenCalledTimes(2)
  expect(result.current.files.map((item) => item.status)).toEqual([
    "ready",
    "ready",
  ])
})

it("includes parked files in the storage limit", async () => {
  const uploadFiles = vi.fn(async (files: File[]) =>
    files.map((item) => item.name)
  )
  const onError = vi.fn()
  const { result, rerender } = renderHook(
    ({ scopeKey }) =>
      useComposerFiles({ scopeKey, uploadFiles, onError, maxStoredFiles: 1 }),
    { initialProps: { scopeKey: "first" } }
  )
  await act(async () => result.current.addFiles([file("one.png")]))
  rerender({ scopeKey: "second" })
  await act(async () => result.current.addFiles([file("two.png")]))
  expect(result.current.files).toHaveLength(0)
  expect(onError).toHaveBeenCalledWith("too-many")
  expect(uploadFiles).toHaveBeenCalledTimes(1)
})
