import { afterEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { dialogs } from "@/lib/providers/dialogs-alike"
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

    // Removing is now confirmation-gated (per the CRUD "Delete & destructive"
    // doc) even without an `onRemove` — stub the confirmation to accept.
    const confirmation = vi
      .spyOn(dialogs, "confirmation")
      .mockResolvedValue(true)

    // Remove the first data row (the entities list labels its remove action
    // "Remove", consistent with the list-view and overridable via labels.remove)
    const removeButtons = screen.getAllByRole("button", { name: "Remove" })
    await userEvent.click(removeButtons[0])
    await waitFor(() => {
      expect(screen.getAllByRole("row")).toHaveLength(2) // header + 1 row
    })
    expect(confirmation).toHaveBeenCalledTimes(1)
    confirmation.mockRestore()
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

describe("EntitiesListFieldRenderer — removableIds (editable-table)", () => {
  it("shows the remove button only for rows inside removableIds", () => {
    const schema = z.object({
      faqs: f0FormField.entitiesList({
        label: "FAQs",
        schema: z.object({ title: z.string().min(1) }),
        // Independent of editing: "a" is removable, "b" is not.
        config: { removableIds: ["a"] },
      }),
    })

    render(
      <F0Form
        name="removable-table"
        schema={schema}
        defaultValues={{
          faqs: [
            { id: "a", title: "Removable" },
            { id: "b", title: "Pinned" },
          ],
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // The removable row has a Remove button; the pinned row has none.
    // (Cells are editable inputs, so match on the input value, not text.)
    const removableRow = screen.getByDisplayValue("Removable").closest("tr")!
    const pinnedRow = screen.getByDisplayValue("Pinned").closest("tr")!
    expect(
      within(removableRow).getByRole("button", { name: "Remove" })
    ).toBeInTheDocument()
    expect(
      within(pinnedRow).queryByRole("button", { name: "Remove" })
    ).toBeNull()
  })
})

describe("EntitiesListFieldRenderer — delete persistence + confirmation", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  /** A single-column (inline) entities list with an optional `onRemove`. */
  function renderList(
    onRemove?: (item: unknown) => Promise<{ success: boolean } | void>,
    extraConfig?: Record<string, unknown>
  ) {
    const schema = z.object({
      faqs: f0FormField.entitiesList({
        label: "FAQs",
        schema: z.object({ title: z.string().min(1) }),
        config: { onRemove, ...extraConfig },
      }),
    })
    return render(
      <F0Form
        name="delete"
        schema={schema}
        defaultValues={{ faqs: [{ id: "a", title: "One" }] }}
        onSubmit={async () => ({ success: true })}
      />
    )
  }

  it("shows a confirmation before removing; cancelling keeps the row and skips onRemove", async () => {
    const confirmation = vi
      .spyOn(dialogs, "confirmation")
      .mockResolvedValue(false)
    const onRemove = vi.fn(async () => ({ success: true }))
    renderList(onRemove)

    expect(screen.getAllByRole("row")).toHaveLength(2) // header + 1 row
    await userEvent.click(screen.getByRole("button", { name: "Remove" }))

    await waitFor(() => expect(confirmation).toHaveBeenCalledTimes(1))
    // Cancelled: row stays, onRemove never runs.
    expect(onRemove).not.toHaveBeenCalled()
    expect(screen.getAllByRole("row")).toHaveLength(2)
  })

  it("confirming calls onRemove with the item and removes the row on success", async () => {
    vi.spyOn(dialogs, "confirmation").mockResolvedValue(true)
    const onRemove = vi.fn(async () => ({ success: true }))
    renderList(onRemove)

    await userEvent.click(screen.getByRole("button", { name: "Remove" }))

    await waitFor(() => {
      expect(onRemove).toHaveBeenCalledWith(
        expect.objectContaining({ id: "a", title: "One" })
      )
    })
    await waitFor(() => {
      expect(screen.getAllByRole("row")).toHaveLength(1) // header only
    })
  })

  it("keeps the row when onRemove returns { success: false }", async () => {
    vi.spyOn(dialogs, "confirmation").mockResolvedValue(true)
    const alert = vi.spyOn(dialogs, "alert").mockResolvedValue(true)
    const onRemove = vi.fn(async () => ({ success: false }))
    renderList(onRemove)

    await userEvent.click(screen.getByRole("button", { name: "Remove" }))

    await waitFor(() => expect(onRemove).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(alert).toHaveBeenCalledTimes(1))
    // Persistence failed → the row is kept.
    expect(screen.getAllByRole("row")).toHaveLength(2)
  })

  it("keeps the row when onRemove throws", async () => {
    vi.spyOn(dialogs, "confirmation").mockResolvedValue(true)
    const alert = vi.spyOn(dialogs, "alert").mockResolvedValue(true)
    const onRemove = vi.fn(async () => {
      throw new Error("boom")
    })
    renderList(onRemove)

    await userEvent.click(screen.getByRole("button", { name: "Remove" }))

    await waitFor(() => expect(alert).toHaveBeenCalledTimes(1))
    expect(screen.getAllByRole("row")).toHaveLength(2)
  })

  it("disables the remove action while onRemove is in flight", async () => {
    vi.spyOn(dialogs, "confirmation").mockResolvedValue(true)
    let release: (value: { success: boolean }) => void = () => {}
    const onRemove = vi.fn(
      () =>
        new Promise<{ success: boolean }>((resolve) => {
          release = resolve
        })
    )
    renderList(onRemove)

    const removeButton = screen.getByRole("button", { name: "Remove" })
    await userEvent.click(removeButton)

    // Pending: the remove control is disabled until onRemove settles.
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Remove" })).toBeDisabled()
    )

    release({ success: true })
    await waitFor(() => expect(screen.getAllByRole("row")).toHaveLength(1))
  })

  it("uses the confirmRemove copy when provided", async () => {
    const confirmation = vi
      .spyOn(dialogs, "confirmation")
      .mockResolvedValue(false)
    const confirmRemove = vi.fn((item: { title?: unknown }) => ({
      type: "critical" as const,
      title: `Delete ${String(item.title)}?`,
      msg: "This FAQ will be permanently removed.",
    }))
    renderList(undefined, { confirmRemove })

    await userEvent.click(screen.getByRole("button", { name: "Remove" }))

    await waitFor(() =>
      expect(confirmation).toHaveBeenCalledWith(
        expect.objectContaining({
          type: "critical",
          title: "Delete One?",
          msg: "This FAQ will be permanently removed.",
        })
      )
    )
    expect(confirmRemove).toHaveBeenCalledWith(
      expect.objectContaining({ title: "One" })
    )
  })

  it("still gates editing via editableIds while remove stays confirm-gated", async () => {
    vi.spyOn(dialogs, "confirmation").mockResolvedValue(true)
    const onRemove = vi.fn(async () => ({ success: true }))
    const schema = z.object({
      faqs: f0FormField.entitiesList({
        label: "FAQs",
        schema: z.object({ title: z.string().min(1) }),
        config: { editableIds: ["a"], onRemove },
      }),
    })
    render(
      <F0Form
        name="editable-delete"
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

    // Editing gating unchanged: locked row has no input.
    expect(screen.getByDisplayValue("Editable")).toBeInTheDocument()
    expect(screen.queryByDisplayValue("Locked")).toBeNull()

    // Removing the locked row still confirms + persists.
    const lockedRow = screen.getByText("Locked").closest("tr")!
    await userEvent.click(
      within(lockedRow).getByRole("button", { name: "Remove" })
    )
    await waitFor(() =>
      expect(onRemove).toHaveBeenCalledWith(
        expect.objectContaining({ id: "b", title: "Locked" })
      )
    )
  })
})

describe("EntitiesListFieldRenderer — list-view remove gating (removableIds)", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  /**
   * The list-view row container. Rows have no semantic role, so walk up from
   * the row's title text to the collection row element (identified by its
   * `min-h-[64px]` layout class) to scope action queries per row.
   */
  function rowOf(name: string): HTMLElement {
    let el: HTMLElement | null = screen.getByText(name)
    while (el && !(el.className || "").includes("min-h-[64px]")) {
      el = el.parentElement
    }
    if (!el) throw new Error(`Row for "${name}" not found`)
    return el
  }

  /**
   * A pinned-owner + members list, with independent `editableIds` /
   * `removableIds` gates (each omitted → all rows).
   */
  function renderMembers(
    opts: {
      editableIds?: Array<string | number>
      removableIds?: Array<string | number>
      onRemove?: () => Promise<{ success: boolean } | void>
    } = {}
  ) {
    const schema = z.object({
      members: f0FormField.entitiesList({
        label: "Members",
        schema: z.object({
          name: z.string().min(1),
          role: z.string().min(1),
        }),
        config: {
          visualization: "list-view",
          ...(opts.editableIds ? { editableIds: opts.editableIds } : {}),
          ...(opts.removableIds ? { removableIds: opts.removableIds } : {}),
          ...(opts.onRemove ? { onRemove: opts.onRemove } : {}),
        },
      }),
    })
    return render(
      <F0Form
        name="members"
        schema={schema}
        defaultValues={{
          members: [
            { id: "owner", name: "Ada", role: "Owner" },
            { id: "m1", name: "Bob", role: "Member" },
            { id: "m2", name: "Cid", role: "Member" },
          ],
        }}
        onSubmit={async () => ({ success: true })}
      />
    )
  }

  it("hides remove for a row outside removableIds (pinned owner)", async () => {
    // Everyone removable except the pinned owner; editing left ungated.
    renderMembers({ removableIds: ["m1", "m2"] })

    // The owner is still editable (editableIds omitted), but not removable:
    // remove is its only overflow item, so with it gated out there's no ⋮ menu.
    const owner = rowOf("Ada")
    expect(
      within(owner).getByRole("button", { name: "Edit" })
    ).toBeInTheDocument()
    expect(within(owner).queryByRole("button", { name: "Actions" })).toBeNull()

    // A removable member has the overflow menu with Remove.
    await userEvent.click(
      within(rowOf("Bob")).getByRole("button", { name: "Actions" })
    )
    expect(
      await screen.findByRole("menuitem", { name: "Remove" })
    ).toBeInTheDocument()
  })

  it("keeps every row removable when removableIds is omitted (back-compat)", async () => {
    renderMembers()

    // With no gate every row exposes edit and an overflow trigger, and the
    // pinned owner is removable too.
    expect(screen.getAllByRole("button", { name: "Edit" })).toHaveLength(3)
    expect(screen.getAllByRole("button", { name: "Actions" })).toHaveLength(3)
    await userEvent.click(
      within(rowOf("Ada")).getByRole("button", { name: "Actions" })
    )
    expect(
      await screen.findByRole("menuitem", { name: "Remove" })
    ).toBeInTheDocument()
  })

  it("gates edit and remove independently (removable but not editable)", async () => {
    // Owner is removable but NOT editable; the axes don't track each other.
    renderMembers({ editableIds: ["m1", "m2"], removableIds: ["owner"] })

    // Check the member first: opening a row's overflow menu marks the rest of
    // the page inert (Radix focus-trap), so assert the un-opened rows before
    // clicking into the owner's menu below.
    // A member is editable but not removable: pencil, no ⋮ menu.
    const member = rowOf("Bob")
    expect(
      within(member).getByRole("button", { name: "Edit" })
    ).toBeInTheDocument()
    expect(within(member).queryByRole("button", { name: "Actions" })).toBeNull()

    // The owner is not editable (no pencil) but is removable (⋮ → Remove).
    const owner = rowOf("Ada")
    expect(within(owner).queryByRole("button", { name: "Edit" })).toBeNull()
    await userEvent.click(
      within(owner).getByRole("button", { name: "Actions" })
    )
    expect(
      await screen.findByRole("menuitem", { name: "Remove" })
    ).toBeInTheDocument()
  })

  it("removes a removable row from the overflow menu (confirm + onRemove)", async () => {
    const confirmation = vi
      .spyOn(dialogs, "confirmation")
      .mockResolvedValue(true)
    const onRemove = vi.fn(async () => ({ success: true }))
    renderMembers({ removableIds: ["m1", "m2"], onRemove })

    await userEvent.click(
      within(rowOf("Bob")).getByRole("button", { name: "Actions" })
    )
    await userEvent.click(
      await screen.findByRole("menuitem", { name: "Remove" })
    )

    await waitFor(() => expect(confirmation).toHaveBeenCalledTimes(1))
    await waitFor(() =>
      expect(onRemove).toHaveBeenCalledWith(
        expect.objectContaining({ id: "m1", name: "Bob" })
      )
    )
    // The row is gone once onRemove resolves.
    await waitFor(() => expect(screen.queryByText("Bob")).toBeNull())
  })
})
