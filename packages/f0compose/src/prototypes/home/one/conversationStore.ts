import { useSyncExternalStore } from "react"

import {
  addSurveyQuestions,
  resetSurveyDraft,
} from "../windows/surveyDraft"
import type { WindowId } from "../windows/types"

/**
 * Conversation state for the Home ONE experience, ported from the
 * one-notch exploration (factorial-composer: chat/runtime.tsx +
 * oneScenarios.tsx + OneNotch's follow-up cards) and reshaped:
 * conversations render full-screen in the Home canvas instead of a
 * docked panel, and every conversation started from the prompt bar
 * lands in the sidebar's "Recents" group.
 *
 * Module-level store (not context): the sidebar and the canvas live in
 * sibling React trees under FactorialShell, so they share state through
 * useSyncExternalStore.
 *
 * Conversations persist in localStorage so Recents survives a reload.
 * Only serializable data is stored — question cards carry the owning
 * intent's `key`, and the resolve copy lives in code (INTENTS).
 */

export type QuestionCard = {
  /** Which intent resolves the answer — functions can't persist. */
  intentKey: string
  text: string
  options: string[]
  /** Set once the user submits a choice (or free text via "Other"). */
  answer?: string
  /** Set when the user routed around the card by typing instead. */
  skipped?: boolean
}

export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  /** Follow-up question card (one-notch style) attached to this turn. */
  question?: QuestionCard
  /** Completed reasoning steps (F0AiChat "Reasoning" block) for this turn. */
  reasoning?: string[]
}

export type Conversation = {
  id: string
  title: string
  messages: ChatMessage[]
  thinking: boolean
  /** Drives the Recents "Active only" filter: bumped on every open/turn. */
  lastActiveAt: number
  /** Transient: reasoning steps revealed so far while One "works". */
  pendingReasoning?: { steps: string[]; visible: number }
}

type ConversationState = {
  conversations: Conversation[]
  activeId: string | null
}

const STORAGE_KEY = "f0compose:home:conversations"

/** Recents survives reloads; the active conversation intentionally
 *  doesn't — a fresh load always lands on the Home greeting. */
function loadPersisted(): Conversation[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Conversation[]
    // A reload can interrupt a pending reply — never rehydrate a stuck
    // spinner or a half-streamed reasoning block. Conversations persisted
    // before lastActiveAt existed keep their stored order (newest first).
    return parsed.map((c, index) => ({
      ...c,
      thinking: false,
      pendingReasoning: undefined,
      lastActiveAt: c.lastActiveAt ?? Date.now() - index * 60_000,
    }))
  } catch {
    return []
  }
}

let state: ConversationState = {
  conversations: loadPersisted(),
  activeId: null,
}
const listeners = new Set<() => void>()

/** Ids are `c<n>` / `m<n>` — resume the counter past anything persisted. */
let nextId =
  1 +
  state.conversations.reduce((max, c) => {
    const ids = [c.id, ...c.messages.map((m) => m.id)]
    return ids.reduce((m, id) => Math.max(m, Number(id.slice(1)) || 0), max)
  }, 0)

function emit(next: ConversationState) {
  state = next
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state.conversations)
    )
  } catch {
    // Quota/serialization failures only cost persistence, not the session.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useConversations(): ConversationState {
  return useSyncExternalStore(subscribe, () => state)
}

/**
 * Replies can call for a window (e.g. the survey preview opens itself
 * the moment One says it created the survey). The windows stack is
 * React state inside Home, so it subscribes here; firing only on live
 * delivery keeps reopened conversations from re-triggering windows.
 */
const windowListeners = new Set<(id: WindowId) => void>()

export function onWindowRequest(listener: (id: WindowId) => void) {
  windowListeners.add(listener)
  return () => {
    windowListeners.delete(listener)
  }
}

/** Does this prompt name an audience/assignee? If not, a create-task is
 *  ambiguous and One asks first (ported from one-notch's needsFollowUp). */
const NAMES_AUDIENCE =
  /\b(me|myself|my|team|teams|company|everyone|all|managers?|employees?|mi|mí|equipo|equipos|empresa|compañ|todos|emplead)\b/i

type FollowUpSpec = { text: string; options: string[] }

/**
 * Intent corpus, after one-notch's oneScenarios: regex → title + reply,
 * plus the follow-up question card (OneNotch's `followup` mode, reshaped
 * as an in-conversation turn): `followUp` decides whether the reply ends
 * with a question card, `resolve` produces the follow-through reply once
 * the user answers it.
 */
