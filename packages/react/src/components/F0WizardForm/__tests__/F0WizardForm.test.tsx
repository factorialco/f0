import userEvent from "@testing-library/user-event"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { f0FormField } from "@/components/F0Form/f0Schema"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import type {
  F0FormDefinitionPerSection,
  F0FormDefinitionSingleSchema,
  F0WizardFormStep,
} from "../types"

import { F0WizardForm } from "../F0WizardForm"

// =============================================================================
// Per-section schema helpers
// =============================================================================

const perSectionSchema = {
  general: z.object({
    email: f0FormField(z.string().email(), {
      label: "Email",
      placeholder: "alicia@factorial.co",
    }),
  }),
  work: z.object({
    legalEntity: f0FormField(z.string().min(1), {
      label: "Legal entity",
    }),
  }),
}

function makePerSectionDefinition(
  overrides: Partial<F0FormDefinitionPerSection<typeof perSectionSchema>> = {}
): F0FormDefinitionPerSection<typeof perSectionSchema> {
  return {
    _brand: "per-section" as const,
    name: "test-wizard",
    schema: perSectionSchema,
    sections: {
      general: { title: "General information" },
      work: { title: "Work details" },
    },
    onSubmit: vi.fn().mockResolvedValue({ success: true }),
    ...overrides,
  }
}

function PerSectionWrapper({
  definition,
  steps,
  allowStepSkipping,
}: {
  definition: F0FormDefinitionPerSection<typeof perSectionSchema>
  steps?: F0WizardFormStep[]
  allowStepSkipping?: boolean
}) {
  return (
    <F0WizardForm
      formDefinition={definition}
      isOpen={true}
      onClose={() => {}}
      title="Test wizard"
      steps={steps}
      allowStepSkipping={allowStepSkipping}
    />
  )
}

// =============================================================================
// Single-schema helpers
// =============================================================================

const singleSchema = z.object({
  email: f0FormField(z.string().email(), {
    label: "Email",
    section: "general",
    placeholder: "alicia@factorial.co",
  }),
  legalEntity: f0FormField(z.string().min(1), {
    label: "Legal entity",
    section: "work",
  }),
})

function makeSingleSchemaDefinition(
  overrides: Partial<F0FormDefinitionSingleSchema<typeof singleSchema>> = {}
): F0FormDefinitionSingleSchema<typeof singleSchema> {
  return {
    _brand: "single" as const,
    name: "test-wizard-single",
    schema: singleSchema,
    sections: {
      general: { title: "General information" },
      work: { title: "Work details" },
    },
    onSubmit: vi.fn().mockResolvedValue({ success: true }),
    ...overrides,
  }
}

function SingleSchemaWrapper({
  definition,
  allowStepSkipping,
}: {
  definition: F0FormDefinitionSingleSchema<typeof singleSchema>
  allowStepSkipping?: boolean
}) {
  return (
    <F0WizardForm
      formDefinition={definition}
      isOpen={true}
      onClose={() => {}}
      title="Test wizard"
      allowStepSkipping={allowStepSkipping}
    />
  )
}

// =============================================================================
// Per-section mode tests
// =============================================================================

