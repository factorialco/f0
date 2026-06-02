import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { type ChatThread } from "../../../F0AiChatHistory"

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
 * Also exposes a fake chat-history store (threads + per-thread message
 * snapshots) so stories can demo the history dialog without a backend.
 *
 * Lives next to the stories so f0 never has to depend on CopilotKit at
 * runtime. Factorial's production adapter mirrors this shape but reads
 * messages from CopilotKit instead.
 */
export type MockAiChatRuntime = {
  messages: F0Message[]
  inProgress: boolean
  sendMessage: (text: string, options?: { replyQuote?: string }) => void
  /** Sends a user message and shows thinking steps, but emits no text response. */
  sendMessageWithThinkingOnly: (text: string) => void
  appendMessages: (
    messages: { role: "user" | "assistant"; content: string }[],
    options?: { persist?: boolean }
  ) => void
  appendRawMessages: (
    messages: (Omit<F0Message, "id"> & { id?: string })[]
  ) => void
  /** Swaps the scripted assistant responses and restarts from the first turn. */
  setScript: (script: string[]) => void
  clear: () => void

  // ── Chat history ────────────────────────────────────────────────
  currentThreadTitle: string | null
  isLoadingThread: boolean
  /** Returns the in-memory list of threads (excluding any deleted). */
  fetchThreads: () => Promise<ChatThread[]>
  /** Removes a thread from the in-memory list. */
  deleteThread: (id: string) => Promise<void>
  /** Loads a thread's snapshot into `messages` and sets the title. */
  loadThread: (id: string, title: string) => void
}

const MockAiChatRuntimeContext = createContext<MockAiChatRuntime | null>(null)

let mockId = 0
const nextId = () => `mock_${++mockId}_${Date.now()}`

const CHAR_INTERVAL_MS = 18
const THINKING_DELAY_MS = 450
const THINKING_STEP_MS = 380

const FETCH_THREADS_DELAY_MS = 350
// Long enough that the `MessagesSkeleton` rendered by F0AiMessagesContainer
// is actually visible in stories before the thread snapshot lands.
const LOAD_THREAD_DELAY_MS = 1200

const buildAssistantMessage = (content: string): F0Message => ({
  id: nextId(),
  role: "assistant",
  content,
})
const buildUserMessage = (content: string): F0Message => ({
  id: nextId(),
  role: "user",
  content,
})

const nowIso = () => new Date().toISOString()

/** Helper to fabricate `createdAt`/`updatedAt` relative to today. */
const isoDaysAgo = (days: number): string => {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString()
}

/**
 * Default fake threads. Spread across the date buckets f0's history
 * dialog renders (today, yesterday, this month, older) to exercise the
 * group rendering in stories.
 */
export const DEFAULT_MOCK_THREADS: ChatThread[] = [
  {
    id: "thread_today_1",
    title: "Pending time-off requests summary",
    createdAt: isoDaysAgo(0),
    updatedAt: isoDaysAgo(0),
  },
  {
    id: "thread_today_2",
    title: "Engineers based in Barcelona",
    createdAt: isoDaysAgo(0),
    updatedAt: isoDaysAgo(0),
  },
  {
    id: "thread_yesterday_1",
    title: "Draft offboarding email template",
    createdAt: isoDaysAgo(1),
    updatedAt: isoDaysAgo(1),
  },
  {
    id: "thread_this_month_1",
    title: "Headcount evolution by department",
    createdAt: isoDaysAgo(5),
    updatedAt: isoDaysAgo(5),
  },
  {
    id: "thread_this_month_2",
    title: "Absence trends across teams",
    createdAt: isoDaysAgo(11),
    updatedAt: isoDaysAgo(11),
  },
  {
    id: "thread_older_1",
    title: "Q1 hiring plan review",
    createdAt: isoDaysAgo(45),
    updatedAt: isoDaysAgo(45),
  },
  {
    id: "thread_older_2",
    title: "Onboarding checklist for new hires",
    createdAt: isoDaysAgo(92),
    updatedAt: isoDaysAgo(92),
  },
]

/**
 * Canned message snapshots for the default threads. `loadThread` reads
 * from this map; unknown ids fall back to a one-line transcript so the
 * dialog always renders SOMETHING when a thread is picked.
 */
