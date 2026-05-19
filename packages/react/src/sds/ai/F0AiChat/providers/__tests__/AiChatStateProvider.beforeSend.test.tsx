import { userEvent } from "@testing-library/user-event"
import { useEffect } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { AiChatStateProvider, useAiChat } from "../AiChatStateProvider"

const rawSendMessageMock = vi.fn()
const onBeforeSendMessageMock = vi.fn()
const placeholdersProbeMock = vi.fn()

const SendMessageProbe = () => {
  const { sendMessage, setSendMessageFunction } = useAiChat()

  useEffect(() => {
    setSendMessageFunction(rawSendMessageMock)
    return () => setSendMessageFunction(null)
  }, [setSendMessageFunction])

  return <button onClick={() => sendMessage("hello")}>Send probe</button>
}

const PlaceholdersProbe = () => {
  const { placeholders } = useAiChat()

  useEffect(() => {
    placeholdersProbeMock(placeholders)
  }, [placeholders])

  return null
}

const renderWithProvider = () => {
  const providerProps = {
    enabled: true,
    onBeforeSendMessage: onBeforeSendMessageMock,
  } as React.ComponentProps<typeof AiChatStateProvider> & {
    onBeforeSendMessage: () => Promise<boolean>
  }

  render(
    <AiChatStateProvider {...providerProps}>
      <SendMessageProbe />
    </AiChatStateProvider>
  )
}

describe("AiChatStateProvider before-send hook", () => {
  beforeEach(() => {
    rawSendMessageMock.mockClear()
    onBeforeSendMessageMock.mockReset()
    placeholdersProbeMock.mockClear()
  })

  it("blocks sending when the before-send hook resolves false", async () => {
    onBeforeSendMessageMock.mockResolvedValue(false)
    const user = userEvent.setup()

    renderWithProvider()

    await user.click(screen.getByRole("button", { name: "Send probe" }))

    await waitFor(() =>
      expect(onBeforeSendMessageMock).toHaveBeenCalledTimes(1)
    )
    expect(rawSendMessageMock).not.toHaveBeenCalled()
  })

  it("uses provider placeholders from props", async () => {
    render(
      <AiChatStateProvider
        enabled
        placeholders={["Ask about payroll", "Ask about docs"]}
      >
        <PlaceholdersProbe />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(placeholdersProbeMock).toHaveBeenLastCalledWith([
        "Ask about payroll",
        "Ask about docs",
      ])
    )
  })
})
