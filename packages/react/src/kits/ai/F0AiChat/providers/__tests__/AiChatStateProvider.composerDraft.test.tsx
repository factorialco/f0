import { act, renderHook } from "@testing-library/react"
import type { ReactNode } from "react"
import { describe, expect, it } from "vitest"

import { TestProviders } from "@/testing/test-utils"

import { AiChatStateProvider, useAiChat } from "../AiChatStateProvider"

const wrapper = ({ children }: { children: ReactNode }) => (
  <TestProviders>
    <AiChatStateProvider enabled>{children}</AiChatStateProvider>
  </TestProviders>
)

describe("AiChatStateProvider composer draft", () => {
  it("starts with no composer draft", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })
    expect(result.current.composerDraft).toBeNull()
  })

  it("setComposerDraft sets and clears the draft", () => {
    const { result } = renderHook(() => useAiChat(), { wrapper })

    act(() => {
      result.current.setComposerDraft("Build me a headcount report by team")
    })
    expect(result.current.composerDraft).toBe(
      "Build me a headcount report by team"
    )

    act(() => {
      result.current.setComposerDraft(null)
    })
    expect(result.current.composerDraft).toBeNull()
  })
})
