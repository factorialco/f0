import { useSyncExternalStore } from "react"

import type { RunEntry } from "../agents/agentThreads"
import type { ProfileId } from "../profileStore"
import type { WindowId } from "../windows/types"

import { entriesFor, templateById, threadFor } from "../agents/agentsData"
import { createAgent } from "../agents/agentStore"
import {
  NEW_AGENT_PROMPT,
  NEW_AGENT_ROUTES,
  NEW_AGENT_THREAD,
  runSummary,
} from "../agents/agentThreads"
import { PROFILE_PEOPLE } from "../fixtures"
import { approveTasksByModule } from "../needsYouStore"
import { setPeopleFocus } from "../people/peopleFocusStore"
import { getPolicyText, updatePreferences } from "../preferences/state"
import { refreshHome } from "../setup/homeRefresh"
import {
  advanceSetup,
  HOME_EXPERIENCE_VERSION,
  initialSetup,
  questionFor,
  WIDGET_CHOICES,
  normalize,
  type HomeSetup,
  type HomeArtifact,
} from "../setup/homeSetup"
import {
  readWidgets,
  changeWidgets,
  undoWidgets,
} from "../setup/widgetPreferences"
import {
  widgetQuestion,
  completeWidget,
  creationSteps,
  type WidgetCreation,
} from "../widget-editor/creation"
import { addCustomWidget } from "../widget-editor/model"
import { addSurveyQuestions, resetSurveyDraft } from "../windows/surveyDraft"
import {
  INSIGHT_ANSWERS,
  type Insight,
  PEOPLE_INSIGHT_INTRO,
  PEOPLE_INSIGHT_REASONING,
  PEOPLE_INSIGHTS,
} from "./insights"

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
  /**
   * Checkboxes instead of radios (Figma 2732:462941): more than one
   * option can be picked, and picking every one resolves to "Both" —
   * which is the answer the intents already write copy for.
   */
  selectedOptions?: string[]
  multi?: boolean
  /** Set once the user submits a choice (or free text via "Other"). */
  answer?: string
  /** Set when the user routed around the card by typing instead. */
  skipped?: boolean
}

/**
 * What the user clicked to start the turn, rendered as a card above it.
 *
 * The One button on a metric card works the way X's Grok button works on
 * a post: instead of typing, you point at something and the assistant
 * answers about THAT. The card is what makes the answer legible — without
 * it the reply floats free of what it is about.
 *
 * Plain data, because conversations persist to localStorage.
 */
export type MessageContext = {
  kind: "metric"
  /** What was clicked, e.g. "Total employees". */
  title: string
  stats: { label: string; value: string }[]
  /** Sparkline series, drawn normalised to its own min/max. */
  series?: number[]
}

export type ChatMessage = {
  homeArtifact?: HomeArtifact
  id: string
  role: "user" | "assistant"
  content: string
  /** The thing the user pointed at, if they clicked rather than typed. */
  context?: MessageContext
  /** Follow-up question card (one-notch style) attached to this turn. */
  question?: QuestionCard
  /** Completed reasoning steps (F0AiChat "Reasoning" block) for this turn. */
  reasoning?: string[]
  /** Numbered steps with explicit thresholds — an agent's working plan. */
  plan?: string[]
  /**
   * Runs from an agent's log, rendered INSIDE the thread: an agent's
   * thread IS its activity log, so its executions are turns here rather
   * than rows in some separate feed.
   */
  runs?: RunEntry[]
  /**
   * One's read on a screen, as cards you can act on without leaving the
   * panel (Figma 2760:589016). The same kind of thing as `runs`:
   * structure inside a turn rather than a separate feed.
   */
  insights?: Insight[]
}

/**
 * What you decided on a blocked run, and what the agent did about it.
 *
 * Kept on the conversation keyed by the run's `at`, NOT appended as
 * messages. Choosing an action used to push a user bubble and a reply to
 * the bottom of the thread, which said the same thing twice — once as dead
 * text in the card, once as chat — and left the agent's answer floating far
 * from the run it answered. Resolve three runs and nothing told you which
 * reply belonged to which (Oskar's Grok comparison, 2026-09-02).
 */
export type RunResolution = {
  /** The action you chose. */
  label: string
  /** Undefined until the agent answers; the card shows it working. */
  reply?: string
  /** The rule it now keeps, rendered against a pin. */
  learned?: string
}

export type Conversation = {
  widgetCreation?: WidgetCreation
  homeSetup?: HomeSetup
  homeBriefing?: ProfileId
  /** Dedicated mock conversation for replacing the personal policy text. */
  policyEditing?: boolean
  id: string
  title: string
  messages: ChatMessage[]
  thinking: boolean
  /**
   * Set when this conversation belongs to an AGENT (Figma 2741:466470) —
   * the navbar shows the agent's emoji beside the title and the nav
   * panel's Agents group marks that agent as the one you are inside.
   */
  agentId?: string
  /** Drives the Recents "Active only" filter: bumped on every open/turn. */
  lastActiveAt: number
  /** Which action you took on each insight card, keyed by insight id. */
  insightsActed?: Record<string, string>
  /** Transient: reasoning steps revealed so far while One "works". */
  pendingReasoning?: { steps: string[]; visible: number }
  /**
   * Transient: the turn being typed out. `done` are the paragraphs
   * already finished, `typing` is the one in flight and `chars` how much
   * of it has landed. Prose streams; structure (a plan, a run log, a
   * question card) does not — you cannot half-render a numbered list
   * without it reading as broken.
   */
  streaming?: { done: ChatMessage[]; typing: ChatMessage; chars: number }
  /**
   * Resolved blocked runs, keyed by run `at`. Persisted deliberately — a
   * decision you already made must not come back as an open question after
   * a reload, which is why this is NOT in the stripped-on-load list.
   */
  resolutions?: Record<string, RunResolution>
}

type ConversationState = {
  conversations: Conversation[]
  activeId: string | null
  /**
  /**
   * You have opened One at least once this session — the navbar button
   * carries a notification dot until you have.
   *
   * Modelled on the clock-in exactly (per Oskar), including the part that
   * matters: it is NOT persisted. `emit` only writes `conversations`, so a
   * reload brings the dot back, the same way `clockInStore` starts the
   * prototype's day over. That is what makes it demoable more than once.
   */
  oneSeen: boolean
  /** One's insight reading, so the button reopens it instead of starting
   *  a second one. Unpersisted, like everything else in this block. */
  insightsId?: string
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
      streaming: undefined,
      lastActiveAt: c.lastActiveAt ?? Date.now() - index * 60_000,
    }))
  } catch {
    return []
  }
}

let state: ConversationState = {
  conversations: loadPersisted(),
  activeId: null,
  oneSeen: false,
}
const listeners = new Set<() => void>()

