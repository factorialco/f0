import type { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"
import { I18nProvider } from "@/lib/providers/i18n"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"
import type { AiChatFileIntake } from "../../types"
import { AiChatStateProvider, useAiChat } from "../AiChatStateProvider"

const wrapper = ({ children }: { children: ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>
    <AiChatStateProvider enabled>{children}</AiChatStateProvider>
  </I18nProvider>
)

describe("AiChatStateProvider drop buffer", () => {
  it("forwards drops directly when a handler is registered", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    const handler = vi.fn<AiChatFileIntake>(async () => [])

    act(() => {
      result.current.setProcessDroppedFilesFunction(handler)
    })
    const files = [new File(["x"], "a.csv", { type: "text/csv" })]
    act(() => {
      result.current.processDroppedFiles(files)
    })

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(files, {})
  })

  it("buffers drops that arrive while no handler is registered and flushes them on (re-)register", () => {
    // Reproduces the race where the textarea's onProcessFilesRef effect
    // cleans up (sets ref to null) and re-registers after a render — without
    // buffering, any file dropped in that window was lost silently.
    const { result } = renderHook(() => useAiChat(), { wrapper })

    const filesA = [new File(["a"], "a.csv", { type: "text/csv" })]
    const filesB = [new File(["b"], "b.csv", { type: "text/csv" })]

    act(() => {
      result.current.processDroppedFiles(filesA)
      result.current.processDroppedFiles(filesB)
    })

    const handler = vi.fn<AiChatFileIntake>(async () => [])
    act(() => {
      result.current.setProcessDroppedFilesFunction(handler)
    })

    expect(handler).toHaveBeenCalledTimes(2)
    expect(handler).toHaveBeenNthCalledWith(1, filesA, {})
    expect(handler).toHaveBeenNthCalledWith(2, filesB, {})
  })

  it("does not re-flush buffered drops a second time when the handler is registered again", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })

    const filesA = [new File(["a"], "a.csv", { type: "text/csv" })]
    act(() => {
      result.current.processDroppedFiles(filesA)
    })

    const firstHandler = vi.fn<AiChatFileIntake>(async () => [])
    act(() => {
      result.current.setProcessDroppedFilesFunction(firstHandler)
    })
    expect(firstHandler).toHaveBeenCalledTimes(1)

    // Simulate the textarea's cleanup + re-register cycle (deps changed).
    const secondHandler = vi.fn<AiChatFileIntake>(async () => [])
    act(() => {
      result.current.setProcessDroppedFilesFunction(null)
      result.current.setProcessDroppedFilesFunction(secondHandler)
    })
    expect(secondHandler).not.toHaveBeenCalled()
  })
})

it("resolves programmatic preparation after the composer registers", async () => {
  const { result } = renderHook(() => useAiChat(), { wrapper })
  const files = [
    new File(["document"], "document.pdf", { type: "application/pdf" }),
  ]
  const values = [
    {
      url: "prepared-document",
      filename: "document.pdf",
      mimetype: "application/pdf",
    },
  ]
  let preparation!: ReturnType<AiChatFileIntake>
  act(() => {
    preparation = result.current.prepareFiles(files, { text: "Summarize this" })
  })
  const handler = vi.fn<AiChatFileIntake>(async () => values)
  await act(async () => {
    result.current.setProcessDroppedFilesFunction(handler)
    await expect(preparation).resolves.toEqual(values)
  })
  expect(handler).toHaveBeenCalledWith(files, { text: "Summarize this" })
})

it("rejects queued preparation when its provider unmounts", async () => {
  const { result, unmount } = renderHook(() => useAiChat(), { wrapper })
  const preparation = result.current.prepareFiles([
    new File(["document"], "document.pdf"),
  ])
  const rejected = expect(preparation).rejects.toThrow("Composer unmounted")
  unmount()
  await rejected
})
