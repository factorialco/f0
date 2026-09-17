import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fireEvent, userEvent, waitFor, within } from "storybook/test"
import { z } from "zod"
import { f0FormField, F0Form } from ".."

/**
 * Who is looking at the profile. The viewer does not change while a profile is
 * mounted, so it is resolved when the schema is built rather than watched.
 */
type Viewer = "self" | "manager" | "admin"

/** What that viewer may do with one field. */
type Access = "hidden" | "read" | "edit"

/**
 * The prototype's access map, one row per field. `hidden` becomes `renderIf`
 * and `edit` becomes `editable`, which is the whole of what a viewer changes:
 * the three stories below render the same component from the same builder.
 */
const ACCESS: Record<string, Record<Viewer, Access>> = {
  manager: { self: "read", manager: "read", admin: "edit" },
  legalEntity: { self: "hidden", manager: "read", admin: "edit" },
  jobTitle: { self: "read", manager: "read", admin: "edit" },
  contractStart: { self: "read", manager: "read", admin: "edit" },
  employeeNumber: { self: "read", manager: "read", admin: "edit" },
  seniorityDate: { self: "hidden", manager: "read", admin: "edit" },

  firstName: { self: "edit", manager: "read", admin: "edit" },
  lastName: { self: "edit", manager: "read", admin: "edit" },
  preferredName: { self: "edit", manager: "edit", admin: "edit" },
  dateOfBirth: { self: "edit", manager: "read", admin: "edit" },
  hideBirthday: { self: "edit", manager: "hidden", admin: "edit" },
  countryOfBirth: { self: "edit", manager: "read", admin: "edit" },
  nationality: { self: "edit", manager: "read", admin: "edit" },
  legalGender: { self: "read", manager: "hidden", admin: "edit" },

  identifierType: { self: "read", manager: "read", admin: "edit" },
  identifier: { self: "read", manager: "hidden", admin: "edit" },
  expirationDate: { self: "edit", manager: "read", admin: "edit" },
}

const MANAGERS = [
  {
    value: "marta",
    label: "Marta Ibáñez",
    avatar: {
      type: "person" as const,
      firstName: "Marta",
      lastName: "Ibáñez",
    },
  },
  {
    value: "jordi",
    label: "Jordi Serra",
    avatar: { type: "person" as const, firstName: "Jordi", lastName: "Serra" },
  },
]

const LEGAL_ENTITIES = [
  { value: "es", label: "Factorial HR SL" },
  { value: "pt", label: "Factorial HR Portugal Lda" },
]

const COUNTRIES = [
  { value: "es", label: "Spain" },
  { value: "pt", label: "Portugal" },
  { value: "fr", label: "France" },
]

const GENDERS = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "non-binary", label: "Non-binary" },
]

const IDENTIFIER_TYPES = [
  { value: "dni", label: "DNI" },
  { value: "nie", label: "NIE" },
  { value: "passport", label: "Passport" },
]

const SECTIONS = {
  work: { title: "Work details" },
  personal: { title: "Personal details" },
  identification: { title: "Identification documents" },
}

const DEFAULTS = {
  manager: "marta",
  legalEntity: "es",
  jobTitle: "Senior product designer",
  contractStart: new Date(2021, 8, 1),
  employeeNumber: "EMP-004821",
  seniorityDate: new Date(2021, 8, 1),

  firstName: "Ada",
  lastName: "Lovelace",
  preferredName: "Ada",
  dateOfBirth: new Date(1992, 11, 10),
  hideBirthday: false,
  countryOfBirth: "es",
  nationality: "es",
  legalGender: "female",

  identifierType: "dni",
  identifier: "45120933X",
  expirationDate: new Date(2030, 4, 22),
} as const

/**
 * One builder, three viewers. Every field resolves its own access tier and
 * turns it into the two properties the inline mode reads: `renderIf` decides
 * whether the row exists at all, `editable` whether it can be activated.
 */
