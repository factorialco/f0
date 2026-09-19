import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import { z } from "zod"
import { f0FormField, F0Form } from ".."

const TEAMS = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
]

const submit = async () => ({ success: true }) as const

const actionBar = { type: "action-bar" as const, discardable: true }

const everyTypeSchema = z.object({
  fullName: f0FormField(z.string(), { label: "Full name" }),
  salary: f0FormField(z.number(), {
    label: "Salary",
    fieldType: "money",
    currency: "EUR",
  }),
  team: f0FormField(z.enum(["design", "engineering"]), {
    label: "Team",
    options: TEAMS,
  }),
  startDate: f0FormField(z.date(), { label: "Start date" }),
  remote: f0FormField(z.boolean(), { label: "Remote", fieldType: "switch" }),
  newsletter: f0FormField(z.boolean(), {
    label: "Newsletter",
    fieldType: "checkbox",
  }),
})

const everyTypeDefaults = {
  fullName: "Ada Lovelace",
  salary: 54000,
  team: "design" as const,
  startDate: new Date(2026, 3, 10),
  remote: true,
  newsletter: false,
}

const meta: Meta = {
  title: "Forms/F0Form/Inline",
  component: F0Form,
  tags: ["stable", "!autodocs"],
  parameters: { a11y: { test: "error" } },
}

export default meta
type Story = StoryObj<typeof meta>

export const EveryTypeReading: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-every-type"
        inline
        schema={everyTypeSchema}
        defaultValues={everyTypeDefaults}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Print every value as text", async () => {
      await expect(canvas.getByText("Ada Lovelace")).toBeVisible()

      await expect(await canvas.findByText("Design")).toBeVisible()
      await expect(canvas.getByText("10 Apr 2026")).toBeVisible()
      await expect(canvas.queryByRole("textbox")).toBeNull()
    })

    await step("Print the select at the weight the text rows use", async () => {
      const weightOf = (text: string) =>
        getComputedStyle(canvas.getByText(text)).fontWeight

      await expect(weightOf("Design")).toBe(weightOf("Ada Lovelace"))
    })

    await step(
      "Leave the toggles live, with no activator of their own",
      async () => {
        await expect(
          canvas.getByRole("switch", { name: "Remote" })
        ).toBeEnabled()
        await expect(
          canvas.getByRole("checkbox", { name: "Newsletter" })
        ).toBeEnabled()
        await expect(
          canvas.queryByRole("button", { name: "Edit Remote" })
        ).toBeNull()
      }
    )
  },
}

/** Tab reveals the action strip before activation. */
export const EditingATextRow: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-editing-text"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
        })}
        defaultValues={{ fullName: "Ada Lovelace" }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Activate the row", async () => {
      await userEvent.tab()
      const activator = canvas.getByRole("button", { name: "Full name" })
      await expect(activator).toHaveFocus()
      await userEvent.keyboard("{Enter}")
    })

    await step("Show the editor with the same value", async () => {
      const input = await canvas.findByRole("textbox")
      await expect(input).toHaveValue("Ada Lovelace")
    })
  },
}

/** A row in error keeps the editor open and tints it like a focused error. */
export const ErrorWhileEditing: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-error-editing"
        inline
        errorTriggerMode="on-change"
        schema={z.object({
          fullName: f0FormField(z.string().min(3, "Too short"), {
            label: "Full name",
          }),
        })}
        defaultValues={{ fullName: "Ada Lovelace" }}
        onSubmit={submit}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Type a value the schema rejects", async () => {
      await userEvent.tab()
      await userEvent.keyboard("{Enter}")
      const input = await canvas.findByRole("textbox")
      await userEvent.clear(input)
      await userEvent.type(input, "Ad")
      await expect(await canvas.findByText("Too short")).toBeVisible()
    })

    await step("Keep the editor open, tinted and outlined", async () => {
      const input = canvas.getByRole("textbox")
      const wrapper = input.closest(
        '[data-testid="input-field-wrapper"]'
      ) as HTMLElement
      await expect(wrapper).toHaveClass("border-f1-border-critical-bold")
      await expect(wrapper).toHaveClass("bg-f1-background-critical")
    })
  },
}

