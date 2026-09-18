import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
  within,
} from "@/testing/test-utils"
import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"
import {
  isInlineSupported,
  resetInlineWarnings,
} from "../fields/inline/support"
import type { F0Field } from "../fields/types"

const profileSchema = z.object({
  fullName: f0FormField(z.string(), { label: "Full name" }),
  team: f0FormField(z.enum(["design", "engineering"]), {
    label: "Team",
    options: [
      { value: "design", label: "Design" },
      { value: "engineering", label: "Engineering" },
    ],
  }),
})

const defaults = { fullName: "Ada Lovelace", team: "design" as const }

function renderProfile(props: Record<string, unknown> = {}) {
  return render(
    <F0Form
      name="inline-profile"
      inline
      schema={profileSchema}
      defaultValues={defaults}
      onSubmit={async () => ({ success: true })}
      submitConfig={{ type: "action-bar", discardable: true }}
      {...props}
    />
  )
}

/** Define clipboard without replacing navigator prototype getters. */
const stubClipboard = (writeText: () => Promise<void>) =>
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  })

function activator(label: string) {
  return screen.getByRole("button", { name: label })
}

function editAction(label: string) {
  return screen.getByRole("button", { name: `Edit ${label}` })
}

describe("F0Form inline mode", () => {
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    resetInlineWarnings()
    // The select's list is virtualised and measures itself; jsdom reports 0.
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 800 })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { value: 800 })
  })
  afterEach(() => vi.restoreAllMocks())

  it("reads every value as text until a row is activated", () => {
    renderProfile()

    expect(screen.getByText("Full name")).toBeInTheDocument()
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.queryByRole("textbox")).toBeNull()
  })

  it("enters editing when the row is activated", async () => {
    const user = userEvent.setup()
    renderProfile()

    await user.click(activator("Full name"))

    const input = await screen.findByRole("textbox")
    expect(input).toHaveValue("Ada Lovelace")
  })

  it("masks private rows after blur and submits the actual edited value", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    renderProfile({
      schema: z.object({
        account: f0FormField(z.string(), {
          label: "Account number",
          inputType: "private",
        }),
      }),
      defaultValues: { account: "123456789" },
      onSubmit,
    })

    expect(screen.queryByText("123456789")).toBeNull()
    expect(screen.queryByTitle("123456789")).toBeNull()
    await user.click(activator("Account number"))
    const input = await screen.findByRole("textbox", { name: "Account number" })
    expect(input).toHaveFocus()
    expect(input).toHaveValue("123456789")
    await user.clear(input)
    await user.type(input, "987654321")
    await user.tab()

    await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
    expect(screen.queryByText("987654321")).toBeNull()
    expect(screen.queryByTitle("987654321")).toBeNull()
    const [submit] = await screen.findAllByRole("button", { name: /submit/i })
    await user.click(submit)
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ account: "987654321" })
    )
  })

  it("keeps the draft on Enter and shows the action bar", async () => {
    const user = userEvent.setup()
    renderProfile()

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Grace Hopper{Enter}")

    await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
    expect(screen.getByText("Grace Hopper")).toBeInTheDocument()

    await waitFor(() =>
      expect(
        screen.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
    )
  })

  it("puts the value back on Escape", async () => {
    const user = userEvent.setup()
    renderProfile()

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Grace Hopper{Escape}")

    await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
  })

  it("keeps the draft on blur", async () => {
    const user = userEvent.setup()
    renderProfile()

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Grace Hopper")
    await user.tab()

    await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
    expect(screen.getByText("Grace Hopper")).toBeInTheDocument()
  })

  it("stays editing while the field has a validation error", async () => {
    const user = userEvent.setup()
    renderProfile({
      schema: z.object({
        fullName: f0FormField(z.string().min(4, "Too short"), {
          label: "Full name",
        }),
      }),
      defaultValues: { fullName: "Ada Lovelace" },
      errorTriggerMode: "on-change",
    })

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Ad")
    await waitFor(() => expect(screen.getByText("Too short")).toBeVisible())

    await user.keyboard("{Enter}")
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("prints the reason a failing row was refused", async () => {
    const user = userEvent.setup()
    renderProfile({
      schema: z.object({
        fullName: f0FormField(z.string().min(4, "Too short"), {
          label: "Full name",
        }),
      }),
      defaultValues: { fullName: "Ada Lovelace" },
      errorTriggerMode: "on-change",
    })

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Ad")

    await waitFor(() =>
      expect(
        document.querySelector('[data-slot="inline-field-row-message"]')
      ).toHaveTextContent("Too short")
    )
  })

  it("restores focus to the activator a frame after the edit ends", async () => {
    const user = userEvent.setup()
    renderProfile()

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.type(input, "{Escape}")

    await waitFor(() => expect(activator("Full name")).toHaveFocus())
  })

  it("offers no activator when the field is not editable", () => {
    renderProfile({
      schema: z.object({
        fullName: f0FormField(z.string(), {
          label: "Full name",
          editable: false,
        }),
      }),
      defaultValues: { fullName: "Ada Lovelace" },
    })

    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Full name" })).toBeNull()
    expect(screen.queryByRole("button", { name: /^Edit/ })).toBeNull()
  })

  it("offers an edit action on an editable row", () => {
    renderProfile()
    expect(editAction("Full name")).toBeInTheDocument()
  })

  it("leaves a select row's affordance to its own chevron", () => {
    renderProfile()
    expect(screen.queryByRole("button", { name: "Edit Team" })).toBeNull()

    expect(activator("Team")).toBeInTheDocument()
  })

  describe("what the pointer promises over a value", () => {
    const boxFor = (label: string) =>
      activator(label).querySelector('[data-slot="inline-field-row-value"]')

    it("offers a caret on a row that turns into an input", () => {
      renderProfile()
      expect(boxFor("Full name")).toHaveClass("cursor-text")
    })

    it("offers a click on a row that opens a list", () => {
      renderProfile()
      expect(boxFor("Team")).toHaveClass("cursor-pointer")
    })

    it("offers a click on a row that opens a calendar", () => {
      renderProfile({
        schema: z.object({
          startDate: f0FormField(z.date(), { label: "Start date" }),
        }),
        defaultValues: { startDate: new Date(2026, 3, 10) },
      })
      expect(boxFor("Start date")).toHaveClass("cursor-pointer")
    })
  })

  it("keeps the picked option and returns the row to reading", async () => {
    const user = userEvent.setup()
    renderProfile()

    expect(screen.getByText("Design")).toBeInTheDocument()

    await user.click(activator("Team"))
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    fireEvent.animationStart(screen.getByRole("listbox"))
    await user.click(await screen.findByRole("option", { name: "Engineering" }))

    await waitFor(() => expect(screen.queryByRole("listbox")).toBeNull())
    expect(screen.getByText("Engineering")).toBeInTheDocument()
    await waitFor(() =>
      expect(
        screen.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
    )
  })

  it("keeps the component mounted across a mode change", async () => {
    const user = userEvent.setup()
    const { container } = renderProfile()

    const valueBox = () =>
      container.querySelectorAll<HTMLElement>(
        "[data-slot='inline-field-row-value']"
      )[0]
    const before = valueBox()

    await user.click(activator("Full name"))
    await screen.findByRole("textbox")

    // Keep the value mounted so pending changes survive mode transitions.
    expect(valueBox()).toBe(before)
  })

  it("copies a text value raw", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderProfile({
      schema: z.object({
        fullName: f0FormField(z.string(), {
          label: "Full name",
          copyable: true,
        }),
      }),
      defaultValues: { fullName: "Ada Lovelace" },
    })

    await userEvent.click(
      screen.getByRole("button", { name: "Copy Full name" })
    )
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("Ada Lovelace"))
  })

  it("copies a number without grouping or units", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderProfile({
      schema: z.object({
        salary: f0FormField(z.number(), {
          label: "Salary",
          fieldType: "money",
          currency: "EUR",
          copyable: true,
        }),
      }),
      defaultValues: { salary: 54000 },
    })

    await userEvent.click(screen.getByRole("button", { name: "Copy Salary" }))
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("54000"))
  })

  it("copies a select's option label, not its value", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderProfile({
      schema: z.object({
        team: f0FormField(z.enum(["design", "engineering"]), {
          label: "Team",
          options: [
            { value: "design", label: "Design" },
            { value: "engineering", label: "Engineering" },
          ],
          copyable: true,
        }),
      }),
      defaultValues: { team: "design" },
    })

    await userEvent.click(screen.getByRole("button", { name: "Copy Team" }))
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("Design"))
  })

  it("copies a date as the string the row reads", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    stubClipboard(writeText)

    renderProfile({
      schema: z.object({
        startDate: f0FormField(z.date(), {
          label: "Start date",
          copyable: true,
        }),
      }),
      defaultValues: { startDate: new Date(2026, 3, 10) },
    })

    await userEvent.click(
      screen.getByRole("button", { name: "Copy Start date" })
    )
    await waitFor(() => expect(writeText).toHaveBeenCalledWith("10 Apr 2026"))
  })

  it("offers no copy action for a toggle", () => {
    renderProfile({
      schema: z.object({
        remote: f0FormField(z.boolean(), {
          label: "Remote",
          fieldType: "switch",
          copyable: true,
        }),
      }),
      defaultValues: { remote: true },
    })

    expect(screen.queryByRole("button", { name: /^Copy/ })).toBeNull()
  })

  it("commits a toggle on click and never enters an edit mode", async () => {
    const user = userEvent.setup()
    renderProfile({
      schema: z.object({
        remote: f0FormField(z.boolean(), {
          label: "Remote",
          fieldType: "switch",
        }),
      }),
      defaultValues: { remote: false },
    })

    const toggle = screen.getByRole("switch", { name: "Remote" })
    expect(screen.queryByRole("button", { name: /^Edit/ })).toBeNull()

    await user.click(toggle)
    expect(toggle).toBeChecked()
  })

  it("disables a toggle that is not editable", () => {
    renderProfile({
      schema: z.object({
        remote: f0FormField(z.boolean(), {
          label: "Remote",
          fieldType: "switch",
          editable: false,
        }),
      }),
      defaultValues: { remote: true },
    })

    expect(screen.getByRole("switch", { name: "Remote" })).toBeDisabled()
  })

  it("falls back to the standard field for an unsupported type, warning once", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})

    renderProfile({
      schema: z.object({
        bio: f0FormField(z.string(), { label: "Bio", fieldType: "textarea" }),
        notes: f0FormField(z.string(), {
          label: "Notes",
          fieldType: "textarea",
        }),
      }),
      defaultValues: { bio: "Mathematician", notes: "" },
    })

    const bio = screen.getByRole("textbox", { name: "Bio" })

    // A live textarea proves inline props did not reach the input wrapper.
    expect(bio.tagName).toBe("TEXTAREA")
    expect(bio).toHaveValue("Mathematician")
    expect(bio).not.toHaveAttribute("variant")
    expect(bio).not.toHaveAttribute("editing")
    expect(screen.queryByRole("button", { name: "Edit Bio" })).toBeNull()
    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn.mock.calls[0][0]).toContain("textarea")
  })

  it("keeps textarea out of the inline supported set", () => {
    expect(
      isInlineSupported({
        id: "bio",
        type: "textarea",
        label: "Bio",
      } as F0Field)
    ).toBe(false)
  })

  it("leaves the last visible row undivided when renderIf hides the one after it", () => {
    const { container } = renderProfile({
      schema: z.object({
        fullName: f0FormField(z.string(), { label: "Full name" }),
        ssn: f0FormField(z.string(), {
          label: "Social security number",
          renderIf: () => false,
        }),
      }),
      defaultValues: { fullName: "Ada Lovelace", ssn: "042-88-1201" },
    })

    const rows = container.querySelectorAll("[data-slot='inline-field-row']")

    expect(screen.queryByText("Social security number")).toBeNull()
    expect(rows).toHaveLength(1)
    // Hidden controllers render spans; dividers count visible div rows.
    expect(rows[0].className).toContain("last-of-type:border-b-0")
    expect(rows[0].className).not.toContain("last:border-b-0")
  })

  it("keeps a hidden field's value so the form still submits it", async () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    const user = userEvent.setup()

    renderProfile({
      schema: z.object({
        fullName: f0FormField(z.string(), { label: "Full name" }),
        ssn: f0FormField(z.string(), {
          label: "Social security number",
          renderIf: () => false,
        }),
      }),
      defaultValues: { fullName: "Ada Lovelace", ssn: "042-88-1201" },
      onSubmit,
    })

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Grace Hopper{Enter}")

    const [submit] = await screen.findAllByRole("button", { name: /submit/i })
    await user.click(submit)

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ ssn: "042-88-1201" })
      )
    )
  })

  it("leaves the standard layout untouched when inline is false", () => {
    const { container } = render(
      <F0Form
        name="inline-off"
        schema={profileSchema}
        defaultValues={defaults}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(container.querySelector("[data-slot='inline-field-row']")).toBeNull()
    expect(screen.getByLabelText("Full name")).toBeInTheDocument()
  })
})

