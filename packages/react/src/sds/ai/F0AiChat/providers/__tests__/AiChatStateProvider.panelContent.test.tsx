import { act, renderHook } from "@testing-library/react"
import type { ReactNode } from "react"
import { beforeEach, describe, expect, it } from "vitest"

import { TestProviders } from "@/testing/test-utils"

import { AiChatStateProvider, useAiChat } from "../AiChatStateProvider"

const wrapper = ({ children }: { children: ReactNode }) => (
  <TestProviders>
    <AiChatStateProvider enabled>{children}</AiChatStateProvider>
  </TestProviders>
)

describe("AiChatStateProvider panel content", () => {
  beforeEach(() => {
    // `open` is persisted to localStorage — reset it so each test starts closed.
    localStorage.clear()
  })

  it("starts with no panel content", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.panelContent).toBeNull()
  })

  it("setPanelContent mounts content and opens the panel", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.open).toBe(false)

    const content = { id: "alex", content: <div>Alex</div> }
    act(() => {
      result.current.setPanelContent(content)
    })

    expect(result.current.panelContent).toEqual(content)
    expect(result.current.open).toBe(true)
  })

  it("clearPanelContent removes the content but keeps the panel open", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    act(() => {
      result.current.setPanelContent({ id: "alex", content: <div>Alex</div> })
    })
    expect(result.current.open).toBe(true)

    act(() => {
      result.current.clearPanelContent()
    })

    expect(result.current.panelContent).toBeNull()
    expect(result.current.open).toBe(true)
  })

  it("defaults the panel side to right and lets the host flip it to left", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.panelSide).toBe("right")

    act(() => {
      result.current.setPanelSide("left")
    })

    expect(result.current.panelSide).toBe("left")
  })
})