const buildDefaultSnapshots = (): Record<string, F0Message[]> => ({
  thread_today_1: [
    buildUserMessage("Give me a summary of my pending time-off requests"),
    buildAssistantMessage(
      [
        "You have **3 pending requests** waiting on approval:",
        "",
        "1. **Anitra Schaden** — Vacation, April 15 → April 22 (5 working days)",
        "2. **Jordan Kunze** — Personal, April 18 → April 19 (2 days)",
        "3. **Fae Fritsch** — Vacation, April 22 → April 26 (5 working days)",
        "",
        "Want me to open the approval flow for one of them?",
      ].join("\n")
    ),
  ],
  thread_today_2: [
    buildUserMessage("Find all engineers based in Barcelona"),
    buildAssistantMessage(
      [
        "I found **12 engineers** with Barcelona as their office location.",
        "Top 5 by tenure:",
        "",
        "- Arnulfo Maggio — CTO",
        "- Phebe Jacobson — Staff Engineer",
        "- Hellen the HR — Engineering Manager",
        "- Florencio Little — Senior Backend",
        "- Bernarda Wilkinson — Senior Frontend",
        "",
        "Open the full list in a dashboard?",
      ].join("\n")
    ),
  ],
  thread_yesterday_1: [
    buildUserMessage("Compose an offboarding email template"),
    buildAssistantMessage(
      [
        "Here's a draft you can adapt:",
        "",
        "> Hi {{name}},",
        ">",
        "> Thanks for everything you've contributed during your time at Factorial. Below are the next steps for your final week:",
        "> 1. Return of equipment (laptop, badge, peripherals).",
        "> 2. Sign the HR exit form (link below).",
        "> 3. Hand-over notes shared with your manager.",
        "",
        "Want me to localise it or shorten it?",
      ].join("\n")
    ),
  ],
  thread_this_month_1: [
    buildUserMessage(
      "Plot headcount evolution by department over the last twelve months"
    ),
    buildAssistantMessage(
      "Engineering grew 12%, Sales grew 8%, Support shrank 4%. Want the per-team breakdown?"
    ),
  ],
  thread_this_month_2: [
    buildUserMessage("Compare absence rates across teams"),
    buildAssistantMessage(
      "Avg 3.1 days per employee in the last 6 months. Top outliers: Support (4.8d), Engineering Mobile (4.2d)."
    ),
  ],
  thread_older_1: [
    buildUserMessage("Review the Q1 hiring plan"),
    buildAssistantMessage(
      "Q1 plan covered 18 hires across 4 squads. 14 closed on time, 3 slipped to Q2, 1 was paused. Want the slip reasons?"
    ),
  ],
  thread_older_2: [
    buildUserMessage("Outline an onboarding checklist for new hires"),
    buildAssistantMessage(
      [
        "Week 1 checklist:",
        "1. IT setup — laptop, accounts, MFA.",
        "2. Buddy assignment + 1:1 with manager.",
        "3. Read team handbook + product overview.",
        "4. Shadow a customer call by day 5.",
      ].join("\n")
    ),
  ],
})

export type MockAiChatRuntimeProviderProps = {
  children: ReactNode
  /**
   * Optional pre-seeded message history (e.g. for stories that want to
   * demonstrate reply-to-selection on an already-existing conversation).
   */
  seedMessages?: F0Message[]
  /**
   * Optional override of the threads list shown in the history dialog.
   * Defaults to `DEFAULT_MOCK_THREADS`. Pass `[]` to demo the empty
   * state.
   */
  seedThreads?: ChatThread[]
  /**
   * Optional scripted assistant responses used in order, one per text reply.
   * Falls back to a random phrase when the script is exhausted or absent.
   */
  script?: string[]
}

