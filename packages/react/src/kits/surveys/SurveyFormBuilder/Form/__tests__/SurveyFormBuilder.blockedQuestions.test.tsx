import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { LockedFields, SurveyFormBuilderElement } from "../../types"
import { SurveyFormBuilder } from "../index"

// --- Test fixtures ---

const makeQuestion = (
  id: string,
  title: string,
  opts: {
    description?: string
    locked?: boolean
    lockedFields?: LockedFields
  } = {}
): SurveyFormBuilderElement => ({
  type: "question",
  question: {
    id,
    title,
    type: "text" as const,
    ...(opts.description !== undefined && { description: opts.description }),
    ...(opts.locked !== undefined && { locked: opts.locked }),
    ...(opts.lockedFields !== undefined && { lockedFields: opts.lockedFields }),
  },
})

const makeSection = (
  id: string,
  title: string,
  questions: { id: string; title: string; description?: string }[],
  locked = false
): SurveyFormBuilderElement => ({
  type: "section",
  section: {
    id,
    title,
    questions: questions.map((q) => ({
      id: q.id,
      title: q.title,
      ...(q.description !== undefined && { description: q.description }),
      type: "text" as const,
    })),
    locked,
  },
})

// --- Blocked questions UX/UI ---

describe("SurveyFormBuilder — blocked questions", () => {
  it("does not show the not-allowed cursor on an editable question card", () => {
    const { container } = render(
      <SurveyFormBuilder
        elements={[makeQuestion("q1", "Editable")]}
        onChange={vi.fn()}
      />
    )

    expect(container.querySelector("#co-creation-question-q1")).not.toHaveClass(
      "cursor-not-allowed"
    )
  })

  it("disables the title and description inputs of a question in a blocked section", () => {
    render(
      <SurveyFormBuilder
        elements={[
          makeSection(
            "s1",
            "Locked Section",
            [
              {
                id: "q1",
                title: "Blocked title",
                description: "Blocked description",
              },
            ],
            true
          ),
        ]}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByDisplayValue("Blocked title")).toBeDisabled()
    expect(screen.getByDisplayValue("Blocked description")).toBeDisabled()
  })

  it("keeps the title input editable on an unblocked question", () => {
    render(
      <SurveyFormBuilder
        elements={[makeQuestion("q1", "Editable title")]}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByDisplayValue("Editable title")).not.toBeDisabled()
  })

  it("propagates blocked UI to questions inside a blocked section", () => {
    const { container } = render(
      <SurveyFormBuilder
        elements={[
          makeSection(
            "s1",
            "Locked Section",
            [{ id: "q1", title: "Q1" }],
            true
          ),
        ]}
        onChange={vi.fn()}
      />
    )

    // The question never sets `locked` itself — it inherits it from the section.
    expect(container.querySelector("#co-creation-question-q1")).toHaveClass(
      "cursor-not-allowed"
    )
    expect(screen.getByDisplayValue("Q1")).toBeDisabled()
  })

  it("shows the not-allowed cursor over a blocked section header card", () => {
    const { container } = render(
      <SurveyFormBuilder
        elements={[
          makeSection(
            "s1",
            "Locked Section",
            [{ id: "q1", title: "Q1" }],
            true
          ),
        ]}
        onChange={vi.fn()}
      />
    )

    expect(container.querySelector("#co-creation-section-s1")).toHaveClass(
      "cursor-not-allowed"
    )
  })

  it("does not show the not-allowed cursor on an editable section header card", () => {
    const { container } = render(
      <SurveyFormBuilder
        elements={[
          makeSection("s1", "Open Section", [{ id: "q1", title: "Q1" }]),
        ]}
        onChange={vi.fn()}
      />
    )

    expect(container.querySelector("#co-creation-section-s1")).not.toHaveClass(
      "cursor-not-allowed"
    )
  })

  it("renders a lock affordance instead of the actions menu on a question in a blocked section", () => {
    const { rerender } = render(
      <SurveyFormBuilder
        elements={[
          makeSection(
            "s1",
            "Locked Section",
            [{ id: "q1", title: "Blocked" }],
            true
          ),
        ]}
        onChange={vi.fn()}
      />
    )

    // Blocked question surfaces the static "Locked" button.
    expect(screen.getByRole("button", { name: "Locked" })).toBeInTheDocument()

    // An editable question has no lock affordance.
    rerender(
      <SurveyFormBuilder
        elements={[makeQuestion("q1", "Editable")]}
        onChange={vi.fn()}
      />
    )
    expect(screen.queryByRole("button", { name: "Locked" })).toBeNull()
  })

  // --- Partially blocked questions (`lockedFields`) ---

  it("freezes the wording but keeps the actions menu on a partially locked question", () => {
    render(
      <SurveyFormBuilder
        elements={[
          makeQuestion("q1", "Frozen title", {
            description: "Frozen description",
            lockedFields: ["title", "description"],
          }),
        ]}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByDisplayValue("Frozen title")).toBeDisabled()
    expect(screen.getByDisplayValue("Frozen description")).toBeDisabled()

    // The point of the prop: everything the menu offers — required, duplicate,
    // delete — stays available, so this is not `locked` under another name.
    expect(screen.getByRole("button", { name: "Actions" })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Locked" })).toBeNull()
  })

  it("freezes only the fields named in lockedFields", () => {
    const { rerender } = render(
      <SurveyFormBuilder
        elements={[
          makeQuestion("q1", "A title", {
            description: "A description",
            lockedFields: ["title"],
          }),
        ]}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByDisplayValue("A title")).toBeDisabled()
    expect(screen.getByDisplayValue("A description")).not.toBeDisabled()

    rerender(
      <SurveyFormBuilder
        elements={[
          makeQuestion("q1", "A title", {
            description: "A description",
            lockedFields: ["description"],
          }),
        ]}
        onChange={vi.fn()}
      />
    )

    expect(screen.getByDisplayValue("A title")).not.toBeDisabled()
    expect(screen.getByDisplayValue("A description")).toBeDisabled()
  })

  it("lets locked win over lockedFields", () => {
    render(
      <SurveyFormBuilder
        elements={[
          makeQuestion("q1", "Blocked title", {
            description: "Blocked description",
            locked: true,
            lockedFields: ["title"],
          }),
        ]}
        onChange={vi.fn()}
      />
    )

    // The stronger form still freezes the description it does not name, and
    // still takes the actions menu away.
    expect(screen.getByDisplayValue("Blocked description")).toBeDisabled()
    expect(screen.getByRole("button", { name: "Locked" })).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Actions" })).toBeNull()
  })
})