function buildProfileSchema(viewer: Viewer) {
  const access = (id: string) => ACCESS[id][viewer]
  const tier = (id: string) => ({
    renderIf: () => access(id) !== "hidden",
    editable: access(id) === "edit",
  })

  return z.object({
    manager: f0FormField(z.enum(["marta", "jordi"]), {
      label: "Manager",
      section: "work",
      options: MANAGERS,
      ...tier("manager"),
    }),
    legalEntity: f0FormField(z.enum(["es", "pt"]), {
      label: "Legal entity",
      section: "work",
      options: LEGAL_ENTITIES,
      ...tier("legalEntity"),
    }),
    jobTitle: f0FormField(z.string(), {
      label: "Job title",
      section: "work",
      ...tier("jobTitle"),
    }),
    contractStart: f0FormField(z.date(), {
      label: "Contract start date",
      section: "work",
      ...tier("contractStart"),
    }),
    employeeNumber: f0FormField(z.string(), {
      label: "Employee number",
      section: "work",
      copyable: true,
      ...tier("employeeNumber"),
    }),
    seniorityDate: f0FormField(z.date(), {
      label: "Seniority date",
      section: "work",
      ...tier("seniorityDate"),
    }),

    firstName: f0FormField(z.string().min(2, "Enter at least two characters"), {
      label: "First name",
      section: "personal",
      ...tier("firstName"),
    }),
    lastName: f0FormField(z.string(), {
      label: "Last name",
      section: "personal",
      ...tier("lastName"),
    }),
    preferredName: f0FormField(z.string(), {
      label: "Preferred name",
      section: "personal",
      helpText: "What colleagues see across the product",
      ...tier("preferredName"),
    }),
    dateOfBirth: f0FormField(z.date(), {
      label: "Date of birth",
      section: "personal",
      ...tier("dateOfBirth"),
    }),
    hideBirthday: f0FormField(z.boolean(), {
      label: "Hide birthday",
      section: "personal",
      fieldType: "switch",
      ...tier("hideBirthday"),
    }),
    countryOfBirth: f0FormField(z.enum(["es", "pt", "fr"]), {
      label: "Country of birth",
      section: "personal",
      options: COUNTRIES,
      ...tier("countryOfBirth"),
    }),
    nationality: f0FormField(z.enum(["es", "pt", "fr"]), {
      label: "Nationality",
      section: "personal",
      options: COUNTRIES,
      ...tier("nationality"),
    }),
    legalGender: f0FormField(z.enum(["female", "male", "non-binary"]), {
      label: "Legal gender",
      section: "personal",
      options: GENDERS,
      ...tier("legalGender"),
    }),

    identifierType: f0FormField(z.enum(["dni", "nie", "passport"]), {
      label: "Identifier type",
      section: "identification",
      options: IDENTIFIER_TYPES,
      ...tier("identifierType"),
    }),
    identifier: f0FormField(z.string(), {
      label: "Identifier",
      section: "identification",
      copyable: true,
      ...tier("identifier"),
    }),
    expirationDate: f0FormField(z.date(), {
      label: "Expiration date",
      section: "identification",
      ...tier("expirationDate"),
    }),
  })
}

const Profile = ({ viewer }: { viewer: Viewer }) => (
  <div className="w-[720px]">
    <F0Form
      name={`employee-profile-${viewer}`}
      inline
      schema={buildProfileSchema(viewer)}
      sections={SECTIONS}
      defaultValues={DEFAULTS}
      onSubmit={async () => ({ success: true }) as const}
      submitConfig={{ type: "action-bar", discardable: true }}
    />
  </div>
)

/** The row whose label column reads exactly this. */
function rowFor(canvasElement: HTMLElement, label: string) {
  const row = Array.from(
    canvasElement.querySelectorAll<HTMLElement>(
      '[data-slot="inline-field-row"]'
    )
  ).find((candidate) => candidate.firstElementChild?.textContent === label)
  if (!row) {
    throw new Error(`no row labelled "${label}"`)
  }
  return row
}

const boxOf = (row: HTMLElement) =>
  row.querySelector<HTMLElement>('[data-slot="inline-field-row-value"]')