export const MockAiChatRuntimeProvider = ({
  children,
  seedMessages,
  seedThreads,
  script,
}: MockAiChatRuntimeProviderProps) => {
  const [messages, setMessages] = useState<F0Message[]>(seedMessages ?? [])
  const [inProgress, setInProgress] = useState(false)
  const [threads, setThreads] = useState<ChatThread[]>(
    seedThreads ?? DEFAULT_MOCK_THREADS
  )
  const [currentThreadTitle, setCurrentThreadTitle] = useState<string | null>(
    null
  )
  const [isLoadingThread, setIsLoadingThread] = useState(false)
  const snapshotsRef = useRef<Record<string, F0Message[]>>(
    buildDefaultSnapshots()
  )
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([])
  const scriptRef = useRef<string[]>(script ?? [])
  const scriptTurnRef = useRef(0)

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

  // Emits thinking-step messages and returns the total duration in ms.
  // Caller is responsible for what happens after thinking completes.
  const emitThinkingSteps = useCallback(
    (thinkingSteps: string[], baseId: string): number => {
      setMessages((prev) => [
        ...prev,
        {
          id: baseId,
          role: "assistant",
          content: "",
          toolCalls: [
            {
              id: `${baseId}_tc0`,
              type: "function",
              function: {
                name: "orchestratorThinking",
                arguments: JSON.stringify({ message: thinkingSteps[0] }),
              },
            },
          ],
        },
      ])

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
                    id: `${baseId}_tc${i + 1}`,
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

      return THINKING_STEP_MS * thinkingSteps.length
    },
    []
  )

  const streamAssistantResponse = useCallback(() => {
    const thinkingSteps = pickRandomThinkingSteps(3)
    const response =
      scriptRef.current[scriptTurnRef.current++] ?? pickRandomResponse()
    const thinkingId = nextId()
    const assistantId = nextId()

    setInProgress(true)

    const startThinking = setTimeout(() => {
      const totalThinkingMs = emitThinkingSteps(thinkingSteps, thinkingId)

      // Once thinking is done, open the assistant text message and stream chars.
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
  }, [emitThinkingSteps])

  const sendMessage = useCallback(
    (text: string, options?: { replyQuote?: string }) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "user",
          content: trimmed,
          replyQuote: options?.replyQuote,
        },
      ])
      streamAssistantResponse()
    },
    [streamAssistantResponse]
  )

  const sendMessageWithThinkingOnly = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", content: trimmed },
      ])

      const thinkingSteps = pickRandomThinkingSteps(3)
      const thinkingId = nextId()

      setInProgress(true)

      const startThinking = setTimeout(() => {
        const totalThinkingMs = emitThinkingSteps(thinkingSteps, thinkingId)
        const done = setTimeout(() => {
          setInProgress(false)
        }, totalThinkingMs)
        timersRef.current.push(done)
      }, THINKING_DELAY_MS)

      timersRef.current.push(startThinking)
    },
    [emitThinkingSteps]
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

  const appendRawMessages = useCallback<MockAiChatRuntime["appendRawMessages"]>(
    (msgs) => {
      setMessages((prev) => [
        ...prev,
        ...msgs.map((m) => ({ id: nextId(), ...m })),
      ])
    },
    []
  )

  const setScript = useCallback<MockAiChatRuntime["setScript"]>((next) => {
    scriptRef.current = next
    scriptTurnRef.current = 0
  }, [])

  const clear = useCallback(() => {
    clearTimers()
    setMessages([])
    setInProgress(false)
    setCurrentThreadTitle(null)
    setIsLoadingThread(false)
    scriptTurnRef.current = 0
  }, [clearTimers])

  // ── Chat history ────────────────────────────────────────────────

  const fetchThreads = useCallback<MockAiChatRuntime["fetchThreads"]>(
    () =>
      new Promise((resolve) => {
        const t = setTimeout(() => {
          // Return a fresh copy so consumers can't mutate the internal list.
          resolve(threads.map((thread) => ({ ...thread })))
        }, FETCH_THREADS_DELAY_MS)
        timersRef.current.push(t)
      }),
    [threads]
  )

  const deleteThread = useCallback<MockAiChatRuntime["deleteThread"]>(
    (id) =>
      new Promise((resolve) => {
        const t = setTimeout(() => {
          setThreads((prev) => prev.filter((thread) => thread.id !== id))
          // If the deleted thread is the one currently loaded, clear it.
          setCurrentThreadTitle((title) => {
            const deleted = threads.find((thread) => thread.id === id)
            return deleted && deleted.title === title ? null : title
          })
          resolve()
        }, 200)
        timersRef.current.push(t)
      }),
    [threads]
  )

  const loadThread = useCallback<MockAiChatRuntime["loadThread"]>(
    (id, title) => {
      clearTimers()
      setIsLoadingThread(true)
      setCurrentThreadTitle(title)
      setMessages([])
      const t = setTimeout(() => {
        const snapshot = snapshotsRef.current[id]
        if (snapshot) {
          setMessages(snapshot)
        } else {
          // Fallback transcript so unknown ids still render something
          // useful in the story.
          setMessages([
            buildUserMessage(title),
            buildAssistantMessage(
              "Loaded the thread, but no canned snapshot is available for this id. (Mock fallback.)"
            ),
          ])
        }
        // Bump the thread's updatedAt so the dialog reorders it.
        setThreads((prev) =>
          prev.map((thread) =>
            thread.id === id ? { ...thread, updatedAt: nowIso() } : thread
          )
        )
        setIsLoadingThread(false)
      }, LOAD_THREAD_DELAY_MS)
      timersRef.current.push(t)
    },
    [clearTimers]
  )

  return (
    <MockAiChatRuntimeContext.Provider
      value={{
        messages,
        inProgress,
        sendMessage,
        sendMessageWithThinkingOnly,
        appendMessages,
        appendRawMessages,
        setScript,
        clear,
        currentThreadTitle,
        isLoadingThread,
        fetchThreads,
        deleteThread,
        loadThread,
      }}
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
