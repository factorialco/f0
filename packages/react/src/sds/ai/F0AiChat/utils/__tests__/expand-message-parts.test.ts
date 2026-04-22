import { type Message } from "@copilotkit/shared"
import { describe, expect, it } from "vitest"

import { type OrderedPart } from "../../providers/OrderedMessagePartsProvider"
import {
  expandFromOrderedParts,
  legacyExpansion,
} from "../expand-message-parts"

const baseMsg = (id: string): Message => ({
  id,
  role: "assistant" as const,
  content: "",
})

describe("expandFromOrderedParts", () => {
  it("returns one text sub-message per text part", () => {
    const parts: OrderedPart[] = [
      { kind: "text", text: "First chunk" },
      { kind: "text", text: "Second chunk" },
    ]

    const expanded = expandFromOrderedParts(baseMsg("msg-1"), parts)

    expect(expanded).toHaveLength(2)
    expect(expanded[0]).toMatchObject({
      id: "msg-1_p0_text",
      role: "assistant",
      content: "First chunk",
    })
    expect(expanded[1]).toMatchObject({
      id: "msg-1_p1_text",
      role: "assistant",
      content: "Second chunk",
    })
  })

  it("returns one tool-call sub-message per tool-call part", () => {
    const parts: OrderedPart[] = [
      {
        kind: "tool-call",
        toolCallId: "tc-1",
        toolName: "downloadData",
        args: { filename: "employees" },
        complete: true,
      },
    ]

    const expanded = expandFromOrderedParts(baseMsg("msg-1"), parts)

    expect(expanded).toHaveLength(1)
    const toolMsg = expanded[0] as Message & {
      toolCalls?: {
        id: string
        type: string
        function: { name: string; arguments: string }
      }[]
    }
    expect(toolMsg.id).toBe("msg-1_p0_tc")
    expect(toolMsg.content).toBe("")
    expect(toolMsg.toolCalls).toHaveLength(1)
    expect(toolMsg.toolCalls?.[0]).toMatchObject({
      id: "tc-1",
      type: "function",
      function: { name: "downloadData" },
    })
    // args are JSON-stringified for the wire shape AssistantMessage consumes
    expect(
      JSON.parse(toolMsg.toolCalls?.[0]?.function.arguments ?? "{}")
    ).toEqual({
      filename: "employees",
    })
  })

  it("preserves chronological order with text → tool → text → tool", () => {
    // The whole point of this util: an interleaved turn must produce
    // sub-messages in the exact same chronological order, never reordered.
    const parts: OrderedPart[] = [
      { kind: "text", text: "Looking up the modules…" },
      {
        kind: "tool-call",
        toolCallId: "tc-1",
        toolName: "F0DemoCard",
        args: { module: "compensation" },
        complete: true,
      },
      { kind: "text", text: "Here are a couple of options:" },
      {
        kind: "tool-call",
        toolCallId: "tc-2",
        toolName: "F0BookAMeetingCard",
        args: { seats: 80 },
        complete: true,
      },
    ]

    const expanded = expandFromOrderedParts(baseMsg("msg-1"), parts)

    expect(expanded).toHaveLength(4)
    expect(expanded[0]?.content).toBe("Looking up the modules…")
    expect(
      (expanded[1] as { toolCalls?: { function: { name: string } }[] })
        .toolCalls?.[0]?.function.name
    ).toBe("F0DemoCard")
    expect(expanded[2]?.content).toBe("Here are a couple of options:")
    expect(
      (expanded[3] as { toolCalls?: { function: { name: string } }[] })
        .toolCalls?.[0]?.function.name
    ).toBe("F0BookAMeetingCard")
  })

  it("handles tool-call parts with empty args via {} default", () => {
    const parts: OrderedPart[] = [
      {
        kind: "tool-call",
        toolCallId: "tc-1",
        toolName: "messageSources",
        args: {},
        complete: false,
      },
    ]

    const expanded = expandFromOrderedParts(baseMsg("msg-x"), parts)
    const args = (
      expanded[0] as {
        toolCalls?: { function: { arguments: string } }[]
      }
    ).toolCalls?.[0]?.function.arguments

    expect(args).toBe("{}")
  })

  it("returns an empty array when given no parts", () => {
    expect(expandFromOrderedParts(baseMsg("msg-empty"), [])).toEqual([])
  })
})

describe("legacyExpansion", () => {
  it("passes plain text messages through unchanged", () => {
    const msg: Message = {
      id: "msg-text",
      role: "assistant",
      content: "Just text, no tools.",
    }
    expect(legacyExpansion(msg)).toEqual([msg])
  })

  it("passes a single-tool-call no-text message through unchanged", () => {
    const msg = {
      id: "msg-single-tc",
      role: "assistant",
      content: "",
      toolCalls: [
        {
          id: "tc-1",
          type: "function" as const,
          function: { name: "downloadData", arguments: "{}" },
        },
      ],
    } as unknown as Message

    expect(legacyExpansion(msg)).toEqual([msg])
  })

  it("expands multiple tool calls + text into [tcN, …, text]", () => {
    const msg = {
      id: "msg-multi",
      role: "assistant",
      content: "Done.",
      toolCalls: [
        {
          id: "tc-1",
          type: "function" as const,
          function: { name: "orchestratorThinking", arguments: "{}" },
        },
        {
          id: "tc-2",
          type: "function" as const,
          function: { name: "downloadData", arguments: "{}" },
        },
      ],
    } as unknown as Message

    const expanded = legacyExpansion(msg)

    expect(expanded.map((m) => m.id)).toEqual([
      "msg-multi_tc0",
      "msg-multi_tc1",
      "msg-multi_text",
    ])
    expect(expanded[2]?.content).toBe("Done.")
  })

  it("expands multiple tool calls without trailing text", () => {
    const msg = {
      id: "msg-tools-only",
      role: "assistant",
      content: "",
      toolCalls: [
        {
          id: "tc-1",
          type: "function" as const,
          function: { name: "a", arguments: "{}" },
        },
        {
          id: "tc-2",
          type: "function" as const,
          function: { name: "b", arguments: "{}" },
        },
      ],
    } as unknown as Message

    const expanded = legacyExpansion(msg)
    expect(expanded.map((m) => m.id)).toEqual([
      "msg-tools-only_tc0",
      "msg-tools-only_tc1",
    ])
  })
})