/**
 * Where the first glyph is painted. The read text carries its inset inside its
 * own rect; an input carries the same inset as `padding-left`, so both have to
 * be asked for it or the comparison reports a jump that is not there.
 */
function textStartX(element: Element) {
  const { left } = element.getBoundingClientRect()
  return left + parseFloat(getComputedStyle(element).paddingLeft)
}

const EDITOR = "input, [role='combobox']"

/** The element carrying the inset, whichever mode the row is in. */
function inset(row: HTMLElement) {
  const element = row.querySelector(
    `[data-testid='input-field-inline-value'] > span, [data-testid='select-inline-value'], ${EDITOR}`
  )
  if (!element) {
    throw new Error("the row rendered neither a value nor an editor")
  }
  return element
}

/**
 * An open dropdown puts its trigger under `aria-hidden`, so an accessible query
 * cannot see the editor it just opened. Ask the DOM.
 */
const editorOf = (row: HTMLElement) => row.querySelector(EDITOR)

const waitForEditor = (row: HTMLElement) =>
  waitFor(() => expect(editorOf(row)).not.toBeNull())

const waitForNoEditor = (row: HTMLElement) =>
  waitFor(() => expect(editorOf(row)).toBeNull())

/**
 * The action strip is `pointer-events: none` until something focuses or hovers
 * the row, which is exactly what it should be and exactly what a click cannot
 * get through. Tab to the activator and press Enter instead.
 */
async function activate(row: HTMLElement, label: string) {
  const activator = within(row).getByRole("button", { name: label })
  activator.focus()
  await userEvent.keyboard("{Enter}")
}

/** The calendar fades its month in over 150ms, which framer-motion keeps running. */
const settleCalendar = () => new Promise((resolve) => setTimeout(resolve, 300))

