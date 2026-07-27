import { describe, expect, it } from "vitest"

import { SurveyFormBuilderElement } from "../../types"
import {
  flattenElements,
  reconstructElements,
  computeSectionEndIds,
  injectSectionEnds,
  FlatFormItem,
} from "../index"

// --- Test fixtures ---

const makeQuestion = (id: string, title: string): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title, type: "text" as const },
})

const makeSection = (
  id: string,
  title: string,
  questions: { id: string; title: string }[],
  locked = false
): SurveyFormBuilderElement => ({
  type: "section",
  section: {
    id,
    title,
    questions: questions.map((q) => ({
      id: q.id,
      title: q.title,
      type: "text" as const,
    })),
    locked,
  },
})

// --- Unit tests for utility functions ---

describe("flattenElements", () => {
  it("flattens standalone questions", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeQuestion("q1", "Question 1"),
      makeQuestion("q2", "Question 2"),
    ]

    const result = flattenElements(elements)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual(
      expect.objectContaining({ type: "question", id: "question-q1" })
    )
    expect(result[1]).toEqual(
      expect.objectContaining({ type: "question", id: "question-q2" })
    )
  })

  it("flattens sections into header + questions + end", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
      ]),
    ]

    const result = flattenElements(elements)

    expect(result).toHaveLength(4)
    expect(result[0]).toEqual(
      expect.objectContaining({
        type: "section-header",
        id: "section-header-s1",
      })
    )
    expect(result[1]).toEqual(
      expect.objectContaining({ type: "question", id: "question-q1" })
    )
    expect(result[2]).toEqual(
      expect.objectContaining({ type: "question", id: "question-q2" })
    )
    expect(result[3]).toEqual(
      expect.objectContaining({
        type: "section-end",
        id: "section-end-s1",
      })
    )
  })

  it("handles mixed elements", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeQuestion("q1", "Standalone Q"),
      makeSection("s1", "Section 1", [{ id: "q2", title: "Q2" }]),
      makeQuestion("q3", "Another standalone"),
    ]

    const result = flattenElements(elements)

    expect(result).toHaveLength(5)
    expect(result.map((r) => r.id)).toEqual([
      "question-q1",
      "section-header-s1",
      "question-q2",
      "section-end-s1",
      "question-q3",
    ])
  })

  it("handles sections with no questions", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeSection("s1", "Empty Section", []),
    ]

    const result = flattenElements(elements)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual(
      expect.objectContaining({
        type: "section-header",
        id: "section-header-s1",
      })
    )
    expect(result[1]).toEqual(
      expect.objectContaining({
        type: "section-end",
        id: "section-end-s1",
      })
    )
  })
})

describe("reconstructElements", () => {
  it("reconstructs standalone questions", () => {
    const flatItems: FlatFormItem[] = [
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]

    const result = reconstructElements(flatItems)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({
      type: "question",
      question: expect.objectContaining({ id: "q1" }),
    })
    expect(result[1]).toEqual({
      type: "question",
      question: expect.objectContaining({ id: "q2" }),
    })
  })

  it("groups questions between section-header and section-end into sections", () => {
    const flatItems: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
      {
        type: "section-end",
        id: "section-end-s1",
        sectionId: "s1",
      },
    ]

    const result = reconstructElements(flatItems)

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe("section")
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(2)
      expect(result[0].section.questions?.[0].id).toBe("q1")
      expect(result[0].section.questions?.[1].id).toBe("q2")
    }
  })

  it("handles questions before and after sections", () => {
    const flatItems: FlatFormItem[] = [
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
      {
        type: "section-end",
        id: "section-end-s1",
        sectionId: "s1",
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Q3", type: "text" },
      },
    ]

    const result = reconstructElements(flatItems)

    expect(result).toHaveLength(3)
    expect(result[0].type).toBe("question")
    expect(result[1].type).toBe("section")
    expect(result[2].type).toBe("question")
    if (result[1].type === "section") {
      expect(result[1].section.questions).toHaveLength(1)
    }
  })

  it("handles consecutive section headers (empty sections)", () => {
    const flatItems: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "section-end",
        id: "section-end-s1",
        sectionId: "s1",
      },
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "Section 2" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "section-end",
        id: "section-end-s2",
        sectionId: "s2",
      },
    ]

    const result = reconstructElements(flatItems)

    expect(result).toHaveLength(2)
    expect(result[0].type).toBe("section")
    expect(result[1].type).toBe("section")
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(0)
    }
    if (result[1].type === "section") {
      expect(result[1].section.questions).toHaveLength(1)
    }
  })

  it("is the inverse of flattenElements — preserves standalone questions after sections", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q2", title: "Q2" },
        { id: "q3", title: "Q3" },
      ]),
      makeQuestion("q4", "Another standalone"),
    ]

    const roundTripped = reconstructElements(flattenElements(original))

    expect(roundTripped).toHaveLength(2)
    expect(roundTripped[0].type).toBe("section")
    expect(roundTripped[1].type).toBe("question")
    if (roundTripped[0].type === "section") {
      expect(roundTripped[0].section.questions).toHaveLength(2)
    }
    if (roundTripped[1].type === "question") {
      expect(roundTripped[1].question.id).toBe("q4")
    }
  })

  it("preserves standalone questions before sections", () => {
    const original: SurveyFormBuilderElement[] = [
      makeQuestion("q1", "Standalone Q"),
      makeSection("s1", "Section 1", [{ id: "q2", title: "Q2" }]),
    ]

    const roundTripped = reconstructElements(flattenElements(original))

    expect(roundTripped).toHaveLength(2)
    expect(roundTripped[0].type).toBe("question")
    expect(roundTripped[1].type).toBe("section")
    if (roundTripped[1].type === "section") {
      expect(roundTripped[1].section.questions).toHaveLength(1)
    }
  })
})

