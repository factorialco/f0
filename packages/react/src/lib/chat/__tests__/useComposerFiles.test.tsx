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
    let uploading!: Promise<void>

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
      "error",
    ])
    expect(result.current.files.map((item) => item.errorMessage)).toEqual([
      "Upload unavailable",
      "Upload unavailable",
    ])
    const id = result.current.files[0]!.id
    await act(async () => result.current.retryFile(id))

    expect(uploadFiles).toHaveBeenNthCalledWith(2, [
      result.current.files[0]!.file,
    ])
    expect(result.current.files.map((item) => item.status)).toEqual([
      "ready",
      "error",
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
    let uploading!: Promise<void>
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
