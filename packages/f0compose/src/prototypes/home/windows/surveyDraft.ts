import { useSyncExternalStore } from "react"

/**
 * The survey draft shown in the Preview window, modeled after f0 main's
 * SurveyFormBuilder data shape (our branch predates kits/surveys, so the
 * cards are replicated locally — swap for the real kit on rebase).
 *
 * ALL questions live here so every card is interactive: edit title and
 * description, toggle required, duplicate, delete. Answering the
 * conversation's clarifying question stages new questions in: a
 * placeholder slot ("Adding a new question…", Figma 1356:14761) holds
 * the spot for a beat, then the question streams in.
 *
 * Module store for the same reason as conversationStore: the window and
 * the conversation are wired from different React trees.
 */

export type SurveyQuestionType = "rating" | "multi-select" | "text"

export type SurveyQuestion = {
  id: string
  type: SurveyQuestionType
  title: string
  description?: string
  required?: boolean
  options?: string[]
  /** Set while the question streams in right after One adds it. */
  justAdded?: boolean
}

export type SurveyDraftState = {
  questions: SurveyQuestion[]
  /** Index where the "Adding a new question…" placeholder sits, if any. */
  addingAt: number | null
}

/** How long the placeholder shimmers before the question streams in. */
const ADDING_MS = 1100
/** Small beat between consecutive adds ("Both" adds two). */
const BETWEEN_ADDS_MS = 400

const STORAGE_KEY = "f0compose:home:survey-draft"

const BASE_QUESTIONS: SurveyQuestion[] = [
  {
    id: "overall-satisfaction",
    type: "rating",
    title: "How satisfied are you with your overall experience at the company?",
    description: "1 = No satisfied, 5 = Very satisfied",
    required: true,
  },
  {
    id: "manager-support",
    type: "rating",
    title: "How supported do you feel by your manager?",
    description: "1 = No supported, 5 = Very supported",
    required: true,
  },
  {
    id: "advocacy",
    type: "rating",
    title: "How likely are you to recommend the company as a place to work?",
    description: "1 = No recommended, 5 = Very recommended",
    required: true,
  },
  {
    id: "engagement-drivers",
    type: "multi-select",
    title: "What most strengthens your engagement at work?",
    description:
      "Choose the factor that has the greatest positive impact on your engagement.",
    options: [
      "Meaningful work",
      "Manager support",
      "Growth opportunities",
      "Team collaboration",
      "Recognition",
    ],
  },
  {
    id: "improvement-areas",
    type: "multi-select",
    title: "What would most improve your experience at work?",
    description: "Choose the area you'd focus on first.",
    options: [
      "Communication",
      "Career growth",
      "Compensation and benefits",
      "Work-life balance",
      "Tools and processes",
    ],
  },
  {
    id: "open-feedback",
    type: "text",
    title: "Anything else you'd like to share?",
    description: "Your feedback stays anonymous.",
  },
]

function load(): SurveyQuestion[] {
  if (typeof window === "undefined") return BASE_QUESTIONS
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return BASE_QUESTIONS
    const parsed = JSON.parse(raw) as SurveyQuestion[]
    // Entrance flags never survive a reload.
    return parsed.map((q) => ({ ...q, justAdded: undefined }))
  } catch {
    return BASE_QUESTIONS
  }
}

let state: SurveyDraftState = { questions: load(), addingAt: null }
const listeners = new Set<() => void>()

function emit(next: SurveyDraftState) {
  state = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.questions))
  } catch {
    // Persistence is best-effort.
  }
  listeners.forEach((listener) => listener())
}

export function useSurveyDraft(): SurveyDraftState {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => state
  )
}

/* ── Builder card actions (SurveyFormBuilder-style) ────────────────── */

export function updateQuestion(id: string, patch: Partial<SurveyQuestion>) {
  emit({
    ...state,
    questions: state.questions.map((q) =>
      q.id === id ? { ...q, ...patch } : q
    ),
  })
}

export function duplicateQuestion(id: string) {
  const index = state.questions.findIndex((q) => q.id === id)
  if (index < 0) return
  const original = state.questions[index]
  const copy = {
    ...original,
    id: `${original.id}-copy-${Date.now() % 100000}`,
    justAdded: undefined,
  }
  const questions = [...state.questions]
  questions.splice(index + 1, 0, copy)
  emit({ ...state, questions })
}

export function deleteQuestion(id: string) {
  emit({
    ...state,
    questions: state.questions.filter((q) => q.id !== id),
  })
}

/* ── One-driven staged adds ─────────────────────────────────────────── */

/** New rating questions land right after the last rating question. */
function insertIndex(): number {
  const last = state.questions.reduce(
    (acc, q, i) => (q.type === "rating" ? i : acc),
    -1
  )
  return last + 1
}

/**
 * Stage questions in one at a time: placeholder shimmers for a beat
 * (Figma 1356:14761), then the question streams in where it sat.
 */
export function addSurveyQuestions(questions: SurveyQuestion[]) {
  const fresh = questions.filter(
    (q) => !state.questions.some((existing) => existing.id === q.id)
  )
  const step = (remaining: SurveyQuestion[]) => {
    if (!remaining.length) return
    const [next, ...rest] = remaining
    emit({ ...state, addingAt: insertIndex() })
    setTimeout(() => {
      const questions = [...state.questions]
      questions.splice(state.addingAt ?? questions.length, 0, {
        ...next,
        justAdded: true,
      })
      emit({ questions, addingAt: null })
      setTimeout(() => step(rest), BETWEEN_ADDS_MS)
    }, ADDING_MS)
  }
  step(fresh)
}

/** A newly created survey always starts back at the base questions. */
export function resetSurveyDraft() {
  emit({ questions: BASE_QUESTIONS, addingAt: null })
}
