import { Message } from "@copilotkit/shared"
import { act, renderHook } from "@testing-library/react"
import React, { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"

import { AiChatState } from "../internal-types"
import { useAiChat } from "../providers/AiChatStateProvider"
import { AiChatStateProvider } from "../providers/AiChatStateProvider"

const createWrapper = (providerProps: Partial<AiChatState> = {}) => {
  return ({ children }: { children: ReactNode }) => (
    <I18nProvider translations={defaultTranslations}>
      <AiChatStateProvider enabled={true} {...providerProps}>
        {children}
      </AiChatStateProvider>
    </I18nProvider>
  )
}

const extractAttachmentsPayload = (content: string) => {
  const match = content.match(/\[ATTACHMENTS\]\n([\s\S]*?)\n\[\/ATTACHMENTS\]/)
  expect(match).not.toBeNull()
  return JSON.parse(match![1]) as {
    files: Array<{
      name: string
      url: string
      type: string
      size: number
    }>
    failed_uploads: Array<{
      name: string
      type: string
      size: number
      error: string
    }>
  }
}

describe("AiChatStateProvider", () => {
  it("sends successful uploads and failed upload metadata in the message payload", async () => {
    const onUploadFile = vi
      .fn()
      .mockResolvedValueOnce({ url: "https://s3.example.com/success.txt" })
      .mockRejectedValueOnce(new Error("S3 timeout"))
    const onUploadFailed = vi.fn()
    const sendMessageFunction = vi.fn()

    const { result } = renderHook(() => useAiChat(), {
      wrapper: createWrapper({ onUploadFile, onUploadFailed }),
    })

    const successFile = new File(["success"], "success.txt", {
      type: "text/plain",
    })
    const failedFile = new File(["failed"], "failed.pdf", {
      type: "application/pdf",
    })

    act(() => {
      result.current.setSendMessageFunction(sendMessageFunction)
      result.current.addAttachments([successFile, failedFile])
    })

    await act(async () => {
      await result.current.sendMessage("Please process these files")
    })

    expect(onUploadFile).toHaveBeenCalledTimes(2)
    expect(onUploadFailed).toHaveBeenCalledWith([
      { file: failedFile, error: "S3 timeout" },
    ])

    const message = sendMessageFunction.mock.calls[0][0] as Message
    const payload = extractAttachmentsPayload(message.content ?? "")

    expect(payload.files).toEqual([
      {
        name: "success.txt",
        url: "https://s3.example.com/success.txt",
        type: "text/plain",
        size: successFile.size,
      },
    ])
    expect(payload.failed_uploads).toEqual([
      {
        name: "failed.pdf",
        type: "application/pdf",
        size: failedFile.size,
        error: "S3 timeout",
      },
    ])
  })

  it("still sends the message when all uploads fail", async () => {
    const onUploadFile = vi.fn().mockRejectedValue(new Error("Forbidden"))
    const onUploadFailed = vi.fn()
    const sendMessageFunction = vi.fn()

    const { result } = renderHook(() => useAiChat(), {
      wrapper: createWrapper({ onUploadFile, onUploadFailed }),
    })

    const failedFile = new File(["failed"], "private.pdf", {
      type: "application/pdf",
    })

    act(() => {
      result.current.setSendMessageFunction(sendMessageFunction)
      result.current.addAttachment(failedFile)
    })

    await act(async () => {
      await result.current.sendMessage("Try to process this file")
    })

    expect(sendMessageFunction).toHaveBeenCalledTimes(1)
    expect(onUploadFailed).toHaveBeenCalledWith([
      { file: failedFile, error: "Forbidden" },
    ])

    const message = sendMessageFunction.mock.calls[0][0] as Message
    const payload = extractAttachmentsPayload(message.content ?? "")
    expect(payload.files).toEqual([])
    expect(payload.failed_uploads).toEqual([
      {
        name: "private.pdf",
        type: "application/pdf",
        size: failedFile.size,
        error: "Forbidden",
      },
    ])
  })

  it("ignores re-entrant sends while files are uploading", async () => {
    const sendMessageFunction = vi.fn()

    let resolveUpload: ((value: { url: string }) => void) | undefined =
      undefined

    const onUploadFile = vi.fn(
      () =>
        new Promise<{ url: string }>((resolve) => {
          resolveUpload = resolve
        })
    )

    const { result } = renderHook(() => useAiChat(), {
      wrapper: createWrapper({ onUploadFile }),
    })

    const file = new File(["content"], "doc.txt", { type: "text/plain" })

    act(() => {
      result.current.setSendMessageFunction(sendMessageFunction)
      result.current.addAttachment(file)
    })

    let firstSendPromise: Promise<void> | undefined = undefined
    let secondSendPromise: Promise<void> | undefined = undefined

    act(() => {
      firstSendPromise = result.current.sendMessage("first message")
      secondSendPromise = result.current.sendMessage("second message")
    })

    expect(onUploadFile).toHaveBeenCalledTimes(1)

    await act(async () => {
      resolveUpload?.({ url: "https://s3.example.com/doc.txt" })
      await Promise.all([firstSendPromise, secondSendPromise])
    })

    expect(sendMessageFunction).toHaveBeenCalledTimes(1)
  })
})
