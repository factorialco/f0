import { act, renderHook } from "@testing-library/react"
import type { ReactNode } from "react"
import { describe, expect, it } from "vitest"

import { TestProviders } from "@/testing/test-utils"

import {
  MockAiChatRuntimeProvider,
  useMockAiChatRuntime,
} from "../MockAiChatRuntime"

const wrapper = ({ children }: { children: ReactNode }) => (
  <TestProviders>
    <MockAiChatRuntimeProvider>{children}</MockAiChatRuntimeProvider>
  </TestProviders>
)

/**
 * Guided flows hide the composer during their scripted intro and rely on a timer
 * continuation to bring it back. `loadThread` (and `clear`) drop those timers,
 * so they have to restore the state themselves — otherwise the composer stays
 * hidden with no clarifying panel to replace it, which is what
 * `MockConnectedChatInput` renders as *no input at all* (its
 * `composerHidden && !clarifyingQuestion` branch returns null).
 */
describe("MockAiChatRuntime — abandoning a scripted beat", () => {
  it("loadThread un-hides the composer left hidden by a guided intro", () => {
    const { result } = renderHook(useMockAiChatRuntime, { wrapper })

    act(() => {
      result.current.setComposerHidden(true)
    })
    expect(result.current.composerHidden).toBe(true)

    act(() => {
      result.current.loadThread("thread-1", "Some earlier conversation")
    })

    // Without this reset the composer is unrecoverable: hidden, with no
    // clarifying panel standing in for it.
    expect(result.current.composerHidden).toBe(false)
  })

  it("loadThread closes an open clarifying panel", () => {
    const { result } = renderHook(useMockAiChatRuntime, { wrapper })

    act(() => {
      result.current.startClarifying({
        steps: [
          {
            question: "What kind of form do you want to create?",
            options: [{ id: "satisfaction", label: "Satisfaction" }],
          },
        ],
        onConfirm: () => {},
      })
    })
    expect(result.current.clarifyingQuestion).not.toBeNull()

    act(() => {
      result.current.loadThread("thread-1", "Some earlier conversation")
    })

    // A panel belonging to the abandoned flow must not hover over the
    // newly-loaded transcript.
    expect(result.current.clarifyingQuestion).toBeNull()
  })

  it("clear also restores both, so the two paths cannot drift apart", () => {
    const { result } = renderHook(useMockAiChatRuntime, { wrapper })

    act(() => {
      result.current.setComposerHidden(true)
      result.current.startClarifying({
        steps: [
          {
            question: "What kind of form do you want to create?",
            options: [{ id: "satisfaction", label: "Satisfaction" }],
          },
        ],
        onConfirm: () => {},
      })
    })

    act(() => {
      result.current.clear()
    })

    expect(result.current.composerHidden).toBe(false)
    expect(result.current.clarifyingQuestion).toBeNull()
  })
})