const INTENTS: {
  key: string
  match: (prompt: string) => boolean
  title: string
  reply: string[]
  /** Used instead of `reply` when `followUp` declines for this prompt. */
  directReply?: string[]
  /** Reasoning steps revealed one by one before the reply (F0AiChat). */
  reasoning?: string[]
  /** Window that opens itself the moment the reply lands. */
  opensWindow?: WindowId
  /** Side effect when the reply lands — live delivery only. */
  onReply?: () => void
  followUp?: (prompt: string) => FollowUpSpec | null
  resolve?: (answer: string) => string[]
  /** Side effect when a clarifying answer resolves — live only. */
  onResolve?: (answer: string) => void
}[] = [
  {
    key: "survey",
    match: (p) => /survey|encuesta|cuestionario|questionnaire|enps/i.test(p),
    title: "Employee engagement survey",
    // Steps + reply mirror the production F0AiChat survey-creation turn.
    reasoning: [
      "I'll set up a new engagement survey with the right questions and launch settings.",
      "I'm checking the available survey modules so I can create the engagement survey correctly.",
      "I'm creating the company-wide engagement survey with a balanced set of engagement questions.",
    ],
    reply: [
      "Created the company-wide **Employee Engagement Survey** with 6 questions covering satisfaction, manager support, advocacy, engagement drivers, improvement areas, and open feedback.",
    ],
    // The drafted survey shows itself alongside the reply, reset to the
    // base 6 questions (it's a NEW survey).
    opensWindow: "preview",
    onReply: resetSurveyDraft,
    followUp: () => ({
      text: "Should we add one more question?",
      options: [
        "Work-life balance",
        "Team collaboration",
        "Both",
        "No, it's good as it is",
      ],
    }),
    resolve: (answer) =>
      answer.startsWith("No")
        ? [
            "Great — keeping it at 6 questions. It's ready to publish whenever you want; you can preview it from the play button above.",
          ]
        : [
            answer === "Both"
              ? "Added both — the **Employee Engagement Survey** now has 8 questions."
              : `Added a ${answer.toLowerCase()} question — the **Employee Engagement Survey** now has 7 questions.`,
            "You can see them in the preview — want to publish?",
          ],
    // The preview window's draft gains the chosen question(s) live:
    // placeholder shimmer → question streams in (see surveyDraft).
    onResolve: (answer) => {
      const workLife = {
        id: "work-life-balance",
        type: "rating" as const,
        title: "How satisfied are you with your work-life balance?",
        description: "1 = No satisfied, 5 = Very satisfied",
        required: true,
      }
      const collaboration = {
        id: "team-collaboration",
        type: "rating" as const,
        title: "How effectively does your team collaborate day to day?",
        description: "1 = No effective, 5 = Very effective",
        required: true,
      }
      if (answer === "Work-life balance") addSurveyQuestions([workLife])
      else if (answer === "Team collaboration")
        addSurveyQuestions([collaboration])
      else if (answer === "Both") addSurveyQuestions([workLife, collaboration])
    },
  },
  {
    key: "task",
    match: (p) =>
      /\b(task|tarea)\b/i.test(p) &&
      /\b(create|crea|crear|add|añad|new|nueva|nuevo|make|haz|assign|asign)\b/i.test(
        p
      ),
    title: "New task",
    reply: ["Sure — I can draft that task for you."],
    // A clear prompt (audience named) skips the question and drafts directly.
    directReply: [
      "Done — I've drafted the task with a due date three days out.",
      "You can review and adjust it in Tasks; I'll notify the assignees once you confirm.",
    ],
    // Only ambiguous prompts (no audience named) get the question card.
    followUp: (prompt) =>
      NAMES_AUDIENCE.test(prompt)
        ? null
        : {
            text: "Whom do you want to create the task for?",
            options: [
              "All the company",
              "Specific employee/s",
              "Specific team/s",
              "Other",
            ],
          },
    resolve: (answer) => [
      `Done — I've drafted the task for ${answer.toLowerCase()} with a due date three days out.`,
      "You can review and adjust it in Tasks; I'll notify the assignees once you confirm.",
    ],
  },
  {
    key: "analysis",
    match: (p) => /analy[sz]e|report|dashboard|trend|metric|turnover|absen/i.test(p),
    title: "Workforce analysis",
    reply: [
      "Participation was 82%. eNPS is +24, up from +18. The strongest area is manager support (4.4/5) and the weakest is career growth (3.1/5).",
      "40 comments mention unclear promotion paths — that's the theme I'd act on first.",
    ],
    followUp: () => ({
      text: "Want me to break it down?",
      options: ["By team", "By office", "By tenure", "No, this is enough"],
    }),
    resolve: (answer) =>
      answer.startsWith("No")
        ? ["Sounds good — ping me if you want the full report exported."]
        : [
            `Breaking it down ${answer.toLowerCase()}: the pattern holds everywhere except Sales, where career-growth drops to 2.6/5 and drives most of the negative comments.`,
            "That's where I'd start — want me to draft an action plan for that group?",
          ],
  },
  {
    key: "documents",
    match: (p) => /find|search|where|payslip|contract|policy/i.test(p),
    title: "Finding documents",
    reply: [
      "I found 3 matching documents in your workspace. The most recent one was updated last Tuesday by HR.",
      "Do you want me to open it, or share it with someone on your team?",
    ],
  },
  {
    key: "routine",
    match: (p) => /automat|routine|schedule|remind|every/i.test(p),
    title: "New routine",
    reply: [
      "Done — I've drafted a routine that runs every weekday at 08:30 and posts a summary to your inbox.",
    ],
    followUp: () => ({
      text: "Want me to activate it now?",
      options: ["Activate it now", "Adjust the schedule first"],
    }),
    resolve: (answer) =>
      answer.startsWith("Activate")
        ? [
            "Activated ✓ It runs every weekday at 08:30 — you can pause or edit it anytime from Routines.",
          ]
        : [
            "No problem — tell me the days and time you'd prefer and I'll update it before turning it on.",
          ],
  },
]