const meta: Meta = {
  title: "Forms/F0Form/Inline profile",
  component: F0Form,
  tags: ["stable", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component:
          "An employee profile as inline detail rows: three sections of values that read as text and become their own editor when activated. The three stories are the same form component built from one schema builder — only the viewer changes, and with it each field's `hidden | read | edit` tier, resolved into `renderIf` and `editable`.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * The HR admin edits every row. The play function pins the promise the pattern
 * makes: activating a row moves nothing — same box height, same first glyph —
 * for a text row, a select row and a date row.
 */
export const AsAdmin: Story = {
  render: () => <Profile viewer="admin" />,
  play: async ({ canvasElement, step }) => {
    await step("A text row keeps its box and its inset", async () => {
      const row = rowFor(canvasElement, "Job title")
      const readHeight = boxOf(row)?.getBoundingClientRect().height
      const readX = textStartX(inset(row))

      await expect(readHeight).toBe(40)

      await activate(row, "Job title")
      await waitForEditor(row)

      await expect(boxOf(row)?.getBoundingClientRect().height).toBe(readHeight)
      await expect(
        Math.abs(textStartX(inset(row)) - readX)
      ).toBeLessThanOrEqual(1)
      await userEvent.keyboard("{Escape}")
      await waitForNoEditor(row)
    })

    await step("A select row keeps its box and its inset", async () => {
      const row = rowFor(canvasElement, "Nationality")
      const readHeight = boxOf(row)?.getBoundingClientRect().height
      const readX = textStartX(inset(row))

      await expect(readHeight).toBe(40)

      await activate(row, "Nationality")
      await waitForEditor(row)

      await expect(boxOf(row)?.getBoundingClientRect().height).toBe(readHeight)
      await expect(
        Math.abs(textStartX(inset(row)) - readX)
      ).toBeLessThanOrEqual(1)

      // An open Radix popup puts `pointer-events: none` on the body, so a
      // userEvent click never lands. Dismiss it the way Radix listens.
      fireEvent.pointerDown(document.body)
      await waitForNoEditor(row)
    })

    await step("A date row keeps its box and its inset", async () => {
      const row = rowFor(canvasElement, "Contract start date")
      const readHeight = boxOf(row)?.getBoundingClientRect().height
      const readX = textStartX(inset(row))

      await expect(readHeight).toBe(40)

      await activate(row, "Contract start date")
      await waitForEditor(row)

      await expect(boxOf(row)?.getBoundingClientRect().height).toBe(readHeight)
      await expect(
        Math.abs(textStartX(inset(row)) - readX)
      ).toBeLessThanOrEqual(1)

      await settleCalendar()
      await userEvent.keyboard("{Escape}")
      await waitForNoEditor(row)
      await settleCalendar()
    })
  },
}

/**
 * The employee's own view. Half the rows read without an activator and two are
 * not there at all, from the same schema builder — and the rows they can edit
 * behave: Enter keeps the draft and raises the bar, Escape puts the old value
 * back.
 */
export const AsSelf: Story = {
  render: () => <Profile viewer="self" />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Leave out the rows this viewer may not see", async () => {
      await expect(canvas.queryByText("Legal entity")).toBeNull()
      await expect(canvas.queryByText("Seniority date")).toBeNull()
    })

    await step("Offer nothing to activate on a read-only row", async () => {
      for (const label of ["Manager", "Job title", "Employee number"]) {
        const row = rowFor(canvasElement, label)
        await expect(
          within(row).queryByRole("button", { name: label })
        ).toBeNull()
        await expect(
          within(row).queryByRole("button", { name: `Edit ${label}` })
        ).toBeNull()
      }
    })

    await step("Still offer copy on a read-only row", async () => {
      const row = rowFor(canvasElement, "Employee number")
      await expect(
        within(row).getByRole("button", { name: "Copy Employee number" })
      ).toBeInTheDocument()
    })

    await step("Keep an edit on Enter and raise the action bar", async () => {
      const row = rowFor(canvasElement, "First name")
      await activate(row, "First name")

      const input = await within(row).findByRole("textbox")
      await userEvent.clear(input)
      await userEvent.type(input, "Augusta{Enter}")

      await waitFor(() => expect(within(row).queryByRole("textbox")).toBeNull())
      await expect(within(row).getByText("Augusta")).toBeVisible()
      // The bar renders outside the canvas. Asserted present rather than
      // visible: it fades itself in with framer-motion, which the test runner
      // does not pause, so its opacity is whatever the animation is on when
      // the assertion runs — measured at 0 for over a second in a browser.
      await waitFor(() =>
        expect(
          within(document.body).getByText(
            "You have changes pending to be saved"
          )
        ).toBeInTheDocument()
      )
    })

    await step("Put the old value back on Escape", async () => {
      const row = rowFor(canvasElement, "Preferred name")
      await activate(row, "Preferred name")

      const input = await within(row).findByRole("textbox")
      await userEvent.clear(input)
      await userEvent.type(input, "Gus{Escape}")

      await waitFor(() => expect(within(row).queryByRole("textbox")).toBeNull())
      await expect(within(row).getByText("Ada")).toBeVisible()
      await waitFor(() =>
        expect(
          within(row).getByRole("button", { name: "Preferred name" })
        ).toHaveFocus()
      )
    })
  },
}

/**
 * The manager sees the work rows and the everyday personal ones, and edits only
 * the preferred name. Nothing about the component changed between this story
 * and the two above.
 */
export const AsManager: Story = {
  render: () => <Profile viewer="manager" />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Show the work rows, read-only", async () => {
      await expect(canvas.getByText("Legal entity")).toBeVisible()
      const row = rowFor(canvasElement, "Legal entity")
      await expect(
        within(row).queryByRole("button", { name: "Legal entity" })
      ).toBeNull()
    })

    await step("Leave out the rows a manager has no business in", async () => {
      await expect(canvas.queryByText("Legal gender")).toBeNull()
      await expect(canvas.queryByText("Hide birthday")).toBeNull()
      await expect(canvas.queryByText("Identifier")).toBeNull()
    })

    await step("Leave the one editable row activatable", async () => {
      const row = rowFor(canvasElement, "Preferred name")
      await expect(
        within(row).getByRole("button", { name: "Preferred name" })
      ).toBeInTheDocument()
    })
  },
}
