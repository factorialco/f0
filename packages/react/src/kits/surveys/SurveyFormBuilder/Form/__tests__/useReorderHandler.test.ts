import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { SurveyFormBuilderElement } from "../../types"
import { useReorderHandler } from "../useReorderHandler"
import { FlatFormItem, flattenElements } from "../utils"

// --- Fixtures ---

const makeSection = (
  id: string,
  questions: string[],
  locked = false
): SurveyFormBuilderElement => ({
  type: "section",
  section: {
    id,
    title: id,
    questions: questions.map((qId) => ({
      id: qId,
      title: qId,
      type: "text" as const,
    })),
    locked,
  },
})

const question = (id: string): FlatFormItem => ({
  type: "question",
  id: `question-${id}`,
  question: { id, title: id, type: "text" },
})

const header = (id: string, locked = false): FlatFormItem => ({
  type: "section-header",
  id: `section-header-${id}`,
  section: { id, title: id, locked },
})

const standalone = (id: string): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title: id, type: "text" },
})

function setup(elements: SurveyFormBuilderElement[]) {
  const onChange = vi.fn()
  const flatItems = flattenElements(elements)
  const { result } = renderHook(() =>
    useReorderHandler({ flatItems, onChange })
  )
  return { onChange, reorder: result.current.handleFlatReorder }
}

describe("useReorderHandler — locked sections", () => {
  it("rejects dropping a question from another section into a locked section", () => {
    const { onChange, reorder } = setup([
      makeSection("locked", ["q1"], true),
      makeSection("open", ["q2"]),
    ])

    // Simulate dragging q2 (from the open section) into the locked section.
    act(() => {
      reorder([
        header("locked", true),
        question("q1"),
        question("q2"),
        header("open"),
      ])
    })

    // The move must be rejected — onChange is never called, so the controlled
    // list snaps the dragged question back to its origin.
    expect(onChange).not.toHaveBeenCalled()
  })

  it("keeps a standalone question out of a locked section when dropped at its edge", () => {
    const { onChange, reorder } = setup([
      makeSection("locked", ["q1"], true),
      standalone("q2"),
    ])

    act(() => {
      reorder([header("locked", true), question("q1"), question("q2")])
    })

    // The standalone can't join the frozen section; it settles just after it.
    expect(onChange).toHaveBeenCalledTimes(1)
    const result = onChange.mock.calls[0][0] as SurveyFormBuilderElement[]
    const locked = result.find(
      (el): el is Extract<SurveyFormBuilderElement, { type: "section" }> =>
        el.type === "section" && el.section.id === "locked"
    )
    expect(locked?.section.questions?.map((q) => q.id)).toEqual(["q1"])
    expect(
      result.some((el) => el.type === "question" && el.question.id === "q2")
    ).toBe(true)
  })

  it("allows sorting standalone siblings around a locked section", () => {
    // Regression: a locked section must not freeze its *siblings*. Items that
    // live outside it (including standalone questions that follow it) stay
    // freely sortable.
    const { onChange, reorder } = setup([
      standalone("a"),
      makeSection("locked", ["q1"], true),
      standalone("b"),
    ])

    // Drag "a" past the locked section to the very end.
    act(() => {
      reorder([
        header("locked", true),
        question("q1"),
        question("b"),
        question("a"),
      ])
    })

    expect(onChange).toHaveBeenCalledTimes(1)
    const result = onChange.mock.calls[0][0] as SurveyFormBuilderElement[]
    // Locked section untouched; the two siblings reorder around it.
    expect(
      result.map((el) =>
        el.type === "section" ? `section:${el.section.id}` : el.question.id
      )
    ).toEqual(["section:locked", "b", "a"])
    const locked = result.find(
      (el): el is Extract<SurveyFormBuilderElement, { type: "section" }> =>
        el.type === "section" && el.section.id === "locked"
    )
    expect(locked?.section.questions?.map((q) => q.id)).toEqual(["q1"])
  })

  it("allows a cross-section move between unlocked sections when a locked section exists", () => {
    const { onChange, reorder } = setup([
      makeSection("locked", ["q1"], true),
      makeSection("a", ["q2a", "q2b"]),
      makeSection("b", ["q3"]),
    ])

    // Move q2b from section "a" into the unlocked section "b".
    act(() => {
      reorder([
        header("locked", true),
        question("q1"),
        header("a"),
        question("q2a"),
        header("b"),
        question("q3"),
        question("q2b"),
      ])
    })

    expect(onChange).toHaveBeenCalledTimes(1)
    const result = onChange.mock.calls[0][0] as SurveyFormBuilderElement[]
    const sectionB = result.find(
      (el): el is Extract<SurveyFormBuilderElement, { type: "section" }> =>
        el.type === "section" && el.section.id === "b"
    )
    expect(sectionB?.section.questions?.map((q) => q.id)).toEqual(["q3", "q2b"])
  })

  it("allows reordering questions within an unlocked section", () => {
    const { onChange, reorder } = setup([makeSection("open", ["q1", "q2"])])

    // Swap q1 and q2 within the same unlocked section.
    act(() => {
      reorder([header("open"), question("q2"), question("q1")])
    })

    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