const FALLBACK_REPLY = [
  "I'm on it. Give me a second to pull the relevant information from your workspace.",
  "Is there anything specific you'd like me to focus on?",
]

const THINK_MS = 1100
/** Cadence of the reasoning steps: one reveals every beat, and the reply
 *  lands one beat after the last step. */
const STEP_MS = 1200
const FIRST_STEP_MS = 500

function intentFor(prompt: string) {
  return INTENTS.find((intent) => intent.match(prompt))
}

/** Title = intent title, else the prompt truncated like one-notch does. */
function titleFor(prompt: string): string {
  const intent = intentFor(prompt)
  if (intent) return intent.title
  return prompt.length > 32 ? prompt.slice(0, 32).trimEnd() + "…" : prompt
}

function patchConversation(
  conversationId: string,
  patch: (c: Conversation) => Conversation
) {
  emit({
    ...state,
    conversations: state.conversations.map((c) =>
      c.id === conversationId ? patch(c) : c
    ),
  })
}

/** The turn's messages: reply paragraphs (+ optional question card). */
function buildTurnMessages(prompt: string): ChatMessage[] {
  const intent = intentFor(prompt)
  const followUp = intent?.followUp?.(prompt)
  // With a followUp gate that declined, prefer the direct variant.
  const contents = intent
    ? intent.followUp && !followUp && intent.directReply
      ? intent.directReply
      : intent.reply
    : FALLBACK_REPLY
  const replies: ChatMessage[] = contents.map((content, index) => ({
    id: `m${nextId++}`,
    role: "assistant" as const,
    content,
    // The completed reasoning block belongs to the turn's first paragraph.
    ...(index === 0 && intent?.reasoning
      ? { reasoning: intent.reasoning }
      : {}),
  }))
  if (intent && followUp) {
    replies.push({
      id: `m${nextId++}`,
      role: "assistant",
      content: "",
      question: { intentKey: intent.key, ...followUp },
    })
  }
  return replies
}

function deliverReply(conversationId: string, prompt: string) {
  const intent = intentFor(prompt)
  const steps = intent?.reasoning
  const finish = () => {
    const replies = buildTurnMessages(prompt)
    patchConversation(conversationId, (c) => ({
      ...c,
      thinking: false,
      pendingReasoning: undefined,
      messages: [...c.messages, ...replies],
    }))
    // Only when the reply lands in the OPEN conversation — a reply
    // finishing in the background shouldn't pop a window over whatever
    // the user moved on to.
    if (state.activeId === conversationId) {
      intent?.onReply?.()
      if (intent?.opensWindow) {
        windowListeners.forEach((listener) => listener(intent.opensWindow!))
      }
    }
  }
  if (!steps?.length) {
    setTimeout(finish, THINK_MS)
    return
  }
  // Reveal the reasoning steps one by one (the newest shimmers as
  // "executing"), then land the reply one beat after the last step.
  const reveal = (visible: number) => {
    patchConversation(conversationId, (c) => ({
      ...c,
      pendingReasoning: { steps, visible },
    }))
    setTimeout(
      () => (visible < steps.length ? reveal(visible + 1) : finish()),
      STEP_MS
    )
  }
  setTimeout(() => reveal(1), FIRST_STEP_MS)
}

