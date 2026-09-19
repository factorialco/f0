import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"
import { resetInlineWarnings } from "../fields/inline/support"

const recordSchema = {
  personal: z.object({
    fullName: f0FormField(z.string(), { label: "Full name" }),
  }),
  work: z.object({
    jobTitle: f0FormField(z.string(), { label: "Job title" }),
  }),
  identification: z.object({
    taxId: f0FormField(z.string(), { label: "Tax id" }),
  }),
}

const recordSections = {
  personal: { title: "Personal" },
  work: { title: "Work" },
  identification: { title: "Identification" },
}

const recordDefaults = {
  personal: { fullName: "Ada Lovelace" },
  work: { jobTitle: "Analyst" },
  identification: { taxId: "X-1042" },
}

const UNSAVED = "You have changes pending to be saved"

function renderRecord(props: Record<string, unknown> = {}) {
  return render(
    <F0Form
      name="employee-record"
      inline
      schema={recordSchema}
      sections={recordSections}
      defaultValues={recordDefaults}
      onSubmit={async () => ({ success: true })}
      {...props}
    />
  )
}

async function editRow(
  user: ReturnType<typeof userEvent.setup>,
  label: string,
  value: string
) {
  await user.click(screen.getByRole("button", { name: label }))
  const input = await screen.findByRole("textbox", { name: label })
  await user.clear(input)
  await user.type(input, `${value}{Enter}`)
  await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
  // The row restores focus a frame after the edit ends; letting that land
  // keeps it from stealing focus out of the next row's editor.
  await waitFor(() =>
    expect(screen.getByRole("button", { name: label })).toHaveFocus()
  )
}

const saveButton = async () =>
  (await screen.findAllByRole("button", { name: /submit/i }))[0]

