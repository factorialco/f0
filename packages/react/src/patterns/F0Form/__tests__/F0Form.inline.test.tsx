import userEvent from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { z } from "zod"
import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
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

/**
 * jsdom has no clipboard, and spreading `navigator` to add one drops every
 * prototype getter on it. Define the one property instead.
 */
const stubClipboard = (writeText: () => Promise<void>) =>
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  })

/** The row's activator, which is also what focus comes back to. */
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

  it("keeps the draft on Enter and shows the action bar", async () => {
    const user = userEvent.setup()
    renderProfile()

    await user.click(activator("Full name"))
    const input = await screen.findByRole("textbox")
    await user.clear(input)
    await user.type(input, "Grace Hopper{Enter}")

    await waitFor(() => expect(screen.queryByRole("textbox")).toBeNull())
    expect(screen.getByText("Grace Hopper")).toBeInTheDocument()
    // The floating bar only appears once the form is dirty.
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
    // The row is still the activator; only the pencil is gone.
    expect(activator("Team")).toBeInTheDocument()
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

    // Remounting the box remounts the component inside it, and a component
    // that keeps state across the edit loses it before it can report a change.
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

    // `variant="inline"` at rest renders the value as text and no input at all,
    // so a live textarea holding the value is the proof none of the inline prop
    // bag reached it.
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
    // The hidden field keeps its Controller mounted and so stays in the card as
    // a `<span>`; the divider rule counts rows, which are `div`s.
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