/** Ids are `c<n>` / `m<n>` — resume the counter past anything persisted. */
let nextId =
  1 +
  state.conversations.reduce((max, c) => {
    const ids = [c.id, ...c.messages.map((m) => m.id)]
    return ids.reduce((m, id) => Math.max(m, Number(id.slice(1)) || 0), max)
  }, 0)

/**
 * `persist: false` for the transient frames of a turn — the reasoning
 * reveal and the reply stream tick many times a second, and serialising
 * every conversation to localStorage on each of those would be the most
 * expensive thing in the prototype for state that is deliberately not
 * saved anyway (see `loadPersisted`, which strips it).
 */
function emit(next: ConversationState, { persist = true } = {}) {
  state = next
  if (persist) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.conversations)
      )
    } catch {
      // Quota/serialization failures only cost persistence, not the session.
    }
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

/** Ask Home to open a window — same channel One replies use, so callers
 *  outside Home's tree (e.g. the nav panel rows) get the same behavior
 *  (generic slide-in, no FLIP origin). */
export function requestWindow(id: WindowId) {
  windowListeners.forEach((listener) => listener(id))
}

/**
 * Ask Home to collapse the widgets stack.
 *
 * Its own channel rather than a sentinel on `requestWindow`, whose whole
 * payload is a `WindowId`: the nav's "New" row is asking for a clean
 * canvas, and a clean canvas is not a window.
 */
const collapseListeners = new Set<() => void>()

export function onWindowsCollapseRequest(listener: () => void) {
  collapseListeners.add(listener)
  return () => {
    collapseListeners.delete(listener)
  }
}

export function requestWindowsCollapse() {
  collapseListeners.forEach((listener) => listener())
}

/** Does this prompt name an audience/assignee? If not, a create-task is
 *  ambiguous and One asks first (ported from one-notch's needsFollowUp). */
const NAMES_AUDIENCE =
  /\b(me|myself|my|team|teams|company|everyone|all|managers?|employees?|mi|mí|equipo|equipos|empresa|compañ|todos|emplead)\b/i