describe("computeSectionEndIds", () => {
  it("returns the last question id of each section", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
      ]),
    ]

    const result = computeSectionEndIds(elements)

    expect(result.has("question-q2")).toBe(true)
    expect(result.has("question-q1")).toBe(false)
  })

  it("handles multiple sections", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeSection("s1", "S1", [{ id: "q1", title: "Q1" }]),
      makeSection("s2", "S2", [
        { id: "q2", title: "Q2" },
        { id: "q3", title: "Q3" },
      ]),
    ]

    const result = computeSectionEndIds(elements)

    expect(result.has("question-q1")).toBe(true)
    expect(result.has("question-q3")).toBe(true)
    expect(result.has("question-q2")).toBe(false)
    expect(result.size).toBe(2)
  })

  it("handles section with no questions", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeSection("s1", "S1", []),
      makeSection("s2", "S2", [{ id: "q1", title: "Q1" }]),
    ]

    const result = computeSectionEndIds(elements)

    // s1 has no questions so no end id, s2 has q1
    expect(result.has("question-q1")).toBe(true)
    expect(result.size).toBe(1)
  })

  it("returns empty set for standalone questions only", () => {
    const elements: SurveyFormBuilderElement[] = [makeQuestion("q1", "Q1")]

    const result = computeSectionEndIds(elements)

    expect(result.size).toBe(0)
  })

  it("does not include standalone questions after sections", () => {
    const elements: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [{ id: "q1", title: "Q1" }]),
      makeQuestion("q2", "Standalone after section"),
    ]

    const result = computeSectionEndIds(elements)

    expect(result.has("question-q1")).toBe(true)
    expect(result.has("question-q2")).toBe(false)
    expect(result.size).toBe(1)
  })
})

describe("injectSectionEnds", () => {
  it("injects section-end after the last section question", () => {
    const items: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "S1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]
    const inSection = new Set(["question-q1", "question-q2"])

    const result = injectSectionEnds(items, inSection)

    expect(result.map((r) => r.type)).toEqual([
      "section-header",
      "question",
      "question",
      "section-end",
    ])
  })

  it("handles multiple sections correctly", () => {
    const items: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "S1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "S2" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]
    const inSection = new Set(["question-q1", "question-q2"])

    const result = injectSectionEnds(items, inSection)

    expect(result.map((r) => r.type)).toEqual([
      "section-header",
      "question",
      "section-end",
      "section-header",
      "question",
      "section-end",
    ])
  })

  it("handles empty section (no questions between headers)", () => {
    const items: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "S1" },
      },
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "S2" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
    ]
    const inSection = new Set(["question-q1"])

    const result = injectSectionEnds(items, inSection)

    expect(result.map((r) => r.type)).toEqual([
      "section-header",
      "section-end",
      "section-header",
      "question",
      "section-end",
    ])
  })

  it("handles standalone questions before sections", () => {
    const items: FlatFormItem[] = [
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "S1" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]
    const inSection = new Set(["question-q2"])

    const result = injectSectionEnds(items, inSection)

    expect(result.map((r) => r.type)).toEqual([
      "question",
      "section-header",
      "question",
      "section-end",
    ])
    expect(result[0].id).toBe("question-q1")
  })

  it("standalone questions after a section stay outside", () => {
    const items: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "S1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Standalone", type: "text" },
      },
    ]
    // Only q1 was in a section; q3 is standalone
    const inSection = new Set(["question-q1"])

    const result = injectSectionEnds(items, inSection)

    expect(result.map((r) => r.type)).toEqual([
      "section-header",
      "question",
      "section-end",
      "question",
    ])
    expect(result[1].id).toBe("question-q1")
    expect(result[3].id).toBe("question-q3")
  })

  it("cross-section question stays in new section", () => {
    const items: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "S1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2 (from s2)", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "S2" },
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Q3", type: "text" },
      },
    ]
    // q1 was in s1, q2 and q3 were in s2 (q2 was moved to s1 area)
    const inSection = new Set(["question-q1", "question-q2", "question-q3"])

    const result = injectSectionEnds(items, inSection)

    expect(result.map((r) => r.type)).toEqual([
      "section-header",
      "question",
      "question",
      "section-end",
      "section-header",
      "question",
      "section-end",
    ])
    // q2 should be inside s1 (after q1, before section-end)
    expect(result[2].id).toBe("question-q2")
  })

  it("no sections — returns items unchanged", () => {
    const items: FlatFormItem[] = [
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]

    const result = injectSectionEnds(items, new Set())

    expect(result).toEqual(items)
  })
})

