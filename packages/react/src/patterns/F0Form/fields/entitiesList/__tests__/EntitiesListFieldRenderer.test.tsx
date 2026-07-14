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
          // No inline cell → not a column:
          startDate: f0FormField.date({ label: "Start", optional: true }),
          active: f0FormField.boolean({ label: "Active", optional: true }),
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
    // Unsupported and hidden fields have no column
    expect(screen.queryByRole("columnheader", { name: "Start" })).toBeNull()
    expect(screen.queryByRole("columnheader", { name: "Active" })).toBeNull()
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
