import { act, renderHook } from "@testing-library/react"
import type { ReactNode } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

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

  it("entering fullscreen opens the panel", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.open).toBe(false)

    act(() => {
      result.current.setVisualizationMode("fullscreen")
    })

    expect(result.current.open).toBe(true)
    expect(result.current.visualizationMode).toBe("fullscreen")
  })

  it("closing a fullscreen panel closes it fully (never reopens as the AI chat)", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })

    // Open the AI chat in fullscreen, then mount a conversation over it — the
    // hosted content inherits fullscreen.
    act(() => {
      result.current.setVisualizationMode("fullscreen")
    })
    act(() => {
      result.current.setPanelContent({ id: "conv", content: <div>Conv</div> })
    })
    expect(result.current.open).toBe(true)
    expect(result.current.visualizationMode).toBe("fullscreen")

    // Closing drops the content and shuts the panel. It must stay closed — not
    // bounce back open as the bare AI chat.
    act(() => {
      result.current.clearPanelContent()
      result.current.setOpen(false)
    })

    expect(result.current.open).toBe(false)
    expect(result.current.panelContent).toBeNull()
    expect(result.current.visualizationMode).toBe("sidepanel")
  })

  it("defaults the panel side to right and lets the host flip it to left", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.panelSide).toBe("right")

    act(() => {
      result.current.setPanelSide("left")
    })

    expect(result.current.panelSide).toBe("left")
  })

  it("panelContentSide follows `side` when not set", () => {
    const leftWrapper = ({ children }: { children: ReactNode }) => (
      <TestProviders>
        <AiChatStateProvider enabled side="left">
          {children}
        </AiChatStateProvider>
      </TestProviders>
    )
    const { result } = renderHook(() => useAiChat(), { wrapper: leftWrapper })
    expect(result.current.panelSide).toBe("left")
    expect(result.current.panelContentSide).toBe("left")
  })

  it("panelContentSide can dock hosted content opposite the chat", () => {
    const splitWrapper = ({ children }: { children: ReactNode }) => (
      <TestProviders>
        <AiChatStateProvider enabled panelContentSide="left">
          {children}
        </AiChatStateProvider>
      </TestProviders>
    )
    const { result } = renderHook(() => useAiChat(), { wrapper: splitWrapper })
    expect(result.current.panelSide).toBe("right")
    expect(result.current.panelContentSide).toBe("left")

    act(() => {
      result.current.setPanelContentSide("right")
    })
    expect(result.current.panelContentSide).toBe("right")
  })
})

describe("AiChatStateProvider panel content restore", () => {
  const ID_KEY = "ONE-ai-chat-panel-content-id"
  const OPEN_KEY = "ONE-ai-chat-open"

  beforeEach(() => {
    localStorage.clear()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  const seedReload = (id: string | null, open = true) => {
    localStorage.setItem(OPEN_KEY, JSON.stringify(open))
    localStorage.setItem(ID_KEY, JSON.stringify(id))
  }

  it("persists the hosted content id (and clears it with the content)", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })

    act(() => {
      result.current.setPanelContent({ id: "conv", content: <div>Conv</div> })
    })
    expect(JSON.parse(localStorage.getItem(ID_KEY) ?? "null")).toBe("conv")

    act(() => {
      result.current.clearPanelContent()
    })
    expect(JSON.parse(localStorage.getItem(ID_KEY) ?? "null")).toBeNull()
  })

  it("reopening with persisted content id marks it as pending restore", () => {
    seedReload("conv")
    const { result } = renderHook(() => useAiChat(), { wrapper })

    expect(result.current.open).toBe(true)
    expect(result.current.panelContent).toBeNull()
    expect(result.current.restoringPanelContentId).toBe("conv")
    // The pending id survives the sync effect — a reload mid-restore would
    // still know what to restore.
    expect(JSON.parse(localStorage.getItem(ID_KEY) ?? "null")).toBe("conv")
  })

  it("does not restore when the panel was closed", () => {
    seedReload("conv", false)
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.restoringPanelContentId).toBeNull()
  })

  it("setPanelContent completes the restore", () => {
    seedReload("conv")
    const { result } = renderHook(() => useAiChat(), { wrapper })

    act(() => {
      result.current.setPanelContent({ id: "conv", content: <div>Conv</div> })
    })

    expect(result.current.restoringPanelContentId).toBeNull()
    expect(result.current.panelContent?.id).toBe("conv")
  })

  it("cancelPanelContentRestore falls back to the AI chat", () => {
    seedReload("conv")
    const { result } = renderHook(() => useAiChat(), { wrapper })

    act(() => {
      result.current.cancelPanelContentRestore()
    })

    expect(result.current.restoringPanelContentId).toBeNull()
    expect(result.current.panelContent).toBeNull()
    // The stale id is wiped so the next reload opens the chat directly.
    expect(JSON.parse(localStorage.getItem(ID_KEY) ?? "null")).toBeNull()
  })

  it("closing the panel drops the pending restore", () => {
    seedReload("conv")
    const { result } = renderHook(() => useAiChat(), { wrapper })

    act(() => {
      result.current.setOpen(false)
    })

    expect(result.current.restoringPanelContentId).toBeNull()
  })

  it("times out to the AI chat when the host never resolves", () => {
    vi.useFakeTimers()
    seedReload("conv")
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.restoringPanelContentId).toBe("conv")

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(result.current.restoringPanelContentId).toBeNull()
  })
})
