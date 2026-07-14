import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
  within,
} from "@/testing/test-utils"

import { F0Form } from "../../../F0Form"
import { f0FormField } from "../../../f0Schema"

describe("EntitiesListFieldRenderer — columns", () => {
  it("renders a column only for field types that have an inline cell", () => {
    const schema = z.object({
      people: f0FormField.entitiesList({
        label: "People",
        schema: z.object({
          name: z.string().min(1),
          role: z.enum(["Admin", "Viewer"]),
          salary: f0FormField.money({ label: "Salary", currency: "EUR" }),
          startDate: f0FormField.date({ label: "Start", optional: true }),
          // No inline cell → not a column:
          active: f0FormField.boolean({ label: "Active", optional: true }),
          when: f0FormField.time({ label: "When", optional: true }),
          // Hidden → kept on the row, not a column:
          secretId: z.string(),
        }),
        config: {
          supportInlineEditing: true,
          columns: { secretId: { hidden: true } },
        },
      }),
    })

    render(
      <F0Form
        name="cols"
        schema={schema}
        defaultValues={{
          people: [{ name: "Ada", role: "Admin", salary: 100, secretId: "x" }],
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Supported types are shown
    expect(
      screen.getByRole("columnheader", { name: "Name" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", { name: "Role" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", { name: "Salary" })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("columnheader", { name: "Start" })
    ).toBeInTheDocument()
    // Unsupported and hidden fields have no column
    expect(screen.queryByRole("columnheader", { name: "Active" })).toBeNull()
    expect(screen.queryByRole("columnheader", { name: "When" })).toBeNull()
    expect(screen.queryByRole("columnheader", { name: /secret/i })).toBeNull()
  })
})

describe("EntitiesListFieldRenderer — inline editing", () => {
  it("commits an inline text edit to the form value", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))
    const schema = z.object({
      faqs: f0FormField.entitiesList({
        label: "FAQs",
        schema: z.object({ title: z.string().min(1) }),
      }),
    })

    render(
      <F0Form
        name="edit"
        schema={schema}
        defaultValues={{ faqs: [{ title: "Old" }] }}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    const input = screen.getByDisplayValue("Old")
    await userEvent.clear(input)
    await userEvent.type(input, "New title")

    // Typing cells debounce the commit to the form value (250ms); wait for it
    // to flush before submitting.
    await waitFor(
      () => {
        expect(input).toHaveValue("New title")
      },
      { timeout: 1000 }
    )
    await new Promise((resolve) => setTimeout(resolve, 350))
    await userEvent.click(screen.getByText("Save"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ faqs: [{ title: "New title" }] })
      )
    })
  })
})

describe("EntitiesListFieldRenderer — date fields", () => {
  it("keeps a date field as a Date across an inline edit (ISO round-trip)", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))
    const start = new Date(2024, 0, 8)
    const schema = z.object({
      events: f0FormField.entitiesList({
        label: "Events",
        schema: z.object({ title: z.string().min(1), date: z.date() }),
        config: { supportInlineEditing: true },
      }),
    })

    render(
      <F0Form
        name="dates"
        schema={schema}
        defaultValues={{ events: [{ title: "Kickoff", date: start }] }}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    // The date column renders (no inline change needed for it).
    expect(
      screen.getByRole("columnheader", { name: "Date" })
    ).toBeInTheDocument()

    // Editing the title triggers a commit of every row; the untouched date must
    // still be a Date in the submitted value (row stores ISO, commit converts).
    const input = screen.getByDisplayValue("Kickoff")
    await userEvent.clear(input)
    await userEvent.type(input, "Launch")
    await waitFor(() => expect(input).toHaveValue("Launch"), { timeout: 1000 })
    await new Promise((resolve) => setTimeout(resolve, 350))
    await userEvent.click(screen.getByText("Save"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
    const submitted = onSubmit.mock.calls[0][0] as {
      events: Array<{ title: string; date: unknown }>
    }
    expect(submitted.events[0].title).toBe("Launch")
    expect(submitted.events[0].date).toBeInstanceOf(Date)
  })
})