describe("F0Form inline mode through a form definition", () => {
  global.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => resetInlineWarnings())
  afterEach(() => vi.restoreAllMocks())

  function DefinitionProfile({
    onSubmit = async () => ({ success: true }),
  }: {
    onSubmit?: (arg: { data: { fullName: string } }) => Promise<{
      success: true
    }>
  }) {
    const formDefinition = useF0FormDefinition({
      name: "inline-definition-profile",
      schema: z.object({
        fullName: f0FormField(z.string(), { label: "Full name" }),
      }),
      defaultValues: { fullName: "Ada Lovelace" },
      onSubmit,
      submitConfig: { type: "action-bar", discardable: true },
    })

    return <F0Form formDefinition={formDefinition} inline />
  }

  it("reads the definition's fields as detail rows", () => {
    render(<DefinitionProfile />)

    expect(screen.getByText("Full name")).toBeInTheDocument()
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.queryByRole("textbox")).toBeNull()
    expect(
      document.querySelector("[data-slot='inline-field-row']")
    ).toBeInTheDocument()
  })

  it("shows the definition's action bar after an edit and submits the draft", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })
    render(<DefinitionProfile onSubmit={onSubmit} />)

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Grace Hopper{Enter}")

    await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
    await waitFor(() =>
      expect(
        screen.getByText("You have changes pending to be saved")
      ).toBeInTheDocument()
    )
    expect(screen.getByRole("button", { name: /discard/i })).toBeInTheDocument()

    const [submit] = await screen.findAllByRole("button", { name: /submit/i })
    await user.click(submit)

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        data: { fullName: "Grace Hopper" },
      })
    )
  })

  it("reads a per-section definition as detail rows", async () => {
    function PerSectionProfile() {
      const formDefinition = useF0FormDefinition({
        name: "inline-per-section",
        schema: {
          work: z.object({
            team: f0FormField(z.string(), { label: "Team" }),
          }),
        },
        sections: { work: { title: "Work" } },
        defaultValues: { work: { team: "Design" } },
        onSubmit: async () => ({ success: true }),
      })

      return <F0Form formDefinition={formDefinition} inline />
    }

    const { container } = render(<PerSectionProfile />)

    expect(
      container.querySelectorAll("[data-slot='inline-field-row']")
    ).toHaveLength(1)
    expect(screen.getByText("Design")).toBeInTheDocument()
  })
})

