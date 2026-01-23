import { Message } from "@copilotkit/shared"
import { randomUUID } from "node:crypto"
import { describe, expect, it } from "vitest"

import { convertMessagesToTurns } from "../MessagesContainer"

describe("convertMessagesToTurn", () => {
  it("every user message creates new turn", () => {
    const onlyUserMessages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "2",
        role: "user",
        content: "How are you?",
      },
    ]
    expect(convertMessagesToTurns(onlyUserMessages)).toHaveLength(
      onlyUserMessages.length
    )
  })

  it("includes all assistant messages between two user messages to the first turn", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      {
        id: "2",
        role: "assistant",
        content: "I'm here to help",
      },
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(3)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "assistant"])
    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("groups thinking tool calls into an array", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createThinkingMessage(),
      createThinkingMessage(),
      createThinkingMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    // user message + assistant message + group of thoughts
    expect(turns[0]).toHaveLength(3)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "array"])
    expect(turns[0][2]).toHaveLength(3)

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("groups individual thinking tool calls", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createThinkingMessage(),
      { id: "5", role: "assistant", content: "What can I do for you?" },
      createThinkingMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)

    expect(turns[0]).toHaveLength(5)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "array", "assistant", "array"])

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("does not group other tool calls", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createToolCallMessage(),
      createToolCallMessage(),
      createToolCallMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(5)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual([
      "user",
      "assistant",
      "assistant",
      "assistant",
      "assistant",
    ])

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })

  it("hoists agentState message above thinking tool calls if agentState comes between thinking calls", () => {
    const messages: Message[] = [
      {
        id: "1",
        role: "user",
        content: "Hello!",
      },
      {
        id: "4",
        role: "assistant",
        content: "Hi there!",
      },
      createThinkingMessage(),
      {
        id: "6",
        agentName: "One",
        role: "assistant",
      },
      createThinkingMessage(),
      createThinkingMessage(),
      {
        id: "3",
        role: "user",
        content: "How are you?",
      },
    ]
    const turns = convertMessagesToTurns(messages)
    expect(turns[0]).toHaveLength(4)
    expect(turns[1]).toHaveLength(1)

    expect(
      turns[0].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user", "assistant", "assistant", "array"])
    expect(turns[0][3]).toHaveLength(3)

    expect(
      turns[1].map((m) => (Array.isArray(m) ? "array" : m.role))
    ).toStrictEqual(["user"])
  })
})

const createToolCallMessage = (
  name: string | undefined = "toolName"
): Message => {
  return {
    id: randomUUID(),
    role: "assistant",
    content: "",
    toolCalls: [
      {
        id: randomUUID(),
        type: "function",
        function: {
          name,
          arguments: "",
        },
      },
    ],
  }
}

const createThinkingMessage = (): Message =>
  createToolCallMessage("orchestratorThinking")
