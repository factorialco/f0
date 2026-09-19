import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, waitFor, within } from "storybook/test"
import { z } from "zod"
import { f0FormField, F0Form, type F0FormSubmitResult } from ".."

const recordSchema = {
  personal: z.object({
    fullName: f0FormField(z.string(), { label: "Full name" }),
    email: f0FormField(z.string().email(), { label: "Email", copyable: true }),
  }),
  work: z.object({
    jobTitle: f0FormField(z.string(), { label: "Job title" }),
    team: f0FormField(z.enum(["design", "engineering"]), {
      label: "Team",
      options: [
        { value: "design", label: "Design" },
        { value: "engineering", label: "Engineering" },
      ],
    }),
  }),
  identification: z.object({
    taxId: f0FormField(z.string(), { label: "Tax id", editable: false }),
    startDate: f0FormField(z.date(), { label: "Start date" }),
  }),
}

const recordSections = {
  personal: { title: "Personal", description: "How we reach Ada." },
  work: { title: "Work", description: "Where Ada sits in the org." },
  identification: { title: "Identification" },
}

const recordDefaults = {
  personal: { fullName: "Ada Lovelace", email: "ada@factorial.co" },
  work: { jobTitle: "Analyst", team: "design" as const },
  identification: { taxId: "X-1042", startDate: new Date(2026, 3, 10) },
}

const saveEverything = async (): Promise<F0FormSubmitResult> => ({
  success: true,
})

const refuseWork = async (
  sectionId: keyof typeof recordSchema,
  _data: unknown
): Promise<F0FormSubmitResult> =>
  sectionId === "work"
    ? { success: false, rootMessage: "A job title change needs HR approval" }
    : { success: true }

const refuseJobTitle = async (
  sectionId: keyof typeof recordSchema,
  _data: unknown
): Promise<F0FormSubmitResult> =>
  sectionId === "work"
    ? { success: false, errors: { jobTitle: "Invalid DNI number" } }
    : { success: true }

const meta: Meta = {
  title: "Forms/F0Form/Inline per section",
  component: F0Form,
  tags: ["stable", "!autodocs"],
  parameters: { a11y: { test: "error" } },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Edits a text row and lets the row's deferred focus restore land, so it
 * cannot pull focus out of the next row's editor.
 */
async function editRow(
  canvas: ReturnType<typeof within>,
  label: string,
  value: string
) {
  await userEvent.click(canvas.getByRole("button", { name: label }))
  const input = await canvas.findByRole("textbox", { name: label })
  await userEvent.clear(input)
  await userEvent.type(input, `${value}{Enter}`)
  await waitFor(() => expect(canvas.getByText(value)).toBeVisible())
  await waitFor(
    () => expect(canvas.getByRole("button", { name: label })).toHaveFocus(),
    { timeout: 3000 }
  )
}

export const ThreeSectionRecord: Story = {
  render: () => (
    <div className="w-180">
      <F0Form
        name="employee-record"
        inline
        schema={recordSchema}
        sections={recordSections}
        defaultValues={recordDefaults}
        onSubmit={saveEverything}
        styling={{ showSectionsSidepanel: true }}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Offer every section in the sidepanel", async () => {
      await expect(canvas.getAllByText("Personal")).not.toHaveLength(0)
      await expect(canvas.getAllByText("Work")).not.toHaveLength(0)
      await expect(canvas.getAllByText("Identification")).not.toHaveLength(0)
    })

    await step("Read every section as one card of rows", async () => {
      const rows = canvasElement.querySelectorAll(
        "[data-slot='inline-field-row']"
      )
      await expect(rows).toHaveLength(6)
      await expect(canvas.getByText("Ada Lovelace")).toBeVisible()
      await expect(await canvas.findByText("Design")).toBeVisible()
      await expect(canvas.queryByRole("textbox")).toBeNull()
    })
  },
}

/** One bar for the whole record, whichever sections were touched. */
export const SavingTwoSections: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="employee-record-save"
        inline
        schema={recordSchema}
        sections={recordSections}
        defaultValues={recordDefaults}
        onSubmit={saveEverything}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await step("Edit a row in two different sections", async () => {
      await editRow(canvas, "Full name", "Grace Hopper")
      await editRow(canvas, "Job title", "Lead")
    })

    await step("Offer one bar for the whole record", async () => {
      await waitFor(async () =>
        expect(
          body.getByText("You have changes pending to be saved")
        ).toBeInTheDocument()
      )
    })

    await step("Close the bar once every section saved", async () => {
      await userEvent.click(body.getByRole("button", { name: /submit/i }))
      await waitFor(
        async () =>
          expect(
            body.queryByText("You have changes pending to be saved")
          ).toBeNull(),
        { timeout: 4000 }
      )
    })
  },
}

/** A refused section keeps its changes and prints the reason it was refused. */
export const OneSectionRefused: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="employee-record-refused"
        inline
        schema={recordSchema}
        sections={recordSections}
        defaultValues={recordDefaults}
        onSubmit={refuseWork}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await step("Edit the row the server will refuse", async () => {
      await editRow(canvas, "Job title", "Lead")
    })

    await step("Print the refusal and keep the bar open", async () => {
      await userEvent.click(body.getByRole("button", { name: /submit/i }))

      await waitFor(async () =>
        expect(
          canvas.getByText("A job title change needs HR approval")
        ).toBeVisible()
      )
      await expect(
        body.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
      await expect(canvas.getByText("Lead")).toBeVisible()
    })

    // The a11y pass scans the whole body with no settle, and the bar's
    // entrance animation samples mid-fade. Wait the known duration.
    await new Promise((resolve) => setTimeout(resolve, 800))
  },
}

/**
 * A field the server rejects reopens its row, so the refused value is where
 * the user left it and ready to be corrected.
 */
export const OneFieldRefused: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="employee-record-field-refused"
        inline
        schema={recordSchema}
        sections={recordSections}
        defaultValues={recordDefaults}
        onSubmit={refuseJobTitle}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await step("Edit the field the server will reject", async () => {
      await editRow(canvas, "Job title", "73194628S")
    })

    await step("Reopen the refused row with its value", async () => {
      await userEvent.click(body.getByRole("button", { name: /submit/i }))

      const reopened = await canvas.findByRole("textbox", {
        name: "Job title",
      })
      await expect(reopened).toHaveValue("73194628S")
      await waitFor(() => expect(reopened).toHaveFocus())
    })

    await step("Draw the editor critical", async () => {
      const wrapper = canvasElement.querySelector<HTMLElement>(
        '[data-testid="input-field-wrapper"]'
      )
      await expect(wrapper?.className).toContain(
        "border-f1-border-critical-bold"
      )
    })

    await step("Print the reason with its glyph", async () => {
      const slot = canvasElement.querySelector<HTMLElement>(
        '[data-slot="inline-field-row-message"]'
      )
      await expect(slot?.querySelector("svg")).toBeInTheDocument()
      await expect(canvas.getByText("Invalid DNI number")).toBeVisible()
    })

    await new Promise((resolve) => setTimeout(resolve, 800))
  },
}