describe("F0Form inline per-section mode", () => {
  beforeEach(() => resetInlineWarnings())
  afterEach(() => vi.restoreAllMocks())

  it("anchors the cards left of the rail, with no rule between them", () => {
    const { container } = renderRecord({
      styling: { showSectionsSidepanel: true },
    })

    const rail = container.querySelector(
      "[data-slot='form-sections-layout']"
    ) as HTMLElement
    const columns = Array.from(rail.children)

    expect(columns.some((c) => c.classList.contains("justify-start"))).toBe(
      true
    )
    expect(columns.some((c) => c.classList.contains("justify-center"))).toBe(
      false
    )
    expect(rail.querySelector(".w-px.bg-f1-border-secondary")).toBeNull()
  })

  it("reads every section as a card of rows under its own heading", () => {
    const { container } = renderRecord()

    expect(
      container.querySelectorAll("[data-slot='inline-field-row']")
    ).toHaveLength(3)
    expect(screen.getByText("Personal")).toBeInTheDocument()
    expect(screen.getByText("Work")).toBeInTheDocument()
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.queryByRole("textbox")).toBeNull()
  })

  it("opens one action bar for the whole record once a section is dirty", async () => {
    const user = userEvent.setup()
    renderRecord()

    expect(screen.queryByText(UNSAVED)).toBeNull()

    await editRow(user, "Full name", "Grace Hopper")

    await waitFor(() => expect(screen.getAllByText(UNSAVED)).toHaveLength(1))
  })

  it("saves each dirty section with its own values and skips the rest", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    renderRecord({ onSubmit })

    await editRow(user, "Full name", "Grace Hopper")
    await editRow(user, "Job title", "Lead")
    await user.click(await saveButton())

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(2))
    expect(onSubmit).toHaveBeenCalledWith("personal", {
      fullName: "Grace Hopper",
    })
    expect(onSubmit).toHaveBeenCalledWith("work", { jobTitle: "Lead" })
    expect(onSubmit).not.toHaveBeenCalledWith(
      "identification",
      expect.anything()
    )
  })

  it("starts every dirty section before any of them settles", async () => {
    const user = userEvent.setup()
    const started: string[] = []
    let release: (() => void) | undefined
    const gate = new Promise<void>((resolve) => {
      release = resolve
    })
    const onSubmit = vi.fn(async (sectionId: string) => {
      started.push(sectionId)
      await gate
      return { success: true } as const
    })

    renderRecord({ onSubmit })

    await editRow(user, "Full name", "Grace Hopper")
    await editRow(user, "Job title", "Lead")
    await user.click(await saveButton())

    await waitFor(() => expect(started).toHaveLength(2))
    release?.()
    await waitFor(() => expect(screen.queryByText(UNSAVED)).toBeNull())
  })

  it("keeps a refused section dirty with its message while the others reset", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn(async (sectionId: string) =>
      sectionId === "work"
        ? ({
            success: false,
            rootMessage: "Job title is under review",
          } as const)
        : ({ success: true } as const)
    )

    renderRecord({ onSubmit })

    await editRow(user, "Full name", "Grace Hopper")
    await editRow(user, "Job title", "Lead")
    await user.click(await saveButton())

    await waitFor(() =>
      expect(screen.getByText("Job title is under review")).toBeInTheDocument()
    )
    expect(screen.getByText(UNSAVED)).toBeInTheDocument()

    onSubmit.mockClear()
    await user.click(await saveButton())

    // The saved section reset to its new values, so only the refused one runs.
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit).toHaveBeenCalledWith("work", { jobTitle: "Lead" })
  })

  it("reopens the row a section refused by field, with the reason under it", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn(async (sectionId: string) =>
      sectionId === "identification"
        ? ({
            success: false,
            errors: { taxId: "Invalid DNI number" },
          } as const)
        : ({ success: true } as const)
    )

    renderRecord({ onSubmit })

    await editRow(user, "Tax id", "73194628S")
    await user.click(await saveButton())

    const reopened = await screen.findByRole("textbox", { name: "Tax id" })
    expect(reopened).toHaveValue("73194628S")

    const message = document.querySelector(
      '[data-slot="inline-field-row-message"]'
    ) as HTMLElement
    expect(message).toHaveTextContent("Invalid DNI number")
    expect(message.querySelector("svg")).toBeInTheDocument()
  })

  it("focuses one editor only when two sections refuse at once", async () => {
    const user = userEvent.setup()
    const focused: string[] = []
    const realFocus = HTMLInputElement.prototype.focus
    vi.spyOn(HTMLInputElement.prototype, "focus").mockImplementation(function (
      this: HTMLInputElement,
      options?: FocusOptions
    ) {
      focused.push(this.getAttribute("aria-label") ?? this.name)
      realFocus.call(this, options)
    })

    renderRecord({
      onSubmit: async (sectionId: string) =>
        sectionId === "personal"
          ? { success: false, errors: { fullName: "Unknown name" } }
          : { success: false, errors: { jobTitle: "Unknown title" } },
    })

    await editRow(user, "Full name", "Grace Hopper")
    await editRow(user, "Job title", "Lead")

    const save = await saveButton()
    focused.length = 0
    await user.click(save)

    await waitFor(() => expect(screen.getAllByRole("textbox")).toHaveLength(2))
    expect(focused).toEqual(["Full name"])
  })

  it("throws nothing at the bar when a section's onSubmit rejects", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn(async (sectionId: string) => {
      if (sectionId === "work") {
        throw new Error("network")
      }
      return { success: true } as const
    })

    renderRecord({ onSubmit })

    await editRow(user, "Full name", "Grace Hopper")
    await editRow(user, "Job title", "Lead")
    await user.click(await saveButton())

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(2))
    // The rejected section is still dirty, so the bar stays open.
    expect(screen.getByText(UNSAVED)).toBeInTheDocument()
  })

  it("discards every dirty section at once", async () => {
    const user = userEvent.setup()
    renderRecord()

    await editRow(user, "Full name", "Grace Hopper")
    await editRow(user, "Job title", "Lead")
    await waitFor(() => expect(screen.getByText(UNSAVED)).toBeInTheDocument())

    await user.click(screen.getByRole("button", { name: /discard/i }))

    await waitFor(() => expect(screen.queryByText(UNSAVED)).toBeNull())
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.getByText("Analyst")).toBeInTheDocument()
  })

  it("warns once about a section submitConfig it ignores", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    renderRecord({
      sections: {
        ...recordSections,
        work: { title: "Work", submitConfig: { label: "Save work" } },
      },
    })

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn.mock.calls[0][0]).toContain("is ignored")
    expect(
      screen.queryByRole("button", { name: "Save work" })
    ).not.toBeInTheDocument()
  })

  it("never submits a section hidden by renderIf", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    renderRecord({
      onSubmit,
      sections: {
        ...recordSections,
        identification: { title: "Identification", renderIf: () => false },
      },
    })

    expect(screen.queryByText("Tax id")).toBeNull()

    await editRow(user, "Full name", "Grace Hopper")
    await user.click(await saveButton())

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1))
    expect(onSubmit).toHaveBeenCalledWith("personal", {
      fullName: "Grace Hopper",
    })
  })

  it("follows a section renderIf that reads another section's value", async () => {
    const user = userEvent.setup()

    renderRecord({
      sections: {
        ...recordSections,
        identification: {
          title: "Identification",
          renderIf: ({ values }: { values: Record<string, unknown> }) =>
            values.fullName === "Grace Hopper",
        },
      },
    })

    expect(screen.queryByText("Tax id")).toBeNull()

    await editRow(user, "Full name", "Grace Hopper")

    await waitFor(() => expect(screen.getByText("Tax id")).toBeInTheDocument())
  })

  it("leaves the standard per-section layout untouched without inline", () => {
    const { container } = renderRecord({ inline: false })

    expect(container.querySelector("[data-slot='inline-field-row']")).toBeNull()
    expect(screen.getByLabelText("Full name")).toBeInTheDocument()
    expect(screen.queryByText(UNSAVED)).toBeNull()
  })
})
