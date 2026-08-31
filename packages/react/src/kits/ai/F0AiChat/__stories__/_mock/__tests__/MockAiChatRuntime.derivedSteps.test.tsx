import { act, renderHook } from "@testing-library/react"
import type { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { TestProviders } from "@/testing/test-utils"

import type { ClarifyingStep } from "../MockAiChatRuntime"
import {
  MockAiChatRuntimeProvider,
  useMockAiChatRuntime,
} from "../MockAiChatRuntime"

const wrapper = ({ children }: { children: ReactNode }) => (
  <TestProviders>
    <MockAiChatRuntimeProvider>{children}</MockAiChatRuntimeProvider>
  </TestProviders>
)

const TYPES = [
  { id: "satisfaction", label: "Satisfaction" },
  { id: "knowledge", label: "Knowledge Test" },
]

// Templates offered per type — disjoint, so changing the type strands whatever
// was picked under the previous one.
const TEMPLATES: Record<string, { id: string; label: string }[]> = {
  satisfaction: [
    { id: "template:course-satisfaction", label: "Course satisfaction" },
  ],
  knowledge: [{ id: "template:course-knowledge", label: "Course knowledge" }],
}

const entryOptions = (typeId?: string) => [
  { id: "empty-survey", label: "Empty Survey" },
  { id: "use-template", label: "Use a Template" },
  ...(typeId ? (TEMPLATES[typeId] ?? []) : []),
]

/** Type, then entry action scoped to it — the Triage flow's shape. */
const twoStep = (): ClarifyingStep[] => [
  { question: "What kind?", options: TYPES, selectionMode: "single" },
  {
    question: "How would you like to start?",
    options: (previousAnswerIdsByStep) =>
      entryOptions(previousAnswerIdsByStep[0]?.[0]),
    selectionMode: "single",
  },
]

/**
 * A step whose options are derived from an earlier answer can be re-derived out
 * from under a selection the user already made: going back and changing that
 * answer replaces the list. The runtime drops ids the current options no longer
 * contain, so the panel never shows an enabled Submit with nothing highlighted
 * and never resolves to an option that isn't on screen.
 */
describe("MockAiChatRuntime — derived clarifying steps", () => {
  const start = (steps: ClarifyingStep[], onConfirm = vi.fn()) => {
    const { result } = renderHook(useMockAiChatRuntime, { wrapper })
    act(() => {
      result.current.startClarifying({ steps, onConfirm })
    })
    return { result, onConfirm }
  }

  const pick = (
    result: { current: ReturnType<typeof useMockAiChatRuntime> },
    optionId: string
  ) => act(() => result.current.clarifyingQuestion!.toggleOption(optionId))

  const advance = (result: {
    current: ReturnType<typeof useMockAiChatRuntime>
  }) => act(() => result.current.clarifyingQuestion!.confirm())

  const back = (result: { current: ReturnType<typeof useMockAiChatRuntime> }) =>
    act(() => result.current.clarifyingQuestion!.back())

  it("derives the second step from the first answer", () => {
    const { result } = start(twoStep())

    pick(result, "satisfaction")
    advance(result)

    expect(
      result.current.clarifyingQuestion!.currentStep.options.map((o) => o.id)
    ).toEqual(["empty-survey", "use-template", "template:course-satisfaction"])
  })

  it("re-derives it when the first answer changes", () => {
    const { result } = start(twoStep())

    pick(result, "satisfaction")
    advance(result)
    back(result)
    pick(result, "knowledge")
    advance(result)

    expect(
      result.current.clarifyingQuestion!.currentStep.options.map((o) => o.id)
    ).toEqual(["empty-survey", "use-template", "template:course-knowledge"])
  })

  it("drops a selection the re-derived options no longer offer", () => {
    const { result } = start(twoStep())

    pick(result, "satisfaction")
    advance(result)
    // Picked under Satisfaction, and offered only under Satisfaction.
    pick(result, "template:course-satisfaction")
    expect(
      result.current.clarifyingQuestion!.currentStep.selectedOptionIds
    ).toEqual(["template:course-satisfaction"])

    back(result)
    pick(result, "knowledge")
    advance(result)

    // Nothing highlighted, so the panel's own `canProceed` keeps Submit
    // blocked rather than resolving an option that is not on screen.
    expect(
      result.current.clarifyingQuestion!.currentStep.selectedOptionIds
    ).toEqual([])
  })

  it("resolves only what the user could still see selected", () => {
    const onConfirm = vi.fn()
    const { result } = start(twoStep(), onConfirm)

    pick(result, "satisfaction")
    advance(result)
    pick(result, "template:course-satisfaction")
    back(result)
    pick(result, "knowledge")
    advance(result)
    // Re-pick within the new scope, then submit.
    pick(result, "use-template")
    advance(result)

    // The stranded Satisfaction template must not reappear in the answers just
    // because it is still in the stored interaction map.
    expect(onConfirm).toHaveBeenCalledWith(
      [["Knowledge Test"], ["Use a Template"]],
      [["knowledge"], ["use-template"]]
    )
  })

  it("does not carry a stranded id into the next derivation", () => {
    // Three chained steps: step 3 derives from step 2. If step 2's stranded id
    // were passed on raw, step 3 would be built from an answer the user can no
    // longer see selected.
    const seenByThirdStep: string[][][] = []
    const steps: ClarifyingStep[] = [
      { question: "What kind?", options: TYPES, selectionMode: "single" },
      {
        question: "How would you like to start?",
        options: (previous) => entryOptions(previous[0]?.[0]),
        selectionMode: "single",
      },
      {
        question: "Anything else?",
        options: (previous) => {
          seenByThirdStep.push(previous.map((ids) => [...ids]))
          return [{ id: "no", label: "No" }]
        },
        selectionMode: "single",
      },
    ]

    const { result } = start(steps)

    pick(result, "satisfaction")
    advance(result)
    pick(result, "template:course-satisfaction")
    back(result)
    pick(result, "knowledge")

    // Step 2's stored id is now stranded. Whatever step 3 was last derived
    // from, it must not include it.
    const lastSeen = seenByThirdStep.at(-1)!
    expect(lastSeen[1]).not.toContain("template:course-satisfaction")
    expect(lastSeen[1]).toEqual([])
  })
})