/**
 * A value the save refuses comes back as a field error. The row reopens on the
 * refused value and looks exactly like a client-side one.
 */
export const ErrorFromTheSave: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-error-save"
        inline
        schema={z.object({
          identifier: f0FormField(z.string(), { label: "ID number" }),
        })}
        defaultValues={{ identifier: "73194628" }}
        submitConfig={actionBar}
        onSubmit={async () => ({
          success: false,
          errors: { identifier: "Invalid DNI number" },
        })}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await step("Edit the row and save it", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "ID number" }))
      const input = await canvas.findByRole("textbox", { name: "ID number" })
      await userEvent.clear(input)
      await userEvent.type(input, "73194628S{Enter}")
      await waitFor(() => expect(canvas.getByText("73194628S")).toBeVisible())

      await userEvent.click(body.getByRole("button", { name: /submit/i }))
    })

    await step("Reopen the row on the refused value", async () => {
      const reopened = await canvas.findByRole("textbox", {
        name: "ID number",
      })
      await expect(reopened).toHaveValue("73194628S")
      await waitFor(() => expect(reopened).toHaveFocus())

      const wrapper = reopened.closest(
        '[data-testid="input-field-wrapper"]'
      ) as HTMLElement
      await expect(wrapper).toHaveClass("border-f1-border-critical-bold")
      await expect(wrapper).toHaveClass("bg-f1-background-critical")
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

/**
 * Only the value cell is the hover target. A play function cannot produce a
 * real CSS `:hover`, so the story pins the geometry the reveal keys off.
 */
export const HoverScopeIsTheValueCell: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-hover-scope"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
          team: f0FormField(z.enum(["design", "engineering"]), {
            label: "Team",
            options: TEAMS,
          }),
        })}
        defaultValues={{ fullName: "Ada Lovelace", team: "design" as const }}
        onSubmit={submit}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const rows = canvasElement.querySelectorAll<HTMLElement>(
      '[data-slot="inline-field-row"]'
    )
    const [textRow, selectRow] = [rows[0], rows[1]]
    const strip = textRow.querySelector<HTMLElement>(
      '[data-slot="inline-field-row-actions"]'
    )!
    const chevron = selectRow.querySelector<HTMLElement>(
      '[data-testid="select-inline-value"] span[aria-hidden="true"]'
    )!
    const group = strip.closest(".group") as HTMLElement

    await step("The strip and the chevron key off the same group", async () => {
      await expect(strip.matches(".group *")).toBe(true)
      await expect(chevron.matches(".group *")).toBe(true)
      const selectGroup = chevron.closest(".group") as HTMLElement
      await expect(
        selectGroup.contains(
          within(selectRow).getByRole("button", { name: "Team" })
        )
      ).toBe(true)
      await expect(
        selectGroup.contains(within(selectRow).getByText("Team"))
      ).toBe(false)
    })

    await step(
      "That group covers the value cell and nothing else",
      async () => {
        const box = canvas
          .getByRole("button", { name: "Full name" })
          .getBoundingClientRect()
        const hoverArea = group.getBoundingClientRect()

        await expect(Math.round(hoverArea.left)).toBe(Math.round(box.left))
        await expect(Math.round(hoverArea.right)).toBe(Math.round(box.right))
        await expect(
          group.contains(within(textRow).getByText("Full name"))
        ).toBe(false)
      }
    )

    await step("Both start hidden", async () => {
      await expect(strip).toHaveStyle({ opacity: "0" })
      await expect(chevron).toHaveStyle({ opacity: "0" })
    })
  },
}

