import { F0Button, F0Icon, F0Text } from "@factorialco/f0-react"
import { Sparkles, Upload } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import { useAiChat } from "@/copilot"

import {
  applyInterviewAnswers,
  type ApplyInterviewDeps,
  type InterviewAnswers,
} from "../data/applyInterviewAnswers"

/**
 * Agent-less interview for the demo build (the Vercel deploy has no Mastra
 * agent — see lib/demoMode). It reproduces the real flow without the chat
 * runtime:
 *
 *  1. A frontend welcome overlay (One blurb + drop zone + "I don't have
 *     documents to upload") — the transcript can't be seeded offline, so
 *     this is rendered directly.
 *  2. The REAL platform clarifying-question panel, driven by
 *     `useAiChat().setClarifyingQuestion`. That panel is a pure view of
 *     provider state (it renders in the composer area independent of the
 *     message transcript / agent connection), so we get the genuine
 *     component — pixel-perfect — with no agent.
 *  3. On submit, the same deterministic `applyInterviewAnswers` the real
 *     path uses, then `onComplete` runs the generating → editor transition.
 *
 * Mounted only when `isDemoMode()` AND the setup phase is "interview".
 */

type StepDef = {
  /** Which InterviewAnswers field this step fills. */
  field: keyof InterviewAnswers
  question: string
  selectionMode: "single" | "multiple"
  options: { id: string; label: string }[]
}

// Mirrors the skill's 5 interview steps verbatim (text + option ids/labels).
const STEPS: StepDef[] = [
  {
    field: "expenseKinds",
    question: "Which kinds of expenses does your team submit most?",
    selectionMode: "multiple",
    options: [
      { id: "meals", label: "Meals" },
      { id: "travel", label: "Travel" },
      { id: "per-diems", label: "Per diems (daily allowance)" },
      { id: "office-supplies", label: "Office supplies" },
      { id: "software", label: "Software & subscriptions" },
      { id: "training", label: "Training" },
    ],
  },
  {
    field: "recordedFields",
    question: "What should employees record on each expense?",
    selectionMode: "multiple",
    options: [
      { id: "nothing-extra", label: "Just the basics (amount, date, category & receipt)" },
      { id: "project", label: "Project" },
      { id: "cost-center", label: "Cost center" },
      { id: "description", label: "Description" },
      { id: "internal-reference", label: "Internal reference" },
    ],
  },
  {
    field: "paymentMethod",
    question: "How do people pay for expenses?",
    selectionMode: "single",
    options: [
      { id: "personal-cards", label: "Personal cards (reimbursed)" },
      { id: "company-cards", label: "Company cards" },
      { id: "mix", label: "A mix of both" },
      { id: "cash-advance", label: "Cash advances" },
    ],
  },
  {
    field: "approvalPosture",
    question: "How should expenses be approved by default?",
    selectionMode: "single",
    options: [
      { id: "manager-all", label: "Manager approves everything" },
      { id: "manager-finance", label: "Manager approves, then finance reviews" },
      { id: "auto-small", label: "Auto-approve small amounts; manager for the rest" },
      { id: "finance-all", label: "Everything goes to finance" },
    ],
  },
  {
    field: "spendControl",
    question: "What can people spend on meals & travel?",
    selectionMode: "single",
    options: [
      { id: "limits", label: "Set spending limits" },
      { id: "per-diems", label: "Daily allowances (per diems)" },
      { id: "per-diem-travel-cap-meals", label: "Per diems for travel, limits for meals" },
      { id: "case-by-case", label: "No fixed limits — reviewed case by case" },
    ],
  },
]

type StepAnswer = { selected: string[]; customText: string; customActive: boolean }
const blankAnswer = (): StepAnswer => ({
  selected: [],
  customText: "",
  customActive: false,
})

