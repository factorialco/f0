import { act, renderHook } from "@testing-library/react"
import type { ReactNode } from "react"
import { beforeEach, describe, expect, it } from "vitest"

import { TestProviders } from "@/testing/test-utils"

import { AiChatStateProvider, useAiChat } from "../AiChatStateProvider"
import { useAiChatToggle } from "../useAiChatToggle"

const wrapper = ({ children }: { children: ReactNode }) => (
  <TestProviders>
    <AiChatStateProvider enabled>{children}</AiChatStateProvider>
  </TestProviders>
)

// Drives the full provider while reading the narrow toggle the way F0OneSwitch
// does, so we can assert how the toggle reacts to custom panel content.
const useToggleAndChat = () => ({
  toggle: useAiChatToggle(),
  chat: useAiChat(),
})

describe("useAiChatToggle", () => {
  beforeEach(() => {
    // `open` is persisted to localStorage — reset between tests.
    localStorage.clear()
  })

  it("reads unchecked while another view occupies the panel, even if open", () => {
    const { result } = renderHook(useToggleAndChat, { wrapper })

    act(() => {
      result.current.chat.setPanelContent({
        id: "alex",
        content: <div>Alex</div>,
      })
    })

    // The panel is open (setPanelContent opened it) but the chat is not the
    // active content, so the toggle reads off.
    expect(result.current.chat.open).toBe(true)
    expect(result.current.toggle.open).toBe(false)
  })

  it("turning the toggle on swaps the custom content for the chat", () => {
    const { result } = renderHook(useToggleAndChat, { wrapper })
    act(() => {
      result.current.chat.setPanelContent({
        id: "alex",
        content: <div>Alex</div>,
      })
    })

    act(() => {
      result.current.toggle.setOpen(true)
    })

    expect(result.current.chat.panelContent).toBeNull()
    expect(result.current.chat.open).toBe(true)
    expect(result.current.toggle.open).toBe(true)
  })

  it("turning the toggle on opens the panel when it was closed", () => {
    const { result } = renderHook(useToggleAndChat, { wrapper })
    expect(result.current.chat.open).toBe(false)

    act(() => {
      result.current.toggle.setOpen(true)
    })

    expect(result.current.chat.open).toBe(true)
    expect(result.current.toggle.open).toBe(true)
  })

  it("turning the toggle off closes the panel", () => {
    const { result } = renderHook(useToggleAndChat, { wrapper })
    act(() => {
      result.current.toggle.setOpen(true)
    })
    expect(result.current.toggle.open).toBe(true)

    act(() => {
      result.current.toggle.setOpen(false)
    })

    expect(result.current.chat.open).toBe(false)
    expect(result.current.toggle.open).toBe(false)
  })

  it("reads unchecked during a pending restore and turning it on cancels it", () => {
    // A reload with a conversation showing: open persisted + its id pending.
    localStorage.setItem("ONE-ai-chat-open", "true")
    localStorage.setItem("ONE-ai-chat-panel-content-id", '"conv"')
    const { result } = renderHook(useToggleAndChat, { wrapper })

    expect(result.current.chat.restoringPanelContentId).toBe("conv")
    expect(result.current.toggle.open).toBe(false)

    act(() => {
      result.current.toggle.setOpen(true)
    })

    expect(result.current.chat.restoringPanelContentId).toBeNull()
    expect(result.current.toggle.open).toBe(true)
  })
})
