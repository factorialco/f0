import { expect, it, vi } from "vitest"
import {
  act,
  waitFor,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"
import { useChatComposerController } from "../useChatComposerController"

it("waits for prepared files before accepting a queued draft", async () => {
  let finish!: (files: string[]) => void
  const uploadFiles = () =>
    new Promise<string[]>((resolve) => {
      finish = resolve
    })
  const accept = vi.fn()
  const { result } = renderHook(() =>
    useChatComposerController({
      scopeKey: "conversation",
      uploadFiles,
      onError: vi.fn(),
    })
  )
  act(() => {
    result.current.setValue("Summarize")
    void result.current.addFiles([new File(["pdf"], "document.pdf")])
  })
  act(() => {
    result.current.submit(accept)
  })
  expect(accept).not.toHaveBeenCalled()
  await act(async () => {
    finish(["prepared"])
  })
  await waitFor(() => expect(accept).toHaveBeenCalledTimes(1))
  expect(accept.mock.calls[0][0]).toMatchObject({
    text: "Summarize",
    files: [{ status: "ready", value: "prepared" }],
  })
  expect(result.current.value).toBe("")
  expect(result.current.files).toEqual([])
})
