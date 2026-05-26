import { userEvent } from "@testing-library/user-event"
import { useEffect } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { AiChatStateProvider, useAiChat } from "../AiChatStateProvider"

const loadThreadMock = vi.fn()

const LoadThreadProbe = () => {
  const { loadThread, setLoadThreadFunction, isLoadingThread } = useAiChat()

  useEffect(() => {
    setLoadThreadFunction(loadThreadMock)
    return () => setLoadThreadFunction(null)
  }, [setLoadThreadFunction])

  return (
    <div>
      <span data-testid="loading">{isLoadingThread ? "loading" : "idle"}</span>
      <button onClick={() => loadThread("t1", "My thread")}>Load</button>
    </div>
  )
}

const renderWithProvider = () => {
  const providerProps = {
    enabled: true,
  } as React.ComponentProps<typeof AiChatStateProvider>

  render(
    <AiChatStateProvider {...providerProps}>
      <LoadThreadProbe />
    </AiChatStateProvider>
  )
}

describe("AiChatStateProvider loadThread", () => {
  beforeEach(() => {
    loadThreadMock.mockReset()
  })

  it("sets isLoadingThread to true synchronously when loadThread is invoked", async () => {
    const user = userEvent.setup()
    renderWithProvider()

    expect(screen.getByTestId("loading").textContent).toBe("idle")

    await user.click(screen.getByRole("button", { name: "Load" }))

    expect(screen.getByTestId("loading").textContent).toBe("loading")
    expect(loadThreadMock).toHaveBeenCalledWith("t1")
  })
})