/** A mouse-driven edit must not pin the strip open once the pointer leaves. */
export const StripHidesAfterAMouseEdit: Story = {
  render: () => (
    <div className="flex w-160 flex-col gap-4">
      <F0Form
        name="inline-strip-unpin"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
        })}
        defaultValues={{ fullName: "Ada Lovelace" }}
        onSubmit={submit}
      />
      <div data-testid="elsewhere">Elsewhere</div>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // The strip unmounts while the row is editing, so re-query it every time.
    const strip = () =>
      canvasElement.querySelector<HTMLElement>(
        '[data-slot="inline-field-row-actions"]'
      )!

    await step("Edit with the mouse and commit with Enter", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Full name" }))
      const input = await canvas.findByRole("textbox")
      await userEvent.clear(input)
      await userEvent.type(input, "Grace Hopper{Enter}")
      await waitFor(() => expect(canvas.queryByRole("textbox")).toBeNull())
    })

    await step("Keep the strip hidden once focus comes back", async () => {
      const activator = canvas.getByRole("button", { name: "Full name" })
      await waitFor(() => expect(activator).toHaveFocus())
      await waitFor(() => expect(strip()).toHaveStyle({ opacity: "0" }))
    })

    await step("Still reveal it when it takes the focus ring", async () => {
      await userEvent.tab()
      await waitFor(() =>
        expect(
          canvas.getByRole("button", { name: "Edit Full name" })
        ).toHaveFocus()
      )
      await waitFor(() => expect(strip()).toHaveStyle({ opacity: "1" }))
    })
  },
}

export const ActionBarAfterAnEdit: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-action-bar"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
        })}
        defaultValues={{ fullName: "Ada Lovelace" }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Edit the value and commit with Enter", async () => {
      await userEvent.tab()
      await userEvent.keyboard("{Enter}")
      const input = await canvas.findByRole("textbox")
      await userEvent.clear(input)
      await userEvent.type(input, "Grace Hopper{Enter}")
    })

    await step("Keep the draft and float the bar", async () => {
      await waitFor(() => expect(canvas.queryByRole("textbox")).toBeNull())
      await expect(canvas.getByText("Grace Hopper")).toBeVisible()
      // The action bar is portaled and may still be fading in.
      await waitFor(() =>
        expect(
          within(document.body).getByText(
            "You have changes pending to be saved"
          )
        ).toBeInTheDocument()
      )
    })
  },
}

export const PrivateValue: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-private-value"
        inline
        schema={z.object({
          account: f0FormField(z.string(), {
            label: "Account number",
            inputType: "private",
          }),
        })}
        defaultValues={{ account: "123456789" }}
        onSubmit={submit}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step("Mask the resting value and tooltip", async () => {
      await expect(canvas.queryByText("123456789")).toBeNull()
      await expect(canvas.queryByTitle("123456789")).toBeNull()
    })
    await step(
      "Reveal on focus and remask the edited value on blur",
      async () => {
        await userEvent.click(
          canvas.getByRole("button", { name: "Account number" })
        )
        const input = await canvas.findByRole("textbox", {
          name: "Account number",
        })
        await expect(input).toHaveFocus()
        await expect(input).toHaveValue("123456789")
        await userEvent.clear(input)
        await userEvent.type(input, "987654321")
        await userEvent.tab()
        await waitFor(() => expect(canvas.queryByRole("textbox")).toBeNull())
        await expect(canvas.queryByText("987654321")).toBeNull()
        await expect(canvas.queryByTitle("987654321")).toBeNull()
      }
    )
  },
}

export const EscapeReverts: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-escape"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
        })}
        defaultValues={{ fullName: "Ada Lovelace" }}
        onSubmit={submit}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await userEvent.tab()
    await userEvent.keyboard("{Enter}")
    const input = await canvas.findByRole("textbox")
    await userEvent.clear(input)
    await userEvent.type(input, "Grace Hopper{Escape}")

    await step("Read the old value again", async () => {
      await waitFor(() => expect(canvas.queryByRole("textbox")).toBeNull())
      await expect(canvas.getByText("Ada Lovelace")).toBeVisible()
    })

    await step("Return focus to the activator", async () => {
      await waitFor(() =>
        expect(canvas.getByRole("button", { name: "Full name" })).toHaveFocus()
      )
    })
  },
}

