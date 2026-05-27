import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { type F0Message } from "../../types"

import { pickRandomResponse, pickRandomThinkingSteps } from "./mockPhrases"

/**
 * Storybook-only runtime adapter. Holds messages in local state and
 * simulates an agent that:
 *   1. accepts a user message
 *   2. emits a "thinking" tool-call message with a few preamble steps
 *   3. streams a random response character-by-character
 *   4. marks the turn complete
 *
 * Lives next to the stories so f0 never has to depend on CopilotKit at
 * runtime. Factorial's production adapter mirrors this shape but reads
 * messages from CopilotKit instead.
 */
export type MockAiChatRuntime = {
  messages: F0Message[]
  inProgress: boolean
  sendMessage: (text: string) => void
  appendMessages: (
    messages: { role: "user" | "assistant"; content: string }[],
    options?: { persist?: boolean }
  ) => void
  clear: () => void
}

const MockAiChatRuntimeContext = createContext<MockAiChatRuntime | null>(null)

let mockId = 0
const nextId = () => `mock_${++mockId}_${Date.now()}`

const CHAR_INTERVAL_MS = 18
const THINKING_DELAY_MS = 450
const THINKING_STEP_MS = 380

export type MockAiChatRuntimeProviderProps = {
  children: ReactNode
  /**
   * Optional pre-seeded message history (e.g. for stories that want to
   * demonstrate reply-to-selection on an already-existing conversation).
   */
  seedMessages?: F0Message[]
}

export const MockAiChatRuntimeProvider = ({
  children,
  seedMessages,
}: MockAiChatRuntimeProviderProps) => {
  const [messages, setMessages] = useState<F0Message[]>(seedMessages ?? [])
  const [inProgress, setInProgress] = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([])

  // Allow late-arriving seed messages (story decorators that prefill async).
  useEffect(() => {
    if (seedMessages && seedMessages.length > 0) {
      setMessages(seedMessages)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t))
    timersRef.current = []
    intervalsRef.current.forEach((i) => clearInterval(i))
    intervalsRef.current = []
  }, [])

  useEffect(() => {
    return () => clearTimers()
  }, [clearTimers])

  const streamAssistantResponse = useCallback(() => {
    const thinkingSteps = pickRandomThinkingSteps(3)
    const response = pickRandomResponse()
    const thinkingId = nextId()
    const assistantId = nextId()

    setInProgress(true)

    // Append the thinking message + first step
    const startThinking = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: thinkingId,
          role: "assistant",
          content: "",
          toolCalls: [
            {
              id: `${thinkingId}_tc0`,
              type: "function",
              function: {
                name: "orchestratorThinking",
                arguments: JSON.stringify({ message: thinkingSteps[0] }),
              },
            },
          ],
        },
      ])

      // Add subsequent thinking steps every THINKING_STEP_MS
      thinkingSteps.slice(1).forEach((step, i) => {
        const t = setTimeout(
          () => {
            setMessages((prev) => [
              ...prev,
              {
                id: nextId(),
                role: "assistant",
                content: "",
                toolCalls: [
                  {
                    id: `${assistantId}_tc${i + 1}`,
                    type: "function",
                    function: {
                      name: "orchestratorThinking",
                      arguments: JSON.stringify({ message: step }),
                    },
                  },
                ],
              },
            ])
          },
          THINKING_STEP_MS * (i + 1)
        )
        timersRef.current.push(t)
      })

      // Once thinking is done, open the assistant text message and stream chars.
      const totalThinkingMs = THINKING_STEP_MS * thinkingSteps.length
      const startText = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: assistantId, role: "assistant", content: "" },
        ])

        let charIndex = 0
        const streamInterval = setInterval(() => {
          charIndex += 1
          const partial = response.slice(0, charIndex)
          setMessages((prev) => {
            const idx = prev.findIndex((m) => m.id === assistantId)
            if (idx === -1) return prev
            const next = prev.slice()
            next[idx] = { ...next[idx], content: partial }
            return next
          })

          if (charIndex >= response.length) {
            clearInterval(streamInterval)
            setInProgress(false)
          }
        }, CHAR_INTERVAL_MS)
        intervalsRef.current.push(streamInterval)
      }, totalThinkingMs)
      timersRef.current.push(startText)
    }, THINKING_DELAY_MS)

    timersRef.current.push(startThinking)
  }, [])

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", content: trimmed },
      ])
      streamAssistantResponse()
    },
    [streamAssistantResponse]
  )

  const appendMessages = useCallback<MockAiChatRuntime["appendMessages"]>(
    (msgs) => {
      setMessages((prev) => [
        ...prev,
        ...msgs.map((m) => ({
          id: nextId(),
          role: m.role,
          content: m.content,
        })),
      ])
    },
    []
  )

  const clear = useCallback(() => {
    clearTimers()
    setMessages([])
    setInProgress(false)
  }, [clearTimers])

  return (
    <MockAiChatRuntimeContext.Provider
      value={{ messages, inProgress, sendMessage, appendMessages, clear }}
    >
      {children}
    </MockAiChatRuntimeContext.Provider>
  )
}

export const useMockAiChatRuntime = (): MockAiChatRuntime => {
  const ctx = useContext(MockAiChatRuntimeContext)
  if (!ctx) {
    throw new Error(
      "useMockAiChatRuntime must be used inside <MockAiChatRuntimeProvider>"
    )
  }
  return ctx
}