describe("EntitiesListFieldRenderer — add / remove", () => {
  it("appends a row with the add button and removes one with the remove action", async () => {
    const schema = z.object({
      faqs: f0FormField.entitiesList({
        label: "FAQs",
        schema: z.object({ title: z.string().min(1) }),
        config: { labels: { addButton: "Add FAQ" } },
      }),
    })

    render(
      <F0Form
        name="addremove"
        schema={schema}
        defaultValues={{ faqs: [{ title: "One" }] }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getAllByRole("row")).toHaveLength(2) // header + 1 row

    await userEvent.click(screen.getByRole("button", { name: "Add FAQ" }))
    expect(screen.getAllByRole("row")).toHaveLength(3) // header + 2 rows

    // Remove the first data row
    const removeButtons = screen.getAllByRole("button", { name: "Remove row" })
    await userEvent.click(removeButtons[0])
    expect(screen.getAllByRole("row")).toHaveLength(2) // header + 1 row
  })
})

describe("EntitiesListFieldRenderer — multi-select", () => {
  it("renders a multi-select column and keeps the array value across a commit", async () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    const schema = z.object({
      people: f0FormField.entitiesList({
        label: "People",
        schema: z.object({
          name: z.string().min(1),
          skills: f0FormField.multiSelect({
            label: "Skills",
            options: [
              { value: "js", label: "JS" },
              { value: "ts", label: "TS" },
            ],
          }),
        }),
        config: { supportInlineEditing: true },
      }),
    })

    render(
      <F0Form
        name="multiselect"
        schema={schema}
        defaultValues={{ people: [{ name: "Ada", skills: ["js"] }] }}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    expect(
      screen.getByRole("columnheader", { name: "Skills" })
    ).toBeInTheDocument()

    // Editing the name commits every row; the untouched multi-select value must
    // stay an array (it flows through as a value, not a stringified cell).
    const input = screen.getByDisplayValue("Ada")
    await userEvent.clear(input)
    await userEvent.type(input, "Ada L")
    await waitFor(() => expect(input).toHaveValue("Ada L"), { timeout: 1000 })
    await new Promise((resolve) => setTimeout(resolve, 350))
    await userEvent.click(screen.getByText("Save"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ people: [{ name: "Ada L", skills: ["js"] }] })
      )
    })
  })
})

describe("EntitiesListFieldRenderer — custom row actions", () => {
  it("resolves the action per row from a hidden value and updates it on click", async () => {
    const onSubmit = vi.fn(async () => ({ success: true }))
    const schema = z.object({
      options: f0FormField.entitiesList({
        label: "Options",
        schema: z.object({
          name: z.string().min(1),
          archived: z.boolean().default(false),
        }),
        config: {
          columns: { archived: { hidden: true } },
          rowActions: (item) =>
            item.archived
              ? [
                  {
                    icon: () => null,
                    label: "Unarchive",
                    onClick: ({ update }) => update({ archived: false }),
                  },
                ]
              : [
                  {
                    icon: () => null,
                    label: "Archive",
                    onClick: ({ update }) => update({ archived: true }),
                  },
                ],
        },
      }),
    })

    render(
      <F0Form
        name="rowactions"
        schema={schema}
        defaultValues={{ options: [{ name: "Full time", archived: false }] }}
        onSubmit={onSubmit}
        submitConfig={{ label: "Save" }}
      />
    )

    // Starts on "Archive" (archived: false)
    const archiveButton = screen.getByRole("button", { name: "Archive" })
    await userEvent.click(archiveButton)

    // Toggles to "Unarchive" (archived flipped to true)
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Unarchive" })
      ).toBeInTheDocument()
    })

    await userEvent.click(screen.getByText("Save"))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          options: [{ name: "Full time", archived: true }],
        })
      )
    })
  })
})

describe("EntitiesListFieldRenderer — editableIds", () => {
  it("does not render inputs for rows outside editableIds", () => {
    const schema = z.object({
      faqs: f0FormField.entitiesList({
        label: "FAQs",
        schema: z.object({ title: z.string().min(1) }),
        config: { editableIds: ["a"] },
      }),
    })

    render(
      <F0Form
        name="editable"
        schema={schema}
        defaultValues={{
          faqs: [
            { id: "a", title: "Editable" },
            { id: "b", title: "Locked" },
          ],
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // The editable row exposes an input; the locked row shows plain text.
    expect(screen.getByDisplayValue("Editable")).toBeInTheDocument()
    expect(screen.queryByDisplayValue("Locked")).toBeNull()
    const lockedCell = screen.getByText("Locked")
    expect(within(lockedCell.closest("tr")!).queryByRole("textbox")).toBeNull()
  })
})