/** Source-check the prop boundary because test files are excluded from tsc. */
describe("inline prop boundary on the definition overloads", () => {
  const TYPES = join(dirname(fileURLToPath(import.meta.url)), "../types.ts")

  const bodyOf = (name: string): string => {
    const text = readFileSync(TYPES, "utf8")
    const start = text.indexOf(`export interface ${name}`)
    expect(start).toBeGreaterThan(-1)
    const open = text.indexOf("{", start)
    return text.slice(open, text.indexOf("\n}", open))
  }

  it.each([
    "F0FormPropsWithSingleSchema",
    "F0FormPropsWithSingleSchemaDefinition",
    "F0FormPropsWithDefinition",
    "F0FormPropsWithPerSectionSchema",
    "F0FormPropsWithPerSectionDefinition",
  ])("%s accepts inline", (name) => {
    expect(bodyOf(name)).toMatch(/^\s*inline\?: boolean$/m)
  })
})

describe("F0Form inline anchors", () => {
  const anchoredSchema = z.object({
    fullName: f0FormField(z.string().min(3), {
      label: "Full name",
      section: "personal",
    }),
    jobTitle: f0FormField(z.string(), {
      label: "Job title",
      section: "work",
    }),
  })

  const anchoredSections = {
    personal: { title: "Personal" },
    work: { title: "Work" },
  }

  const renderAnchored = (props: Record<string, unknown> = {}) =>
    render(
      <F0Form
        name="anchored"
        inline
        schema={anchoredSchema}
        sections={anchoredSections}
        defaultValues={{ fullName: "Ada Lovelace", jobTitle: "Analyst" }}
        onSubmit={async () => ({ success: true })}
        {...props}
      />
    )

  beforeEach(() => {
    // jsdom reports no offsetParent, which would send the error navigation
    // walking past the row and up to the document.
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      configurable: true,
      get: () => document.body,
    })
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      writable: true,
      value: () => {},
    })
  })

  it("anchors the row itself so it stays a direct child of the card", () => {
    const { container } = renderAnchored()

    const row = document.getElementById("forms.anchored.personal.fullName")
    expect(row).toHaveAttribute("data-slot", "inline-field-row")
    expect(row?.parentElement).toBe(
      container.querySelectorAll("[data-slot='inline-field-row']")[0]
        .parentElement
    )
    expect(document.getElementById("forms.anchored.work")).toBeInTheDocument()
  })

  it("scrolls to a section from the sidepanel", async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(Element.prototype, "scrollTo", {
      configurable: true,
      writable: true,
      value: scrollTo,
    })

    const { container } = renderAnchored({
      styling: { showSectionsSidepanel: true },
    })

    const sidebar = container.querySelector(".sticky") as HTMLElement
    expect(sidebar).toBeInTheDocument()

    await user.click(within(sidebar).getByText("Work"))

    expect(scrollTo).toHaveBeenCalled()
  })

  it("anchors the rows left of the rail, with no rule between them", () => {
    const { container } = renderAnchored({
      styling: { showSectionsSidepanel: true },
    })

    const rail = container.querySelector(".overflow-scroll") as HTMLElement
    const columns = Array.from(rail.children)

    expect(columns.some((c) => c.classList.contains("justify-start"))).toBe(
      true
    )
    expect(columns.some((c) => c.classList.contains("justify-center"))).toBe(
      false
    )
    expect(rail.querySelector(".w-px.bg-f1-border-secondary")).toBeNull()
  })

  it("scrolls to the row that failed validation", async () => {
    const user = userEvent.setup()
    const scrolled: HTMLElement[] = []
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      writable: true,
      value: function scrollIntoViewStub(this: HTMLElement) {
        scrolled.push(this)
      },
    })

    renderAnchored({ errorTriggerMode: "on-change" })

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox", { name: "Full name" })
    await user.clear(input)
    await user.type(input, "Ad")

    await waitFor(() =>
      expect(scrolled).toContain(
        document.getElementById("forms.anchored.personal.fullName")
      )
    )
  })
})