export const NotEditable: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-not-editable"
        inline
        schema={z.object({
          employeeId: f0FormField(z.string(), {
            label: "Employee ID",
            editable: false,
          }),
          remote: f0FormField(z.boolean(), {
            label: "Remote",
            fieldType: "switch",
            editable: false,
          }),
        })}
        defaultValues={{ employeeId: "FT-1042", remote: true }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Offer nothing to activate", async () => {
      await expect(canvas.getByText("FT-1042")).toBeVisible()
      await expect(
        canvas.queryByRole("button", { name: "Employee ID" })
      ).toBeNull()
      await expect(canvas.queryByRole("button", { name: /^Edit/ })).toBeNull()
    })

    await step("Express a read-only toggle as disabled", async () => {
      await expect(
        canvas.getByRole("switch", { name: "Remote" })
      ).toBeDisabled()
    })
  },
}

export const Copyable: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-copyable"
        inline
        schema={z.object({
          email: f0FormField(z.string().email(), {
            label: "Email",
            copyable: true,
          }),
          team: f0FormField(z.enum(["design", "engineering"]), {
            label: "Team",
            options: TEAMS,
            copyable: true,
          }),
        })}
        defaultValues={{ email: "ada@factorial.co", team: "design" }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Offer copy after edit, on both rows", async () => {
      await expect(
        canvas.getByRole("button", { name: "Copy Email" })
      ).toBeInTheDocument()
      await expect(
        canvas.getByRole("button", { name: "Copy Team" })
      ).toBeInTheDocument()
    })
  },
}

const COMMUTES = [
  { value: "bicycle", label: "Bicycle" },
  { value: "walking", label: "Walking" },
  { value: "train", label: "Train" },
]

export const MultiSelectRow: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-multi-select"
        inline
        schema={z.object({
          commute: f0FormField(z.array(z.string()), {
            label: "Commute",
            multiple: true,
            options: COMMUTES,
            copyable: true,
          }),
        })}
        defaultValues={{ commute: ["bicycle", "walking"] }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Read the whole selection as one line of text", async () => {
      await expect(await canvas.findByText("Bicycle, Walking")).toBeVisible()
      await expect(canvas.queryByRole("combobox")).toBeNull()
    })

    await step("Leave the chevron as the row's only affordance", async () => {
      await expect(
        canvas.queryByRole("button", { name: "Edit Commute" })
      ).toBeNull()
    })

    await step("Copy the labels, joined the way the row reads", async () => {
      const writeText = fn(async () => {})
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText },
        configurable: true,
      })

      // The strip is inert until the row is hovered or holds a focus ring, and
      // a synthetic hover does not raise :hover in a real browser.
      await userEvent.tab()
      await expect(
        canvas.getByRole("button", { name: "Commute" })
      ).toHaveFocus()

      await userEvent.tab()
      const copy = canvas.getByRole("button", { name: "Copy Commute" })
      await expect(copy).toHaveFocus()
      await userEvent.keyboard("{Enter}")
      await waitFor(async () => {
        await expect(writeText).toHaveBeenCalledWith("Bicycle, Walking")
      })
    })
  },
}

export const UnsupportedTypeFallsBack: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-unsupported"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
          bio: f0FormField(z.string(), { label: "Bio", fieldType: "textarea" }),
        })}
        defaultValues={{ fullName: "Ada Lovelace", bio: "Mathematician" }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step(
      "Render the standard field, with nothing to activate",
      async () => {
        await expect(canvas.getByRole("textbox", { name: "Bio" })).toBeVisible()
        await expect(
          canvas.queryByRole("button", { name: "Edit Bio" })
        ).toBeNull()
      }
    )

    await step("Leave the supported rows alone", async () => {
      await expect(
        canvas.getByRole("button", { name: "Edit Full name" })
      ).toBeInTheDocument()
    })
  },
}

