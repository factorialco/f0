import { act, render } from "@testing-library/react"
import { type ReactNode, useEffect, useState } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

// Hold a reference to whatever subscriber the provider registers, so the
// test can drive synthetic AG-UI events at it on demand.
const subscriberRef: { current: Record<string, any> | null } = { current: null }
const unsubscribeMock = vi.fn()

const fakeAgent = {
  subscribe: vi.fn((sub: Record<string, any>) => {
    subscriberRef.current = sub
    return { unsubscribe: unsubscribeMock }
  }),
}

vi.mock("@copilotkitnext/react", () => ({
  useAgent: () => ({ agent: fakeAgent }),
  useCopilotChatConfiguration: () => ({ agentId: "test-agent" }),
}))

import {
  type OrderedPart,
  OrderedMessagePartsProvider,
  useOrderedMessageParts,
} from "../OrderedMessagePartsProvider"

const Probe = ({
  messageId,
  onParts,
}: {
  messageId: string
  onParts: (parts: OrderedPart[] | null) => void
}) => {
  const { getOrderedParts, version } = useOrderedMessageParts()
  const [, setLocal] = useState(0)
  useEffect(() => {
    setLocal(version)
    onParts(getOrderedParts(messageId))
  }, [version, getOrderedParts, messageId, onParts])
  return null
}

const renderWithProvider = (ui: ReactNode) =>
  render(<OrderedMessagePartsProvider>{ui}</OrderedMessagePartsProvider>)

describe("OrderedMessagePartsProvider", () => {
  beforeEach(() => {
    subscriberRef.current = null
    unsubscribeMock.mockClear()
    fakeAgent.subscribe.mockClear()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("subscribes to the agent on mount and unsubscribes on unmount", () => {
    const { unmount } = renderWithProvider(<></>)

    expect(fakeAgent.subscribe).toHaveBeenCalledTimes(1)
    expect(subscriberRef.current).not.toBeNull()
    expect(unsubscribeMock).not.toHaveBeenCalled()

    unmount()
    expect(unsubscribeMock).toHaveBeenCalledTimes(1)
  })

  it("captures interleaved text → tool → text in chronological order", () => {
    const seen: (OrderedPart[] | null)[] = []
    renderWithProvider(
      <Probe messageId="msg-1" onParts={(p) => seen.push(p)} />
    )

    const sub = subscriberRef.current!

    act(() => {
      // Open a text message and stream two deltas
      sub.onTextMessageStartEvent?.({ event: { messageId: "msg-1" } })
      sub.onTextMessageContentEvent?.({
        event: { messageId: "msg-1" },
        textMessageBuffer: "Looking up the modules…",
      })

      // A tool call lands mid-stream
      sub.onToolCallStartEvent?.({
        event: {
          toolCallId: "tc-1",
          toolCallName: "F0DemoCard",
          parentMessageId: "msg-1",
        },
      })
      sub.onToolCallEndEvent?.({
        event: { toolCallId: "tc-1" },
        toolCallName: "F0DemoCard",
        toolCallArgs: { module: "compensation" },
      })

      // More text after the tool call
      sub.onTextMessageStartEvent?.({ event: { messageId: "msg-1" } })
      sub.onTextMessageContentEvent?.({
        event: { messageId: "msg-1" },
        textMessageBuffer: "Here you go.",
      })
      sub.onTextMessageEndEvent?.({ event: { messageId: "msg-1" } })
    })

    const last = seen[seen.length - 1]
    expect(last).not.toBeNull()
    expect(last).toHaveLength(3)
    expect(last?.[0]).toMatchObject({
      kind: "text",
      text: "Looking up the modules…",
    })
    expect(last?.[1]).toMatchObject({
      kind: "tool-call",
      toolCallId: "tc-1",
      toolName: "F0DemoCard",
      complete: true,
    })
    expect((last?.[1] as { args: Record<string, unknown> }).args).toEqual({
      module: "compensation",
    })
    expect(last?.[2]).toMatchObject({ kind: "text", text: "Here you go." })
  })

  it("returns null for unknown message ids", () => {
    const seen: (OrderedPart[] | null)[] = []
    renderWithProvider(
      <Probe messageId="never-seen" onParts={(p) => seen.push(p)} />
    )
    expect(seen[0]).toBeNull()
  })

  it("updates open tool-call args while streaming partials", () => {
    const seen: (OrderedPart[] | null)[] = []
    renderWithProvider(
      <Probe messageId="msg-2" onParts={(p) => seen.push(p)} />
    )

    const sub = subscriberRef.current!

    act(() => {
      sub.onTextMessageStartEvent?.({ event: { messageId: "msg-2" } })
      sub.onToolCallStartEvent?.({
        event: {
          toolCallId: "tc-9",
          toolCallName: "downloadData",
          parentMessageId: "msg-2",
        },
      })
      sub.onToolCallArgsEvent?.({
        event: { toolCallId: "tc-9" },
        partialToolCallArgs: { filename: "emp" },
        toolCallName: "downloadData",
        toolCallBuffer: '{"filename":"emp"}',
      })
      sub.onToolCallArgsEvent?.({
        event: { toolCallId: "tc-9" },
        partialToolCallArgs: { filename: "employees" },
        toolCallName: "downloadData",
        toolCallBuffer: '{"filename":"employees"}',
      })
    })

    const last = seen[seen.length - 1]
    expect(last).toHaveLength(2)
    expect(last?.[1]).toMatchObject({
      kind: "tool-call",
      toolCallId: "tc-9",
      args: { filename: "employees" },
      complete: false,
    })
  })

  it("getOrderedParts returns a defensive copy that consumers cannot mutate back", () => {
    const seen: (OrderedPart[] | null)[] = []
    renderWithProvider(
      <Probe messageId="msg-3" onParts={(p) => seen.push(p)} />
    )

    const sub = subscriberRef.current!

    act(() => {
      sub.onTextMessageStartEvent?.({ event: { messageId: "msg-3" } })
      sub.onTextMessageContentEvent?.({
        event: { messageId: "msg-3" },
        textMessageBuffer: "hi",
      })
    })

    const snapshot = seen[seen.length - 1]
    expect(snapshot).toHaveLength(1)
    snapshot?.push({ kind: "text", text: "evil mutation" })

    // The next snapshot from another event must NOT include the evil push,
    // because the consumer received a copy.
    act(() => {
      sub.onTextMessageEndEvent?.({ event: { messageId: "msg-3" } })
    })
    const after = seen[seen.length - 1]
    expect(after).toHaveLength(1)
    expect(after?.[0]).toMatchObject({ kind: "text", text: "hi" })
  })
})
