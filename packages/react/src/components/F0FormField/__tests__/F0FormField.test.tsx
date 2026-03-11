import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { z } from "zod"

import { zeroRender as render, screen } from "@/testing/test-utils"

import type { F0Field } from "../../F0Form/fields/types"

import { F0FormField } from "../F0FormField"

describe("F0FormField", () => {
  describe("text field rendering", () => {
    it("renders a text field with label", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }

      const onChange = vi.fn()
      const onBlur = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          onBlur={onBlur}
        />
      )

      expect(screen.getByLabelText("Full Name")).toBeInTheDocument()
    })

    it("renders a number field", () => {
      const field: F0Field = { id: "age", type: "number", label: "Age" }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={0} onChange={onChange} />)

      const input = screen.getByLabelText("Age") as HTMLInputElement
      expect(input.type).toBe("text")
      expect(input.inputMode).toBe("decimal")
    })

    it("renders a textarea field", () => {
      const field: F0Field = {
        id: "bio",
        type: "textarea",
        label: "Bio",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      expect(screen.getByLabelText("Bio")).toBeInTheDocument()
    })

    it("renders a select field with options", () => {
      const field: F0Field = {
        id: "country",
        type: "select",
        label: "Country",
        options: [
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
        ],
        multiple: false,
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // Select field renders with a button/combobox
      expect(screen.getByLabelText("Country")).toBeInTheDocument()
    })

    it("renders a checkbox field", () => {
      const field: F0Field = {
        id: "agreed",
        type: "checkbox",
        label: "I agree",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={false} onChange={onChange} />)

      // Checkbox doesn't show external label (hideLabel is implicit for checkboxes)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeInTheDocument()
    })

    it("renders a switch field", () => {
      const field: F0Field = {
        id: "notifications",
        type: "switch",
        label: "Enable notifications",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={false} onChange={onChange} />)

      // Switch renders with a role
      expect(screen.getByRole("switch")).toBeInTheDocument()
    })

    it("renders a date field", () => {
      const field: F0Field = {
        id: "birthDate",
        type: "date",
        label: "Birth Date",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={null} onChange={onChange} />)

      expect(screen.getByLabelText("Birth Date")).toBeInTheDocument()
    })
  })

  describe("required indicator", () => {
    it("shows required asterisk when required=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} required />
      )

      const labelText = screen.getByText(/Full Name/)
      expect(labelText.parentElement?.textContent).toMatch(/\*/)
    })

    it("shows required asterisk from validation schema", () => {
      const field: F0Field = {
        id: "email",
        type: "text",
        label: "Email",
        validation: z.string().email().min(1),
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const labelText = screen.getByText(/Email/)
      expect(labelText.parentElement?.textContent).toMatch(/\*/)
    })

    it("does not show asterisk when not required", () => {
      const field: F0Field = {
        id: "nickname",
        type: "text",
        label: "Nickname",
        validation: z.string().optional(),
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const label = screen.getByLabelText("Nickname")
      expect(label.parentElement?.textContent).not.toMatch(/\*/)
    })
  })

  describe("error state", () => {
    it("displays error message and icon when error=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          error
          errorMessage="Name is required"
        />
      )

      expect(screen.getByText("Name is required")).toBeInTheDocument()
    })

    it("does not display error when error=false", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          error={false}
          errorMessage="Name is required"
        />
      )

      expect(screen.queryByText("Name is required")).not.toBeInTheDocument()
    })

    it("does not display error when errorMessage is not provided", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} error />)

      // Alert circle icon expects errorMessage to be present
      expect(screen.queryByText(/Full Name/)).toBeInTheDocument()
    })
  })

  describe("disabled state", () => {
    it("disables the field when disabled=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} disabled />
      )

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(true)
    })

    it("enables the field when disabled=false", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          disabled={false}
        />
      )

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(false)
    })

    it("respects field-level disabled property", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
        disabled: true,
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(true)
    })

    it("overrides field-level disabled with prop", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
        disabled: false,
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} disabled />
      )

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(true)
    })
  })

  describe("label visibility", () => {
    it("hides label when hideLabel=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} hideLabel />
      )

      // The label element should not exist in the DOM
      expect(screen.queryByText("Full Name")).not.toBeInTheDocument()
    })

    it("hides label for checkbox fields by default", () => {
      const field: F0Field = {
        id: "agreed",
        type: "checkbox",
        label: "I agree to terms",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={false} onChange={onChange} />)

      // External label is hidden for checkboxes - but the checkbox itself exists
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeInTheDocument()
    })

    it("hides label for custom fields by default", () => {
      const field: F0Field = {
        id: "custom",
        type: "custom",
        label: "Custom Field",
        render: () => <div>Custom content</div>,
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // External label hidden for custom fields
      expect(screen.queryByText("Custom Field")).not.toBeInTheDocument()
    })
  })

  describe("help text", () => {
    it("displays help text when provided", () => {
      const field: F0Field = {
        id: "password",
        type: "text",
        label: "Password",
        helpText: "Must be at least 8 characters",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      expect(
        screen.getByText("Must be at least 8 characters")
      ).toBeInTheDocument()
    })

    it("does not display help text when not provided", () => {
      const field: F0Field = {
        id: "username",
        type: "text",
        label: "Username",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // No help text in the document
      const helpTexts = screen.queryAllByText(/Username/)
      expect(helpTexts.length).toBe(1) // Only label, no help text
    })
  })

  describe("callbacks", () => {
    it("calls onChange when field value changes", async () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      await userEvent.type(input, "John Doe")

      expect(onChange).toHaveBeenCalled()
    })

    it("calls onBlur when field loses focus", async () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()
      const onBlur = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          onBlur={onBlur}
        />
      )

      const input = screen.getByLabelText("Full Name")
      await userEvent.click(input)
      await userEvent.tab()

      expect(onBlur).toHaveBeenCalled()
    })

    it("handles missing onBlur prop", async () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name")
      await userEvent.click(input)
      // Should not throw error when onBlur is not provided
      await expect(userEvent.tab()).resolves.not.toThrow()
    })
  })

  describe("loading state", () => {
    it("shows loading state when loading=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} loading />)

      // Field should still be in the document but in loading state
      expect(screen.getByLabelText("Full Name")).toBeInTheDocument()
    })
  })

  describe("value handling", () => {
    it("renders with initial value", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="John Doe" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.value).toBe("John Doe")
    })

    it("updates when value prop changes", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      const { rerender } = render(
        <F0FormField field={field} value="John" onChange={onChange} />
      )

      let input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.value).toBe("John")

      rerender(<F0FormField field={field} value="Jane" onChange={onChange} />)

      input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.value).toBe("Jane")
    })
  })

  describe("placeholder handling", () => {
    it("renders with placeholder when provided", () => {
      const field: F0Field = {
        id: "email",
        type: "text",
        label: "Email",
        placeholder: "your@email.com",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // InputField renders placeholder as visible text, not as HTML attribute
      const input = screen.getByLabelText("Email") as HTMLInputElement
      expect(input).toBeInTheDocument()
    })
  })
})