/** Hidden fields keep a span mounted; only visible rows should get dividers. */
export const HiddenLastRowLeavesNoDivider: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-hidden-last"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), { label: "Full name" }),
          team: f0FormField(z.enum(["design", "engineering"]), {
            label: "Team",
            options: TEAMS,
          }),
          ssn: f0FormField(z.string(), {
            label: "Social security number",
            renderIf: () => false,
          }),
        })}
        defaultValues={{
          fullName: "Ada Lovelace",
          team: "design",
          ssn: "042-88-1201",
        }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const rows = canvasElement.querySelectorAll<HTMLElement>(
      "[data-slot='inline-field-row']"
    )

    await step("Leave the hidden field out of the reading", async () => {
      await expect(canvas.queryByText("Social security number")).toBeNull()
      await expect(rows).toHaveLength(2)
    })

    await step("Draw no divider under the last visible row", async () => {
      await expect(getComputedStyle(rows[0]).borderBottomWidth).not.toBe("0px")
      await expect(getComputedStyle(rows[1]).borderBottomWidth).toBe("0px")
    })
  },
}

export const WithSections: Story = {
  render: () => (
    <div className="w-160">
      <F0Form
        name="inline-sections"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), {
            label: "Full name",
            section: "personal",
          }),
          team: f0FormField(z.enum(["design", "engineering"]), {
            label: "Team",
            options: TEAMS,
            section: "work",
          }),
          startDate: f0FormField(z.date(), {
            label: "Start date",
            section: "work",
          }),
        })}
        sections={{
          personal: { title: "Personal" },
          work: { title: "Work" },
        }}
        defaultValues={{
          fullName: "Ada Lovelace",
          team: "design",
          startDate: new Date(2026, 3, 10),
        }}
        onSubmit={submit}
        submitConfig={actionBar}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Keep the section titles", async () => {
      await expect(canvas.getByText("Personal")).toBeVisible()
      await expect(canvas.getByText("Work")).toBeVisible()
    })
  },
}

/** The sidepanel navigates a record the same way it navigates a form. */
export const SectionsSidepanel: Story = {
  render: () => (
    <div className="w-180">
      <F0Form
        name="inline-sidepanel"
        inline
        schema={z.object({
          fullName: f0FormField(z.string(), {
            label: "Full name",
            section: "personal",
          }),
          email: f0FormField(z.string().email(), {
            label: "Email",
            section: "personal",
          }),
          team: f0FormField(z.enum(["design", "engineering"]), {
            label: "Team",
            options: TEAMS,
            section: "work",
          }),
        })}
        sections={{
          personal: { title: "Personal" },
          work: { title: "Work" },
        }}
        defaultValues={{
          fullName: "Ada Lovelace",
          email: "ada@factorial.co",
          team: "design",
        }}
        onSubmit={submit}
        submitConfig={actionBar}
        styling={{ showSectionsSidepanel: true }}
      />
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Anchor every row and every section", async () => {
      const row = document.getElementById(
        "forms.inline-sidepanel.personal.email"
      )
      await expect(row).toHaveAttribute("data-slot", "inline-field-row")
      await expect(
        document.getElementById("forms.inline-sidepanel.work")
      ).toBeInTheDocument()
    })

    await step("Navigate to a section from the sidepanel", async () => {
      const sidebar = canvasElement.querySelector(".sticky") as HTMLElement
      await expect(sidebar).toBeInTheDocument()
      await userEvent.click(within(sidebar).getByText("Work"))
      await expect(await canvas.findByText("Design")).toBeVisible()
    })
  },
}