type FollowUpSpec = { text: string; options: string[]; multi?: boolean }

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
  /**
   * Resolves ON THE NEEDS-YOU CARD instead of opening a conversation.
   *
   * `module` picks which rows it targets and `done` is the one line the
   * card shows before it leaves — the only place the figures appear on
   * this path, so it has to carry them. The steps come from `reasoning`,
   * unchanged, because they are the same words either way.
   *
   * It is a REQUEST, not a guarantee: if any targeted row is one One may
   * not close (`oneCanClose`), the card path is refused and this falls
   * through to the conversation below, where `reply` explains why. That
   * is the whole point of declaring it on an intent that will be
   * refused — see the contracts one.
   */
  inPlace?: { module: string; done: string }
}[] = [
  {
    /**
     * "Approve all the time off that is within policy" — typed on Home,
     * and it CLEARS the matching rows from the Needs-you list above
     * (Oskar's brief). Placed first in the corpus so its narrow match wins
     * before the broader `documents` intent, which also tests /policy/.
     *
     * The side effect keys on the task's MODULE, not on its wording, so
     * "todos los time off" means all of them and stays true if a fixture
     * is reworded. `onReply` fires on LIVE delivery only, so reopening the
     * conversation later cannot re-approve anything.
     */
    key: "timeoff-approve-in-policy",
    match: (p) =>
      /(approve|aprueba|aprobar|autoriza)/i.test(p) &&
      /(time off|timeoff|time-off|vacacion\w*|ausencia\w*|holiday|pto)/i.test(
        p
      ),
    title: "Approve time off within policy",
    reasoning: [
      "Pulling every open time-off request and the policy each one falls under.",
      "Checking allowance, notice period and team cover on each.",
      "Setting aside anything that needs a judgement call.",
    ],
    inPlace: {
      module: "timeoff",
      done: "Approved 12 requests — all inside allowance, none left a team short",
    },
    // Only reachable once the batch is already gone: the card path takes
    // it otherwise, so this must be true of an empty queue rather than
    // claiming an approval that did not happen.
    reply: [
      "Nothing is open in time off right now — the last batch of 12 went through inside allowance and is already off your list.",
    ],
  },
  {
    /**
     * The same shape of request against CONTRACTS, and the branch that
     * proves the refusal: it asks for the card path and
     * `approveTasksByModule` turns it down, because a renewal touches
     * someone's contract. So this lands in the full conversation instead
     * and One says why rather than silently doing nothing.
     */
    key: "contracts-confirm",
    match: (p) =>
      /(confirm|confirma|renew|renov|approve|aprueba)/i.test(p) &&
      /(contract|contrato)\w*/i.test(p),
    title: "Confirm contract renewals",
    inPlace: {
      module: "company_documents",
      done: "Confirmed 4 renewals",
    },
    reasoning: [
      "Reading the 4 renewals and the terms each one changes.",
      "Checking them against the standard template and this year's bands.",
    ],
    reply: [
      "I can't close these from your list. All 4 are drafted and inside the standard template, but a renewal changes someone's contract, and that is the line where I stop and bring it to you — the same rule that lets me clear time off without asking.",
      "They are ready to send as they are. Say the word and I'll put all 4 out, or open any one of them if you want to read the terms first.",
    ],
  },
  {
    // The One button on the headcount card lands here. Its prompt is
    // generated, not typed, so the match only has to be unambiguous
    // against the rest of the corpus.
    key: "headcount",
    // Both spellings stay matchable: the generated prompt is English now
    // (see HEADCOUNT), but a typed "total empleados" should still land
    // here, and conversations persisted before the rename carry the old
    // wording.
    match: (p) =>
      /total emplea\w*|total employees|headcount|plantilla/i.test(p),
    title: "Total employees",
    reasoning: [
      "Reading the headcount series for the last twelve months.",
      "Comparing joiners and leavers against the same period last year.",
      "Checking which teams account for the net change.",
    ],
    reply: [
      "You are at **2.714 people**, up **85 net** this period — 122 joiners against 37 leavers. That is the steepest month in the series, and it is the third in a row above your hiring plan.",
      "The leavers are the part worth a look: 37 is normal in absolute terms, but **19 of them are in their first year**, which is where the curve has been drifting since March. Everything else is stable — regretted attrition outside that cohort is flat.",
      "Two things I can do from here: break the 37 down by team and tenure, or model what the next quarter looks like if first-year attrition holds at this rate.",
    ],
    // Checkboxes, two options, per Figma 2732:462941 — "Both" is not an
    // option you pick, it is what ticking both MEANS, so the resolve
    // branches below are unchanged.
    followUp: () => ({
      text: "Which one do you want?",
      options: ["Break down the 37 leavers", "Model next quarter"],
      multi: true,
    }),
    resolve: (answer) =>
      answer.startsWith("Model")
        ? [
            "At this rate you end the quarter around **2.840**, with first-year attrition costing you roughly 44 people over the three months. Hitting the plan means either 30 more joiners or holding that cohort.",
          ]
        : answer === "Both"
          ? [
              "**The 37 leavers**: 19 in their first year — 11 of those in Sales, 5 in Support, 3 spread elsewhere. The remaining 18 are spread thin across tenures, which is what you would expect.",
              "**Next quarter**: around **2.840** at this rate, with first-year attrition costing roughly 44 people. Sales is where the plan actually breaks.",
            ]
          : [
              "**19 of the 37 are first-year**: 11 in Sales, 5 in Support, 3 spread elsewhere. The other 18 sit across tenures with no pattern worth chasing.",
              "Sales is the signal — that team has hired 41 people this period and lost 11 of last year's intake.",
            ],
  },
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
    match: (p) =>
      /analy[sz]e|report|dashboard|trend|metric|turnover|absen/i.test(p),
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

/**
 * Try to answer a prompt ON THE CARD rather than in a conversation.
 *
 * Returns true when it took the job, and the caller must NOT then open a
 * conversation. False means either there was nothing to do or One is not
 * allowed to close the rows in question, and the conversation is the right
 * place for both.
 */
export function tryResolveInPlace(prompt: string): boolean {
  const intent = intentFor(prompt)
  if (!intent?.inPlace) return false
  const outcome = approveTasksByModule(
    intent.inPlace.module,
    intent.reasoning ?? [],
    intent.inPlace.done
  )
  return outcome === "running"
}

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
  patch: (c: Conversation) => Conversation,
  options?: { persist?: boolean }
) {
  emit(
    {
      ...state,
      conversations: state.conversations.map((c) =>
        c.id === conversationId ? patch(c) : c
      ),
    },
    options
  )
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

/**
 * Is this conversation ON SCREEN — in the canvas or in the split panel?
 * Side effects (a window opening itself, the survey draft resetting) fire
 * only for a conversation the user is actually looking at.
 */
function isVisible(conversationId: string): boolean {
  return state.activeId === conversationId
}

/**
 * A reply written by the CALLER rather than matched from the corpus. The
 * agent flow needs it: what an agent answers to its first brief belongs
 * to that agent (see `agentsData`), not to a regex over what you typed.
 */
export type ReplyScript = {
  reasoning?: string[]
  reply: string[]
  /**
   * The ONE thing the reply asks for, as a clarifying card. `key` routes
   * the answer — `agent-brief:<templateId>` lands the plan,
   * `agent-policy:<templateId>` lands the confirmation and the run log
   * (see `resolveAgentAnswer`).
   */
  question?: { key: string; text: string; options: string[] }
}

/**
 * Characters per tick and the tick itself — ~400 chars a second, fast
 * enough not to be a wait and slow enough to read as typing.
 *
 * Deliberately FEW, FAT ticks rather than many thin ones: a backgrounded
 * tab clamps timers to roughly 1/s, and at 4 chars per 16ms that turned a
 * three-line reply into a minute of crawling (hit while verifying in the
 * Claude pane, which is always a hidden tab). More characters per tick
 * degrades gracefully; a shorter interval does not.
 */
const STREAM_CHARS = 10
const STREAM_MS = 24
/** A beat between paragraphs, so they land as separate thoughts. */
const STREAM_GAP_MS = 90

/**
 * Type a turn out paragraph by paragraph instead of dropping it in whole
 * (per Oskar, 2026-09-02 — the replies had no stream effect at all).
 *
 * Only PROSE streams. A message carrying a plan, a run log or a question
 * card is committed complete: half a numbered list reads as broken, not
 * as arriving. Anything with no text at all is committed the same way.
 */
function streamTurn(
  conversationId: string,
  replies: ChatMessage[],
  onDone: () => void
) {
  /**
   * Don't animate when nobody is watching, or when they asked not to be
   * animated at.
   *
   * A HIDDEN tab clamps timers to ~1/s and eventually freezes them, so a
   * streamed reply there arrives letter by letter over minutes and you
   * come back to a half-written sentence. Reduced motion is the same
   * judgement for a different reason. Either way the honest answer is the
   * finished turn, not a stalled animation — this is a presentation
   * flourish, and it should never be what decides whether you can read
   * the reply.
   */
  const instant = () =>
    document.hidden ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const commit = (done: ChatMessage[]) => {
    patchConversation(conversationId, (c) => ({
      ...c,
      thinking: false,
      pendingReasoning: undefined,
      streaming: undefined,
      messages: [...c.messages, ...done],
    }))
    onDone()
  }

  const next = (done: ChatMessage[], index: number) => {
    if (index >= replies.length) {
      commit(done)
      return
    }
    // Checked per paragraph as well as up front: the tab can be hidden
    // half way through a turn.
    if (instant()) {
      commit([...done, ...replies.slice(index)])
      return
    }
    const message = replies[index]
    const streamable = message.content && !message.plan && !message.runs
    if (!streamable) {
      // Structure, or an empty question card: straight in, then carry on.
      // chars < 0 means "render this one whole" — `done` deliberately
      // does not include it yet, or it would paint twice.
      patchConversation(conversationId, (c) => ({
        ...c,
        thinking: false,
        pendingReasoning: undefined,
        streaming: { done, typing: message, chars: -1 },
      }))
      setTimeout(() => next([...done, message], index + 1), STREAM_GAP_MS)
      return
    }
    const tick = (chars: number) => {
      if (instant()) {
        commit([...done, ...replies.slice(index)])
        return
      }
      if (chars >= message.content.length) {
        setTimeout(() => next([...done, message], index + 1), STREAM_GAP_MS)
        return
      }
      patchConversation(
        conversationId,
        (c) => ({
          ...c,
          thinking: false,
          pendingReasoning: undefined,
          streaming: { done, typing: message, chars },
        }),
        // Every frame of this would otherwise re-serialise every
        // conversation to localStorage.
        { persist: false }
      )
      setTimeout(() => tick(chars + STREAM_CHARS), STREAM_MS)
    }
    tick(STREAM_CHARS)
  }

  if (instant()) {
    commit(replies)
    return
  }
  next([], 0)
}

function deliverReply(
  conversationId: string,
  prompt: string,
  script?: ReplyScript
) {
  const intent = script ? undefined : intentFor(prompt)
  const steps = script ? script.reasoning : intent?.reasoning
  const finish = () => {
    const replies = script
      ? [
          ...script.reply.map((content, index) => ({
            id: `m${nextId++}`,
            role: "assistant" as const,
            content,
            // The completed block belongs to the turn's first paragraph,
            // exactly as an intent's does.
            ...(index === 0 && script.reasoning
              ? { reasoning: script.reasoning }
              : {}),
          })),
          ...(script.question
            ? [
                {
                  id: `m${nextId++}`,
                  role: "assistant" as const,
                  content: "",
                  question: {
                    intentKey: script.question.key,
                    text: script.question.text,
                    options: script.question.options,
                  },
                },
              ]
            : []),
        ]
      : buildTurnMessages(prompt)
    streamTurn(conversationId, replies, () => {
      // Only when the reply lands in the OPEN conversation — a reply
      // finishing in the background shouldn't pop a window over whatever
      // the user moved on to.
      if (isVisible(conversationId)) {
        intent?.onReply?.()
        if (intent?.opensWindow) {
          windowListeners.forEach((listener) => listener(intent.opensWindow!))
        }
      }
    })
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

/**
 * Every conversation now shows up in ONE place: the canvas, where the
 * Needs-you queue lives. The split panel it used to have as an
 * alternative is gone (Oskar, 2026-09-08: "es decir eliminamos el
 * split"), so there is no target to choose any more.
 */
function createConversation(
  prompt: string,
  options?: { title?: string; agentId?: string; script?: ReplyScript }
): string {
  const id = `c${nextId++}`
  const conversation: Conversation = {
    id,
    title: options?.title ?? titleFor(prompt),
    thinking: true,
    lastActiveAt: Date.now(),
    messages: [{ id: `m${nextId++}`, role: "user", content: prompt }],
    ...(options?.agentId ? { agentId: options.agentId } : {}),
  }
  emit({
    conversations: [conversation, ...state.conversations],
    activeId: id,
    // Anything that opens One clears the dot — the banner's chevron as
    // surely as a navbar button would.
    oneSeen: true,
  })
  deliverReply(id, prompt, options?.script)
  return id
}

/**
 * Start a conversation ABOUT something the user clicked. The prompt still
 * drives intent matching — it is the question the click stands for — but
 * the turn renders as the card instead of as typed text.
 */
function startWithContext(
  context: MessageContext,
  prompt: string,
  script?: ReplyScript
): string {
  const id = createConversation(prompt, { script })
  patchConversation(id, (c) => ({
    ...c,
    title: context.title,
    messages: c.messages.map((m, i) =>
      i === 0 ? { ...m, context, content: prompt } : m
    ),
  }))
  return id
}

/** The One button on a widget's card — answers in the canvas. */
export function startConversationWithContext(
  context: MessageContext,
  prompt: string,
  script?: ReplyScript
): string {
  return startWithContext(context, prompt, script)
}

/**
 * The navbar's One button: open the panel with One's READ on the screen
 * already in it (per Oskar) — the agents flow pointed at a screen instead
 * of an agent. Or close the panel if One is already there.
 *
 * It replaced a blank composer, which asked you to think of the question.
 * This arrives with the work: a paragraph of context, then a card per
 * thing found, each with its own two actions.
 *
 * Reopening returns the SAME reading rather than a second copy — pressing
 * twice should not give you two readings of one directory, which is what
 * `insightsId` is for.
 *
 * HAS NO CALLER. Its button was the navbar One mark, removed on Oskar's
 * word ("sin el boton de One que se ve ahora"), and the split it used to
 * open is gone too. Kept and repointed at the CANVAS rather than deleted,
 * because everything behind it is live and worth keeping: the three
 * insight cards, `INSIGHT_ANSWERS`, the decision tree and the People
 * focus store. Give it a button and it works where Needs-you lives.
 */
export function openInsightReading() {
  const existing = state.conversations.find((c) => c.id === state.insightsId)
  if (existing) {
    emit({ ...state, activeId: existing.id, oneSeen: true })
    return
  }
  const id = `c${nextId++}`
  // Opens EMPTY and thinking (per Oskar): One shows what it is reading
  // before it says anything, so the reading is visible rather than
  // asserted. The same three beats every other turn has — spinner,
  // reasoning steps one by one, then the prose streams.
  const conversation: Conversation = {
    id,
    title: "Today in People",
    thinking: true,
    lastActiveAt: Date.now(),
    messages: [],
  }
  emit({
    ...state,
    conversations: [conversation, ...state.conversations],
    activeId: id,
    oneSeen: true,
    insightsId: id,
  })
  deliverInsightReading(id)
}

/**
 * The reasoning-then-reply beat for One's opening read.
 *
 * `deliverReply` cannot be reused: it is keyed on a PROMPT, and this
 * conversation has no user turn — the button opened it and One speaks
 * first. The reveal loop below is deliberately the same shape as that
 * one's, so both surfaces pace identically.
 *
 * The intro paragraphs stream; the insights message does NOT, because
 * `streamTurn` commits any message carrying structure whole — half a card
 * reads as broken, not as arriving. The cards get their entrance in CSS
 * instead (`f0c-card-in`, staggered).
 */
function deliverInsightReading(conversationId: string) {
  const steps = PEOPLE_INSIGHT_REASONING
  const finish = () => {
    streamTurn(
      conversationId,
      [
        ...PEOPLE_INSIGHT_INTRO.map((content, index) => ({
          id: `m${nextId++}`,
          role: "assistant" as const,
          content,
          // The completed block belongs to the turn's first paragraph,
          // exactly as an intent's does.
          ...(index === 0 ? { reasoning: steps } : {}),
        })),
        {
          id: `m${nextId++}`,
          role: "assistant" as const,
          content: "",
          insights: PEOPLE_INSIGHTS,
        },
      ],
      () => {}
    )
  }
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

/**
 * Pick one of an insight card's two actions.
 *
 * This one DOES post to the thread, unlike `resolveRun`: One answers with
 * a follow-up question, so there IS something to action afterwards and a
 * conversation is the right place for it. The card keeps the label you
 * chose in place of its buttons, so the thread records the choice once
 * rather than showing it twice.
 */
export function actOnInsight(
  conversationId: string,
  insight: Insight,
  actionIndex: number
) {
  const action = insight.actions[actionIndex]
  if (!action) return
  patchConversation(conversationId, (c) => ({
    ...c,
    thinking: true,
    lastActiveAt: Date.now(),
    insightsActed: { ...c.insightsActed, [insight.id]: action.label },
    messages: [
      ...c.messages,
      { id: `m${nextId++}`, role: "user" as const, content: action.label },
    ],
  }))
  setTimeout(() => {
    streamTurn(
      conversationId,
      [
        ...action.reply.map((content) => ({
          id: `m${nextId++}`,
          role: "assistant" as const,
          content,
        })),
        // A reply that ends in a question gets the agents flow's own
        // clarifying card — quick replies, a confirmation or a day
        // picker, depending on what it asked.
        ...(action.question
          ? [
              {
                id: `m${nextId++}`,
                role: "assistant" as const,
                content: "",
                question: {
                  intentKey: action.question.key,
                  text: action.question.text,
                  options: action.question.options,
                },
              },
            ]
          : []),
      ],
      () => {
        // AFTER the reply, not before: the table changing while One is
        // still mid-sentence reads as two unrelated things happening.
        if (action.focus) setPeopleFocus(action.focus)
      }
    )
  }, THINK_MS)
}

/**
 * One of the insight cards' questions, answered.
 *
 * Shaped like `resolveAgentAnswer` — it RETURNS the turn rather than
 * posting it, so `answerQuestion` keeps being the single place that marks
 * the card answered and echoes the choice as a user turn. Routed by the
 * card's `intentKey`, a string rather than a closure, because the
 * conversation is persisted and a function is not.
 */
function resolveInsightAnswer(
  intentKey: string,
  answer: string
): ChatMessage[] | null {
  const reply = INSIGHT_ANSWERS[intentKey]
  if (!reply) return null
  return reply(answer).map((content) => ({
    id: `m${nextId++}`,
    role: "assistant" as const,
    content,
  }))
}

/**
 * One has never been opened this session — drives the notification dot on
 * the navbar button, the same contract `useClockInPending` has.
 */
export function useOnePending(): boolean {
  return !useConversations().oneSeen
}

/**
 * Brief an AGENT for the first time (Figma 2741:466470): the prompt you
 * typed on the Agents screen becomes the user's turn, and the agent
 * answers with its own copy rather than anything the intent corpus would
 * match. Takes the canvas full-screen, because configuring an agent is
 * the task — not something you do beside another screen.
 *
 * The caller owns creating the agent (see `agents/agentStore`); this only
 * needs its id, name and voice.
 */
export function startAgentConversation(args: {
  agentId: string
  agentName: string
  /** Which scripted thread to play — see `agentThreads`. */
  templateId: string
  prompt: string
}): string {
  const thread = threadFor(args.templateId)
  return createConversation(args.prompt, {
    // "Chief of Staff agent", as the frame's navbar and nav row read.
    title: `${args.agentName} agent`,
    agentId: args.agentId,
    script: {
      reasoning: thread.reasoning,
      reply: thread.reply,
      // The reply's closing question, as a real card: the brief's rule is
      // that the last line asks for the ONE thing the agent needs, and a
      // question you cannot answer is just a flourish.
      question: {
        key: `agent-brief:${args.templateId}`,
        text: thread.question.text,
        options: thread.question.options,
      },
    },
  })
}

/**
 * "New agent" (Figma 2741:465055's toolbar): opens a conversation where
 * One explains how agents work and then asks what you want delegated,
 * instead of sending you back to the templates. The template is chosen by
 * ANSWERING, and this same thread then becomes that agent's thread.
 */
export function startNewAgentConversation(): string {
  return createConversation(NEW_AGENT_PROMPT, {
    title: "New agent",
    script: {
      reasoning: NEW_AGENT_THREAD.reasoning,
      reply: NEW_AGENT_THREAD.reply,
      question: {
        key: "agent-discover",
        text: NEW_AGENT_THREAD.question.text,
        options: [...NEW_AGENT_THREAD.question.options],
      },
    },
  })
}

/** Reuses the existing personal-agent panel and scripted conversation runtime. */
export function startPolicyEditing(): string {
  const current = getPolicyText()
  const id = createConversation("Edit my personal agent memory", {
    title: "Personal agent memory",
    script: {
      reply: [
        `This is your personal agent’s current memory:\n\n${current}`,
        "Write the complete text you want to use instead. In this prototype, your next message will replace the memory text exactly as written and the change will appear on the page.",
      ],
    },
  })
  patchConversation(id, (c) => ({ ...c, policyEditing: true }))
  return id
}

export function resumeWidgetCreation(profile: ProfileId): string | undefined {
  const pending = state.conversations.find(
    (c) =>
      c.widgetCreation?.profile === profile &&
      !c.widgetCreation.completed &&
      !c.widgetCreation.cancelled
  )
  if (!pending) return
  if (
    !pending.thinking &&
    !pending.messages.some(
      (m) => m.question && !m.question.answer && !m.question.skipped
    )
  ) {
    patchConversation(pending.id, (c) => ({
      ...c,
      messages: [
        ...c.messages,
        {
          id: `m${nextId++}`,
          role: "assistant",
          content: "",
          question: widgetQuestion(c.widgetCreation!),
        },
      ],
    }))
  }
  openConversation(pending.id)
  window.dispatchEvent(new Event("home-agent:open"))
  return pending.id
}

/** Widget creation uses the same persisted One conversation and F0 questions. */
export function startWidgetCreation(profile: ProfileId): string {
  const pending = resumeWidgetCreation(profile)
  if (pending) return pending
  const flow: WidgetCreation = { profile, step: 0, answers: [] }
  const question = widgetQuestion(flow)
  const id = createConversation("I want to create a custom widget", {
    title: "New widget",
    script: {
      reply: [
        "Let's define a widget for your home. I'll ask about its content, scope and layout.",
      ],
      question: {
        key: question.intentKey,
        text: question.text,
        options: question.options,
      },
    },
  })
  patchConversation(id, (c) => ({ ...c, widgetCreation: flow }))
  window.dispatchEvent(new Event("home-agent:open"))
  return id
}
function answerWidgetCreation(id: string, answer: string) {
  const c = state.conversations.find((item) => item.id === id)
  const flow = c?.widgetCreation
  if (
    !c ||
    !flow ||
    flow.completed ||
    flow.cancelled ||
    c.thinking ||
    !answer.trim()
  )
    return
  const next = {
    ...flow,
    step: flow.step + 1,
    answers: [...flow.answers, answer.trim()],
  }
  const finished = next.step >= creationSteps.length
  const widgetId = `custom-${id}`
  const widget = finished ? completeWidget(next, widgetId) : undefined
  if (widget) addCustomWidget(flow.profile, widget)
  patchConversation(id, (current) => ({
    ...current,
    thinking: false,
    lastActiveAt: Date.now(),
    widgetCreation: {
      ...next,
      completed: finished,
      ...(finished ? { widgetId } : {}),
    },
    messages: [
      ...current.messages.map((m) =>
        m.question && !m.question.answer && !m.question.skipped
          ? { ...m, question: { ...m.question, answer } }
          : m
      ),
      { id: `m${nextId++}`, role: "user", content: answer.trim() },
      ...(finished
        ? [
            {
              id: `m${nextId++}`,
              role: "assistant" as const,
              content: `“${widget!.title}” is ready and added to your preview. Save your changes to keep it on your home. You can remove it and add it again later.`,
            },
          ]
        : [
            {
              id: `m${nextId++}`,
              role: "assistant" as const,
              content: "",
              question: widgetQuestion(next),
            },
          ]),
    ],
  }))
}

/** Prompt-bar submit on the Home screen → new full-screen conversation. */
export function startConversation(prompt: string): string {
  return createConversation(prompt)
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

/**
 * Prompt-bar submit while a conversation is open → next turn. The panel's
 * own composer passes its conversation explicitly, since the panel is
 * open BESIDE a screen rather than as the active canvas.
 */
export function sendMessage(prompt: string, conversationId?: string) {
  const id = conversationId ?? state.activeId
  if (!id) return
  const current = state.conversations.find((c) => c.id === id)
  if (current?.thinking || current?.streaming) return
  if (
    current?.widgetCreation &&
    !current.widgetCreation.completed &&
    !current.widgetCreation.cancelled
  ) {
    answerWidgetCreation(id, prompt)
    return
  }
  if (
    current?.homeBriefing ||
    (current?.homeSetup && !current.homeSetup.purpose)
  ) {
    startConversation(prompt)
    return
  }
  if (current?.homeSetup?.purpose) {
    answerHomeSetup(id, prompt)
    return
  }
  patchConversation(id, (c) => ({
    ...skipOpenQuestions(c),
    thinking: true,
    lastActiveAt: Date.now(),
    messages: [
      ...skipOpenQuestions(c).messages,
      { id: `m${nextId++}`, role: "user", content: prompt },
    ],
  }))
  if (state.conversations.find((c) => c.id === id)?.policyEditing) {
    const text = prompt.trim()
    if (text) {
      updatePreferences({ policyText: text })
      deliverReply(id, prompt, {
        reply: [
          "Your policy text has been saved. You can see it on the page. Send the complete revised text again if you want to make another change.",
        ],
      })
    }
  } else {
    deliverReply(id, prompt)
  }
}

/**
 * The agent thread's two scripted steps, keyed by the question the user
 * just answered.
 *
 * `agent-brief:<id>` → the four-step plan, then the policy offer.
 * `agent-policy:<id>` → the confirmation, then the run log.
 *
 * The log lands HERE, at the end, rather than being present from the
 * start: the runs are what the agent has done, and showing them before
 * you have agreed how it should work would be a log for a job nobody
 * assigned yet.
 */
function resolveAgentAnswer(
  conversationId: string,
  intentKey: string,
  answer: string
): ChatMessage[] | null {
  const [kind, keyed] = intentKey.split(":")

  // "New agent" opens a DISCOVERY conversation instead of the templates
  // (per Oskar). Answering its one question is what picks the template —
  // and from here the SAME thread becomes that agent's thread, which is
  // why the conversation is retitled and bound rather than replaced.
  if (kind === "agent-discover") {
    const templateId = NEW_AGENT_ROUTES[answer] ?? "chief-of-staff"
    const template = templateById(templateId)
    const agent = createAgent(template)
    const agentThread = threadFor(templateId)
    patchConversation(conversationId, (c) => ({
      ...c,
      title: `${agent.name} agent`,
      agentId: agent.id,
    }))
    return [
      ...agentThread.reply.map((content) => ({
        id: `m${nextId++}`,
        role: "assistant" as const,
        content,
      })),
      {
        id: `m${nextId++}`,
        role: "assistant",
        content: "",
        question: {
          intentKey: `agent-brief:${templateId}`,
          text: agentThread.question.text,
          options: agentThread.question.options,
        },
      },
    ]
  }

  if (kind !== "agent-brief" && kind !== "agent-policy") return null
  const templateId = keyed
  const thread = threadFor(templateId)

  if (kind === "agent-brief") {
    return [
      {
        id: `m${nextId++}`,
        role: "assistant",
        content: `Then that is what I'll optimise for. Here is how I'll work.`,
        plan: thread.plan,
      },
      {
        id: `m${nextId++}`,
        role: "assistant",
        content: "",
        question: {
          intentKey: `agent-policy:${templateId}`,
          text: thread.policyOffer.text,
          options: thread.policyOffer.options,
        },
      },
    ]
  }

  // The policy answer decides what the agent says next, but the log is
  // the same either way — those runs already happened.
  const opening = answer.startsWith("No")
    ? "Understood. I'll ask every time instead of assuming."
    : answer.startsWith("With")
      ? "Fine. Tell me which step to change and I'll hold the rest as it is."
      : "Saved. I'll follow it without asking again, and tell you when something falls outside it."
  const runs = entriesFor(templateId)
  return [
    { id: `m${nextId++}`, role: "assistant", content: opening },
    {
      id: `m${nextId++}`,
      role: "assistant",
      // Derived from the runs themselves — see runSummary.
      content: runSummary(runs),
      runs,
    },
  ]
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
  if (conversation?.widgetCreation) {
    const question = conversation.messages.find(
      (m) => m.id === messageId
    )?.question
    if (question && !question.answer && !question.skipped)
      answerWidgetCreation(conversationId, answer)
    return
  }
  if (conversation?.homeSetup) {
    const pending = conversation.messages.find(
      (m) => m.id === messageId
    )?.question
    if (
      pending &&
      !pending.answer &&
      !pending.skipped &&
      !conversation.thinking
    )
      answerHomeSetup(conversationId, answer)
    return
  }
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
    // Agent threads resolve from their own script, not from the intent
    // corpus: what an agent answers belongs to that agent.
    const agentTurn = resolveAgentAnswer(
      conversationId,
      question.intentKey,
      answer
    )
    if (agentTurn) {
      streamTurn(conversationId, agentTurn, () => {})
      return
    }
    const insightTurn = resolveInsightAnswer(question.intentKey, answer)
    if (insightTurn) {
      streamTurn(conversationId, insightTurn, () => {
        // Confirming has nothing left to show — the 14 rows it filtered
        // to are gone. Cancelling leaves the table as it was.
        if (
          question.intentKey === "insight-deactivate-confirm" &&
          answer.startsWith("Confirm")
        ) {
          setPeopleFocus(null)
        }
      })
      return
    }
    const intent = INTENTS.find((i) => i.key === question.intentKey)
    const contents = intent?.resolve?.(answer) ?? [
      "Noted — I'll take it from here.",
    ]
    streamTurn(
      conversationId,
      contents.map((content) => ({
        id: `m${nextId++}`,
        role: "assistant" as const,
        content,
      })),
      // Side effects land WITH the resolution ("Added…" appears as the
      // preview updates), not when the user clicks Submit.
      () => intent?.onResolve?.(answer)
    )
  }, THINK_MS)
}

/**
 * Acting on a run from the log: your choice lands as your turn and the
 * agent answers in its own words (the reply is written next to the action
 * in `agentThreads`, not generated from the label). The point is that the
 * log is where you resolve things, not just where you read about them.
 */
/**
 * Resolve a blocked run in place.
 *
 * The label lands FIRST, on its own: the run stops waiting on you the
 * instant you choose, whatever the agent is still doing about it, and the
 * card's tag flips immediately rather than sitting on a stale "Needs you"
 * until the reply arrives. The reply and the learned rule follow.
 *
 * Note what this does NOT do: no `thinking` flag (that drives the
 * conversation-level spinner, and this work belongs to one card) and no
 * messages (see `RunResolution`).
 */
export function resolveRun(
  conversationId: string,
  runAt: string,
  action: { label: string; reply: string; learned?: string }
) {
  patchConversation(conversationId, (c) => ({
    ...c,
    lastActiveAt: Date.now(),
    resolutions: { ...c.resolutions, [runAt]: { label: action.label } },
  }))
  setTimeout(() => {
    patchConversation(conversationId, (c) => ({
      ...c,
      resolutions: {
        ...c.resolutions,
        [runAt]: {
          label: action.label,
          reply: action.reply,
          learned: action.learned,
        },
      },
    }))
  }, THINK_MS)
}

/** Dismiss the clarifying panel (Esc / Cancel / ×) without answering. */
export function skipQuestion(conversationId: string, messageId: string) {
  patchConversation(conversationId, (c) => ({
    ...c,
    ...(c.homeSetup ? { homeSetup: { ...c.homeSetup, paused: true } } : {}),
    ...(c.widgetCreation
      ? { widgetCreation: { ...c.widgetCreation, cancelled: true } }
      : {}),
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
  // A dangling activeId (e.g. a just-deleted conversation) would blank the
  // canvas AND misroute the next prompt into sendMessage — ignore it.
  if (!state.conversations.some((c) => c.id === id)) return
  emit({
    activeId: id,
    oneSeen: state.oneSeen,
    // Recents opens into the CANVAS — the panel belongs to the screen that
    // spawned it, so it goes with the navigation.
    conversations: state.conversations.map((c) =>
      c.id === id ? { ...c, lastActiveAt: Date.now() } : c
    ),
  })
}

/** Back to the Home canvas; the conversation stays in Recents. The split
 *  panel goes too — the nav is navigating away from the screen it belongs
 *  to. */
export function goHome() {
  emit({
    ...state,
    activeId: null,
    conversations: state.conversations.map((c) =>
      c.id === state.activeId && c.homeSetup
        ? { ...c, homeSetup: { ...c.homeSetup, paused: true } }
        : c
    ),
  })
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
    oneSeen: state.oneSeen,
    activeId: state.activeId === id ? null : state.activeId,
  })
}

/**
 * Drop every thread belonging to an agent — called when that agent is
 * deleted (see `agents/agentStore`). Without it the conversations would
 * be orphaned AND unreachable: Recents filters agent threads out and the
 * nav panel's Agents group only lists agents that still exist.
 */
export function deleteConversationsForAgent(agentId: string) {
  const doomed = new Set(
    state.conversations.filter((c) => c.agentId === agentId).map((c) => c.id)
  )
  if (doomed.size === 0) return
  emit({
    conversations: state.conversations.filter((c) => !doomed.has(c.id)),
    oneSeen: state.oneSeen,
    activeId:
      state.activeId && doomed.has(state.activeId) ? null : state.activeId,
  })
}

/** "Clear recents" from the sliders menu — wipes the whole section. */
export function clearConversations() {
  emit({
    conversations: [],
    activeId: null,
    oneSeen: false,
  })
}

// Home setup uses the original persisted conversations and original composer.
// There is no parallel transcript, model runner, or real action integration.
function homeQuestion(setup: HomeSetup): ChatMessage {
  const question = questionFor(setup)
  return {
    id: `m${nextId++}`,
    role: "assistant",
    content: "",
    question: {
      intentKey: `home:${setup.step}`,
      ...question,
      selectedOptions:
        setup.step === "widgets"
          ? WIDGET_CHOICES.filter((w) =>
              readWidgets(setup.profile).includes(w.id)
            ).map((w) => w.label)
          : setup.step === "priorities"
            ? (setup.focuses ?? []).map((f) =>
                f === "team"
                  ? "My team and their requests"
                  : f === "recruitment"
                    ? "Hiring"
                    : "My personal tasks"
              )
            : undefined,
    },
  }
}
export function homeSetupFor(profile: ProfileId): Conversation | undefined {
  return state.conversations.find(
    (c) => c.homeSetup?.profile === profile && !c.homeSetup.purpose
  )
}
export function resumeHomeSetup(profile: ProfileId) {
  const existing = homeSetupFor(profile)
  if (existing) {
    const setup: HomeSetup = {
      ...existing.homeSetup!,
      experienceVersion: HOME_EXPERIENCE_VERSION,
      step: "edit",
      paused: false,
    }
    patchConversation(existing.id, (c) => ({
      ...c,
      homeSetup: setup,
      homeBriefing: profile,
      lastActiveAt: Date.now(),
      messages: [
        ...c.messages.map((m) =>
          m.question && !m.question.answer
            ? { ...m, question: { ...m.question, skipped: true } }
            : m
        ),
        {
          id: `m${nextId++}`,
          role: "assistant",
          content:
            "Let's adjust your home. Your previous choices and drafts are saved.",
        },
        homeQuestion(setup),
      ],
    }))
    openConversation(existing.id)
    return
  }
  const setup = initialSetup(profile)
  const id = `c${nextId++}`
  const conversation: Conversation = {
    id,
    title: "Personalise my home",
    thinking: false,
    lastActiveAt: Date.now(),
    homeSetup: setup,
    homeBriefing: profile,
    messages: [
      {
        id: `m${nextId++}`,
        role: "assistant",
        content: `Hi ${PROFILE_PEOPLE[profile].firstName}, I’m your personal agent. Let’s keep what matters handy and explore what I can automate for you.`,
      },
      homeQuestion(setup),
    ],
  }
  emit({
    ...state,
    activeId: id,
    conversations: [conversation, ...state.conversations],
  })
}
export function startHomeWorkflow(
  profile: ProfileId,
  purpose: "routine" | "report"
) {
  const setup: HomeSetup = {
    ...initialSetup(profile),
    purpose,
    step: purpose === "routine" ? "routines" : "reports",
  }
  const id = `c${nextId++}`
  emit({
    ...state,
    activeId: id,
    conversations: [
      {
        id,
        title: purpose === "routine" ? "Create a routine" : "Create a report",
        thinking: false,
        lastActiveAt: Date.now(),
        homeSetup: setup,
        messages: [
          {
            id: `m${nextId++}`,
            role: "assistant",
            content:
              purpose === "routine"
                ? "Let's draft a routine together. You'll review its conditions before saving. Nothing will run in this prototype."
                : "Let's build a report together. We'll review its data and alert rule before saving.",
          },
          homeQuestion(setup),
        ],
      },
      ...state.conversations,
    ],
  })
}
export function pauseHomeSetup(id: string) {
  patchConversation(id, (c) => ({
    ...c,
    homeSetup: c.homeSetup ? { ...c.homeSetup, paused: true } : undefined,
  }))
  goHome()
}
function answerHomeSetup(id: string, answer: string) {
  const conversation = state.conversations.find((c) => c.id === id)
  const setup = conversation?.homeSetup
  if (!setup || conversation.thinking || conversation.streaming) return
  if (
    !setup.purpose &&
    (setup.step === "widgets" || /widget/.test(normalize(answer)))
  ) {
    patchConversation(id, (c) => ({
      ...skipOpenQuestions(c),
      homeSetup: { ...setup, step: "complete", paused: true },
      messages: [
        ...skipOpenQuestions(c).messages,
        {
          id: `m${nextId++}`,
          role: "assistant",
          content:
            "Use Edit widgets below your widgets to manage your personal layout and employee defaults.",
        },
      ],
    }))
    return
  }
  if (
    /^(exit|save and exit|pause|stop|salir|guardar y salir|lo dejamos|mas tarde)$/.test(
      normalize(answer)
    )
  ) {
    patchConversation(id, (c) => ({
      ...c,
      messages: [
        ...c.messages,
        { id: `m${nextId++}`, role: "user", content: answer },
      ],
    }))
    pauseHomeSetup(id)
    return
  }
  if (/back to my home|volver a mi home/.test(normalize(answer))) {
    goHome()
    return
  }
  if (
    !setup.purpose &&
    /^(my |create a )?(routines?|reports?)$/.test(normalize(answer))
  ) {
    patchConversation(id, (c) => ({
      ...c,
      homeSetup: { ...setup, paused: true },
    }))
    startHomeWorkflow(
      setup.profile,
      /routine/.test(normalize(answer)) ? "routine" : "report"
    )
    return
  }
  if (!setup.purpose && /undo widget/.test(normalize(answer))) {
    refreshHome(setup.profile)
    undoWidgets(setup.profile)
    patchConversation(id, (c) => ({
      ...c,
      messages: [
        ...skipOpenQuestions(c).messages,
        {
          id: `m${nextId++}`,
          role: "assistant",
          content:
            "Restored your previous widgets. What would you like to do next?",
        },
        homeQuestion(setup),
      ],
    }))
    return
  }
  const result = advanceSetup(
    setup,
    setup.step === "widgets" &&
      !/remove|hide|only|undo|keep|continue|done|save/.test(normalize(answer))
      ? `Only ${answer}`
      : answer,
    readWidgets(setup.profile)
  )
  if (
    !setup.purpose &&
    (result.widgets || result.artifact?.kind === "briefing")
  )
    refreshHome(setup.profile)
  if (result.widgets) changeWidgets(setup.profile, result.widgets)
  if (result.undo && !undoWidgets(setup.profile))
    result.content = "There are no widget changes to undo yet."
  // Commit the full logical turn atomically. Closing/reloading cannot lose
  // the new agreement or leave a permanently unanswered pending spinner.
  patchConversation(id, (c) => ({
    ...c,
    homeSetup: result.setup,
    title:
      c.homeBriefing && c.title.startsWith("Your updates")
        ? "Personalise my home"
        : c.title,
    lastActiveAt: Date.now(),
    messages: [
      ...c.messages.map((m) =>
        m.question && !m.question.answer && !m.question.skipped
          ? { ...m, question: { ...m.question, answer } }
          : m
      ),
      { id: `m${nextId++}`, role: "user", content: answer },
      {
        id: `m${nextId++}`,
        role: "assistant",
        content: result.content,
        homeArtifact: result.artifact,
      },
      homeQuestion(result.setup),
    ],
  }))
}
export function enterHome(profile: ProfileId) {
  const active = state.conversations.find((c) => c.id === state.activeId)
  if (active) {
    const owner = active.homeSetup?.profile ?? active.homeBriefing
    if (!owner || owner === profile) {
      // Refresh persisted pending question options when this prototype changes.
      if (active.homeSetup && !active.homeSetup.paused) {
        const pending = [...active.messages]
          .reverse()
          .find((m) => m.question && !m.question.answer && !m.question.skipped)
        const updated = homeQuestion(active.homeSetup).question!
        if (
          pending &&
          JSON.stringify(pending.question) !== JSON.stringify(updated)
        )
          patchConversation(active.id, (c) => ({
            ...c,
            messages: c.messages.map((m) =>
              m.id === pending.id ? { ...m, question: updated } : m
            ),
          }))
      }
      return
    }
  }
  const previous = homeSetupFor(profile)
  const saved = previous?.homeSetup
  const firstInterview =
    !saved || saved.experienceVersion !== HOME_EXPERIENCE_VERSION
  // An interrupted, unanswered interview resumes its original conversation.
  if (
    !firstInterview &&
    saved &&
    !saved.paused &&
    saved.step !== "complete" &&
    previous
  ) {
    openConversation(previous.id)
    return
  }
  const setup: HomeSetup = firstInterview
    ? {
        ...(saved ?? initialSetup(profile)),
        experienceVersion: HOME_EXPERIENCE_VERSION,
        step: "priorities",
        paused: false,
      }
    : saved!
  const id = `c${nextId++}`
  const conversation: Conversation = {
    id,
    title: `Your updates · ${new Date().toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}`,
    homeBriefing: profile,
    thinking: false,
    lastActiveAt: Date.now(),
    ...(firstInterview
      ? {
          homeSetup: {
            ...setup,
            step: "priorities" as const,
            paused: false,
          },
        }
      : {}),
    messages: [
      {
        id: `m${nextId++}`,
        role: "assistant",
        content: "",
        homeArtifact: {
          kind: "briefing",
          focus: setup.focus,
          focuses: setup.focuses,
          profile,
        },
      },
      ...(firstInterview
        ? [
            {
              id: `m${nextId++}`,
              role: "assistant" as const,
              content: `Hi ${PROFILE_PEOPLE[profile].firstName}, I'm your personal agent. I've put together a starting point for your home. Let's make it useful for you.`,
            },
            homeQuestion(setup),
          ]
        : []),
    ],
  }
  emit({
    ...state,
    activeId: id,
    conversations: [conversation, ...state.conversations],
  })
}