describe("reorder scenarios (end-to-end)", () => {
  // Helper: simulates the reorder pipeline used by useReorderHandler.
  // Takes original elements and a reordered flat list (without section-end),
  // returns the reconstructed SurveyFormBuilderElement[].
  function simulateReorder(
    original: SurveyFormBuilderElement[],
    reordered: FlatFormItem[]
  ): SurveyFormBuilderElement[] {
    const flat = flattenElements(original)

    // Build original section membership (same as useReorderHandler)
    const allInSectionQuestionIds = new Set<string>()
    let currentSectionId: string | null = null
    for (const fi of flat) {
      if (fi.type === "section-header") {
        currentSectionId = fi.id
      } else if (fi.type === "section-end") {
        currentSectionId = null
      } else if (currentSectionId) {
        allInSectionQuestionIds.add(fi.id)
      }
    }

    const withEnds = injectSectionEnds(reordered, allInSectionQuestionIds)
    return reconstructElements(withEnds)
  }

  it("standalone questions after a section stay outside", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
      ]),
      makeQuestion("q3", "Standalone 1"),
      makeQuestion("q4", "Standalone 2"),
    ]

    // User swaps q4 before q3 (both standalone, after section)
    const reordered: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
      {
        type: "question",
        id: "question-q4",
        question: { id: "q4", title: "Standalone 2", type: "text" },
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Standalone 1", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    // q3 and q4 are standalone — they should NOT be absorbed into section s1
    expect(result).toHaveLength(3)
    expect(result[0].type).toBe("section")
    expect(result[1].type).toBe("question")
    expect(result[2].type).toBe("question")
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(2)
    }
    if (result[1].type === "question") {
      expect(result[1].question.id).toBe("q4")
    }
    if (result[2].type === "question") {
      expect(result[2].question.id).toBe("q3")
    }
  })

  it("move question from section 2 to section 1", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [{ id: "q1", title: "Q1" }]),
      makeSection("s2", "Section 2", [
        { id: "q2", title: "Q2" },
        { id: "q3", title: "Q3" },
      ]),
    ]

    // User drags q2 from section 2 into section 1 (after q1)
    const reordered: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "Section 2" },
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Q3", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    expect(result).toHaveLength(2)
    expect(result[0].type).toBe("section")
    expect(result[1].type).toBe("section")
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(2)
      expect(result[0].section.questions?.[0].id).toBe("q1")
      expect(result[0].section.questions?.[1].id).toBe("q2")
    }
    if (result[1].type === "section") {
      expect(result[1].section.questions).toHaveLength(1)
      expect(result[1].section.questions?.[0].id).toBe("q3")
    }
  })

  it("move question from section 1 to section 2", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
      ]),
      makeSection("s2", "Section 2", [{ id: "q3", title: "Q3" }]),
    ]

    // User drags q2 from section 1 into section 2 (before q3)
    const reordered: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "Section 2" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Q3", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    expect(result).toHaveLength(2)
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(1)
      expect(result[0].section.questions?.[0].id).toBe("q1")
    }
    if (result[1].type === "section") {
      expect(result[1].section.questions).toHaveLength(2)
      expect(result[1].section.questions?.[0].id).toBe("q2")
      expect(result[1].section.questions?.[1].id).toBe("q3")
    }
  })

  it("move standalone question into a section (between section questions)", () => {
    const original: SurveyFormBuilderElement[] = [
      makeQuestion("q1", "Standalone"),
      makeSection("s1", "Section 1", [{ id: "q2", title: "Q2" }]),
    ]

    // User drags q1 before q2 inside section 1
    // q1 is standalone but sandwiched before q2 (a section question),
    // so the section boundary extends past q1 to include q2.
    const reordered: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Standalone", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe("section")
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(2)
      expect(result[0].section.questions?.[0].id).toBe("q1")
      expect(result[0].section.questions?.[1].id).toBe("q2")
    }
  })

  it("move question out of section to become standalone (before section)", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
      ]),
    ]

    // User drags q1 before the section header
    const reordered: FlatFormItem[] = [
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    expect(result).toHaveLength(2)
    expect(result[0].type).toBe("question")
    expect(result[1].type).toBe("section")
    if (result[0].type === "question") {
      expect(result[0].question.id).toBe("q1")
    }
    if (result[1].type === "section") {
      expect(result[1].section.questions).toHaveLength(1)
      expect(result[1].section.questions?.[0].id).toBe("q2")
    }
  })

  it("reorder questions within a section", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
        { id: "q3", title: "Q3" },
      ]),
    ]

    // User reorders: q3, q1, q2
    const reordered: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q3",
        question: { id: "q3", title: "Q3", type: "text" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe("section")
    if (result[0].type === "section") {
      expect(result[0].section.questions).toHaveLength(3)
      expect(result[0].section.questions?.[0].id).toBe("q3")
      expect(result[0].section.questions?.[1].id).toBe("q1")
      expect(result[0].section.questions?.[2].id).toBe("q2")
    }
  })

  it("swap section order preserves their questions", () => {
    const original: SurveyFormBuilderElement[] = [
      makeSection("s1", "Section 1", [{ id: "q1", title: "Q1" }]),
      makeSection("s2", "Section 2", [{ id: "q2", title: "Q2" }]),
    ]

    // User swaps section 2 before section 1
    const reordered: FlatFormItem[] = [
      {
        type: "section-header",
        id: "section-header-s2",
        section: { id: "s2", title: "Section 2" },
      },
      {
        type: "question",
        id: "question-q2",
        question: { id: "q2", title: "Q2", type: "text" },
      },
      {
        type: "section-header",
        id: "section-header-s1",
        section: { id: "s1", title: "Section 1" },
      },
      {
        type: "question",
        id: "question-q1",
        question: { id: "q1", title: "Q1", type: "text" },
      },
    ]

    const result = simulateReorder(original, reordered)

    expect(result).toHaveLength(2)
    if (result[0].type === "section") {
      expect(result[0].section.id).toBe("s2")
      expect(result[0].section.questions).toHaveLength(1)
      expect(result[0].section.questions?.[0].id).toBe("q2")
    }
    if (result[1].type === "section") {
      expect(result[1].section.id).toBe("s1")
      expect(result[1].section.questions).toHaveLength(1)
      expect(result[1].section.questions?.[0].id).toBe("q1")
    }
  })

  it("round-trip: flatten then reconstruct preserves structure", () => {
    const original: SurveyFormBuilderElement[] = [
      makeQuestion("q0", "Before sections"),
      makeSection("s1", "Section 1", [
        { id: "q1", title: "Q1" },
        { id: "q2", title: "Q2" },
      ]),
      makeQuestion("q3", "Between sections"),
      makeSection("s2", "Section 2", [{ id: "q4", title: "Q4" }]),
      makeQuestion("q5", "After sections"),
    ]

    const result = reconstructElements(flattenElements(original))

    expect(result).toHaveLength(5)
    expect(result[0].type).toBe("question")
    expect(result[1].type).toBe("section")
    expect(result[2].type).toBe("question")
    expect(result[3].type).toBe("section")
    expect(result[4].type).toBe("question")

    if (result[0].type === "question") expect(result[0].question.id).toBe("q0")
    if (result[1].type === "section") {
      expect(result[1].section.questions).toHaveLength(2)
    }
    if (result[2].type === "question") expect(result[2].question.id).toBe("q3")
    if (result[3].type === "section") {
      expect(result[3].section.questions).toHaveLength(1)
    }
    if (result[4].type === "question") expect(result[4].question.id).toBe("q5")
  })
})
