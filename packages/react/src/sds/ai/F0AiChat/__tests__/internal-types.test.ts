import { type F0Message } from "../types"
import { describe, expect, it } from "vitest"

import {
  filterCoagentPlaceholders,
  filterNonRenderableMessages,
  isAgentStateMessage,
  isCoagentPlaceholder,
} from "../internal-types"

/* ---------- helpers to build minimal F0Message objects ---------- */

function userMsg(id: string, content: string): F0Message {
  return { id, role: "user", content } as F0Message
}

function assistantMsg(id: string, content: string): F0Message {
  return { id, role: "assistant", content } as F0Message
}

function toolResultMsg(id: string): F0Message {
  return { id, role: "tool", content: '{"ok":true}' } as F0Message
}

function coagentPlaceholder(id: string): F0Message {
  return {
    id,
    role: "assistant",
    content: "",
    name: "coagent-state-render",
  } as unknown as F0Message
}

function agentStateMsg(id: string, agentName: string): F0Message {
  return {
    id,
    role: "assistant",
    content: "",
    agentName,
  } as F0Message
}

/* ---------- isAgentStateMessage ---------- */

describe("isAgentStateMessage", () => {
  it("returns true for assistant message with agentName", () => {
    expect(isAgentStateMessage(agentStateMsg("1", "my-agent"))).toBe(true)
  })

  it("returns false for regular assistant message", () => {
    expect(isAgentStateMessage(assistantMsg("2", "Hello"))).toBe(false)
  })

  it("returns false for user message", () => {
    expect(isAgentStateMessage(userMsg("3", "Hi"))).toBe(false)
  })
})

/* ---------- isCoagentPlaceholder ---------- */

describe("isCoagentPlaceholder", () => {
  it("returns true for coagent-state-render message", () => {
    expect(isCoagentPlaceholder(coagentPlaceholder("1"))).toBe(true)
  })

  it("returns false for regular assistant message", () => {
    expect(isCoagentPlaceholder(assistantMsg("2", "response"))).toBe(false)
  })

  it("returns false for tool result message", () => {
    expect(isCoagentPlaceholder(toolResultMsg("3"))).toBe(false)
  })
})

/* ---------- filterCoagentPlaceholders ---------- */

describe("filterCoagentPlaceholders", () => {
  it("removes coagent placeholders and keeps other messages", () => {
    const messages = [
      userMsg("1", "Hi"),
      coagentPlaceholder("2"),
      assistantMsg("3", "Hello"),
      coagentPlaceholder("4"),
    ]

    const result = filterCoagentPlaceholders(messages)

    expect(result).toHaveLength(2)
    expect(result.map((m) => m.id)).toEqual(["1", "3"])
  })

  it("returns all messages when no placeholders present", () => {
    const messages = [userMsg("1", "Hi"), assistantMsg("2", "Hello")]
    expect(filterCoagentPlaceholders(messages)).toHaveLength(2)
  })
})

/* ---------- filterNonRenderableMessages ---------- */

describe("filterNonRenderableMessages", () => {
  it("removes tool result messages (role: 'tool')", () => {
    const messages = [
      userMsg("1", "Do something"),
      toolResultMsg("2"),
      assistantMsg("3", "Done"),
    ]

    const result = filterNonRenderableMessages(messages)

    expect(result).toHaveLength(2)
    expect(result.map((m) => m.id)).toEqual(["1", "3"])
  })

  it("removes coagent-state-render placeholders", () => {
    const messages = [
      userMsg("1", "Hi"),
      coagentPlaceholder("2"),
      assistantMsg("3", "Hello"),
    ]

    const result = filterNonRenderableMessages(messages)

    expect(result).toHaveLength(2)
    expect(result.map((m) => m.id)).toEqual(["1", "3"])
  })

  it("removes both tool results and coagent placeholders in same array", () => {
    const messages = [
      userMsg("1", "Start"),
      toolResultMsg("2"),
      coagentPlaceholder("3"),
      assistantMsg("4", "Working"),
      toolResultMsg("5"),
      coagentPlaceholder("6"),
      assistantMsg("7", "Done"),
    ]

    const result = filterNonRenderableMessages(messages)

    expect(result).toHaveLength(3)
    expect(result.map((m) => m.id)).toEqual(["1", "4", "7"])
  })

  it("preserves regular user and assistant messages", () => {
    const messages = [
      userMsg("1", "Question"),
      assistantMsg("2", "Answer"),
      userMsg("3", "Follow-up"),
      assistantMsg("4", "More info"),
    ]

    const result = filterNonRenderableMessages(messages)

    expect(result).toHaveLength(4)
    expect(result).toEqual(messages)
  })

  it("returns empty array when all messages are non-renderable", () => {
    const messages = [
      toolResultMsg("1"),
      coagentPlaceholder("2"),
      toolResultMsg("3"),
    ]

    expect(filterNonRenderableMessages(messages)).toEqual([])
  })

  it("returns empty array for empty input", () => {
    expect(filterNonRenderableMessages([])).toEqual([])
  })
})
