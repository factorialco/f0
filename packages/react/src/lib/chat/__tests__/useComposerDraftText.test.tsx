import { describe, expect, it } from "vitest"
import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"
import { useComposerDraftText } from "../useComposerDraftText"

describe("useComposerDraftText", () => {
  it("parks text per conversation and clears only the accepted snapshot", () => {
    const { result, rerender } = renderHook(
      ({ scopeKey }) => useComposerDraftText(scopeKey),
      { initialProps: { scopeKey: "first" } }
    )
    act(() => result.current.setValue("sent"))
    rerender({ scopeKey: "second" })
    expect(result.current.value).toBe("")
    act(() => result.current.setValue("other"))
    act(() =>
      result.current.updateValueForScope("first", (value) =>
        value === "sent" ? "" : value
      )
    )
    expect(result.current.value).toBe("other")
    rerender({ scopeKey: "first" })
    expect(result.current.value).toBe("")
  })
})
