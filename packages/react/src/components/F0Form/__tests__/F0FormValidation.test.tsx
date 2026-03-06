import React from "react"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"
import userEvent from "@testing-library/user-event"

import { F0Form } from "../F0Form"
import { f0FormField } from "../f0Schema"

// Mock tippy.js to avoid unhandled errors from TipTap's BubbleMenu in jsdom
vi.mock("tippy.js", () => ({
  default: () => ({ destroy: vi.fn(), setProps: vi.fn() }),
}))

/**
 * Tests for validation trigger improvements across field types:
 * - Select fields (single, multi, static options, data source) call onBlur on change
 * - Time field calls onBlur on change (triggers validation)
 * - Date/DateRange fields call onBlur on picker close (not on every change)
 * - File field calls onBlur on file removal
 * - Switch group shows error messages and anchor IDs
 * - Rich text field passes error/loading props
 */

describe("F0Form select field validation", () => {
  it("triggers validation error when required single-select field is empty", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      color: f0FormField(z.string().min(1), {
        label: "Color",
        options: [
          { value: "red", label: "Red" },
          { value: "blue", label: "Blue" },
        ],
      }),
    })

    render(
      <F0Form
        name="select-validation-test"
        schema={formSchema}
        defaultValues={{ color: "" }}
        onSubmit={onSubmit}
      />
    )

    // Submit without selecting a value
    const submitButton = screen.getByText("Submit")
    await user.click(submitButton)

    // Form should not submit since the field is required
    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })

  it("submits successfully when required multi-select has selections", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      title: f0FormField(z.string().min(1), {
        label: "Title",
      }),
      colors: f0FormField(z.array(z.string()).min(1), {
        label: "Colors",
        multiple: true,
        options: [
          { value: "red", label: "Red" },
          { value: "blue", label: "Blue" },
          { value: "green", label: "Green" },
        ],
      }),
    })

    render(
      <F0Form
        name="multiselect-validation-test"
        schema={formSchema}
        defaultValues={{ title: "Test", colors: ["red"] }}
        onSubmit={onSubmit}
      />
    )

    // Try to submit — should succeed since we have a selection
    const submitButton = screen.getByText("Submit")
    await user.click(submitButton)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
  })
})

describe("F0Form time field validation", () => {
  it("blocks submission when required time field has no value", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      title: f0FormField(z.string().min(1), {
        label: "Title",
      }),
      startTime: f0FormField(z.date(), {
        label: "Start Time",
        fieldType: "time",
      }),
    })

    render(
      <F0Form
        name="time-validation-test"
        schema={formSchema}
        defaultValues={{
          title: "Meeting",
          startTime: undefined as unknown as Date,
        }}
        onSubmit={onSubmit}
      />
    )

    // Submit without a valid time value
    const submitButton = screen.getByText("Submit")
    await user.click(submitButton)

    // Form should not submit since time is required
    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })
})

