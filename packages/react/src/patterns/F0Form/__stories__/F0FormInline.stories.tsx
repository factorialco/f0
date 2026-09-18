import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, waitFor, within } from "storybook/test"
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