export function DemoInterview(props: {
  deps: ApplyInterviewDeps
  onComplete: () => void
}) {
  const { setClarifyingQuestion } = useAiChat()
  const [phase, setPhase] = useState<"welcome" | "questions">("welcome")
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<StepAnswer[]>(() =>
    STEPS.map(blankAnswer)
  )

  const finalize = (final: StepAnswer[]) => {
    const payload: InterviewAnswers = {
      expenseKinds: final[0]!.selected.join(","),
      recordedFields: final[1]!.selected.join(","),
      paymentMethod: final[2]!.selected[0],
      approvalPosture: final[3]!.selected[0],
      spendControl: final[4]!.selected[0],
    }
    applyInterviewAnswers(payload, props.deps)
    setClarifyingQuestion(null)
    props.onComplete()
  }

  // Drive the real clarifying panel from our state. Rebuilt every render so
  // the panel always reflects the latest selection; cleared on unmount.
  useEffect(() => {
    if (phase !== "questions") return
    const def = STEPS[stepIndex]!
    const ans = answers[stepIndex]!

    const update = (next: Partial<StepAnswer>) =>
      setAnswers((prev) =>
        prev.map((a, i) => (i === stepIndex ? { ...a, ...next } : a))
      )

    setClarifyingQuestion({
      currentStepIndex: stepIndex,
      totalSteps: STEPS.length,
      currentStep: {
        question: def.question,
        options: def.options,
        selectionMode: def.selectionMode,
        optional: false,
        allowCustomAnswer: true,
        selectedOptionIds: ans.selected,
        customAnswerText: ans.customText,
        isCustomAnswerActive: ans.customActive,
      },
      toggleOption: (optionId: string) => {
        if (def.selectionMode === "single") {
          update({ selected: [optionId], customActive: false })
        } else {
          setAnswers((prev) =>
            prev.map((a, i) => {
              if (i !== stepIndex) return a
              const has = a.selected.includes(optionId)
              return {
                ...a,
                selected: has
                  ? a.selected.filter((x) => x !== optionId)
                  : [...a.selected, optionId],
              }
            })
          )
        }
      },
      confirm: () => {
        if (stepIndex >= STEPS.length - 1) {
          finalize(answers)
        } else {
          setStepIndex((i) => Math.min(i + 1, STEPS.length - 1))
        }
      },
      back: () => {
        if (stepIndex === 0) {
          setClarifyingQuestion(null)
          setPhase("welcome")
        } else {
          setStepIndex((i) => Math.max(i - 1, 0))
        }
      },
      skip: () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1)),
      cancel: () => {
        setClarifyingQuestion(null)
        setPhase("welcome")
      },
      setCustomAnswerText: (text: string) => update({ customText: text }),
      setCustomAnswerActive: (active: boolean) =>
        update({ customActive: active }),
      activateCustomAnswer: () =>
        update({
          customActive: true,
          ...(def.selectionMode === "single" ? { selected: [] } : {}),
        }),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, stepIndex, answers])

  // Clear the panel if this component unmounts (e.g. transition to editor).
  useEffect(() => {
    return () => setClarifyingQuestion(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase !== "welcome") return null

  // Welcome overlay — covers the fullscreen chat canvas. One blurb + the
  // (visual-only) drop zone + the kickoff button, matching the real
  // interview-welcome widget.
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 640,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 4,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background:
                "conic-gradient(from 180deg, #E55619, #E51943, #A1ADE5, #E55619)",
            }}
            aria-hidden
          />
          <F0Text variant="body" content="One" />
        </div>
        <F0Text
          variant="body"
          content="Welcome to Expenses setup 🚀 — this takes about 5 minutes. First, a couple of quick questions. Then I'll build a starter setup you can review and refine. If you have an existing expenses document, upload it — I'll extract your rules so you don't start from scratch."
        />
        <div
          style={{
            border: "1.5px dashed #cdd2da",
            borderRadius: 14,
            padding: "44px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            color: "#6b7280",
            background: "#fff",
            userSelect: "none",
          }}
          aria-hidden
        >
          <F0Icon icon={Upload} size="md" />
          <F0Text variant="body" color="muted" content="Drag and drop or click here" />
        </div>
        <div>
          <F0Button
            variant="outline"
            size="md"
            label="I don't have documents to upload"
            icon={Sparkles}
            onClick={() => {
              setStepIndex(0)
              setPhase("questions")
            }}
          />
        </div>
      </div>
    </div>
  )
}