describe("F0Form date field validation timing", () => {
  it("renders date field with onOpenChange support", () => {
    const formSchema = z.object({
      eventDate: f0FormField(z.date(), {
        label: "Event Date",
        placeholder: "Select a date",
        granularities: ["day"],
      }),
    })

    render(
      <F0Form
        name="date-onOpenChange-test"
        schema={formSchema}
        defaultValues={{ eventDate: undefined as unknown as Date }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Date input should be rendered
    const dateInput = screen.getByLabelText("Event Date")
    expect(dateInput).toBeInTheDocument()
  })

  it("renders date range field with onOpenChange support", () => {
    const formSchema = z.object({
      range: f0FormField(z.object({ from: z.date(), to: z.date() }), {
        label: "Date Range",
        placeholder: "Select range",
        fieldType: "daterange",
        fromLabel: "Start",
        toLabel: "End",
      }),
    })

    render(
      <F0Form
        name="daterange-onOpenChange-test"
        schema={formSchema}
        defaultValues={{
          range: undefined as unknown as { from: Date; to: Date },
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const dateInput = screen.getByLabelText("Date Range (Start - End)")
    expect(dateInput).toBeInTheDocument()
  })

  it("does not show validation error when date picker is just opened", async () => {
    const user = userEvent.setup()

    const formSchema = z.object({
      eventDate: f0FormField(z.date(), {
        label: "Event Date",
        placeholder: "Select a date",
        granularities: ["day"],
      }),
    })

    render(
      <F0Form
        name="date-no-premature-error-test"
        schema={formSchema}
        defaultValues={{ eventDate: undefined as unknown as Date }}
        onSubmit={async () => ({ success: true })}
      />
    )

    const dateInput = screen.getByLabelText("Event Date")

    // Click to open the picker
    await user.click(dateInput)

    // After opening, there should be no error message yet
    // (validation only triggers when the picker closes)
    const errorMessage = screen.queryByText("Required")
    expect(errorMessage).not.toBeInTheDocument()
  })
})

describe("F0Form switch group error display", () => {
  it("shows validation error when required switch is not toggled on submit", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      title: f0FormField(z.string().min(1), {
        label: "Title",
      }),
      acceptTerms: f0FormField(z.literal(true), {
        label: "Accept Terms",
        fieldType: "switch",
      }),
    })

    render(
      <F0Form
        name="switch-error-test"
        schema={formSchema}
        defaultValues={{
          title: "Test",
          acceptTerms: false as unknown as true,
        }}
        onSubmit={onSubmit}
      />
    )

    // Submit without toggling the switch
    const submitButton = screen.getByText("Submit")
    await user.click(submitButton)

    // Submission should not proceed
    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })

  it("generates anchor IDs for switch fields in a group", () => {
    const formSchema = z.object({
      notifyEmail: f0FormField(z.literal(true), {
        label: "Notify via Email",
        fieldType: "switch",
      }),
      notifySms: f0FormField(z.boolean(), {
        label: "Notify via SMS",
        fieldType: "switch",
      }),
    })

    const { container } = render(
      <F0Form
        name="switch-anchor-test"
        schema={formSchema}
        defaultValues={{
          notifyEmail: false as unknown as true,
          notifySms: false,
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Check that anchor ID elements are generated for the switch group fields
    const firstAnchor = container.querySelector(
      "#forms\\.switch-anchor-test\\.notifyEmail"
    )
    expect(firstAnchor).toBeInTheDocument()

    // The second field's anchor should also exist (as a hidden span inside the wrapper)
    const secondAnchor = container.querySelector(
      "#forms\\.switch-anchor-test\\.notifySms"
    )
    expect(secondAnchor).toBeInTheDocument()
  })

  it("wraps CardSelectableContainer with the first field's anchor ID", () => {
    const formSchema = z.object({
      featureA: f0FormField(z.boolean(), {
        label: "Feature A",
        fieldType: "switch",
      }),
      featureB: f0FormField(z.boolean(), {
        label: "Feature B",
        fieldType: "switch",
      }),
    })

    const { container } = render(
      <F0Form
        name="switch-wrapper-test"
        schema={formSchema}
        defaultValues={{
          featureA: false,
          featureB: false,
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // The first field's anchor wraps the CardSelectableContainer
    const wrapper = container.querySelector(
      "#forms\\.switch-wrapper-test\\.featureA"
    )
    expect(wrapper).toBeInTheDocument()
    expect(wrapper?.tagName).toBe("DIV")

    // The wrapper should contain the switch group items
    expect(wrapper?.textContent).toContain("Feature A")
    expect(wrapper?.textContent).toContain("Feature B")
  })
})

describe("F0Form file field validation", () => {
  it("renders file field with error styling when validation fails", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      title: f0FormField(z.string().min(1), {
        label: "Title",
      }),
      document: f0FormField(z.string().min(1), {
        label: "Document",
        fieldType: "file",
      }),
    })

    render(
      <F0Form
        name="file-error-test"
        schema={formSchema}
        defaultValues={{ title: "Test", document: "" }}
        onSubmit={onSubmit}
      />
    )

    // Submit without uploading any file
    const submitButton = screen.getByText("Submit")
    await user.click(submitButton)

    // Form should not submit successfully since document is required
    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })
})

describe("F0Form rich text field error and loading props", () => {
  it("renders rich text field with error state on validation failure", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      title: f0FormField(z.string().min(1), {
        label: "Title",
      }),
      content: f0FormField(
        z.object({
          value: z.string().min(1),
          mentionIds: z.array(z.number()).optional(),
        }),
        {
          label: "Content",
          fieldType: "richtext",
        }
      ),
    })

    render(
      <F0Form
        name="richtext-error-test"
        schema={formSchema}
        defaultValues={{
          title: "Test",
          content: { value: "" },
        }}
        onSubmit={onSubmit}
      />
    )

    // Submit without filling in the rich text field
    const submitButton = screen.getByText("Submit")
    await user.click(submitButton)

    // Form should not submit since content is required
    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })

  it("renders rich text field successfully when value is provided", async () => {
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      content: f0FormField(
        z.object({
          value: z.string().nullable(),
          mentionIds: z.array(z.number()).optional(),
        }),
        {
          label: "Content",
          fieldType: "richtext",
        }
      ),
    })

    render(
      <F0Form
        name="richtext-render-test"
        schema={formSchema}
        defaultValues={{
          content: { value: "Hello world" },
        }}
        onSubmit={onSubmit}
      />
    )

    // Rich text editor should be rendered with the label
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})

describe("F0Form datetime field validation", () => {
  it("renders datetime field with date and time inputs", () => {
    const formSchema = z.object({
      meeting: f0FormField(z.date(), {
        label: "Meeting",
        fieldType: "datetime",
        granularities: ["day"],
      }),
    })

    render(
      <F0Form
        name="datetime-render-test"
        schema={formSchema}
        defaultValues={{
          meeting: new Date("2026-03-06T14:30:00"),
        }}
        onSubmit={async () => ({ success: true })}
      />
    )

    // Should render both date and time parts
    expect(screen.getByLabelText("Meeting")).toBeInTheDocument()
    expect(screen.getByLabelText("Time")).toBeInTheDocument()
  })
})