/** Prompt-bar submit on the Home screen → new full-screen conversation. */
export function startConversation(prompt: string): string {
  const id = `c${nextId++}`
  const conversation: Conversation = {
    id,
    title: titleFor(prompt),
    thinking: true,
    lastActiveAt: Date.now(),
    messages: [{ id: `m${nextId++}`, role: "user", content: prompt }],
  }
  emit({
    conversations: [conversation, ...state.conversations],
    activeId: id,
  })
  deliverReply(id, prompt)
  return id
}

/** Lock any question card the user routed around by typing instead. */
function skipOpenQuestions(c: Conversation): Conversation {
  return {
    ...c,
    messages: c.messages.map((m) =>
      m.question && !m.question.answer && !m.question.skipped
        ? { ...m, question: { ...m.question, skipped: true } }
        : m
    ),
  }
}

/** Prompt-bar submit while a conversation is open → next turn. */
export function sendMessage(prompt: string) {
  const id = state.activeId
  if (!id) return
  patchConversation(id, (c) => ({
    ...skipOpenQuestions(c),
    thinking: true,
    lastActiveAt: Date.now(),
    messages: [
      ...skipOpenQuestions(c).messages,
      { id: `m${nextId++}`, role: "user", content: prompt },
    ],
  }))
  deliverReply(id, prompt)
}

/**
 * Submit from the clarifying panel: lock the question, echo the answer
 * as a user turn (like One's F0ClarifyingPanel confirm), think, and
 * deliver the follow-through.
 */
export function answerQuestion(
  conversationId: string,
  messageId: string,
  answer: string
) {
  const conversation = state.conversations.find((c) => c.id === conversationId)
  const message = conversation?.messages.find((m) => m.id === messageId)
  const question = message?.question
  if (!question || question.answer || question.skipped) return
  patchConversation(conversationId, (c) => ({
    ...c,
    thinking: true,
    lastActiveAt: Date.now(),
    messages: [
      ...c.messages.map((m) =>
        m.id === messageId ? { ...m, question: { ...question, answer } } : m
      ),
      { id: `m${nextId++}`, role: "user" as const, content: answer },
    ],
  }))
  setTimeout(() => {
    const intent = INTENTS.find((i) => i.key === question.intentKey)
    const contents = intent?.resolve?.(answer) ?? [
      "Noted — I'll take it from here.",
    ]
    patchConversation(conversationId, (c) => ({
      ...c,
      thinking: false,
      messages: [
        ...c.messages,
        ...contents.map((content) => ({
          id: `m${nextId++}`,
          role: "assistant" as const,
          content,
        })),
      ],
    }))
    // Side effects land WITH the resolution ("Added…" appears as the
    // preview updates), not when the user clicks Submit.
    intent?.onResolve?.(answer)
  }, THINK_MS)
}

/** Dismiss the clarifying panel (Esc / Cancel / ×) without answering. */
export function skipQuestion(conversationId: string, messageId: string) {
  patchConversation(conversationId, (c) => ({
    ...c,
    messages: c.messages.map((m) =>
      m.id === messageId && m.question && !m.question.answer
        ? { ...m, question: { ...m.question, skipped: true } }
        : m
    ),
  }))
}

/** Open a conversation from the sidebar's Recents group. Reopening
 *  bumps it back into the "Active only" window. */
export function openConversation(id: string) {
  emit({
    activeId: id,
    conversations: state.conversations.map((c) =>
      c.id === id ? { ...c, lastActiveAt: Date.now() } : c
    ),
  })
}

/** Back to the Home canvas; the conversation stays in Recents. */
export function goHome() {
  emit({ ...state, activeId: null })
}

/** Rename from the Recents row menu. Empty titles are ignored. */
export function renameConversation(id: string, title: string) {
  const trimmed = title.trim()
  if (!trimmed) return
  patchConversation(id, (c) => ({ ...c, title: trimmed }))
}

/** Delete from the Recents row menu; deleting the open one goes Home. */
export function deleteConversation(id: string) {
  emit({
    conversations: state.conversations.filter((c) => c.id !== id),
    activeId: state.activeId === id ? null : state.activeId,
  })
}

/** "Clear recents" from the sliders menu — wipes the whole section. */
export function clearConversations() {
  emit({ conversations: [], activeId: null })
}
