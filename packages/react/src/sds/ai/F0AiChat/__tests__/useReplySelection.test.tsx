import { act, render } from "@testing-library/react"
import { useRef } from "react"
import { describe, expect, it } from "vitest"

import { useReplySelection } from "../components/messages/useReplySelection"

function Harness({
  onState,
}: {
  onState: (state: ReturnType<typeof useReplySelection>) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const state = useReplySelection({ containerRef: ref })
  onState(state)
  return (
    <div data-testid="container" ref={ref}>
      hello world
    </div>
  )
}

describe("useReplySelection", () => {
  it("starts with no anchor", () => {
    let captured: ReturnType<typeof useReplySelection> | null = null
    render(<Harness onState={(s) => (captured = s)} />)
    expect(captured).not.toBeNull()
    expect(captured!.anchor).toBeNull()
  })

  it("clear() is idempotent when already null", () => {
    let captured: ReturnType<typeof useReplySelection> | null = null
    render(<Harness onState={(s) => (captured = s)} />)
    act(() => {
      captured!.clear()
    })
    expect(captured!.anchor).toBeNull()
  })
})