describe("F0WizardForm — Per-section mode", () => {
  it("does not render a submit button inside the form sections", () => {
    const definition = makePerSectionDefinition()

    render(<PerSectionWrapper definition={definition} />)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()

    const buttons = screen.getAllByRole("button")
    const submitButtons = buttons.filter(
      (btn) =>
        btn.getAttribute("type") === "submit" ||
        btn.textContent?.toLowerCase() === "submit"
    )
    expect(submitButtons).toHaveLength(0)
  })

  it("renders the Continue button for step navigation", () => {
    const definition = makePerSectionDefinition()

    render(<PerSectionWrapper definition={definition} />)

    expect(screen.getByText("Continue")).toBeInTheDocument()
  })

  it("renders the correct number of steps in the sidebar", () => {
    const definition = makePerSectionDefinition()

    render(<PerSectionWrapper definition={definition} />)

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    expect(stepButtons).toHaveLength(2)
  })

  it("shows the first section fields on the first step", () => {
    const definition = makePerSectionDefinition()

    render(<PerSectionWrapper definition={definition} />)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.queryByLabelText("Legal entity")).not.toBeInTheDocument()
  })

  it("navigates to the next step when Continue is clicked", async () => {
    const user = userEvent.setup()
    const definition = makePerSectionDefinition({
      defaultValues: { general: { email: "test@test.com" } },
    })

    render(<PerSectionWrapper definition={definition} />)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(screen.getByLabelText("Legal entity")).toBeInTheDocument()
    })
    expect(screen.queryByLabelText("Email")).not.toBeInTheDocument()
  })

  it("calls onSubmit with section data when navigating forward", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    const definition = makePerSectionDefinition({
      onSubmit,
      defaultValues: { general: { email: "test@test.com" } },
    })

    render(<PerSectionWrapper definition={definition} />)

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          sectionId: "general",
          data: expect.objectContaining({ email: "test@test.com" }),
        })
      )
    })
  })

  it("stays on current step when form validation fails (required field empty)", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    const definition = makePerSectionDefinition({ onSubmit })

    render(<PerSectionWrapper definition={definition} />)

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(screen.getByLabelText("Email")).toBeInTheDocument()
    })
    expect(screen.queryByLabelText("Legal entity")).not.toBeInTheDocument()
  })

  // ---------------------------------------------------------------------------
  // Auto-split multi-section steps
  // ---------------------------------------------------------------------------

  it("auto-splits multi-section steps and logs an error in dev", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

    const definition = makePerSectionDefinition()

    render(
      <PerSectionWrapper
        definition={definition}
        steps={[
          {
            title: "All info",
            sectionIds: ["general", "work"],
          },
        ]}
      />
    )

    const f0WizardFormErrors = consoleSpy.mock.calls.filter((args) =>
      String(args[0]).includes("[F0WizardForm]")
    )
    expect(f0WizardFormErrors.length).toBeGreaterThanOrEqual(1)
    expect(f0WizardFormErrors[0]![0]).toContain(
      "Per-section schema mode does not support grouping"
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    expect(stepButtons).toHaveLength(2)

    const stepTexts = Array.from(nav.querySelectorAll("span")).map(
      (el) => el.textContent
    )
    expect(stepTexts).toContain("General information")
    expect(stepTexts).toContain("Work details")

    consoleSpy.mockRestore()
  })

  it("auto-split steps still show the correct fields per step", async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

    const definition = makePerSectionDefinition({
      defaultValues: { general: { email: "test@test.com" } },
    })

    render(
      <PerSectionWrapper
        definition={definition}
        steps={[
          {
            title: "All info",
            sectionIds: ["general", "work"],
          },
        ]}
      />
    )

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.queryByLabelText("Legal entity")).not.toBeInTheDocument()

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(screen.getByLabelText("Legal entity")).toBeInTheDocument()
    })
    expect(screen.queryByLabelText("Email")).not.toBeInTheDocument()

    consoleSpy.mockRestore()
  })

  it("does not log an F0WizardForm error when each step has a single section", () => {
    const errorCalls: string[] = []
    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation((...args: unknown[]) => {
        const msg = String(args[0])
        if (msg.includes("[F0WizardForm]")) {
          errorCalls.push(msg)
        }
      })

    const definition = makePerSectionDefinition()

    render(
      <PerSectionWrapper
        definition={definition}
        steps={[
          { title: "General", sectionIds: ["general"] },
          { title: "Work", sectionIds: ["work"] },
        ]}
      />
    )

    expect(errorCalls).toHaveLength(0)

    consoleSpy.mockRestore()
  })

  // ---------------------------------------------------------------------------
  // allowStepSkipping
  // ---------------------------------------------------------------------------

  it("disables sidebar steps >1 ahead by default", () => {
    const threeSection = {
      ...perSectionSchema,
      extra: z.object({
        notes: f0FormField(z.string().optional(), { label: "Notes" }),
      }),
    }

    const definition: F0FormDefinitionPerSection<typeof threeSection> = {
      _brand: "per-section",
      name: "test-3-section",
      schema: threeSection,
      sections: {
        general: { title: "General" },
        work: { title: "Work" },
        extra: { title: "Extra" },
      },
      onSubmit: vi.fn().mockResolvedValue({ success: true }),
    }

    render(
      <F0WizardForm
        formDefinition={definition}
        isOpen={true}
        onClose={() => {}}
        title="Test"
      />
    )

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const buttons = nav.querySelectorAll("button")

    expect(buttons[2]).toBeDisabled()
  })
})

// =============================================================================
// Single-schema mode tests
// =============================================================================

describe("F0WizardForm — Single-schema mode", () => {
  it("renders the first section fields on the first step", () => {
    const definition = makeSingleSchemaDefinition()

    render(<SingleSchemaWrapper definition={definition} />)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.queryByLabelText("Legal entity")).not.toBeInTheDocument()
  })

  it("renders the correct number of steps in the sidebar", () => {
    const definition = makeSingleSchemaDefinition()

    render(<SingleSchemaWrapper definition={definition} />)

    const nav = screen.getByRole("navigation", { name: "Wizard steps" })
    const stepButtons = nav.querySelectorAll("button")
    expect(stepButtons).toHaveLength(2)
  })

  it("navigates to the next step when Continue is clicked", async () => {
    const user = userEvent.setup()
    const definition = makeSingleSchemaDefinition({
      defaultValues: { email: "test@test.com" },
    })

    render(<SingleSchemaWrapper definition={definition} />)

    expect(screen.getByLabelText("Email")).toBeInTheDocument()

    await user.click(screen.getByText("Continue"))

    await waitFor(() => {
      expect(screen.getByLabelText("Legal entity")).toBeInTheDocument()
    })
  })

  it("does not render a submit button inside the form (uses Continue)", () => {
    const definition = makeSingleSchemaDefinition()

    render(<SingleSchemaWrapper definition={definition} />)

    expect(screen.getByText("Continue")).toBeInTheDocument()

    const buttons = screen.getAllByRole("button")
    const submitButtons = buttons.filter(
      (btn) => btn.getAttribute("type") === "submit"
    )
    expect(submitButtons).toHaveLength(0)
  })
})
