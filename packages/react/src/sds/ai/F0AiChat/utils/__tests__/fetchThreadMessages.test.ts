import { describe, expect, it, vi } from "vitest"

import { convertBackendMessage } from "../fetchThreadMessages"

describe("convertBackendMessage", () => {
  it("converts a simple user text message", () => {
    const result = convertBackendMessage({
      id: "msg_1",
      role: "user",
      content: "Hello!",
    })

    expect(result).toEqual([
      {
        id: "msg_1",
        role: "user",
        content: "Hello!",
      },
    ])
  })

  it("converts an assistant message with text-only parts", () => {
    const result = convertBackendMessage({
      id: "msg_2",
      role: "assistant",
      content: {
        content: "Here are your results.",
        parts: [{ type: "text", text: "Here are your results." }],
      },
    })

    expect(result).toEqual([
      {
        id: "msg_2_t0",
        role: "assistant",
        content: "Here are your results.",
      },
    ])
  })

  it("splits tool invocations into separate messages preserving order", () => {
    const result = convertBackendMessage({
      id: "msg_3",
      role: "assistant",
      content: {
        content: "Let me fetch that data.",
        parts: [
          { type: "text", text: "Let me fetch that data." },
          {
            type: "tool-invocation",
            toolInvocation: {
              toolCallId: "tc_1",
              toolName: "downloadData",
              args: { query: "employees" },
              state: "result",
              result: { rows: [] },
            },
          },
          {
            type: "tool-invocation",
            toolInvocation: {
              toolCallId: "tc_2",
              toolName: "displayDashboard",
              args: { title: "Overview" },
              state: "result",
            },
          },
        ],
      },
    })

    expect(result).toHaveLength(3)

    // Text message first
    expect(result[0]).toEqual({
      id: "msg_3_t0",
      role: "assistant",
      content: "Let me fetch that data.",
    })

    // downloadData tool call
    expect(result[1]).toMatchObject({
      id: "msg_3_tc1",
      role: "assistant",
      content: "",
      toolCalls: [
        {
          id: "tc_1",
          type: "function",
          function: {
            name: "downloadData",
            arguments: JSON.stringify({ query: "employees" }),
          },
        },
      ],
    })

    // displayDashboard tool call
    expect(result[2]).toMatchObject({
      id: "msg_3_tc2",
      role: "assistant",
      content: "",
      toolCalls: [
        {
          id: "tc_2",
          type: "function",
          function: {
            name: "displayDashboard",
            arguments: JSON.stringify({ title: "Overview" }),
          },
        },
      ],
    })
  })

  it("preserves pre-text tool invocations before text", () => {
    const result = convertBackendMessage({
      id: "msg_4",
      role: "assistant",
      content: {
        content: "Summary text",
        parts: [
          {
            type: "tool-invocation",
            toolInvocation: {
              toolCallId: "tc_pre",
              toolName: "orchestratorThinking",
              args: { message: "Planning..." },
              state: "result",
            },
          },
          { type: "text", text: "Summary text" },
        ],
      },
    })

    expect(result).toHaveLength(2)
    expect(result[0].toolCalls![0].function.name).toBe("orchestratorThinking")
    expect(result[1].content).toBe("Summary text")
  })

  it("falls back when content is a plain string", () => {
    const result = convertBackendMessage({
      id: "msg_5",
      role: "assistant",
      content: "Direct string content",
    })

    expect(result).toEqual([
      {
        id: "msg_5",
        role: "assistant",
        content: "Direct string content",
      },
    ])
  })

  it("uses content.content when no parts are present", () => {
    const result = convertBackendMessage({
      id: "msg_6",
      role: "assistant",
      content: {
        content: "Just plain text, no parts",
      },
    })

    expect(result).toEqual([
      {
        id: "msg_6",
        role: "assistant",
        content: "Just plain text, no parts",
      },
    ])
  })

  it("falls back to empty string when content object has no content field and no parts", () => {
    const result = convertBackendMessage({
      id: "msg_7",
      role: "assistant",
      content: {},
    })

    expect(result).toEqual([
      {
        id: "msg_7",
        role: "assistant",
        content: "",
      },
    ])
  })

  it("attaches generativeUI when actions are provided", () => {
    const mockRender = vi.fn(() => "rendered")

    const result = convertBackendMessage(
      {
        id: "msg_8",
        role: "assistant",
        content: {
          content: "",
          parts: [
            {
              type: "tool-invocation",
              toolInvocation: {
                toolCallId: "tc_dl",
                toolName: "downloadData",
                args: { query: "test" },
                state: "result",
                result: { rows: [1, 2] },
              },
            },
          ],
        },
      },
      { downloadData: { render: mockRender } }
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).generativeUI).toBeDefined()

    // Call generativeUI and verify it invokes the action render
    ;(result[0] as any).generativeUI()
    expect(mockRender).toHaveBeenCalledWith(
      expect.objectContaining({
        status: "complete",
        args: { query: "test" },
        result: { rows: [1, 2] },
      })
    )
  })

  it("skips empty text parts", () => {
    const result = convertBackendMessage({
      id: "msg_9",
      role: "assistant",
      content: {
        content: "",
        parts: [
          { type: "text", text: "" },
          {
            type: "tool-invocation",
            toolInvocation: {
              toolCallId: "tc_1",
              toolName: "downloadData",
              args: {},
              state: "result",
            },
          },
        ],
      },
    })

    // Empty text part is skipped, only the tool call message remains
    expect(result).toHaveLength(1)
    expect(result[0].toolCalls).toBeDefined()
  })

  it("converts user file parts into structured user content", () => {
    const result = convertBackendMessage({
      id: "msg_file_user",
      role: "user",
      content: {
        parts: [
          {
            type: "binary",
            url: "https://files.example.com/course.pdf",
            filename: "course.pdf",
            mimeType: "application/pdf",
          },
          { type: "text", text: "Please summarize this" },
        ],
      },
    } as any)

    expect(result).toHaveLength(1)
    expect(result[0]).toEqual({
      id: "msg_file_user",
      role: "user",
      content: [
        {
          type: "binary",
          url: "https://files.example.com/course.pdf",
          filename: "course.pdf",
          mimeType: "application/pdf",
        },
        { type: "text", text: "Please summarize this" },
      ],
    })
  })

  it("creates user message when thread contains only file parts", () => {
    const result = convertBackendMessage({
      id: "msg_file_only",
      role: "user",
      content: {
        parts: [
          {
            type: "binary",
            url: "https://files.example.com/offer.pdf",
            filename: "offer.pdf",
            mimeType: "application/pdf",
          },
        ],
      },
    } as any)

    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({
      id: "msg_file_only",
      role: "user",
    })
    expect(result[0].content).toEqual([
      {
        type: "binary",
        url: "https://files.example.com/offer.pdf",
        filename: "offer.pdf",
        mimeType: "application/pdf",
      },
    ])
  })
})
